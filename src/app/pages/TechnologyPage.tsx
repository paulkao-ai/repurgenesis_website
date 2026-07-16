import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import { TECHNOLOGY_CARDS, steps } from "@app/data/content";
import { SectionHeading, SectionLabel } from "@app/components/Section";
import type { Translator } from "@app/types";

export function TechnologyPage({
  t,
}: {
  t: Translator;
}) {
  return (
    <div className="pt-24">
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <SectionLabel>
          {t("technology.hero.label")}
        </SectionLabel>
        <SectionHeading>
          {t("technology.hero.title")}
        </SectionHeading>
        <p
          className="
            mx-auto
            mt-4
            max-w-2xl
            leading-relaxed
            text-muted-foreground
          "
        >
          {t("technology.hero.description")}
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {TECHNOLOGY_CARDS.map((card) => (
          <article
            key={card.id}
            className="
              rounded-2xl
              border
              border-border
              bg-card
              p-7
              transition-shadow
              hover:shadow-md
            "
          >
            <span
              className="text-4xl"
              aria-hidden="true"
            >
              {card.icon}
            </span>

            <div
              className="
                mt-4
                mb-3
                flex
                flex-wrap
                items-center
                gap-3
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

              <span
                className="
                  shrink-0
                  rounded-full
                  bg-accent
                  px-2.5
                  py-1
                  text-xs
                  font-semibold
                  text-primary
                "
              >
                {t(card.tagKey)}
              </span>
            </div>

            <p
              className="
                text-sm
                leading-relaxed
                text-muted-foreground
              "
            >
              {t(card.descriptionKey)}
            </p>
          </article>
        ))}
      </section>

      <section className="bg-[#141827] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel light>
              {t("technology.pipeline.label")}
            </SectionLabel>

            <SectionHeading light>
              {t("technology.pipeline.title")}
            </SectionHeading>
          </div>
          
          <div className="hidden md:flex items-center">
            {steps.map((s, i) => (
              <Fragment key={s.step}>

                {/* Card */}
                <div className="flex-1">
                  <div
                    className="
                      flex
                      flex-col
                      justify-between
                      items-center
                      min-h-[160px]
                      bg-white/5
                      border
                      border-white/10
                      rounded-2xl
                      p-6
                    "
                  >
                    <p
                      className="font-bold text-white text-sm text-center"
                      style={{
                        fontFamily:
                          "'Plus Jakarta Sans', sans-serif",
                      }}
                    >
                      {t(s.labelKey)}
                    </p>

                    <p className="mt-2 text-center text-xs text-white/40">
                      {t(s.descriptionKey)}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                {i < steps.length - 1 && (
                  <ArrowRight
                    size={20}
                    className="mx-4 shrink-0 text-primary/60"
                  />
                )}

              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
