"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function StarsBackground() {
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none select-none">
            {/* Primary Star Layer */}
            <div
                className="absolute inset-0 opacity-20 dark:opacity-40"
                style={{
                    backgroundImage: `radial-gradient(1px 1px at 20px 30px, ${theme === 'dark' ? '#fff' : '#000'}, rgba(0,0,0,0)),
                            radial-gradient(1.5px 1.5px at 100px 150px, ${theme === 'dark' ? '#fff' : '#000'}, rgba(0,0,0,0)),
                            radial-gradient(1px 1px at 250px 350px, ${theme === 'dark' ? '#fff' : '#000'}, rgba(0,0,0,0)),
                            radial-gradient(2px 2px at 400px 50px, ${theme === 'dark' ? '#fff' : '#000'}, rgba(0,0,0,0)),
                            radial-gradient(1px 1px at 500px 200px, ${theme === 'dark' ? '#fff' : '#000'}, rgba(0,0,0,0)),
                            radial-gradient(1.5px 1.5px at 600px 400px, ${theme === 'dark' ? '#fff' : '#000'}, rgba(0,0,0,0))`,
                    backgroundSize: '700px 700px',
                    animation: 'stars-float 100s linear infinite'
                }}
            />

            {/* Secondary Star Layer (Slower) */}
            <div
                className="absolute inset-0 opacity-10 dark:opacity-20"
                style={{
                    backgroundImage: `radial-gradient(1px 1px at 50px 100px, ${theme === 'dark' ? '#fff' : '#000'}, rgba(0,0,0,0)),
                            radial-gradient(1px 1px at 200px 250px, ${theme === 'dark' ? '#fff' : '#000'}, rgba(0,0,0,0)),
                            radial-gradient(1.5px 1.5px at 350px 150px, ${theme === 'dark' ? '#fff' : '#000'}, rgba(0,0,0,0)),
                            radial-gradient(1px 1px at 550px 300px, ${theme === 'dark' ? '#fff' : '#000'}, rgba(0,0,0,0))`,
                    backgroundSize: '600px 600px',
                    animation: 'stars-float-slow 150s linear infinite'
                }}
            />

            <style jsx>{`
        @keyframes stars-float {
          from { transform: translateY(0); }
          to { transform: translateY(-700px); }
        }
        @keyframes stars-float-slow {
          from { transform: translateY(0); }
          to { transform: translateY(-600px); }
        }
      `}</style>
        </div>
    );
}
