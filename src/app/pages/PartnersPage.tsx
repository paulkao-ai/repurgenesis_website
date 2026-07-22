import {
  ArrowRight,
} from "lucide-react";

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
    <div
      className="
        min-h-screen
        bg-background
        pt-24
      "
    >
      {/* Partner page introduction and map */}
      <section
        className="
          mx-auto
          max-w-7xl
          px-5
          py-14
          sm:px-6
          md:py-20
        "
      >
        <div
          className="
            mx-auto
            mb-10
            max-w-3xl
            text-center
            md:mb-12
          "
        >
          <SectionLabel>
            {t(
              "partners.page.label",
            )}
          </SectionLabel>

          <SectionHeading>
            {t(
              "partners.page.title",
            )}
          </SectionHeading>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-[1.8]
              text-muted-foreground
              md:text-base
            "
          >
            {t(
              "partners.page.description",
            )}
          </p>
        </div>

        <PartnerMap t={t} />
      </section>

      {/* Collaboration call to action */}
      <section
        className="
          relative
          overflow-hidden
          bg-[#141827]
          py-20
          md:py-24
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.16]
          "
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.55) 1px, transparent 1.4px)",
            backgroundSize:
              "20px 20px",
          }}
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-72
            w-72
            rounded-full
            bg-primary/15
            blur-3xl
          "
        />

        <div
          className="
            relative
            z-[1]
            mx-auto
            max-w-3xl
            px-6
            text-center
          "
        >
          <SectionLabel light>
            {t(
              "partners.cta.label",
            )}
          </SectionLabel>

          <SectionHeading light>
            {t(
              "partners.cta.title",
            )}
          </SectionHeading>

          <p
            className="
              mx-auto
              mb-9
              mt-5
              max-w-2xl
              text-sm
              leading-[1.8]
              text-white/65
              md:text-base
            "
          >
            {t(
              "partners.cta.description",
            )}
          </p>

          <button
            type="button"
            onClick={
              handleContactClick
            }
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
              shadow-[0_10px_26px_rgba(0,0,0,0.20)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#e08860]
              hover:shadow-[0_16px_34px_rgba(0,0,0,0.24)]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[#141827]
            "
          >
            {t(
              "partners.cta.button",
            )}

            <ArrowRight
              size={15}
              aria-hidden="true"
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
