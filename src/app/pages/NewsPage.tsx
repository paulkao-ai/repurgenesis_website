import { useState } from "react";
import { ArrowDown } from "lucide-react";
import { ALL_NEWS, NEWS_FILTERS, localizeNewsArticle, type NewsFilterId } from "@app/data/content";
import { NewsCard } from "@app/components/NewsCard";
import { SectionHeading, SectionLabel } from "@app/components/Section";
import type { Translator, Language } from "@app/types";

const PAGE = 3;

export function NewsPage({
  t,
  language,
}: {
  t: Translator;
  language: Language;
}) {
  const [filter, setFilter] = useState<NewsFilterId>("all");
  const [visible, setVisible] = useState(6);

  const matched = (filter === "all" ? ALL_NEWS : ALL_NEWS.filter((a) => a.tagId === filter))
    .map((a) => localizeNewsArticle(a, t));
  const shown = matched.slice(0, visible);

  const changeFilter = (id: NewsFilterId) => { setFilter(id); setVisible(6); };

  return (
    <div className="min-h-screen bg-background pt-24">
      <section className="mx-auto max-w-[1180px] px-6 py-16">
        <div className="mb-12 text-center">
          <SectionLabel>{t("news.label")}</SectionLabel>
          <SectionHeading>{t("news.title")}</SectionHeading>
        </div>

        {/* filters */}
        <div className="mb-9 flex flex-wrap gap-1 border-b border-[#e3ddd3]">
          {NEWS_FILTERS.map((item) => {
            const active = filter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => changeFilter(item.id)}
                className={`-mb-px border-b-2 px-[18px] py-2.5 text-sm font-semibold transition-colors ${
                  active ? "border-[#ef8a62] text-foreground" : "border-transparent text-[#8a8898] hover:text-foreground"
                }`}
              >
                {t(item.labelKey)}
              </button>
            );
          })}
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 gap-[26px] sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((a) => <NewsCard key={a.id} article={a} />)}
        </div>

        {visible < matched.length && (
          <div className="mt-11 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + PAGE)}
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-br from-[#f09f74] to-[#e8845a] px-[30px] py-3.5 text-[15px] font-bold text-white shadow-[0_12px_26px_rgba(232,132,90,0.32)] transition-all hover:-translate-y-0.5"
            >
              {t("news.loadMore")}
              <ArrowDown size={18} />
            </button>
          </div>
        )}
      </section>
    </div>
  );
}