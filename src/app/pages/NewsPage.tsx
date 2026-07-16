import {
  useState,
} from "react";

import {
  ALL_NEWS,
  NEWS_FILTERS,
  TAG_COLOR,
  localizeNewsArticle,
  type NewsFilterId,
} from "@app/data/content";

import type {
  Translator,
} from "@app/types";

import {
  Carousel,
} from "@app/components/Carousel";

import {
  NewsCard,
} from "@app/components/NewsCard";

import {
  SectionHeading,
  SectionLabel,
} from "@app/components/Section";

export function NewsPage({
  t,
}: {
  t: Translator;
}) {
  const [filter, setFilter] =
    useState<NewsFilterId>("all");

  const filteredArticles =
    filter === "all"
      ? [...ALL_NEWS]
      : ALL_NEWS.filter(
          (article) =>
            article.tagId === filter,
        );

  const localizedArticles =
    filteredArticles.map((article) =>
      localizeNewsArticle(article, t),
    );

  return (
    <div className="pt-24 min-h-screen bg-background">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <SectionLabel>
            {t("news.label")}
          </SectionLabel>

          <SectionHeading>
            {t("news.title")}
          </SectionHeading>
        </div>

        <div className="mb-10">
          <div
            className="
              flex
              flex-wrap
              gap-0
              border-b
              border-[#d1d9e6]
            "
          >
            {NEWS_FILTERS.map((item) => {
              const isActive =
                filter === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    setFilter(item.id)
                  }
                  className="
                    relative
                    px-5
                    py-2.5
                    text-sm
                    font-medium
                    cursor-pointer
                    transition-colors
                  "
                  style={{
                    color: isActive
                      ? "#141827"
                      : "#6b6a72",
                  }}
                >
                  {t(item.labelKey)}

                  {isActive && (
                    <span
                      className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        h-0.5
                        rounded-t
                      "
                      style={{
                        background:
                          TAG_COLOR[item.id],
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <Carousel
          key={filter}
          items={localizedArticles}
          perPage={3}
          renderItem={(article) => (
            <NewsCard
              key={article.id}
              article={article}
            />
          )}
        />
      </section>
    </div>
  );
}