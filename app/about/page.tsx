"use strict";
"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Mail, MapPin, Terminal, Zap, Github, Linkedin, Twitter } from "lucide-react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import CustomCursor from "../components/ui/CustomCursor";

const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Commits this year", value: "1.2k" },
    { label: "Happy Clients", value: "12" },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-blue-500/30">
            <CustomCursor />
            <Navbar />

            <section className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-20"
                    >
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 italic text-gray-800">IDENTITY</h1>
                        <p className="text-2xl text-gray-400 max-w-3xl leading-relaxed font-light">
                            I am a <span className="text-white font-bold">Software Architect</span> based in India, specializing in the intersection of high-performance backend systems and immersive frontend experiences.
                        </p>
                    </motion.div>

                    {/* Bento Grid layout */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
                        {/* Main Bio */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="md:col-span-2 md:row-span-2 bg-white/5 border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between"
                        >
                            <div>
                                <div className="p-4 bg-blue-500/10 rounded-2xl w-fit mb-8 border border-blue-500/20">
                                    <Terminal className="text-blue-500 w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-black mb-6">THE PHILOSOPHY</h3>
                                <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                                    <p>I believe code is more than just instructions; it's a medium for solving human problems efficiently and beautifully.</p>
                                    <p>My approach combines technical rigor with a deep focus on user psychology and accessibility.</p>
                                </div>
                            </div>
                            <div className="mt-12 flex gap-4">
                                <LinkIcon Icon={Github} />
                                <LinkIcon Icon={Linkedin} />
                                <LinkIcon Icon={Twitter} />
                            </div>
                        </motion.div>

                        {/* Location/Map placeholder */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 flex flex-col justify-between"
                        >
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Location</span>
                                <MapPin className="text-red-500 w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold">Bangalore, India</h4>
                                <p className="text-gray-500 text-sm">Working Remotely Globally</p>
                            </div>
                        </motion.div>

                        {/* Tech Stack Mini */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8"
                        >
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-4">Focus</span>
                            <div className="flex flex-wrap gap-2">
                                {["Node", "Go", "AWS", "Next.js"].map(t => (
                                    <span key={t} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-bold text-blue-400 border border-white/5">{t}</span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Stats widgets */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="md:col-span-2 grid grid-cols-2 gap-4"
                        >
                            {stats.map((s, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-[2rem] p-6 text-center hover:bg-white/[0.07] transition-colors group">
                                    <div className="text-3xl font-black mb-1 group-hover:text-blue-500 transition-colors">{s.value}</div>
                                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">{s.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Detailed Story */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto border-t border-white/5 pt-20"
                    >
                        <h2 className="text-4xl font-black mb-12">MY STORY</h2>
                        <div className="columns-1 md:columns-2 gap-12 text-gray-400 leading-relaxed space-y-8">
                            <p>My journey in computer science began with curiosity about how the systems we use every day actually work. This curiosity evolved into a passion for building robust, scalable applications that solve real-world problems.</p>
                            <p>During my time as a CSE student, I've dived deep into everything from low-level systems programming to high-level cloud architecture. I find joy in the process of abstraction—taking a complex problem and building a clean, efficient solution around it.</p>
                            <div className="p-8 bg-linear-to-br from-blue-500/10 to-purple-500/10 rounded-3xl border border-white/5">
                                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                    <Zap className="text-yellow-400 w-4 h-4" /> Current Focus
                                </h4>
                                <p className="text-sm">I'm currently exploring the intersection of AI-driven architecture and distributed systems, looking for ways to make the web faster and more intelligent.</p>
                            </div>
                            <p>Beyond coding, I am an advocate for open-source software and believe in the power of community-driven development. I spend my free time contributing to various projects and learning new paradigms that challenge my thinking.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Contact />
        </main>
    );
}

function LinkIcon({ Icon }: { Icon: any }) {
    return (
        <a href="#" className="p-4 bg-white/5 hover:bg-blue-500 hover:text-white rounded-2xl transition-all duration-300 border border-white/10">
            <Icon size={20} />
        </a>
    );
}
