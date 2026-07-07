import { ArrowRight, ChevronDown } from "lucide-react";
import { ALL_NEWS, SOLUTIONS, STATS } from "@app/data/content";
import type { Page, Translator } from "@app/types";
import { CTAButton } from "@app/components/CTAButton";
import { NewsCard } from "@app/components/NewsCard";
import { SectionHeading, SectionLabel } from "@app/components/Section";

export function HomePage({
    navigate,
    t,
}:{
    navigate:(p:Page)=>void;
    t: Translator;
}) {
  return (
    <div>
      {/* Hero — coral-dominant banner */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Coral gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f09f74] via-[#e8845a] to-[#c96a3e]" />
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.4) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 40%)`,
          }}
        />
        {/* Floating lab image on right */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&h=900&fit=crop&auto=format')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#c96a3e] via-[#c96a3e]/60 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-white/70 mb-6 font-mono">
              <span className="w-6 h-px bg-white/50 inline-block" />
              Drug Repurposing · AI-Driven Discovery
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              New Life for
              <br />
              <span className="text-white/90 underline decoration-white/30 decoration-4 underline-offset-4">Existing Medicines</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-md">
              Repurgenesis harnesses AI and multi-omics to transform approved compounds into breakthrough therapies — reaching patients faster, at a fraction of traditional cost.
            </p>
            <div className="flex flex-wrap gap-3">
              <CTAButton variant="white" onClick={() => navigate("technology")}>
                Explore our platform <ArrowRight size={14} />
              </CTAButton>
              <button
                onClick={() => navigate("contact")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-200 cursor-pointer"
              >
                Partner with us
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 lg:mt-0 mt-8">
            {STATS.map((stat, i) => (
              <div key={i} className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6">
                <p className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{stat.value}</p>
                <p className="text-sm text-white/70">{t(stat.key)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs">
          <span>{t("news.scroll")}</span>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </section>

      {/* Intro strip */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: "⚡", title: "3× Faster", body: "Our AI-first approach compresses discovery timelines from years to months by starting from an approved safety profile." },
            { icon: "🎯", title: "Higher Confidence", body: "Computational predictions are validated in-house, ensuring only high-fidelity candidates advance to partner pipelines." },
            { icon: "💊", title: "Patient-Centric", body: "Every program begins with an unmet clinical need. We work backward from patient populations to identify the most impactful repositioning opportunity." },
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-3">
              <span className="text-3xl">{item.icon}</span>
              <h3 className="font-bold text-lg text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology teaser */}
      <section className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Our Technology</SectionLabel>
            <SectionHeading>A platform built for precision at scale</SectionHeading>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our Molecular Repurposing Engine integrates genomic, proteomic, and clinical data across millions of data points. Machine learning surfaces unexpected mechanistic links between existing compounds and new disease targets.
            </p>
            <div className="mt-8">
              <CTAButton variant="outline" onClick={() => navigate("technology")}>
                See how it works <ArrowRight size={14} />
              </CTAButton>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=700&h=500&fit=crop&auto=format"
              alt="Repurgenesis computational biology laboratory"
              className="rounded-3xl object-cover w-full h-80 md:h-96 bg-muted"
            />
            <div className="absolute -bottom-4 -left-4 bg-white border border-border rounded-2xl p-4 shadow-lg">
              <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-1">Active compounds</p>
              <p className="text-2xl font-bold text-primary" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>340+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions strip */}
      <section className="bg-[#141827] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel light>Therapeutic Areas</SectionLabel>
            <SectionHeading light>Where we focus</SectionHeading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SOLUTIONS.map((sol, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden group cursor-pointer h-64">
                <img src={sol.image} alt={sol.label} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 bg-muted" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-bold mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{sol.label}</p>
                  <p className="text-white/60 text-xs leading-relaxed hidden group-hover:block">{sol.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton variant="outline" onClick={() => navigate("solutions")}>
              View all solutions <ArrowRight size={14} />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Latest news */}
      <section className="bg-[#f0f4f8] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative text-center mb-10">
            <SectionLabel>{t("news.label")}</SectionLabel>
            <SectionHeading>{t("news.title")}</SectionHeading>

            <button
              onClick={() => navigate("news")}
              className="
                hidden
                sm:inline-flex
                items-center
                gap-1
                text-sm
                font-semibold
                text-primary
                hover:underline
                underline-offset-4

                absolute
                right-0
                bottom-1
              "
            >
              {t("news.allNews")} <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ALL_NEWS.slice(0, 3).map((article) => (
              <NewsCard key={article.title} article={article} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <button
              onClick={() => navigate("news")}
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline underline-offset-4"
            >
              {t("news.allNews")} <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f09f74] via-[#e8845a] to-[#c96a3e]" />
          <div
            className="absolute inset-0 opacity-15"
            style={{ backgroundImage: "radial-gradient(circle at 70% 50%, rgba(255,255,255,0.5) 0%, transparent 60%)" }}
          />
          <div className="relative p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Ready to accelerate your pipeline?
              </h2>
              <p className="text-white/80 text-sm max-w-md">
                Our team is open to co-development and licensing conversations. Let's explore what's possible together.
              </p>
            </div>
            <button
              onClick={() => navigate("contact")}
              className="shrink-0 bg-white text-primary font-semibold px-8 py-3 rounded-full hover:bg-[#fdf0e8] transition-colors inline-flex items-center gap-2 text-sm"
            >
              Contact us <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
