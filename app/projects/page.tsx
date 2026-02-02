"use strict";
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Github, Globe, ArrowUpRight, Search, Code2, ExternalLink, Cpu, Database, Layout } from "lucide-react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import CustomCursor from "../components/ui/CustomCursor";

const categories = [
    { id: "All", name: "All Work", icon: Layout },
    { id: "Fullstack", name: "Apps", icon: globe },
    { id: "Architecture", name: "Systems", icon: cpu },
    { id: "AI", name: "Intelligence", icon: Database },
];

const allProjects = [
    {
        title: "AI Engine Prototype",
        category: "AI",
        description: "A high-performance neural engine designed for real-time data processing and seamless model deployment in edge computing environments.",
        tags: ["Next.js", "PyTorch", "AWS", "gRPC"],
        color: "from-blue-600 to-indigo-600",
        stats: { performance: "+45%", latency: "-120ms" },
        featured: true,
    },
    {
        title: "EcoSphere Dashboard",
        category: "Fullstack",
        description: "Interactive analytics platform visualizing global environmental data with real-time telemetry from IoT sensors worldwide.",
        tags: ["React", "D3.js", "Firebase", "PostgreSQL"],
        color: "from-emerald-600 to-teal-600",
        stats: { users: "12k+", uptime: "99.99%" },
        featured: false,
    },
    {
        title: "Cipher Vault",
        category: "Architecture",
        description: "Advanced zero-knowledge encryption utility specialized for secure metadata storage and collaborative cryptographic key passing.",
        tags: ["Rust", "Redis", "Next.js", "Docker"],
        color: "from-rose-600 to-pink-600",
        stats: { encryption: "AES-256", audit: "PASSED" },
        featured: true,
    },
    {
        title: "Quantum Ledger",
        category: "Architecture",
        description: "Highly secure distributed ledger system utilizing quantum-resistant encryption protocols for ultra-secure financial transactions.",
        tags: ["Go", "gRPC", "K8s", "RabbitMQ"],
        color: "from-purple-600 to-blue-600",
        stats: { throughput: "50k tx/s", regions: "6" },
        featured: false,
    },
    {
        title: "NeuroLink Mobile",
        category: "AI",
        description: "Next-gen mobile experience for mental health tracking, utilizing local AI sentiment analysis to provide personalized insights.",
        tags: ["React Native", "TF Lite", "Node.js"],
        color: "from-amber-600 to-orange-600",
        stats: { accuracy: "94%", retention: "60%" },
        featured: false,
    },
    {
        title: "Nexus Gateway",
        category: "Architecture",
        description: "Blazing fast API gateway built with Rust for orchestrating complex microservice communication with zero-overhead routing.",
        tags: ["Rust", "Redis", "Grafana", "Envoy"],
        color: "from-cyan-600 to-blue-600",
        stats: { avg_latency: "2ms", requests: "1M/min" },
        featured: true,
    },
];

