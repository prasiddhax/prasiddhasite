
export interface MousePosition {
  x: number;
  y: number;
}

export interface Project {
  id: string;
  title: string;
  category: WorkCategory;
  year: string;
  flowerType?: string; // now optional
  offsetTop: boolean;
  thumbnail: string; // NEW — card background image
  intro: string;
  role: string;
  tech: string;
  bgClass: string;
  content: ContentBlock[];
}


export enum WorkCategory {
  ALL = 'ALL',
  DIGITAL = 'DIGITAL ILLUSTRATION',
  GAME = '3D/GAME ASSETS',
  MOTION = 'MOTION'
}


export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "quote"; text: string; author?: string }
  | { type: "video_hero"; label: string }
  | { type: "color_grid"; colors: string[] }
  | { type: "two_column_pixel_svgs" }
  | { type: "image"; src: string; alt?: string; aspect?: "16/9" | "1/1" | "4/3" }; // room to grow

export interface BlogPost {
  slug: string;
  category: string;
  date: string;
  title: string;
  description: string;   // used for card preview + SEO meta
  author: string;
  imageType: "sunflower" | "grid"; // card thumbnail icon
  blocks: BlogBlock[];    // full article body, ordered
}