
import React from 'react';

interface PixelFlowerProps {
  className?: string;
  colorPrimary?: string;
  colorSecondary?: string;
  stemHeight?: number;
  isSpecial?: boolean;
}

const PixelFlower: React.FC<PixelFlowerProps> = ({ 
  className = "", 
  colorPrimary = "#FF3333", 
  colorSecondary = "#FFD700",
  stemHeight = 4,
  isSpecial = false
}) => {
  if (isSpecial) {
    return (
      <svg viewBox="0 0 24 60" className={`pixel-art overflow-visible ${className}`} preserveAspectRatio="xMidYMax">
        {/* Stem */}
        <rect x="10" y="24" width="4" height="36" fill="#008000" />
        {/* Leaves */}
        <rect x="6" y="44" width="4" height="4" fill="#006400" />
        <rect x="2" y="40" width="4" height="4" fill="#006400" />
        <rect x="14" y="36" width="4" height="4" fill="#006400" />
        <rect x="18" y="32" width="4" height="4" fill="#006400" />
        {/* Center */}
        <rect x="8" y="8" width="8" height="8" fill="#5C3317" />
        {/* Petals */}
        <rect x="8" y="0" width="8" height="8" fill="#FFD700" />
        <rect x="8" y="16" width="8" height="8" fill="#FFD700" />
        <rect x="0" y="8" width="8" height="8" fill="#FFD700" />
        <rect x="16" y="8" width="8" height="8" fill="#FFD700" />
        {/* Accents */}
        <rect x="4" y="4" width="4" height="4" fill="#FFD700" opacity="0.8" />
        <rect x="16" y="4" width="4" height="4" fill="#FFD700" opacity="0.8" />
        <rect x="4" y="16" width="4" height="4" fill="#FFD700" opacity="0.8" />
        <rect x="16" y="16" width="4" height="4" fill="#FFD700" opacity="0.8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 12 16" className={`pixel-art ${className}`}>
      <rect x="4" y="0" width="4" height="4" fill={colorPrimary} />
      <rect x="4" y="8" width="4" height="4" fill={colorPrimary} />
      <rect x="0" y="4" width="4" height="4" fill={colorPrimary} />
      <rect x="8" y="4" width="4" height="4" fill={colorPrimary} />
      <rect x="4" y="4" width="4" height="4" fill={colorSecondary} />
      <rect x="4" y="12" width="4" height={stemHeight} fill="#228B22" />
    </svg>
  );
};

export default PixelFlower;
