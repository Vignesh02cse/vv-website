export interface CaseStudy {
  title: string;
  tags: string[];
  tech: string[];
  github?: string;
  demo?: string;
  problem: string;
  approach: string;
  architecture: string;
  challenges: string;
  outcome: string;
}

export const projectCaseStudies: CaseStudy[] = [
  {
    title: "AI Document QA System",
    tags: ["AI", "NLP", "Search"],
    tech: ["Python", "FastAPI", "LangChain", "Pinecone", "React"],
    github: "#",
    demo: "#",
    problem: "Enterprise teams struggled to find answers within thousands of internal documents, leading to hours of manual searching and inconsistent responses.",
    approach: "Built a semantic search pipeline using embedding models to convert documents into vector representations, enabling natural-language queries across the entire corpus.",
    architecture: "Documents ingested via async workers → chunked and embedded using OpenAI → stored in Pinecone vector DB → FastAPI serves queries with LLM-powered answer synthesis → React frontend with streaming responses.",
    challenges: "Handling large document ingestion without blocking the API, managing chunk overlap for context preservation, and optimizing retrieval relevance with hybrid search (keyword + semantic).",
    outcome: "Reduced average query resolution time from 25 minutes to under 10 seconds. Deployed for 500+ internal users with 99.5% uptime.",
  },
  {
    title: "E-Sign SaaS Platform",
    tags: ["SaaS", "Full-Stack", "Security"],
    tech: ["React", "Node.js", "PostgreSQL", "AWS S3", "Docker"],
    github: "#",
    demo: "#",
    problem: "Organizations needed a secure, compliant digital signature solution with audit trails, multi-party signing workflows, and document versioning.",
    approach: "Designed a workflow engine supporting sequential and parallel signing flows with real-time status tracking and tamper-evident audit logs.",
    architecture: "React SPA → Node.js API with role-based auth → PostgreSQL for workflow state → AWS S3 for encrypted document storage → WebSocket for real-time updates → Docker deployment.",
    challenges: "Implementing cryptographic signature verification, handling concurrent document edits, and ensuring compliance with e-signature regulations across jurisdictions.",
    outcome: "Successfully processed 10,000+ signatures in the first quarter. Zero security incidents with full audit trail compliance.",
  },
  {
    title: "RAG Knowledge Assistant",
    tags: ["AI", "Enterprise", "RAG"],
    tech: ["Python", "OpenAI", "ChromaDB", "FastAPI", "Redis"],
    github: "#",
    problem: "Knowledge workers spent excessive time searching across fragmented internal wikis, Slack threads, and documentation portals.",
    approach: "Built a Retrieval-Augmented Generation system that unifies multiple knowledge sources into a single conversational interface with source attribution.",
    architecture: "Multi-source connectors → document processing pipeline → ChromaDB vector store → FastAPI with Redis caching → conversational chain with memory → source citation engine.",
    challenges: "Handling heterogeneous data formats, maintaining freshness with incremental re-indexing, and preventing hallucination through grounded generation with source verification.",
    outcome: "Unified 5 knowledge sources into one interface. Average query accuracy of 94% with source citations. Reduced onboarding time for new hires by 40%.",
  },
  {
    title: "Visual Troubleshooting Assistant",
    tags: ["Computer Vision", "AI", "IoT"],
    tech: ["Python", "TensorFlow", "OpenCV", "Flask", "Docker"],
    github: "#",
    demo: "#",
    problem: "Manufacturing quality control relied on manual visual inspection, leading to inconsistent defect detection rates and high false-negative rates.",
    approach: "Trained a custom CNN model on labeled defect images and deployed it as a real-time inference service integrated with camera feeds on the production line.",
    architecture: "Camera feed → OpenCV preprocessing → TensorFlow Serving for inference → Flask API for results aggregation → Dashboard for monitoring → Docker containerized deployment.",
    challenges: "Working with limited labeled training data (solved with augmentation), achieving real-time inference latency under 200ms, and handling varying lighting conditions on the factory floor.",
    outcome: "Achieved 96.8% defect detection accuracy. Reduced manual inspection time by 70% and false-negative rate from 12% to 1.8%.",
  },
  {
    title: "Automation Testing Framework",
    tags: ["DevOps", "Testing", "Automation"],
    tech: ["Python", "Selenium", "Pytest", "GitHub Actions", "Docker"],
    github: "#",
    problem: "QA team manually tested 200+ test scenarios per release, causing 3-day release cycles and frequent regressions slipping into production.",
    approach: "Built a modular, data-driven test framework with parallel execution, automatic retry logic, and integrated reporting with CI/CD pipelines.",
    architecture: "Pytest framework with page object model → Selenium Grid for parallel browser execution → GitHub Actions for CI triggers → Docker for consistent test environments → HTML + Slack reporting.",
    challenges: "Handling flaky tests with smart retry mechanisms, managing test data isolation across parallel threads, and reducing overall suite execution time from 4 hours to 45 minutes.",
    outcome: "Automated 85% of regression tests. Release cycle reduced from 3 days to 4 hours. Zero critical regressions in 6 consecutive releases.",
  },
];
