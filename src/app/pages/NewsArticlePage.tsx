import { ArrowLeft, ArrowUpRight, Newspaper, Linkedin } from "lucide-react";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

import { ALL_NEWS, getArticleBySlug, localizeNewsArticle } from "@app/data/content";
import type { Translator, Language } from "@app/types";

function createArticleHref(
  slug: string,
  language: Language,
) {
  const params =
    new URLSearchParams();

  params.set(
    "article",
    slug,
  );

  params.set(
    "lang",
    language,
  );

  return `/?${params.toString()}`;
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
      <div className="mx-auto max-w-[760px] px-6 py-40 text-center">
        <p className="text-muted-foreground">{t("news.notFound")}</p>
        <a href="/" className="mt-4 inline-block font-bold text-[#c96a3e]">{t("news.backHome")}</a>
      </div>
    );
  }
  const a = localizeNewsArticle(sourceArticle, t);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const openLinkedIn = () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, "_blank", "noopener");
  const openX = () => {
    const currentUrl =
        window.location.href;

    const shareUrl =
        new URL(
        "https://x.com/intent/tweet",
        );

    shareUrl.searchParams.set(
        "url",
        currentUrl,
    );

    shareUrl.searchParams.set(
        "text",
        a.title,
    );

    window.open(
        shareUrl.toString(),
        "_blank",
        "noopener,noreferrer,width=720,height=680",
    );
    };
  
  const sameCategoryArticles =
    ALL_NEWS.filter(
        (article) =>
        article.slug !==
            sourceArticle.slug &&
        article.tagId ===
            sourceArticle.tagId,
    );

    const otherArticles =
    ALL_NEWS.filter(
        (article) =>
        article.slug !==
            sourceArticle.slug &&
        article.tagId !==
            sourceArticle.tagId,
    );

    const relatedArticles = [
    ...sameCategoryArticles,
    ...otherArticles,
    ]
    .slice(0, 3)
    .map((article) =>
        localizeNewsArticle(
        article,
        t,
        ),
    );

  return (
    <article className="mx-auto max-w-[760px] px-6 pb-24 pt-28">
      <a href="/?page=news" className="mb-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.08em] text-[#8a8898] hover:text-foreground">
        <ArrowLeft size={15} /> {t("news.backToNews")}
      </a>

      <div className="mb-4 flex items-center gap-3">
        <span className="rounded-full px-3 py-1 text-[11px] font-bold text-white" style={{ background: a.tagColor }}>{a.tag}</span>
        <span className="font-mono text-xs text-[#a7a4ad]">{a.date}</span>
      </div>

      <h1 className="mb-5 text-[clamp(1.75rem,4vw,2.625rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-balance" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        {a.title}
      </h1>

      {/* hero: image or branded placeholder */}
      <div className="relative mb-8 h-[360px] overflow-hidden rounded-[20px] bg-gradient-to-br from-[#f09f74] to-[#c96a3e]">
        {a.image ? (
          <img src={a.image} alt={a.title} className="h-full w-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div aria-hidden className="absolute inset-0 opacity-50" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1.5px)", backgroundSize: "18px 18px" }} />
            <svg width="90" height="90" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#fff" strokeWidth="1.4" /><path d="M14 27V13h6a4 4 0 0 1 0 8h-6m6 0 5 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        )}
      </div>

      <p className="mb-5 text-[19px] font-semibold leading-[1.7] text-[#3f3e49]">{a.lead}</p>
      {a.body.map((p, i) => (
        <p key={i} className="mb-5 text-base leading-[1.85] text-[#54535f]">{p}</p>
      ))}

      {/* references */}
      {a.references.length > 0 && (
        <section
            className="
            mt-14
            border-t
            border-[#e3ddd3]
            pt-10
            "
        >
            <h2
            className="
                mb-7
                text-2xl
                font-extrabold
                uppercase
                tracking-[-0.02em]
                text-[#141827]
                md:text-3xl
            "
            style={{
                fontFamily:
                "'Plus Jakarta Sans', sans-serif",
            }}
            >
            {t("news.references")}
            </h2>

            <div
            className="
                flex
                flex-col
                gap-5
            "
            >
            {a.references.map(
                (reference, index) => (
                <a
                    key={`${reference.url}-${index}`}
                    href={reference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    group/reference
                    flex
                    min-h-[118px]
                    items-center
                    justify-between
                    gap-6
                    rounded-[26px]
                    border
                    border-[#e3ddd3]
                    bg-white
                    px-7
                    py-6
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-[#ef8a62]/60
                    hover:shadow-[0_14px_34px_rgba(20,24,39,0.07)]
                    md:px-9
                    "
                >
                    <span className="min-w-0">
                    <span
                        className="
                        mb-2
                        block
                        font-mono
                        text-sm
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#c96a3e]
                        md:text-base
                        "
                    >
                        {reference.outlet}
                    </span>

                    <span
                        className="
                        block
                        text-lg
                        font-bold
                        leading-snug
                        tracking-[-0.015em]
                        text-[#141827]
                        md:text-2xl
                        "
                        style={{
                        fontFamily:
                            "'Plus Jakarta Sans', sans-serif",
                        }}
                    >
                        {reference.title}
                    </span>
                    </span>

                    <ArrowUpRight
                    size={25}
                    aria-hidden="true"
                    className="
                        shrink-0
                        text-[#c96a3e]
                        transition-transform
                        duration-300
                        group-hover/reference:-translate-y-1
                        group-hover/reference:translate-x-1
                    "
                    />
                </a>
                ),
            )}
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
                    bg-[#ef8a62]
                "
                />

                {t("news.related.label")}
            </div>

            <h2
                className="
                text-3xl
                font-bold
                tracking-[-0.03em]
                text-[#141827]
                md:text-4xl
                "
                style={{
                fontFamily:
                    "'Plus Jakarta Sans', sans-serif",
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
                xl:grid-cols-3
            "
            >
            {relatedArticles.map(
                (relatedArticle) => (
                <a
                    key={relatedArticle.id}
                    href={createArticleHref(
                    relatedArticle.slug,
                    language,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    group/card
                    flex
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-[#e3ddd3]
                    bg-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#ef8a62]/45
                    hover:shadow-[0_18px_40px_rgba(20,24,39,0.09)]
                    "
                >
                    {/* Thumbnail */}
                    <div
                    className="
                        relative
                        aspect-[16/9]
                        overflow-hidden
                        bg-[#141827]
                    "
                    >
                    {relatedArticle.image ? (
                        <>
                        <img
                            src={
                            relatedArticle.image
                            }
                            alt={
                            relatedArticle.imageAlt ??
                            relatedArticle.title
                            }
                            className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-500
                            group-hover/card:scale-[1.04]
                            "
                        />

                        <div
                            aria-hidden="true"
                            className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-[#141827]/35
                            to-transparent
                            "
                        />
                        </>
                    ) : (
                        <>
                        <div
                            aria-hidden="true"
                            className="
                            absolute
                            inset-0
                            bg-gradient-to-br
                            from-[#f09f74]
                            via-[#e8845a]
                            to-[#a6533a]
                            "
                        />

                        <div
                            aria-hidden="true"
                            className="
                            absolute
                            inset-0
                            opacity-35
                            "
                            style={{
                            backgroundImage:
                                "radial-gradient(rgba(255,255,255,0.42) 1px, transparent 1.5px)",

                            backgroundSize:
                                "18px 18px",
                            }}
                        />

                        <div
                            className="
                            absolute
                            inset-0
                            flex
                            items-center
                            justify-center
                            "
                        >
                            <div
                            className="
                                flex
                                h-16
                                w-16
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                border-white/30
                                bg-white/15
                                text-white
                                backdrop-blur-sm
                            "
                            >
                            <Newspaper
                                size={29}
                                strokeWidth={1.6}
                                aria-hidden="true"
                            />
                            </div>
                        </div>
                        </>
                    )}

                    <span
                        className="
                        absolute
                        bottom-4
                        left-4
                        rounded-full
                        bg-white/90
                        px-3
                        py-1
                        text-xs
                        font-semibold
                        backdrop-blur-sm
                        "
                        style={{
                        color:
                            relatedArticle.tagColor,
                        }}
                    >
                        {relatedArticle.tag}
                    </span>
                    </div>

                    {/* Card text */}
                    <div
                    className="
                        flex
                        flex-1
                        flex-col
                        p-6
                    "
                    >
                    <span
                        className="
                        font-mono
                        text-xs
                        text-muted-foreground
                        "
                    >
                        {relatedArticle.date}
                    </span>

                    <h3
                        className="
                        mt-3
                        line-clamp-2
                        text-xl
                        font-bold
                        leading-snug
                        tracking-[-0.02em]
                        text-[#141827]
                        "
                        style={{
                        fontFamily:
                            "'Plus Jakarta Sans', sans-serif",
                        }}
                    >
                        {relatedArticle.title}
                    </h3>

                    <p
                        className="
                        mt-3
                        line-clamp-3
                        text-sm
                        leading-6
                        text-muted-foreground
                        "
                    >
                        {relatedArticle.excerpt}
                    </p>

                    <div
                        className="
                        mt-auto
                        flex
                        items-center
                        justify-between
                        border-t
                        border-[#e3ddd3]
                        pt-5
                        "
                    >
                        <span
                        className="
                            text-sm
                            font-semibold
                            text-[#141827]
                            transition-colors
                            group-hover/card:text-[#c96a3e]
                        "
                        >
                        {t(
                            "news.related.readArticle",
                        )}
                        </span>

                        <span
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            bg-[#141827]
                            text-white
                            transition-all
                            duration-300
                            group-hover/card:rotate-45
                            group-hover/card:bg-[#ef8a62]
                        "
                        >
                        <ArrowUpRight
                            size={17}
                            aria-hidden="true"
                        />
                        </span>
                    </div>
                    </div>
                </a>
                ),
            )}
            </div>
        </section>
        )}
                
      {/* share */}
      <section
        className="
            mt-12
            flex
            flex-wrap
            items-center
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
            font-semibold
            uppercase
            tracking-[0.12em]
            text-[#8a8898]
            "
        >
            {t("news.share")}
        </span>

        <button
            type="button"
            onClick={openLinkedIn}
            aria-label={t(
            "news.shareLinkedIn",
            )}
            title={t(
            "news.shareLinkedIn",
            )}
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
            <BiLogoLinkedinSquare
            size={23}
            aria-hidden="true"
            />
        </button>

        <button
            type="button"
            onClick={openX}
            aria-label={t(
            "news.shareX",
            )}
            title={t(
            "news.shareX",
            )}
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
            <FaXTwitter
            size={19}
            aria-hidden="true"
            />
        </button>
        </section>
    </article>
  );
}