export default function ProjectsPage() {
    const [filter, setFilter] = useState("All");
    const [search, setSearch] = useState("");

    const filteredProjects = allProjects.filter(p =>
        (filter === "All" || p.category === filter) || (filter === "All Work" || p.category === filter) &&
        (p.title.toLowerCase().includes(search.toLowerCase()) || p.tags.some(t => t.toLowerCase().includes(search.toLowerCase())))
    ).filter(p => filter === "All" ? true : p.category === filter);

    return (
        <main className="min-h-screen bg-background text-foreground font-inter">
            <CustomCursor />
            <Navbar />

            {/* Dynamic Header Section */}
            <section className="pt-40 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[200px] -z-10 animate-pulse" />
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-8xl md:text-10xl font-black tracking-tighter mb-8 italic text-white/5 select-none absolute -top-10 left-0">ARCHIVE</h1>
                            <span className="inline-block px-4 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-6 relative z-10">
                                Showcase 2024
                            </span>
                            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight mb-8 relative z-10">
                                PROVEN <span className="text-gray-500 font-space italic">SOLUTIONS</span>
                            </h2>
                            <p className="text-2xl text-gray-400 font-light leading-relaxed max-w-2xl">
                                Engineering high-performance applications with a focus on <span className="text-white font-bold">architectural integrity</span> and scalability.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Control Bar */}
            <section className="sticky top-24 z-40 px-4 mb-20">
                <div className="container mx-auto">
                    <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-4 rounded-3xl md:rounded-full flex flex-col md:flex-row gap-6 items-center justify-between shadow-2xl">
                        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar w-full md:w-auto">
                            {categories.map((c) => (
                                <button
                                    key={c.id}
                                    onClick={() => setFilter(c.id)}
                                    className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${filter === c.id ? "bg-white text-black shadow-lg" : "text-gray-400 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    <c.icon size={14} />
                                    {c.name}
                                </button>
                            ))}
                        </div>

                        <div className="relative w-full md:w-96 group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 group-focus-within:text-blue-500 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search architecture, language, or field..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full bg-black/50 border border-white/5 rounded-full py-3.5 pl-12 pr-6 focus:outline-none focus:border-blue-500/50 text-sm transition-all placeholder:text-gray-600"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="pb-40 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((p, i) => (
                                <ProjectDetailedCard key={p.title} project={p} index={i} />
                            ))}
                        </AnimatePresence>
                    </div>

                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-40 border-2 border-dashed border-white/5 rounded-[4rem]"
                        >
                            <Cpu className="mx-auto w-12 h-12 text-gray-700 mb-6" />
                            <p className="text-gray-500 text-2xl font-light">No architectural matches found for your query.</p>
                        </motion.div>
                    )}
                </div>
            </section>

            <Contact />
        </main>
    );
}

function ProjectDetailedCard({ project, index }: { project: any; index: number }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="group relative bg-white/[0.02] border border-white/10 rounded-[3rem] overflow-hidden hover:border-white/20 transition-all duration-700 flex flex-col"
        >
            {/* Project Status/ID */}
            <div className="absolute top-10 right-10 text-[10px] font-mono text-gray-600 uppercase tracking-widest z-10">
                ID: 00{index + 1} // ARCHIVED
            </div>

            <div className="p-8 md:p-12 flex-1">
                <div className="flex items-start justify-between mb-12">
                    <div className={`p-5 rounded-3xl bg-linear-to-br ${project.color} bg-opacity-10 border border-white/10 group-hover:scale-110 transition-transform duration-700`}>
                        <Code2 className="text-white w-8 h-8" />
                    </div>
                    <div className="flex gap-4">
                        <a href="#" className="p-4 bg-white/5 hover:bg-blue-500 rounded-full text-white transition-all shadow-xl shadow-black/50">
                            <Github size={20} />
                        </a>
                        <a href="#" className="p-4 bg-white/5 hover:bg-blue-500 rounded-full text-white transition-all shadow-xl shadow-black/50">
                            <ExternalLink size={20} />
                        </a>
                    </div>
                </div>

                <span className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-4 block">{project.category}</span>
                <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-none group-hover:text-blue-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl font-light">
                    {project.description}
                </p>

                {/* Project Stats Widget */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                    {Object.entries(project.stats).map(([key, val]: [string, any]) => (
                        <div key={key} className="bg-white/5 rounded-2xl p-4 border border-white/5 group-hover:bg-white/[0.08] transition-colors">
                            <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">{key.replace('_', ' ')}</div>
                            <div className="text-xl font-bold text-white tracking-tight">{val}</div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: any) => (
                        <span key={tag} className="text-[11px] font-bold text-gray-400 px-4 py-2 bg-black/40 rounded-xl border border-white/5 uppercase tracking-widest">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Footer Visual */}
            <div className={`h-2 w-full bg-linear-to-r ${project.color} opacity-20 group-hover:opacity-100 transition-opacity duration-700`} />
        </motion.div>
    );
}

function globe({ className }: any) { return <Globe className={className} /> }
function cpu({ className }: any) { return <Cpu className={className} /> }
