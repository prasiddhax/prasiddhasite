
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SunflowerPixelArt = () => (
  <svg viewBox="0 0 24 60" className="w-3/4 h-3/4 drop-shadow-2xl" style={{ imageRendering: 'pixelated', shapeRendering: 'crispEdges' }}>
    <rect x="10" y="24" width="4" height="36" fill="#008000" />
    <rect x="8" y="0" width="8" height="8" fill="#FFD700" />
    <rect x="8" y="16" width="8" height="8" fill="#FFD700" />
    <rect x="0" y="8" width="8" height="8" fill="#FFD700" />
    <rect x="16" y="8" width="8" height="8" fill="#FFD700" />
    <rect x="8" y="8" width="8" height="8" fill="#5C3317" />
  </svg>
);

const FloatingPixelIcon = () => (
  <svg viewBox="0 0 12 16" className="w-full h-full" style={{ imageRendering: 'pixelated', shapeRendering: 'crispEdges' }}>
    <rect x="4" y="0" width="4" height="4" fill="#FFD700" />
    <rect x="4" y="8" width="4" height="4" fill="#FFD700" />
    <rect x="0" y="4" width="4" height="4" fill="#FFD700" />
    <rect x="8" y="4" width="4" height="4" fill="#FFD700" />
    <rect x="4" y="4" width="4" height="4" fill="#8B4513" />
    <rect x="4" y="12" width="4" height="4" fill="#228B22" />
  </svg>
);

const ColorGridPixelArt = () => (
  <div className="grid grid-cols-3 gap-2 w-full h-full p-4">
    <div className="bg-red-500" style={{ imageRendering: 'pixelated', shapeRendering: 'crispEdges' }}></div>
    <div className="bg-yellow-400" style={{ imageRendering: 'pixelated', shapeRendering: 'crispEdges' }}></div>
    <div className="bg-green-500" style={{ imageRendering: 'pixelated', shapeRendering: 'crispEdges' }}></div>
    <div className="bg-blue-400" style={{ imageRendering: 'pixelated', shapeRendering: 'crispEdges' }}></div>
    <div className="bg-white" style={{ imageRendering: 'pixelated', shapeRendering: 'crispEdges' }}></div>
    <div className="bg-orange-500" style={{ imageRendering: 'pixelated', shapeRendering: 'crispEdges' }}></div>
    <div className="bg-purple-500" style={{ imageRendering: 'pixelated', shapeRendering: 'crispEdges' }}></div>
    <div className="bg-pink-500" style={{ imageRendering: 'pixelated', shapeRendering: 'crispEdges' }}></div>
    <div className="bg-teal-500" style={{ imageRendering: 'pixelated', shapeRendering: 'crispEdges' }}></div>
  </div>
);

const Sidebar = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <aside className="w-full lg:w-64 flex-shrink-0 space-y-12">
      <div>
        <h3 className="text-xs font-bold tracking-[0.3em] uppercase opacity-50 mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-yellow-400 block"></span> CATEGORIES
        </h3>
        <ul className="space-y-4 text-xs font-bold font-mono">
          <li><Link to="#" className="flex justify-between items-center group hover:text-yellow-300 transition-colors"><span>PROCESS</span> <span className="opacity-50 group-hover:opacity-100">08</span></Link></li>
          <li><Link to="#" className="flex justify-between items-center group hover:text-yellow-300 transition-colors"><span>PIXEL ART</span> <span className="opacity-50 group-hover:opacity-100">12</span></Link></li>
          <li><Link to="#" className="flex justify-between items-center group hover:text-yellow-300 transition-colors"><span>TUTORIALS</span> <span className="opacity-50 group-hover:opacity-100">04</span></Link></li>
          <li><Link to="#" className="flex justify-between items-center group hover:text-yellow-300 transition-colors"><span>THOUGHTS</span> <span className="opacity-50 group-hover:opacity-100">15</span></Link></li>
        </ul>
      </div>

      <div>
        <h3 className="text-xs font-bold tracking-[0.3em] uppercase opacity-50 mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 block"></span> RECENT POSTS
        </h3>
        <div className="space-y-6">
          <Link to="#" className="block group">
            <div className="text-[10px] opacity-50 mb-1 font-mono">JUN 2024</div>
            <div className="text-xs font-bold group-hover:text-yellow-300 transition-colors leading-relaxed font-mono">MAKING OF: THE PIXEL SUNFLOWER COMPONENT</div>
          </Link>
          <Link to="#" className="block group">
            <div className="text-[10px] opacity-50 mb-1 font-mono">MAY 2024</div>
            <div className="text-xs font-bold group-hover:text-yellow-300 transition-colors leading-relaxed font-mono">WEBGL SHADERS IN 2D LAYOUTS</div>
          </Link>
          <Link to="#" className="block group">
            <div className="text-[10px] opacity-50 mb-1 font-mono">APR 2024</div>
            <div className="text-xs font-bold group-hover:text-yellow-300 transition-colors leading-relaxed font-mono">PARIS DESIGN WEEK HIGHLIGHTS</div>
          </Link>
        </div>
      </div>

      <div className="p-6 bg-white/5 border border-white/10 relative overflow-hidden backdrop-blur-md">
        <div className="relative z-10">
          <div className="text-[10px] font-bold tracking-widest opacity-60 mb-2 font-mono">NEWSLETTER</div>
          <div className="text-xs font-bold leading-relaxed mb-4 font-mono">GET MONTHLY UPDATES ON MY PIXEL JOURNEY</div>
          <form onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-blue-900/50 border border-white/10 p-2 text-[10px] focus:outline-none focus:border-yellow-400 placeholder:opacity-50 mb-2 font-mono"
            />
            <button type="submit" className="w-full bg-white text-blue-900 font-bold text-[10px] py-2 hover:bg-yellow-300 transition-colors uppercase tracking-widest">Subscribe</button>
          </form>
        </div>
        <div className="absolute -right-4 -bottom-4 w-12 h-12 opacity-20 animate-float">
          <FloatingPixelIcon />
        </div>
      </div>
    </aside>
  );
};

