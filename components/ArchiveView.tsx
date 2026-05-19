import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

/**
 * ARTICLES DATA — add new posts here.
 * `slug` becomes the URL: /archive/<slug>
 */
const POSTS_DATA = [
  {
    slug: 'crafting-digital-gardens',
    category: 'PROCESS',
    date: 'JULY 14, 2024',
    title: 'The art of the 8-bit aesthetic in modern UI',
    description:
      'Exploring how to balance high-fidelity typography with nostalgic pixel elements to create unique digital experiences that feel both heritage and futuristic.',
    imageType: 'sunflower' as const,
  },
  {
    slug: 'color-theory-limited-palette',
    category: 'PIXEL ART',
    date: 'JUNE 28, 2024',
    title: 'Color theory in limited palette constraints',
    description:
      'Why working with only 16 colors can actually lead to more expressive and cohesive brand identities than an infinite spectrum.',
    imageType: 'grid' as const,
  },
  // Add more posts here as you write them. Example:
  // {
  //   slug: 'webgl-shaders-2d-layouts',
  //   category: 'TUTORIALS',
  //   date: 'MAY 12, 2024',
  //   title: 'WebGL shaders in 2D layouts',
  //   description: 'A walkthrough of...',
  //   imageType: 'sunflower' as const,
  // },
];

const POSTS_PER_PAGE = 3;

/**
 * PIXEL ART COMPONENTS
 */
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
    <div className="bg-red-500"></div>
    <div className="bg-yellow-400"></div>
    <div className="bg-green-500"></div>
    <div className="bg-blue-400"></div>
    <div className="bg-white"></div>
    <div className="bg-orange-500"></div>
    <div className="bg-purple-500"></div>
    <div className="bg-pink-500"></div>
    <div className="bg-teal-500"></div>
  </div>
);

const renderImage = (type: string) => {
  if (type === 'sunflower') return <SunflowerPixelArt />;
  if (type === 'grid') return <ColorGridPixelArt />;
  return <SunflowerPixelArt />;
};

/**
 * SIDEBAR — categories now filter, recent posts link to actual articles
 */
interface SidebarProps {
  categories: { name: string; count: number }[];
  activeCategory: string | null;
  onCategorySelect: (cat: string | null) => void;
  recentPosts: typeof POSTS_DATA;
}

