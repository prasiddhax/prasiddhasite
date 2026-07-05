import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Project } from "../types";
import { PixelFlowerRenderer } from "./PixelFlowerRenderer";

interface WorkCardProps {
  project: Project;
  offsetTop?: boolean;
}

const WorkCard: React.FC<WorkCardProps> = ({ project, offsetTop = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        window.scrollTo({ top: 0 });
        navigate(`/project/${project.id}`);
      }}
      className={`p-6 flex flex-col gap-6 transition-all duration-500 border border-white/5 bg-white/5 animate-fade-in cursor-pointer ${offsetTop ? "md:mt-12" : ""} ${isHovered ? "translate-y-[-8px] bg-white/10 border-white/20" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/5] relative overflow-hidden group">
        {/* Background thumbnail */}
        <img
          src={project.thumbnail}
          alt={project.title}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${isHovered ? "scale-105" : ""}`}
        />

        {/* Dark overlay so the flower + text stay readable over any photo */}
        <div className="absolute inset-0 bg-blue-950/50 transition-colors duration-500 group-hover:bg-blue-950/40" />

        {/* Flower accent, floating on top */}
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-24 h-24 transition-transform duration-300 ${isHovered ? "scale-110 rotate-6" : ""}`}>
            <PixelFlowerRenderer flowerType={project.flowerType} className="w-full h-full drop-shadow-lg" />
          </div>
        </div> */}
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-3xl font-serif-italic">{project.title}</h3>
        <p className="text-[10px] opacity-60 tracking-[0.2em] font-bold font-mono uppercase">
          {project.category} / {project.year}
        </p>
      </div>
    </div>
  );
};

export default WorkCard;