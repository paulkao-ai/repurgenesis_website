import {
  Fragment,
} from "react";

import {
  ArrowLeftRight,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

import {
  HOME_EVIDENCE_LAYERS,
  HOME_HERO_HIGHLIGHTS,
  HOME_PAGE_DATA,
  HOME_LOGO_MARQUEE_ITEMS,
  HOME_WORKFLOWS,
} from "@app/data/content";

import { LatestNewsStrip } from "@app/components/LatestNewsStrip";
import { CTAButton } from "@app/components/CTAButton";

import {
  SectionHeading,
  SectionLabel,
} from "@app/components/Section";

import type {
  Language,
  Page,
  Translator,
} from "@app/types";

type SectionIconProps = {
  className?: string;
};

/* Drug → Disease */
function DrugDirectionIcon({
  className = "",
}: SectionIconProps) {
  return (
    <svg
      className={className}
      width="27"
      height="27"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10.5 3.5 3.5 10.5a5 5 0 0 0 7 7l7-7a5 5 0 0 0-7-7Z" />
      <path d="m7 7 7 7" />
    </svg>
  );
}

/* Disease → Drug */
function DiseaseDirectionIcon({
  className = "",
}: SectionIconProps) {
  return (
    <svg
      className={className}
      width="27"
      height="27"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2a5 5 0 0 0-5 5c0 2 1 3 1 5h8c0-2 1-3 1-5a5 5 0 0 0-5-5Z" />
      <path d="M9 17h6" />
      <path d="M9.5 20h5" />
    </svg>
  );
}

/* Gene Expression */
function GeneExpressionIcon({
  className = "",
}: SectionIconProps) {
  return (
    <svg
      className={className}
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4c4 0 4 16 8 16" />
      <path d="M12 4c4 0 4 16 8 16" />
      <path d="M6 8h4" />
      <path d="M14 8h4" />
      <path d="M6 16h4" />
      <path d="M14 16h4" />
    </svg>
  );
}

/* Structure Modeling */
function StructureModelingIcon({ size = 40, strokeWidth = 1.6 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* cube edges: front face, back face, 4 connectors */}
      <path d="M4.5 9 14.5 9M14.5 9 14.5 19M14.5 19 4.5 19M4.5 19 4.5 9M9.5 4.5 19.5 4.5M19.5 4.5 19.5 14.5M19.5 14.5 9.5 14.5M9.5 14.5 9.5 4.5M4.5 9 9.5 4.5M14.5 9 19.5 4.5M14.5 19 19.5 14.5M4.5 19 9.5 14.5" />
      {/* 8 corner atoms */}
      <circle cx="4.5" cy="9" r="1.4" fill="#fff" />
      <circle cx="14.5" cy="9" r="1.4" fill="#fff" />
      <circle cx="14.5" cy="19" r="1.4" fill="#fff" />
      <circle cx="4.5" cy="19" r="1.4" fill="#fff" />
      <circle cx="9.5" cy="4.5" r="1.4" fill="#fff" />
      <circle cx="19.5" cy="4.5" r="1.4" fill="#fff" />
      <circle cx="19.5" cy="14.5" r="1.4" fill="#fff" />
      <circle cx="9.5" cy="14.5" r="1.4" fill="#fff" />
    </svg>
  );
}

/* Knowledge Graph */
function KnowledgeGraphIcon({
  className = "",
}: SectionIconProps) {
  return (
    <svg
      className={className}
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="18" cy="7" r="2.2" />
      <circle cx="7" cy="18" r="2.2" />
      <circle cx="17" cy="17" r="2.2" />

      <path d="M8 7h8" />
      <path d="M7.5 8 7 15.8" />
      <path d="m8.6 17.2 6.8-.4" />
      <path d="M17.7 9.1 8.4 16.6" />
    </svg>
  );
}

const WORKFLOW_ICONS = {
  pill: DrugDirectionIcon,
  dna: DiseaseDirectionIcon,
} as const;

