import { Fragment } from "react";
import { ArrowRight, Atom, ChevronDown, Dna, Pill, Network } from "lucide-react";

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

const WORKFLOW_ICONS = {
  pill: Pill,
  dna: Dna,
} as const;

const EVIDENCE_ICONS = {
  expression: Dna,
  structure: Atom,
  knowledge: Network,
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
          scroll-mt-20
          border-b
          border-border
          bg-background
          py-14
          md:py-16
        "
      >
        <div className="mx-auto max-w-7xl px-6">
          {/* Bidirectional Discovery heading */}
           <div className="mb-8">
              {/* Label and title centered together,
                  but aligned to the same left edge */}
              <div
                className="
                  mx-auto
                  w-fit
                  max-w-full
                "
              >
                <div
                  className="
                    mb-3
                    flex
                    items-center
                    justify-center
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

                  <span>
                    {t("home.workflows.label")}
                  </span>
                </div>

                <h2
                  className="
                    text-3xl
                    font-bold
                    leading-tight
                    tracking-tight
                    text-foreground
                    md:text-4xl
                    md:whitespace-nowrap
                  "
                  style={{
                    fontFamily:
                      "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {t("home.workflows.title")}
                </h2>
              </div>

              {/* Description centered independently */}
              {/* <p
                className="
                  mx-auto
                  mt-4
                  max-w-2xl
                  text-center
                  text-sm
                  leading-relaxed
                  text-muted-foreground
                  md:text-base
                "
              >
                {t("home.workflows.description")}
              </p> */}
            </div>

          {/* Compact workflow options */}
          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              justify-center
              gap-4
            "
          >
            {HOME_WORKFLOWS.map((workflow) => {
              const Icon =
                WORKFLOW_ICONS[workflow.icon];

              return (
                <article
                  key={workflow.id}
                  className="
                    inline-flex
                    min-h-[72px]
                    w-fit
                    min-w-[230px]
                    items-center
                    justify-center
                    gap-4
                    rounded-2xl
                    border
                    border-border
                    bg-card
                    px-6
                    py-4
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-[#ef8a62]/50
                    hover:shadow-md
                  "
                >
                  <span
                    className="
                      shrink-0
                      font-mono
                      text-sm
                      font-semibold
                      text-[#ef8a62]
                    "
                  >
                    {workflow.direction}
                  </span>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#ef8a62]/10
                      text-[#ef8a62]
                    "
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <h3
                    className="
                      whitespace-nowrap
                      text-lg
                      font-bold
                      text-foreground
                    "
                    style={{
                      fontFamily:
                        "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {t(workflow.labelKey)}
                  </h3>
                </article>
              );
            })}
          </div>
          
          {/* Integrated Evidence heading */}
          <div className="mt-10 mb-8 text-center">
            <h2
              className="
                text-2xl
                font-bold
                leading-tight
                tracking-tight
                text-foreground
                md:text-10xl
                md:whitespace-nowrap
              "
              style={{
                fontFamily:
                  "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {t("home.evidence.title")}
            </h2>

            {/* <p
              className="
                mx-auto
                mt-4
                max-w-3xl
                text-sm
                leading-relaxed
                text-muted-foreground
                md:text-base
              "
            >
              {t("home.evidence.description")}
            </p> */}
          </div>

          {/* Compact evidence options */}
          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              justify-center
              gap-4
            "
          >
            {HOME_EVIDENCE_LAYERS.map((layer) => {
              const Icon =
                EVIDENCE_ICONS[layer.id];

              return (
                <article
                  key={layer.id}
                  className="
                    inline-flex
                    min-h-[72px]
                    w-fit
                    min-w-[220px]
                    items-center
                    justify-center
                    gap-4
                    rounded-2xl
                    border
                    border-border
                    bg-card
                    px-6
                    py-4
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-[#ef8a62]/50
                    hover:shadow-md
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#ef8a62]/10
                      text-[#ef8a62]
                    "
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <h3
                    className="
                      whitespace-nowrap
                      text-lg
                      font-bold
                      text-foreground
                    "
                    style={{
                      fontFamily:
                        "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {t(layer.titleKey)}
                  </h3>
                </article>
              );
            })}
          </div>

          {/* Workflow CTA moved below both groups */}
          <div
            className="
              mt-10
              flex
              justify-center
            "
          >
            <CTAButton
              variant="outline"
              onClick={() =>
                navigate("technology")
              }
            >
              {t("home.workflows.button")}

              <ArrowRight size={14} />
            </CTAButton>
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
        className="
          partner-marquee
          relative
          overflow-hidden
          border-y
          border-[#fada5e]
          bg-[#fada5e]
          py-6
          md:py-7
        "
      >
        {/* Left edge fade using the same yellow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-10
            w-16
            bg-gradient-to-r
            from-[#fada5e]
            via-[#fada5e]/90
            to-transparent
            md:w-24
          "
        />

        {/* Right edge fade using the same yellow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            z-10
            w-16
            bg-gradient-to-l
            from-[#fada5e]
            via-[#fada5e]/90
            to-transparent
            md:w-24
          "
        />

        <div
          className="
            partner-marquee-track
            flex
            w-max
            items-center
          "
        >
          <CompanyLogoGroup />
          {/* Duplicate enables a seamless loop */}
          <CompanyLogoGroup />
        </div>
      </section>
    
    </div>
  );
}