import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import {
  ArrowRight,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Printer,
} from "lucide-react";
import {
  CONTACT_DETAILS,
  CONTACT_ENQUIRY_TYPES,
  CONTACT_MAPS,
  type ContactEnquiryType,
} from "@app/data/content";

import { ContactMap } from "@app/components/ContactMap";

import type {
  Language,
  Page,
  Translator,
} from "@app/types";
import { LatestNewsStrip } from "@app/components/LatestNewsStrip";
import {
  SectionHeading,
  SectionLabel,
} from "@app/components/Section";

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  type: ContactEnquiryType;
  message: string;
};

function ContactInfoItem({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <div
        className="
          w-11
          h-11
          shrink-0
          rounded-xl
          bg-orange-50
          flex
          items-center
          justify-center
          text-[#F28C55]
        "
      >
        {icon}
      </div>

      <div className="leading-tight">
        <p
          className="
            text-xs
            uppercase
            tracking-[0.18em]
            text-gray-500
            mb-0.5
          "
        >
          {label}
        </p>

        {children}
      </div>
    </div>
  );
}

export function ContactPage({
  navigate,
  language,
  t,
}: {
  navigate: (page: Page) => void;
  language: Language;
  t: Translator;
}) {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    phone: "",
    organization: "",
    type: "general",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [captchaToken] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const contactMap = CONTACT_MAPS[language];

  const selectedEnquiryType =
    CONTACT_ENQUIRY_TYPES.find(
      (item) => item.id === form.type,
    ) ?? CONTACT_ENQUIRY_TYPES[0];

  const updateForm = <Key extends keyof ContactFormState>(
    key: Key,
    value: ContactFormState[Key],
  ) => {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const captchaEnabled = Boolean(
      import.meta.env.VITE_RECAPTCHA_SITE_KEY,
    );

    if (captchaEnabled && !captchaToken) {
      window.alert(
        t("contact.form.captchaRequired"),
      );

      return;
    }

    // Send form and captchaToken to the backend here.
    setSent(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(false);
      }
    };

    window.addEventListener(
      "mousedown",
      handleClickOutside,
    );

    return () => {
      window.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
    };
  }, []);

  return (
    <div className="pt-24">
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-16">
          <SectionLabel>
            {t("contact.header.label")}
          </SectionLabel>

          <SectionHeading>
            {t("contact.header.title")}
          </SectionHeading>
        </div>

        {/* Contact information and map */}
        <div
          className="
            grid
            lg:grid-cols-2
            gap-12
            items-stretch
            mb-20
          "
        >
          <div>
            <p className="text-muted-foreground leading-8 mb-10 max-w-xl">
              {t("contact.header.description")}
            </p>

            <div className="space-y-4">
              <ContactInfoItem
                label={t("contact.details.email")}
                icon={
                  <Mail
                    size={20}
                    strokeWidth={2.3}
                  />
                }
              >
                <a
                  href={CONTACT_DETAILS.emailHref}
                  className="
                    font-medium
                    text-slate-900
                    hover:text-primary
                    transition
                  "
                >
                  {CONTACT_DETAILS.email}
                </a>
              </ContactInfoItem>

              <ContactInfoItem
                label={t("contact.details.phone")}
                icon={
                  <Phone
                    size={20}
                    strokeWidth={2.3}
                  />
                }
              >
                <a
                  href={CONTACT_DETAILS.phoneHref}
                  className="
                    font-medium
                    text-slate-900
                    hover:text-primary
                    transition
                  "
                >
                  {CONTACT_DETAILS.phone}
                </a>
              </ContactInfoItem>

              <ContactInfoItem
                label={t("contact.details.fax")}
                icon={
                  <Printer
                    size={20}
                    strokeWidth={2.3}
                  />
                }
              >
                <a
                  href={CONTACT_DETAILS.faxHref}
                  className="
                    font-semibold
                    text-slate-900
                    hover:text-primary
                    transition
                  "
                >
                  {CONTACT_DETAILS.fax}
                </a>
              </ContactInfoItem>

              <ContactInfoItem
                label={t("contact.details.office")}
                icon={
                  <MapPin
                    size={20}
                    strokeWidth={2.3}
                  />
                }
              >
                <a
                  href={contactMap.openUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    font-semibold
                    text-slate-900
                    hover:text-primary
                    transition
                    leading-relaxed
                  "
                >
                  {language === "zh" ? (
                    <span className="sm:whitespace-nowrap">
                      {t("contact.details.addressFull")}
                    </span>
                  ) : (
                    <>
                      {t("contact.details.addressLine1")}
                      <br />
                      {t("contact.details.addressLine2")}
                    </>
                  )}
                </a>
              </ContactInfoItem>
            </div>
          </div>

          <div
            className="
              rounded-3xl
              overflow-hidden
              border
              border-border
              shadow-lg
              h-[420px]
            "
          >
            <ContactMap
              language={language}
              title={t("contact.map.title")}
              companyName={t(
                "contact.map.companyName",
              )}
              logoAlt={t(
                "contact.map.logoAlt",
              )}
              addressLine1={
                language === "en"
                  ? t("contact.details.addressLine1")
                  : undefined
              }
              addressLine2={
                language === "en"
                  ? t("contact.details.addressLine2")
                  : undefined
              }
              addressFull={
                language === "zh"
                  ? t("contact.details.addressFull")
                  : undefined
              }
              openMapLabel={t(
                "contact.map.openMap",
              )}
            />
          </div>
        </div>

        {/* Contact form */}
        <div
          className="
            bg-card
            border
            border-border
            rounded-[36px]
            shadow-sm
            p-6
            md:p-10
          "
        >
          {sent ? (
            <div className="py-20 flex flex-col items-center text-center">
              <div
                className="
                  w-16
                  h-16
                  rounded-full
                  bg-accent
                  flex
                  items-center
                  justify-center
                  text-3xl
                  mb-6
                "
              >
                ✓
              </div>

              <h3
                className="text-2xl font-bold mb-3"
                style={{
                  fontFamily:
                    "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {t("contact.success.title")}
              </h3>

              <p className="text-muted-foreground mb-6 max-w-md">
                {t("contact.success.description")}
              </p>

              <button
                type="button"
                onClick={() => setSent(false)}
                className="
                  text-primary
                  underline
                  underline-offset-4
                "
              >
                {t("contact.success.sendAnother")}
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <div>
                <h3
                  className="text-3xl font-bold mb-3"
                  style={{
                    fontFamily:
                      "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {t("contact.form.title")}
                </h3>

                <p className="text-muted-foreground">
                  {t("contact.form.description")}
                </p>
              </div>

              {/* Enquiry type */}
              <div className="max-w-sm">
                <label
                  className="
                    block
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-muted-foreground
                    mb-2
                  "
                >
                  {t("contact.form.enquiryType")}
                </label>

                <div
                  ref={dropdownRef}
                  className="relative max-w-sm"
                >
                  <button
                    type="button"
                    aria-expanded={openDropdown}
                    onClick={() =>
                      setOpenDropdown((current) => !current)
                    }
                    className="
                      w-full
                      h-14
                      rounded-full
                      border
                      border-black
                      bg-white
                      px-6
                      flex
                      items-center
                      justify-between
                      text-gray-700
                      transition
                    "
                  >
                    <span>
                      {t(selectedEnquiryType.labelKey)}
                    </span>

                    <ChevronDown
                      size={18}
                      className={`
                        transition-transform
                        ${
                          openDropdown
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    />
                  </button>

                  {openDropdown && (
                    <div
                      className="
                        absolute
                        left-0
                        right-0
                        mt-1
                        overflow-hidden
                        rounded-[28px]
                        bg-white
                        border
                        border-gray-300
                        shadow-xl
                        z-50
                      "
                    >
                      {CONTACT_ENQUIRY_TYPES.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => {
                            updateForm("type", item.id);
                            setOpenDropdown(false);
                          }}
                          className={`
                            w-full
                            px-6
                            py-4
                            text-center
                            border-b
                            last:border-b-0
                            transition
                            ${
                              form.type === item.id
                                ? "bg-primary/10 text-primary font-semibold"
                                : "hover:bg-slate-100"
                            }
                          `}
                        >
                          {t(item.labelKey)}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Basic information */}
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder={t(
                    "contact.form.placeholders.name",
                  )}
                  aria-label={t(
                    "contact.form.placeholders.name",
                  )}
                  required
                  value={form.name}
                  onChange={(event) =>
                    updateForm(
                      "name",
                      event.target.value,
                    )
                  }
                  className="
                    rounded-full
                    bg-slate-100
                    border-0
                    h-14
                    px-6
                    focus-visible:ring-2
                    focus-visible:ring-primary
                  "
                />

                <input
                  type="email"
                  placeholder={t(
                    "contact.form.placeholders.email",
                  )}
                  aria-label={t(
                    "contact.form.placeholders.email",
                  )}
                  required
                  value={form.email}
                  onChange={(event) =>
                    updateForm(
                      "email",
                      event.target.value,
                    )
                  }
                  className="
                    rounded-full
                    bg-slate-100
                    border-0
                    h-14
                    px-6
                    focus-visible:ring-2
                    focus-visible:ring-primary
                  "
                />

                <input
                  type="tel"
                  placeholder={t(
                    "contact.form.placeholders.phone",
                  )}
                  aria-label={t(
                    "contact.form.placeholders.phone",
                  )}
                  value={form.phone}
                  onChange={(event) =>
                    updateForm(
                      "phone",
                      event.target.value,
                    )
                  }
                  className="
                    rounded-full
                    bg-slate-100
                    border-0
                    h-14
                    px-6
                    focus-visible:ring-2
                    focus-visible:ring-primary
                  "
                />

                <input
                  type="text"
                  placeholder={t(
                    "contact.form.placeholders.organization",
                  )}
                  aria-label={t(
                    "contact.form.placeholders.organization",
                  )}
                  value={form.organization}
                  onChange={(event) =>
                    updateForm(
                      "organization",
                      event.target.value,
                    )
                  }
                  className="
                    rounded-full
                    bg-slate-100
                    border-0
                    h-14
                    px-6
                    focus-visible:ring-2
                    focus-visible:ring-primary
                  "
                />
              </div>

              <textarea
                rows={6}
                required
                placeholder={t(
                  "contact.form.placeholders.message",
                )}
                aria-label={t(
                  "contact.form.placeholders.message",
                )}
                value={form.message}
                onChange={(event) =>
                  updateForm(
                    "message",
                    event.target.value,
                  )
                }
                className="
                  w-full
                  rounded-3xl
                  bg-slate-100
                  border-0
                  px-6
                  py-5
                  resize-none
                  focus-visible:ring-2
                  focus-visible:ring-primary
                "
              />

              {/* reCAPTCHA can be added here */}

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    px-10
                    py-4
                    text-white
                    font-semibold
                    bg-gradient-to-r
                    from-[#F39B61]
                    to-[#E87C4A]
                    hover:scale-105
                    transition-all
                    duration-300
                    shadow-lg
                  "
                >
                  {t("contact.form.submit")}

                  <ArrowRight
                    size={18}
                    strokeWidth={2.5}
                  />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <LatestNewsStrip
        navigate={navigate}
        t={t}
      />
    </div>
  );
}