import { PixelFlower } from "./PixelFlower";
import { getFlowerStyle } from "../lib/flowerStyles";

export function PixelFlowerRenderer({ flowerType, className }: { flowerType: string; className?: string }) {
  const style = getFlowerStyle(flowerType);
  return (
    <PixelFlower
      colorPrimary={style.colorPrimary}
      colorSecondary={style.colorSecondary}
      stemHeight={style.stemHeight}
      className={`${className ?? ""} ${style.opacity ? `opacity-${Math.round(style.opacity * 100)}` : ""}`}
    />
  );
}