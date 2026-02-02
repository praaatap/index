"use strict";
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        title: "Senior Systems Engineer",
        company: "TechFlow Solutions",
        period: "2024 - Present",
        description: "Leading the migration of legacy monoliths to microservices architecture. Improved system throughput by 40% and reduced latency by 150ms.",
        tags: ["Go", "Kubernetes", "gRPC"],
    },
    {
        title: "Full Stack Developer",
        company: "InnovateX",
        period: "2022 - 2024",
        description: "Developed and maintained multiple client-facing React applications. Implemented a real-time collaboration engine using WebSockets.",
        tags: ["React", "Node.js", "Redis"],
    },
    {
        title: "Software Engineer Intern",
        company: "StartUp Inc",
        period: "2021 - 2022",
        description: "Collaborated with the product team to design and ship the MVP of the mobile application. Optimized API response times.",
        tags: ["React Native", "Firebase", "TypeScript"],
    },
];

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="experience" className="py-32 relative">
            <div className="container mx-auto px-4" ref={containerRef}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-black mb-20 text-center tracking-tighter"
                >
                    CAREER <span className="text-blue-500">TIMELINE</span>
                </motion.h2>

                <div className="relative mx-auto max-w-4xl">
                    {/* Central Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-linear-to-b from-blue-500 via-purple-500 to-blue-500"
                        />
                    </div>

                    <div className="space-y-24">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content Side */}
                                <div className="ml-12 md:ml-0 md:w-1/2 md:px-12">
                                    <div className={`p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/30 transition-colors group relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                        <div className="relative z-10">
                                            <div className="flex items-center gap-2 mb-4 text-blue-400 font-mono text-sm">
                                                <Calendar size={14} />
                                                <span>{exp.period}</span>
                                            </div>
                                            <h3 className="text-2xl font-bold mb-1 group-hover:text-blue-200 transition-colors">{exp.title}</h3>
                                            <div className="text-gray-400 font-medium mb-4">{exp.company}</div>
                                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                                {exp.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.tags.map(tag => (
                                                    <span key={tag} className="px-3 py-1 bg-black/30 rounded-lg text-xs font-mono text-gray-300 border border-white/5">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Dot */}
                                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 top-0 md:top-8 flex items-center justify-center">
                                    <div className="w-10 h-10 bg-black border-4 border-blue-500/20 rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                                    </div>
                                </div>

                                {/* Empty Side for layout */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
