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
 
  