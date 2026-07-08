import { Project, WorkCategory } from "./types";

export const WORKS_DATA: Project[] = [
{
    id: "branding-collection",
    title: "Brand Identity Collection",
    category: WorkCategory.BRANDING,
    year: "2026",
    offsetTop: false,
    intro: "A collection of full brand identity systems — logo, color language, and visual direction — built across industries ranging from floristry to construction, each tailored to feel native to its own world.",
    role: "Brand Strategy, Visual Identity, Art Direction",
    tech: "Illustrator, Photoshop, Figma",
    bgClass: "bg-[#D4A017]",
    thumbnail: "https://drive.google.com/thumbnail?id=1AwJ8seMS6Dl6mVe6TtahJEL-WklgJZ4z",
    content: [
      { type: "heading", text: "AITC International" },
      {
        type: "paragraph",
        text: "AITC International needed a mark that could sit on a certificate, a stage backdrop, and a passport-sized business card with equal weight. The system leans on a geometric monogram and a restrained navy-and-gold palette to signal institutional trust.",
      },
      {
        type: "image",
        width: "full",
        image: {
src: "https://drive.google.com/thumbnail?id=1e_tICpfKTDUYK9bkVW1HiPpkx-0lhqtE&sz=w2000" ,
    aspect: "16/9",
          caption: "AITC International — full brand system",
        },
      },
      {
        type: "text-image",
        imagePosition: "right",
        text: "The monogram is built from overlapping strokes representing connection across regions — simplified until it reproduces cleanly in embossing, signage, and single-color print.",
        image: { src: "https://drive.google.com/thumbnail?id=1TOx58SBa4GtHTxVFUb_jPcoRgjllIVH7&sz=w2000", aspect: "4/3" },
      },
      {
        type: "quote",
        text: "Finally a brand that looks like the international standard we train people to.",
        author: "Client, AITC International",
      },

      { type: "heading", text: "Veda Studios" },
      {
        type: "paragraph",
        text: "Veda Studios didn't want a logo that competed with client work. The identity strips down to a single lowercase wordmark and a near-black palette, letting the studio's output — not its branding — do the talking.",
      },
       {
        type: "image",
        width: "full",
        image: {
src: "https://drive.google.com/thumbnail?id=1Ft57zlcpBpFY78SqFcuHxTIPZjDBgyyU&sz=w2000" ,
    aspect: "16/9",
          caption: "Veda Studios — full brand system",
        },
      },
      {
        type: "text-image",
        imagePosition: "left",
        text: "The wordmark uses a tightened, custom letterspacing that reads as quietly premium on a slide, a business card, or a studio wall.",
        image: { src: "https://picsum.photos/seed/veda-logo/600/450", aspect: "4/3" },
      },
      {
        type: "quote",
        text: "It gets out of the way and lets our reels do the talking.",
        author: "Client, Veda Studios",
      },

      { type: "heading", text: "Opera Construction" },
      {
        type: "paragraph",
        text: "Opera Construction wanted an identity that read as established, not flashy. A structural monogram and a gold-on-charcoal palette give the brand weight on job-site signage while still holding up in a boardroom deck.",
      },
      {
        type: "image",
        width: "full",
        image: {
          src: "https://picsum.photos/seed/opera-hero/1200/675",
          aspect: "16/9",
          caption: "Opera Construction — full brand system",
        },
      },
      {
        type: "text-image",
        imagePosition: "right",
        text: "The mark is built from a single angled beam form, doubling as a subtle nod to the industry without tipping into a literal hard-hat cliché.",
        image: { src: "https://picsum.photos/seed/opera-logo/600/450", aspect: "4/3" },
      },
      {
        type: "quote",
        text: "It finally looks like the scale of work we actually do.",
        author: "Client, Opera Construction",
      },

      { type: "heading", text: "Bagaicha Honey" },
      {
        type: "paragraph",
        text: "Bagaicha Honey needed packaging and brand language that felt raw and orchard-grown rather than mass-produced. Hand-drawn botanical linework and a warm amber palette carry the story from label to signage.",
      },
      {
        type: "image",
        width: "full",
        image: {
          src: "https://drive.google.com/thumbnail?id=15ScdSp_34UfDHxvEW5qF3XOfgKVqXjDp&sz=w2000",
          aspect: "16/9",
          caption: "Bagaicha Honey — full brand system",
        },
      },
      {
        type: "text-image",
        imagePosition: "left",
        text: "A single hive-and-leaf mark anchors the system, simplified enough to emboss onto a jar lid or stamp onto kraft paper packaging.",
        image: { src: "https://drive.google.com/thumbnail?id=10osJg_xbA6K853vDx4UNH9O8nGZHXAOS&sz=w2000", aspect: "4/3" },
      },
      {
        type: "quote",
        text: "Customers say the jar looks like what's inside tastes.",
        author: "Client, Bagaicha Honey",
      },

      { type: "heading", text: "Elyn Studio" },
      {
        type: "paragraph",
        text: "Elyn Studio wanted a soft, editorial identity that could flex across photography, styling, and social content. A serif wordmark and a muted blush-and-cream palette give the brand a quiet, gallery-like feel.",
      },
      {
        type: "image",
        width: "full",
        image: {
          src: "https://picsum.photos/seed/elynstudio-hero/1200/675",
          aspect: "16/9",
          caption: "Elyn Studio — full brand system",
        },
      },
      {
        type: "text-image",
        imagePosition: "right",
        text: "The wordmark pairs a high-contrast serif with generous tracking, built to feel at home on a portfolio cover or a printed invitation.",
        image: { src: "https://picsum.photos/seed/elynstudio-logo/600/450", aspect: "4/3" },
      },
      {
        type: "quote",
        text: "It feels like us — soft but not forgettable.",
        author: "Client, Elyn Studio",
      },

      { type: "heading", text: "Ruby Homes" },
      {
        type: "paragraph",
        text: "Ruby Homes needed a real estate identity that felt premium without tipping into generic luxury. A deep ruby-and-gold palette and a refined monogram give the brand a distinct, ownable presence in a crowded category.",
      },
      {
        type: "image",
        width: "full",
        image: {
          src: "https://drive.google.com/thumbnail?id=1-y0qGcepKhp3AyksZ9ZbkAx5G_pUQUp2&sz=w2000",
          aspect: "16/9",
          caption: "Ruby Homes — full brand system",
        },
      },
      {
        type: "text-image",
        imagePosition: "left",
        text: "The monogram interlocks an R and H into a single architectural form, reading equally well on a signboard, a keychain, or a listing brochure.",
        image: { src: "https://drive.google.com/thumbnail?id=1bALBuh-B_qHcpVAzgoXraWg5suuyTNH-&sz=w2000", aspect: "4/3" },
      },
      {
        type: "quote",
        text: "Every listing looks more expensive with this branding on it.",
        author: "Client, Ruby Homes",
      },

      { type: "heading", text: "Minimaya" },
      {
        type: "paragraph",
        text: "Minimaya's identity needed to live up to its name — a stripped-back, minimal system built on negative space, restraint, and a single considered accent color.",
      },
      {
        type: "image",
        width: "full",
        image: {
          src: "https://picsum.photos/seed/minimaya-hero/1200/675",
          aspect: "16/9",
          caption: "Minimaya — full brand system",
        },
      },
      {
        type: "text-image",
        imagePosition: "right",
        text: "The mark is reduced to a single geometric form, designed to hold its identity even at favicon size or embroidered at 10mm.",
        image: { src: "https://picsum.photos/seed/minimaya-logo/600/450", aspect: "4/3" },
      },
      {
        type: "quote",
        text: "Less than we expected, and exactly what we needed.",
        author: "Client, Minimaya",
      },

      { type: "heading", text: "Griffity Studios" },
      {
        type: "paragraph",
        text: "Griffity Studios' own identity needed to carry the same confidence it builds for clients — a bold black-and-gold system built to hold up across pitch decks, motion, and merch alike.",
      },
      {
        type: "image",
        width: "full",
        image: {
          src: "https://picsum.photos/seed/griffity-hero/1200/675",
          aspect: "16/9",
          caption: "Griffity Studios — full brand system",
        },
      },
      {
        type: "text-image",
        imagePosition: "left",
        text: "The mark pairs a sharp geometric monogram with a signature gold (#DCA138) against black — deliberately loud enough to survive being cropped into a favicon or blown up on a studio wall.",
        image: { src: "https://picsum.photos/seed/griffity-logo/600/450", aspect: "4/3" },
      },
      {
        type: "quote",
        text: "The one brand system we never get tired of looking at — because it's ours.",
        author: "Griffity Studios Team",
      },

      {
        type: "gallery",
        images: [
          { src: "https://picsum.photos/seed/branding-g1/400/400" },
          { src: "https://picsum.photos/seed/branding-g2/400/400" },
          { src: "https://picsum.photos/seed/branding-g3/400/400" },
          { src: "https://picsum.photos/seed/branding-g4/400/400" },
          { src: "https://picsum.photos/seed/branding-g5/400/400" },
          { src: "https://picsum.photos/seed/branding-g6/400/400" },
          { src: "https://picsum.photos/seed/branding-g7/400/400" },
        ],
      },
    ],
  },
 {
    id: "poster-collection",
    title: "Poster Design Collection",
    category: WorkCategory.POSTER_DESIGN,
    year: "2026",
    offsetTop: false,
    intro: "A collection of standalone poster designs — product launches, festive greetings, event invites, and awareness campaigns — each built to carry its message in a single frame, no explanation needed.",
    role: "Poster Design, Art Direction",
    tech: "Illustrator, Photoshop",
    bgClass: "bg-[#DCA138]",
    thumbnail: "https://picsum.photos/seed/poster-collection/600/750",
    content: [
      { type: "heading", text: "Bagaicha Honey" },
      {
        type: "paragraph",
        text: "A product poster built around warmth — amber tones and orchard textures that let the honey feel hand-harvested rather than shelf-stocked.",
      },
      {
        type: "image",
        width: "full",
        image: {
          src: "https://picsum.photos/seed/bagaicha-poster-hero/1200/1500",
          aspect: "4/5",
          caption: "Bagaicha Honey — product poster",
        },
      },

      { type: "heading", text: "Geely EV Car" },
      {
        type: "paragraph",
        text: "A launch poster designed to feel forward-looking — dark gradients and a clean silhouette putting the car's electric identity front and center.",
      },
      {
        type: "image",
        width: "full",
        image: {
          src: "https://picsum.photos/seed/geely-ev-poster-hero/1200/1500",
          aspect: "4/5",
          caption: "Geely EV — launch poster",
        },
      },

      { type: "heading", text: "Griffity — Mental Health Awareness" },
      {
        type: "paragraph",
        text: "A quieter piece for Griffity — soft, muted tones and open space designed to feel calming rather than alarming, built to start a conversation, not shout one.",
      },
      {
        type: "image",
        width: "full",
        image: {
          src: "https://picsum.photos/seed/griffity-mentalhealth-poster-hero/1200/1500",
          aspect: "4/5",
          caption: "Griffity Studios — mental health awareness poster",
        },
      },

      { type: "heading", text: "Griffity — Buddha Purnima" },
      {
        type: "paragraph",
        text: "A festive greeting rendered in Griffity's black-and-gold system, blending traditional motifs with the studio's own visual signature.",
      },
      {
        type: "image",
        width: "full",
        image: {
          src: "https://picsum.photos/seed/griffity-buddhapurnima-poster-hero/1200/1500",
          aspect: "4/5",
          caption: "Griffity Studios — Buddha Purnima festive poster",
        },
      },

      { type: "heading", text: "Griffity — Deepawali" },
      {
        type: "paragraph",
        text: "A Deepawali greeting built on warm light and layered gold, designed to feel festive without losing the studio's restrained visual identity.",
      },
      {
        type: "image",
        width: "full",
        image: {
          src: "https://picsum.photos/seed/griffity-deepawali-poster-hero/1200/1500",
          aspect: "4/5",
          caption: "Griffity Studios — Deepawali festive poster",
        },
      },

      { type: "heading", text: "Nepakids Diaper" },
      {
        type: "paragraph",
        text: "A friendly, trust-building product poster — soft pastels and approachable typography aimed squarely at parents scanning a shelf.",
      },
      {
        type: "image",
        width: "full",
        image: {
          src: "https://picsum.photos/seed/nepakids-diaper-poster-hero/1200/1500",
          aspect: "4/5",
          caption: "Nepakids — product poster",
        },
      },

      { type: "heading", text: "Cafe Boh — Opening Soon" },
      {
        type: "paragraph",
        text: "A teaser poster built to generate curiosity ahead of launch — minimal copy, strong typography, and just enough visual identity to make people want to know more.",
      },
      {
        type: "image",
        width: "full",
        image: {
          src: "https://picsum.photos/seed/cafeboh-openingsoon-poster-hero/1200/1500",
          aspect: "4/5",
          caption: "Cafe Boh — opening soon poster",
        },
      },

      { type: "heading", text: "Advanced College — Welcome & Farewell Invitation" },
      {
        type: "paragraph",
        text: "A formal event invitation balancing a celebratory tone with the polish expected of an academic institution's marquee event.",
      },
      {
        type: "image",
        width: "full",
        image: {
          src: "https://picsum.photos/seed/advancedcollege-invite-poster-hero/1200/1500",
          aspect: "4/5",
          caption: "Advanced College — welcome & farewell invitation poster",
        },
      },

      { type: "heading", text: "Advanced College — Sabin Rai & The Band" },
      {
        type: "paragraph",
        text: "An event poster built around the headline act — bold typography and high-energy visuals designed to read clearly across campus and social feeds alike.",
      },
      {
        type: "image",
        width: "full",
        image: {
          src: "https://picsum.photos/seed/advancedcollege-sabinrai-poster-hero/1200/1500",
          aspect: "4/5",
          caption: "Advanced College — Sabin Rai and the Band, welcome & farewell",
        },
      },

      {
        type: "gallery",
        images: [
          { src: "https://picsum.photos/seed/poster-collection-g1/400/400" },
          { src: "https://picsum.photos/seed/poster-collection-g2/400/400" },
          { src: "https://picsum.photos/seed/poster-collection-g3/400/400" },
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
