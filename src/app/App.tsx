import { useRef, useState, type ReactNode } from "react";
import { TEXT } from "./data/content";
import type { Language, Page } from "./types";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import {
  AboutPage,
  ContactPage,
  HomePage,
  NewsPage,
  PartnersPage,
  SolutionsPage,
  TechnologyPage,
} from "./pages";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [language, setLanguage] = useState<Language>("en");
  const [openLanguage, setOpenLanguage] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const t = (key: string): string => {
    const keys = key.split(".");
    const value = keys.reduce<any>((obj, k) => obj?.[k], TEXT[language]);

    return typeof value === "string" ? value : key;
  };

  const navigate = (nextPage: Page) => {
    setPage(nextPage);
    setTimeout(() => topRef.current?.scrollIntoView({ behavior: "smooth" }), 10);
  };

  const pageMap: Record<Page, ReactNode> = {
    home: <HomePage navigate={navigate} t={t} />,
    about: <AboutPage />,
    technology: <TechnologyPage />,
    solutions: <SolutionsPage navigate={navigate} />,
    news: <NewsPage t={t} />,
    partners: <PartnersPage navigate={navigate} />,
    contact: <ContactPage navigate={navigate} t={t} />,
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
        t={t}
      />
      <main>{pageMap[page]}</main>
      <Footer navigate={navigate} t={t} />
    </div>
  );
}
