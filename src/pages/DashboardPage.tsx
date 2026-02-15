import { useState } from "react";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";
import {
  LayoutDashboard, Server, GitBranch, FileText, BarChart3, Settings,
  Activity, CheckCircle, AlertTriangle, Clock, ArrowUpRight, ArrowDownRight,
  Menu, X
} from "lucide-react";

const sidebarItems = [
  { icon: <LayoutDashboard size={18} />, label: "Overview", active: true },
  { icon: <Server size={18} />, label: "Services" },
  { icon: <GitBranch size={18} />, label: "Pipelines" },
  { icon: <FileText size={18} />, label: "Logs" },
  { icon: <BarChart3 size={18} />, label: "Metrics" },
  { icon: <Settings size={18} />, label: "Settings" },
];

const stats = [
  { label: "API Health", value: "99.9%", change: "+0.1%", up: true, icon: <Activity size={20} /> },
  { label: "Requests/min", value: "2,847", change: "+12%", up: true, icon: <BarChart3 size={20} /> },
  { label: "Avg Latency", value: "45ms", change: "-8ms", up: true, icon: <Clock size={20} /> },
  { label: "Error Rate", value: "0.03%", change: "+0.01%", up: false, icon: <AlertTriangle size={20} /> },
];

const services = [
  { name: "Auth Service", status: "healthy", uptime: "99.99%" },
  { name: "AI Pipeline", status: "healthy", uptime: "99.95%" },
  { name: "Search Index", status: "degraded", uptime: "98.70%" },
  { name: "File Storage", status: "healthy", uptime: "99.98%" },
];

const logs = [
  { time: "14:32:01", level: "info", message: "Deployment v2.4.1 completed successfully" },
  { time: "14:28:45", level: "warn", message: "High memory usage on worker-03 (87%)" },
  { time: "14:25:12", level: "info", message: "AI model cache refreshed — 1,247 embeddings" },
  { time: "14:20:33", level: "error", message: "Timeout on /api/search after 30s — retrying" },
  { time: "14:15:08", level: "info", message: "Rate limit adjusted: 1000 req/min → 1500 req/min" },
];

const queueItems = [
  { name: "Embedding Pipeline", pending: 12, processing: 3, status: "active" },
  { name: "Email Queue", pending: 0, processing: 0, status: "idle" },
  { name: "PDF Export", pending: 5, processing: 1, status: "active" },
  { name: "Webhook Delivery", pending: 2, processing: 2, status: "active" },
];

const chartBars = [65, 72, 58, 80, 92, 85, 78, 88, 95, 70, 82, 90, 68, 75, 88, 92, 85, 78, 95, 82];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed bottom-4 right-4 z-50 md:hidden p-3 rounded-full gradient-bg text-primary-foreground shadow-lg"
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside className={`
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 fixed md:sticky top-16 left-0 z-40
        w-56 h-[calc(100vh-4rem)] glass-strong border-r border-border
        transition-transform duration-300 flex flex-col py-4
      `}>
        <div className="px-4 mb-6">
          <h2 className="text-sm font-bold text-foreground">Dashboard</h2>
          <p className="text-xs text-muted-foreground">System Monitor</p>
        </div>
        <nav className="flex-1 px-2 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                item.active
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-4 md:p-8 overflow-auto">
        <AnimatedSection>
          <h1 className="text-2xl font-bold text-foreground mb-1">System Overview</h1>
          <p className="text-sm text-muted-foreground mb-8">Real-time monitoring dashboard</p>
        </AnimatedSection>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.05}>
              <motion.div whileHover={{ scale: 1.02 }} className="glass rounded-xl p-5 hover:glow-border transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-muted-foreground text-sm">{stat.label}</span>
                  <div className="text-primary">{stat.icon}</div>
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className={`flex items-center gap-1 text-xs font-medium ${stat.up ? "text-emerald-500" : "text-red-400"}`}>
                  {stat.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  {stat.change}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Chart */}
          <AnimatedSection delay={0.1}>
            <div className="glass rounded-xl p-6">
              <h3 className="text-sm font-bold text-foreground mb-4">Requests / min</h3>
              <div className="flex items-end gap-1 h-32">
                {chartBars.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.03 }}
                    className="flex-1 rounded-t gradient-bg opacity-80 hover:opacity-100 transition-opacity"
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Services */}
          <AnimatedSection delay={0.15}>
            <div className="glass rounded-xl p-6">
              <h3 className="text-sm font-bold text-foreground mb-4">Services</h3>
              <div className="space-y-3">
                {services.map((s) => (
                  <div key={s.name} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                    <div className="flex items-center gap-3">
                      <CheckCircle
                        size={16}
                        className={s.status === "healthy" ? "text-emerald-500" : "text-yellow-500"}
                      />
                      <span className="text-sm text-foreground">{s.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">{s.uptime}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Queue Processing */}
        <AnimatedSection delay={0.2}>
          <div className="glass rounded-xl p-6 mb-8">
            <h3 className="text-sm font-bold text-foreground mb-4">Queue Processing</h3>
            <div className="space-y-3">
              {queueItems.map((q) => (
                <div key={q.name} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${q.status === "active" ? "bg-emerald-500 animate-pulse" : "bg-muted-foreground/30"}`} />
                    <span className="text-sm text-foreground">{q.name}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
                    <span>{q.pending} pending</span>
                    <span>{q.processing} processing</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Logs */}
        <AnimatedSection delay={0.25}>
          <div className="glass rounded-xl p-6">
            <h3 className="text-sm font-bold text-foreground mb-4">Recent Activity</h3>
            <div className="space-y-2">
              {logs.map((log, i) => (
                <div key={i} className="flex items-start gap-3 py-2 text-sm border-b border-border/30 last:border-0">
                  <span className="font-mono text-xs text-muted-foreground shrink-0">{log.time}</span>
                  <span className={`text-xs px-2 py-0.5 rounded font-medium shrink-0 ${
                    log.level === "error" ? "bg-red-500/10 text-red-400" :
                    log.level === "warn" ? "bg-yellow-500/10 text-yellow-400" :
                    "bg-primary/10 text-primary"
                  }`}>{log.level}</span>
                  <span className="text-muted-foreground">{log.message}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
