import { Project, WorkCategory } from "./types";

export const WORKS_DATA: Project[] = [
  {
    id: "bloomcraft-identity",
    title: "Bloomcraft Identity",
    category: WorkCategory.BRANDING,
    year: "2026",
    offsetTop: false,
    intro: "A full brand identity system built for a boutique floral studio — logo, color language, and packaging designed to feel handmade at every scale.",
    role: "Brand Strategy, Visual Identity, Art Direction",
    tech: "Illustrator, Photoshop, Figma",
    bgClass: "bg-[#D4A017]",
    thumbnail: "https://picsum.photos/seed/bloomcraft-identity/600/750",
    content: [
      { type: "heading", text: "The concept" },
      {
        type: "paragraph",
        text: "Bloomcraft needed an identity that felt organic without slipping into cliché — a system built around a single hand-drawn bloom mark that scales from a wax seal to a shopfront sign.",
      },
      {
        type: "image",
        width: "full",
        image: {
          src: "https://picsum.photos/seed/bloomcraft-hero/1200/675",
          aspect: "16/9",
          caption: "Full brand system overview",
        },
      },
      {
        type: "text-image",
        imagePosition: "right",
        text: "The primary mark is a single continuous line, redrawn by hand until it read clearly at 16px and still felt organic at billboard scale.",
        image: { src: "https://picsum.photos/seed/bloomcraft-logo/600/450", aspect: "4/3" },
      },
      {
        type: "text-image",
        imagePosition: "left",
        text: "A warm, earthy palette anchors the system — the same tokens drive packaging, signage, and the social templates handed off to the client's team.",
        image: { src: "https://picsum.photos/seed/bloomcraft-palette/600/450", aspect: "4/3" },
      },
      {
        type: "quote",
        text: "The first brand system that felt like us from the very first draft.",
        author: "Client, Bloomcraft Studio",
      },
      {
        type: "gallery",
        images: [
          { src: "https://picsum.photos/seed/bloomcraft-g1/400/400" },
          { src: "https://picsum.photos/seed/bloomcraft-g2/400/400" },
          { src: "https://picsum.photos/seed/bloomcraft-g3/400/400" },
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
          { src: "https://picsum.photos/seed/poster-detail-1/600/450", alt: "Poster detail 1" },
          { src: "https://picsum.photos/seed/poster-detail-2/600/450", alt: "Poster detail 2" },
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
          { src: "https://picsum.photos/seed/uiux-detail-1/600/450", alt: "UI/UX detail 1" },
          { src: "https://picsum.photos/seed/uiux-detail-2/600/450", alt: "UI/UX detail 2" },
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
          { src: "https://picsum.photos/seed/mockups-detail-1/600/450", alt: "Mockup detail 1" },
          { src: "https://picsum.photos/seed/mockups-detail-2/600/450", alt: "Mockup detail 2" },
        ],
      },
    ],
  },
  {
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
    thumbnail: "https://picsum.photos/seed/cyber-garden/600/750",
    content: [
      { type: "heading", text: "The Concept" },
      {
        type: "paragraph",
        text: "Cyber Garden started as an experiment in tying live sensor data to a growing 3D plant. Every visitor's session subtly reshapes the garden.",
      },
      {
        type: "image",
        width: "full",
        image: { src: "https://picsum.photos/seed/cybergarden-hero/1200/675", aspect: "16/9", caption: "Full garden view, night mode" },
      },
      {
        type: "text-image",
        imagePosition: "right",
        text: "Growth logic runs client-side using Three.js instancing so thousands of stems can animate at 60fps without a server round-trip per frame.",
        image: { src: "https://picsum.photos/seed/cybergarden-stems/600/450", aspect: "4/3" },
      },
      {
        type: "text-image",
        imagePosition: "left",
        text: "Color palettes shift with time-of-day data pulled from the visitor's browser, so no two garden visits look identical.",
        image: { src: "https://picsum.photos/seed/cybergarden-palette/600/450", aspect: "4/3" },
      },
      { type: "quote", text: "It feels less like a website and more like tending something alive.", author: "Beta tester" },
      {
        type: "gallery",
        images: [
          { src: "https://picsum.photos/seed/cybergarden-g1/400/400" },
          { src: "https://picsum.photos/seed/cybergarden-g2/400/400" },
          { src: "https://picsum.photos/seed/cybergarden-g3/400/400" },
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
    thumbnail: "https://picsum.photos/seed/static-bloom/600/750",
    content: [
      { type: "flower-showcase", flowerType: "yellow-tall", bgClass: "bg-blue-800/20" },
      {
        type: "image-pair",
        images: [
          { src: "https://picsum.photos/seed/staticbloom-detail-1/600/450" },
          { src: "https://picsum.photos/seed/staticbloom-detail-2/600/450" },
        ],
      },
    ],
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
    thumbnail: "https://picsum.photos/seed/solar-bloom/600/750",
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
  },
];