import { AnimatedSection } from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";
import { Code, Server, Layout, Cloud, Brain } from "lucide-react";

const timeline = [
  {
    phase: "Learning Programming",
    icon: <Code size={20} />,
    description: "Built a strong foundation in programming fundamentals, data structures, algorithms, and object-oriented design.",
    skills: ["Python", "Java", "JavaScript", "Data Structures", "Algorithms", "OOP"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    phase: "Backend Development",
    icon: <Server size={20} />,
    description: "Focused on building robust APIs, authentication systems, database design, and server-side architecture.",
    skills: ["FastAPI", "REST APIs", "Authentication", "PostgreSQL", "MongoDB", "Redis"],
    color: "from-violet-500 to-purple-400",
  },
  {
    phase: "Full Stack Development",
    icon: <Layout size={20} />,
    description: "Expanded into frontend engineering, building responsive UIs and integrating them with backend services.",
    skills: ["React", "Tailwind CSS", "TypeScript", "Node.js", "WebSockets", "GraphQL"],
    color: "from-pink-500 to-rose-400",
  },
  {
    phase: "Cloud & DevOps",
    icon: <Cloud size={20} />,
    description: "Adopted cloud-native practices, containerization, CI/CD pipelines, and infrastructure automation.",
    skills: ["AWS", "Docker", "GitHub Actions", "CI/CD", "Terraform", "Monitoring"],
    color: "from-amber-500 to-orange-400",
  },
  {
    phase: "AI Systems Development",
    icon: <Brain size={20} />,
    description: "Designing and deploying AI-powered applications using LLMs, RAG architectures, and vector databases.",
    skills: ["LLMs", "RAG", "LangChain", "Embeddings", "Prompt Engineering", "Vector DBs"],
    color: "from-emerald-500 to-teal-400",
  },
];

export default function WorkPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <AnimatedSection>
        <h1 className="text-3xl sm:text-4xl font-black gradient-text mb-4">Professional Journey</h1>
        <p className="text-muted-foreground mb-16 max-w-xl">
          A skill-driven timeline of my engineering evolution — from fundamentals to AI systems.
        </p>
      </AnimatedSection>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        {timeline.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <AnimatedSection key={item.phase} delay={i * 0.1}>
              <div className={`relative flex items-start gap-6 mb-12 md:mb-16 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}>
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    {item.icon}
                  </motion.div>
                </div>

                {/* Content card */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                  isLeft ? "md:pr-4" : "md:pl-4"
                }`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass rounded-2xl p-6 hover:glow-border transition-all duration-300"
                  >
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.phase}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span key={skill} className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  );
}
