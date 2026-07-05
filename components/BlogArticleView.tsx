import { useParams, Link } from "react-router-dom";
import { useMemo } from "react";
import { POSTS_DATA } from "../posts.data";
import { BlogBlockRenderer } from "./BlogBlockRenderer";

const BlogArticleView = () => {
  const { slug } = useParams();
  const post = useMemo(() => POSTS_DATA.find((p) => p.slug === slug), [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center font-mono">
        <div className="text-center">
          <h2 className="text-4xl mb-4">Article Not Found</h2>
          <Link to="/archive" className="text-yellow-300 underline">Back to Archive</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="relative z-10 pt-32 pb-40 px-6 md:px-12 max-w-4xl mx-auto">
      <Link
        to="/archive"
        className="group flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase opacity-70 hover:opacity-100 hover:text-yellow-300 transition-all mb-12"
      >
        <span className="inline-block transition-transform group-hover:-translate-x-1">←</span>
        Back to Archive
      </Link>

      <header className="mb-16">
        <div className="flex items-center gap-4 mb-6 text-[10px] font-bold tracking-widest uppercase font-mono">
          <span className="bg-white/10 px-2 py-0.5">{post.category}</span>
          <span className="opacity-50">{post.date}</span>
          <span className="opacity-50">BY {post.author}</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif-italic leading-tight">{post.title}</h1>
      </header>

      <BlogBlockRenderer blocks={post.blocks} />
    </main>
  );
};

export default BlogArticleView;