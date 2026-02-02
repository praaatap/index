"use strict";
"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <footer id="contact" className="pt-32 pb-20 relative bg-black border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-32 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-7xl md:text-9xl font-black mb-12 leading-none tracking-tighter">
                            LET'S <br />
                            <span className="text-gray-500 italic">CONNECT</span>
                        </h2>
                        <div className="space-y-12">
                            <div>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Inquiries</p>
                                <Link href="mailto:hello@devportfolio.com" className="text-3xl md:text-5xl font-black hover:text-blue-500 transition-colors">
                                    hello@email.com
                                </Link>
                            </div>

                            <div className="flex gap-10">
                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Follow</p>
                                    <div className="flex gap-6">
                                        <Link href="#" className="hover:text-blue-500 transition-colors"><Twitter size={24} /></Link>
                                        <Link href="#" className="hover:text-blue-500 transition-colors"><Instagram size={24} /></Link>
                                        <Link href="#" className="hover:text-blue-500 transition-colors"><Linkedin size={24} /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        <form className="space-y-10 group">
                            <div className="relative group/field">
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-2xl focus:outline-none focus:border-white transition-all peer placeholder:text-transparent"
                                    placeholder="Full Name"
                                />
                                <label htmlFor="name" className="absolute left-0 top-4 text-2xl text-gray-500 pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs">
                                    Your Name
                                </label>
                            </div>

                            <div className="relative group/field">
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-2xl focus:outline-none focus:border-white transition-all peer placeholder:text-transparent"
                                    placeholder="Email"
                                />
                                <label htmlFor="email" className="absolute left-0 top-4 text-2xl text-gray-500 pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs">
                                    Email Address
                                </label>
                            </div>

                            <div className="relative group/field">
                                <textarea
                                    id="message"
                                    rows={1}
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-2xl focus:outline-none focus:border-white transition-all peer placeholder:text-transparent resize-none overflow-hidden"
                                    placeholder="Message"
                                ></textarea>
                                <label htmlFor="message" className="absolute left-0 top-4 text-2xl text-gray-500 pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs">
                                    Special Inquiry
                                </label>
                            </div>

                            <motion.button
                                whileHover={{ gap: "2rem" }}
                                className="flex items-center gap-6 text-2xl font-black uppercase tracking-widest text-white mt-12 group/btn"
                            >
                                Send Message
                                <div className="p-4 bg-white text-black rounded-full group-hover/btn:bg-blue-500 group-hover/btn:text-white transition-all">
                                    <ArrowRight size={24} />
                                </div>
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-xl font-bold tracking-tighter">
                        <span className="text-white">DEV</span>
                        <span className="text-blue-500">.PORTFOLIO</span>
                    </div>
                    <p className="text-gray-500 text-sm font-medium">© {new Date().getFullYear()} ALL RIGHTS RESERVED. DESIGNED FOR PERFORMANCE.</p>
                </div>
            </div>
        </footer>
    );
}
