import { PixelFlower } from "./PixelFlower";
import { getFlowerStyle } from "../lib/flowerStyles";

export function PixelFlowerRenderer({ flowerType, className }: { flowerType?: string; className?: string }) {
  if (!flowerType) return null; // no flower for this project — that's fine
  const style = getFlowerStyle(flowerType);
  return (
    <PixelFlower
      colorPrimary={style.colorPrimary}
      colorSecondary={style.colorSecondary}
      stemHeight={style.stemHeight}
      className={className}
    />
  );
}