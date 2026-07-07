import { ArrowRight } from "lucide-react";
import { SOLUTIONS } from "@app/data/content";
import type { Page } from "@app/types";
import { CTAButton } from "@app/components/CTAButton";
import { FAQAccordion } from "@app/components/FAQAccordion";
import { SectionHeading, SectionLabel } from "@app/components/Section";

export function SolutionsPage({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <div className="pt-24">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <SectionLabel>Therapeutic Focus</SectionLabel>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-12">
          <SectionHeading>Solutions across disease areas</SectionHeading>
          <p className="text-muted-foreground leading-relaxed">
            We partner with pharma, academic institutions, and patient advocacy organizations to address diseases where conventional drug development timelines leave patients without options.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SOLUTIONS.map((sol, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden group h-72 bg-muted">
              <img src={sol.image} alt={sol.label} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-bold text-xl mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{sol.label}</p>
                <p className="text-white/70 text-sm leading-relaxed">{sol.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-t border-border py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <SectionLabel>FAQ</SectionLabel>
            <SectionHeading>Common Questions</SectionHeading>
          </div>
          <FAQAccordion />
          <div className="text-center mt-10">
            <CTAButton variant="primary" onClick={() => navigate("contact")}>
              Ask us directly <ArrowRight size={14} />
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
