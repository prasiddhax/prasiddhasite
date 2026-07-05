import { BlogPost } from "./types";

export const POSTS_DATA: BlogPost[] = [
  {
    slug: "crafting-digital-gardens",
    category: "DIGITAL CRAFT",
    date: "JULY 12, 2024",
    title: "Crafting Digital Gardens",
    description:
      "Exploring how to balance high-fidelity typography with nostalgic pixel elements to create unique digital experiences that feel both heritage and futuristic.",
    author: "STEPHANIE",
    imageType: "sunflower",
    blocks: [
      {
        type: "paragraph",
        text: "The web used to be a place of wild experimentation. Before the age of standardized grids and minimalist templates, there was a sense of ownership over digital spaces. We didn't just build sites; we planted seeds. This is the philosophy behind the \"Digital Garden.\"",
      },
      { type: "video_hero", label: "PROCESS_REEL_01.MP4" },
      { type: "heading", level: 2, text: "The Pixel as a Seed" },
      {
        type: "paragraph",
        text: "Working with pixel art in a high-resolution world is an act of intentional limitation. When every square counts, every decision becomes meaningful. In my recent work, I've been exploring how these rigid blocks can represent organic growth—flowers that bloom only when the user interacts, vines that climb the sidebar.",
      },
      { type: "quote", text: "Design is not just what it looks like; it's the ecosystem it fosters." },
      {
        type: "paragraph",
        text: "Integrating these elements requires a delicate balance. The code must be clean, but the experience should feel hand-crafted. I often find myself spending hours tweaking CSS transitions just to make a pixelated petal fall with the right weight.",
      },
      { type: "two_column_pixel_svgs" },
      {
        type: "paragraph",
        text: "As we move toward 2025, my goal is to continue blending these worlds—the sharp precision of modern development with the charming imperfections of early digital art. After all, a garden is most beautiful when it's a little overgrown.",
      },
    ],
  },
  {
    slug: "color-theory-limited-palette",
    category: "PIXEL ART",
    date: "JUNE 28, 2024",
    title: "Color theory in limited palette constraints",
    description:
      "Why working with only 16 colors can actually lead to more expressive and cohesive brand identities than an infinite spectrum.",
    author: "STEPHANIE",
    imageType: "grid",
    blocks: [
      {
        type: "paragraph",
        text: "Why working with only 16 colors can actually lead to more expressive and cohesive brand identities than an infinite spectrum. Limited palettes force decisions and cultivate a unique voice.",
      },
      { type: "color_grid", colors: ["#EF4444", "#FBBF24", "#22C55E"] },
      {
        type: "paragraph",
        text: "Designers often assume that more colors equal more freedom, but constraints can actually unlock creativity. Each hue must serve a purpose—whether it's establishing hierarchy, guiding attention, or reinforcing brand identity.",
      },
      { type: "quote", text: "Constraints don't limit creativity; they sharpen it." },
      {
        type: "paragraph",
        text: "Pixel art demonstrates this principle beautifully. With only a handful of colors, artists achieve depth and emotion through contrast, saturation, and clever dithering techniques.",
      },
      {
        type: "paragraph",
        text: "In branding, a restricted palette communicates confidence and clarity. It signals that the identity doesn't need endless variation to remain impactful—it thrives on discipline and focus.",
      },
      { type: "heading", level: 2, text: "Practical Applications" },
      {
        type: "paragraph",
        text: "Limited palettes are especially effective in digital interfaces where consistency matters. Buttons, alerts, and typography all benefit from a controlled color system that feels intentional rather than arbitrary.",
      },
      {
        type: "paragraph",
        text: "By embracing limitations, designers can create systems that are easier to maintain, more accessible, and visually memorable.",
      },
      {
        type: "paragraph",
        text: "Using constraints as a creative engine often leads to surprising outcomes and stronger design systems.",
      },
    ],
  },{
  slug: "night-market-sixteen-colors",
  category: "DIGITAL CRAFT",
  date: "AUGUST 3, 2024",
  title: "Building a night market in sixteen colors",
  description:
    "A look inside the reference-to-render process for a rain-soaked night market scene, built entirely within a sixteen-color palette.",
  author: "STEPHANIE",
  imageType: "sunflower",

  // blocks[] is the article body — same ordered-array pattern as content[] on projects
  blocks: [
    // 0. Opening paragraph, no image
    {
      type: "paragraph",
      text: "Every scene starts as a mood, not a mockup. For this piece I wanted the feeling of walking into a night market minutes after the rain stops — wet pavement, string lights, steam off a food cart.",
    },

    // 1. Full-width hero image right after the intro
    {
      type: "image",
      src: "https://picsum.photos/seed/nightmarket-hero/1200/675",
      alt: "Night market hero",
      aspect: "16/9",
    },

    // 2. Section heading
    { type: "heading", level: 2, text: "Reference before rendering" },

    // 3. Paragraph
    {
      type: "paragraph",
      text: "I shoot or source photo references first, then trace the light logic before touching a single pixel. Getting the reflections right on wet ground is 80% of what sells a night scene.",
    },

    // 4. Process video placeholder
    { type: "video_hero", label: "PROCESS_REEL_02.MP4" },

    // 5. Pull quote
    { type: "quote", text: "A scene isn't finished when it looks right — it's finished when it looks lived-in." },

    // 6. Square detail crop image
    {
      type: "image",
      src: "https://picsum.photos/seed/nightmarket-detail/700/700",
      alt: "Detail crop",
      aspect: "1/1",
    },

    // 7. Palette swatches
    { type: "color_grid", colors: ["#2B1E4A", "#6B4FA0", "#E8A33D", "#F2E3C4"] },

    // 8. Side-by-side pixel SVGs
    { type: "two_column_pixel_svgs" },

    // 9. Closing paragraph
    {
      type: "paragraph",
      text: "The finished piece went through eleven passes. Most of that time wasn't spent adding detail — it was spent removing it, until only the essential sixteen colors were left standing.",
    },
  ],
}
];