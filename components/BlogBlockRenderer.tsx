import { BlogBlock } from "../types";
import { SunflowerPixelArt, ColorGridPixelArt } from "./PixelArt";

export function BlogBlockRenderer({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-10">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={i} className="text-base md:text-lg leading-relaxed font-mono opacity-90">
                {block.text}
              </p>
            );

          case "heading":
            return block.level === 2 ? (
              <h2 key={i} className="text-3xl md:text-4xl font-serif-italic pt-4">{block.text}</h2>
            ) : (
              <h3 key={i} className="text-2xl md:text-3xl font-serif-italic pt-4">{block.text}</h3>
            );

          case "quote":
            return (
              <blockquote key={i} className="border-l-2 border-yellow-300 pl-8 py-2">
                <p className="text-2xl md:text-3xl font-serif-italic leading-snug">{block.text}</p>
                {block.author && (
                  <cite className="block mt-4 text-[10px] tracking-widest uppercase opacity-50 font-mono not-italic">
                    — {block.author}
                  </cite>
                )}
              </blockquote>
            );

          case "video_hero":
            return (
              <div key={i} className="border border-white/10 aspect-[16/9] bg-white/5 flex items-center justify-center relative overflow-hidden">
                <span className="text-[10px] font-bold tracking-widest opacity-50 uppercase font-mono">{block.label}</span>
                <div className="absolute w-10 h-10 border-2 border-yellow-300 rounded-full flex items-center justify-center opacity-80">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-yellow-300 ml-0.5" />
                </div>
              </div>
            );

          case "color_grid":
            return (
              <div key={i} className="grid grid-cols-3 gap-3">
                {block.colors.map((c, j) => (
                  <div key={j} className="aspect-square border border-white/10" style={{ backgroundColor: c }} />
                ))}
              </div>
            );

          case "two_column_pixel_svgs":
            return (
              <div key={i} className="grid grid-cols-2 gap-8">
                <div className="border border-white/10 aspect-square bg-white/5 flex items-center justify-center">
                  <SunflowerPixelArt />
                </div>
                <div className="border border-white/10 aspect-square bg-white/5 flex items-center justify-center">
                  <ColorGridPixelArt />
                </div>
              </div>
            );

          case "image":
            return (
              <img
                key={i}
                src={block.src}
                alt={block.alt ?? ""}
                className={`w-full border border-white/10 ${block.aspect === "1/1" ? "aspect-square" : block.aspect === "4/3" ? "aspect-[4/3]" : "aspect-[16/9]"} object-cover`}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}