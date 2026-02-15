import { motion } from "framer-motion";

interface Props {
  name: string;
  icon: React.ReactNode;
  level?: number;
}

export function SkillCard({ name, icon, level = 85 }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      className="group glass rounded-xl p-4 flex flex-col items-center gap-3 hover:glow-border transition-all duration-300 cursor-default"
    >
      <div className="text-2xl text-primary group-hover:text-accent transition-colors duration-300">
        {icon}
      </div>
      <span className="text-sm font-medium text-foreground">{name}</span>
      <div className="w-full h-1 rounded-full bg-muted overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-full gradient-bg rounded-full"
        />
      </div>
    </motion.div>
  );
}
