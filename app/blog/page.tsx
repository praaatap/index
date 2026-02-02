"use strict";
"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import CustomCursor from "../components/ui/CustomCursor";

const blogPosts = [
    {
        slug: "building-scalable-microservices",
        title: "Building Scalable Microservices with Go and gRPC",
        excerpt: "A deep dive into designing high-performance distributed systems that scale horizontally without sacrificing reliability.",
        date: "2024-01-15",
        readTime: "8 min",
        tags: ["Go", "gRPC", "Architecture"],
        featured: true,
    },
    {
        slug: "ai-edge-computing",
        title: "AI at the Edge: Running ML Models on Consumer Devices",
        excerpt: "Exploring techniques for optimizing neural networks to run inference directly on mobile and IoT devices.",
        date: "2024-01-08",
        readTime: "12 min",
        tags: ["AI", "TensorFlow", "Edge Computing"],
        featured: true,
    },
    {
        slug: "modern-frontend-patterns",
        title: "Modern Frontend Patterns: Beyond React Hooks",
        excerpt: "Advanced state management and composition patterns for building maintainable React applications at scale.",
        date: "2023-12-20",
        readTime: "6 min",
        tags: ["React", "TypeScript", "Patterns"],
        featured: false,
    },
    {
        slug: "database-optimization",
        title: "PostgreSQL Performance: Indexing Strategies That Actually Work",
        excerpt: "Real-world indexing techniques that reduced our query times by 90% in production environments.",
        date: "2023-12-05",
        readTime: "10 min",
        tags: ["PostgreSQL", "Performance", "Backend"],
        featured: false,
    },
];

export default function BlogPage() {
    const featuredPosts = blogPosts.filter(p => p.featured);
    const regularPosts = blogPosts.filter(p => !p.featured);

    return (
        <main className="min-h-screen bg-background text-foreground">
            <CustomCursor />
            <Navbar />

            {/* Header */}
            <section className="pt-40 pb-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block px-4 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                            Technical Insights
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
                            <span className="text-gray-500">Engineering</span> Journal
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                            Thoughts on software architecture, system design, and the craft of building reliable software at scale.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Posts */}
            <section className="pb-20 px-4">
                <div className="container mx-auto">
                    <h2 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-10">Featured</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {featuredPosts.map((post, i) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Link href={`/blog/${post.slug}`} className="group block">
                                    <article className="relative bg-white/5 border border-white/10 rounded-[2.5rem] p-10 md:p-14 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] group-hover:bg-purple-500/10 transition-all" />

                                        <div className="relative z-10">
                                            <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
                                                <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                                                <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                                            </div>

                                            <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tight leading-tight group-hover:text-purple-400 transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-400 leading-relaxed mb-8 line-clamp-2">
                                                {post.excerpt}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {post.tags.map(tag => (
                                                    <span key={tag} className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-bold uppercase tracking-widest text-gray-400 border border-white/5">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Posts */}
            <section className="pb-40 px-4">
                <div className="container mx-auto">
                    <h2 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-10">All Articles</h2>
                    <div className="space-y-4">
                        {regularPosts.map((post, i) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <Link href={`/blog/${post.slug}`} className="group block">
                                    <article className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/5 hover:border-white/10 transition-all">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{post.title}</h3>
                                            <p className="text-gray-500 text-sm line-clamp-1">{post.excerpt}</p>
                                        </div>
                                        <div className="flex items-center gap-6 text-xs text-gray-600 shrink-0">
                                            <span>{post.date}</span>
                                            <span>{post.readTime}</span>
                                            <ArrowRight size={16} className="text-gray-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
