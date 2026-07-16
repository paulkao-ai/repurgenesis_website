import { ArrowRight } from "lucide-react";

import {
  SOLUTIONS,
} from "@app/data/content";

import type {
  Page,
  Translator,
} from "@app/types";

import {
  CTAButton,
} from "@app/components/CTAButton";

import {
  FAQAccordion,
} from "@app/components/FAQAccordion";

import {
  SectionHeading,
  SectionLabel,
} from "@app/components/Section";

export function SolutionsPage({
  navigate,
  t,
}: {
  navigate: (page: Page) => void;
  t: Translator;
}) {
  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Therapeutic solutions */}
      <section
        className="
          max-w-7xl
          mx-auto
          px-6
          py-16
          md:py-20
        "
      >
        <SectionLabel>
          {t("solutionsPage.header.label")}
        </SectionLabel>

        <div
          className="
            mb-12
            grid
            grid-cols-1
            items-end
            gap-8
            lg:grid-cols-2
          "
        >
          <SectionHeading>
            {t("solutionsPage.header.title")}
          </SectionHeading>

          <p
            className="
              max-w-2xl
              leading-relaxed
              text-muted-foreground
            "
          >
            {t(
              "solutionsPage.header.description",
            )}
          </p>
        </div>

        <div
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
          "
        >
          {SOLUTIONS.map((solution) => (
            <article
              key={solution.id}
              className="
                group
                relative
                h-72
                overflow-hidden
                rounded-2xl
                bg-muted
              "
            >
              <img
                src={solution.image}
                alt={t(solution.labelKey)}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/20
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-6
                "
              >
                <h2
                  className="
                    mb-2
                    text-xl
                    font-bold
                    text-white
                  "
                  style={{
                    fontFamily:
                      "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {t(solution.labelKey)}
                </h2>

                <p
                  className="
                    text-sm
                    leading-relaxed
                    text-white/70
                  "
                >
                  {t(solution.descriptionKey)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Frequently asked questions */}
      <section
        className="
          border-t
          border-border
          bg-white
          py-20
        "
      >
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-10 text-center">
            <SectionLabel>
              {t("solutionsPage.faq.label")}
            </SectionLabel>

            <SectionHeading>
              {t("solutionsPage.faq.title")}
            </SectionHeading>
          </div>

          <FAQAccordion t={t} />

          <div className="mt-10 text-center">
            <CTAButton
              variant="primary"
              onClick={() =>
                navigate("contact")
              }
            >
              {t(
                "solutionsPage.faq.askDirectly",
              )}

              <ArrowRight size={14} />
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}