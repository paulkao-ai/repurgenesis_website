import {
  useCallback,
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
  const [
    selectedMemberId,
    setSelectedMemberId,
  ] = useState<string | null>(null);

  const selectedMember =
    LEADERSHIP_MEMBERS.find(
      (member) =>
        member.id === selectedMemberId,
    ) ?? null;

  const openLeadershipModal =
    useCallback((memberId: string) => {
      setSelectedMemberId(memberId);
    }, []);

  const closeLeadershipModal =
    useCallback(() => {
      setSelectedMemberId(null);
    }, []);

  return (
    <div className="pt-24">
      {/* Introduction */}
      <section
        className="
          mx-auto
          max-w-[1500px]
          px-6
          py-16
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-x-16
            gap-y-10
            lg:grid-cols-2
            lg:items-center
          "
        >
          {/* 
            Smaller desktop:
            title stays in the left column beside the image.

            Very large desktop:
            title spans both columns.
          */}
          <header
            className="
              min-w-0
              lg:col-start-1
              lg:row-start-1
              2xl:col-span-2
              2xl:col-start-1
            "
          >
            <SectionLabel>
              {t("about.intro.label")}
            </SectionLabel>

            <h1
              className="
                mt-4
                text-[clamp(2.7rem,4vw,4rem)]
                font-bold
                leading-[1.08]
                tracking-[-0.045em]
                text-foreground
                2xl:whitespace-nowrap
                2xl:text-[3.25rem]
              "
              style={{
                fontFamily:
                  "'Plus Jakarta Sans', sans-serif",
              }}
            >
              <span className="block 2xl:inline">
                {t("about.intro.titleLine1")}
              </span>

              <span
                aria-hidden="true"
                className="hidden 2xl:inline"
              >
                {" "}
              </span>

              <span className="block 2xl:inline">
                {t("about.intro.titleLine2")}
              </span>

              <span
                aria-hidden="true"
                className="hidden 2xl:inline"
              >
                {" "}
              </span>

              <span className="block 2xl:inline">
                {t("about.intro.titleLine3")}
              </span>
            </h1>
          </header>

          {/* Description */}
          <div
            className="
              max-w-2xl
              self-start
              lg:col-start-1
              lg:row-start-2
              2xl:row-start-2
            "
          >
            <p
              className="
                text-base
                leading-7
                text-muted-foreground
              "
            >
              {t("about.intro.paragraph1")}
            </p>

            <p
              className="
                mt-4
                text-base
                leading-7
                text-muted-foreground
              "
            >
              {t("about.intro.paragraph2")}
            </p>
          </div>

          {/* Image */}
          <div
            className="
              self-start
              lg:col-start-2
              lg:row-span-2
              lg:row-start-1
              2xl:row-span-1
              2xl:row-start-2
            "
          >
            <img
              src={ABOUT_PAGE_DATA.introImage}
              alt={t(
                ABOUT_PAGE_DATA.introImageAltKey,
              )}
              className="
                h-80
                w-full
                rounded-3xl
                bg-muted
                object-cover
                lg:h-[360px]
              "
            />
          </div>
        </div>
      </section>
      {/* Journey */}
      <section
        className="
          border-y
          border-border
          bg-white
          py-20
        "
      >
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <SectionLabel>
              {t("about.journey.label")}
            </SectionLabel>

            <SectionHeading>
              {t("about.journey.title")}
            </SectionHeading>
          </div>

          <div className="relative">
            {/* Timeline vertical line */}
            <div
              aria-hidden="true"
              className="
                absolute
                bottom-0
                left-6
                top-0
                w-px
                -translate-x-1/2
                bg-border
                md:left-1/2
              "
            />

            <div className="flex flex-col gap-10">
              {ABOUT_TIMELINE.map(
                (item, index) => (
                  <div
                    key={`${item.year}-${item.eventKey}`}
                    className={`
                      flex
                      items-start
                      gap-6
                      md:gap-0
                      ${
                        index % 2 === 0
                          ? "md:flex-row"
                          : "md:flex-row-reverse"
                      }
                    `}
                  >
                    {/* Desktop card */}
                    <div
                      className={`
                        hidden
                        md:block
                        md:w-1/2
                        ${
                          index % 2 === 0
                            ? "pr-12 text-right"
                            : "pl-12"
                        }
                      `}
                    >
                      <article
                        className="
                          rounded-2xl
                          border
                          border-border
                          bg-card
                          p-5
                        "
                      >
                        <p
                          className="
                            mb-1
                            font-mono
                            text-xs
                            text-muted-foreground
                          "
                        >
                          {item.year}
                        </p>

                        <p
                          className="
                            text-sm
                            font-medium
                            text-foreground
                          "
                        >
                          {t(item.eventKey)}
                        </p>
                      </article>
                    </div>

                    {/* Timeline marker */}
                    <div
                      className="
                        relative
                        z-10
                        flex
                        shrink-0
                        items-center
                        justify-center
                      "
                    >
                      <div
                        className="
                          h-3
                          w-3
                          rounded-full
                          border-2
                          border-white
                          bg-primary
                          shadow-md
                        "
                      />
                    </div>

                    {/* Mobile card */}
                    <article
                      className="
                        ml-4
                        flex-1
                        rounded-2xl
                        border
                        border-border
                        bg-card
                        p-5
                        md:hidden
                      "
                    >
                      <p
                        className="
                          mb-1
                          font-mono
                          text-xs
                          text-muted-foreground
                        "
                      >
                        {item.year}
                      </p>

                      <p
                        className="
                          text-sm
                          font-medium
                          text-foreground
                        "
                      >
                        {t(item.eventKey)}
                      </p>
                    </article>

                    {/* Empty desktop column */}
                    <div
                      className="
                        hidden
                        md:block
                        md:w-1/2
                      "
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section
        className="
          mx-auto
          max-w-7xl
          px-6
          py-20
        "
      >
        <div className="mb-12 text-center">
          <SectionLabel>
            {t("about.leadership.label")}
          </SectionLabel>

          <SectionHeading>
            {t("about.leadership.title")}
          </SectionHeading>
        </div>

        <Carousel
          items={[...LEADERSHIP_MEMBERS]}
          perPage={3}
          renderItem={(person) => {
            const personName =
              t(person.nameKey);

            const personRole =
              t(person.roleKey);

            return (
              <button
                key={person.id}
                type="button"
                aria-haspopup="dialog"
                aria-label={`${t(
                  "about.leadership.actions.viewProfile",
                )}: ${personName}`}
                onClick={() =>
                  openLeadershipModal(
                    person.id,
                  )
                }
                className="
                  group
                  block
                  w-full
                  cursor-pointer
                  overflow-hidden
                  rounded-2xl
                  border
                  border-border
                  bg-card
                  text-left
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-primary/30
                  hover:shadow-md
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-primary
                "
              >
                {/* Previous portrait-card structure */}
                <div
                  className="
                    relative
                    h-56
                    overflow-hidden
                    bg-muted
                  "
                >
                  <img
                    src={person.image}
                    alt={personName}
                    className="
                      h-full
                      w-full
                      object-cover
                      object-top
                      transition-transform
                      duration-500
                      group-hover:scale-[1.04]
                    "
                  />

                  {/* Clickable overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-end
                      justify-end
                      bg-gradient-to-t
                      from-black/60
                      via-black/5
                      to-transparent
                      p-5
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                      group-focus-visible:opacity-100
                    "
                  >
                    <span
                      className="
                        rounded-full
                        bg-white
                        px-4
                        py-2
                        text-xs
                        font-semibold
                        text-primary
                        shadow-md
                      "
                    >
                      {t(
                        "about.leadership.actions.viewProfile",
                      )}
                    </span>
                  </div>
                </div>

                {/* Previous card footer */}
                <div className="p-5">
                  <h3
                    className="
                      font-bold
                      text-foreground
                    "
                    style={{
                      fontFamily:
                        "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {personName}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-muted-foreground
                    "
                  >
                    {personRole}
                  </p>
                </div>
              </button>
            );
          }}
        />
      </section>

      {/* Leadership modal */}
      <LeadershipModal
        member={selectedMember}
        t={t}
        onClose={closeLeadershipModal}
      />
    </div>
  );
}