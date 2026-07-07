import { ArrowRight } from "lucide-react";
import type { Page } from "@app/types";
import { SectionHeading, SectionLabel } from "@app/components/Section";
import { PartnerMap } from "@app/components/PartnerMap";

export function PartnersPage({
  navigate,
}: {
  navigate: (p: Page) => void;
}) {
  return (
    <div className="pt-24">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <SectionLabel>Ecosystem</SectionLabel>

          <SectionHeading>
            Our Partners & Collaborations
          </SectionHeading>

          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            Repurgenesis thrives through collaboration. Our network spans
            BioData, AI technology for biology, CRO, wet lab, academic, and
            clinical partners across global innovation hubs.
          </p>
        </div>

        <PartnerMap />
      </section>

      <section className="bg-[#141827] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionLabel light>Collaborate</SectionLabel>

          <SectionHeading light>
            Become a partner
          </SectionHeading>

          <p className="mt-4 text-white/60 text-sm leading-relaxed mb-8">
            Whether you are an academic research group, a pharma company with an
            unexplored target, or an investor looking for deep-tech biotech
            exposure, we want to hear from you.
          </p>

          <button
            onClick={() => navigate("contact")}
            className="
              inline-flex
              items-center
              gap-2
              bg-primary
              text-white
              font-semibold
              px-8
              py-3
              rounded-full
              hover:bg-[#e08860]
              transition-colors
              text-sm
            "
          >
            Start a conversation
            <ArrowRight size={14} />
          </button>
        </div>
      </section>
    </div>
  );
}