import { AnimatedSection } from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";
import { Award, BookOpen } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const completed = [
  { title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", date: "2024" },
  { title: "Python for Data Science", issuer: "IBM / Coursera", date: "2024" },
  { title: "REST API Design", issuer: "Udemy", date: "2023" },
];

const inProgress = [
  { title: "AWS Solutions Architect", category: "Cloud Certification", progress: 65 },
  { title: "Deep Learning Specialization", category: "AI Certification", progress: 40 },
  { title: "System Design Masterclass", category: "Backend Engineering Track", progress: 55 },
];

export default function CertificationsPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <AnimatedSection>
        <h1 className="text-3xl sm:text-4xl font-black gradient-text mb-4">Certifications</h1>
        <p className="text-muted-foreground mb-12 max-w-xl">Continuous learning through structured certification programs.</p>
      </AnimatedSection>

      {/* Completed */}
      <AnimatedSection delay={0.1}>
        <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Award size={20} className="text-primary" /> Completed
        </h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {completed.map((cert, i) => (
          <AnimatedSection key={cert.title} delay={0.1 + i * 0.05}>
            <motion.div whileHover={{ y: -4 }} className="glass rounded-2xl p-6 hover:glow-border transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                <Award size={20} className="text-emerald-500" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground mt-2">{cert.date}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      {/* In Progress */}
      <AnimatedSection delay={0.2}>
        <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
          <BookOpen size={20} className="text-accent" /> In Progress
        </h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-3 gap-6">
        {inProgress.map((cert, i) => (
          <AnimatedSection key={cert.title} delay={0.2 + i * 0.05}>
            <motion.div whileHover={{ y: -4 }} className="glass rounded-2xl p-6 hover:glow-border-accent transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <BookOpen size={20} className="text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{cert.title}</h3>
              <p className="text-xs text-muted-foreground mb-4">{cert.category}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Progress</span>
                  <span>{cert.progress}%</span>
                </div>
                <Progress value={cert.progress} className="h-2" />
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
