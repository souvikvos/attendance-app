"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Home, Info, Download } from "lucide-react"

const ICONS = {
    Home: Home,
    Features: Info,
    "Download APK": Download
}

const NAV_ITEMS = [
    { name: "Home", url: "top" },
    { name: "Features", url: "features-section" },
    { name: "Download APK", url: "download-section" },
]

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeTab, setActiveTab] = useState("Home")
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToIndex = (id: string) => {
        if (id === "top") {
            window.scrollTo({ top: 0, behavior: "smooth" })
        } else {
            if (id === "features-section") {
                window.scrollTo({ top: 3500, behavior: "smooth" });
            } else if (id === "download-section") {
                window.scrollTo({ top: 7200, behavior: "smooth" });
            } else {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }
        }
    }

    const showExpanded = !isScrolled || isMenuOpen

    return (
        <nav className="fixed top-0 left-0 right-0 z-[99999] pointer-events-none p-4 md:p-8">
            <div className="relative w-full max-w-7xl mx-auto flex items-start justify-between">
                
                {/* 1. Left Corner Pill (Logo) */}
                <motion.div
                    className="bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-black/10 dark:border-white/10 px-4 py-2 rounded-full shadow-xl pointer-events-auto flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                        opacity: (isScrolled && !isMenuOpen) ? 1 : 0,
                        x: (isScrolled && !isMenuOpen) ? 0 : -20,
                        scale: (isScrolled && !isMenuOpen) ? 1 : 0.8,
                        pointerEvents: (isScrolled && !isMenuOpen) ? "auto" : "none"
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                    <span className="font-black text-lg italic tracking-tighter text-black dark:text-white">Present</span>
                </motion.div>

                {/* 2. CENTER PILL */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 flex flex-col items-center pointer-events-none">
                    <motion.div
                        className="bg-zinc-100/95 dark:bg-zinc-900/95 border border-black/10 dark:border-white/10 backdrop-blur-3xl p-1.5 rounded-full shadow-2xl pointer-events-auto flex items-center"
                        initial={{ opacity: 1, y: 0 }}
                        animate={{
                            opacity: showExpanded ? 1 : 0,
                            y: showExpanded ? 0 : -20,
                            scale: showExpanded ? 1 : 0.9,
                            pointerEvents: showExpanded ? "auto" : "none"
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <div className="px-4 border-r border-black/10 dark:border-white/10 hidden sm:flex items-center gap-3">
                            <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                            <span className="font-black text-xl italic tracking-tighter text-black dark:text-white leading-none">Present</span>
                        </div>

                        <div className="flex items-center mx-1">
                            {NAV_ITEMS.map((item) => {
                                const Icon = ICONS[item.name as keyof typeof ICONS]
                                const isActive = activeTab === item.name
                                return (
                                    <button
                                        key={item.name}
                                        onClick={() => {
                                            scrollToIndex(item.url);
                                            setActiveTab(item.name);
                                            setIsMenuOpen(false);
                                        }}
                                        className={cn(
                                            "relative px-4 md:px-6 py-2.5 rounded-full font-bold transition-all text-sm flex items-center justify-center",
                                            isActive ? "text-black dark:text-white" : "text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white"
                                        )}
                                    >
                                        {isActive && <motion.div layoutId="active-nav-bg" className="absolute inset-0 bg-emerald-500/20 rounded-full" />}
                                        <span className="hidden md:inline relative z-10">{item.name}</span>
                                        <span className="md:hidden relative z-10 flex items-center gap-2">
                                            <Icon size={18} />
                                            {isActive && <span className="text-[10px] uppercase font-black">{item.name}</span>}
                                        </span>
                                    </button>
                                )
                            })}
                        </div>

                        <div className="pl-1.5 ml-1 border-l border-black/10 dark:border-white/10 flex items-center">
                            <ThemeToggle className="hover:bg-emerald-500/10 text-black dark:text-white" />
                        </div>
                    </motion.div>
                </div>

                {/* 3. Right Corner Pill (Hamburger / Close) */}
                <motion.button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={cn(
                        "bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-black/10 dark:border-white/10 p-4 rounded-full shadow-xl pointer-events-auto transition-colors",
                        isMenuOpen && "bg-emerald-500/10 border-emerald-500/30"
                    )}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                        opacity: isScrolled ? 1 : (isMenuOpen ? 1 : 0),
                        x: isScrolled ? 0 : (isMenuOpen ? 0 : 20),
                        scale: isScrolled ? 1 : 0.8,
                        pointerEvents: (isScrolled || isMenuOpen) ? "auto" : "none"
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {isMenuOpen ? (
                        <X size={24} className="text-emerald-500 rotate-0 hover:rotate-90 transition-transform duration-300" />
                    ) : (
                        <Menu size={24} className="text-black dark:text-white" />
                    )}
                </motion.button>
            </div>
        </nav>
    )
}
