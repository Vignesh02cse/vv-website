import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <AnimatedSection>
        <h1 className="text-3xl sm:text-4xl font-black gradient-text mb-4">Get In Touch</h1>
        <p className="text-muted-foreground mb-12 max-w-xl">Have a project in mind or just want to connect? Let's talk.</p>
      </AnimatedSection>

      <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <AnimatedSection delay={0.1}>
          <div className="glass rounded-2xl p-8 glow-border space-y-6">
            <h2 className="text-xl font-bold text-foreground">Connect</h2>
            <div className="space-y-4">
              <a href="mailto:vignesh@example.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <div className="p-2 rounded-lg bg-primary/10 text-primary"><Mail size={18} /></div>
                vignesh@example.com
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <div className="p-2 rounded-lg bg-primary/10 text-primary"><Linkedin size={18} /></div>
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <div className="p-2 rounded-lg bg-primary/10 text-primary"><Github size={18} /></div>
                GitHub
              </a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
            <h2 className="text-xl font-bold text-foreground">Send a Message</h2>
            <input
              type="text"
              placeholder="Your name"
              required
              maxLength={100}
              className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <input
              type="email"
              placeholder="Your email"
              required
              maxLength={255}
              className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <textarea
              placeholder="Your message"
              rows={4}
              required
              maxLength={1000}
              className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl gradient-bg text-primary-foreground font-semibold"
            >
              {submitted ? "Sent! ✓" : <><Send size={16} /> Send Message</>}
            </motion.button>
          </form>
        </AnimatedSection>
      </div>
    </div>
  );
}
