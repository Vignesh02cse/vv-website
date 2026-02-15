import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Props {
  title: string;
  description: string;
  tags: string[];
  tech: string[];
  github?: string;
  demo?: string;
  gradient?: string;
}

export function ProjectCard({ title, description, tags, tech, github, demo, gradient = "glow-border" }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`group glass rounded-2xl p-6 flex flex-col gap-4 hover:${gradient} transition-all duration-500`}
    >
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-bold text-foreground group-hover:gradient-text transition-all duration-300">
          {title}
        </h3>
        <div className="flex gap-2">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-muted transition-colors" aria-label="GitHub">
              <Github size={16} />
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Live demo">
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span key={tag} className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {tech.map((t) => (
          <span key={t} className="px-2 py-0.5 text-[10px] rounded-full bg-accent/10 text-accent font-mono">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
