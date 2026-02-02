"use strict";
"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Zap, Layers, Shield } from "lucide-react";
import Link from "next/link";
import { useState, useRef, MouseEvent } from "react";

const projects = [
    {
        title: "AI Engine Prototype",
        category: "Architecture",
        description: "Cloud-native neural engine design for real-time data processing and model deployment.",
        tags: ["Next.js", "PyTorch", "AWS"],
        color: "from-blue-600/30 to-indigo-600/30",
        icon: Zap,
    },
    {
        title: "EcoSphere Dashboard",
        category: "Analytics",
        description: "Visualizing global carbon footprint data through a high-fidelity interactive dashboard hub.",
        tags: ["React", "D3.js", "Firebase"],
        color: "from-emerald-600/30 to-teal-600/30",
        icon: Layers,
    },
    {
        title: "Cipher Vault",
        category: "Security",
        description: "Zero-knowledge encryption utility for secure metadata storage and collaborative key passing.",
        tags: ["Rust", "PostgreSQL", "Next.js"],
        color: "from-rose-600/30 to-pink-600/30",
        icon: Shield,
    },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const Icon = project.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative flex flex-col justify-between min-h-[420px] bg-white/3 border border-white/10 rounded-4xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:-translate-y-3 p-8 md:p-10"
        >
            {/* Spotlight Effect */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(700px circle at ${position.x}px ${position.y}px, rgba(100, 150, 255, 0.08), transparent 40%)`,
                }}
            />

            {/* Gradient Orb */}
            <motion.div
                className={`absolute -top-20 -right-20 w-60 h-60 rounded-full bg-linear-to-br ${project.color} blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
            />

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                    <motion.div
                        className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:border-blue-500/30 group-hover:bg-blue-500/5 transition-all duration-500"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                    >
                        <Icon className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </motion.div>
                    <div className="flex gap-2">
                        <Link href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all hover:scale-110">
                            <Github size={18} />
                        </Link>
                        <Link href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all hover:scale-110">
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </div>

                <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/5 rounded-full text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500 group-hover:text-blue-400 group-hover:border-blue-500/20 transition-colors mb-6">
                    {project.category}
                </span>

                <h3 className="text-3xl md:text-4xl font-black mb-4 group-hover:text-white transition-colors tracking-tight leading-tight">
                    {project.title}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed group-hover:text-gray-400 transition-colors">
                    {project.description}
                </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8 relative z-10">
                {project.tags.map((tag: string) => (
                    <span key={tag} className="text-xs font-semibold px-4 py-2 bg-black/30 rounded-xl text-gray-500 border border-white/5 group-hover:border-white/10 transition-colors">
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-32 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 md:mb-28 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
                >
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-sm font-bold tracking-[0.3em] text-blue-500 uppercase mb-6 block"
                        >
                            Portfolio
                        </motion.span>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter">
                            SELECTED <br />
                            <span className="text-gray-600 italic">WORKS</span>
                        </h2>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Link href="#contact" className="group px-8 md:px-10 py-4 md:py-5 bg-white text-black font-black rounded-2xl text-sm uppercase tracking-widest shadow-xl shadow-white/5 flex items-center gap-3 relative overflow-hidden">
                            <span className="relative z-10">Start Project</span>
                            <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:rotate-45 transition-transform" />
                            <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>

            {/* Decorative Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[200px] pointer-events-none" />
        </section>
    );
}
