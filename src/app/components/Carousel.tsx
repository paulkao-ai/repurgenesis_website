import { useMemo, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselProps<T> = {
  items: T[];
  perPage?: number;
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
  gap?: string;
};

type CarouselArrowProps = {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
};

function CarouselArrow({ direction, onClick, disabled }: CarouselArrowProps) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      aria-label={direction === "left" ? "Previous slide" : "Next slide"}
      onClick={onClick}
      disabled={disabled}
      className="
        w-12 h-12
        rounded-full
        bg-transparent
        border-[1.5px]
        border-[#F09F74]
        text-[#141827]
        flex
        items-center
        justify-center
        transition-all
        duration-300
        hover:bg-[#F09F74]
        hover:text-white
        hover:border-[#F09F74]
        hover:shadow-lg
        hover:scale-105
        focus-visible:outline-none
        focus-visible:ring-4
        focus-visible:ring-[#F09F74]/25
        disabled:opacity-30
        disabled:pointer-events-none
      "
    >
      <Icon size={22} strokeWidth={2.6} />
    </button>
  );
}

export function Carousel<T>({
  items,
  perPage = 3,
  renderItem,
  className = "",
  gap = "gap-5",
}: CarouselProps<T>) {
  const [page, setPage] = useState(0);

  const pages = useMemo(() => {
    const result: T[][] = [];

    for (let i = 0; i < items.length; i += perPage) {
      result.push(items.slice(i, i + perPage));
    }

    return result;
  }, [items, perPage]);

  const showControls = pages.length > 1;

  return (
    <div className={`relative ${className}`}>
      {showControls && (
        <div
          className="
            absolute
            left-0
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            z-20
            hidden
            md:block
          "
        >
          <CarouselArrow
            direction="left"
            onClick={() => setPage(Math.max(page - 1, 0))}
            disabled={page === 0}
          />
        </div>
      )}

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {pages.map((group, pageIndex) => (
            <div
              key={pageIndex}
              className={`w-full shrink-0 grid grid-cols-1 md:grid-cols-3 ${gap}`}
            >
              {group.map((item, itemIndex) =>
                renderItem(item, pageIndex * perPage + itemIndex),
              )}
            </div>
          ))}
        </div>
      </div>

      {showControls && (
        <div
          className="
            absolute
            right-0
            top-1/2
            translate-x-1/2
            -translate-y-1/2
            z-20
            hidden
            md:block
          "
        >
          <CarouselArrow
            direction="right"
            onClick={() => setPage(Math.min(page + 1, pages.length - 1))}
            disabled={page === pages.length - 1}
          />
        </div>
      )}

      {showControls && (
        <div className="mt-8 flex justify-center gap-2">
          {pages.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setPage(index)}
              className={`
                h-2
                rounded-full
                transition-all
                duration-300
                ${
                  page === index
                    ? "w-6 bg-[#E87C4A]"
                    : "w-2 bg-[#CBD5E1] hover:bg-[#E87C4A]/60"
                }
              `}
            />
          ))}
        </div>
      )}
    </div>
  );
}
