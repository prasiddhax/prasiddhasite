import React from 'react';

const ArticleFooter: React.FC = () => {
  return (
    <footer className="mt-32 pt-12 border-t border-white/10 flex justify-between items-center">
      <a href="#" className="group text-left">
        <p className="text-[10px] font-bold opacity-40 mb-2 uppercase tracking-widest">Previous Post</p>
        <p className="text-xl font-serif-italic group-hover:text-yellow-300 transition-colors">The Architecture of Color</p>
      </a>
      <div className="hidden md:flex flex-col items-center">
        <div className="w-1 h-12 bg-yellow-300/30 mb-4"></div>
        <span className="text-[10px] font-bold tracking-[0.3em] opacity-40">END</span>
      </div>
      <a href="#" className="group text-right">
        <p className="text-[10px] font-bold opacity-40 mb-2 uppercase tracking-widest">Next Post</p>
        <p className="text-xl font-serif-italic group-hover:text-yellow-300 transition-colors">Minimalist WebGL</p>
      </a>
    </footer>
  );
};

export default ArticleFooter;
