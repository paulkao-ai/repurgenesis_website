import { useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

import {
  ALL_NEWS,
  getArticleBySlug,
  localizeNewsArticle,
  type LocalizedNewsArticle,
} from "@app/data/content";

import { NewsCard } from "@app/components/NewsCard";
import { NewsPosterCards } from "@app/components/NewsPosterCards";

import type { Language, Translator } from "@app/types";

/**
 * Render the approved article image only.
 * Articles without an image, or with a failed image URL,
 * continue directly to the article content.
 */
function ArticleImage({
  article,
}: {
  article: LocalizedNewsArticle;
}) {
  const [
    imageFailed,
    setImageFailed,
  ] = useState(false);

  if (
    !article.image ||
    imageFailed
  ) {
    return null;
  }

  return (
    /*
     * This wrapper uses the same approximate width
     * as the article heading and body.
     *
     * It stays aligned to the left side of the wider
     * page container, while centering the image inside it.
     */
    <div
      className="
        mt-10
        flex
        w-full
        max-w-[1000px]
        justify-center
      "
    >
      <figure
        className="
          w-fit
          max-w-full
          overflow-hidden
          rounded-[24px]
          border
          border-[#e3ddd3]
          bg-[#f3efe9]
          shadow-[0_10px_30px_rgba(20,24,39,0.05)]
        "
      >
        <img
          src={article.image}
          alt={
            article.imageAlt ??
            article.title
          }
          onError={() =>
            setImageFailed(true)
          }
          className="
            block
            h-auto
            max-h-[760px]
            w-auto
            max-w-full
            object-contain
          "
        />
      </figure>
    </div>
  );
}

export function NewsArticlePage({
  slug,
  t,
  language,
}: {
  slug: string;
  t: Translator;
  language: Language;
}) {
  const sourceArticle = getArticleBySlug(slug);

  if (!sourceArticle) {
    return (
      <main
        className="
          mx-auto
          flex
          min-h-[70vh]
          max-w-3xl
          flex-col
          items-center
          justify-center
          px-6
          pt-24
          text-center
        "
      >
        <p className="text-muted-foreground">{t("news.notFound")}</p>

        <a
          href={`/?page=news&lang=${language}`}
          className="
            mt-4
            inline-flex
            items-center
            gap-2
            font-bold
            text-[#c96a3e]
          "
        >
          <ArrowLeft size={16} aria-hidden="true" />

          {t("news.backToNews")}
        </a>
      </main>
    );
  }

  const article = localizeNewsArticle(sourceArticle, t);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const openLinkedIn = () => {
    const url = new URL("https://www.linkedin.com/sharing/share-offsite/");

    url.searchParams.set("url", shareUrl);

    window.open(
      url.toString(),
      "_blank",
      "noopener,noreferrer,width=720,height=680",
    );
  };

  const openX = () => {
    const url = new URL("https://x.com/intent/tweet");

    url.searchParams.set("url", shareUrl);

    url.searchParams.set("text", article.title);

    window.open(
      url.toString(),
      "_blank",
      "noopener,noreferrer,width=720,height=680",
    );
  };

  /*
   * Prefer articles in the same category,
   * then fill the remaining positions with other news.
   */
  const sameCategoryArticles = ALL_NEWS.filter(
    (candidate) =>
      candidate.slug !== sourceArticle.slug &&
      candidate.tagId === sourceArticle.tagId,
  );

  const otherArticles = ALL_NEWS.filter(
    (candidate) =>
      candidate.slug !== sourceArticle.slug &&
      candidate.tagId !== sourceArticle.tagId,
  );

  const relatedArticles = [...sameCategoryArticles, ...otherArticles]
    .slice(0, 3)
    .map((candidate) => localizeNewsArticle(candidate, t));

  return (
    <main
      className="
        bg-background
        pb-24
        pt-28
      "
    >
      <article
        className="
          mx-auto
          max-w-[1240px]
          px-6
        "
      >
        {/* Article header */}
        <header
          className="
            max-w-[1180px]
            text-left
          "
        >
          {/* Back link aligned above the metadata */}
          <a
            href={`/?page=news&lang=${language}`}
            className="
                group
                mb-8
                inline-flex
                items-center
                gap-3
                rounded-full
                text-sm
                font-semibold
                text-[#ef8a62]
                transition-colors
                duration-200
                hover:text-[#c96a3e]
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#ef8a62]
            "
            >
            <span
                className="
                inline-flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#ef8a62]/50
                bg-[#ef8a62]/5
                transition-all
                duration-200
                group-hover:-translate-x-0.5
                group-hover:border-[#ef8a62]
                group-hover:bg-[#ef8a62]
                group-hover:text-white
                "
            >
                <ArrowLeft
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
                />
            </span>

            <span>
                {t("news.backToNews")}
            </span>
            </a>

          {/* Category and date */}
          <div
            className="
              mb-5
              flex
              flex-wrap
              items-center
              justify-start
              gap-3
            "
          >
            <span
              className="
                rounded-full
                px-3
                py-1
                text-[11px]
                font-bold
                text-white
              "
              style={{
                background: article.tagColor,
              }}
            >
              {article.tag}
            </span>

            <span
              className="
                font-mono
                text-xs
                text-[#a7a4ad]
              "
            >
              {article.date}
            </span>
          </div>

          {/* Wide desktop title, intended to remain around two lines */}
          <h1
            className="
              max-w-[1180px]
              text-left
              text-[clamp(2.1rem,3.7vw,3.35rem)]
              font-extrabold
              leading-[1.06]
              tracking-[-0.045em]
              text-[#141827]
              lg:text-balance
            "
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            {article.title}
          </h1>

          {/* Short listing summary */}
          {article.excerpt && (
            <p
              className="
                mt-6
                max-w-[1000px]
                text-left
                text-base
                leading-[1.75]
                text-[#666471]
                md:text-lg
              "
            >
              {article.excerpt}
            </p>
          )}
        </header>

        {/* No fallback block when the article has no image */}
        <ArticleImage article={article} />

        {/* Article introduction and body */}
        <section
          className="
            mt-10
            max-w-[1020px]
            text-left
          "
        >
          <p
            className="
              mb-7
              max-w-[1000px]
              text-left
              text-[18px]
              font-semibold
              leading-[1.75]
              text-[#3f3e49]
              md:text-[19px]
            "
          >
            {article.lead}
          </p>

          <div className="max-w-[940px]">
            {article.body.map((paragraph, index) => (
              <p
                key={`${sourceArticle.id}-body-${index}`}
                className="
                    mb-6
                    text-left
                    text-base
                    leading-[1.9]
                    text-[#54535f]
                  "
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
                
        {/* Independent research-poster cards */}
        <NewsPosterCards
          articleSlug={article.slug}
          t={t}
        />
        
        {/* News coverage and references */}
        {article.references.length > 0 && (
          <section
            className="
              mt-16
              max-w-[1080px]
              border-t
              border-[#e3ddd3]
              pt-9
            "
          >
            <h2
              className="
                mb-6
                text-lg
                font-extrabold
                uppercase
                tracking-[0.01em]
                text-[#141827]
                md:text-xl
              "
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {t("news.references")}
            </h2>

            <div
              className="
                flex
                flex-col
                gap-3
              "
            >
              {article.references.map((reference) => (
                <a
                  key={reference.url}
                  href={reference.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                      group/reference
                      flex
                      items-center
                      justify-between
                      gap-5
                      rounded-[18px]
                      border
                      border-[#e3ddd3]
                      bg-white
                      px-6
                      py-4
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-[#ef8a62]/60
                      hover:shadow-[0_10px_26px_rgba(20,24,39,0.06)]
                    "
                >
                  <span className="min-w-0">
                    <span
                      className="
                          mb-1
                          block
                          font-mono
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[0.11em]
                          text-[#c96a3e]
                          sm:text-xs
                        "
                    >
                      {reference.outlet}
                    </span>

                    <span
                      className="
                          block
                          text-base
                          font-bold
                          leading-snug
                          tracking-[-0.01em]
                          text-[#141827]
                          md:text-lg
                        "
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                      }}
                    >
                      {reference.title}
                    </span>
                  </span>

                  <ArrowUpRight
                    size={20}
                    aria-hidden="true"
                    className="
                        shrink-0
                        text-[#c96a3e]
                        transition-transform
                        duration-300
                        group-hover/reference:-translate-y-0.5
                        group-hover/reference:translate-x-0.5
                      "
                  />
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Related articles */}
        {relatedArticles.length > 0 && (
          <section
            className="
              mt-16
              border-t
              border-[#e3ddd3]
              pt-10
            "
          >
            <div className="mb-8">
              <div
                className="
                  mb-3
                  flex
                  items-center
                  gap-3
                  font-mono
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-[#ef8a62]
                "
              >
                <span
                  className="
                    h-px
                    w-6
                    shrink-0
                    bg-[#ef8a62]
                  "
                />

                {t("news.related.label")}
              </div>

              <h2
                className="
                  text-2xl
                  font-bold
                  tracking-[-0.03em]
                  text-[#141827]
                  md:text-3xl
                "
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {t("news.related.title")}
              </h2>
            </div>

            <div
              className="
                grid
                grid-cols-1
                gap-6
                md:grid-cols-2
                lg:grid-cols-3
              "
            >
              {relatedArticles.map((relatedArticle) => (
                <NewsCard
                  key={relatedArticle.id}
                  article={relatedArticle}
                  language={language}
                />
              ))}
            </div>
          </section>
        )}

        {/* Share */}
        <section
          className="
            mt-14
            flex
            flex-wrap
            items-center
            justify-start
            gap-3
            border-t
            border-[#e3ddd3]
            pt-8
          "
        >
          <span
            className="
              mr-2
              font-mono
              text-xs
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#646270]
            "
          >
            {t("news.share")}
          </span>

          {/* LinkedIn */}
          <button
            type="button"
            onClick={openLinkedIn}
            aria-label={t("news.shareLinkedIn")}
            title={t("news.shareLinkedIn")}
            className="
            inline-flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-[#141827]
            text-white
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:bg-[#084f96]
            hover:shadow-md
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-[#0A66C2]
            "
        >
            <FaLinkedinIn
            size={20}
            aria-hidden="true"
            className="text-white"
            />
        </button>

          <button
            type="button"
            onClick={openX}
            aria-label={t("news.shareX")}
            title={t("news.shareX")}
            className="
              inline-flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-[#141827]
              text-white
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-[#ef8a62]
              hover:shadow-md
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#ef8a62]
            "
          >
            <FaXTwitter size={22} aria-hidden="true" />
          </button>
        </section>
      </article>
    </main>
  );
}