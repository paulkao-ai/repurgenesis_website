import {
  useMemo,
  useState,
} from "react";

import {
  ChevronDown,
} from "lucide-react";

import {
  ALL_NEWS,
  NEWS_FILTERS,
  localizeNewsArticle,
  type NewsFilterId,
} from "@app/data/content";

import {
  NewsCard,
} from "@app/components/NewsCard";

import {
  SectionHeading,
  SectionLabel,
} from "@app/components/Section";

import type {
  Language,
  Translator,
} from "@app/types";

const INITIAL_VISIBLE_COUNT = 6;
const LOAD_MORE_COUNT = 3;

const FILTER_TAB_STYLES: Record<
  NewsFilterId,
  {
    active: string;
    inactive: string;
  }
> = {
  all: {
    active:
      "border-[#141827] text-[#141827]",

    inactive:
      "border-transparent text-[#8a8898] hover:border-[#141827] hover:text-[#141827]",
  },

  press: {
    active:
      "border-[#B5473C] text-[#B5473C]",

    inactive:
      "border-transparent text-[#8a8898] hover:border-[#B5473C] hover:text-[#B5473C]",
  },

  partnership: {
    active:
      "border-[#2f9e6f] text-[#2f9e6f]",

    inactive:
      "border-transparent text-[#8a8898] hover:border-[#2f9e6f] hover:text-[#2f9e6f]",
  },

  event: {
    active:
      "border-[#5b6ee1] text-[#5b6ee1]",

    inactive:
      "border-transparent text-[#8a8898] hover:border-[#5b6ee1] hover:text-[#5b6ee1]",
  },

  publication: {
    active:
      "border-[#2F6B8A] text-[#2F6B8A]",

    inactive:
      "border-transparent text-[#8a8898] hover:border-[#2F6B8A] hover:text-[#2F6B8A]",
  },
};

export function NewsPage({
  t,
  language,
}: {
  t: Translator;
  language: Language;
}) {
  const [
    filter,
    setFilter,
  ] = useState<NewsFilterId>(
    "all",
  );

  const [
    visibleCount,
    setVisibleCount,
  ] = useState(
    INITIAL_VISIBLE_COUNT,
  );

  const matchedArticles =
    useMemo(() => {
      const source =
        filter === "all"
          ? ALL_NEWS
          : ALL_NEWS.filter(
              (article) =>
                article.tagId ===
                filter,
            );

      return source.map(
        (article) =>
          localizeNewsArticle(
            article,
            t,
          ),
      );
    }, [
      filter,
      t,
    ]);

  const visibleArticles =
    matchedArticles.slice(
      0,
      visibleCount,
    );

  const hasMore =
    visibleCount <
    matchedArticles.length;

  const changeFilter = (
    nextFilter: NewsFilterId,
  ) => {
    setFilter(
      nextFilter,
    );

    setVisibleCount(
      INITIAL_VISIBLE_COUNT,
    );
  };

  const showMore = () => {
    setVisibleCount(
      (currentCount) =>
        Math.min(
          currentCount +
            LOAD_MORE_COUNT,

          matchedArticles.length,
        ),
    );
  };

  return (
    <div
      className="
        min-h-screen
        bg-background
        pt-24
      "
    >
      <section
        className="
          mx-auto
          max-w-[1180px]
          px-6
          py-16
        "
      >
        {/* Page heading */}
        <div
          className="
            mb-12
            text-center
          "
        >
          <SectionLabel>
            {t(
              "news.label",
            )}
          </SectionLabel>

          <SectionHeading>
            {t(
              "news.title",
            )}
          </SectionHeading>
        </div>

        {/* Filters */}
        <div
          className="
            mb-9
            flex
            flex-wrap
            gap-1
            border-b
            border-[#e3ddd3]
          "
          aria-label={t(
            "news.filter",
          )}
        >
          {NEWS_FILTERS.map(
            (item) => {
              const isActive =
                filter === item.id;

              const filterStyle =
                FILTER_TAB_STYLES[
                  item.id
                ];

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    changeFilter(
                      item.id,
                    )
                  }
                  aria-pressed={
                    isActive
                  }
                  className={`
                    -mb-px
                    select-none
                    whitespace-nowrap
                    border-b-2
                    px-[18px]
                    py-2.5
                    text-sm
                    font-semibold
                    transition-colors
                    duration-200

                    ${
                      isActive
                        ? filterStyle.active
                        : filterStyle.inactive
                    }
                  `}
                >
                  {t(
                    item.labelKey,
                  )}
                </button>
              );
            },
          )}
        </div>

        {/* News grid */}
        <div
          className="
            grid
            grid-cols-1
            items-stretch
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {visibleArticles.map(
            (article) => (
              <NewsCard
                key={
                  article.id
                }
                article={
                  article
                }
                language={
                  language
                }
              />
            ),
          )}
        </div>

        {/* Load more */}
        {hasMore && (
          <div
            className="
              relative
              mt-7
              flex
              items-center
              justify-center
            "
          >
            {/* Horizontal line */}
            <span
              aria-hidden="true"
              className="
                absolute
                inset-x-0
                top-1/2
                h-px
                -translate-y-1/2
                bg-[#cec7bd]
              "
            />

            {/* Down arrow */}
            <button
              type="button"
              onClick={
                showMore
              }
              aria-label={t(
                "news.loadMore",
              )}
              title={t(
                "news.loadMore",
              )}
              className="
                group
                relative
                z-[1]
                inline-flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-[#ef8a62]
                bg-[#faf7f2]
                text-[#141827]
                shadow-[0_4px_12px_rgba(20,24,39,0.04)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#ef8a62]
                hover:text-white
                hover:shadow-[0_8px_20px_rgba(201,106,62,0.20)]
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#ef8a62]
              "
            >
              <ChevronDown
                size={22}
                strokeWidth={
                  1.9
                }
                aria-hidden="true"
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-y-0.5
                "
              />
            </button>
          </div>
        )}
      </section>
    </div>
  );
}