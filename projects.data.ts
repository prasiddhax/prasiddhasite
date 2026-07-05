import { Project, WorkCategory } from "./types";

export const WORKS_DATA: Project[] = [
  {
    id: "neon-meadows",
    title: "Neon Meadows",
    category: WorkCategory.DIGITAL,
    year: "2026",
    flowerType: "red",
    offsetTop: false,
    intro:
      "A pixel-based exploration of biological growth patterns within a rigid digital grid. This project examines the tension between organic forms and low-fidelity constraints.",
    role: "Creative Direction, Pixel Illustration",
    tech: "Photoshop, Aseprite",
    bgClass: "bg-[#0033AA]",
    content: [
      { type: "flower-showcase", flowerType: "red", bgClass: "bg-[#0033AA]" },
      {
        type: "image-pair",
        images: [
          { src: "/images/neon-meadows/detail-1.png", alt: "Pixel detail 1" },
          { src: "/images/neon-meadows/detail-2.png", alt: "Pixel detail 2" },
        ],
      },
    ],
  },
  {
    id: "floating-garden",
    title: "Floating Garden",
    category: WorkCategory.GAME,
    year: "2023",
    flowerType: "yellow",
    offsetTop: true,
    intro:
      "An immersive 3D environment featuring low-poly vegetation and floating islands. Designed for a peaceful, zen-like gaming experience.",
    role: "Environment Design, 3D Modeling",
    tech: "Blender, Unity",
    bgClass: "bg-[#0055EE]/50",
    content: [
      { type: "flower-showcase", flowerType: "yellow", bgClass: "bg-[#0055EE]/50" },
      {
        type: "image-pair",
        images: [
          { src: "/images/floating-garden/detail-1.png" },
          { src: "/images/floating-garden/detail-2.png" },
        ],
      },
    ],
  },
  {
    id: "pixel-flora",
    title: "Pixel Flora",
    category: WorkCategory.GAME,
    year: "2023",
    flowerType: "red-tall",
    offsetTop: false,
    intro:
      "A collection of 2D game assets featuring over 50 unique plant species, each with custom growth animations.",
    role: "Game Asset Design",
    tech: "Aseprite",
    bgClass: "bg-[#002288]/50",
    content: [
      { type: "flower-showcase", flowerType: "red-tall", bgClass: "bg-[#002288]/50", isSpecial: true },
      {
        type: "image-pair",
        images: [
          { src: "/images/pixel-flora/detail-1.png" },
          { src: "/images/pixel-flora/detail-2.png" },
        ],
      },
    ],
  },
  {
    id: "azure-dream",
    title: "Azure Dream",
    category: WorkCategory.MOTION,
    year: "2022",
    flowerType: "yellow-faded",
    offsetTop: false,
    intro:
      "A dreamy motion sequence exploring the fluidity of digital water. Every frame is hand-corrected for pixel perfection.",
    role: "Motion Design",
    tech: "After Effects",
    bgClass: "bg-[#0044CC]/70",
    content: [
      { type: "flower-showcase", flowerType: "yellow-faded", bgClass: "bg-[#0044CC]/70" },
      {
        type: "image-pair",
        images: [
          { src: "/images/azure-dream/detail-1.png" },
          { src: "/images/azure-dream/detail-2.png" },
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
  },
];