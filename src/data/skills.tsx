import { Code, Cloud, Database, Brain, Layout, Terminal } from "lucide-react";

export interface SkillGroup {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    icon: <Code size={20} />,
    skills: [
      { name: "Python", level: 92 },
      { name: "JavaScript", level: 88 },
      { name: "Java", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: <Terminal size={20} />,
    skills: [
      { name: "FastAPI", level: 90 },
      { name: "REST APIs", level: 94 },
      { name: "Auth & Security", level: 85 },
      { name: "Microservices", level: 82 },
    ],
  },
  {
    title: "Frontend",
    icon: <Layout size={20} />,
    skills: [
      { name: "React", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Responsive UI", level: 90 },
    ],
  },
  {
    title: "AI & Data",
    icon: <Brain size={20} />,
    skills: [
      { name: "LLMs", level: 86 },
      { name: "RAG", level: 88 },
      { name: "Embeddings", level: 84 },
      { name: "NLP", level: 82 },
      { name: "Prompt Engineering", level: 90 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud size={20} />,
    skills: [
      { name: "AWS", level: 82 },
      { name: "Docker", level: 86 },
      { name: "CI/CD", level: 84 },
      { name: "GitHub Actions", level: 88 },
    ],
  },
  {
    title: "Databases",
    icon: <Database size={20} />,
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "SQL", level: 86 },
      { name: "Vector DBs", level: 80 },
    ],
  },
];
