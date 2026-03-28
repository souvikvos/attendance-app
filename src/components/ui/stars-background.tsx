"use client";

import React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function StarsBackground() {
    const { theme } = useTheme();

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none select-none">
            {/* Primary Star Layer */}
            <motion.div
                className="absolute inset-0 opacity-20 dark:opacity-40"
                style={{
                    backgroundImage: `radial-gradient(1px 1px at 20px 30px, ${theme === 'dark' ? '#fff' : '#000'}, rgba(0,0,0,0)),
                            radial-gradient(1.5px 1.5px at 100px 150px, ${theme === 'dark' ? '#fff' : '#000'}, rgba(0,0,0,0)),
                            radial-gradient(1px 1px at 250px 350px, ${theme === 'dark' ? '#fff' : '#000'}, rgba(0,0,0,0)),
                            radial-gradient(2px 2px at 400px 50px, ${theme === 'dark' ? '#fff' : '#000'}, rgba(0,0,0,0)),
                            radial-gradient(1px 1px at 500px 200px, ${theme === 'dark' ? '#fff' : '#000'}, rgba(0,0,0,0)),
                            radial-gradient(1.5px 1.5px at 600px 400px, ${theme === 'dark' ? '#fff' : '#000'}, rgba(0,0,0,0))`,
                    backgroundSize: '700px 700px',
                }}
                animate={{ y: [0, -700] }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            />

            {/* Secondary Star Layer (Slower) */}
            <motion.div
                className="absolute inset-0 opacity-10 dark:opacity-20"
                style={{
                    backgroundImage: `radial-gradient(1px 1px at 50px 100px, ${theme === 'dark' ? '#fff' : '#000'}, rgba(0,0,0,0)),
                            radial-gradient(1px 1px at 200px 250px, ${theme === 'dark' ? '#fff' : '#000'}, rgba(0,0,0,0)),
                            radial-gradient(1.5px 1.5px at 350px 150px, ${theme === 'dark' ? '#fff' : '#000'}, rgba(0,0,0,0)),
                            radial-gradient(1px 1px at 550px 300px, ${theme === 'dark' ? '#fff' : '#000'}, rgba(0,0,0,0))`,
                    backgroundSize: '600px 600px',
                }}
                animate={{ y: [0, -600] }}
                transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
}
