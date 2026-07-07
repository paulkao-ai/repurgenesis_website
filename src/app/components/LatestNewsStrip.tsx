import { ArrowRight } from "lucide-react";
import { ALL_NEWS } from "@app/data/content";
import type { Page, Translator } from "@app/types";
import { CTAButton } from "./CTAButton";
import { NewsCard } from "./NewsCard";
import { SectionHeading, SectionLabel } from "./Section";



export function LatestNewsStrip({ 
  navigate,
  t,
}: { 
  navigate: (p: Page) => void;
  t: Translator;
 }) {
  const recent = ALL_NEWS.slice(0, 3);
  return (
    <section className="bg-[#f0f4f8] border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* <div className="flex items-end justify-between mb-8">
          <div>
            <SectionLabel>{t("news.label")}</SectionLabel>
            <SectionHeading>{t("news.title")}</SectionHeading>
          </div>
          <button
            onClick={() => navigate("news")}
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline underline-offset-4"
          >
            All news <ArrowRight size={14} />
          </button>
        </div> */}
        
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
          {recent.map((article, i) => <NewsCard key={i} article={article} />)}
        </div>
        <div className="text-center mt-6 sm:hidden">
          <CTAButton variant="ghost" onClick={() => navigate("news")}>
            {t("news.allNews")} <ArrowRight size={14} />
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
