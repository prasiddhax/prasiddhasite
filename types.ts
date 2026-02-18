
export interface MousePosition {
  x: number;
  y: number;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
}

export enum WorkCategory {
  ALL = 'ALL',
  DIGITAL = 'DIGITAL ILLUSTRATION',
  GAME = '3D/GAME ASSETS',
  MOTION = 'MOTION'
}
