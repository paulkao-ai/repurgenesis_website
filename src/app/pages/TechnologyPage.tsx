/*
  Technology page — light editorial hero, coral-forward accents, and full-bleed alternating blocks.

  ── ASSETS ────────────────────────────────────────────────────────────────
  Drop the figures into  src/app/data/technology/  (adjust names/paths to taste):
     1.svg  unified AI framework hub    → hero illustration
     2.svg  drug → disease flowchart    → Our Platform Flow (left)
     3.svg  disease → drug flowchart    → Our Platform Flow (right)
     4.jpg  binding prediction / wet-lab → Drug-Target Driven split
     5.jpg  KG + gene-expression tools   → Disease-Gene Driven split
     6.svg  NVIDIA BioNeMo orchestrator  → Accelerated Computing showcase

  ── COPY ──────────────────────────────────────────────────────────────────
  All user-facing copy is loaded through the shared translator in content.ts.
  The 5-step process continues to use the existing localized `steps` data.
*/

import {
  useEffect,
  useRef,
  useState,
} from "react";

import type {
  CSSProperties,
  ReactNode,
} from "react";

import {
  steps,
  TECHNOLOGY_ACCELERATED_TAGS,
  TECHNOLOGY_CHALLENGES,
  TECHNOLOGY_DISEASE_GENE_TAGS,
  TECHNOLOGY_DRUG_TARGET_TAGS,
  TECHNOLOGY_PIPELINE_ROWS,
  TECHNOLOGY_PIPELINE_STAGES,
} from "@app/data/content";

import type {
  Language,
  Translator,
} from "@app/types";

/*
 * Technology-page assets.
 *
 * Files should be stored in:
 * src/app/data/technology/
 */
import frameworkHub from
  "@app/data/technology/1.svg?url";

import drugToDiseaseFlow from
  "@app/data/technology/2.svg?url";

import diseaseToDrugFlow from
  "@app/data/technology/3.svg?url";

import drugTargetDiagram from
  "@app/data/technology/4.jpg?url";

import diseaseGeneDiagram from
  "@app/data/technology/5.jpg?url";

import orchestratorDiagram from
  "@app/data/technology/6.svg?url";

const HEADING_FONT = {
  fontFamily:
    "'Plus Jakarta Sans', sans-serif",
} as const;

type RevealDirection =
  | "up"
  | "left"
  | "right";

type RevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  from?: RevealDirection;
  delay?: number;
};

/* ── Scroll reveal ────────────────────────────────────────────── */
function Reveal({
  children,
  className,
  style,
  from = "up",
  delay = 0,
}: RevealProps) {
  const ref =
    useRef<HTMLDivElement | null>(
      null,
    );

  const [
    shown,
    setShown,
  ] = useState(false);

  useEffect(() => {
    const element =
      ref.current;

    if (!element) {
      return;
    }

    if (
      !(
        "IntersectionObserver" in
        window
      )
    ) {
      setShown(true);
      return;
    }

    const observer =
      new IntersectionObserver(
        (
          entries,
          currentObserver,
        ) => {
          entries.forEach(
            (entry) => {
              if (
                entry.isIntersecting
              ) {
                setShown(true);

                currentObserver.unobserve(
                  entry.target,
                );
              }
            },
          );
        },
        {
          threshold:
            0.12,

          rootMargin:
            "0px 0px -8% 0px",
        },
      );

    observer.observe(
      element,
    );

    return () => {
      observer.disconnect();
    };
  }, []);

  const hiddenTransform =
    from === "left"
      ? "translateX(-24px)"
      : from === "right"
        ? "translateX(24px)"
        : "translateY(28px)";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,

        opacity:
          shown
            ? 1
            : 0,

        transform:
          shown
            ? "none"
            : hiddenTransform,

        transition: [
          `opacity 800ms ease ${delay}ms`,
          `transform 800ms ease ${delay}ms`,
        ].join(", "),
      }}
    >
      {children}
    </div>
  );
}

