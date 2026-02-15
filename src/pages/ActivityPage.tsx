import { AnimatedSection } from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";
import { GitCommit, Bug, Lightbulb, Wrench, BookOpen } from "lucide-react";

type ActivityType = "feature" | "bugfix" | "learning" | "tool" | "concept";

interface ActivityItem {
  type: ActivityType;
  title: string;
  description: string;
  date: string;
}

const activities: ActivityItem[] = [
  { type: "feature", title: "Built RAG pipeline with streaming responses", description: "Implemented a retrieval-augmented generation system with real-time token streaming using FastAPI + LangChain.", date: "2 days ago" },
  { type: "bugfix", title: "Fixed race condition in async task queue", description: "Resolved a deadlock issue in the background worker caused by concurrent Redis lock acquisitions.", date: "3 days ago" },
  { type: "learning", title: "Deep dive into vector indexing strategies", description: "Studied HNSW vs IVF-PQ index types and their trade-offs for large-scale similarity search.", date: "5 days ago" },
  { type: "feature", title: "API rate limiting with sliding window", description: "Implemented a sliding window rate limiter using Redis sorted sets for fair per-user throttling.", date: "1 week ago" },
  { type: "concept", title: "Event-driven architecture patterns", description: "Explored CQRS and event sourcing patterns for building scalable microservices.", date: "1 week ago" },
  { type: "tool", title: "Set up Docker multi-stage builds", description: "Optimized container image size from 1.2GB to 180MB using multi-stage builds and distroless base images.", date: "2 weeks ago" },
  { type: "bugfix", title: "Resolved memory leak in embedding cache", description: "Fixed unbounded LRU cache growth causing OOM kills in the AI inference service.", date: "2 weeks ago" },
  { type: "learning", title: "Completed system design case study", description: "Designed a URL shortener handling 100M+ redirects/day with consistent hashing and read replicas.", date: "3 weeks ago" },
  { type: "feature", title: "Built real-time notification system", description: "WebSocket-based notification service with presence tracking and message persistence.", date: "3 weeks ago" },
  { type: "concept", title: "Understanding transformer attention mechanisms", description: "Studied multi-head self-attention, positional encoding, and KV-cache optimization techniques.", date: "1 month ago" },
];

const typeConfig: Record<ActivityType, { icon: React.ReactNode; color: string; label: string }> = {
  feature: { icon: <GitCommit size={16} />, color: "text-emerald-400 bg-emerald-500/10", label: "Feature" },
  bugfix: { icon: <Bug size={16} />, color: "text-red-400 bg-red-500/10", label: "Bug Fix" },
  learning: { icon: <BookOpen size={16} />, color: "text-blue-400 bg-blue-500/10", label: "Learning" },
  tool: { icon: <Wrench size={16} />, color: "text-amber-400 bg-amber-500/10", label: "Tooling" },
  concept: { icon: <Lightbulb size={16} />, color: "text-violet-400 bg-violet-500/10", label: "Concept" },
};

// Generate contribution grid
const weeks = 20;
const days = 7;
const contributionData = Array.from({ length: weeks }, () =>
  Array.from({ length: days }, () => Math.floor(Math.random() * 5))
);

function getContribColor(level: number) {
  const colors = [
    "bg-muted/30",
    "bg-emerald-500/20",
    "bg-emerald-500/40",
    "bg-emerald-500/60",
    "bg-emerald-500/80",
  ];
  return colors[level];
}

export default function ActivityPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <AnimatedSection>
        <h1 className="text-3xl sm:text-4xl font-black gradient-text mb-4">Activity</h1>
        <p className="text-muted-foreground mb-12 max-w-xl">
          A real-time feed of what I'm building, fixing, and learning — proof of work over promises.
        </p>
      </AnimatedSection>

      {/* Contribution Grid */}
      <AnimatedSection delay={0.1}>
        <div className="glass rounded-2xl p-6 mb-12 overflow-x-auto">
          <h3 className="text-sm font-bold text-foreground mb-4">Contribution Activity</h3>
          <div className="flex gap-1 min-w-[500px]">
            {contributionData.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-1">
                {week.map((level, di) => (
                  <motion.div
                    key={di}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (wi * 7 + di) * 0.003 }}
                    className={`w-3 h-3 rounded-sm ${getContribColor(level)}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Activity Feed */}
      <div className="max-w-3xl mx-auto space-y-4">
        {activities.map((item, i) => {
          const config = typeConfig[item.type];
          return (
            <AnimatedSection key={i} delay={0.1 + i * 0.03}>
              <motion.div
                whileHover={{ x: 4 }}
                className="glass rounded-xl p-5 flex gap-4 items-start hover:glow-border transition-all duration-300"
              >
                <div className={`p-2 rounded-lg shrink-0 ${config.color}`}>
                  {config.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${config.color}`}>
                      {config.label}
                    </span>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  );
}
