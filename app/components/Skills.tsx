"use strict";
"use client";

import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";

const skills = [
    { name: "React / Next.js", level: 90, color: "bg-blue-500" },
    { name: "TypeScript", level: 85, color: "bg-blue-400" },
    { name: "Node.js", level: 80, color: "bg-green-500" },
    { name: "Python", level: 75, color: "bg-yellow-500" },
    { name: "Tailwind CSS", level: 95, color: "bg-pink-500" },
    { name: "Cloud Architecture", level: 65, color: "bg-purple-500" },
    { name: "PostgreSQL", level: 70, color: "bg-indigo-500" },
    { name: "UI/UX Design", level: 82, color: "bg-orange-500" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-32 relative bg-black/50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    <div className="md:w-1/3 sticky top-32">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl font-black mb-6 leading-tight"
                        >
                            TECHNICAL <br />
                            <span className="text-gray-500">EXCELLENCE</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-gray-400 text-lg"
                        >
                            My expertise spans across the full software life cycle, specialized in building robust and high-performance digital systems.
                        </motion.p>
                    </div>

                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 w-full">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-sm font-bold tracking-widest text-gray-300 uppercase group-hover:text-white transition-colors">
                                        {skill.name}
                                    </span>
                                    <span className="text-xs font-mono text-gray-500 group-hover:text-blue-400 transition-colors">
                                        {skill.level}%
                                    </span>
                                </div>
                                <div className="h-[6px] w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1.5, ease: "circOut", delay: 0.3 + (index * 0.05) }}
                                        viewport={{ once: true }}
                                        className={cn("h-full rounded-full relative", skill.color)}
                                    >
                                        <div className="absolute top-0 left-0 w-full h-full bg-white animate-shine -skew-x-30 pointer-events-none" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Blur */}
            <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />
        </section>
    );
}
