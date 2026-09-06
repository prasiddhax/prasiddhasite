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
    thumbnail: "https://drive.google.com/thumbnail?id=1AwJ8seMS6Dl6mVe6TtahJEL-WklgJZ4z&sz=w2000",
    content: [
      { type: "heading", text: "AITC International" },
      {
        type: "paragraph",
        text: "AITC International needed a mark that could sit on a certificate, a stage backdrop, and a passport-sized business card with equal weight. The system leans on a geometric monogram and a bold orange-and-white palette to signal energy and clarity.",
      },
      {
        type: "image",
        width: "full",
        image: {
src: "https://drive.google.com/thumbnail?id=15vpcY9JzOsfxRa9zxoasDlChQBeYK1XM&sz=w2000" ,
    aspect: "16/9",
          caption: "AITC International — full brand system",
        },
      },
      {
        type: "text-image",
        imagePosition: "right",
        text: "The monogram is built from overlapping strokes representing connection across regions — simplified until it reproduces cleanly in embossing, signage, and single-color print.",
        image: { src: "https://drive.google.com/thumbnail?id=1_XQGe1l0U8X8uJx2Jv3R1VaoZFrTOLR4&sz=w2000", aspect: "4/3" },
      },
      {
        type: "quote",
        text: "The orange actually gets noticed at events now — before, nobody remembered our old logo.",
        author: "Client, AITC International",
      },

      { type: "heading", text: "Veda Studios" },
      {
        type: "paragraph",
        text: "Veda Studios didn't want a logo that competed with client work. The identity strips down to a single lowercase wordmark and a deep purple palette, letting the studio's output — not its branding — do the talking.",
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
        image: { src: "https://drive.google.com/thumbnail?id=1Vd8hUgAtY7Em7T7DkhZN2bFlVLjOkfhK&sz=w2000", aspect: "4/3" },
      },
      {
        type: "quote",
        text: "It's simple enough that nobody asks about the logo, they just ask about the work. That's the point.",
        author: "Client, Veda Studios",
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
          src: "https://drive.google.com/thumbnail?id=1ky2fK-Ho_V4o02XFy58C0ru4tbCxaN4d&sz=w2000",
          aspect: "16/9",
          caption: "Griffity Studios — full brand system",
        },
      },
      {
        type: "text-image",
        imagePosition: "right",
        text: "The mark pairs a sharp geometric monogram with a signature gold (#DCA138) against black — deliberately loud enough to survive being cropped into a favicon or blown up on a studio wall.",
        image: { src: "https://drive.google.com/thumbnail?id=1-7a-WRjcpPF079073g3meCGx0uZ2lnwZ&sz=w2000", aspect: "4/3" },
      },
      {
        type: "quote",
        text: "We've redone client logos a hundred times but never touched our own gold-and-black until now. Kind of embarrassing it took this long.",
        author: "Griffity Studios Team",
      },
      

      { type: "heading", text: "Bagaicha Honey" },
      {
        type: "paragraph",
        text: "Bagaicha Honey needed packaging and brand language that felt raw and orchard-grown rather than mass-produced. A simple wordmark and a warm amber palette carry the story from label to signage.",
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
        text: "A single hive-mark anchors the system, simplified enough to emboss onto a jar lid or stamp onto kraft paper packaging.",
        image: { src: "https://drive.google.com/thumbnail?id=10osJg_xbA6K853vDx4UNH9O8nGZHXAOS&sz=w2000", aspect: "4/3" },
      },
      {
        type: "quote",
        text: "People pick it up off the shelf just because of the label. That never used to happen with the old jars.",
        author: "Client, Bagaicha Honey",
      },

