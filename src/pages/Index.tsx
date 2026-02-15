import { motion } from "framer-motion";
import { ArrowRight, Terminal, LayoutDashboard, Mail, Linkedin, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { useEffect, useState } from "react";

const floatingIcons = [
  { icon: "⚛️", x: "10%", y: "20%", delay: 0 },
  { icon: "🐍", x: "85%", y: "15%", delay: 0.5 },
  { icon: "🚀", x: "75%", y: "70%", delay: 1 },
  { icon: "🤖", x: "15%", y: "75%", delay: 1.5 },
  { icon: "☁️", x: "50%", y: "10%", delay: 0.8 },
  { icon: "⚡", x: "90%", y: "45%", delay: 1.2 },
];

const stats = [
  { label: "Projects Built", value: 12 },
  { label: "APIs Created", value: 25 },
  { label: "Problems Solved", value: 150 },
  { label: "Technologies Used", value: 30 },
];

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [target]);
  return <span>{count}+</span>;
}

const Index = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />

      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl md:text-3xl select-none pointer-events-none opacity-20"
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, delay: item.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-6">
              <Terminal size={14} className="text-accent" />
              <span className="font-mono">~/vignesh</span>
              <span className="text-primary font-mono">$</span>
              <span className="font-mono overflow-hidden whitespace-nowrap animate-typing border-r-2 border-primary animate-blink">
                hello world
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-4">
              <span className="gradient-text">Vignesh V</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="text-lg sm:text-xl font-medium text-muted-foreground mb-2">
              Software Engineer • AI Engineer • Backend Developer
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 justify-center md:justify-start">
              <span className="flex items-center gap-1"><MapPin size={14} /> India</span>
              <span className="flex items-center gap-1"><Sparkles size={14} className="text-emerald-400" /> Open to opportunities</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4">
              I build scalable software systems and intelligent AI applications.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.35}>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8">
              Specialized in backend engineering, APIs, system design, and AI-powered applications.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-12">
              <Link to="/work" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl gradient-bg text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                Explore Work <ArrowRight size={18} />
              </Link>
              <Link to="/dashboard" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass hover:glow-border font-semibold transition-all duration-300">
                <LayoutDashboard size={18} /> Open Dashboard
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass hover:glow-border-accent font-semibold transition-all duration-300">
                <Mail size={18} /> Contact
              </Link>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={0.5}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-4 text-center">
                  <div className="text-2xl font-black gradient-text">
                    <Counter target={stat.value} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* LinkedIn Card */}
          <AnimatedSection delay={0.6}>
            <a
              href="https://linkedin.com/in/vignesh-v"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 glass rounded-2xl p-4 pr-6 hover:glow-border transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[hsl(221,70%,50%)]/10 flex items-center justify-center">
                <Linkedin size={24} className="text-[hsl(221,70%,50%)]" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-foreground group-hover:gradient-text transition-all">Vignesh V</div>
                <div className="text-xs text-muted-foreground">Software Engineer | Connect on LinkedIn</div>
              </div>
              <ArrowRight size={16} className="text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </a>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Index;
