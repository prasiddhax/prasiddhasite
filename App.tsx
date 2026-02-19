import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { HashRouter as Router, Routes, Route, Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import PixelFlower from './components/PixelFlower';
import GeminiAssistant from './components/GeminiAssistant';
import ArchiveView from './components/ArchiveView';
import { MousePosition, WorkCategory } from './types';

/**
 * DATA
 */
const WORKS_DATA = [
  {
    id: "neon-meadows",
    title: "Neon Meadows",
    category: WorkCategory.DIGITAL,
    year: "2026",
    flowerType: "red",
    offsetTop: false,
    description: "A pixel-based exploration of biological growth patterns within a rigid digital grid. This project examines the tension between organic forms and low-fidelity constraints.",
    role: "Creative Direction, Pixel Illustration",
    tech: "Photoshop, Aseprite",
    bgClass: "bg-[#0033AA]"
  },
  {
    id: "floating-garden",
    title: "Floating Garden",
    category: WorkCategory.GAME,
    year: "2023",
    flowerType: "yellow",
    offsetTop: true,
    description: "An immersive 3D environment featuring low-poly vegetation and floating islands. Designed for a peaceful, zen-like gaming experience.",
    role: "Environment Design, 3D Modeling",
    tech: "Blender, Unity",
    bgClass: "bg-[#0055EE]/50"
  },
  {
    id: "pixel-flora",
    title: "Pixel Flora",
    category: WorkCategory.GAME,
    year: "2023",
    flowerType: "red-tall",
    offsetTop: false,
    description: "A collection of 2D game assets featuring over 50 unique plant species, each with custom growth animations.",
    role: "Game Asset Design",
    tech: "Aseprite",
    bgClass: "bg-[#002288]/50"
  },
  {
    id: "azure-dream",
    title: "Azure Dream",
    category: WorkCategory.MOTION,
    year: "2022",
    flowerType: "yellow-faded",
    offsetTop: false,
    description: "A dreamy motion sequence exploring the fluidity of digital water. Every frame is hand-corrected for pixel perfection.",
    role: "Motion Design",
    tech: "After Effects",
    bgClass: "bg-[#0044CC]/70"
  },
  {
    id: "cyber-garden",
    title: "Cyber Garden",
    category: WorkCategory.DIGITAL,
    year: "2022",
    flowerType: "red",
    offsetTop: true,
    description: "An interactive web experience where users can plant and grow digital flowers using real-time data.",
    role: "Frontend Development",
    tech: "React, Three.js",
    bgClass: "bg-blue-900/40"
  },
  {
    id: "static-bloom",
    title: "Static Bloom",
    category: WorkCategory.DIGITAL,
    year: "2021",
    flowerType: "yellow-tall",
    offsetTop: false,
    description: "A series of high-contrast pixel art pieces celebrating the beauty of static shapes and shadows.",
    role: "Digital Artist",
    tech: "Aseprite",
    bgClass: "bg-blue-800/20"
  }
];

const TIMELINE_DATA = [
  {
  year: '2023 — PRESENT',
  side: 'left' as const,
  title: 'GRIFFITY STUDIOS',
  link: 'https://griffitystudios.com',
  description: 'Executive Director. Leading overall strategy, client relationships, and creative direction.'
},
{
  year: '2021 — 2023',
  side: 'right' as const,
  title: 'AITC INTERNATIONAL',
  link: 'https://aitc.ai/',
  description: 'Business Executive. Focused on brand development, sales partnerships, and scaling operational growth.'
},
  {
    year: '2024 — 2025',
    side: 'left' as const,
    title: 'HULT PRIZE @ ACEM 2025',
    description: 'Head of Operations. Secured event sponsorships and managed end-to-end operations for the entrepreneurship program, ensuring seamless execution and partner ROI.'
  }
];

/**
 * SHARED COMPONENTS
 */

const StarIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-lg" style={{ imageRendering: 'pixelated', shapeRendering: 'crispEdges' }}>
    <rect x="10" y="4" width="4" height="4" fill="#FFD700"></rect>
    <rect x="10" y="12" width="4" height="4" fill="#FFD700"></rect>
    <rect x="6" y="8" width="4" height="4" fill="#FFD700"></rect>
    <rect x="14" y="8" width="4" height="4" fill="#FFD700"></rect>
    <rect x="10" y="8" width="4" height="4" fill="#8B4513"></rect>
  </svg>
);

