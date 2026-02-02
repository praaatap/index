"use strict";
"use client";

import { motion } from "framer-motion";
import { Music, Github, Code2, Globe, Cpu } from "lucide-react";
import { useState, useEffect } from "react";

export function SpotifyWidget() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-black/40 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 w-fit"
        >
            <div className="relative">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Music className="text-green-500 w-6 h-6 animate-pulse" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black animate-ping" />
            </div>
            <div>
                <div className="text-[10px] font-bold text-green-500 uppercase tracking-widest mb-1">Now Playing</div>
                <div className="text-sm font-bold text-white truncate w-32">Strobe (Extended Mix)</div>
                <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Deadmau5</div>
            </div>
        </motion.div>
    );
}

export function GithubCommitWidget() {
    // Simulated activity data
    const activity = Array.from({ length: 28 }, () => Math.floor(Math.random() * 5));

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-4xl"
        >
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-white" />
                    <span className="text-xs font-bold text-white uppercase tracking-widest">Git Metrics</span>
                </div>
                <span className="text-[10px] text-gray-500 font-bold">LATEST PUSH: 2H AGO</span>
            </div>

            <div className="grid grid-cols-7 gap-1">
                {activity.map((val, i) => (
                    <div
                        key={i}
                        className="w-3 h-3 rounded-sm transition-all hover:scale-125"
                        style={{
                            backgroundColor: val === 0 ? 'rgba(255,255,255,0.05)' :
                                val === 1 ? 'rgba(34,197,94,0.2)' :
                                    val === 2 ? 'rgba(34,197,94,0.4)' :
                                        val === 3 ? 'rgba(34,197,94,0.7)' : 'rgba(34,197,94,1)'
                        }}
                    />
                ))}
            </div>

            <div className="mt-6 flex justify-between items-end">
                <div>
                    <div className="text-2xl font-black text-white">1,248</div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">TOTAL COMMITS</div>
                </div>
                <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full border-2 border-black bg-gray-800" />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export function SystemResourcesWidget() {
    const [usage, setUsage] = useState(45);

    useEffect(() => {
        const interval = setInterval(() => {
            setUsage(prev => Math.min(95, Math.max(10, prev + (Math.random() * 10 - 5))));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-4xl overflow-hidden group"
        >
            <div className="flex items-center gap-3 mb-6">
                <Cpu className="w-5 h-5 text-purple-500" />
                <span className="text-xs font-bold text-white uppercase tracking-widest">Server Load</span>
            </div>

            <div className="relative h-2 w-full bg-white/5 rounded-full overflow-hidden mb-4">
                <motion.div
                    animate={{ width: `${usage}%` }}
                    className="h-full bg-linear-to-r from-purple-500 to-blue-500 rounded-full"
                />
            </div>

            <div className="flex justify-between items-center">
                <span className="text-3xl font-black text-white font-mono">{Math.round(usage)}%</span>
                <div className="text-[10px] font-bold text-gray-500 text-right">
                    UPTIME: 99.9%<br />
                    LATENCY: 12MS
                </div>
            </div>
        </motion.div>
    );
}
