import { people, TIMELINE } from "@app/data/content";
import { Carousel } from "@app/components/Carousel";
import { SectionHeading, SectionLabel } from "@app/components/Section";

export function AboutPage() { 
  return (
    <div className="pt-24">
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionLabel>Who We Are</SectionLabel>
          <SectionHeading>Science-driven. Patient-focused. Relentlessly curious.</SectionHeading>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Founded in 2013 in Taipei, Repurgenesis was built on a simple conviction: the world already has many of the molecules it needs to treat more diseases — they just haven't been matched to the right targets yet.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We operate at the intersection of machine learning and wet-lab science, combining high-throughput data analysis with rigorous empirical validation across discovery, preclinical development, and early clinical translation.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=700&h=500&fit=crop&auto=format"
            alt="Repurgenesis research team at work"
            className="rounded-3xl w-full h-80 object-cover bg-muted"
          />
        </div>
      </section>

      <section className="bg-white border-y border-border py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel>Our Journey</SectionLabel>
            <SectionHeading>A decade of discovery</SectionHeading>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
            <div className="flex flex-col gap-10">
              {TIMELINE.map((item, i) => (
                <div key={i} className={`flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                    <div className="bg-card border border-border rounded-2xl p-5">
                      <p className="text-xs text-muted-foreground font-mono mb-1">{item.year}</p>
                      <p className="text-sm font-medium text-foreground">{item.event}</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center z-10 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-primary border-2 border-white shadow-md" />
                  </div>
                  <div className="md:hidden flex-1 bg-card border border-border rounded-2xl p-5 ml-4">
                    <p className="text-xs text-muted-foreground font-mono mb-1">{item.year}</p>
                    <p className="text-sm font-medium text-foreground">{item.event}</p>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
            <SectionLabel>Leadership</SectionLabel>
            <SectionHeading>
                The team behind the science
            </SectionHeading>
        </div> 

        <Carousel
            items={people}
            perPage={3}
            renderItem={(person, index) => (
                <div
                    key={`${person.name}-${index}`}
                    className="bg-card border border-border rounded-2xl overflow-hidden group"
                >
                    <div className="h-56 overflow-hidden bg-muted">
                        <img
                            src={person.bg}
                            alt={person.name}
                            className="
                                w-full
                                h-full
                                object-cover
                                transition-transform
                                duration-500
                                group-hover:scale-105
                            "
                        />
                    </div>

                    <div className="p-5">
                        <p
                            className="font-bold text-foreground"
                            style={{
                                fontFamily:
                                    "'Plus Jakarta Sans', sans-serif",
                            }}
                        >
                            {person.name}
                        </p>

                        <p className="text-sm text-muted-foreground">
                            {person.title}
                        </p>
                    </div>
                </div>
            )}
        />
    </section>
      
    </div>
  );
}
