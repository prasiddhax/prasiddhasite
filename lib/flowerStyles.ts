export interface FlowerStyle {
  colorPrimary: string;
  colorSecondary: string;
  stemHeight?: number;
  opacity?: number;
}

export const FLOWER_STYLES: Record<string, FlowerStyle> = {
  red:            { colorPrimary: "#FF3333", colorSecondary: "#FFD700" },
  yellow:         { colorPrimary: "#FFD700", colorSecondary: "#8B4513" },
  "red-tall":     { colorPrimary: "#FF3333", colorSecondary: "#FFD700", stemHeight: 12 },
  "yellow-faded": { colorPrimary: "#FFD700", colorSecondary: "#8B4513", opacity: 0.6 },
  "yellow-tall":  { colorPrimary: "#FFD700", colorSecondary: "#8B4513", stemHeight: 12 },
};

export function getFlowerStyle(flowerType?: string): FlowerStyle {
  if (!flowerType) return { colorPrimary: "#FFD700", colorSecondary: "#8B4513" };
  return FLOWER_STYLES[flowerType] ?? { colorPrimary: "#FFD700", colorSecondary: "#8B4513" };
}