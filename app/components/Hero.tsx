"use strict";
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, MapPin, Code2, Terminal, Cpu } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { SpotifyWidget } from "./Widgets";

const ThreeBackground = dynamic(() => import("./ui/ThreeBackground"), {
    ssr: false,
    loading: () => <div className="absolute inset-0 -z-10 bg-black" />,
});

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const [time, setTime] = useState("");

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Three.js 3D Background */}
            <ThreeBackground />

            {/* 2D Overlay Elements */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 -z-5 pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </motion.div>

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center relative z-10">
                <div className="text-left">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm mb-8 backdrop-blur-md"
                    >
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-gray-300">Software Engineer & CSE student</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8"
                    >
                        Building <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-pink-500 animate-gradient">
                            The Future
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed"
                    >
                        I architect scalable solutions and design immersive digital experiences using modern web technologies and AI architecture.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap gap-6"
                    >
                        <Link
                            href="#projects"
                            className="group relative px-8 py-4 bg-white text-black hover:bg-white/90 rounded-2xl font-bold transition-all hover:scale-105 flex items-center gap-2 active:scale-95 shadow-xl shadow-white/5 overflow-hidden"
                        >
                            <span className="relative z-10">Recent Work</span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-2xl font-bold transition-all hover:scale-105 backdrop-blur-md hover:border-blue-500/50"
                        >
                            Get in touch
                        </Link>
                    </motion.div>
                </div>

                {/* Right side: Widgets */}
                <div className="relative h-[600px] flex items-center justify-center">
                    <div className="relative w-full max-w-[450px]">
                        {/* Status Widget */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="absolute top-[-40px] right-0 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl w-[260px] z-20"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Available for work</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">Currently building</h3>
                            <p className="text-sm text-gray-400">Next.js Microservices ⚡</p>
                        </motion.div>

                        {/* Tech Stack Widget */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="absolute top-[120px] left-[-40px] bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl w-[280px] z-10"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Code2 className="text-purple-400 w-5 h-5" />
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Tech Stack</span>
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                {['React', 'Next', 'Node', 'TS', 'Py', 'AWS', 'Doc', 'Git'].map((tech) => (
                                    <div key={tech} className="aspect-square bg-white/5 rounded-xl flex items-center justify-center text-[10px] font-bold text-gray-300 border border-white/5 hover:border-purple-500/50 hover:bg-purple-500/10 transition-colors">
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Location Widget */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="absolute bottom-[-20px] left-[60px] bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl w-[240px] z-20"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Local Time</span>
                                    <span className="text-2xl font-black text-white">{time}</span>
                                </div>
                                <MapPin className="text-blue-500 w-5 h-5" />
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <Globe className="w-4 h-4" />
                                <span>Based in India</span>
                            </div>
                        </motion.div>

                        {/* Spotify Widget */}
                        <div className="absolute top-[40%] right-[-100px] z-30 scale-90 opacity-80 hover:opacity-100 transition-opacity">
                            <SpotifyWidget />
                        </div>

                        {/* Floating Icons */}
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 10, -10, 0]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[20%] right-[-60px] p-4 bg-linear-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl border border-white/10"
                        >
                            <Terminal className="text-blue-400 w-6 h-6" />
                        </motion.div>

                        <motion.div
                            animate={{
                                y: [0, 20, 0],
                                rotate: [0, -10, 10, 0]
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute bottom-[20%] left-[-80px] p-4 bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl border border-white/10"
                        >
                            <Cpu className="text-purple-400 w-6 h-6" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase">Scroll</span>
                <motion.div
                    animate={{ height: [20, 48, 20] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-px bg-linear-to-b from-blue-500/50 to-transparent"
                />
            </motion.div>
        </section>
    );
}

function Globe({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    );
}
