import { useState } from "react";
import { ALL_NEWS, TAG_COLOR } from "@app/data/content";
import type { Translator } from "@app/types";
import { Carousel } from "@app/components/Carousel";
import { NewsCard } from "@app/components/NewsCard";
import { SectionHeading, SectionLabel } from "@app/components/Section";

export function NewsPage({
  t,
}: {
  t: Translator;
}) {
  const tags = ["All", "Press Release", "Publication", "Partnership", "Event"];

  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? ALL_NEWS
      : ALL_NEWS.filter((article) => article.tag === filter);

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

          {/* <p className="text-muted-foreground leading-relaxed">
            {t("news.subtitle")}
          </p> */}
        </div>

        <div className="mb-10">
          <div className="flex flex-wrap gap-0 border-b border-[#d1d9e6]">
            {tags.map((tag) => {
              const isActive = filter === tag;

              return (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className="relative px-5 py-2.5 text-sm font-medium cursor-pointer transition-colors"
                  style={{
                    color: isActive ? "#141827" : "#6b6a72",
                  }}
                >
                  {tag}

                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t"
                      style={{
                        background: TAG_COLOR[tag] ?? "#f09f74",
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
          items={filtered}
          perPage={3}
          renderItem={(article) => (
            <NewsCard
              key={article.title}
              article={article}
            />
          )}
        />
      </section>
    </div>
  );
}