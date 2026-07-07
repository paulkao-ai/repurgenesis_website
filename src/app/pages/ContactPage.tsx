import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, ChevronDown, Mail, MapPin, Phone, Printer } from "lucide-react";
import type { Page, Translator } from "@app/types";
import { LatestNewsStrip } from "@app/components/LatestNewsStrip";
import { SectionHeading, SectionLabel } from "@app/components/Section";

export function ContactPage({
  navigate,
  t,
}: {
  navigate: (p: Page) => void;
  t: Translator;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    type: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const [captchaToken] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const captchaEnabled = Boolean(import.meta.env.VITE_RECAPTCHA_SITE_KEY);

    if (captchaEnabled && !captchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    // TODO:
    // Send captchaToken together with the form
    // to your backend for verification.

    setSent(true);
  };

  const [openDropdown, setOpenDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const enquiryTypes = [
    "General",
    "Partnerships",
    "Investors",
    "Careers",
    "Others",
  ];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(false);
      }

    }

    window.addEventListener("mousedown", handleClickOutside);

    return () =>
      window.removeEventListener("mousedown", handleClickOutside);

  }, []);

  return (
    <div className="pt-24">

      <section className="max-w-7xl mx-auto px-6 py-20">

        {/* ===========================
            Header
        ============================ */}

        <div className="mb-16">

          <SectionLabel>
            Contact Us
          </SectionLabel>

          <SectionHeading>
            Let's Talk !
          </SectionHeading>

        </div>

        {/* ===========================
            Contact + Map
        ============================ */}

        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-20">

          {/* LEFT */}
          <div>
            <p className="text-muted-foreground leading-8 mb-10 max-w-xl">
              We would love to hear from you!
              Whether you're interested in partnerships,
              research collaboration,
              investment opportunities,
              or media inquiries,
              our team is ready to help.
            </p>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex gap-3">
                <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center">
                  <Mail
                      size={20}
                      strokeWidth={2.3}
                      className="text-[#F28C55]"
                  />
                </div>

                <div className="leading-tight">
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-500 mb-0.5">
                    Email
                  </p>
                  <a
                    href="mailto:rp@repurgenesis.com"
                    className="font-medium text-slate-900 hover:text-primary transition">
                    rp@repurgenesis.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">

                <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center">
                  <Phone
                    size={20}
                    strokeWidth={2.3}
                    className="text-[#F28C55]"
                  />
                </div>

                <div className="leading-tight">
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-500 mb-0.5">
                    Phone
                  </p>
                  <a
                    href="tel:+886287511368"
                    className="font-medium text-slate-900 hover:text-primary transition">
                    (+886) 2-8751-1368
                  </a>
                </div>
              </div>


              {/* Fax */}
              <div className="flex gap-3">
                <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center">
                  <Printer
                    size={20}
                    strokeWidth={2.3}
                    className="text-[#F28C55]"
                  />
                </div>

                <div className="leading-tight">
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-500 mb-0.5">
                    Fax
                  </p>
                  <a
                    href="tel:+886287511368"
                    className="font-semibold hover:text-primary transition">
                    (+886) 2-8751-1369
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-3">
                <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center">
                  <MapPin
                    size={20}
                    strokeWidth={2.3}
                    className="text-[#F28C55]"
                  />
                </div>

                <div className="leading-tight">
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-500 mb-0.5">
                    Office
                  </p>
                  <a
                    href="https://www.google.com/maps/place/114%E8%87%BA%E5%8C%97%E5%B8%82%E5%85%A7%E6%B9%96%E5%8D%80%E8%A5%BF%E6%B9%96%E9%87%8C%E7%91%9E%E5%85%89%E8%B7%AF583%E5%B7%B721%E8%99%9F6%E8%99%9F/@25.0806552,121.5677563,17z/data=!3m1!4b1!4m6!3m5!1s0x3442ac6e503fe32f:0x7da3370519a2ea77!8m2!3d25.0806552!4d121.5677563!16s%2Fg%2F11j599g637?hl=zh-TW&entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
                    // https://maps.google.com/?q=114台北市內湖區瑞光路583巷21號6樓
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:text-primary transition"
                  >
                    Neihu Technology Park  6F., No.21, Ln. 583, Ruiguang Rd.,
                    <br />
                    Neihu Dist., Taipei City 114694, Taiwan
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="rounded-3xl overflow-hidden border border-border shadow-lg h-[420px]">

            <iframe
              title="Repurgenesis Office"
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.406543798509!2d121.56711256963231!3d25.080656413266407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac6e503fe32f%3A0x7da3370519a2ea77!2zMTE06Ie65YyX5biC5YWn5rmW5Y2A6KW_5rmW6YeM55Ge5YWJ6LevNTgz5be3MjHomZ826Jmf!5e0!3m2!1szh-TW!2stw!4v1782980777615!5m2!1szh-TW!2stw"
            />

          </div>

        </div>

        {/* ===========================
            Contact Form
        ============================ */}

        <div className="bg-card border border-border rounded-[36px] shadow-sm p-10">

          {sent ? (

            <div className="py-20 flex flex-col items-center text-center">

              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-3xl mb-6">
                ✓
              </div>

              <h3
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Message Sent!
              </h3>

              <p className="text-muted-foreground mb-6 max-w-md">
                Thank you for contacting us.
                Our team will get back to you as soon as possible.
              </p>

              <button
                onClick={() => setSent(false)}
                className="text-primary underline"
              >
                Send another message
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
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Send us a message
                </h3>

                <p className="text-muted-foreground">
                  Fill in the form below and our team will respond shortly.
                </p>

              </div>

              {/* Enquiry Type */}

              <div className="max-w-sm">

              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                QUESTION TYPE
              </label>

              <div 
                ref={dropdownRef}
                className="relative max-w-sm">

                <button
                  type="button"
                  onClick={() => setOpenDropdown(!openDropdown)}
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
                    {form.type || "General"}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      openDropdown ? "rotate-180" : ""
                    }`}
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

                    {enquiryTypes.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => {
                          setForm({
                            ...form,
                            type: item,
                          });

                          setOpenDropdown(false);
                        }}
                        className="
                          w-full
                          px-6
                          py-4
                          text-center
                          hover:bg-slate-100
                          border-b
                          last:border-b-0
                          transition
                        "
                      >
                        {item}
                      </button>

                    ))}

                  </div>

                )}

              </div>

            </div>
              
              {/* Name + Email */}

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  placeholder="Your name *"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  className="rounded-full bg-slate-100 border-0 h-14 px-6 focus-visible:ring-2 focus-visible:ring-primary"
                />

                <input
                  type="email"
                  placeholder="Your email *"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  className="rounded-full bg-slate-100 border-0 h-14 px-6 focus-visible:ring-2 focus-visible:ring-primary"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone: e.target.value,
                    })
                  }
                  className="rounded-full bg-slate-100 border-0 h-14 px-6 focus-visible:ring-2 focus-visible:ring-primary"
                />

                <input
                  type="text"
                  placeholder="Organization"
                  value={form.organization}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      organization: e.target.value,
                    })
                  }
                  className="rounded-full bg-slate-100 border-0 h-14 px-6 focus-visible:ring-2 focus-visible:ring-primary"
                />

              </div>

              {/* Message */}
              <div>
                <textarea
                  rows={6}
                  required
                  placeholder="Tell us about your project or question ..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
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

              </div>

              {/* reCAPTCHA */}
              {/* <div className="flex justify-center my-6">
                <div className="scale-95 origin-center">
                  <ReCAPTCHA
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                    onChange={(token) => setCaptchaToken(token)}
                  />
                </div>
              </div> */}

              {/* Submit */}

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
                  Send Message

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

      {/* Latest News */}

      <LatestNewsStrip
        navigate={navigate}
        t={t}
      />

    </div>
  );
}
