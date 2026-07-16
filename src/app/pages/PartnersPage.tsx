import { ArrowRight } from "lucide-react";

import type {
  Page,
  Translator,
} from "@app/types";

import {
  SectionHeading,
  SectionLabel,
} from "@app/components/Section";

import {
  PartnerMap,
} from "@app/components/PartnerMap";

export function PartnersPage({
  navigate,
  t,
}: {
  navigate: (page: Page) => void;
  t: Translator;
}) {
  const handleContactClick = () => {
    navigate("contact");
  };

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Partner page introduction */}
      <section
        className="
          max-w-7xl
          mx-auto
          px-6
          py-16
          md:py-20
        "
      >
        <div
          className="
            max-w-3xl
            mx-auto
            text-center
            mb-12
          "
        >
          <SectionLabel>
            {t("partners.page.label")}
          </SectionLabel>

          <SectionHeading>
            {t("partners.page.title")}
          </SectionHeading>

          <p
            className="
              mt-5
              max-w-2xl
              mx-auto
              text-sm
              md:text-base
              leading-relaxed
              text-muted-foreground
            "
          >
            {t("partners.page.description")}
          </p>
        </div>

        <PartnerMap t={t} />
      </section>

      {/* Collaboration call to action */}
      <section
        className="
          bg-[#141827]
          py-20
          md:py-24
        "
      >
        <div
          className="
            max-w-3xl
            mx-auto
            px-6
            text-center
          "
        >
          <SectionLabel light>
            {t("partners.cta.label")}
          </SectionLabel>

          <SectionHeading light>
            {t("partners.cta.title")}
          </SectionHeading>

          <p
            className="
              mt-5
              mb-9
              max-w-2xl
              mx-auto
              text-sm
              md:text-base
              leading-relaxed
              text-white/60
            "
          >
            {t("partners.cta.description")}
          </p>

          <button
            type="button"
            onClick={handleContactClick}
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              bg-primary
              px-8
              py-3.5
              text-sm
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#e08860]
              hover:shadow-xl
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[#141827]
            "
          >
            {t("partners.cta.button")}

            <ArrowRight
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>
        </div>
      </section>
    </div>
  );
}