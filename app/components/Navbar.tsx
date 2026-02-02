"use strict";
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { cn } from "@/app/lib/utils";
import ThemeToggle from "./ui/ThemeToggle";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
                "fixed w-full z-100 transition-all duration-500",
                scrolled
                    ? "top-4 px-4 sm:px-8"
                    : "top-0"
            )}
        >
            <div
                className={cn(
                    "container mx-auto transition-all duration-500",
                    scrolled
                        ? "max-w-4xl bg-black/40 backdrop-blur-xl border border-white/10 rounded-full py-3 px-6 shadow-2xl shadow-black/50"
                        : "max-w-7xl bg-transparent py-8 px-4"
                )}
            >
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                        <span className="text-white">DEV</span>
                        <span className="text-blue-500">.PORTFOLIO</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group"
                            >
                                {link.name}
                                <span className="absolute bottom-1 left-4 right-4 h-px bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </Link>
                        ))}
                        <div className="flex items-center gap-2 ml-4 pl-4 border-l border-white/10">
                            <ThemeToggle />
                            <Link href="https://github.com" target="_blank" className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all">
                                <Github size={18} />
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all">
                                <Linkedin size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-white hover:bg-white/5 rounded-full transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-2xl z-40 flex items-center justify-center md:hidden"
                    >
                        <button
                            className="absolute top-8 right-8 text-white p-2"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={32} />
                        </button>
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-4xl font-bold text-gray-400 hover:text-white transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                className="flex items-center gap-8 mt-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Link href="https://github.com" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                                    <Github size={32} />
                                </Link>
                                <Link href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                                    <Linkedin size={32} />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
