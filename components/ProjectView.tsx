import { useParams, useNavigate, Link } from "react-router-dom";
import { useMemo } from "react";
import { WORKS_DATA } from "../projects.data";
import { BlockRenderer } from "./ContentBlocks";
import { PixelFlower } from "./PixelFlower";
import { PixelFlowerRenderer } from "./PixelFlowerRenderer";


const ProjectView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = useMemo(() => WORKS_DATA.find((w) => w.id === id), [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center font-mono">
        <div className="text-center">
          <h2 className="text-4xl mb-4">Project Not Found</h2>
          <Link to="/" className="text-yellow-300 underline">Return Home</Link>
        </div>
      </div>
    );
  }

  const currentIndex = WORKS_DATA.findIndex((w) => w.id === id);
  const nextProject = WORKS_DATA[(currentIndex + 1) % WORKS_DATA.length];
  const prevProject = WORKS_DATA[(currentIndex - 1 + WORKS_DATA.length) % WORKS_DATA.length];

  const goHomeToWorks = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("works")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <main className="relative z-10 px-6 md:px-12 py-32 max-w-7xl mx-auto">
      <button
        onClick={goHomeToWorks}
        className="group flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase opacity-70 hover:opacity-100 hover:text-yellow-300 transition-all mb-12"
      >
        <span className="inline-block transition-transform group-hover:-translate-x-1">←</span>
        Back to Works
      </button>

      <header className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 animate-float">
{project.flowerType && (
  <PixelFlowerRenderer flowerType={project.flowerType} className="w-10 h-10" />
)}          </div>
          <span className="text-xs font-bold tracking-[0.3em] text-yellow-300 uppercase">
            {project.category} • {project.year}
          </span>
        </div>

        <h1 className="text-7xl md:text-[10vw] leading-[0.9] tracking-tighter mb-12 font-serif-italic">
          {project.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start border-t border-white/10 pt-12">
          <div className="md:col-span-5">
            <p className="text-lg md:text-xl leading-relaxed opacity-90 font-mono">
              {project.intro}
            </p>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 gap-8 text-[10px] font-bold uppercase tracking-[0.3em]">
            <div>
              <div className="text-yellow-300 opacity-50 mb-3">Role</div>
              <div>{project.role}</div>
            </div>
            <div>
              <div className="text-yellow-300 opacity-50 mb-3">Tech</div>
              <div>{project.tech}</div>
            </div>
          </div>
        </div>
      </header>

      {/* This is your CMS body — order/type of blocks comes entirely from projects.data.ts */}
      <section className="mb-32">
        <BlockRenderer blocks={project.content} />
      </section>

      <section className="border-t border-white/10 pt-16 mb-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <button
            onClick={() => { window.scrollTo({ top: 0 }); navigate(`/project/${prevProject.id}`); }}
            className="group text-left flex-1"
          >
            <span className="text-[10px] font-bold tracking-widest opacity-50 block mb-4 uppercase">Previous Project</span>
            <h3 className="text-4xl md:text-5xl font-serif-italic group-hover:text-yellow-300 transition-colors">
              {prevProject.title}
            </h3>
          </button>
          <div className="hidden md:block w-px h-24 bg-white/10"></div>
          <button
            onClick={() => { window.scrollTo({ top: 0 }); navigate(`/project/${nextProject.id}`); }}
            className="group text-right flex-1"
          >
            <span className="text-[10px] font-bold tracking-widest opacity-50 block mb-4 uppercase">Next Project</span>
            <h3 className="text-4xl md:text-5xl font-serif-italic group-hover:text-yellow-300 transition-colors">
              {nextProject.title}
            </h3>
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProjectView;