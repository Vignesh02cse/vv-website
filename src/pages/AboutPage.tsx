import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Code, Server, Brain, Zap } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  { icon: <Server size={24} />, title: "Backend Systems", desc: "Building reliable APIs, microservices, and data pipelines" },
  { icon: <Brain size={24} />, title: "AI Platforms", desc: "LLMs, RAG systems, and intelligent automation" },
  { icon: <Code size={24} />, title: "Developer Tools", desc: "Testing frameworks, CI/CD, and developer experience" },
  { icon: <Zap size={24} />, title: "Performance", desc: "Optimization, system design, and scalable architectures" },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <AnimatedSection>
        <h1 className="text-3xl sm:text-4xl font-black gradient-text mb-8">About Me</h1>
      </AnimatedSection>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <AnimatedSection delay={0.1}>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm a software engineer focused on building reliable backend systems, developer tools, and AI-powered platforms. My work spans designing and shipping APIs, databases, automation pipelines, and modern frontend experiences.
            </p>
            <p>
              I specialize in Python, JavaScript, and Java — with deep experience in frameworks like FastAPI and React. I've built RAG knowledge assistants, e-signature platforms, visual troubleshooting systems, and end-to-end automation frameworks.
            </p>
            <p>
              I'm passionate about performance optimization, clean architecture, and solving real-world problems with practical engineering. Whether it's designing a distributed system or fine-tuning an LLM pipeline, I care deeply about craft and impact.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                whileHover={{ scale: 1.03 }}
                className="glass rounded-xl p-5 hover:glow-border transition-all duration-300"
              >
                <div className="text-primary mb-3">{h.icon}</div>
                <h3 className="font-bold text-foreground mb-1">{h.title}</h3>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
