import type { Page } from "@app/types";
import energenesisBiomedicalLogo from "./partner_logo/energenesis_biomedical.jpg";

export const TEXT = {
  en: {
    nav: {
      about: "About",
      technology: "Technology",
      solutions: "Solutions",
      news: "News & Events",
      partners: "Partners",
    },

    stats: {
      years: "Years of research",
      compounds: "Compounds screened",
      pathways: "Pathways mapped",
      diseaseAreas: "Disease areas",
    },

    news: {
      label: "Company Updates",
      title: "Latest News & Events",
      // subtitle: "Follow our latest company updates and events across drug repurposing and translational research.",
      filter: "Filter",
      scroll: "Scroll",
      allNews: "All News",
    },
  },

  zh: {
    nav: {
      about: "關於我們",
      technology: "技術平台",
      solutions: "解決方案",
      news: "最新消息",
      partners: "合作夥伴",
    },

    stats: {
      years: "研究年資",
      compounds: "已篩選化合物",
      pathways: "已分析路徑",
      diseaseAreas: "疾病領域",
    },

    news: {
      label: "公司動態",
      title: "最新消息與活動",
      // subtitle: "了解我們在藥物再利用、轉譯研究、科學發表、合作夥伴關係與活動上的最新進展。",
      filter: "分類",
      scroll: "捲動",
      allNews: "看更多",
    },
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────
export const NAV_ITEMS: { key: string; page: Page }[] = [
  { key: "nav.about", page: "about" },
  { key: "nav.technology", page: "technology" },
  { key: "nav.solutions", page: "solutions" },
  { key: "nav.news", page: "news" },
  { key: "nav.partners", page: "partners" },
];

export const STATS = [
  { value: "12+", key: "stats.years" },
  { value: "340+", key: "stats.compounds" },
  { value: "27", key: "stats.pathways" },
  { value: "6", key: "stats.diseaseAreas" },
];

export const TECHNOLOGY_CARDS = [
  {
    icon: "🧬",
    title: "Molecular Repurposing Engine",
    description: "Our proprietary AI engine identifies existing approved compounds that can be repositioned to address unmet medical needs across rare and chronic diseases.",
    tag: "Core Platform",
  },
  {
    icon: "⚙️",
    title: "Multi-Omics Integration",
    description: "We integrate genomics, proteomics, and metabolomics data to uncover novel mechanisms of action and validate target-disease associations at scale.",
    tag: "Data Science",
  },
  {
    icon: "🔬",
    title: "In-Vitro Validation Lab",
    description: "Rapid wet-lab validation pipelines allow us to confirm computational predictions in physiologically relevant cellular models within weeks.",
    tag: "Wet Lab",
  },
  {
    icon: "📊",
    title: "Biomarker Discovery",
    description: "Patient stratification through advanced biomarker profiling ensures the right compound reaches the right patient population in trials.",
    tag: "Translational",
  },
];

export const SOLUTIONS = [
  {
    label: "Rare Diseases",
    description: "Accelerating treatment timelines for orphan conditions where de novo drug development is prohibitively slow and expensive.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=400&fit=crop&auto=format",
  },
  {
    label: "Oncology",
    description: "Re-engineering established compounds for combination oncology regimens with improved tolerability profiles.",
    image: "https://www.sciencedaily.com/images/1920/targeting-cancer-cells-ultrasound.webp",
  },
  {
    label: "Neurodegeneration",
    description: "Targeting CNS pathways with repurposed molecules to slow progression in Alzheimer's, Parkinson's, and ALS.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop&auto=format",
  },
  {
    label: "Metabolic Disorders",
    description: "Leveraging existing metabolic modulators against emerging targets in NASH, type 2 diabetes, and obesity.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop&auto=format",
  },
];

export const ALL_NEWS = [
  {
    date: "June 2025",
    tag: "Press Release",
    title: "Repurgenesis Completes Series B Funding Round of €42M",
    excerpt: "The funding will accelerate our lead rare disease program into Phase II clinical trials and expand our computational infrastructure across three new sites.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop&auto=format",
  },
  {
    date: "April 2025",
    tag: "Publication",
    title: "New Study Validates Repurgenesis AI Model in Fibrosis Targets",
    excerpt: "Published in Nature Medicine, our research demonstrates 87% concordance between model predictions and in-vitro fibrosis assay outcomes.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop&auto=format",
  },
  {
    date: "February 2025",
    tag: "Partnership",
    title: "Strategic Alliance with University Hospital Network Announced",
    excerpt: "Access to biobank data from 28,000 patients will power next-generation disease stratification models across five therapeutic areas.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=300&fit=crop&auto=format",
  },
  {
    date: "January 2025",
    tag: "Event",
    title: "Repurgenesis Presents at JPMorgan Healthcare Conference 2025",
    excerpt: "CEO Dr. Wei-Lin Chen presented the company's pipeline progress and long-term vision to a global audience of healthcare investors in San Francisco.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=300&fit=crop&auto=format",
  },
  {
    date: "November 2024",
    tag: "Publication",
    title: "Repurgenesis Publishes Benchmark Results in Cell Chemical Biology",
    excerpt: "Our multi-omics pipeline outperforms existing state-of-the-art methods for compound-target interaction prediction across 14 disease categories.",
    image: "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/68a7f67cc21cd2001dfa8ed9.jpg",
  },
  {
    date: "October 2024",
    tag: "Event",
    title: "Repurgenesis Joins BIO-Europe 2024 as Featured Speaker",
    excerpt: "Our Chief Scientific Officer presented the molecular repurposing platform to 4,000+ delegates, sparking three new partnership discussions.",
    image: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=600&h=300&fit=crop&auto=format",
  },
  {
    date: "August 2024",
    tag: "Press Release",
    title: "Repurgenesis Receives EMA Orphan Drug Designation for Lead Program",
    excerpt: "The European Medicines Agency has granted Orphan Drug Designation to RG-201 for the treatment of a rare pulmonary fibrosis subtype.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=300&fit=crop&auto=format",
  },
  {
    date: "July 2024",
    tag: "Partnership",
    title: "Joint Research Agreement Signed with Karolinska Institutet",
    excerpt: "The collaboration will focus on neurodegeneration target identification using Repurgenesis's proprietary AI against Karolinska's patient cohort datasets.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=300&fit=crop&auto=format",
  },
  {
    date: "May 2024",
    tag: "Publication",
    title: "Preclinical Data on RG-101 Published in Journal of Medicinal Chemistry",
    excerpt: "RG-101, a repurposed kinase inhibitor, demonstrates potent activity in ALS motor neuron models with a favorable CNS penetration profile.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=300&fit=crop&auto=format",
  },
];


export const PARTNERS = [
  { name: "BioNord Institute", type: "Academic" },
  { name: "Alnova Pharma", type: "Industry" },
  { name: "EU Horizon Consortium", type: "Grant Body" },
  { name: "MedData Alliance", type: "Data" },
  { name: "ClinPath Network", type: "Clinical" },
  { name: "Versante Capital Bio", type: "Investor" },
  { name: "OpenTarget Initiative", type: "Research" },
  { name: "HealthTech Accelerator", type: "Ecosystem" },
];

export const FAQS = [
  {
    q: "What makes drug repurposing more efficient than de novo development?",
    a: "Repurposed compounds have already passed Phase I safety trials. This eliminates 3–5 years of early-stage development and reduces failure risk. Our AI layer further filters candidates by predicted efficacy, shrinking the field from thousands to a handful of high-confidence candidates.",
  },
  {
    q: "Which disease areas does Repurgenesis currently focus on?",
    a: "Our current pipeline spans rare diseases, oncology, neurodegeneration, and metabolic disorders. We maintain an open collaboration model — pharma and biotech partners can bring their target hypotheses to our platform for rapid feasibility analysis.",
  },
  {
    q: "How do you validate computational predictions?",
    a: "Every AI-generated hypothesis is subjected to a structured wet-lab validation cascade: target engagement assays, disease-model cell lines, and where available, patient-derived organoids. We publish our validation data in peer-reviewed journals.",
  },
  {
    q: "Can established pharma companies license your platform?",
    a: "Yes. We offer platform licensing, co-development agreements, and milestone-based partnerships. Contact our business development team for a confidential feasibility assessment.",
  },
];

export const TIMELINE = [
  { year: "2013", event: "Founded in Taipei with a mandate to reduce time-to-treatment in orphan diseases." },
  { year: "2016", event: "First computational platform deployed; 120 compounds analyzed in Year 1." },
  { year: "2018", event: "Series A funding. Lab expansion. First wet-lab validation of repurposed compound in fibrosis." },
  { year: "2021", event: "Lead program enters IND-enabling studies. Multi-omics pipeline launched." },
  { year: "2023", event: "Nature Medicine publication. European regulatory dialogue initiated." },
  { year: "2025", event: "Series B closed. Phase II trial design finalized. Three new therapeutic programs opened." },
];

// ─── Tag colors ───────────────────────────────────────────────────────────────
export const TAG_COLOR: Record<string, string> = {
  "Press Release": "#f09f74",
  "Publication": "#5b8dd9",
  "Partnership": "#62b08a",
  "Event": "#a07fd4",
};


export const people = [
  {
    name: "Dr. Wei-Lin Chen",
    title: "CEO & Co-founder",
    bg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&auto=format",
  },
  { name: "Dr. Wei-Lin Chen", title: "CEO & Co-founder", bg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&auto=format" },
  { name: "Dr. Marc Durand", title: "CSO & Co-founder", bg: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&auto=format" },
  { name: "Sarah Lim, MBA", title: "Chief Business Officer", bg: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&auto=format" },
  { name: "Sarah Lim, MBA", title: "Chief Business Officer", bg: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&auto=format" },
  { name: "Sarah Lim, MBA", title: "Chief Business Officer", bg: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&auto=format" },
];

export const steps = [
  {
    step: "01",
    label: "Data Ingestion",
    desc: "Multi-omics + clinical datasets",
  },
  {
    step: "02",
    label: "AI Scoring",
    desc: "Compound-target affinity modeling",
  },
  {
    step: "03",
    label: "Shortlisting",
    desc: "Top candidates ranked by confidence",
  },
  {
    step: "04",
    label: "Wet-Lab Validation",
    desc: "In-vitro & organoid assays",
  },
  {
    step: "05",
    label: "IND Filing",
    desc: "Regulatory package preparation",
  },
];

// ─── Partner ─────────────────────────────────────────────────────────────────────
export type PartnerCategory =
  | "BioData"
  | "AI Tech for Bio"
  | "CRO & Wet Lab"
  | "Academic"
  | "Clinical";

export type PartnerLocation = {
  id: string;
  name: string;
  displayName?: string;
  category: PartnerCategory;
  city: string;
  country: string;
  address: string;
  coordinates: [number, number];
  mapsUrl: string;
  websiteUrl?: string;
  description?: string;
  logoText: string;
  logoUrl?: string;
};

export const PARTNER_CATEGORY_STYLE: Record<
  PartnerCategory,
  {
    label: string;
    color: string;
    bg: string;
  }
> = {
  BioData: {
    label: "BioData",
    color: "#5B8DD9",
    bg: "#EFF6FF",
  },
  "AI Tech for Bio": {
    label: "AI Tech for Bio",
    color: "#A07FD4",
    bg: "#F5F0FF",
  },
  "CRO & Wet Lab": {
    label: "CRO & Wet Lab",
    color: "#62B08A",
    bg: "#ECFDF3",
  },
  Academic: {
    label: "Academic",
    color: "#F09F74",
    bg: "#FFF4ED",
  },
  Clinical: {
    label: "Clinical",
    color: "#E87C4A",
    bg: "#FFF1E8",
  },
};


export const PARTNER_LOCATIONS: PartnerLocation[] = [
  {
    id: "energenesis-biomedical",
    name: "Energenesis Biomedical 華安醫學",
    displayName: "Energenesis Biomedical",
    category: "CRO & Wet Lab",
    city: "Taipei",
    country: "Taiwan",
    address:
      "6F.-3, No.21, Ln.583, Ruiguang Rd., Neihu Dist., Taipei 11492, Taiwan (R.O.C.)",
    coordinates: [121.5677563, 25.0806552],
    mapsUrl: "https://maps.app.goo.gl/Lw3CgFDiCmutFdnq9",
    websiteUrl: "https://www.energenesis-biomedical.com/en",
    description:
      "Taiwan based biomedical company with drug development and bio service capabilities.",
    logoText: "EB",
    logoUrl: energenesisBiomedicalLogo,
  },
];

export type NewsArticle = typeof ALL_NEWS[number];
export type Person = typeof people[number];