interface HeaderProps {
  activeSection: string;
  activeCategory: WorkCategory;
  onCategorySelect: (cat: WorkCategory) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, activeCategory, onCategorySelect }) => {
  const [worksDropdownOpen, setWorksDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToSection = (id: string) => {
    if (!isHome) {
      navigate('/', { replace: true });
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleCategoryClick = (cat: WorkCategory) => {
    onCategorySelect(cat);
    scrollToSection('works');
    setWorksDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-6 py-6 md:px-12 flex justify-between items-center bg-[#0044CC]/60 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="hidden md:block">
        <button 
          onClick={() => scrollToSection('home')}
          className="text-[10px] uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity"
        >
          PRASIDDHA SHARMA
        </button>
      </div>

      <div className="flex-1 flex justify-center items-center gap-6 md:gap-12 text-xs md:text-sm font-bold tracking-widest">
          <button 
          onClick={() => scrollToSection('about')}
          className={`relative group py-1 transition-colors ${activeSection === 'about' && isHome ? 'text-yellow-300' : 'hover:text-yellow-300 uppercase'}`}
        >
          ABOUT
          <span className={`absolute bottom-0 left-0 h-0.5 bg-yellow-300 transition-all duration-300 ${activeSection === 'about' && isHome ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
        </button>
        <div 
          className="group relative py-1"
          onMouseEnter={() => setWorksDropdownOpen(true)}
          onMouseLeave={() => setWorksDropdownOpen(false)}
        >
          
          <button 
            onClick={() => scrollToSection('works')}
            className={`flex items-center gap-1 transition-colors ${activeSection === 'works' && isHome ? 'text-yellow-300' : 'hover:text-yellow-300'}`}
          >
            <span className="relative z-10 uppercase">WORKS</span>
            <span className="text-[8px] transform group-hover:rotate-180 transition-transform">▼</span>
            {activeSection === 'works' && isHome && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300"></span>}
          </button>
          <div 
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#003399] border border-white/10 rounded shadow-xl transition-all duration-300 min-w-[200px] overflow-hidden"
            style={{
              opacity: worksDropdownOpen ? 1 : 0,
              visibility: worksDropdownOpen ? 'visible' : 'hidden'
            }}
          >
            {Object.values(WorkCategory).map((cat) => (
              <button 
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`block w-full text-left px-5 py-3 hover:bg-yellow-300 hover:text-blue-900 transition-colors text-[10px] font-bold ${activeCategory === cat ? 'bg-yellow-300 text-blue-900' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
       

      
        <button 
          onClick={() => scrollToSection('contact')}
          className={`relative group py-1 transition-colors ${activeSection === 'contact' && isHome ? 'text-yellow-300' : 'hover:text-yellow-300 uppercase'}`}
        >
          CONTACT
          <span className={`absolute bottom-0 left-0 h-0.5 bg-yellow-300 transition-all duration-300 ${activeSection === 'contact' && isHome ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
        </button>
         <Link 
          to="/archive"
          className={`relative group py-1 transition-colors ${location.pathname === '/archive' ? 'text-yellow-300' : 'hover:text-yellow-300 uppercase'}`}
        >
          ARCHIVE
          <span className={`absolute bottom-0 left-0 h-0.5 bg-yellow-300 transition-all duration-300 ${location.pathname === '/archive' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
        </Link>
      </div>

      <div className="hidden md:flex gap-4 opacity-70 text-[10px] font-bold">
<a 
  href="https://www.instagram.com/prasiddha.__/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="hover:text-yellow-300 transition-colors"
>
  IG
</a>

<a 
  href="https://www.linkedin.com/in/prasiddhasharma/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="hover:text-yellow-300 transition-colors"
>
  LI
</a>

<a 
  href="mailto:prasiddha.business@gmail.com" 
  target="_blank" 
  rel="noopener noreferrer"
  className="hover:text-yellow-300 transition-colors"
>
  EM
</a>

<a 
  href="https://wa.me/9779861292675" 
  target="_blank" 
  rel="noopener noreferrer"
  className="hover:text-yellow-300 transition-colors"
>
  WA
</a>

      </div>
    </nav>
  );
};

const Footer = () => {
  return (
  <footer className="w-full p-12 md:p-24 flex justify-center items-center z-30 text-[10px] font-bold tracking-widest opacity-60 mt-20 border-t border-white/5">
  <div className="flex flex-col items-center gap-2 text-center">
    
    {/* Top Row */}
    <span className="uppercase">
      PRASIDDHA SHARMA — 2026
    </span>

    {/* Bottom Row */}
    <span className="text-[8px] uppercase flex items-center gap-3">
      All rights reserved •
      <a 
        href="https://prasiddha.design/privacypolicy" 
        target="_blank" 
        rel="noopener noreferrer"
        className="underline underline-offset-4 decoration-white"
      >
        PRIVACY POLICY
      </a>
    </span>

  </div>
</footer>
  );
};

/**
 * PERSISTENT FLOATING TEXT ELEMENTS
 */

const PersistentFooterText = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Kathmandu' };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now).toUpperCase());
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-10 left-0 w-full px-6 md:px-12 pointer-events-none z-[60] flex justify-between items-end text-[10px] font-bold tracking-[0.2em] uppercase">
      {/* LEFT: STATUS & TIME */}
      <div className="pointer-events-auto flex flex-col gap-1.5 opacity-60 hover:opacity-100 transition-opacity cursor-default">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]"></div>
          <span>Available for freelance</span>
        </div>
        <div className="pl-5 text-[8px] opacity-70">
          KATHMANDU NP — {currentTime}
        </div>
      </div>

      {/* RIGHT: BACK TO TOP */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`pointer-events-auto opacity-60 hover:opacity-100 transition-all duration-500 hover:text-yellow-300 ${scrolled ? 'translate-y-0' : 'translate-y-10 opacity-0'}`}
      >
        Back to Top ↑
      </button>
    </div>
  );
};

/**
 * UTILITY COMPONENTS
 */

// Fix: Define TimelineItemProps and use React.FC to handle 'key' prop error
interface TimelineItemProps {
  year: string;
  side: 'left' | 'right';
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, side, title, description }) => {
  const isLeft = side === 'left';
  return (
    <div className={`relative md:flex items-center w-full ${!isLeft ? 'flex-row-reverse' : ''}`}>
      <div className={`md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
        <span className="text-[10px] font-bold text-yellow-300 tracking-[0.2em]">{year}</span>
        <h4 className="text-xl font-bold mt-2 tracking-tight">{title}</h4>
        <p className="text-xs opacity-60 mt-2 leading-relaxed font-mono">{description}</p>
      </div>
      <div className="absolute left-[-24px] md:left-1/2 w-3 h-3 bg-yellow-300 border-2 border-blue-600 rounded-none -translate-x-1/2 z-10"></div>
      <div className={`md:w-1/2 ${isLeft ? 'md:pl-12' : 'md:pr-12'}`}></div>
    </div>
  );
};

/**
 * PAGE COMPONENTS
 */

// Fix: Define WorkCardProps and use React.FC to handle 'key' prop error
interface WorkCardProps {
  project: any;
  offsetTop?: boolean;
}

const WorkCard: React.FC<WorkCardProps> = ({ project, offsetTop = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const renderFlower = () => {
    const ft = project.flowerType;
    if (ft === 'red') return <PixelFlower colorPrimary="#FF3333" colorSecondary="#FFD700" className="w-full h-full drop-shadow-lg" />;
    if (ft === 'yellow') return <PixelFlower colorPrimary="#FFD700" colorSecondary="#8B4513" className="w-full h-full drop-shadow-lg" />;
    if (ft === 'red-tall') return <PixelFlower colorPrimary="#FF3333" colorSecondary="#FFD700" stemHeight={12} className="w-full h-full drop-shadow-lg" />;
    if (ft === 'yellow-faded') return <PixelFlower colorPrimary="#FFD700" colorSecondary="#8B4513" className="w-full h-full opacity-60" />;
    if (ft === 'yellow-tall') return <PixelFlower colorPrimary="#FFD700" colorSecondary="#8B4513" stemHeight={12} className="w-full h-full drop-shadow-lg" />;
    return null;
  };

  return (
    <div 
      onClick={() => {
        window.scrollTo({ top: 0 });
        navigate(`/project/${project.id}`);
      }}
      className={`p-6 flex flex-col gap-6 transition-all duration-500 border border-white/5 bg-white/5 animate-fade-in cursor-pointer ${offsetTop ? 'md:mt-12' : ''} ${isHovered ? 'translate-y-[-8px] bg-white/10 border-white/20' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/5] bg-blue-800/30 flex items-center justify-center relative overflow-hidden group">
        <div className={`w-24 h-24 transition-transform duration-300 ${isHovered ? 'scale-110 rotate-6' : ''}`}>
          {renderFlower()}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl font-serif-italic">{project.title}</h3>
        <p className="text-[10px] opacity-60 tracking-[0.2em] font-bold font-mono uppercase">{project.category} / {project.year}</p>
      </div>
    </div>
  );
};

const ProjectView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = useMemo(() => WORKS_DATA.find(w => w.id === id), [id]);

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

  const currentIndex = WORKS_DATA.findIndex(w => w.id === id);
  const nextProject = WORKS_DATA[(currentIndex + 1) % WORKS_DATA.length];
  const prevProject = WORKS_DATA[(currentIndex - 1 + WORKS_DATA.length) % WORKS_DATA.length];

  return (
    <main className="relative z-10 px-6 md:px-12 py-32 max-w-7xl mx-auto">
      <header className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 animate-float">
             <PixelFlower colorPrimary={project.flowerType.includes('red') ? '#FF3333' : '#FFD700'} />
          </div>
          <span className="text-xs font-bold tracking-[0.3em] text-yellow-300 uppercase">
            {project.category} • {project.year}
          </span>
        </div>
        
        <h1 className="text-7xl md:text-[10vw] leading-[0.9] tracking-tighter mb-12 font-serif-italic">
          {project.title.split(' ').map((word, i) => (
            <React.Fragment key={i}>
              {word}<br className="md:hidden" /> {i === 0 && <span className="hidden md:inline">&nbsp;</span>}
            </React.Fragment>
          ))}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start border-t border-white/10 pt-12">
          <div className="md:col-span-5">
            <p className="text-lg md:text-xl leading-relaxed opacity-90 font-mono">
              {project.description}
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

      <section className="space-y-12 md:space-y-24 mb-32">
        <div className={`border border-white/10 aspect-[16/9] w-full flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-[1.01] ${project.bgClass}`}>
          <div className="w-1/2 h-1/2 animate-float">
            <PixelFlower isSpecial={project.flowerType.includes('tall')} className="w-full h-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="border border-white/10 aspect-square bg-white/5 flex items-center justify-center transition-transform duration-300 hover:scale-[1.01]">
            <div className="w-1/3 h-1/3 opacity-80 rotate-12">
               <PixelFlower colorPrimary="#FFD700" />
            </div>
          </div>
          <div className="border border-white/10 aspect-square bg-white/5 flex items-center justify-center transition-transform duration-300 hover:scale-[1.01]">
            <div className="w-1/3 h-1/3 opacity-80 -rotate-12">
               <PixelFlower colorPrimary="#FF3333" />
            </div>
          </div>
        </div>
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

const ContactForm = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ fullName: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const inputUnderlineStyle = (fieldName: string) => `
    bg-transparent border-t-0 border-x-0 border-b-2 py-8 w-full text-xl md:text-2xl placeholder:opacity-10 transition-all font-mono focus:outline-none
    ${focusedInput === fieldName ? 'border-yellow-300' : 'border-white/20'}
  `;

  if (submitted) {
    return (
      <div className="py-20 text-center animate-fade-in">
        <div className="w-16 h-16 mx-auto mb-6">
          <PixelFlower colorPrimary="#FFD700" />
        </div>
        <h3 className="font-serif-italic text-4xl mb-4 text-yellow-300">Message Received!</h3>
        <p className="text-sm font-mono opacity-60">I'll get back to you as soon as I leave the garden.</p>
      </div>
    );
  }

  return (
    <div className="bg-white/[0.07] border border-white/20 p-10 md:p-16 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] relative rounded-sm">
      <div className="absolute -top-5 -right-5 w-14 h-14">
        <StarIcon />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Your Name</label>
            <input
              type="text"
              required
              name="fullName"
              placeholder="Jean Dupont"
              value={formData.fullName}
              onFocus={() => setFocusedInput('fullName')}
              onBlur={() => setFocusedInput(null)}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className={inputUnderlineStyle('fullName')}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Your Email</label>
            <input
              type="email"
              required
              name="email"
              placeholder="hello@world.com"
              value={formData.email}
              onFocus={() => setFocusedInput('email')}
              onBlur={() => setFocusedInput(null)}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputUnderlineStyle('email')}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Your Message</label>
          <textarea
            required
            name="message"
            rows={4}
            placeholder="Tell me about your project..."
            value={formData.message}
            onFocus={() => setFocusedInput('message')}
            onBlur={() => setFocusedInput(null)}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={inputUnderlineStyle('message') + " resize-none"}
          />
        </div>
        <div className="flex justify-between items-end gap-6">
          <div className="text-[10px] opacity-50 font-bold uppercase tracking-widest max-w-[200px] leading-relaxed">
            * I USUALLY RESPOND WITHIN 24-48 WORKING HOURS.
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`group relative px-12 py-5 font-bold tracking-[0.3em] uppercase transition-all duration-300 overflow-hidden text-sm flex items-center justify-center gap-4 ${
              isSubmitting ? 'bg-white/20 text-white cursor-not-allowed' : 'bg-yellow-300 text-blue-900 hover:text-blue-900'
            }`}
          >
            <span className="relative z-10">{isSubmitting ? 'Beaming...' : 'Send Message'}</span>
            {!isSubmitting && <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>}
            {!isSubmitting && <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>}
          </button>
        </div>
      </form>
    </div>
  );
};

const HomeView = ({ activeCategory, onCategoryReset }: { activeCategory: WorkCategory, onCategoryReset: () => void }) => {
  const filteredWorks = activeCategory === WorkCategory.ALL 
    ? WORKS_DATA 
    : WORKS_DATA.filter(work => work.category === activeCategory);

  const [currentTime, setCurrentTime] = useState('00:00 AM');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Kathmandu' };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now).toUpperCase());
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-10">
      {/* HERO */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center relative">
        <div className="relative group cursor-default">
          <h1 className="font-serif-italic text-[15vw] md:text-[16vw] leading-none text-white tracking-tighter flex items-end select-none drop-shadow-2xl">
            <span className="mr-5">pras</span>
            <div className="relative flex flex-col justify-end items-center mx-[0.5vw] w-[4vw] h-[15vw]">
               <PixelFlower isSpecial className="w-full h-full" />
            </div>
            <span>ddha</span>
          </h1>
          <div className="absolute -top-10 left-4 md:left-12 text-[10px] md:text-xs font-bold tracking-[0.3em] opacity-0 animate-fade-in [animation-delay:0.8s]">
            CREATIVE DEVELOPER
          </div>
          <div className="absolute -bottom-6 right-4 md:right-12 text-[10px] md:text-xs font-bold tracking-[0.3em] opacity-0 animate-fade-in [animation-delay:1.2s]">
            BASED IN KATHMANDU
          </div>
        </div>
        <div className="absolute bottom-12 animate-bounce opacity-50 text-[10px] tracking-widest flex flex-col items-center gap-2">
          <span className="block w-px h-12 bg-white/20"></span>
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="pt-40 pb-40 px-6 md:px-24 max-w-7xl mx-auto flex flex-col gap-32 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-white/5 border border-white/10 p-4 relative overflow-hidden group shadow-2xl">
              <img 
                src="https://avatars.githubusercontent.com/u/125749747?v=4auto=format&fit=crop&q=80&w=1000" 
                alt="Prasiddha Profile" 
                className="w-full h-full object-cover grayscale brightness-110 contrast-125 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-200/20 mix-blend-overlay"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 animate-float opacity-80">
                 <PixelFlower colorPrimary="#FFD700" colorSecondary="#8B4513" stemHeight={12} />
              </div>
            </div>
            <div className="mt-6 flex gap-4 text-[8px] tracking-[0.2em] font-bold opacity-50 uppercase">
              <span>27.7172° N, 85.3240° E</span>
              <span>— KATHMANDU NP</span>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-8">
            <h2 className="font-serif-italic text-6xl md:text-9xl leading-none">About me.</h2>
            <div className="space-y-6 text-sm md:text-lg leading-relaxed opacity-90 max-w-2xl font-mono">
              <p>I'm <span className="text-yellow-300 font-bold underline underline-offset-4 decoration-1">prasiddha</span>, a creative designer and Adobe&reg; Certified Professional blending digital craftsmanship with playful interactions.</p>
              <p>Currently focused on building immersive experiences that feel alive, I believe technology should have a soul and the courage to be imperfect..</p>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-12">
              <div>
                <h3 className="text-[10px] font-bold tracking-[0.3em] text-yellow-300 mb-4 uppercase">Core Tech</h3>
                <ul className="space-y-2 text-[10px] opacity-70"><li>ILLUSTRATOR</li><li>FIGMA</li><li>PHOTOSHOP</li></ul>
              </div>
              <div>
                <h3 className="text-[10px] font-bold tracking-[0.3em] text-yellow-300 mb-4 uppercase">Design</h3>
                <ul className="space-y-2 text-[10px] opacity-70"><li>BRAND IDENTITY DESIGN</li><li>UI / UX DESIGN</li><li>PRODUCT DESIGN</li></ul>
              </div>
              <div>
                <h3 className="text-[10px] font-bold tracking-[0.3em] text-yellow-300 mb-4 uppercase">Tools</h3>
                <ul className="space-y-2 text-[10px] opacity-70"><li>ADOBE</li><li>NOTION</li><li>VS CODE</li></ul>
              </div>
            </div>
          </div>
        </div>

        {/* JOURNEY & EXPERIENCE */}
        <div className="max-w-4xl mx-auto w-full mt-20">
          <h3 className="font-serif-italic text-4xl md:text-5xl mb-20 text-center">Journey & Experience</h3>
          <div className="relative pl-8 md:pl-0">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 timeline-line -translate-x-1/2 opacity-20 hidden md:block"></div>
            <div className="space-y-20 flex flex-col items-center">
              {TIMELINE_DATA.map((item, index) => (
                <TimelineItem
                  key={index}
                  year={item.year}
                  side={item.side}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section id="works" className="pt-40 pb-20 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-white/5">
        <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-[10vw] md:text-[8vw] leading-none mb-4 font-serif-italic">Selected works</h2>
            <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] opacity-50 uppercase">
              <span>WORKS</span>
              <div className="h-[1px] w-20 bg-white"></div>
              <span>2021—2026 SELECTION</span>
            </div>
          </div>
          {activeCategory !== WorkCategory.ALL && (
            <div className="flex flex-col items-start md:items-end gap-2 animate-fade-in">
              <span className="text-[10px] font-bold text-yellow-300 tracking-[0.2em] uppercase">Filtering: {activeCategory}</span>
              <button onClick={onCategoryReset} className="text-[8px] font-bold underline opacity-60 hover:opacity-100 uppercase tracking-widest">Clear Filter ✕</button>
            </div>
          )}
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredWorks.map((work, idx) => (
            <WorkCard key={work.id} project={work} offsetTop={work.offsetTop} />
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <div className="w-full overflow-hidden border-y border-white/10 py-6 my-20 relative">
        <div className="flex whitespace-nowrap gap-12 text-[10px] font-bold tracking-[0.5em] opacity-50 uppercase animate-marquee">
          <span>Available for freelance</span><span>✦</span><span>Collaborate with me</span><span>✦</span><span>Available for freelance</span><span>✦</span>
          <span>Available for freelance</span><span>✦</span><span>Collaborate with me</span><span>✦</span><span>Available for freelance</span><span>✦</span>
        </div>
      </div>

      {/* CONTACT */}
      <section id="contact" className="pt-40 pb-40 px-6 md:px-24 max-w-[1440px] mx-auto border-t border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
        <div className="lg:col-span-4 flex flex-col justify-center">
          <h2 className="text-[8vw] lg:text-[6vw] leading-none mb-8 font-serif-italic">
            Say hello<span className="text-yellow-300">.</span>
          </h2>
          
          <div className="space-y-8 max-w-md">
            <p className="text-sm md:text-lg opacity-80 leading-relaxed font-mono">
              I’m currently looking for new opportunities and fresh collaborations. If you have a project in mind or just want to grab a coffee and chat, my inbox is always open. Looking forward to meeting some new faces!
            </p>

            <div className="flex flex-col gap-4 border-t border-white/10 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]"></div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Status: Available for work</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest opacity-50 font-bold">Local Time</span>
                <span className="text-xl font-bold font-mono">KATHMANDU {currentTime}</span>
              </div>
            </div>

            <div className="flex gap-8 pt-4">
  <a
    href="https://www.instagram.com/prasiddha.__/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-xs font-bold border-b border-white/20 hover:border-yellow-300 hover:text-yellow-300 transition-all pb-1 uppercase tracking-widest"
  >
    Instagram
  </a>

  <a
    href="https://www.linkedin.com/in/prasiddhasharma/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-xs font-bold border-b border-white/20 hover:border-yellow-300 hover:text-yellow-300 transition-all pb-1 uppercase tracking-widest"
  >
    LinkedIn
  </a>

  <a
    href="mailto:prasiddha.business@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-xs font-bold border-b border-white/20 hover:border-yellow-300 hover:text-yellow-300 transition-all pb-1 uppercase tracking-widest"
  >
    Email
  </a>

  <a
    href="https://wa.me/9779861292675"
    target="_blank"
    rel="noopener noreferrer"
    className="text-xs font-bold border-b border-white/20 hover:border-yellow-300 hover:text-yellow-300 transition-all pb-1 uppercase tracking-widest"
  >
    WhatsApp
  </a>
</div>

          </div>
        </div>

        <div className="lg:col-span-8">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

/**
 * MAIN APP CONTAINER
 */

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState<string>('home');
  const [activeWorkCategory, setActiveWorkCategory] = useState<WorkCategory>(WorkCategory.ALL);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const x = (window.innerWidth / 2 - e.pageX) / 60;
    const y = (window.innerHeight / 2 - e.pageY) / 60;
    setMousePos({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Scroll Spy Logic
  useEffect(() => {
    const options = { root: null, rootMargin: '-30% 0px -30% 0px', threshold: 0 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, options);

    const sections = ['home', 'about', 'works', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const backgroundDecorations = [
    { top: '15%', left: '10%', size: 'w-8 h-8', speed: 1.0, color: '#FF3333' },
    { top: '8%', left: '25%', size: 'w-6 h-6', speed: 0.6, color: '#FFD700', secondary: '#8B4513' },
    { top: '20%', right: '15%', size: 'w-10 h-10', speed: 1.4, color: '#FF3333', stemHeight: 8 },
    { bottom: '20%', left: '8%', size: 'w-7 h-7', speed: 0.8, color: '#FFD700', secondary: '#8B4513' },
    { bottom: '25%', right: '20%', size: 'w-9 h-9', speed: 1.2, color: '#FF3333', stemHeight: 8 },
  ];

  return (
    <Router>
      <div className="min-h-screen w-full relative flex flex-col selection:bg-yellow-400 selection:text-blue-900 custom-scrollbar scroll-smooth">
        {/* Persistent Overlays */}
        <div className="fixed inset-0 z-0 bg-grid pointer-events-none" />
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          {backgroundDecorations.map((item, idx) => (
            <div 
              key={idx}
              className={`absolute ${item.size} animate-float opacity-20`}
              style={{
                top: item.top,
                left: item.left,
                right: item.right,
                bottom: item.bottom,
                transform: `translate(${mousePos.x * item.speed}px, ${mousePos.y * item.speed}px)`,
                transition: 'transform 0.1s ease-out',
                animationDelay: `${idx * 0.5}s`
              }}
            >
              <PixelFlower colorPrimary={item.color} colorSecondary={item.secondary} stemHeight={item.stemHeight} />
            </div>
          ))}
        </div>

        <Header 
          activeSection={activeSection} 
          activeCategory={activeWorkCategory} 
          onCategorySelect={setActiveWorkCategory}
        />
        
        <Routes>
          <Route path="/" element={<HomeView activeCategory={activeWorkCategory} onCategoryReset={() => setActiveWorkCategory(WorkCategory.ALL)} />} />
          <Route path="/project/:id" element={<ProjectView />} />
          <Route path="/archive" element={<ArchiveView />} />
        </Routes>

        {/* Minimalist Persistent UI elements */}
        <PersistentFooterText />
        <GeminiAssistant />
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