{ type: "heading", text: "Elyn Studio®" },
{
  type: "paragraph",
  text: "Elyn Studio® wanted a sharp, editorial identity that could flex across photography, styling, and social content. A high-contrast serif wordmark and a stark black-and-white palette give the brand a quiet, gallery-like feel.",
},
{
  type: "image",
  width: "full",
  image: {
    src: "https://drive.google.com/thumbnail?id=1sRPHV2m2z0BngpzlA090-b2WNFRI1akR&sz=w2000",
    aspect: "16/9",
    caption: "Elyn Studio® — full brand system",
  },
},
{
  type: "text-image",
  imagePosition: "right",
  text: "The wordmark pairs a high-contrast serif with generous tracking, built to feel at home on a portfolio cover or a printed invitation.",
  image: {
    src: "https://drive.google.com/thumbnail?id=1NWVeP_yNLtT1-GA9CPdp4ibafN00FFp7&sz=w2000",
    aspect: "4/3",
  },
},
{
  type: "quote",
  text: "Black and white sounds boring on paper but it photographs so much better than the pastel version we almost went with.",
  author: "Client, Elyn Studio®",
},

      { type: "heading", text: "Ruby Homes" },
      {
        type: "paragraph",
        text: "Ruby Homes needed a real estate identity that felt premium without tipping into generic luxury. A bold ruby-and-black palette and a refined monogram give the brand a distinct, ownable presence in a crowded category.",
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
        text: "The signboard alone gets us calls now. People assume we're a bigger agency than we are.",
        author: "Client, Ruby Homes",
      },

      { type: "heading", text: "Minimaya" },
      {
        type: "paragraph",
        text: "Minimaya's identity needed to feel playful and approachable — a soft, character-led system built around a friendly mascot and a warm multicolor palette pulled from the brand name itself.",
      },
      {
        type: "image",
        width: "full",
        image: {
          src: "https://drive.google.com/thumbnail?id=1WXDC7hHh85mMoN7urKwsEp_EdoHba5yB&sz=w2000",
          aspect: "16/9",
          caption: "Minimaya — full brand system",
        },
      },
      {
        type: "text-image",
        imagePosition: "right",
        text: "The mark is built around a hand-drawn bunny character, designed to feel warm and legible even at the small scale of a woven clothing label.",
        image: { src: "https://drive.google.com/thumbnail?id=1YcZ8sP2fXv5YG0xgsVhRKihljt2y_k1b&sz=w2000", aspect: "4/3" },
      },
      {
        type: "quote",
        text: "The bunny was actually my daughter's idea and now it's on every single tag we print.",
        author: "Client, Minimaya",
      },
{ type: "heading", text: "Opera Construction" },
      {
        type: "paragraph",
        text: "Opera Construction wanted an identity that read as established, not flashy. A structural wordmark and a bold yellow-and-charcoal palette give the brand weight on job-site signage while still holding up in a boardroom deck.",
      },
      {
        type: "image",
        width: "full",
        image: {
          src: "https://drive.google.com/thumbnail?id=1-etaupd0_RBiejsnp9dMNQv-_usv_c4-&sz=w2000",
          aspect: "16/9",
          caption: "Opera Construction — full brand system",
        },
      },
      {
        type: "text-image",
        imagePosition: "left",
        text: "The mark is built from a crossed tools icon, doubling as a subtle nod to the industry without tipping into a literal hard-hat cliché.",
        image: { src: "https://drive.google.com/thumbnail?id=11KF7uz4MEjkNB-7rtk3J3_0p6h4ECdjF&sz=w2000", aspect: "4/3" },
      },
      {
        type: "quote",
        text: "The hoarding at the site gets photographed more than the building does at this point.",
        author: "Client, Opera Construction",
      },
    ],
  },
{
    id: "poster-collection",
    title: "Poster Design Collection",
    category: WorkCategory.POSTER,
    year: "2026",
    flowerType: "placeholder", // TODO: replace with your real flowerType value, see note below
    offsetTop: false,
    intro: "A collection of standalone poster designs — product launches, festive greetings, event invites, and awareness campaigns — each built for Instagram at native post size.",
    role: "Poster Design, Art Direction",
    tech: "Illustrator, Photoshop",
    bgClass: "bg-[#DCA138]",
    content: [
      {
        type: "image-pair",
        images: [
          {
            src: "https://picsum.photos/seed/bagaicha-poster-hero/1080/1350",
            aspect: "3/4",
            caption: "Bagaicha Honey",
          },
          {
            src: "https://picsum.photos/seed/geely-ev-poster-hero/1080/1350",
            aspect: "3/4",
            caption: "Geely EV Car",
          },
        ],
      },
      {
        type: "image-pair",
        images: [
          {
            src: "https://picsum.photos/seed/griffity-mentalhealth-poster-hero/1080/1350",
            aspect: "3/4",
            caption: "Griffity — Mental Health Awareness",
          },
          {
            src: "https://picsum.photos/seed/griffity-buddhapurnima-poster-hero/1080/1350",
            aspect: "3/4",
            caption: "Griffity — Buddha Purnima",
          },
        ],
      },
      {
        type: "image-pair",
        images: [
          {
            src: "https://picsum.photos/seed/griffity-deepawali-poster-hero/1080/1350",
            aspect: "3/4",
            caption: "Griffity — Deepawali",
          },
          {
            src: "https://picsum.photos/seed/nepakids-diaper-poster-hero/1080/1350",
            aspect: "3/4",
            caption: "Nepakids Diaper",
          },
        ],
      },
      {
        type: "image-pair",
        images: [
          {
            src: "https://picsum.photos/seed/cafeboh-openingsoon-poster-hero/1080/1350",
            aspect: "3/4",
            caption: "Cafe Boh — Opening Soon",
          },
          {
            src: "https://picsum.photos/seed/advancedcollege-invite-poster-hero/1080/1350",
            aspect: "3/4",
            caption: "Advanced College — Welcome & Farewell Invitation",
          },
        ],
      },
      {
        type: "image-pair",
        images: [
          {
            src: "https://picsum.photos/seed/cafeboh-openingsoon-poster-hero/1080/1350",
            aspect: "3/4",
            caption: "Cafe Boh — Opening Soon",
          },
          {
            src: "https://picsum.photos/seed/advancedcollege-invite-poster-hero/1080/1350",
            aspect: "3/4",
            caption: "Advanced College — Welcome & Farewell Invitation",
          },
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
