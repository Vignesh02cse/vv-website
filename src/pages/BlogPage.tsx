import { AnimatedSection } from "@/components/common/AnimatedSection";
import { blogPosts } from "@/data/blog";
import { Calendar, Clock } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedPost = blogPosts.find((p) => p.id === selected);

  return (
    <div className="container mx-auto px-4 py-20">
      <AnimatedSection>
        <h1 className="text-3xl sm:text-4xl font-black gradient-text mb-4">Blog</h1>
        <p className="text-muted-foreground mb-12 max-w-xl">Technical articles on backend, AI, and system design.</p>
      </AnimatedSection>

      <AnimatePresence mode="wait">
        {selected && selectedPost ? (
          <motion.div
            key="detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <button
              onClick={() => setSelected(null)}
              className="mb-6 text-sm text-primary hover:underline"
            >
              ← Back to all posts
            </button>
            <article className="glass rounded-2xl p-6 md:p-10 max-w-3xl">
              <h2 className="text-2xl font-bold text-foreground mb-4">{selectedPost.title}</h2>
              <div className="flex gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1"><Calendar size={14} /> {selectedPost.date}</span>
                <span className="flex items-center gap-1"><Clock size={14} /> {selectedPost.readTime}</span>
              </div>
              <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed whitespace-pre-line font-mono text-sm">
                {selectedPost.content}
              </div>
            </article>
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.id} delay={i * 0.1}>
                <button
                  onClick={() => setSelected(post.id)}
                  className="w-full text-left glass rounded-2xl p-6 hover:glow-border transition-all duration-300 group"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[10px] rounded-full bg-primary/10 text-primary font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:gradient-text transition-all mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{post.excerpt}</p>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
