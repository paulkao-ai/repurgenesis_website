import {
  useState,
} from "react";

import {
  BookOpenText,
  CalendarDays,
  Link2,
  Newspaper,
  type LucideIcon,
} from "lucide-react";

import type {
  LocalizedNewsArticle,
} from "@app/data/content";

import type {
  Language,
} from "@app/types";

import repurgenesisWhiteLogo from
  "@app/data/company_logo/processed/bg_remove/repurgenesis_white1.png";

const CATEGORY_ICON: Record<
  LocalizedNewsArticle["tagId"],
  LucideIcon
> = {
  press: Newspaper,
  partnership: Link2,
  event: CalendarDays,
  publication: BookOpenText,
};

export function createArticleHref(
  slug: string,
  language: Language,
): string {
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

export function NewsCard({
  article,
  language,
}: {
  article: LocalizedNewsArticle;
  language: Language;
}) {
  const [
    imageFailed,
    setImageFailed,
  ] = useState(false);

  const color =
    article.tagColor ??
    "#ef8a62";

  const Icon =
    CATEGORY_ICON[
      article.tagId
    ] ?? Newspaper;

  const hasImage =
    Boolean(article.image) &&
    !imageFailed;

  /*
   * Reveals the hover background
   * from top to bottom.
   */
  const wipe = [
    "[clip-path:inset(0_0_100%_0)]",
    "transition-[clip-path,transform,filter,opacity]",
    "duration-[550ms]",
    "[transition-timing-function:cubic-bezier(.45,.05,.15,1)]",
    "group-hover:[clip-path:inset(0_0_0_0)]",
    "group-focus-visible:[clip-path:inset(0_0_0_0)]",
  ].join(" ");

  const hoverTextShadow = [
    "group-hover:[text-shadow:0_1px_7px_rgba(0,0,0,0.50),0_1px_2px_rgba(0,0,0,0.20)]",
    "group-focus-visible:[text-shadow:0_1px_7px_rgba(0,0,0,0.50),0_1px_2px_rgba(0,0,0,0.20)]",
  ].join(" ");

  return (
    <a
      href={createArticleHref(
        article.slug,
        language,
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={article.title}
      className="
        group
        relative
        block
        h-[340px]
        overflow-hidden
        rounded-[18px]
        border
        border-[#ece7df]
        bg-white
        shadow-[0_1px_2px_rgba(20,24,39,0.05)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-transparent
        hover:shadow-[0_22px_44px_rgba(20,24,39,0.20)]
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[#ef8a62]
      "
    >
      {/* Hover background */}
      {hasImage ? (
        <>
          {/* Image reveal */}
          <img
            src={article.image}
            alt=""
            onError={() =>
              setImageFailed(true)
            }
            className={`
              absolute
              inset-0
              z-[1]
              h-full
              w-full
              object-cover
              object-center
              scale-100
              brightness-100
              saturate-100
              blur-0
              group-hover:scale-[1]
              group-hover:brightness-[0.9]
              group-hover:saturate-[0.9]
              group-hover:blur-[0.7px]
              group-focus-visible:scale-[1.06]
              group-focus-visible:brightness-[0.55]
              group-focus-visible:saturate-[0.78]
              group-focus-visible:blur-[2.5px]
              ${wipe}
            `}
          />

          {/* Strong dark scrim */}
          <div
            aria-hidden="true"
            className={`
              pointer-events-none
              absolute
              inset-0
              z-[1]
              bg-gradient-to-b
              from-[#0b0e18]/65
              via-[#0b0e18]/55
              to-[#0b0e18]/90
              ${wipe}
            `}
          />

          {/* Subtle coral tint */}
          <div
            aria-hidden="true"
            className={`
              pointer-events-none
              absolute
              inset-0
              z-[1]
              bg-[#c96a3e]/10
              ${wipe}
            `}
          />
        </>
      ) : (
        <>
          {/* Branded fallback */}
          <div
            aria-hidden="true"
            className={`
              pointer-events-none
              absolute
              inset-0
              z-[1]
              bg-gradient-to-br
              from-[#f2a074]
              via-[#e8845a]
              to-[#c96a3e]
              ${wipe}
            `}
          />

          {/* Slight darkening for readable text */}
          <div
            aria-hidden="true"
            className={`
              pointer-events-none
              absolute
              inset-0
              z-[1]
              bg-gradient-to-b
              from-transparent
              via-transparent
              to-[#8f3e2c]/20
              ${wipe}
            `}
          />
        </>
      )}

      {/* Dotted texture on all hovered cards */}
      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          inset-0
          z-[1]
          opacity-[0.30]
          mix-blend-screen
          ${wipe}
        `}
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.68) 1px, transparent 1.5px)",

          backgroundSize:
            "18px 18px",

          backgroundPosition:
            "0 0",
        }}
      />

      {/* Card content */}
      <div
        className="
          relative
          z-[2]
          flex
          h-full
          flex-col
          p-[26px]
          pb-[22px]
        "
      >
        {/* Category */}
        <div
          className="
            flex
            items-center
            gap-[11px]
          "
        >
          <span
            className="
              inline-flex
              h-[34px]
              w-[34px]
              shrink-0
              items-center
              justify-center
              rounded-[10px]
              transition-all
              duration-300
              group-hover:!bg-white/20
              group-hover:!text-white
              group-hover:backdrop-blur-sm
              group-focus-visible:!bg-white/20
              group-focus-visible:!text-white
              group-focus-visible:backdrop-blur-sm
            "
            style={{
              background:
                `${color}1f`,

              color,
            }}
          >
            <Icon
              size={19}
              strokeWidth={1.9}
              aria-hidden="true"
            />
          </span>

          <span
            className={`
              font-mono
              text-xs
              font-semibold
              uppercase
              tracking-[0.13em]
              transition-colors
              duration-300
              group-hover:!text-white
              group-focus-visible:!text-white
              ${hoverTextShadow}
            `}
            style={{
              color,
            }}
          >
            {article.tag}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`
            mt-[15px]
            line-clamp-3
            text-[22px]
            font-extrabold
            leading-[1.24]
            tracking-[-0.02em]
            text-[#141827]
            transition-colors
            duration-300
            group-hover:text-white
            group-focus-visible:text-white
            ${hoverTextShadow}
          `}
          style={{
            fontFamily:
              "'Plus Jakarta Sans', sans-serif",
          }}
        >
          {article.title}
        </h3>

        {/* Excerpt */}
        <p
          className={`
            mt-[11px]
            line-clamp-3
            text-sm
            leading-[1.6]
            text-[#6b6976]
            transition-colors
            duration-300
            group-hover:text-white/[0.96]
            group-focus-visible:text-white/[0.96]
            ${hoverTextShadow}
          `}
        >
          {article.excerpt}
        </p>

        {/* Date */}
        <div
          className="
            mt-auto
            flex
            items-end
            pt-3.5
          "
        >
          <span
            className={`
              font-mono
              text-xs
              text-[#a7a4ad]
              transition-colors
              duration-300
              group-hover:text-white/[0.92]
              group-focus-visible:text-white/[0.92]
              ${hoverTextShadow}
            `}
          >
            {article.date}
          </span>
        </div>
      </div>

      {/* Hover Repurgenesis logo */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-3
          right-3
          z-[3]
          origin-bottom-right
          translate-x-4
          translate-y-4
          rotate-[0deg]
          opacity-0
          transition-all
          duration-500
          ease-out
          group-hover:translate-x-0
          group-hover:translate-y-0
          group-hover:opacity-100
          group-focus-visible:translate-x-0
          group-focus-visible:translate-y-0
          group-focus-visible:opacity-100
        "
      >
        <img
          src={repurgenesisWhiteLogo}
          alt=""
          className="
            h-auto
            w-[42px]
            object-contain
            drop-shadow-[0_4px_12px_rgba(0,0,0,0.38)]
          "
        />
      </div>
    </a>
  );
}