const EVIDENCE_ICONS = {
  expression: GeneExpressionIcon,
  structure: StructureModelingIcon,
  knowledge: KnowledgeGraphIcon,
} as const;

function CompanyLogoGroup() {
  return (
    <div
      className="
        flex
        shrink-0
        items-center
        gap-8
        pr-8
        md:gap-12
        md:pr-12
      "
      aria-hidden="true"
    >
      {HOME_LOGO_MARQUEE_ITEMS.map(
        (item) => (
          <div
            key={item.id}
            className="
              flex
              h-20
              min-w-[125px]
              shrink-0
              items-center
              justify-center
              md:min-w-[145px]
            "
          >
            <img
              src={item.logo}
              alt=""
              className="
                h-10
                w-auto
                max-w-[145px]
                object-contain
                opacity-90
                transition-opacity
                duration-300
                hover:opacity-100
                md:h-12
                md:max-w-[170px]
              "
            />
          </div>
        ),
      )}
    </div>
  );
}

export function HomePage({
  navigate,
  t,
  language,
}: {
  navigate: (page: Page) => void;
  t: Translator;
  language: Language;
}) {
  return (
    <div>
      {/* Hero */}
      <section
        className="
          relative
          flex
          min-h-screen
          items-center
          overflow-hidden
          pt-16
        "
      >
        {/* Original coral background gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-[#f09f74]
            via-[#e8845a]
            to-[#c96a3e]
          "
        />

        {/* Original subtle light texture */}
        <div
          className="
            absolute
            inset-0
            opacity-10
          "
          style={{
            backgroundImage: `
              radial-gradient(
                circle at 20% 50%,
                rgba(255, 255, 255, 0.4) 0%,
                transparent 50%
              ),
              radial-gradient(
                circle at 80% 20%,
                rgba(255, 255, 255, 0.3) 0%,
                transparent 40%
              )
            `,
          }}
        />

        {/* Right-side image */}
        <div
          className="
            absolute
            inset-y-0
            right-0
            hidden
            w-1/2
            lg:block
          "
          style={{
            backgroundImage:
              `url("${HOME_PAGE_DATA.heroImage}")`,

            backgroundSize:
              "cover",

            backgroundPosition:
              HOME_PAGE_DATA.heroImagePosition ??
              "center",
          }}
        >
          {/* Restore original soft coral transition */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#c96a3e]
              via-[#c96a3e]/55
              to-[#5e4038]/10
            "
          />

          {/* Slight dark tint for white text and cards */}
          <div
            className="
              absolute
              inset-0
              bg-black/10
            "
          />
        </div>

        {/* Mobile image-free readability layer */}
        <div
          className="
            absolute
            inset-0
            bg-[#e8845a]/20
            lg:hidden
          "
        />

        {/* Main Hero layout */}
        <div
          className="
            relative
            z-10
            mx-auto
            grid
            min-h-[calc(100vh-4rem)]
            w-full
            max-w-7xl
            grid-cols-1
            content-center
            gap-x-16
            gap-y-8
            px-6
            py-24
            lg:grid-cols-2
          "
        >
          {/* Eyebrow and one-line title span both columns */}
          <div className="lg:col-span-2">
            <span
              className="
                mb-7
                inline-flex
                items-center
                gap-3
                font-mono
                text-xs
                font-semibold
                uppercase
                tracking-[0.14em]
                text-white/80
              "
            >
              <span
                className="
                  inline-block
                  h-px
                  w-6
                  bg-white/60
                "
              />

              {t("company.positioning.eyebrow")}
            </span>

            <h1
              className="
                max-w-none
                break-keep
                text-[clamp(2.5rem,3.8vw,3.9rem)]
                font-bold
                leading-[1.04]
                tracking-[-0.045em]
                text-white
                xl:whitespace-nowrap
              "
              style={{
                fontFamily:
                  "'Plus Jakarta Sans', sans-serif",

                textShadow:
                  "0 3px 18px rgba(40, 20, 15, 0.2)",
              }}
            >
              {t("company.positioning.headline")}
            </h1>
          </div>

          {/* Left-side description and buttons */}
          {/* Lower Hero row */}
          <div
            className="
              mt-4
              grid
              grid-cols-1
              gap-10
              lg:col-span-2
              lg:grid-cols-2
              lg:items-start
              lg:gap-x-16
            "
          >
            {/* Left: vertically centered against all four cards */}
            <div className="self-start">
              <div className="w-full max-w-xl">
                <p
                  className="
                    mb-8
                    text-base
                    leading-8
                    text-white/85
                    md:text-lg
                  "
                >
                  {t("company.positioning.summary")}
                </p>

                <div className="flex flex-wrap gap-3">
                  <CTAButton
                    variant="white"
                    onClick={() =>
                      navigate("technology")
                    }
                  >
                    {t("home.hero.primaryButton")}

                    <ArrowRight size={14} />
                  </CTAButton>

                  <button
                    type="button"
                    onClick={() =>
                      navigate("contact")
                    }
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      border-2
                      border-white
                      px-6
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      transition-all
                      duration-200
                      hover:bg-white
                      hover:text-primary
                    "
                  >
                    {t("home.hero.secondaryButton")}
                  </button>
                </div>
              </div>
            </div>

            {/* Right: 2 × 2 highlight cards */}
            <div
              className="
                grid
                self-start
                grid-cols-1
                gap-4
                sm:grid-cols-2
                lg:grid-cols-[250px_250px]
                lg:justify-end
              "
            >
              {HOME_HERO_HIGHLIGHTS.map(
                (highlight) => (
                  <article
                    key={highlight.id}
                    className="
                      flex
                      h-[118px]
                      w-full
                      flex-col
                      items-start
                      justify-center
                      rounded-2xl
                      border
                      border-white/45
                      bg-white/20
                      px-6
                      py-5
                      text-left
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-white/25
                      hover:shadow-lg
                      lg:w-[250px]
                    "
                  >
                    <p
                      className="
                        max-w-full
                        whitespace-nowrap
                        text-lg
                        font-bold
                        leading-tight
                        text-white
                        sm:text-xl
                      "
                      style={{
                        fontFamily:
                          "'Plus Jakarta Sans', sans-serif",
                      }}
                    >
                      {t(highlight.valueKey)}
                    </p>

                    <p
                      className="
                        mt-2
                        max-w-[210px]
                        text-xs
                        leading-relaxed
                        text-white/80
                      "
                    >
                      {t(highlight.labelKey)}
                    </p>
                  </article>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          type="button"
          aria-label={t("home.hero.scroll")}
          onClick={() => {
            document
              .getElementById("home-evidence")
              ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
          }}
          className="
            absolute
            bottom-5
            left-1/2
            z-20
            flex
            -translate-x-1/2
            flex-col
            items-center
            gap-1
            text-white/70
            transition-colors
            hover:text-white
          "
        >
          <span
            className="
              font-mono
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.18em]
            "
          >
            {t("home.hero.scroll")}
          </span>

          <ChevronDown
            size={18}
            className="animate-bounce"
          />
        </button>
      </section>
      
      {/* Bidirectional Discovery Workflows and Evidence Section */}
      <section
        id="home-evidence"
        className="
          relative
          scroll-mt-20
          overflow-hidden
          border-b
          border-border
          bg-[#faf7f2]
          py-16
          md:py-20
        "
      >
        {/* Decorative glow */}
        <div
          aria-hidden="true"
          className="
            absolute
            -right-24
            -top-36
            h-[480px]
            w-[480px]
            rounded-full
            blur-[6px]
            motion-safe:animate-[driftA_16s_ease-in-out_infinite]
          "
          style={{
            background:
              "radial-gradient(closest-side, rgba(240,159,116,0.22), transparent 70%)",
          }}
        />

        <div
          aria-hidden="true"
          className="
            absolute
            -bottom-40
            -left-28
            h-[440px]
            w-[440px]
            rounded-full
            blur-[6px]
            motion-safe:animate-[driftB_20s_ease-in-out_infinite]
          "
          style={{
            background:
              "radial-gradient(closest-side, rgba(201,106,62,0.14), transparent 70%)",
          }}
        />

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-[1120px]
            px-6
          "
        >
          {/* Discovery label */}
          <div className="mb-4 text-center">
            <span
              className="
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-[#f09f74]/40
                py-1.5
                pl-2.5
                pr-4
                font-mono
                text-xs
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#c96a3e]
              "
              style={{
                background:
                  "linear-gradient(135deg, rgba(240,159,116,0.16), rgba(201,106,62,0.10))",
              }}
            >
              <span
                className="
                  h-[7px]
                  w-[7px]
                  rounded-full
                  bg-[#ef8a62]
                  shadow-[0_0_0_4px_rgba(240,159,116,0.2)]
                "
              />

              {t("home.workflows.label")}
            </span>
          </div>

          {/* Discovery heading */}
          <h2
            className="
              mx-auto
              mb-11
              text-center
              text-[clamp(1.75rem,3.4vw,2.625rem)]
              font-extrabold
              tracking-[-0.03em]
              text-foreground
            "
            style={{
              fontFamily:
                "'Plus Jakarta Sans', sans-serif",
            }}
          >
            {t("home.workflows.titleStart")}{" "}

            <span className="text-[#c96a3e]">
              {t("home.workflows.titleAccent")}
            </span>{" "}

            {t("home.workflows.titleEnd")}
          </h2>

          {/* Direction cards */}
          <div
            className="
              mx-auto
              grid
              max-w-[660px]
              grid-cols-1
              items-center
              justify-items-center
              gap-4
              md:grid-cols-[285px_54px_285px]
              md:gap-4
            "
          >
            {HOME_WORKFLOWS.map(
              (workflow, index) => {
                const Icon =
                  WORKFLOW_ICONS[workflow.icon];

                return (
                  <Fragment key={workflow.id}>
                    {/* Compact workflow card */}
                    <article
                      className="
                        relative
                        w-full
                        max-w-[340px]
                        overflow-hidden
                        rounded-[18px]
                        border
                        border-border
                        bg-white
                        px-5
                        py-4
                        shadow-[0_10px_26px_rgba(20,24,39,0.05)]
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-[#ef8a62]/50
                        hover:shadow-[0_14px_32px_rgba(201,106,62,0.12)]
                        md:w-fit
                        md:min-w-[285px]
                      "
                    >
                      {/* Coral left edge */}
                      <div
                        aria-hidden="true"
                        className="
                          absolute
                          inset-y-0
                          left-0
                          w-1
                          bg-gradient-to-b
                          from-[#f09f74]
                          to-[#c96a3e]
                        "
                      />

                      <div className="flex items-center gap-3.5">
                        {/* Smaller icon */}
                        <span
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-[#f09f74]/45
                            bg-gradient-to-br
                            from-[#fdf0e8]
                            to-[#f9dccc]
                            text-[#c96a3e]
                          "
                        >
                          <Icon />
                        </span>

                        <div className="min-w-0">
                          {/* 01 and title on the same line */}
                          <div
                            className="
                              flex
                              items-center
                              gap-2.5
                            "
                          >
                            <span
                              className="
                                shrink-0
                                font-mono
                                text-xs
                                font-semibold
                                text-[#ef8a62]
                              "
                            >
                              {workflow.direction}
                            </span>

                            <h3
                              className="
                                whitespace-nowrap
                                text-[17px]
                                font-bold
                                leading-tight
                                text-foreground
                              "
                              style={{
                                fontFamily:
                                  "'Plus Jakarta Sans', sans-serif",
                              }}
                            >
                              {t(workflow.titleKey)}
                            </h3>
                          </div>

                          <p
                            className="
                              mt-1.5
                              max-w-[225px]
                              text-[12.5px]
                              leading-[1.45]
                              text-muted-foreground
                            "
                          >
                            {t(workflow.descriptionKey)}
                          </p>
                        </div>
                      </div>
                    </article>

                    {/* Connector between the two cards */}
                    {index === 0 && (
                      <div
                        aria-hidden="true"
                        className="
                          flex
                          h-[54px]
                          w-[54px]
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#141827]
                          text-[#f09f74]
                          shadow-[0_8px_22px_rgba(20,24,39,0.25)]
                        "
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M8 7H4" />
                          <path d="M4 7 7 4" />
                          <path d="M4 7 7 10" />

                          <path d="M16 17h4" />
                          <path d="m20 17-3 3" />
                          <path d="m20 17-3-3" />
                        </svg>
                      </div>
                    )}
                  </Fragment>
                );
              },
            )}
          </div>

          {/* ===================== Evidence ===================== */}
          <div className="mt-16 text-center">
            <h3
              className="
                mb-9
                text-[clamp(1.3rem,2.4vw,1.8rem)]
                font-extrabold
                tracking-[-0.025em]
                text-foreground
              "
              style={{
                fontFamily:
                  "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {t("home.evidence.titleStart")}{" "}

              <span
                className="
                  bg-gradient-to-br
                  from-[#f09f74]
                  to-[#c96a3e]
                  bg-clip-text
                  text-transparent
                "
              >
                {t(
                  "home.evidence.titleAccent",
                )}
              </span>
            </h3>

            <div
              className="
                relative
                mx-auto
                max-w-[900px]
              "
            >
              {/*
                The desktop grid has three columns with two 24px gaps.

                This calculation places the line endpoints
                at the exact center of the first and third columns.
              */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  left-[calc((100%_-_48px)/6)]
                  right-[calc((100%_-_48px)/6)]
                  top-[43px]
                  z-0
                  hidden
                  h-[2px]
                  md:block
                "
                style={{
                  background:
                    "linear-gradient(90deg, #f6ddcd, #ef8a62, #f6ddcd)",
                }}
              >
                <span
                  className="
                    absolute
                    -top-[3px]
                    h-2
                    w-2
                    rounded-full
                    bg-[#c96a3e]
                    shadow-[0_0_12px_rgba(201,106,62,0.8)]
                    motion-safe:animate-[flowDot_3.4s_ease-in-out_infinite]
                  "
                />
              </div>

              <div
                className="
                  relative
                  z-10
                  grid
                  grid-cols-1
                  justify-items-center
                  gap-8
                  md:grid-cols-3
                  md:gap-6
                "
              >
                {HOME_EVIDENCE_LAYERS.map(
                  (layer) => {
                    const Icon =
                      EVIDENCE_ICONS[layer.id];

                    return (
                      <article
                        key={layer.id}
                        className="
                          flex
                          w-full
                          max-w-[260px]
                          flex-col
                          items-center
                        "
                      >
                        {/* Icon centered on the connector line */}
                        <div
                          className="
                            relative
                            z-10
                            flex
                            h-[86px]
                            w-[86px]
                            items-center
                            justify-center
                            rounded-3xl
                            border
                            border-border
                            bg-white
                            text-[#c96a3e]
                            shadow-[0_12px_26px_rgba(201,106,62,0.12)]
                          "
                        >
                          <span
                            className="
                              absolute
                              -right-2.5
                              -top-2.5
                              flex
                              h-[27px]
                              w-[27px]
                              items-center
                              justify-center
                              rounded-full
                              bg-gradient-to-br
                              from-[#f09f74]
                              to-[#c96a3e]
                              font-mono
                              text-xs
                              font-semibold
                              text-white
                            "
                          >
                            {layer.number}
                          </span>

                          <Icon className="h-10 w-10" />
                        </div>

                        {/* Compact evidence text card */}
                        <div
                          className="
                            mt-5
                            flex
                            min-h-[122px]
                            w-full
                            flex-col
                            items-center
                            justify-center
                            rounded-[18px]
                            border
                            border-border
                            bg-white
                            px-5
                            py-4
                            text-center
                            shadow-[0_8px_22px_rgba(20,24,39,0.035)]
                          "
                        >
                          <h4
                            className="
                              whitespace-nowrap
                              text-base
                              font-bold
                              text-foreground
                            "
                            style={{
                              fontFamily:
                                "'Plus Jakarta Sans', sans-serif",
                            }}
                          >
                            {t(layer.titleKey)}
                          </h4>

                          <p
                            className="
                              mx-auto
                              mt-2
                              max-w-[225px]
                              text-[12.5px]
                              leading-[1.55]
                              text-muted-foreground
                            "
                          >
                            {t(
                              layer.descriptionKey,
                            )}
                          </p>
                        </div>
                      </article>
                    );
                  },
                )}
              </div>
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={() =>
                navigate("technology")
              }
              className="
                mt-11
                inline-flex
                items-center
                gap-2.5
                rounded-full
                bg-gradient-to-br
                from-[#f09f74]
                to-[#e8845a]
                px-7
                py-3.5
                text-[15px]
                font-bold
                text-white
                shadow-[0_12px_26px_rgba(232,132,90,0.35)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_16px_30px_rgba(232,132,90,0.42)]
              "
            >
              {t(
                "home.workflows.button",
              )}

              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </section>
            
      {/* Latest News Section */}
      <LatestNewsStrip
        navigate={navigate}
        t={t}
      />

      {/* Contact CTA */}
      <section
        className="
          mx-auto
          max-w-7xl
          px-6
          py-20
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
          "
        >
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-[#f09f74]
              via-[#e8845a]
              to-[#c96a3e]
            "
          />

          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "radial-gradient(circle at 70% 50%, rgba(255,255,255,0.5) 0%, transparent 60%)",
            }}
          />

          <div
            className="
              relative
              flex
              flex-col
              items-center
              justify-between
              gap-6
              p-10
              md:flex-row
              md:p-16
            "
          >
            <div>
              <h2
                className="
                  mb-2
                  text-2xl
                  font-bold
                  text-white
                  md:text-3xl
                "
                style={{
                  fontFamily:
                    "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {t("home.cta.title")}
              </h2>

              <p
                className="
                  max-w-md
                  text-sm
                  leading-relaxed
                  text-white/80
                "
              >
                {t("home.cta.description")}
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                navigate("contact")
              }
              className="
                inline-flex
                shrink-0
                items-center
                gap-2
                rounded-full
                bg-white
                px-8
                py-3
                text-sm
                font-semibold
                text-primary
                transition-colors
                hover:bg-[#fdf0e8]
              "
            >
              {t("home.cta.button")}

              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* Repurgenesis logo marquee */}
      <section
        aria-label="Repurgenesis"
        className="partner-marquee relative overflow-hidden bg-[#1b2130] py-6 md:py-5"
      >
        {/* subtle dot texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1.5px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* left edge fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#1b2130] to-transparent md:w-32"
        />

        {/* right edge fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#1b2130] to-transparent md:w-32"
        />

        <div className="partner-marquee-track relative flex w-max items-center">
          <CompanyLogoGroup />
          {/* Duplicate enables a seamless loop */}
          <CompanyLogoGroup />
        </div>

        {/* coral hairline seam into the footer */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-0.5"
          style={{
            background:
              "linear-gradient(90deg, transparent, #c96a3e, transparent)",
          }}
        />
      </section>
    
    </div>
  );
}