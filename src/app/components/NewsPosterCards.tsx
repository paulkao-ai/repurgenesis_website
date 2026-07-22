import {
  useMemo,
  useState,
} from "react";

import {
  ChevronUp,
  ExternalLink,
  Eye,
  FileText,
} from "lucide-react";

import {
  NEWS_POSTER_CARDS,
} from "@app/data/content";

import type {
  Translator,
} from "@app/types";

export function NewsPosterCards({
  articleSlug,
  t,
  showAll = false,
}: {
  articleSlug: string;
  t: Translator;

  /*
   * false:
   * Show only posters related to this article.
   *
   * true:
   * Show all three poster cards.
   */
  showAll?: boolean;
}) {
  const [
    openPosterIds,
    setOpenPosterIds,
  ] = useState<string[]>([]);

  const posters =
    useMemo(() => {
      if (showAll) {
        return NEWS_POSTER_CARDS;
      }

      return NEWS_POSTER_CARDS.filter(
        (poster) =>
          poster.articleSlugs.some(
            (slug) =>
              slug === articleSlug,
          ),
      );
    }, [
      articleSlug,
      showAll,
    ]);

  const togglePoster = (
    posterId: string,
  ) => {
    setOpenPosterIds(
      (currentIds) =>
        currentIds.includes(
          posterId,
        )
          ? currentIds.filter(
              (id) =>
                id !== posterId,
            )
          : [
              ...currentIds,
              posterId,
            ],
    );
  };

  if (posters.length === 0) {
    return null;
  }

  return (
    <section
      className="
        mt-16
        border-t
        border-[#e3ddd3]
        pt-12
      "
    >
      {/* Section heading */}
      <div
        className="
          mb-8
          max-w-3xl
          text-left
        "
      >
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
            text-[#c96a3e]
          "
        >
          <span
            aria-hidden="true"
            className="
              h-px
              w-6
              bg-[#ef8a62]
            "
          />

          {t(
            "news.posters.label",
          )}
        </div>

        <h2
          className="
            text-2xl
            font-extrabold
            tracking-[-0.025em]
            text-[#141827]
            md:text-3xl
          "
          style={{
            fontFamily:
              "'Plus Jakarta Sans', sans-serif",
          }}
        >
          {t(
            "news.posters.title",
          )}
        </h2>

        <p
          className="
            mt-3
            text-sm
            leading-relaxed
            text-[#686672]
            md:text-base
          "
        >
          {t(
            "news.posters.description",
          )}
        </p>
      </div>

      {/* Independent poster cards */}
      <div
        className="
            grid
            grid-cols-1
            items-start
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
        "
        >
        {posters.map((poster) => {
            const isOpen =
            openPosterIds.includes(
                poster.id,
            );

            return (
            <article
                key={poster.id}
                className={`
                group
                relative
                flex
                flex-col
                overflow-hidden
                rounded-[22px]
                border
                border-[#d9e3e8]
                bg-white
                shadow-[0_8px_24px_rgba(20,24,39,0.06)]
                transition-all
                duration-300
                hover:border-[#2F6B8A]/60
                hover:shadow-[0_14px_30px_rgba(20,24,39,0.10)]

                ${
                    isOpen
                    ? `
                        sm:col-span-2
                        lg:col-span-3
                    `
                    : `
                        hover:-translate-y-1
                    `
                }
                `}
            >
                {/* Compact 340px poster card */}
                <div
                className="
                    relative
                    flex
                    h-[340px]
                    flex-col
                    overflow-hidden
                    p-6
                "
                >
                {/* Background gradient */}
                <div
                    aria-hidden="true"
                    className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-[#f4f9fb]
                    via-white
                    to-[#eef5f7]
                    "
                />

                {/* Dot texture */}
                <div
                    aria-hidden="true"
                    className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-[0.22]
                    "
                    style={{
                    backgroundImage:
                        "radial-gradient(rgba(47,107,138,0.30) 1px, transparent 1.5px)",

                    backgroundSize:
                        "18px 18px",
                    }}
                />

                {/* Card content */}
                <div
                    className="
                    relative
                    z-[1]
                    flex
                    h-full
                    min-h-0
                    flex-col
                    "
                >
                    {/* Icon and PDF badge */}
                    <div
                    className="
                        flex
                        items-start
                        justify-between
                        gap-3
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
                        rounded-[12px]
                        border
                        border-[#2F6B8A]/25
                        bg-[#2F6B8A]/10
                        text-[#2F6B8A]
                        "
                    >
                        <FileText
                        size={21}
                        strokeWidth={1.8}
                        aria-hidden="true"
                        />
                    </span>

                    <span
                        className="
                        inline-flex
                        shrink-0
                        items-center
                        rounded-full
                        border
                        border-[#2F6B8A]/25
                        bg-white/80
                        px-3
                        py-1.5
                        font-mono
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.11em]
                        text-[#2F6B8A]
                        backdrop-blur-sm
                        "
                    >
                        {t(
                        "news.posters.pdfLabel",
                        )}
                    </span>
                    </div>

                    {/* Event name */}
                    <p
                    className="
                        mt-4
                        font-mono
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        text-[#2F6B8A]
                    "
                    >
                    {t(
                        poster.eventKey,
                    )}
                    </p>

                    {/* Poster title */}
                    <h3
                    className="
                        mt-2
                        line-clamp-2
                        text-[19px]
                        font-extrabold
                        leading-[1.28]
                        tracking-[-0.02em]
                        text-[#141827]
                    "
                    style={{
                        fontFamily:
                        "'Plus Jakarta Sans', sans-serif",
                    }}
                    >
                    {t(
                        poster.titleKey,
                    )}
                    </h3>

                    {/* Poster description */}
                    <p
                    className="
                        mt-2
                        line-clamp-2
                        text-[13px]
                        leading-[1.55]
                        text-[#686672]
                    "
                    >
                    {t(
                        poster.descriptionKey,
                    )}
                    </p>

                    {/* Meta and actions */}
                    <div
                    className="
                        mt-auto
                        pt-3
                    "
                    >
                    <p
                        className="
                        line-clamp-1
                        font-mono
                        text-[10px]
                        leading-[1.5]
                        text-[#9995a2]
                        "
                        title={t(
                        poster.metaKey,
                        )}
                    >
                        {t(
                        poster.metaKey,
                        )}
                    </p>

                    <div
                        className="
                        mt-3
                        flex
                        flex-nowrap
                        items-center
                        gap-2
                        "
                    >
                        <button
                        type="button"
                        onClick={() =>
                            togglePoster(
                            poster.id,
                            )
                        }
                        className="
                            inline-flex
                            min-w-0
                            flex-1
                            items-center
                            justify-center
                            gap-1.5
                            whitespace-nowrap
                            rounded-full
                            bg-[#141827]
                            px-3
                            py-2
                            text-[11px]
                            font-semibold
                            text-white
                            transition-all
                            duration-200
                            hover:bg-[#2F6B8A]
                            focus-visible:outline
                            focus-visible:outline-2
                            focus-visible:outline-offset-2
                            focus-visible:outline-[#2F6B8A]
                        "
                        >
                        {isOpen ? (
                            <ChevronUp
                            size={14}
                            strokeWidth={2}
                            aria-hidden="true"
                            />
                        ) : (
                            <Eye
                            size={14}
                            strokeWidth={2}
                            aria-hidden="true"
                            />
                        )}

                        <span
                            className="
                            overflow-hidden
                            text-ellipsis
                            "
                        >
                            {isOpen
                            ? t(
                                "news.posters.closePreview",
                                )
                            : t(
                                "news.posters.preview",
                                )}
                        </span>
                        </button>

                        <a
                        href={
                            poster.pdfUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            inline-flex
                            min-w-0
                            flex-1
                            items-center
                            justify-center
                            gap-1.5
                            whitespace-nowrap
                            rounded-full
                            border
                            border-[#2F6B8A]
                            bg-white/90
                            px-3
                            py-2
                            text-[11px]
                            font-semibold
                            text-[#2F6B8A]
                            transition-all
                            duration-200
                            hover:bg-[#2F6B8A]
                            hover:text-white
                            focus-visible:outline
                            focus-visible:outline-2
                            focus-visible:outline-offset-2
                            focus-visible:outline-[#2F6B8A]
                        "
                        >
                        <ExternalLink
                            size={14}
                            strokeWidth={2}
                            aria-hidden="true"
                        />

                        <span
                            className="
                            overflow-hidden
                            text-ellipsis
                            "
                        >
                            {t(
                            "news.posters.openPdf",
                            )}
                        </span>
                        </a>
                    </div>
                    </div>
                </div>
                </div>

                {/* Expanded PDF preview */}
                {isOpen && (
                <div
                    className="
                    border-t
                    border-[#d9e3e8]
                    bg-[#292834]
                    p-2
                    md:p-4
                    "
                >
                    <iframe
                    src={
                        poster.pdfUrl
                    }
                    title={t(
                        poster.titleKey,
                    )}
                    loading="lazy"
                    className="
                        block
                        h-[72vh]
                        min-h-[560px]
                        w-full
                        rounded-[14px]
                        border-0
                        bg-white
                    "
                    />
                </div>
                )}
            </article>
            );
        })}
        </div>
    </section>
  );
}