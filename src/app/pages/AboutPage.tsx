import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ABOUT_PAGE_DATA,
  ABOUT_TIMELINE,
  LEADERSHIP_MEMBERS,
} from "@app/data/content";

import {
  LeadershipModal,
} from "@app/components/LeadershipModal";

import {
  Carousel,
} from "@app/components/Carousel";

import {
  SectionHeading,
  SectionLabel,
} from "@app/components/Section";

import type {
  Translator,
} from "@app/types";

export function AboutPage({
  t,
}: {
  t: Translator;
}) {
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);

  const selectedMember =
    LEADERSHIP_MEMBERS.find((member) => member.id === selectedMemberId) ?? null;

  const openLeadershipModal = useCallback((memberId: string) => {
    setSelectedMemberId(memberId);
  }, []);

  const closeLeadershipModal = useCallback(() => {
    setSelectedMemberId(null);
  }, []);

  // Vertical drag-to-scroll for the milestones timeline
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;

    let down = false;
    let startY = 0;
    let startTop = 0;

    const onDown = (e: PointerEvent) => {
      down = true;
      startY = e.clientY;
      startTop = el.scrollTop;
      el.style.cursor = "grabbing";
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      el.scrollTop = startTop - (e.clientY - startY);
    };
    const onUp = () => {
      down = false;
      el.style.cursor = "grab";
    };

    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);

    return () => {
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <div>
      {/* ===================== Introduction — light bg, coral effects ===================== */}
      <section className="relative overflow-hidden bg-[#faf7f2]">
        {/* coral atmospheric glows */}
        <div
          aria-hidden
          className="absolute -right-32 -top-40 z-0 h-[560px] w-[560px] rounded-full blur-[10px] animate-[drift_14s_ease-in-out_infinite]"
          style={{
            background:
              "radial-gradient(closest-side, rgba(240,159,116,0.45), rgba(240,159,116,0) 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute -bottom-52 -left-36 z-0 h-[520px] w-[520px] rounded-full blur-[10px] animate-[drift2_18s_ease-in-out_infinite]"
          style={{
            background:
              "radial-gradient(closest-side, rgba(201,106,62,0.28), rgba(201,106,62,0) 70%)",
          }}
        />
        {/* faint coral grid wash */}
        <div
          aria-hidden
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(240,159,116,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(240,159,116,0.10) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 40%, #000 30%, transparent 75%)",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 40%, #000 30%, transparent 75%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1180px] px-6 pb-20 pt-28 md:pt-32">
          {/* Centered header */}
          <header className="text-center">
            <span className="mb-[22px] inline-flex items-center gap-2.5 rounded-full border border-[#f09f74]/35 py-1.5 pl-2.5 pr-3.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#c96a3e]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(240,159,116,0.16), rgba(201,106,62,0.10))",
              }}
            >
              <span className="h-[7px] w-[7px] rounded-full bg-[#ef8a62] shadow-[0_0_0_4px_rgba(240,159,116,0.2)]" />
              {t("about.intro.label")}
            </span>

            <h1
              className="
                mt-4 lg:mx-auto lg:max-w-none lg:whitespace-nowrap
                text-[clamp(2.2rem,3.2vw,3.25rem)] font-bold
                leading-[1.08] tracking-[-0.045em] text-foreground
              "
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {t("about.intro.titleLine1")}
              <br className="lg:hidden" />
              <span className="lg:ml-[0.25em]">{t("about.intro.titleLine2")}</span>
              <br className="lg:hidden" />
              <span className="bg-gradient-to-br from-[#f09f74] to-[#c96a3e] bg-clip-text text-transparent lg:ml-[0.15em]">{t("about.intro.titleLine3")}</span>
            </h1>
          </header>

          {/* Copy (left) + image with coral effects (right) */}
          <div className="mt-12 grid grid-cols-1 items-center gap-x-14 gap-y-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="min-w-0 max-w-[38ch]">
              <p className="text-lg leading-[1.85] text-muted-foreground">
                {t("about.intro.paragraph1")}
              </p>
              <p className="mt-4 text-lg leading-[1.85] text-muted-foreground">
                {t("about.intro.paragraph2")}
              </p>

              {/* coral gradient stat cards */}
              <div className="mt-8 flex gap-3">
                <div
                  className="flex flex-1 items-center gap-3 rounded-xl border border-[#f09f74]/35 px-4 py-3"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(240,159,116,0.10), rgba(255,255,255,0))",
                  }}
                >
                  <div className="bg-gradient-to-br from-[#f09f74] to-[#c96a3e] bg-clip-text text-[30px] font-extrabold leading-none tracking-[-0.03em] text-transparent">
                    {t("about.intro.stats.programs.value")}
                  </div>
                  <div className="text-[13px] font-semibold leading-tight tracking-wide text-muted-foreground">
                    {t("about.intro.stats.programs.label")}
                  </div>
                </div>

                <div
                  className="flex flex-1 items-center gap-3 rounded-xl border border-[#f09f74]/35 px-4 py-3"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(240,159,116,0.10), rgba(255,255,255,0))",
                  }}
                >
                  <div className="bg-gradient-to-br from-[#f09f74] to-[#c96a3e] bg-clip-text text-[30px] font-extrabold leading-none tracking-[-0.03em] text-transparent">
                    {t("about.intro.stats.assets.value")}
                  </div>
                  <div className="text-[13px] font-semibold leading-tight tracking-wide text-muted-foreground">
                    {t("about.intro.stats.assets.label")}
                  </div>
                </div>
              </div>

              {/* coral gradient pill button */}
              <a
                href="#approach"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#f09f74] to-[#e8845a] px-5 py-2.5 text-[15px] font-bold text-white shadow-[0_10px_24px_rgba(232,132,90,0.35)]"
              >
                {t("about.intro.cta")}
                <span className="text-lg transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>

            {/* Image cluster */}
            <div className="relative min-w-0 pb-12 pl-[26px] pt-[26px]">
              {/* rotating dashed coral orbit */}
              <div
                aria-hidden
                className="absolute -left-1.5 -top-1.5 z-0 h-[150px] w-[150px] rounded-full border-[1.5px] border-dashed border-[#f09f74]/50 animate-[spin_26s_linear_infinite]"
              />
              <div
                aria-hidden
                className="absolute left-14 top-14 z-0 h-3 w-3 rounded-full bg-gradient-to-br from-[#f09f74] to-[#c96a3e] shadow-[0_4px_12px_rgba(201,106,62,0.5)]"
              />

              {/* coral gradient frame */}
              <div className="relative z-[1] rounded-[26px] bg-gradient-to-br from-[#f09f74] to-[#c96a3e] p-[5px] shadow-[0_26px_54px_rgba(201,106,62,0.28)]">
                <div className="aspect-[16/11] w-full overflow-hidden rounded-[21px] bg-[#efeae2]">
                  <img
                    src={ABOUT_PAGE_DATA.introImage}
                    alt={t(ABOUT_PAGE_DATA.introImageAltKey)}
                    className=" h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* floating coral stat component */}
              <div className="absolute right-[-14px] top-[62%] z-[2] w-[178px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#f09f74] to-[#c96a3e] p-[14px_16px] text-white shadow-[0_18px_40px_rgba(201,106,62,0.4)] animate-[floaty_6s_ease-in-out_infinite]">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-50 mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1.5px)",
                    backgroundSize: "12px 12px",
                  }}
                />
                <div className="relative mb-2 flex items-center gap-[7px]">
                  <span className="h-[7px] w-[7px] rounded-full bg-white animate-[pulse-dot_2.4s_ease-out_infinite]" />
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-white/85">
                    {t("about.intro.stats.signals.eyebrow")}
                  </span>
                </div>
                <div className="relative text-[30px] font-extrabold leading-none tracking-[-0.03em]">
                  {t("about.intro.stats.signals.value")}
                </div>
                <div className="relative mt-[5px] text-[11.5px] leading-snug text-white/85">
                  {t("about.intro.stats.signals.label")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== Journey — vertical, alternating, drag-to-scroll ===================== */}
      <section className="border-y border-border bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-9 text-center">
            <SectionLabel>
              {t("about.journey.label")}
            </SectionLabel>

            <SectionHeading>
              {t("about.journey.title")}
            </SectionHeading>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#6f6d78]">
              {t("about.journey.description")}
            </p>
          </div>

          {/* Company-stage legend */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#7cc7c8]/35 bg-[#7cc7c8]/10 px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#4f9fa1]">
              <span className="h-2 w-2 rounded-full bg-[#7cc7c8]" />
              {t("about.journey.phases.preparation")}
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-[#ef8a62]/35 bg-[#ef8a62]/10 px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#c96a3e]">
              <span className="h-2 w-2 rounded-full bg-[#ef8a62]" />
              {t("about.journey.phases.operations")}
            </span>
          </div>

          <div
            ref={timelineRef}
            className="mx-auto max-w-[860px] cursor-grab select-none overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{
              maxHeight: "520px",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, #000 26px, #000 calc(100% - 26px), transparent)",
              maskImage:
                "linear-gradient(to bottom, transparent, #000 26px, #000 calc(100% - 26px), transparent)",
            }}
          >
            <div className="relative py-[18px]">
              {/* Center line */}
              <div
                aria-hidden
                className="absolute bottom-6 left-1/2 top-6 w-0.5 -translate-x-1/2"
                style={{
                  background:
                    "linear-gradient(180deg,#cde8e7,#7cc7c8 24%,#ef8a62 58%,#c96a3e 92%,#f6ddcd)",
                }}
              />

              <div className="flex flex-col gap-[26px]">
                {ABOUT_TIMELINE.map((item, index) => {
                  const isLeft =
                    index % 2 === 0;

                  const isPreparation =
                    item.phase ===
                    "preparation";

                  const accentColor =
                    isPreparation
                      ? "#5faeb0"
                      : "#c96a3e";

                  const card = (
                    <article
                      className="
                        inline-block
                        w-full
                        max-w-[340px]
                        rounded-2xl
                        border
                        border-[#e7e0d7]
                        bg-[#faf7f2]
                        p-[17px_20px]
                        text-left
                        shadow-[0_8px_22px_rgba(20,24,39,0.045)]
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-[#ef8a62]/45
                        hover:shadow-[0_14px_30px_rgba(20,24,39,0.08)]
                      "
                    >
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <div
                          className="font-mono text-xs font-bold tracking-[0.08em]"
                          style={{
                            color:
                              accentColor,
                          }}
                        >
                          {item.year}
                          <span className="mx-1.5 opacity-45">
                            /
                          </span>
                          {item.month}
                        </div>

                        <span
                          className="
                            rounded-full
                            border
                            px-2.5
                            py-1
                            font-mono
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.1em]
                          "
                          style={{
                            color:
                              accentColor,

                            borderColor:
                              `${accentColor}42`,

                            backgroundColor:
                              `${accentColor}12`,
                          }}
                        >
                          {t(
                            item.phase ===
                              "preparation"
                              ? "about.journey.phases.preparation"
                              : "about.journey.phases.operations",
                          )}
                        </span>
                      </div>

                      <ul className="space-y-2">
                        {item.eventKeys.map(
                          (eventKey) => (
                            <li
                              key={
                                eventKey
                              }
                              className="
                                flex
                                items-start
                                gap-2.5
                                text-sm
                                font-semibold
                                leading-[1.55]
                                text-foreground
                              "
                            >
                              <span
                                aria-hidden="true"
                                className="mt-[0.58em] h-1.5 w-1.5 shrink-0 rounded-full"
                                style={{
                                  backgroundColor:
                                    accentColor,
                                }}
                              />

                              <span>
                                {t(
                                  eventKey,
                                )}
                              </span>
                            </li>
                          ),
                        )}
                      </ul>
                    </article>
                  );

                  return (
                    <div
                      key={item.id}
                      className="flex items-center"
                    >
                      <div
                        className={`w-1/2 pr-[34px] text-right ${
                          isLeft
                            ? ""
                            : "opacity-0"
                        }`}
                      >
                        {isLeft &&
                          card}
                      </div>

                      {/* Timeline node */}
                      <div
                        className="
                          relative
                          z-[1]
                          h-3
                          w-3
                          shrink-0
                          cursor-pointer
                          rounded-full
                          border-2
                          border-white
                          shadow-[0_0_0_2px_currentColor]
                          transition-[transform,box-shadow]
                          duration-200
                          hover:scale-[1.55]
                        "
                        style={{
                          color:
                            accentColor,

                          backgroundColor:
                            accentColor,
                        }}
                      />

                      <div className="w-1/2 pl-[34px]">
                        {!isLeft &&
                          card}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#b3651f]">
            <span className="h-px w-[18px] bg-[#e6a37c]" />

            {t(
              "about.journey.dragHint",
            )}

            <span className="h-px w-[18px] bg-[#e6a37c]" />
          </div>
        </div>
      </section>

      {/* ===================== Leadership ===================== */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <SectionLabel>{t("about.leadership.label")}</SectionLabel>
          <SectionHeading>{t("about.leadership.title")}</SectionHeading>
        </div>

        <Carousel
          items={[...LEADERSHIP_MEMBERS]}
          perPage={3}
          renderItem={(person) => {
            const personName = t(person.nameKey);
            const personRole = t(person.roleKey);

            return (
              <button
                key={person.id}
                type="button"
                aria-haspopup="dialog"
                aria-label={`${t("about.leadership.actions.viewProfile")}: ${personName}`}
                onClick={() => openLeadershipModal(person.id)}
                className="
                  group block w-full cursor-pointer overflow-hidden rounded-2xl
                  border border-border bg-card text-left transition-all duration-300
                  hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary
                "
              >
                <div className="relative h-72 overflow-hidden bg-muted">
                  <img
                    src={person.image}
                    alt={personName}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/60 via-black/5 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-primary shadow-md">
                      {t("about.leadership.actions.viewProfile")}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3
                    className="font-bold text-foreground"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {personName}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{personRole}</p>
                </div>
              </button>
            );
          }}
        />
      </section>

      {/* Leadership modal */}
      <LeadershipModal member={selectedMember} t={t} onClose={closeLeadershipModal} />
    </div>
  );
}