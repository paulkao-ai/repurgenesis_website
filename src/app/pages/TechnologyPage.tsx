import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import { TECHNOLOGY_CARDS, steps } from "@app/data/content";
import { SectionHeading, SectionLabel } from "@app/components/Section";
import type { Translator, Language } from "@app/types";

export function TechnologyPage({
  t,
  language,
}: {
  t: Translator;
  language: Language;
}) {
  return (
    <div className="pt-24">
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <SectionLabel>{t("technology.hero.label")}</SectionLabel>
        <SectionHeading>{t("technology.hero.title")}</SectionHeading>
        <p className="mx-auto mt-4 max-w-4xl leading-relaxed text-muted-foreground">
          {t("technology.hero.description")}
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {TECHNOLOGY_CARDS.map((card) => (
            <article
              key={card.id}
              className="
                flex flex-col items-center text-center
                rounded-2xl border border-border bg-card p-7
                transition-shadow hover:shadow-md
              "
            >
              <div className="mb-3 flex flex-col items-center gap-2">
                <span className="text-3xl leading-none" aria-hidden="true">
                  {card.icon}
                </span>

                <h3
                  className="text-lg font-bold text-foreground text-balance"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {t(card.titleKey)}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground text-balance">
                {t(card.descriptionKey)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#141827] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel light>{t("technology.pipeline.label")}</SectionLabel>

            <div className="mx-auto w-full max-w-none px-6">
             <SectionHeading light>
                {t("technology.pipeline.titleLine1")}
                {language === "en" && <br className="lg:hidden" />}
                <span className={language === "en" ? "lg:ml-[0.25em]" : "ml-[0.25em]"}>
                  {t("technology.pipeline.titleLine2")}
                </span>
              </SectionHeading>
            </div>
          </div>

          {/* Stacks vertically (down arrows) below lg, flows horizontally (right arrows) at lg */}
          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-2">
            {steps.map((s, i) => (
              <Fragment key={s.step}>
                <div
                  className="
                    flex flex-1 flex-col items-center justify-start
                    rounded-2xl border border-white/10 bg-white/5 p-6
                    text-center transition-colors duration-200
                    hover:border-[#f09f74]/60 hover:bg-white/[0.08]
                  "
                >
                  <span className="text-sm font-semibold tracking-widest text-primary">
                    {s.step}
                  </span>

                  {/* reserves 2 lines of title height; content centered within it */}
                  <h3
                    className="
                      mt-3 flex min-h-[2.75rem] items-center justify-center
                      text-center text-base font-bold text-white text-balance
                    "
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {t(s.labelKey)}
                  </h3>

                  {/* reserves 2 lines of description height; content centered within it */}
                  <p
                    className="
                      mt-2 flex min-h-[2.5rem] items-center justify-center
                      text-center text-xs leading-relaxed text-white/40 text-balance
                    "
                  >
                    {t(s.descriptionKey)}
                  </p>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}