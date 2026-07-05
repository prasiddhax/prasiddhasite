export const SunflowerPixelArt = () => (
  <svg viewBox="0 0 24 60" className="w-3/4 h-3/4 drop-shadow-2xl" style={{ imageRendering: "pixelated", shapeRendering: "crispEdges" }}>
    <rect x="10" y="24" width="4" height="36" fill="#008000" />
    <rect x="8" y="0" width="8" height="8" fill="#FFD700" />
    <rect x="8" y="16" width="8" height="8" fill="#FFD700" />
    <rect x="0" y="8" width="8" height="8" fill="#FFD700" />
    <rect x="16" y="8" width="8" height="8" fill="#FFD700" />
    <rect x="8" y="8" width="8" height="8" fill="#5C3317" />
  </svg>
);

export const FloatingPixelIcon = () => (
  <svg viewBox="0 0 12 16" className="w-full h-full" style={{ imageRendering: "pixelated", shapeRendering: "crispEdges" }}>
    <rect x="4" y="0" width="4" height="4" fill="#FFD700" />
    <rect x="4" y="8" width="4" height="4" fill="#FFD700" />
    <rect x="0" y="4" width="4" height="4" fill="#FFD700" />
    <rect x="8" y="4" width="4" height="4" fill="#FFD700" />
    <rect x="4" y="4" width="4" height="4" fill="#8B4513" />
    <rect x="4" y="12" width="4" height="4" fill="#228B22" />
  </svg>
);

export const ColorGridPixelArt = () => (
  <div className="grid grid-cols-3 gap-2 w-full h-full p-4">
    <div className="bg-red-500"></div><div className="bg-yellow-400"></div><div className="bg-green-500"></div>
    <div className="bg-blue-400"></div><div className="bg-white"></div><div className="bg-orange-500"></div>
    <div className="bg-purple-500"></div><div className="bg-pink-500"></div><div className="bg-teal-500"></div>
  </div>
);

export const renderCardImage = (type: string) => {
  if (type === "sunflower") return <SunflowerPixelArt />;
  if (type === "grid") return <ColorGridPixelArt />;
  return <SunflowerPixelArt />;
};