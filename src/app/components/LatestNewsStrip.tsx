import { ArrowRight } from "lucide-react";

import {
  ALL_NEWS,
  localizeNewsArticle,
} from "@app/data/content";

import type {
  Page,
  Translator,
} from "@app/types";

import { NewsCard } from "./NewsCard";
import {
  SectionHeading,
  SectionLabel,
} from "./Section";

export function LatestNewsStrip({
  navigate,
  t,
}: {
  navigate: (page: Page) => void;
  t: Translator;
}) {
  const recentNews = ALL_NEWS
    .slice(0, 3)
    .map((article) =>
      localizeNewsArticle(article, t),
    );

  return (
    <section
      className="
        bg-[#f0f4f8]
        border-t
        border-border
        py-20
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative text-center mb-10">
          <SectionLabel>
            {t("news.label")}
          </SectionLabel>

          <SectionHeading>
            {t("news.title")}
          </SectionHeading>

          <button
            type="button"
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
            {t("news.allNews")}

            <ArrowRight size={14} />
          </button>
        </div>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-5
          "
        >
          {recentNews.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
            />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <button
            type="button"
            onClick={() => navigate("news")}
            className="
              inline-flex
              items-center
              gap-1
              text-sm
              font-semibold
              text-primary
              hover:underline
              underline-offset-4
            "
          >
            {t("news.allNews")}

            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}