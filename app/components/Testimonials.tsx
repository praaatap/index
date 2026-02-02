"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Chen",
        role: "Engineering Manager",
        company: "TechCorp",
        text: "One of the most talented engineers I've worked with. Their ability to architect complex systems while maintaining clean, readable code is exceptional.",
        avatar: "SC",
    },
    {
        name: "Michael Torres",
        role: "Senior Developer",
        company: "StartupXYZ",
        text: "Delivered our entire backend infrastructure ahead of schedule. The system has been running flawlessly for over a year with zero downtime.",
        avatar: "MT",
    },
    {
        name: "Emily Watson",
        role: "Product Lead",
        company: "DigitalAgency",
        text: "Exceptional problem-solver who consistently goes above and beyond. Their work on our AI integration saved us months of development time.",
        avatar: "EW",
    },
];

export default function Testimonials() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[200px] -z-10" />

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                        Testimonials
                    </span>
                    <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
                        What <span className="text-gray-500 italic">People</span> Say
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Feedback from colleagues, clients, and collaborators I've had the pleasure of working with.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-white/5 border border-white/10 rounded-4xl p-8 hover:border-purple-500/30 transition-all duration-500"
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-4 -right-4 p-4 bg-purple-500/10 rounded-2xl border border-purple-500/20">
                                <Quote size={20} className="text-purple-400" />
                            </div>

                            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                                "{testimonial.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center text-sm font-black">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-bold text-white">{testimonial.name}</div>
                                    <div className="text-xs text-gray-500">
                                        {testimonial.role} at {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
