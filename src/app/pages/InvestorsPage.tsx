import {
  useEffect,
  useRef,
  type Dispatch,
  type SetStateAction,
} from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  INVESTOR_CONTENT,
  INVESTOR_LANDING_CARDS,
} from "@app/data/content";
import {
  SectionHeading,
  SectionLabel,
} from "@app/components/Section";
import type {
  InvestorSection,
  Page,
  Translator,
} from "@app/types";

export function InvestorsPage({
  navigate,
  activeSection,
  setActiveSection,
  t,
}: {
  navigate: (page: Page) => void;

  activeSection: InvestorSection | null;

  setActiveSection: Dispatch<
    SetStateAction<InvestorSection | null>
  >;

  t: Translator;
}) {
  const contentRef = useRef<HTMLElement | null>(null);

  const content = activeSection
    ? INVESTOR_CONTENT[activeSection]
    : null;

  useEffect(() => {
    if (!activeSection) {
      return;
    }

    window.requestAnimationFrame(() => {
      contentRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [activeSection]);

  const returnToInvestorHome = () => {
    setActiveSection(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-background pt-[116px]">
      {activeSection === null && (
        <section className="bg-background py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <SectionLabel>
                {t("investors.landing.label")}
              </SectionLabel>

              <SectionHeading>
                {t("investors.landing.title")}
              </SectionHeading>

              <p className="mt-5 text-muted-foreground leading-relaxed">
                {t("investors.landing.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
              {INVESTOR_LANDING_CARDS.map((card) => (
                <button
                  key={card.id}
                  type="button"
                  onClick={() =>
                    setActiveSection(card.section)
                  }
                  className="
                    rounded-2xl
                    border
                    border-border
                    bg-card
                    p-7
                    text-left
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-primary/50
                    hover:shadow-md
                  "
                >
                  <h3
                    className="
                      text-lg
                      font-bold
                      text-foreground
                    "
                    style={{
                      fontFamily:
                        "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {t(card.titleKey)}
                  </h3>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {t(card.descriptionKey)}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection && content && (
        <section
          ref={contentRef}
          role="tabpanel"
          className="
            scroll-mt-[120px]
            bg-background
            py-16
            md:py-20
          "
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mb-12">
              <div className="mb-9">
                <button
                  type="button"
                  onClick={returnToInvestorHome}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    text-sm
                    font-semibold
                    text-primary
                    transition-colors
                    hover:text-[#e87c4a]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-primary
                    focus-visible:ring-offset-2
                  "
                >
                  <span
                    className="
                      inline-flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-primary/30
                      bg-primary/10
                      text-primary
                      transition-all
                      duration-300
                      group-hover:-translate-x-0.5
                      group-hover:border-primary
                      group-hover:bg-primary
                      group-hover:text-white
                    "
                  >
                    <ArrowLeft
                      size={16}
                      strokeWidth={2.4}
                    />
                  </span>

                  <span
                    className="
                      relative
                      after:absolute
                      after:left-0
                      after:right-0
                      after:-bottom-1
                      after:h-px
                      after:origin-left
                      after:scale-x-0
                      after:bg-current
                      after:transition-transform
                      after:duration-300
                      group-hover:after:scale-x-100
                    "
                  >
                    {t("investors.common.back")}
                  </span>
                </button>
              </div>

              <div className="mb-4">
                <SectionLabel>
                  {t(content.labelKey)}
                </SectionLabel>
              </div>

              <SectionHeading>
                {t(content.titleKey)}
              </SectionHeading>

              <p className="mt-5 max-w-3xl text-muted-foreground leading-relaxed">
                {t(content.descriptionKey)}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {content.cards.map((card) => (
                <article
                  key={card.id}
                  className="
                    rounded-2xl
                    border
                    border-border
                    bg-card
                    p-7
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-primary/50
                    hover:shadow-md
                  "
                >
                  <h3
                    className="text-lg font-bold text-foreground"
                    style={{
                      fontFamily:
                        "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {t(card.titleKey)}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t(card.descriptionKey)}
                  </p>
                </article>
              ))}
            </div>

            {activeSection === "contact" && (
              <div className="mt-10">
                <button
                  type="button"
                  onClick={() => navigate("contact")}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-primary
                    px-6
                    py-3
                    text-sm
                    font-bold
                    text-white
                    transition-colors
                    hover:bg-[#e08860]
                  "
                >
                  {t("investors.common.contactTeam")}
                  <ArrowRight size={15} />
                </button>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}