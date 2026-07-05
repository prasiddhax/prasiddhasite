export enum WorkCategory {
  ALL = "All",
  DIGITAL = "Digital",
  GAME = "Game",
  MOTION = "Motion",
  BRANDING = "Branding",   // add
  POSTER = "Poster",       // add
  UI_UX = "UI/UX",          // add
  MOCKUPS = "Mockups",      // add
}

export interface ImageBlock {
  src: string;
  alt?: string;
  caption?: string;
  aspect?: "16/9" | "1/1" | "4/3" | "3/4" | "21/9";
}

// Add new block types here as your pages need new layouts.
export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "image"; image: ImageBlock; width?: "full" | "half" }
  | { type: "image-pair"; images: [ImageBlock, ImageBlock] }
  | { type: "text-image"; text: string; image: ImageBlock; imagePosition: "left" | "right" }
  | { type: "quote"; text: string; author?: string }
  | { type: "gallery"; images: ImageBlock[] }
  | { type: "flower-showcase"; flowerType: string; bgClass: string; isSpecial?: boolean };

export interface Project {
  id: string;
  title: string;
  category: WorkCategory;
  year: string;
  flowerType: string;
  offsetTop: boolean;
  intro: string;      // short hero description under the title
  role: string;
  tech: string;
  bgClass: string;
  content: ContentBlock[]; // <-- your article body, fully ordered/configurable
}