import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import { TECHNOLOGY_CARDS, steps } from "@app/data/content";
import { SectionHeading, SectionLabel } from "@app/components/Section";

export function TechnologyPage() {
  return (
    <div className="pt-24">
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <SectionLabel>Our Platform</SectionLabel>
        <SectionHeading>Technology built for translational speed</SectionHeading>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Every component of the Repurgenesis platform is designed to reduce friction between computational hypothesis and clinical candidate.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {TECHNOLOGY_CARDS.map((card, i) => (
          <div key={i} className="bg-card border border-border rounded-2xl p-7 hover:shadow-md transition-shadow">
            <span className="text-4xl">{card.icon}</span>
            <div className="flex items-center gap-3 mt-4 mb-2">
              <h3 className="font-bold text-lg text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{card.title}</h3>
              <span className="text-xs bg-accent text-primary font-semibold px-2 py-0.5 rounded-full shrink-0">{card.tag}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
          </div>
        ))}
      </section>

      <section className="bg-[#141827] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel light>Discovery Pipeline</SectionLabel>
            <SectionHeading light>From data to candidate</SectionHeading>
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
                    <span className="text-xs font-mono text-primary mb-2">
                      {s.step}
                    </span>

                    <p
                      className="font-bold text-white text-sm text-center"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {s.label}
                    </p>

                    <p className="text-xs text-white/40 text-center mt-2">
                      {s.desc}
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