const Sidebar: React.FC<SidebarProps> = ({ categories, activeCategory, onCategorySelect, recentPosts }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire this to a real service (Mailchimp, Buttondown, ConvertKit, etc.)
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <aside className="w-full lg:w-64 flex-shrink-0 space-y-12">
      {/* CATEGORIES */}
      <div>
        <h3 className="text-xs font-bold tracking-[0.3em] uppercase opacity-50 mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-yellow-400 block"></span> CATEGORIES
        </h3>
        <ul className="space-y-4 text-xs font-bold font-mono">
          <li>
            <button
              onClick={() => onCategorySelect(null)}
              className={`flex justify-between items-center w-full group transition-colors ${
                activeCategory === null ? 'text-yellow-300' : 'hover:text-yellow-300'
              }`}
            >
              <span>ALL</span>
              <span className="opacity-50 group-hover:opacity-100">{POSTS_DATA.length.toString().padStart(2, '0')}</span>
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat.name}>
              <button
                onClick={() => onCategorySelect(cat.name)}
                className={`flex justify-between items-center w-full group transition-colors ${
                  activeCategory === cat.name ? 'text-yellow-300' : 'hover:text-yellow-300'
                }`}
              >
                <span>{cat.name}</span>
                <span className="opacity-50 group-hover:opacity-100">{cat.count.toString().padStart(2, '0')}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* RECENT POSTS */}
      <div>
        <h3 className="text-xs font-bold tracking-[0.3em] uppercase opacity-50 mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 block"></span> RECENT POSTS
        </h3>
        <div className="space-y-6">
          {recentPosts.map((post) => (
            <Link key={post.slug} to={`/archive/${post.slug}`} className="block group">
              <div className="text-[10px] opacity-50 mb-1 font-mono">{post.date}</div>
              <div className="text-xs font-bold group-hover:text-yellow-300 transition-colors leading-relaxed font-mono uppercase">
                {post.title}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="p-6 bg-white/5 border border-white/10 relative overflow-hidden backdrop-blur-md">
        <div className="relative z-10">
          <div className="text-[10px] font-bold tracking-widest opacity-60 mb-2 font-mono">NEWSLETTER</div>
          <div className="text-xs font-bold leading-relaxed mb-4 font-mono">GET MONTHLY UPDATES ON MY PIXEL JOURNEY</div>
          {subscribed ? (
            <div className="text-[10px] text-yellow-300 font-bold uppercase tracking-widest animate-fade-in">
              ✓ Thanks for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-blue-900/50 border border-white/10 p-2 text-[10px] focus:outline-none focus:border-yellow-400 placeholder:opacity-50 mb-2 font-mono"
              />
              <button
                type="submit"
                className="w-full bg-white text-blue-900 font-bold text-[10px] py-2 hover:bg-yellow-300 transition-colors uppercase tracking-widest"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
        <div className="absolute -right-4 -bottom-4 w-12 h-12 opacity-20 animate-float">
          <FloatingPixelIcon />
        </div>
      </div>
    </aside>
  );
};

/**
 * ARTICLE CARD — now the entire card is clickable
 */
interface ArticleCardProps {
  post: typeof POSTS_DATA[number];
}

const ArticleCard: React.FC<ArticleCardProps> = ({ post }) => {
  return (
    <Link
      to={`/archive/${post.slug}`}
      onClick={() => window.scrollTo({ top: 0 })}
      className="grid grid-cols-1 md:grid-cols-12 gap-8 group cursor-pointer animate-fade-in border-b border-white/5 pb-16 last:border-b-0 hover:bg-white/[0.02] transition-colors -mx-4 px-4 py-4"
    >
      <div className="md:col-span-4 overflow-hidden bg-white/5 aspect-square relative border border-white/10">
        <div className="absolute inset-0 flex items-center justify-center p-8 transition-transform duration-700 group-hover:scale-105">
          {renderImage(post.imageType)}
        </div>
      </div>
      <div className="md:col-span-8 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[10px] font-bold tracking-widest bg-white/10 px-2 py-0.5 font-mono uppercase">
            {post.category}
          </span>
          <span className="text-[10px] font-bold tracking-widest opacity-50 font-mono uppercase">
            {post.date}
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-serif-italic mb-6 group-hover:text-yellow-300 transition-colors leading-tight">
          {post.title}
        </h2>
        <p className="text-sm md:text-base leading-relaxed opacity-60 mb-8 max-w-xl font-mono">
          {post.description}
        </p>
        <span className="text-[10px] font-bold tracking-[0.3em] border-b border-yellow-300/50 w-fit pb-1 group-hover:text-yellow-300 group-hover:border-yellow-300 transition-all uppercase">
          Read Article →
        </span>
      </div>
    </Link>
  );
};

/**
 * MAIN ARCHIVE VIEW
 */
const ArchiveView = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Compute category list with counts from the data
  const categories = useMemo(() => {
    const counts: Record<string, number> = {};
    POSTS_DATA.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, []);

  // Filter posts by category
  const filteredPosts = useMemo(() => {
    if (!activeCategory) return POSTS_DATA;
    return POSTS_DATA.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Reset page when category changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Pagination math
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  // Recent posts = newest 3 (regardless of filter)
  const recentPosts = POSTS_DATA.slice(0, 3);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="relative z-10 pt-32 pb-40 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-20">
        <Sidebar
          categories={categories}
          activeCategory={activeCategory}
          onCategorySelect={setActiveCategory}
          recentPosts={recentPosts}
        />

        <div className="flex-1 space-y-24">
          <header className="mb-20">
            <h1 className="text-[10vw] md:text-[8vw] leading-none mb-4 font-serif-italic">archive</h1>
            <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] opacity-50 uppercase font-mono">
              <span>EXPLORATIONS</span>
              <div className="h-[1px] w-20 bg-white"></div>
              <span>THOUGHTS & PROCESS</span>
            </div>
            {activeCategory && (
              <div className="mt-6 flex items-center gap-3 animate-fade-in">
                <span className="text-[10px] font-bold text-yellow-300 tracking-[0.2em] uppercase">
                  Filtering: {activeCategory}
                </span>
                <button
                  onClick={() => setActiveCategory(null)}
                  className="text-[8px] font-bold underline opacity-60 hover:opacity-100 uppercase tracking-widest"
                >
                  Clear ✕
                </button>
              </div>
            )}
          </header>

          {/* ARTICLE LIST */}
          {paginatedPosts.length === 0 ? (
            <div className="text-center text-xs tracking-[0.3em] opacity-50 uppercase py-20">
              No posts found in this category.
            </div>
          ) : (
            <div className="space-y-0">
              {paginatedPosts.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          )}

          {/* PAGINATION — only shown when there's more than one page */}
          {totalPages > 1 && (
            <div className="flex items-center gap-8 pt-12">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`text-[10px] font-bold tracking-widest uppercase transition-colors ${
                  currentPage === 1
                    ? 'opacity-30 cursor-not-allowed'
                    : 'opacity-100 hover:text-yellow-300'
                }`}
              >
                ← Prev
              </button>

              <div className="flex gap-6">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`text-[10px] font-bold font-mono transition-colors ${
                      currentPage === page
                        ? 'text-yellow-300 border-b border-yellow-300 pb-1'
                        : 'opacity-50 hover:opacity-100'
                    }`}
                  >
                    {page.toString().padStart(2, '0')}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`text-[10px] font-bold tracking-widest uppercase transition-colors ${
                  currentPage === totalPages
                    ? 'opacity-30 cursor-not-allowed'
                    : 'opacity-100 hover:text-yellow-300'
                }`}
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ArchiveView;
