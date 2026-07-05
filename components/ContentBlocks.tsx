import { ContentBlock, ImageBlock } from "./types";
import { PixelFlower } from "./PixelFlower"; // adjust path to your existing component

const aspectClass = (aspect?: ImageBlock["aspect"]) => {
  switch (aspect) {
    case "1/1": return "aspect-square";
    case "4/3": return "aspect-[4/3]";
    case "3/4": return "aspect-[3/4]";
    case "21/9": return "aspect-[21/9]";
    default: return "aspect-[16/9]";
  }
};

function Figure({ image, className = "" }: { image: ImageBlock; className?: string }) {
  return (
    <figure className={`border border-white/10 overflow-hidden ${aspectClass(image.aspect)} ${className}`}>
      <img src={image.src} alt={image.alt ?? ""} className="w-full h-full object-cover" />
      {image.caption && (
        <figcaption className="text-[10px] tracking-widest uppercase opacity-50 mt-3 font-mono">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

export function BlockRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-16 md:space-y-24">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={i} className="text-3xl md:text-5xl font-serif-italic">
                {block.text}
              </h2>
            );

          case "paragraph":
            return (
              <p key={i} className="text-lg md:text-xl leading-relaxed opacity-90 font-mono max-w-3xl">
                {block.text}
              </p>
            );

          case "image":
            return (
              <Figure
                key={i}
                image={block.image}
                className={block.width === "half" ? "md:w-1/2" : "w-full"}
              />
            );

          case "image-pair":
            return (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <Figure image={block.images[0]} />
                <Figure image={block.images[1]} />
              </div>
            );

          case "text-image":
            return (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  block.imagePosition === "left" ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <Figure image={block.image} />
                <p className="text-lg md:text-xl leading-relaxed opacity-90 font-mono">
                  {block.text}
                </p>
              </div>
            );

          case "quote":
            return (
              <blockquote key={i} className="border-l-2 border-yellow-300 pl-8 py-2">
                <p className="text-2xl md:text-3xl font-serif-italic leading-snug">
                  {block.text}
                </p>
                {block.author && (
                  <cite className="block mt-4 text-[10px] tracking-widest uppercase opacity-50 font-mono not-italic">
                    — {block.author}
                  </cite>
                )}
              </blockquote>
            );

          case "gallery":
            return (
              <div key={i} className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {block.images.map((img, j) => (
                  <Figure key={j} image={img} />
                ))}
              </div>
            );

          case "flower-showcase":
            return (
              <div
                key={i}
                className={`border border-white/10 aspect-[16/9] w-full flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-[1.01] ${block.bgClass}`}
              >
                <div className="w-1/2 h-1/2 animate-float">
                  <PixelFlower isSpecial={block.isSpecial} className="w-full h-full" />
                </div>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}