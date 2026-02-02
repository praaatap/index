"use strict";
"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isPointer, setIsPointer] = useState(false);

    const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
    const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);

            const target = e.target as HTMLElement;
            setIsPointer(window.getComputedStyle(target).cursor === "pointer");
        };

        window.addEventListener("mousemove", moveCursor);
        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed left-0 top-0 w-8 h-8 pointer-events-none z-9999 max-md:hidden"
            style={{
                x: cursorX,
                y: cursorY,
            }}
        >
            <motion.div
                className="w-full h-full rounded-full border border-white/50 backdrop-blur-xs flex items-center justify-center"
                animate={{
                    scale: isPointer ? 2 : 1, // Expand when hovering clickable elements
                    backgroundColor: isPointer ? "rgba(255, 255, 255, 0.1)" : "transparent"
                }}
            >
                <div className="w-1 h-1 bg-white rounded-full bg-linear-to-r from-blue-400 to-purple-400" />
            </motion.div>
        </motion.div>
    );
}
