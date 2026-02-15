export interface Project {
  title: string;
  description: string;
  tags: string[];
  tech: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "AI Document QA System",
    description: "Intelligent document question-answering system using LLMs and vector embeddings for semantic search across large document corpuses.",
    tags: ["AI", "NLP", "Search"],
    tech: ["Python", "FastAPI", "LangChain", "Pinecone", "React"],
    github: "#",
    demo: "#",
  },
  {
    title: "E-Sign SaaS Platform",
    description: "Full-stack electronic signature platform with document workflows, audit trails, and compliance-grade security.",
    tags: ["SaaS", "Full-Stack", "Security"],
    tech: ["React", "Node.js", "PostgreSQL", "AWS S3", "Docker"],
    github: "#",
    demo: "#",
  },
  {
    title: "RAG Knowledge Assistant",
    description: "Retrieval-Augmented Generation system for enterprise knowledge management with real-time document ingestion.",
    tags: ["AI", "Enterprise", "RAG"],
    tech: ["Python", "OpenAI", "ChromaDB", "FastAPI", "Redis"],
    github: "#",
  },
  {
    title: "Visual Troubleshooting System",
    description: "AI-powered visual defect detection and troubleshooting system for manufacturing quality control.",
    tags: ["Computer Vision", "AI", "IoT"],
    tech: ["Python", "TensorFlow", "OpenCV", "Flask", "Docker"],
    github: "#",
    demo: "#",
  },
  {
    title: "Automation Testing Framework",
    description: "Scalable end-to-end testing framework with parallel execution, smart retries, and comprehensive reporting.",
    tags: ["DevOps", "Testing", "Automation"],
    tech: ["Python", "Selenium", "Pytest", "GitHub Actions", "Docker"],
    github: "#",
  },
];
