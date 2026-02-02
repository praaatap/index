"use strict";
"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import CustomCursor from "../../components/ui/CustomCursor";

// Sample blog content structure
const blogContent: Record<string, any> = {
    "building-scalable-microservices": {
        title: "Building Scalable Microservices with Go and gRPC",
        date: "2024-01-15",
        readTime: "8 min",
        tags: ["Go", "gRPC", "Architecture"],
        content: `
## The Challenge

When you're building systems that need to handle millions of requests per second, traditional monolithic architectures start to show their cracks. This is where microservices, combined with efficient inter-service communication, become essential.

## Why Go + gRPC?

Go's lightweight goroutines and gRPC's protocol buffer serialization create a powerful combination for high-throughput systems. Here's what we achieved:

- **50,000 requests/second** per service instance
- **Sub-millisecond latency** for most RPC calls
- **Type-safe contracts** across 15+ services

## Key Patterns

### Service Discovery
We implemented a custom service mesh using Consul for dynamic service discovery. Each service registers itself on startup and deregisters gracefully during shutdown.

### Load Balancing
Client-side load balancing with health checks ensures traffic is only routed to healthy instances.

### Circuit Breakers
Hystrix-inspired circuit breakers prevent cascade failures across the distributed system.

## Lessons Learned

1. **Start with clear API contracts** - Proto files are your source of truth
2. **Invest in observability early** - Distributed tracing saved us weeks of debugging
3. **Design for failure** - Every network call can fail
    `,
    },
    "ai-edge-computing": {
        title: "AI at the Edge: Running ML Models on Consumer Devices",
        date: "2024-01-08",
        readTime: "12 min",
        tags: ["AI", "TensorFlow", "Edge Computing"],
        content: `
## The Promise of Edge AI

Running machine learning models directly on user devices opens up possibilities that cloud-based inference can't match: real-time processing, privacy preservation, and offline functionality.

## Model Optimization Techniques

### Quantization
Converting 32-bit floating point weights to 8-bit integers reduced our model size by 75% with only 2% accuracy loss.

### Pruning
Removing low-importance neural connections decreased inference time by 40%.

### Knowledge Distillation
Training smaller "student" models to mimic larger "teacher" models gave us the best of both worlds.

## Real-World Results

Our optimized model runs at:
- **30 FPS** on iPhone 12
- **25 FPS** on mid-range Android devices
- **60 FPS** on modern laptops

## Implementation Stack

- TensorFlow Lite for mobile deployment
- CoreML for iOS-specific optimizations
- ONNX Runtime for cross-platform compatibility
    `,
    },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogContent[params.slug] || {
        title: "Post Not Found",
        date: "--",
        readTime: "--",
        tags: [],
        content: "This post could not be found.",
    };

    return (
        <main className="min-h-screen bg-background text-foreground">
            <CustomCursor />
            <Navbar />

            <article className="pt-40 pb-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Back Link */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-12 group">
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Journal
                        </Link>
                    </motion.div>

                    {/* Header */}
                    <motion.header
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
                            <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                            <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag: string) => (
                                <span key={tag} className="px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-bold uppercase tracking-widest">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.header>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tight prose-h2:text-3xl prose-h3:text-xl prose-p:text-gray-400 prose-p:leading-relaxed prose-strong:text-white prose-li:text-gray-400 prose-code:bg-white/10 prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:text-purple-400"
                    >
                        <div dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content) }} />
                    </motion.div>

                    {/* Share */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-20 pt-10 border-t border-white/5"
                    >
                        <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-full text-sm font-bold transition-colors">
                            <Share2 size={16} />
                            Share this article
                        </button>
                    </motion.div>
                </div>
            </article>

            <Contact />
        </main>
    );
}

function formatMarkdown(content: string): string {
    // Simple markdown to HTML converter
    let html = content
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/^- (.*$)/gim, '<li>$1</li>');

    // Wrap consecutive list items in <ul>
    html = html.replace(/(<li>[\s\S]*?<\/li>)+/g, '<ul>$&</ul>');

    // Add paragraph tags
    html = html.split('\n\n').map(block => {
        const trimmed = block.trim();
        if (!trimmed || trimmed.startsWith('<')) return trimmed;
        return `<p>${trimmed}</p>`;
    }).join('');

    return html;
}
