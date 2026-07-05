import { Project, WorkCategory } from "./types";

export const WORKS_DATA: Project[] = [
{
  id: "branding-dummy",
  title: "Branding",
  category: WorkCategory.BRANDING,
  year: "2026",
  offsetTop: false,
  intro: "A showcase of branding and identity work — logo systems, visual language, and brand guidelines developed for various clients.",
  role: "Brand Strategy, Visual Identity, Art Direction",
  tech: "Illustrator, Photoshop, Figma",
  bgClass: "bg-[#D4A017]",
  thumbnail: "https://picsum.photos/seed/branding-dummy/600/750",
  content: [
    { type: "heading", text: "The concept" },
    {
      type: "paragraph",
      text: "Each branding project starts with the client's story and builds outward — logo, color, typography, and applications designed to work together as one system.",
    },
    {
      type: "image",
      width: "full",
      image: {
        src: "https://picsum.photos/seed/branding-hero/1200/675",
        aspect: "16/9",
        caption: "Brand system overview",
      },
    },
    {
      type: "text-image",
      imagePosition: "right",
      text: "The primary mark is refined until it reads clearly at any scale — from a favicon to a storefront sign.",
      image: { src: "https://picsum.photos/seed/branding-logo/600/450", aspect: "4/3" },
    },
    {
      type: "text-image",
      imagePosition: "left",
      text: "A defined color and type system keeps every touchpoint — packaging, signage, social — consistent and recognizable.",
      image: { src: "https://picsum.photos/seed/branding-palette/600/450", aspect: "4/3" },
    },
    {
      type: "quote",
      text: "A brand system that felt like us from the very first draft.",
      author: "Client",
    },
    {
      type: "gallery",
      images: [
        { src: "https://picsum.photos/seed/branding-g1/400/400" },
        { src: "https://picsum.photos/seed/branding-g2/400/400" },
        { src: "https://picsum.photos/seed/branding-g3/400/400" },
      ],
    },
  ],
},
 {
    id: "poster-design-dummy",
    title: "Poster Design",
    category: WorkCategory.POSTER,
    year: "2026",
    offsetTop: false,
    thumbnail: "https://picsum.photos/seed/poster-design-dummy/600/750",
    intro:
      "A showcase of poster design work — event posters, campaign visuals, and print collateral developed for various clients.",
    role: "Art Direction, Graphic Design",
    tech: "Illustrator, Photoshop",
    bgClass: "bg-[#0033AA]",
    content: [
      {
        type: "image-pair",
        images: [
          { src: "/images/poster-design-dummy/detail-1.png", alt: "Poster detail 1" },
          { src: "/images/poster-design-dummy/detail-2.png", alt: "Poster detail 2" },
        ],
      },
    ],
  },
 {
    id: "ui-ux",
    title: "UI/UX",
    category: WorkCategory.UI_UX,
    year: "2026",
    offsetTop: false,
    thumbnail: "https://picsum.photos/seed/ui-ux-dummy/600/750",
    intro:
      "A showcase of UI/UX work — product design, web and app interfaces, and user experience projects developed for various clients.",
    role: "UI/UX Design, Product Design",
    tech: "Figma, Adobe XD",
    bgClass: "bg-[#0033AA]",
    content: [
      {
        type: "image-pair",
        images: [
          { src: "/images/ui-ux-dummy/detail-1.png", alt: "UI/UX detail 1" },
          { src: "/images/ui-ux-dummy/detail-2.png", alt: "UI/UX detail 2" },
        ],
      },
    ],
  },
  {
    id: "mockups-dummy",
    title: "Mockups",
    category: WorkCategory.MOCKUPS,
    year: "2026",
    offsetTop: false,
    thumbnail: "https://picsum.photos/seed/mockups-dummy/600/750",
    intro:
      "A showcase of mockup work — product presentations, packaging visuals, and real-world context renders developed for various clients.",
    role: "Art Direction, Visual Design",
    tech: "Photoshop, Figma",
    bgClass: "bg-[#0033AA]",
    content: [
      {
        type: "image-pair",
        images: [
          { src: "/images/mockups-dummy/detail-1.png", alt: "Mockup detail 1" },
          { src: "/images/mockups-dummy/detail-2.png", alt: "Mockup detail 2" },
        ],
      },
    ],
  },
  {
    // Example of the new freedom: real paragraphs interleaved with real images,
    // in whatever order you want, instead of the fixed flower-grid layout.
    id: "cyber-garden",
    title: "Cyber Garden",
    category: WorkCategory.DIGITAL,
    year: "2022",
    flowerType: "red",
    offsetTop: true,
    intro:
      "An interactive web experience where users can plant and grow digital flowers using real-time data.",
    role: "Frontend Development",
    tech: "React, Three.js",
    bgClass: "bg-blue-900/40",
    content: [
      { type: "heading", text: "The Concept" },
      {
        type: "paragraph",
        text: "Cyber Garden started as an experiment in tying live sensor data to a growing 3D plant. Every visitor's session subtly reshapes the garden.",
      },
      {
        type: "image",
        width: "full",
        image: { src: "/images/cyber-garden/hero.png", aspect: "16/9", caption: "Full garden view, night mode" },
      },
      {
        type: "text-image",
        imagePosition: "right",
        text: "Growth logic runs client-side using Three.js instancing so thousands of stems can animate at 60fps without a server round-trip per frame.",
        image: { src: "/images/cyber-garden/stems.png", aspect: "4/3" },
      },
      {
        type: "text-image",
        imagePosition: "left",
        text: "Color palettes shift with time-of-day data pulled from the visitor's browser, so no two garden visits look identical.",
        image: { src: "/images/cyber-garden/palette.png", aspect: "4/3" },
      },
      { type: "quote", text: "It feels less like a website and more like tending something alive.", author: "Beta tester" },
      {
        type: "gallery",
          thumbnail: "https://picsum.photos/seed/neon-meadows/600/750",

        images: [
          { src: "/images/cyber-garden/g1.png" },
          { src: "/images/cyber-garden/g2.png" },
          { src: "/images/cyber-garden/g3.png" },
        ],
      },
    ],
  },
  {
    id: "static-bloom",
    title: "Static Bloom",
    category: WorkCategory.DIGITAL,
    year: "2021",
    flowerType: "yellow-tall",
    offsetTop: false,
    intro:
      "A series of high-contrast pixel art pieces celebrating the beauty of static shapes and shadows.",
    role: "Digital Artist",
    tech: "Aseprite",
    bgClass: "bg-blue-800/20",
    content: [
      { type: "flower-showcase", flowerType: "yellow-tall", bgClass: "bg-blue-800/20" },
      {
        type: "image-pair",
        images: [
          { src: "/images/static-bloom/detail-1.png" },
          { src: "/images/static-bloom/detail-2.png" },
        ],
      },
    ],
      thumbnail: "https://picsum.photos/seed/neon-meadows/600/750",

  },
  {
  id: "solar-bloom",
  title: "Solar Bloom",
  category: WorkCategory.DIGITAL,
  year: "2026",
  flowerType: "yellow",
  offsetTop: false,
  intro: "A live weather-driven pixel garden where bloom color and speed responds to real sunlight data at your location.",
  role: "Creative Direction, Frontend Development",
  tech: "React, Three.js, Open-Meteo API",
  bgClass: "bg-[#D4A017]",
  thumbnail: "https://picsum.photos/seed/neon-meadows/600/750",

  content: [
    { type: "flower-showcase", flowerType: "yellow", bgClass: "bg-[#D4A017]" },
    { type: "heading", text: "The concept" },
    {
      type: "paragraph",
      text: "Solar Bloom pairs a live weather feed with a field of generative pixel flowers — each bloom's color and speed responds to real sunlight data at your location.",
    },
    {
      type: "image",
      width: "full",
      image: {
        src: "https://picsum.photos/seed/solarbloom-hero/1200/675",
        aspect: "16/9",
        caption: "Full garden at solar noon",
      },
    },
    {
      type: "text-image",
      imagePosition: "right",
      text: "Each flower is a small state machine — bloom stage is driven by a sun-position calculation running client-side, updated every frame.",
      image: { src: "https://picsum.photos/seed/solarbloom-statemachine/600/450", aspect: "4/3" },
    },
    {
      type: "text-image",
      imagePosition: "left",
      text: "Color grading shifts warm at sunrise and sunset — the same JSON config file drives both the visuals and the accessibility contrast checks.",
      image: { src: "https://picsum.photos/seed/solarbloom-colorgrade/600/450", aspect: "4/3" },
    },
    {
      type: "quote",
      text: "It's the first portfolio piece that felt different every single time I opened it.",
      author: "Beta tester",
    },
    {
      type: "gallery",
      images: [
        { src: "https://picsum.photos/seed/solarbloom-g1/400/400" },
        { src: "https://picsum.photos/seed/solarbloom-g2/400/400" },
        { src: "https://picsum.photos/seed/solarbloom-g3/400/400" },
      ],
    },
  ],
}
];
