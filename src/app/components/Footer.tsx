import {
  Mail,
  MapPin,
  Phone,
  Printer,
} from "lucide-react";
import {
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import {
  BiLogoLinkedinSquare,
} from "react-icons/bi";

import {
  CONTACT_DETAILS,
  CONTACT_MAPS,
  FOOTER_LINKS,
  NAV_ITEMS,
} from "@app/data/content";

import type {
  Language,
  Page,
  Translator,
} from "@app/types";

import {
  BrandLogo,
} from "@app/components/BrandLogo";

export function Footer({
  navigate,
  language,
  t,
}: {
  navigate: (page: Page) => void;
  language: Language;
  t: Translator;
}) {
  const contactMap =
    CONTACT_MAPS[language];

  const currentYear =
    new Date().getFullYear();

  return (
    <footer className="bg-[#141827] text-white">
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-16
          grid
          grid-cols-1
          md:grid-cols-[1.4fr_1fr_1fr]
          gap-16
        "
      >
        {/* Left column */}
        <div>
          <button
            type="button"
            onClick={() => navigate("home")}
            aria-label={t("footer.brandName")}
            className="
              group
              mb-8
              inline-flex
              items-center
              rounded-lg
              text-left
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[#141827]
            "
          >
            <BrandLogo
              variant="footer"
              footerTone="coral"
              className="
                transition-transform
                duration-300
                group-hover:scale-[1.02]
              "
            />
          </button>

          <div className="space-y-3.5 text-sm">
            {/* Email */}
            <a
              href={CONTACT_DETAILS.emailHref}
              className="
                flex
                items-center
                gap-3
                ml-2
                text-white/70
                hover:text-primary
                transition
              "
            >
              <Mail
                size={18}
                className="text-primary shrink-0"
              />

              <span>
                {CONTACT_DETAILS.email}
              </span>
            </a>

            {/* Phone */}
            <a
              href={CONTACT_DETAILS.phoneHref}
              className="
                flex
                items-center
                gap-3
                ml-2
                text-white/70
                hover:text-primary
                transition
              "
            >
              <Phone
                size={18}
                className="text-primary shrink-0"
              />

              <span>
                {CONTACT_DETAILS.phone}
              </span>
            </a>

            {/* Fax */}
            <a
              href={CONTACT_DETAILS.faxHref}
              className="
                flex
                items-center
                gap-3
                ml-2
                text-white/70
                hover:text-primary
                transition
              "
            >
              <Printer
                size={18}
                className="text-primary shrink-0"
              />

              <span>
                {CONTACT_DETAILS.fax}
              </span>
            </a>

            {/* Address */}
            <a
              href={contactMap.openUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-start
                gap-3
                ml-2
                text-white/70
                hover:text-primary
                transition
              "
            >
              <MapPin
                size={18}
                className="
                  text-primary
                  mt-1
                  shrink-0
                "
              />

              {language === "zh" ? (
                <span className="leading-relaxed">
                  {t(
                    "contact.details.addressFull",
                  )}
                </span>
              ) : (
                <span className="leading-relaxed">
                  {t(
                    "contact.details.addressLine1",
                  )}

                  <br />

                  {t(
                    "contact.details.addressLine2",
                  )}
                </span>
              )}
            </a>
          </div>
        </div>

        {/* Company navigation */}
        <div>
          <p
            className="
              text-xs
              font-semibold
              tracking-widest
              uppercase
              text-white/40
              mb-4
            "
          >
            {t("footer.companyHeading")}
          </p>

          <ul className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.page}>
                <button
                  type="button"
                  onClick={() =>
                    navigate(item.page)
                  }
                  className="
                    text-[15px]
                    text-white/70
                    hover:text-primary
                    transition-colors
                    cursor-pointer
                  "
                >
                  {t(item.key)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Get in touch */}
        <div>
          <p
            className="
              text-xs
              font-semibold
              tracking-widest
              uppercase
              text-white/40
              mb-4
            "
          >
            {t("footer.getInTouchHeading")}
          </p>

          <div className="flex flex-col gap-3">
            <a
              href={FOOTER_LINKS.careersUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-left
                text-[15px]
                text-white/70
                hover:text-primary
                transition
              "
            >
              {t("footer.careers")}
            </a>

            <button
              type="button"
              onClick={() =>
                navigate("contact")
              }
              className="
                text-left
                text-[15px]
                text-white/70
                hover:text-primary
                transition
              "
            >
              {t("footer.contactUs")}
            </button>
          </div>

          {/* Social links */}
          <div className="mt-8 flex items-center gap-3">
            {FOOTER_LINKS.social.map(
              (social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t(
                    social.labelKey,
                  )}
                  title={t(
                    social.labelKey,
                  )}
                  className="
                    text-white
                    hover:text-primary
                    hover:scale-110
                    transition-all
                    duration-300
                  "
                >
                  {social.id === "linkedin" && (
                    <BiLogoLinkedinSquare
                      size={30}
                    />
                  )}

                  {social.id === "x" && (
                    <FaXTwitter
                      size={22}
                    />
                  )}

                  {social.id === "youtube" && (
                    <FaYoutube
                      size={30}
                    />
                  )}
                </a>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div
        className="
          border-t
          border-white/10
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-2
          text-xs
          text-white/30
        "
      >
        <span>
          © {currentYear}{" "}
          {t("footer.copyrightCompany")}{" "}
          {t("footer.allRightsReserved")}
        </span>

        <div className="flex gap-4">
          <a
            href={FOOTER_LINKS.privacyUrl}
            className="
              hover:text-white/60
              transition-colors
            "
          >
            {t("footer.privacyPolicy")}
          </a>

          <a
            href={FOOTER_LINKS.termsUrl}
            className="
              hover:text-white/60
              transition-colors
            "
          >
            {t("footer.termsOfUse")}
          </a>
        </div>
      </div>
    </footer>
  );
}