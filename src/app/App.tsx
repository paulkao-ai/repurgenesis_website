import { useRef, useState, type ReactNode } from "react";
import { TEXT } from "./data/content";
import type { InvestorSection, Language, Page, Translator } from "./types";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import {
  AboutPage,
  ContactPage,
  HomePage,
  InvestorsPage,
  NewsPage,
  PartnersPage,
  SolutionsPage,
  TechnologyPage,
} from "./pages";


function resolveTranslation(
  language: Language,
  key: string,
): string {
  const path = key.split(".");
  let value: unknown = TEXT[language];

  for (const part of path) {
    if (
      typeof value !== "object" ||
      value === null ||
      !(part in value)
    ) {
      console.warn(
        `Missing translation: ${language}.${key}`,
      );

      return key;
    }

    value = (
      value as Record<string, unknown>
    )[part];
  }

  if (typeof value !== "string") {
    console.warn(
      `Translation is not a string: ${language}.${key}`,
    );

    return key;
  }

  return value;
}

export default function App() {
  const [page, setCurrent] = useState<Page>("home");
  const [language, setLanguage] = useState<Language>("en");
  const [openLanguage, setOpenLanguage] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);
  const [investorSection, setInvestorSection] = useState<InvestorSection | null>(null);

  const t: Translator = (key: string) => resolveTranslation(language, key);

  const openInvestorSection = (
    section: InvestorSection,
  ) => {
    setCurrent("investors");
    setInvestorSection(section);
    setOpenLanguage(false);
  };

  // const navigate = (nextPage: Page) => {
  //   setPage(nextPage);
  //   setTimeout(() => topRef.current?.scrollIntoView({ behavior: "smooth" }), 10);
  // };
  const navigate = (nextPage: Page) => {
    setCurrent(nextPage);

    if (nextPage === "investors") {
      setInvestorSection(null);
    }

    setOpenLanguage(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const pageMap: Record<Page, ReactNode> = {
    home: <HomePage navigate={navigate} language={language} t={t} />,
    about: <AboutPage t={t} />,
    technology: <TechnologyPage t={t} />,
    solutions: <SolutionsPage navigate={navigate} t={t} />,
    news: <NewsPage t={t} />,
    investors:  <InvestorsPage navigate={navigate} activeSection={investorSection} setActiveSection={setInvestorSection} t={t}/>,
    partners: <PartnersPage navigate={navigate} t={t} />,
    contact: <ContactPage navigate={navigate} language={language} t={t} />,
  };

  return (
    <div
      ref={topRef}
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <Navbar
        current={page}
        navigate={navigate}
        language={language}
        setLanguage={setLanguage}
        openLanguage={openLanguage}
        setOpenLanguage={setOpenLanguage}
        activeInvestorSection={investorSection}
        onInvestorSectionSelect={openInvestorSection}
        t={t}
      />
      <main>{pageMap[page]}</main>
      <Footer navigate={navigate} language={language} t={t} />
    </div>
  );
}