/* ── pipeline bar that grows left → right when scrolled into view ───────── */
function PipelineBar({ filled }: { filled: boolean }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [grown, setGrown] = useState(false);

  useEffect(() => {
    if (!filled) return;
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setGrown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setGrown(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [filled]);

  if (!filled) {
    return <span className="h-[26px] w-full rounded-md border border-dashed border-[#e3d8ca] bg-[#f4eee6]" />;
  }
  return (
    <span ref={ref} className="h-[26px] w-full overflow-hidden rounded-md bg-[#f4eee6]">
      <span
        className="block h-full rounded-md bg-gradient-to-br from-[#f6b892] to-[#e8845a] shadow-[0_3px_8px_rgba(232,132,90,0.28)]"
        style={{ width: grown ? "100%" : "0%", transition: "width .95s cubic-bezier(.22,1,.36,1)" }}
      />
    </span>
  );
}

/* ── data ──────────────────────────────────────────────────────────────── */
const CHALLENGE_ICONS = {
  integration: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <path d="M17.5 14v3.5M14 17.5h7" />
    </svg>
  ),
  scale: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
      <circle cx="8" cy="7" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="15" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="10" cy="17" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  workflow: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="6" height="5" rx="1.2" />
      <rect x="15" y="15" width="6" height="5" rx="1.2" />
      <path d="M9 6.5h4a3 3 0 0 1 3 3v7.5" />
    </svg>
  ),
  interop: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3v4M16 3v4" />
      <path d="M6 7h12v4a6 6 0 0 1-12 0z" />
      <path d="M12 17v4" />
    </svg>
  ),
};


const CORAL_GRAD = "linear-gradient(120deg,#e8845a,#c96a3e)";

