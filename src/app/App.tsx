import {
  useRef,
  useState,
  type ReactNode,
} from "react";

import {
  TEXT,
} from "./data/content";

import type {
  InvestorSection,
  Language,
  Page,
  Translator,
} from "./types";

import {
  Footer,
} from "./components/Footer";

import {
  Navbar,
} from "./components/Navbar";

import {
  AboutPage,
  ContactPage,
  HomePage,
  InvestorsPage,
  NewsArticlePage,
  NewsPage,
  PartnersPage,
  SolutionsPage,
  TechnologyPage,
} from "./pages";

const PAGE_IDS: readonly Page[] = [
  "home",
  "about",
  "technology",
  "solutions",
  "news",
  "investors",
  "partners",
  "contact",
];

function isPage(
  value: string | null,
): value is Page {
  return (
    value !== null &&
    PAGE_IDS.includes(
      value as Page,
    )
  );
}

function resolveTranslation(
  language: Language,
  key: string,
): string {
  const path =
    key.split(".");

  let value: unknown =
    TEXT[language];

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
      value as Record<
        string,
        unknown
      >
    )[part];
  }

  if (
    typeof value !== "string"
  ) {
    console.warn(
      `Translation is not a string: ${language}.${key}`,
    );

    return key;
  }

  return value;
}

export default function App() {
  /*
   * Read:
   *
   * ?article=article-slug
   * ?lang=en
   * ?page=news
   */
  const params =
    new URLSearchParams(
      window.location.search,
    );

  const articleSlug =
    params.get("article");

  const requestedLanguage =
    params.get("lang");

  const requestedPage =
    params.get("page");

  /*
   * Hooks must remain inside App
   * and above any conditional return.
   */
  const [
    page,
    setCurrent,
  ] = useState<Page>(() => {
    if (articleSlug) {
      return "news";
    }

    return isPage(
      requestedPage,
    )
      ? requestedPage
      : "home";
  });

  const [
    language,
    setLanguage,
  ] = useState<Language>(() =>
    requestedLanguage === "zh"
      ? "zh"
      : "en",
  );

  const [
    openLanguage,
    setOpenLanguage,
  ] = useState(false);

  const [
    investorSection,
    setInvestorSection,
  ] =
    useState<InvestorSection | null>(
      null,
    );

  const topRef =
    useRef<HTMLDivElement>(null);

  const t: Translator = (
    key: string,
  ) =>
    resolveTranslation(
      language,
      key,
    );

  const openInvestorSection = (
    section: InvestorSection,
  ) => {
    /*
     * Remove the article query when
     * navigating away from an article.
     */
    if (articleSlug) {
      const url =
        new URL(
          window.location.href,
        );

      url.searchParams.delete(
        "article",
      );

      window.history.replaceState(
        {},
        "",
        `${url.pathname}${url.search}${url.hash}`,
      );
    }

    setCurrent("investors");
    setInvestorSection(section);
    setOpenLanguage(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigate = (
    nextPage: Page,
  ) => {
    /*
     * Without this, the ?article=
     * parameter remains in the URL and
     * the article continues to render.
     */
    if (articleSlug) {
      const url =
        new URL(
          window.location.href,
        );

      url.searchParams.delete(
        "article",
      );

      window.history.replaceState(
        {},
        "",
        `${url.pathname}${url.search}${url.hash}`,
      );
    }

    setCurrent(nextPage);

    if (
      nextPage === "investors"
    ) {
      setInvestorSection(null);
    }

    setOpenLanguage(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const pageMap:
    Record<Page, ReactNode> = {
    home: (
      <HomePage
        navigate={navigate}
        language={language}
        t={t}
      />
    ),

    about: (
      <AboutPage
        t={t}
      />
    ),

    technology: (
      <TechnologyPage
        t={t}
        language={language}
      />
    ),

    solutions: (
      <SolutionsPage
        navigate={navigate}
        t={t}
      />
    ),

    news: (
      <NewsPage
        t={t}
        language={language}
      />
    ),

    investors: (
      <InvestorsPage
        navigate={navigate}
        activeSection={
          investorSection
        }
        setActiveSection={
          setInvestorSection
        }
        t={t}
      />
    ),

    partners: (
      <PartnersPage
        navigate={navigate}
        t={t}
      />
    ),

    contact: (
      <ContactPage
        navigate={navigate}
        language={language}
        t={t}
      />
    ),
  };

  /*
   * Keep the article inside the common
   * Navbar + main + Footer structure.
   */
  const pageContent =
    articleSlug ? (
      <NewsArticlePage
        slug={articleSlug}
        language={language}
        t={t}
      />
    ) : (
      pageMap[page]
    );

  return (
    <div
      ref={topRef}
      className="
        min-h-screen
        bg-background
        text-foreground
      "
      style={{
        fontFamily:
          "'DM Sans', sans-serif",
      }}
    >
      <Navbar
        current={
          articleSlug
            ? "news"
            : page
        }
        navigate={navigate}
        language={language}
        setLanguage={
          setLanguage
        }
        openLanguage={
          openLanguage
        }
        setOpenLanguage={
          setOpenLanguage
        }
        activeInvestorSection={
          investorSection
        }
        onInvestorSectionSelect={
          openInvestorSection
        }
        t={t}
      />

      <main>
        {pageContent}
      </main>

      <Footer
        navigate={navigate}
        language={language}
        t={t}
      />
    </div>
  );
}