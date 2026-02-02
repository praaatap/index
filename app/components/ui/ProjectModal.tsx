"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Play, Code2 } from "lucide-react";
import { useEffect } from "react";

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        category: string;
        description: string;
        tags: string[];
        color: string;
        stats?: Record<string, string>;
        longDescription?: string;
        features?: string[];
        challenges?: string;
        demoUrl?: string;
        githubUrl?: string;
    } | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed inset-4 md:inset-10 lg:inset-20 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] z-50 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 md:p-10 border-b border-white/5">
                            <div className="flex items-center gap-4">
                                <div className={`p-4 rounded-2xl bg-linear-to-br ${project.color} bg-opacity-20`}>
                                    <Code2 className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] block mb-1">{project.category}</span>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tight">{project.title}</h2>
                                </div>
                            </div>

                            <button
                                onClick={onClose}
                                className="p-4 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-10">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                                {/* Main Content */}
                                <div className="lg:col-span-2 space-y-10">
                                    {/* Description */}
                                    <div>
                                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-4">Overview</h3>
                                        <p className="text-gray-400 text-lg leading-relaxed">{project.description}</p>
                                        {project.longDescription && (
                                            <p className="text-gray-500 leading-relaxed mt-4">{project.longDescription}</p>
                                        )}
                                    </div>

                                    {/* Features */}
                                    {project.features && (
                                        <div>
                                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-4">Key Features</h3>
                                            <ul className="space-y-3">
                                                {project.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-gray-400">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Challenges */}
                                    {project.challenges && (
                                        <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-4">Technical Challenges</h3>
                                            <p className="text-gray-400 leading-relaxed">{project.challenges}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Sidebar */}
                                <div className="space-y-6">
                                    {/* Tech Stack */}
                                    <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-4">Tech Stack</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="px-4 py-2 bg-black/50 rounded-xl text-xs font-bold text-gray-300 border border-white/5">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Stats */}
                                    {project.stats && (
                                        <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-4">Metrics</h3>
                                            <div className="space-y-4">
                                                {Object.entries(project.stats).map(([key, val]) => (
                                                    <div key={key} className="flex justify-between items-center">
                                                        <span className="text-xs text-gray-500 uppercase tracking-widest">{key.replace('_', ' ')}</span>
                                                        <span className="text-lg font-bold text-white">{val}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Actions */}
                                    <div className="space-y-3">
                                        {project.demoUrl && (
                                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl font-bold transition-colors">
                                                <Play size={18} />
                                                Live Demo
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-4 bg-white/5 hover:bg-white/10 rounded-2xl font-bold transition-colors">
                                                <Github size={18} />
                                                View Source
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
