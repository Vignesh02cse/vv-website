import { useState } from "react";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ChevronRight } from "lucide-react";
import { projectCaseStudies, type CaseStudy } from "@/data/projectCaseStudies";

export default function ProjectsPage() {
  const [selected, setSelected] = useState<CaseStudy | null>(null);

  return (
    <div className="container mx-auto px-4 py-20">
      <AnimatedSection>
        <h1 className="text-3xl sm:text-4xl font-black gradient-text mb-4">Projects</h1>
        <p className="text-muted-foreground mb-12 max-w-xl">Engineering case studies — click any project to explore the full story.</p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projectCaseStudies.map((project, i) => (
          <AnimatedSection key={project.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              onClick={() => setSelected(project)}
              className="group glass rounded-2xl p-6 flex flex-col gap-4 hover:glow-border transition-all duration-500 cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-muted transition-colors" aria-label="GitHub" onClick={e => e.stopPropagation()}>
                      <Github size={16} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Live demo" onClick={e => e.stopPropagation()}>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.problem.slice(0, 120)}…</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium">{tag}</span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-xs text-accent font-medium">
                Read case study <ChevronRight size={14} />
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="glass-strong rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto glow-border"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold gradient-text mb-2">{selected.title}</h2>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[10px] rounded-full bg-accent/10 text-accent font-mono">{t}</span>
                    ))}
                  </div>
                </div>
                <button onClick={() => setSelected(null)} className="p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Close">
                  <X size={18} />
                </button>
              </div>

              {[
                { label: "Problem", content: selected.problem },
                { label: "Approach", content: selected.approach },
                { label: "Architecture", content: selected.architecture },
                { label: "Challenges", content: selected.challenges },
                { label: "Outcome", content: selected.outcome },
              ].map((section) => (
                <div key={section.label} className="mb-5">
                  <h3 className="text-sm font-bold text-primary mb-1">{section.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
