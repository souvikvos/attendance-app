'use client'

import React from 'react'
import { Globe, Mail, MessageSquare, ArrowRight, Hexagon } from 'lucide-react'

export function NeoMinimalFooter() {
    return (
        <footer className="max-w-7xl mx-auto bg-card/10 border-t rounded-t-lg border-card/10 flex flex-wrap pt-16 pb-8 relative overflow-hidden mt-20">

            {/* Background Tech Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

            <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
                <div className="flex flex-col items-center justify-center py-12 border-b border-white/5 mb-8">
                    <div className="flex items-center gap-2 mb-6">
                        <Hexagon className="text-emerald-500 fill-emerald-500/10 animate-pulse" size={32} />
                        <h2 className="text-3xl font-bold tracking-tighter text-foreground uppercase">
                            PRESENT
                        </h2>
                    </div>

                    <p className="text-lg font-medium text-muted-foreground flex items-center gap-2 mb-2">
                        MADE WITH LOVE ❤️ BY
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xl font-bold tracking-tight text-foreground uppercase">
                        <span>SOUVIK</span>
                        <span className="w-1 h-1 rounded-full bg-emerald-500" />
                        <span>SOURODIP</span>
                        <span className="w-1 h-1 rounded-full bg-emerald-500" />
                        <span>SOUMODEEP</span>
                        <span className="w-1 h-1 rounded-full bg-emerald-500" />
                        <span>SOYAM</span>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
                    <p className="text-xs text-gray-600 font-mono">
                        &copy; {new Date().getFullYear()} PRESENT. ALL RIGHTS RESERVED.
                    </p>

                    <div className="flex items-center gap-6">
                        {/* Socials - Integrated Horizontal */}
                        <div className="flex gap-4 border-r border-white/10 pr-6 mr-2">
                            {[Globe, Mail, MessageSquare].map((Icon, i) => (
                                <a key={i} href="#" className="text-gray-600 hover:text-white transition-colors">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>

                        {/* Status */}
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/5 border border-green-500/10">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[10px] uppercase font-medium text-green-500/80 tracking-wider">All Systems Normal</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
