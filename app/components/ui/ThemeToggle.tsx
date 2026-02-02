"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle("light", savedTheme === "light");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("light", newTheme === "light");
    };

    if (!mounted) return null;

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="relative p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors overflow-hidden"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === "dark" ? 0 : 180,
                    scale: theme === "dark" ? 1 : 0
                }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Moon size={18} className="text-blue-400" />
            </motion.div>

            <motion.div
                initial={false}
                animate={{
                    rotate: theme === "light" ? 0 : -180,
                    scale: theme === "light" ? 1 : 0
                }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Sun size={18} className="text-yellow-400" />
            </motion.div>

            {/* Invisible spacer */}
            <div className="w-[18px] h-[18px] opacity-0">
                <Moon size={18} />
            </div>
        </motion.button>
    );
}