export function TechnologyPage({ t, language }: { t: Translator; language: Language }) {
  void language;

  return (
    <div className="overflow-x-hidden">
      {/* ===================== HERO (light editorial + dark diagram panel) ===================== */}
      <section
        className="
          relative
          overflow-hidden
          border-b
          border-[#eadfd4]
          bg-[#fbf8f4]
          pb-24
          pt-36
          md:pb-28
          md:pt-40
        "
      >
        {/* Soft warm glow */}
        <div
          aria-hidden="true"
          className="
            absolute
            -right-28
            -top-44
            h-[620px]
            w-[620px]
            rounded-full
            blur-[10px]
            motion-safe:animate-[driftA_18s_ease-in-out_infinite]
          "
          style={{
            background:
              "radial-gradient(closest-side, rgba(240,159,116,0.24), transparent 72%)",
          }}
        />

        <div
          aria-hidden="true"
          className="
            absolute
            -bottom-52
            -left-36
            h-[500px]
            w-[500px]
            rounded-full
            blur-[10px]
            motion-safe:animate-[driftB_22s_ease-in-out_infinite]
          "
          style={{
            background:
              "radial-gradient(closest-side, rgba(201,106,62,0.12), transparent 72%)",
          }}
        />

        {/* Subtle technical grid */}
        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            opacity-60
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,106,62,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(201,106,62,0.045) 1px, transparent 1px)",

            backgroundSize:
              "40px 40px",

            WebkitMaskImage:
              "linear-gradient(to bottom, #000 20%, transparent 92%)",

            maskImage:
              "linear-gradient(to bottom, #000 20%, transparent 92%)",
          }}
        />

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            max-w-[1180px]
            grid-cols-1
            items-center
            gap-14
            px-6
            md:px-10
            lg:grid-cols-[1.02fr_0.98fr]
            lg:gap-16
          "
        >
          <Reveal>
            <span
              className="
                inline-flex
                items-center
                gap-2.5
                font-mono
                text-[13px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#c96a3e]
              "
            >
              <span
                className="
                  h-px
                  w-[26px]
                  bg-[#e8845a]
                "
              />

              {t("technology.hero.label")}
            </span>

            <h1
              className="
                mt-6
                max-w-[15ch]
                text-balance
                text-[clamp(2.5rem,4.4vw,4rem)]
                font-extrabold
                leading-[1.03]
                tracking-[-0.035em]
                text-[#141827]
              "
              style={HEADING_FONT}
            >
              {t("technology.hero.title")}
            </h1>

            <p
              className="
                mt-6
                max-w-[46ch]
                text-[18px]
                leading-[1.75]
                text-[#6f6b76]
              "
            >
              {t("technology.hero.description")}
            </p>
          </Reveal>

          <Reveal
            from="up"
            delay={120}
            className="relative"
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -inset-3
                rounded-[34px]
                blur-[8px]
              "
              style={{
                background:
                  "linear-gradient(135deg, rgba(240,159,116,0.34), rgba(201,106,62,0.08))",
              }}
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border-[3px]
                border-[#EF8A62]
                bg-[#171D2C]
                p-[7px]
                shadow-[0_22px_50px_rgba(201,106,62,0.18)]
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-center
                  rounded-[21px]
                  bg-[#171d2c]
                  p-6
                  md:p-7
                  motion-safe:animate-[techFloat_7s_ease-in-out_infinite]
                "
              >
                <img
                  src={frameworkHub}
                  alt={t("technology.hero.imageAlt")}
                  className="
                    h-auto
                    w-full
                    max-w-[470px]
                  "
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== OUR PLATFORM FLOW (navy cards + coral separators) ===================== */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg,#fbeadd,#f7d8c4)" }}>
        <div aria-hidden="true" className="absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(rgba(201,106,62,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(201,106,62,0.08) 1px, transparent 1px)", backgroundSize: "44px 44px", WebkitMaskImage: "radial-gradient(ellipse 85% 70% at 50% 30%, #000 40%, transparent 80%)", maskImage: "radial-gradient(ellipse 85% 70% at 50% 30%, #000 40%, transparent 80%)" }} />
        <div aria-hidden="true" className="absolute -right-28 top-16 h-[420px] w-[420px] rounded-full blur-[8px] motion-safe:animate-[driftA_20s_ease-in-out_infinite]" style={{ background: "radial-gradient(closest-side, rgba(240,159,116,0.5), transparent 70%)" }} />

        <div className="relative z-10 mx-auto max-w-[1180px] px-10 pb-10 pt-[100px] text-center">
          <Reveal>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#b3561f]">{t("technology.flow.label")}</span>
            <h2 className="mt-3.5 text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#3a1c0e] text-balance" style={HEADING_FONT}>
              {t("technology.flow.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-[60ch] text-[17px] leading-[1.75] text-[#7a4a34]">
              {t("technology.flow.description")}
            </p>
          </Reveal>
        </div>

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            max-w-[1180px]
            grid-cols-1
            items-stretch
            gap-9
            px-6
            pt-11
            md:px-10
            lg:grid-cols-2
          "
        >
          {/* Drug → Disease */}
          <Reveal
            from="left"
            className="
              flex
              h-full
              flex-col
              overflow-hidden
              rounded-[28px]
              border-2
              border-[#e8845a]
              bg-[#17182d]
              shadow-[0_24px_52px_rgba(91,45,27,0.18)]
            "
          >
            <header
              className="
                flex
                min-h-[72px]
                items-center
                gap-2.5
                border-b
                border-[#e8845a]
                bg-[#17182d]
                px-6
                py-[18px]
                text-sm
                font-bold
                tracking-[0.02em]
                text-[#e9b08c]
              "
            >
              <span>{t("technology.flow.drugToDisease.source")}</span>

              <span
                aria-hidden="true"
                className="text-[#e9b08c]"
              >
                &rarr;
              </span>

              <span>{t("technology.flow.drugToDisease.target")}</span>

              <span
                className="
                  ml-auto
                  font-mono
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-[#f3ad86]
                "
              >
                {t("technology.flow.drugToDisease.mode")}
              </span>
            </header>

            <div
              className="
                flex
                flex-1
                items-center
                justify-center
                bg-[#17182d]
                px-5
                py-7
                md:px-7
                md:py-8
              "
            >
              <div
                className="
                  flex
                  h-[620px]
                  w-full
                  items-center
                  justify-center
                  md:h-[700px]
                  lg:h-[660px]
                  xl:h-[720px]
                "
              >
                <img
                  src={drugToDiseaseFlow}
                  alt={t("technology.flow.drugToDisease.imageAlt")}
                  className="
                    block
                    max-h-full
                    w-auto
                    max-w-full
                    origin-center
                    scale-[0.95]
                    object-contain
                  "
                />
              </div>
            </div>
          </Reveal>

          {/* Disease → Drug */}
          <Reveal
            from="right"
            delay={100}
            className="
              flex
              h-full
              flex-col
              overflow-hidden
              rounded-[28px]
              border-2
              border-[#e8845a]
              bg-[#c3754e]
              shadow-[0_24px_52px_rgba(91,45,27,0.18)]
            "
          >
            <header
              className="
                flex
                min-h-[72px]
                items-center
                gap-2.5
                border-b
                border-[#e8845a]
                bg-[#c3754e]
                px-6
                py-[18px]
                text-sm
                font-bold
                tracking-[0.02em]
                text-white
              "
            >
              <span>{t("technology.flow.diseaseToDrug.source")}</span>

              <span
                aria-hidden="true"
                className="text-[#ffe2d1]"
              >
                &rarr;
              </span>

              <span>{t("technology.flow.diseaseToDrug.target")}</span>

              <span
                className="
                  ml-auto
                  font-mono
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-white/85
                "
              >
                {t("technology.flow.diseaseToDrug.mode")}
              </span>
            </header>

            <div
              className="
                flex
                flex-1
                items-center
                justify-center
                bg-[#c3754e]
                px-5
                py-7
                md:px-7
                md:py-8
              "
            >
              <div
                className="
                  flex
                  h-[620px]
                  w-full
                  items-center
                  justify-center
                  md:h-[700px]
                  lg:h-[660px]
                  xl:h-[720px]
                "
              >
                <img
                  src={diseaseToDrugFlow}
                  alt={t("technology.flow.diseaseToDrug.imageAlt")}
                  className="
                    block
                    max-h-full
                    w-auto
                    max-w-full
                    origin-center
                    scale-[1.06]
                    object-contain
                  "
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* process line */}
        <div className="relative z-10 mx-auto max-w-[1180px] px-10 pb-[100px] pt-[72px]">
          <div className="relative grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-0">
            <div aria-hidden="true" className="absolute left-[10%] right-[10%] top-[26px] hidden h-0.5 lg:block" style={{ background: "linear-gradient(90deg,rgba(201,106,62,0.25),#c96a3e,rgba(201,106,62,0.25))" }} />
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 80} className="relative z-10 flex flex-col items-center px-3 text-center">
                <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full border-4 border-[#f9ddca] bg-gradient-to-br from-[#f09f74] to-[#c96a3e] text-[17px] font-extrabold text-white shadow-[0_8px_22px_rgba(201,106,62,0.35)]">
                  {s.step}
                </span>
                <h3 className="mt-4 text-[15px] font-bold leading-tight text-[#3a1c0e] text-balance" style={HEADING_FONT}>{t(s.labelKey)}</h3>
                <p className="mt-1.5 text-[12.5px] leading-[1.5] text-[#956a53] text-balance">{t(s.descriptionKey)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== STATEMENT BLOCK (coral) ===================== */}
      <section className="relative overflow-hidden" style={{ background: CORAL_GRAD }}>
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.16]" style={{ backgroundImage: "radial-gradient(circle at 80% 30%, rgba(255,255,255,0.7) 0%, transparent 55%)" }} />
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.14]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1.5px)", backgroundSize: "22px 22px" }} />
        <Reveal className="relative z-10 mx-auto max-w-[1180px] px-10 py-[104px]">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-white/80">{t("technology.bidirectional.label")}</span>
          <h2 className="mt-4 max-w-[20ch] text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-white text-balance" style={HEADING_FONT}>
            {t("technology.bidirectional.title")}
          </h2>
          <p className="mt-5 max-w-[52ch] text-[18px] leading-[1.7] text-white/90">
            {t("technology.bidirectional.description")}
          </p>
        </Reveal>
      </section>

      {/* ===================== DRUG-TARGET DRIVEN (split, big image) ===================== */}
      <section className="grid min-h-[560px] grid-cols-1 items-stretch lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal from="left" className="flex flex-col justify-center bg-[#141827] px-10 py-20 lg:px-[clamp(40px,5vw,72px)]">
          <span className="inline-flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#f3ad86]">
            <span className="h-px w-[22px] bg-[#e8845a]" />{t("technology.approaches.drugTarget.label")}
          </span>
          <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white text-balance" style={HEADING_FONT}>{t("technology.approaches.drugTarget.title")}</h2>
          <p className="mt-4 max-w-[40ch] text-[17px] leading-[1.75] text-white/70">
            {t("technology.approaches.drugTarget.description")}
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {TECHNOLOGY_DRUG_TARGET_TAGS.map((tag) => (
              <span key={tag.id} className="rounded-full border border-[#f09f74]/40 bg-[#f09f74]/[0.08] px-3.5 py-1.5 text-[12.5px] font-semibold text-[#f3ad86]">{t(tag.labelKey)}</span>
            ))}
          </div>
        </Reveal>
        <Reveal from="right" delay={100} className="flex items-center justify-center p-[clamp(28px,3vw,44px)]" style={{ background: "linear-gradient(140deg,#f3e6db,#efd9c8)" }}>
          <img src={drugTargetDiagram} alt={t("technology.approaches.drugTarget.imageAlt")} className="h-auto w-full rounded-xl shadow-[0_20px_44px_rgba(20,24,39,0.16)]" />
        </Reveal>
      </section>

      {/* ===================== DISEASE-GENE DRIVEN (split, big image) ===================== */}
      <section className="grid min-h-[560px] grid-cols-1 items-stretch lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal from="left" className="flex items-center justify-center p-[clamp(28px,3vw,44px)]" style={{ background: "linear-gradient(140deg,#fbf1e9,#f6e4d6)" }}>
          <img src={diseaseGeneDiagram} alt={t("technology.approaches.diseaseGene.imageAlt")} className="h-auto w-full rounded-xl shadow-[0_20px_44px_rgba(20,24,39,0.16)]" />
        </Reveal>
        <Reveal from="right" delay={100} className="relative flex flex-col justify-center overflow-hidden px-10 py-20 lg:px-[clamp(40px,5vw,72px)]" style={{ background: CORAL_GRAD }}>
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "radial-gradient(circle at 70% 25%, rgba(255,255,255,0.7) 0%, transparent 55%)" }} />
          <span className="relative inline-flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-white/85">
            <span className="h-px w-[22px] bg-white/70" />{t("technology.approaches.diseaseGene.label")}
          </span>
          <h2 className="relative mt-4 text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white text-balance" style={HEADING_FONT}>{t("technology.approaches.diseaseGene.title")}</h2>
          <p className="relative mt-4 max-w-[40ch] text-[17px] leading-[1.75] text-white/[0.92]">
            {t("technology.approaches.diseaseGene.description")}
          </p>
          <div className="relative mt-6 flex flex-wrap gap-2.5">
            {TECHNOLOGY_DISEASE_GENE_TAGS.map((tag) => (
              <span key={tag.id} className="rounded-full border border-white/50 bg-white/[0.12] px-3.5 py-1.5 text-[12.5px] font-semibold text-white">{t(tag.labelKey)}</span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===================== THE PROBLEM (coral tint, icons) ===================== */}
      <section className="relative overflow-hidden py-[100px]" style={{ background: "linear-gradient(180deg,#faf3ec,#f7e7db)" }}>
        <div aria-hidden="true" className="absolute -bottom-28 -left-24 h-[420px] w-[420px] rounded-full blur-[8px]" style={{ background: "radial-gradient(closest-side, rgba(240,159,116,0.28), transparent 70%)" }} />
        <div className="relative z-10 mx-auto max-w-[1180px] px-10">
          <Reveal className="mb-13 max-w-[720px]">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#c96a3e]">{t("technology.challenges.label")}</span>
            <h2 className="mt-3.5 text-[clamp(1.9rem,3.4vw,2.7rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#3a1c0e] text-balance" style={HEADING_FONT}>{t("technology.challenges.title")}</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2">
            {TECHNOLOGY_CHALLENGES.map((c, i) => (
              <Reveal key={c.num} delay={i * 90} className="flex items-start gap-[18px] rounded-[18px] border border-[#c96a3e]/[0.14] bg-[#fffdfb] p-[26px_28px] shadow-[0_12px_30px_rgba(120,60,30,0.07)]">
                <span className="flex h-[52px] w-[52px] flex-none items-center justify-center rounded-[14px] bg-gradient-to-br from-[#f09f74] to-[#c96a3e] text-white shadow-[0_8px_18px_rgba(201,106,62,0.3)]">
                  {CHALLENGE_ICONS[c.id]}
                </span>
                <div>
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-[12.5px] font-extrabold tracking-[0.05em] text-[#e8845a]">{c.num}</span>
                    <h3 className="text-[19px] font-bold tracking-[-0.01em] text-[#3a1c0e]">{t(c.titleKey)}</h3>
                  </div>
                  <p className="mt-2.5 max-w-[44ch] text-[14.5px] leading-[1.7] text-[#7a5648]">{t(c.bodyKey)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ACCELERATED COMPUTING (dark showcase) ===================== */}
      <section className="relative overflow-hidden bg-[#0f1420] py-[100px]">
        <div aria-hidden="true" className="absolute inset-0 opacity-50" style={{ backgroundImage: "radial-gradient(rgba(118,185,0,0.06) 1px, transparent 1.5px)", backgroundSize: "24px 24px" }} />
        <div aria-hidden="true" className="absolute -top-32 left-[42%] h-[460px] w-[460px] rounded-full blur-[8px]" style={{ background: "radial-gradient(closest-side, rgba(118,185,0,0.13), transparent 70%)" }} />
        <Reveal className="relative z-10 mx-auto max-w-[960px] px-10 text-center">
          <span className="inline-flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#9fd356]">
            <span className="h-[7px] w-[7px] rounded-full bg-[#76b900]" />{t("technology.accelerated.label")}
          </span>
          <h2 className="mt-4 text-[clamp(1.9rem,3.4vw,2.8rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white text-balance" style={HEADING_FONT}>{t("technology.accelerated.title")}</h2>
          <p className="mx-auto mt-4 max-w-[60ch] text-[17px] leading-[1.75] text-white/[0.68]">
            {t("technology.accelerated.description")}
          </p>
        </Reveal>
        <Reveal delay={100} className="relative z-10 mx-auto mt-13 max-w-[1080px] px-10">
          <div className="rounded-[20px] bg-white p-[30px] shadow-[0_30px_62px_rgba(0,0,0,0.5)]">
            <img src={orchestratorDiagram} alt={t("technology.accelerated.imageAlt")} className="h-auto w-full" />
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {TECHNOLOGY_ACCELERATED_TAGS.map((tag) => (
              <span key={tag.id} className="inline-flex items-center gap-2 rounded-full border border-[#76b900]/40 bg-[#76b900]/[0.08] px-4.5 py-2 text-[13px] font-semibold text-[#c7e79a]">{t(tag.labelKey)}</span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===================== TRANSLATIONAL PIPELINE (bars grow L→R) ===================== */}
      <section id="pipeline" className="relative scroll-mt-20 overflow-hidden bg-[#faf7f2] py-[88px]">
        <div aria-hidden="true" className="absolute -bottom-36 -right-28 h-[420px] w-[420px] rounded-full blur-[6px]" style={{ background: "radial-gradient(closest-side, rgba(201,106,62,0.12), transparent 70%)" }} />
        <div className="relative z-10 mx-auto max-w-[1120px] px-6">
          <Reveal className="mb-11 text-center">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#c96a3e]">{t("technology.portfolio.label")}</span>
            <h2 className="mt-3 text-[clamp(1.7rem,2.8vw,2.4rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-foreground text-balance" style={HEADING_FONT}>{t("technology.portfolio.title")}</h2>
            <p className="mx-auto mt-3.5 max-w-[52ch] text-base leading-[1.7] text-muted-foreground">
              {t("technology.portfolio.description")}
            </p>
          </Reveal>

          <Reveal className="overflow-hidden rounded-[20px] border border-[#ece7df] bg-white shadow-[0_20px_46px_rgba(20,24,39,0.06)]">
            <div className="grid grid-cols-[1.05fr_1.25fr_repeat(4,1fr)]">
              <div className="bg-gradient-to-br from-[#e8845a] to-[#c96a3e] px-5 py-4 text-[12.5px] font-bold tracking-[0.05em] text-white">{t("technology.portfolio.columns.diseaseArea")}</div>
              <div className="bg-gradient-to-br from-[#e8845a] to-[#c96a3e] px-5 py-4 text-[12.5px] font-bold tracking-[0.05em] text-white">{t("technology.portfolio.columns.indication")}</div>
              {TECHNOLOGY_PIPELINE_STAGES.map((stage) => (
                <div key={stage.id} className="bg-[#f6ece4] px-3.5 py-4 text-center text-[12.5px] font-bold tracking-[0.03em] text-[#7a5540]">{t(stage.labelKey)}</div>
              ))}
            </div>
            {TECHNOLOGY_PIPELINE_ROWS.map((row) => (
              <div key={row.id} className="grid grid-cols-[1.05fr_1.25fr_repeat(4,1fr)] border-t border-[#f0eae1]">
                <div className="bg-[#fcf6f1] px-5 py-5 text-[15px] font-bold text-foreground">{t(row.areaKey)}</div>
                <div className="flex items-center px-5 py-5 text-sm text-[#514c46]">{t(row.indicationKey)}</div>
                {TECHNOLOGY_PIPELINE_STAGES.map((stage, si) => (
                  <div key={stage.id} className="flex items-center justify-center border-l border-[#f0eae1] px-3 py-3.5">
                    <PipelineBar filled={si < row.reached} />
                  </div>
                ))}
              </div>
            ))}
          </Reveal>

          <div className="mt-5 flex items-center justify-center gap-5 text-[12.5px] text-[#8a847c]">
            <span className="inline-flex items-center gap-2"><span className="h-3 w-[22px] rounded bg-gradient-to-br from-[#f6b892] to-[#e8845a]" />{t("technology.portfolio.legend.reached")}</span>
            <span className="inline-flex items-center gap-2"><span className="h-3 w-[22px] rounded border border-[#e6ddd1] bg-[#f4eee6]" />{t("technology.portfolio.legend.upcoming")}</span>
          </div>
        </div>
      </section>
    </div>
  );
}