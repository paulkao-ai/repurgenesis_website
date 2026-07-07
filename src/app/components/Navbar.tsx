import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { ArrowRight, Globe, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@app/data/content";
import type { Language, Page, Translator } from "@app/types";
import { CTAButton } from "./CTAButton";

export function Navbar({
  current,
  navigate,
  language,
  setLanguage,
  openLanguage,
  setOpenLanguage,
  t,
}: {
  current: Page;
  navigate: (p: Page) => void;

  language: Language;
  setLanguage: Dispatch<SetStateAction<"en" | "zh">>;

  openLanguage: boolean;
  setOpenLanguage: Dispatch<SetStateAction<boolean>>;
  t: Translator;
}) {  
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = current === "home";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

 
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
      }`}
            
    >
      {/* Logo */}
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
      
        <button
          onClick={() => navigate("home")}
          className="flex items-center gap-2 cursor-pointer"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300
              ${
                transparent
                  ?  "bg-primary"
                  :  "bg-white"
              }`}
          >
            <span
              className={`font-bold text-sm transition-colors duration-300
                ${
                  scrolled
                    ? "text-white"
                    : "text-primary"
                }`}
            >
              R
            </span>
          </div>

          <span
            className={`font-bold text-lg tracking-tight transition-colors duration-300
              ${
                transparent
                  ? "text-white"
                  : "text-primary"
              }`}
          >
            Repurgenesis
          </span>

        </button>
        
        {/* Desktop nav — underline hover effect */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.page}
              onClick={() => navigate(item.page)}
              className="relative group px-4 py-2 text-sm font-medium cursor-pointer transition-colors"
              style={{ color: current === item.page ? "#f09f74" : undefined }}
            >
              <span
                className={`transition-colors duration-300 ${
                  current === item.page
                    ? "text-primary"
                    : transparent
                    ? "text-white hover:text-white/80"
                    : "text-slate-700 hover:text-slate-900"
                }`}
              >
                {t(item.key)}
              </span>

              {/* underline bar */}
              <span
                className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-primary transition-all duration-300 origin-left"
                style={{
                  transform: current === item.page ? "scaleX(1)" : "scaleX(0)",
                }}
              />
              {/* hover underline (only when not active) */}
              {current !== item.page && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-primary/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-250 origin-left" />
              )}
            </button>
          ))}
        </nav>



        {/* Right Side */}
        <div className="hidden md:flex items-center gap-6 ml-auto shrink-0">

          {/* Language */}
          <div className="relative">

            <button
              onClick={() => setOpenLanguage(!openLanguage)}
              className={`
                flex items-center gap-3
                whitespace-nowrap text-sm font-medium
                transition-colors duration-300
                ${
                  transparent
                    ? "text-white hover:text-white/80"
                    : "text-slate-700 hover:text-slate-900"
                }
              `}
            >
              <Globe size={18} />
              <span>{language === "en" ? "EN" : "zh-TW"}</span>
            </button>

            {openLanguage && (
              <div
                className="
                  absolute
                  right-0
                  mt-3
                  w-40
                  rounded-xl
                  bg-white
                  shadow-xl
                  border
                  border-[#e8edf3]
                  overflow-hidden
                  z-50
                "
              >
                <button
                  onClick={() => {
                    setLanguage("en");
                    setOpenLanguage(false);
                  }}
                  className="w-full px-4 py-3 text-left hover:bg-[#f7f9fc]"
                >
                  English
                </button>

                <button
                  onClick={() => {
                    setLanguage("zh");
                    setOpenLanguage(false);
                  }}
                  className="w-full px-4 py-3 text-left hover:bg-[#f7f9fc]"
                >
                  繁體中文
                </button>
              </div>
            )}

          </div>

          <CTAButton
            variant="primary"
            onClick={() => navigate("contact")}
          >
            Contact us
            <ArrowRight size={14} />
          </CTAButton>
        </div>
        {/* Mobile Toggle */}
        <button
            className="ml-auto md:hidden p-2 rounded-lg hover:bg-accent"
            onClick={() => setOpen(!open)}
        >
            {open ? <X size={20}/> : <Menu size={20}/>}
        </button>

      </div>
      
       {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.page}
              onClick={() => { navigate(item.page); setOpen(false); }}
              className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                current === item.page ? "bg-accent text-primary" : "text-foreground hover:bg-accent"
              }`}
            >
              {t(item.key)}
            </button>
          ))}
        {/* Language */}
        <div className="border-t border-border pt-3 mt-2">

          <button
            onClick={() => setOpenLanguage(!openLanguage)}
            className="w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-medium"
          >
            <Globe size={18} />

            <span>
              {language === "en" ? "EN" : "zh-TW"}
            </span>
          </button>

          {openLanguage && (
            <div className="ml-10 mt-2 rounded-xl border border-border overflow-hidden">

              <button
                onClick={() => {
                  setLanguage("en");
                  setOpenLanguage(false);
                  setOpen(false);
                }}
                className="block w-full px-4 py-3 text-left hover:bg-accent"
              >
                English
              </button>

              <button
                onClick={() => {
                  setLanguage("zh");
                  setOpenLanguage(false);
                  setOpen(false);
                }}
                className="block w-full px-4 py-3 text-left hover:bg-accent"
              >
                繁體中文
              </button>

            </div>
          )}

        </div>
          <div className="pt-2">
            <CTAButton variant="primary" onClick={() => { navigate("contact"); setOpen(false); }}>
              Contact us <ArrowRight size={14} />
            </CTAButton>
          </div>
        </div>
      )}
    </header>
  );
}
