"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from "next-themes";
import { Sun, Moon, Download } from "lucide-react";

const AnimatedNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const defaultTextColor = 'text-gray-300';
    const hoverTextColor = 'text-white';
    const textSizeClass = 'text-sm';

    return (
        <a href={href} className={`group relative inline-block overflow-hidden h-5 flex items-center ${textSizeClass}`}>
            <div className="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2">
                <span className={defaultTextColor}>{children}</span>
                <span className={hoverTextColor}>{children}</span>
            </div>
        </a>
    );
};

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [headerShapeClass, setHeaderShapeClass] = useState('rounded-full');
    const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (shapeTimeoutRef.current) {
            clearTimeout(shapeTimeoutRef.current);
        }

        if (isOpen) {
            setHeaderShapeClass('rounded-xl');
        } else {
            shapeTimeoutRef.current = setTimeout(() => {
                setHeaderShapeClass('rounded-full');
            }, 300);
        }

        return () => {
            if (shapeTimeoutRef.current) {
                clearTimeout(shapeTimeoutRef.current);
            }
        };
    }, [isOpen]);

    const logoElement = (
        <div className="flex items-center gap-2.5">
            <div className="relative w-7 h-7 flex items-center justify-center">
                <img
                    src="/logo.png"
                    alt="Present Logo"
                    className="w-full h-full object-contain filter brightness-110 drop-shadow-[0_0_8px_rgba(16,185,129,0.3)] transition-all duration-300 group-hover:scale-110"
                />
            </div>
            <span className="text-white font-bold tracking-tight text-base uppercase bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                Present
            </span>
        </div>
    );

    const navLinksData = [
        { label: 'Home', href: '/' },
        { label: 'Features', href: '#features' },
        { label: 'About', href: '#about' },
    ];

    const themeToggleElement = (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-gray-300 hover:text-white"
            aria-label="Toggle theme"
        >
            {mounted && theme === "dark" ? (
                <Sun className="w-4 h-4" />
            ) : (
                <Moon className="w-4 h-4" />
            )}
        </button>
    );

    const downloadButtonElement = (
        <a
            href="/present-attendance-dummy.apk"
            download="present-attendance.apk"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-black bg-gradient-to-br from-emerald-100 to-emerald-300 rounded-full hover:from-emerald-200 hover:to-emerald-400 transition-all duration-200 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
        >
            <Download className="w-3.5 h-3.5" />
            <span>Download APK</span>
        </a>
    );

    return (
        <header className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50
                       flex flex-col items-center
                       pl-6 pr-6 py-3 backdrop-blur-md
                       ${headerShapeClass}
                       border border-white/10 bg-[#0a0a0acc]
                       w-[calc(100%-2rem)] sm:w-auto
                       transition-[border-radius] duration-0 ease-in-out`}>

            <div className="flex items-center justify-between w-full gap-x-8 sm:gap-x-12">
                <div className="flex items-center shrink-0">
                    {logoElement}
                </div>

                <nav className="hidden lg:flex items-center space-x-8 text-sm">
                    {navLinksData.map((link) => (
                        <AnimatedNavLink key={link.href} href={link.href}>
                            {link.label}
                        </AnimatedNavLink>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-3">
                    {downloadButtonElement}
                    {themeToggleElement}
                </div>

                <button className="md:hidden flex items-center justify-center w-8 h-8 text-gray-300 focus:outline-none" onClick={toggleMenu} aria-label={isOpen ? 'Close Menu' : 'Open Menu'}>
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    )}
                </button>
            </div>

            <div className={`md:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
                       ${isOpen ? 'max-h-[1000px] opacity-100 pt-4' : 'max-h-0 opacity-0 pt-0 pointer-events-none'}`}>
                <nav className="flex flex-col items-center space-y-4 text-base w-full pb-6 border-b border-white/5">
                    {navLinksData.map((link) => (
                        <a key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors w-full text-center">
                            {link.label}
                        </a>
                    ))}
                </nav>
                <div className="flex flex-col items-center gap-4 mt-6 w-full pb-4">
                    {downloadButtonElement}
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span>Switch Theme</span>
                        {themeToggleElement}
                    </div>
                </div>
            </div>
        </header>
    );
}
