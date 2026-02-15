export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "system-design-basics",
    title: "System Design Basics for Developers",
    excerpt: "Understanding scalability, load balancing, caching, and database sharding for building robust distributed systems.",
    date: "2025-01-15",
    readTime: "8 min",
    tags: ["System Design", "Architecture"],
    content: `## Why System Design Matters\n\nEvery software engineer eventually faces the challenge of scaling. Understanding core patterns like **load balancing**, **caching layers**, and **database partitioning** is essential.\n\n### Key Concepts\n\n- **Horizontal vs Vertical Scaling** — Add more machines vs upgrading existing ones\n- **CAP Theorem** — Consistency, Availability, Partition tolerance trade-offs\n- **Caching** — Redis, Memcached for reducing database load\n\n\`\`\`python\n# Simple cache decorator\nfrom functools import lru_cache\n\n@lru_cache(maxsize=128)\ndef get_user(user_id: int):\n    return db.query(User).get(user_id)\n\`\`\``,
  },
  {
    id: "rag-architecture",
    title: "What is RAG Architecture",
    excerpt: "Deep dive into Retrieval-Augmented Generation — combining vector search with LLMs for accurate knowledge retrieval.",
    date: "2025-02-01",
    readTime: "10 min",
    tags: ["AI", "RAG", "LLMs"],
    content: `## RAG: The Best of Both Worlds\n\nRAG combines the power of large language models with external knowledge retrieval, reducing hallucination and providing up-to-date information.\n\n### How It Works\n\n1. **Document Ingestion** — Chunk and embed documents\n2. **Vector Storage** — Store embeddings in a vector database\n3. **Query & Retrieve** — Find relevant chunks via semantic search\n4. **Generate** — Pass context + query to LLM\n\n\`\`\`python\nfrom langchain.chains import RetrievalQA\n\nqa_chain = RetrievalQA.from_chain_type(\n    llm=llm,\n    retriever=vectorstore.as_retriever()\n)\n\`\`\``,
  },
  {
    id: "api-performance",
    title: "API Performance Optimization Tips",
    excerpt: "Practical techniques for building fast, efficient APIs — from database query optimization to response compression.",
    date: "2025-02-10",
    readTime: "7 min",
    tags: ["Backend", "Performance", "APIs"],
    content: `## Speed Matters\n\nEvery 100ms of latency costs user engagement. Here are proven techniques to optimize your APIs.\n\n### Quick Wins\n\n- **Database indexing** — Index your most-queried columns\n- **Connection pooling** — Reuse database connections\n- **Response compression** — Use gzip/brotli\n- **Pagination** — Never return unbounded results\n\n\`\`\`python\n@app.get("/users")\nasync def list_users(skip: int = 0, limit: int = 20):\n    return await db.users.find().skip(skip).limit(limit)\n\`\`\``,
  },
  {
    id: "how-embeddings-work",
    title: "How Embeddings Work",
    excerpt: "Understanding vector embeddings — the mathematical foundation powering modern AI search and recommendation systems.",
    date: "2025-01-28",
    readTime: "9 min",
    tags: ["AI", "Embeddings", "Math"],
    content: `## From Words to Numbers\n\nEmbeddings convert text, images, or any data into dense numerical vectors that capture semantic meaning.\n\n### Key Intuitions\n\n- Similar concepts → nearby vectors\n- king - man + woman ≈ queen\n- Cosine similarity measures relatedness\n\n\`\`\`python\nfrom openai import OpenAI\n\nclient = OpenAI()\nresponse = client.embeddings.create(\n    model="text-embedding-3-small",\n    input="Hello world"\n)\nvector = response.data[0].embedding  # 1536 dimensions\n\`\`\``,
  },
  {
    id: "clean-backend-architecture",
    title: "Clean Backend Architecture",
    excerpt: "How to structure your backend for maintainability — separation of concerns, dependency injection, and layered patterns.",
    date: "2025-01-20",
    readTime: "8 min",
    tags: ["Architecture", "Backend", "Clean Code"],
    content: `## Structure for Scale\n\nA well-organized backend saves hours of debugging and onboarding time.\n\n### Recommended Layers\n\n1. **Routes/Controllers** — HTTP handling only\n2. **Services** — Business logic\n3. **Repositories** — Data access\n4. **Models** — Data structures\n\n\`\`\`\nsrc/\n  routes/\n  services/\n  repositories/\n  models/\n  utils/\n  config/\n\`\`\`\n\nEach layer only depends on the layer below it. Never skip layers.`,
  },
];
