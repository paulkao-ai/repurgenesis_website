export type Page = "home" | "about" | "technology" | "solutions" | "news" | "investors" | "partners" | "contact"; 
export type InvestorSection = | "overview" | "updates" | "milestones"  | "governance"  | "resources"  | "contact";
export type Language = "en" | "zh";
export type Translator = (key: string) => string;
