"use strict";
"use client";

import { motion } from "framer-motion";
import { User, Rocket, Target, Code2 } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative aspect-square"
                    >
                        <div className="absolute inset-0 bg-white/5 rounded-[3rem] p-4 border border-white/10 group">
                            <div className="w-full h-full rounded-[2.5rem] bg-linear-to-br from-gray-900 to-black flex items-center justify-center overflow-hidden border border-white/5 relative">
                                <Code2 size={120} className="text-white/10 group-hover:text-blue-500/20 group-hover:scale-110 transition-all duration-700" />

                                <div className="absolute bottom-10 left-10 p-8">
                                    <h3 className="text-3xl font-black mb-2 uppercase tracking-tighter">THE CORE</h3>
                                    <p className="text-gray-500 font-mono text-sm tracking-widest ">00110010 00110101</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-[80px] -z-10" />
                    </motion.div>

                    <div className="relative">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-sm font-bold tracking-[0.3em] text-blue-500 uppercase mb-6 block"
                        >
                            Overview
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-6xl font-black mb-10 leading-none"
                        >
                            DIGITAL <span className="text-gray-500 italic">ARCHITECT</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-8 text-xl text-gray-400 leading-relaxed font-light"
                        >
                            <p>
                                I'm a <span className="text-white font-bold">Software Engineer</span> and Computer Science student driven by the desire to build systems that scale. My work focuses on the intersection of performance, accessibility, and high-quality user experience.
                            </p>
                            <p>
                                Specialized in <span className="text-white font-bold">Full-stack development</span>, I enjoy taking complex problems and decomposing them into elegant, maintainable code architectures.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-8 mt-16">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4"
                            >
                                <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                                    <Rocket size={24} />
                                </div>
                                <div>
                                    <div className="text-white font-black text-lg">Velocity</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">Optimized Build</div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4"
                            >
                                <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <div className="text-white font-black text-lg">Precision</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">Clean Logic</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
