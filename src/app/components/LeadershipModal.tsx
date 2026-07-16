import {
  useEffect,
  useRef,
} from "react";

import {
  createPortal,
} from "react-dom";

import {
  Linkedin,
  Mail,
  X,
} from "lucide-react";

import type {
  LeadershipMemberDefinition,
} from "@app/data/content";

import type {
  Translator,
} from "@app/types";

type LeadershipModalProps = {
  member:
    | LeadershipMemberDefinition
    | null;

  t: Translator;

  onClose: () => void;
};

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export function LeadershipModal({
  member,
  t,
  onClose,
}: LeadershipModalProps) {
  const modalRef =
    useRef<HTMLDivElement>(null);

  const closeButtonRef =
    useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!member) {
      return;
    }

    const previouslyFocusedElement =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    closeButtonRef.current?.focus();

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (
        event.key !== "Tab" ||
        !modalRef.current
      ) {
        return;
      }

      const focusableElements =
        Array.from(
          modalRef.current.querySelectorAll<HTMLElement>(
            FOCUSABLE_SELECTOR,
          ),
        );

      if (
        focusableElements.length === 0
      ) {
        event.preventDefault();
        return;
      }

      const firstElement =
        focusableElements[0];

      const lastElement =
        focusableElements[
          focusableElements.length - 1
        ];

      if (
        event.shiftKey &&
        document.activeElement ===
          firstElement
      ) {
        event.preventDefault();
        lastElement.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement ===
          lastElement
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown,
      );

      document.body.style.overflow =
        previousOverflow;

      previouslyFocusedElement?.focus();
    };
  }, [
    member,
    onClose,
  ]);

  if (
    !member ||
    typeof document === "undefined"
  ) {
    return null;
  }

  const name =
    t(member.nameKey);

  const role =
    t(member.roleKey);

  const bio =
    t(member.bioKey);

  const titleId =
    `leadership-modal-${member.id}-title`;

  const descriptionId =
    `leadership-modal-${member.id}-description`;

  return createPortal(
    <div
      className="
        fixed
        inset-0
        z-[200]
        flex
        items-center
        justify-center
        overflow-y-auto
        bg-[#0f172a]/65
        px-4
        py-8
        backdrop-blur-sm
        md:px-8
      "
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={
          descriptionId
        }
        className="
          relative
          w-full
          max-w-5xl
          overflow-hidden
          rounded-3xl
          border
          border-white/20
          bg-[#f7f8fa]
          shadow-2xl
        "
        onMouseDown={(event) =>
          event.stopPropagation()
        }
      >
        {/* Close button */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label={t(
            "about.leadership.actions.closeProfile",
          )}
          className="
            absolute
            right-5
            top-5
            z-10
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            text-slate-500
            transition-colors
            hover:bg-slate-200
            hover:text-slate-900
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-primary
          "
        >
          <X
            size={22}
            aria-hidden="true"
          />
        </button>

        <div
          className="
            grid
            grid-cols-1
            gap-8
            p-6
            md:grid-cols-[320px_minmax(0,1fr)]
            md:gap-12
            md:p-12
          "
        >
          {/* Portrait */}
          <div
            className="
              flex
              items-center
              justify-center
            "
          >
            <div
              className="
                aspect-[4/5]
                w-full
                max-w-[320px]
                overflow-hidden
                rounded-[2rem]
                bg-[#d9d9d9]
              "
            >
              <img
                src={member.image}
                alt={name}
                className="
                  h-full
                  w-full
                  object-cover
                  object-top
                "
              />
            </div>
          </div>

          {/* Biography */}
          <div
            className="
              flex
              min-w-0
              flex-col
              justify-center
              pt-6
              md:pt-0
            "
          >
            <h2
              id={titleId}
              className="
                pr-10
                text-2xl
                font-bold
                tracking-tight
                text-slate-900
                md:text-3xl
              "
              style={{
                fontFamily:
                  "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {name}
            </h2>

            <p
              className="
                mt-4
                text-base
                font-semibold
                text-slate-800
                md:text-lg
              "
            >
              {role}
            </p>

            <p
              id={descriptionId}
              className="
                mt-5
                whitespace-pre-line
                text-sm
                leading-7
                text-slate-600
                md:text-base
                md:leading-8
              "
            >
              {bio}
            </p>

            {/* Contact actions */}
            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-3
                border-t
                border-slate-200
                pt-6
              "
            >
              {member.linkedinUrl && (
                <a
                  href={
                    member.linkedinUrl
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#0a66c2]
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    hover:-translate-y-0.5
                    hover:bg-[#084f96]
                    hover:shadow-md
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-[#0a66c2]
                  "
                >
                  <Linkedin
                    size={17}
                    aria-hidden="true"
                  />

                  {t(
                    "about.leadership.actions.linkedin",
                  )}
                </a>
              )}

              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-primary
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-primary
                    transition-all
                    hover:-translate-y-0.5
                    hover:bg-primary
                    hover:text-white
                    hover:shadow-md
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-primary
                  "
                >
                  <Mail
                    size={17}
                    aria-hidden="true"
                  />

                  {t(
                    "about.leadership.actions.email",
                  )}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}