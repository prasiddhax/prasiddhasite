import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PixelFlower from './PixelFlower';
import ArticleFooter from './ArticleFooter';
import articlesData from '../archive/articles.json';

type ParagraphBlock = { type: 'paragraph'; text: string };
type HeadingBlock = { type: 'heading'; level: number; text: string };
type QuoteBlock = { type: 'quote'; text: string };
type VideoHeroBlock = { type: 'video_hero'; label: string };
type TwoColumnPixelSvgsBlock = { type: 'two_column_pixel_svgs' };
type ColorGridBlock = { type: 'color_grid'; colors: string[] };

type Block = ParagraphBlock | HeadingBlock | QuoteBlock | VideoHeroBlock | TwoColumnPixelSvgsBlock | ColorGridBlock;

type ArticleData = {
  slug: string;
  title: string;
  date: string;
  category: string;
  author: string;
  blocks: Block[];
};

const ARTICLES: ArticleData[] = articlesData as ArticleData[];

const BlogArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = ARTICLES.find(a => a.slug === slug);

  if (!article) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl mb-4">Article Not Found</h2>
          <Link to="/archive" className="text-yellow-300 underline">Back to Archive</Link>
        </div>
      </main>
    );
  }

  const renderBlock = (block: Block, i: number) => {
    switch (block.type) {
      case 'paragraph':
        return <p key={i}>{block.text}</p>;
      case 'video_hero':
        return (
          <div key={i} className="my-16 relative aspect-video bg-blue-900/40 border border-white/10 rounded-sm overflow-hidden group">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-yellow-300/20 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-yellow-300 border-b-[10px] border-b-transparent ml-1"></div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-[10px] font-bold tracking-widest opacity-40 uppercase">
              {block.label}
            </div>
          </div>
        );
      case 'heading':
        return (
          <h2 key={i} className="text-2xl font-serif-italic text-yellow-300 mt-12 mb-6">{block.text}</h2>
        );
      case 'quote':
        return (
          <blockquote key={i} className="my-12 pl-8 border-l-2 border-yellow-300 italic font-serif-italic text-3xl opacity-90">{block.text}</blockquote>
        );
      case 'two_column_pixel_svgs':
        return (
          <div key={i} className="grid grid-cols-2 gap-4 my-16">
            <div className="aspect-square bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 12 16" className="w-24 h-24 pixel-art opacity-80">
                <rect x="4" y="0" width="4" height="4" fill="#FF3333"></rect>
                <rect x="4" y="4" width="4" height="4" fill="#FFD700"></rect>
                <rect x="4" y="12" width="4" height="4" fill="#228B22"></rect>
              </svg>
            </div>
            <div className="aspect-square bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 12 16" className="w-24 h-24 pixel-art opacity-80">
                <rect x="0" y="4" width="4" height="4" fill="#FFD700"></rect>
                <rect x="4" y="4" width="4" height="4" fill="#8B4513"></rect>
                <rect x="8" y="4" width="4" height="4" fill="#FFD700"></rect>
              </svg>
            </div>
          </div>
        );
      case 'color_grid':
        return (
          <div key={i} className="grid grid-cols-3 gap-2 w-full h-full p-4 my-8">
            {(block.colors || []).map((c, j) => (
              <div key={j} className="h-12" style={{ background: c, imageRendering: 'pixelated', shapeRendering: 'crispEdges' }}></div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-32 pb-40">
      <header className="mb-24 text-center md:text-left">
        <div className="flex items-center gap-4 mb-6 opacity-60 text-xs font-bold tracking-[0.2em]">
          <span>{article.date}</span>
          <span className="w-8 h-[1px] bg-white"></span>
          <span>{article.category}</span>
        </div>
        <h1 className="font-serif-italic text-6xl md:text-8xl leading-[1.1] mb-12 tracking-tight">{article.title}</h1>

        <div className="flex items-center gap-6 justify-center md:justify-start">
          <div className="w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center pixel-art">
            <svg viewBox="0 0 12 12" className="w-8 h-8">
              <rect x="4" y="2" width="4" height="4" fill="#0044CC"></rect>
              <rect x="4" y="6" width="4" height="4" fill="#0044CC" opacity="0.5"></rect>
            </svg>
          </div>
          <div className="text-left">
            <p className="text-sm font-bold tracking-wider">{article.author}</p>
            <p className="text-xs opacity-60">Creative Developer &amp; Artist</p>
          </div>
        </div>
      </header>

      <article className="article-content text-sm md:text-base leading-relaxed opacity-90">
        {article.blocks.map((b, i) => renderBlock(b, i))}
      </article>

      <ArticleFooter />
    </div>
  );
};

export default BlogArticlePage;
