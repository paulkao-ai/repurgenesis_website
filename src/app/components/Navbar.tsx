import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";
import { ChevronDown, ArrowRight, Globe, Menu, X } from "lucide-react";
import { INVESTOR_TABS, NAV_ITEMS } from "@app/data/content";
import type { InvestorSection, Language, Page, Translator } from "@app/types";
import { BrandLogo } from "./BrandLogo";
import { CTAButton } from "./CTAButton";

export function Navbar({
  current,
  navigate,
  language,
  setLanguage,
  openLanguage,
  setOpenLanguage,
  activeInvestorSection,
  onInvestorSectionSelect,
  t,
}: {
  current: Page;
  navigate: (page: Page) => void;

  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;

  openLanguage: boolean;
  setOpenLanguage: Dispatch<SetStateAction<boolean>>;

  activeInvestorSection: InvestorSection | null;
  onInvestorSectionSelect: (
    section: InvestorSection,
  ) => void;

  t: Translator;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = current === "home";
  const isHomeTop = isHome && !scrolled;

  const [investorMenuOpen, setInvestorMenuOpen] = useState(false);

  const [mobileInvestorOpen, setMobileInvestorOpen] = useState(false);


  const investorCloseTimerRef = useRef<number | null>(null);

  const showInvestorSubnav = current === "investors" || investorMenuOpen;
  const isHomepageInvestorPreview = current === "home" && !scrolled && investorMenuOpen;
  const isInvestorsPage = current === "investors";
  const investorSectionCount = INVESTOR_TABS.length;

  const cancelInvestorMenuClose = () => {
    if (investorCloseTimerRef.current !== null) {
      window.clearTimeout(
        investorCloseTimerRef.current,
      );

      investorCloseTimerRef.current = null;
    }
  };

  const openInvestorMenu = () => {
    cancelInvestorMenuClose();
    setInvestorMenuOpen(true);
  };

  const scheduleInvestorMenuClose = () => {
    if (current === "investors") {
      return;
    }

    cancelInvestorMenuClose();

    investorCloseTimerRef.current =
      window.setTimeout(() => {
        setInvestorMenuOpen(false);
        investorCloseTimerRef.current = null;
      }, 450);
  };
  
  const handleNavigate = (page: Page) => {
    navigate(page);

    setOpen(false);
    setOpenLanguage(false);

    if (page !== "investors") {
      setInvestorMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (investorCloseTimerRef.current !== null) {
        window.clearTimeout(investorCloseTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    setMobileInvestorOpen(current === "investors");
  }, [open, current]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1100px)");

    const handleBreakpointChange = (
      event: MediaQueryListEvent | MediaQueryList,
    ) => {
      if (event.matches) {
        setOpen(false);
        setMobileInvestorOpen(false);
        setOpenLanguage(false);
      }
    };

    handleBreakpointChange(mediaQuery);

    mediaQuery.addEventListener("change", handleBreakpointChange);

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleBreakpointChange,
      );
    };
  }, [setOpenLanguage]);

  return (
    <header
      className={`
      fixed
      inset-x-0
      top-0
      z-50
      border-b
      transition-all
      duration-300
      ${
        isHomeTop
          ? `
            bg-transparent
            border-transparent
            shadow-none
          `
          : `
            bg-white/95
            backdrop-blur-md
            border-border
            shadow-sm
          `
      }
    `}
    >
      {showInvestorSubnav && (
        <div
          onMouseEnter={openInvestorMenu}
          onMouseLeave={scheduleInvestorMenuClose}
          onKeyDown={(event) => {
            if (
              event.key === "Escape" &&
              current !== "investors"
            ) {
              setInvestorMenuOpen(false);
            }
          }}
          className={`
            hidden
            min-[1100px]:block
            absolute
            left-0
            right-0
            top-16
            border-y
            backdrop-blur-lg
            transition-[background-color,border-color,box-shadow]
            duration-300

            ${
              isHomepageInvestorPreview
                ? `
                  border-white/20
                  shadow-md
                `
                : isInvestorsPage
                  ? `
                    bg-white
                    border-border
                    shadow-sm
                  `
                  : `
                    bg-white/95
                    border-border
                    shadow-sm
                  `
            }
          `}
          style={
            isHomepageInvestorPreview
              ? {
                  backgroundColor: "rgba(160, 69, 42, 0.5)",
                }
              : undefined
          }
        >
          <div
            className="
              max-w-7xl
              mx-auto
              px-6
              min-h-[42px]
              flex
              items-center
              overflow-x-auto
              whitespace-nowrap
            "
          >
            {INVESTOR_TABS.map((tab) => {
              const isActive =
                isInvestorsPage &&
                activeInvestorSection === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    cancelInvestorMenuClose();
                    onInvestorSectionSelect(tab.id);

                    if (!isInvestorsPage) {
                      setInvestorMenuOpen(false);
                    }
                  }}
                  className={`
                    group
                    shrink-0
                    px-5
                    py-3
                    rounded-lg
                    text-left
                    cursor-pointer
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-primary
                    focus-visible:ring-offset-2
                    text-[14px]
                    xl:text-[15px]
                    transition-colors
                    duration-300
                    focus-visible:outline-none

                    ${
                      isHomepageInvestorPreview
                        ? `
                          font-bold
                          text-white
                          drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]
                          hover:text-[#fff3ed]
                        `
                        : isActive
                          ? `
                            font-extrabold
                            text-primary
                          `
                          : `
                            font-semibold
                            text-slate-700
                            hover:text-primary
                          `
                    }
                  `}
                >
                  <span className="relative inline-block pb-1">
                    {t(tab.labelKey)}

                    <span
                      className={`
                        absolute
                        left-0
                        right-0
                        -bottom-0.5
                        rounded-full
                        origin-left
                        transition-transform
                        duration-300

                        ${
                          isHomepageInvestorPreview
                            ? "h-[3px] bg-[#FFE0D1]"
                            : isActive
                              ? "h-[3px] bg-primary"
                              : "h-[2px] bg-primary"
                        }

                        ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }
                      `}
                    />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          h-16
          flex
          items-center
        "
      >
        {/* Logo */}
        <button
          type="button"
          onClick={() =>
            handleNavigate("home")
          }
          aria-label="Repurgenesis home"
          className="
            group
            flex
            shrink-0
            items-center
            cursor-pointer
            rounded-lg
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary
            focus-visible:ring-offset-2
          "
        >
          <BrandLogo
            variant="navbar"
            light={isHomeTop}
            className="
              transition-transform
              duration-300
              group-hover:scale-[1.02]
            "
          />
        </button>
        
       {/* Desktop navigation */}
      <nav
        className="
          hidden
          min-[1100px]:flex
          flex-1
          min-w-0
          justify-center
          items-center
          gap-0
          xl:gap-1
        "
      >
      {NAV_ITEMS.map((item) => {
        const isActive = current === item.page;
        const isInvestors =
          item.page === "investors";

        return (
          <button
            key={item.page}
            type="button"
            onClick={() =>
              handleNavigate(item.page)
            }
            onMouseEnter={() => {
              if (isInvestors) {
                openInvestorMenu();
              } else if (current !== "investors") {
                scheduleInvestorMenuClose();
              }
            }}
            onFocus={() => {
              if (isInvestors) {
                openInvestorMenu();
              }
            }}
            aria-haspopup={
              isInvestors ? "true" : undefined
            }
            aria-expanded={
              isInvestors
                ? showInvestorSubnav
                : undefined
            }
            className={`
              relative
              group
              px-2.5
              xl:px-4
              py-2
              text-sm
              xl:text-[15px]
              whitespace-nowrap
              font-semibold
              cursor-pointer
              transition-colors
              duration-300
              focus-visible:outline-none

              ${
                isHomeTop
                  ? "text-white/90 hover:text-white"
                  : isActive
                    ? "text-primary"
                    : "text-slate-700 hover:text-primary"
              }
            `}
          >
            <span className="relative z-10">
              {t(item.key)}
            </span>

            <span
              className={`
                absolute
                left-4
                right-4
                bottom-0
                rounded-full
                origin-left
                transition-transform
                duration-300

                ${
                  isHomeTop
                    ? "h-[3px] bg-white"
                    : isInvestors && isActive
                      ? "h-[3px] bg-primary"
                      : "h-[2px] bg-primary"
                }

                ${
                  isActive
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }
              `}
            />
          </button>
        );
      })}
    </nav>

        {/* Desktop right side */}
        <div
          className="
            hidden
            min-[1100px]:flex
            items-center
            gap-3
            xl:gap-5
            ml-auto
            shrink-0
          "
        >
          {/* Language selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenLanguage((currentValue) => !currentValue)}
              aria-expanded={openLanguage}
              aria-label="Select language"
              className={`
                flex
                items-center
                gap-2
                whitespace-nowrap
                rounded-lg
                px-3
                py-2
                text-sm
                font-semibold
                transition-all
                duration-300
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary
                focus-visible:ring-offset-2
                ${
                  isHomeTop
                    ? `
                      text-white
                      hover:bg-white/15
                      hover:text-white
                    `
                    : `
                      text-slate-700
                      hover:bg-primary/5
                      hover:text-primary
                    `
                }
              `}
            >
              <Globe size={18} />

              <span>
                {language === "en" ? "EN" : "zh-TW"}
              </span>
            </button>

            {openLanguage && (
              <div
                className="
                  absolute
                  right-0
                  mt-3
                  w-40
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#e8edf3]
                  bg-white
                  shadow-xl
                  z-50
                "
              >
                <button
                  type="button"
                  onClick={() => {
                    setLanguage("en");
                    setOpenLanguage(false);
                  }}
                  className={`
                    w-full
                    px-4
                    py-3
                    text-left
                    text-sm
                    transition-colors
                    ${
                      language === "en"
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-slate-700 hover:bg-[#f7f9fc]"
                    }
                  `}
                >
                  English
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setLanguage("zh");
                    setOpenLanguage(false);
                  }}
                  className={`
                    w-full
                    px-4
                    py-3
                    text-left
                    text-sm
                    transition-colors
                    ${
                      language === "zh"
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-slate-700 hover:bg-[#f7f9fc]"
                    }
                  `}
                >
                  繁體中文
                </button>
              </div>
            )}
          </div>

          <CTAButton
            variant="primary"
            onClick={() => handleNavigate("contact")}
          >
            {t("nav.contact")}
            <ArrowRight size={14} />
          </CTAButton>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => {
            setOpen((currentValue) => {
              const nextOpen = !currentValue;

              if (!nextOpen) {
                setMobileInvestorOpen(false);
                setOpenLanguage(false);
              }

              return nextOpen;
            });
          }}
          className={`
            ml-auto
            min-[1100px]:hidden
            p-2
            rounded-lg
            transition-all
            duration-300
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary
            ${
              isHomeTop
                ? `
                  text-white
                  hover:bg-white/15
                `
                : `
                  text-slate-800
                  hover:bg-primary/10
                  hover:text-primary
                `
            }
          `}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="
            min-[1180px]:hidden
            max-h-[calc(100vh-4rem)]
            overflow-y-auto
            bg-white
            border-t
            border-border
            px-4
            sm:px-6
            py-4
            shadow-lg
          "
        >
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = current === item.page;
              const isInvestors = item.page === "investors";

              if (isInvestors) {
                return (
                  <div key={item.page}>
                    {/* Investors dropdown button */}
                    <button
                      type="button"
                      aria-expanded={mobileInvestorOpen}
                      aria-controls="mobile-investor-submenu"
                      onClick={() =>
                        setMobileInvestorOpen((currentValue) => !currentValue)
                      }
                      className={`
                        w-full
                        flex
                        items-center
                        justify-between
                        gap-3
                        px-4
                        py-3
                        rounded-xl
                        text-left
                        text-sm
                        font-semibold
                        transition-colors
                        ${
                          isActive || mobileInvestorOpen
                            ? "bg-primary/10 text-primary"
                            : "text-slate-700 hover:bg-primary/5 hover:text-primary"
                        }
                      `}
                    >
                      <span>{t(item.key)}</span>

                      <ChevronDown
                        size={17}
                        className={`
                          shrink-0
                          transition-transform
                          duration-300
                          ${
                            mobileInvestorOpen
                              ? "rotate-180"
                              : "rotate-0"
                          }
                        `}
                      />
                    </button>

                    {/* Investors subpages */}
                    <div
                      id="mobile-investor-submenu"
                      className={`
                        grid
                        transition-all
                        duration-300
                        ease-in-out
                        ${
                          mobileInvestorOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >
                      <div className="overflow-hidden">
                        <div
                          className="
                            mt-1
                            ml-4
                            pl-3
                            border-l-2
                            border-primary/25
                            flex
                            flex-col
                            gap-1
                          "
                        >
                          {/* Main Investors landing page */}
                          <button
                            type="button"
                            onClick={() => {
                              handleNavigate("investors");
                              setMobileInvestorOpen(false);
                            }}
                            className={`
                              w-full
                              px-4
                              py-2.5
                              rounded-lg
                              text-left
                              text-[13px]
                              font-semibold
                              transition-colors
                              ${
                                current === "investors" &&
                                activeInvestorSection === null
                                  ? "bg-primary/10 text-primary"
                                  : "text-slate-600 hover:bg-primary/5 hover:text-primary"
                              }
                            `}
                          >
                            {t("investors.landing.title")}
                          </button>

                          {INVESTOR_TABS.map((tab) => {
                            const isSectionActive =
                              current === "investors" &&
                              activeInvestorSection === tab.id;

                            return (
                              <button
                                key={tab.id}
                                type="button"
                                onClick={() => {
                                  onInvestorSectionSelect(tab.id);
                                  setMobileInvestorOpen(false);
                                  setOpen(false);
                                  setOpenLanguage(false);
                                }}
                                className={`
                                  relative
                                  w-full
                                  px-4
                                  py-2.5
                                  rounded-lg
                                  text-left
                                  text-[13px]
                                  transition-colors
                                  ${
                                    isSectionActive
                                      ? `
                                        bg-primary/10
                                        text-primary
                                        font-bold
                                      `
                                      : `
                                        text-slate-600
                                        font-medium
                                        hover:bg-primary/5
                                        hover:text-primary
                                      `
                                  }
                                `}
                              >
                                <span className="flex items-center gap-3">
                                  <span
                                    className={`
                                      h-1.5
                                      w-1.5
                                      rounded-full
                                      transition-colors
                                      ${
                                        isSectionActive
                                          ? "bg-primary"
                                          : "bg-slate-300"
                                      }
                                    `}
                                  />
                                  {t(tab.labelKey)}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={item.page}
                  type="button"
                  onClick={() => {
                    handleNavigate(item.page);
                    setMobileInvestorOpen(false);
                  }}
                  className={`
                    text-left
                    px-4
                    py-3
                    rounded-xl
                    text-sm
                    font-semibold
                    transition-colors
                    ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-slate-700 hover:bg-primary/5 hover:text-primary"
                    }
                  `}
                >
                  {t(item.key)}
                </button>
              );
            })}
          </div>

          {/* Mobile language selector */}
          <div className="border-t border-border pt-3 mt-3">
            <button
              type="button"
              onClick={() => setOpenLanguage((currentValue) => !currentValue)}
              className="
                w-full
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                text-left
                text-sm
                font-semibold
                text-slate-700
                hover:bg-primary/5
                hover:text-primary
                transition-colors
              "
            >
              <Globe size={18} />

              <span>
                {language === "en" ? "EN" : "zh-TW"}
              </span>
            </button>

            {openLanguage && (
              <div className="ml-4 mt-2 rounded-xl border border-border overflow-hidden">
                <button
                  type="button"
                  onClick={() => {
                    setLanguage("en");
                    setOpenLanguage(false);
                    setOpen(false);
                  }}
                  className={`
                    block
                    w-full
                    px-4
                    py-3
                    text-left
                    text-sm
                    ${
                      language === "en"
                        ? "bg-primary/10 text-primary font-semibold"
                        : "hover:bg-accent"
                    }
                  `}
                >
                  English
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setLanguage("zh");
                    setOpenLanguage(false);
                    setOpen(false);
                  }}
                  className={`
                    block
                    w-full
                    px-4
                    py-3
                    text-left
                    text-sm
                    ${
                      language === "zh"
                        ? "bg-primary/10 text-primary font-semibold"
                        : "hover:bg-accent"
                    }
                  `}
                >
                  繁體中文
                </button>
              </div>
            )}
          </div>

          <div className="pt-4">
            <CTAButton
              variant="primary"
              onClick={() => handleNavigate("contact")}
            >
              {t("nav.contact")}
              <ArrowRight size={14} />
            </CTAButton>
          </div>
        </div>
      )}
    </header>
  );
}