const ArticleCard = ({ category, date, title, description, image, slug }: any) => {
  return (
    <article className="grid grid-cols-1 md:grid-cols-12 gap-8 group cursor-pointer animate-fade-in border-b border-white/5 pb-16 last:border-0">
      <div className="md:col-span-4 overflow-hidden bg-white/5 aspect-square relative border border-white/10">
        <div className="absolute inset-0 flex items-center justify-center p-8 transition-transform duration-700 group-hover:scale-105">
          {image}
        </div>
      </div>
      <div className="md:col-span-8 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[10px] font-bold tracking-widest bg-white/10 px-2 py-0.5 font-mono uppercase">{category}</span>
          <span className="text-[10px] font-bold tracking-widest opacity-50 font-mono uppercase">{date}</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-serif-italic mb-6 group-hover:text-yellow-300 transition-colors leading-tight">
          {title}
        </h2>
        <p className="text-sm md:text-base leading-relaxed opacity-60 mb-8 max-w-xl font-mono">{description}</p>
        <Link to={`/archive/${slug}`} className="text-[10px] font-bold tracking-[0.3em] border-b border-yellow-300/50 w-fit pb-1 hover:text-yellow-300 hover:border-yellow-300 transition-all uppercase">Read Article —</Link>
      </div>
    </article>
  );
};

const ArchiveView = () => {
  return (
    <main className="relative z-10 pt-32 pb-40 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-20">
        <Sidebar />
        
        <div className="flex-1 space-y-24">
          <header className="mb-20">
            <h1 className="text-[10vw] md:text-[8vw] leading-none mb-4 font-serif-italic">archive</h1>
            <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] opacity-50 uppercase font-mono">
              <span>EXPLORATIONS</span>
              <div className="h-[1px] w-20 bg-white"></div>
              <span>THOUGHTS & PROCESS</span>
            </div>
          </header>

          <ArticleCard
            category="PROCESS"
            date="JULY 14, 2024"
            title="The art of the 8-bit aesthetic in modern UI"
            description="Exploring how to balance high-fidelity typography with nostalgic pixel elements to create unique digital experiences that feel both heritage and futuristic."
            image={<SunflowerPixelArt />}
            slug="crafting-digital-gardens"
          />

          <ArticleCard
            category="PIXEL ART"
            date="JUNE 28, 2024"
            title="Color theory in limited palette constraints"
            description="Why working with only 16 colors can actually lead to more expressive and cohesive brand identities than an infinite spectrum."
            image={<ColorGridPixelArt />}
            slug="color-theory-limited-palette"
          />

          <div className="flex items-center gap-8 pt-12">
            <button className="text-[10px] font-bold opacity-50 cursor-not-allowed tracking-widest uppercase">Prev</button>
            <div className="flex gap-6">
              <button className="text-[10px] font-bold text-yellow-300 border-b border-yellow-300 pb-1 font-mono">01</button>
              <button className="text-[10px] font-bold opacity-50 hover:opacity-100 transition-opacity font-mono">02</button>
              <button className="text-[10px] font-bold opacity-50 hover:opacity-100 transition-opacity font-mono">03</button>
            </div>
            <button className="text-[10px] font-bold hover:text-yellow-300 transition-colors tracking-widest uppercase">Next</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ArchiveView;
