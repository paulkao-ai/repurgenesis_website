import {
  useState,
} from "react";

import {
  ChevronDown,
  ChevronsUp,
} from "lucide-react";

import {
  SOLUTION_FAQS,
} from "@app/data/content";

import type {
  Translator,
} from "@app/types";

export function FAQAccordion({
  t,
}: {
  t: Translator;
}) {
  const [
    openQuestionIds,
    setOpenQuestionIds,
  ] = useState<string[]>([]);

  const toggleQuestion = (
    questionId: string,
  ) => {
    setOpenQuestionIds((current) =>
      current.includes(questionId)
        ? current.filter(
            (id) =>
              id !== questionId,
          )
        : [
            ...current,
            questionId,
          ],
    );
  };

  const closeAllQuestions = () => {
    setOpenQuestionIds([]);
  };

  const hasOpenQuestions =
    openQuestionIds.length > 0;

  return (
    <div>
      <div
        className="
          overflow-hidden
          rounded-2xl
          border
          border-border
          bg-white
        "
      >
        {SOLUTION_FAQS.map(
          (faq, index) => {
            const isOpen =
              openQuestionIds.includes(
                faq.id,
              );

            const answerId =
              `solution-faq-answer-${faq.id}`;

            return (
              <div
                key={faq.id}
                className={
                  index === 0
                    ? ""
                    : "border-t border-border"
                }
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() =>
                    toggleQuestion(
                      faq.id,
                    )
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-5
                    px-6
                    py-5
                    text-left
                    transition-colors
                    hover:bg-primary/5
                  "
                >
                  <span
                    className="
                      font-semibold
                      text-foreground
                    "
                  >
                    {t(faq.questionKey)}
                  </span>

                  <ChevronDown
                    size={19}
                    className={`
                      shrink-0
                      text-primary
                      transition-transform
                      duration-300

                      ${
                        isOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
                </button>

                <div
                  id={answerId}
                  aria-hidden={!isOpen}
                  className={`
                    grid
                    transition-[grid-template-rows]
                    duration-300
                    ease-in-out

                    ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p
                      className="
                        px-6
                        pb-6
                        text-sm
                        leading-relaxed
                        text-muted-foreground
                      "
                    >
                      {t(faq.answerKey)}
                    </p>
                  </div>
                </div>
              </div>
            );
          },
        )}
      </div>

      {hasOpenQuestions && (
        <div className="mt-5 flex justify-center">
          <button
            type="button"
            onClick={closeAllQuestions}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              px-4
              py-2
              text-sm
              font-semibold
              text-primary
              transition-colors
              hover:bg-primary/10
            "
          >
            <ChevronsUp size={16} />
            {t(
              "solutionsPage.faq.closeAll",
            )}
          </button>
        </div>
      )}
    </div>
  );
}