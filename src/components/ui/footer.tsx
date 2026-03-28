import React from "react";

export function Footer() {
    return (
        <footer className="w-full bg-[#051c1c] text-white py-20 px-6 md:px-12 lg:px-24 border-t border-emerald-500/10 relative overflow-hidden group">
            {/* Subtle Mesh Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-transparent to-blue-950/20 opacity-50 group-hover:opacity-70 transition-opacity duration-1000" />

            <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
                {/* Large "PRESENT" Branding */}
                <div className="mb-12">
                    <h2 className="text-[14vw] md:text-[10vw] lg:text-[160px] font-black tracking-tighter leading-none select-none transition-all duration-700
                                   bg-gradient-to-b from-white via-white to-emerald-200/40 bg-clip-text text-transparent hover:tracking-[-0.05em]">
                        PRESENT
                    </h2>
                </div>

                {/* Footer Bottom Metadata */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs font-medium text-emerald-100/30 gap-6 mt-12 pt-8 border-t border-white/5">
                    <div className="flex items-center gap-2 group-hover:text-emerald-100/50 transition-colors">
                        <span>© 2026 Present.</span>
                        <span className="opacity-40">Built with ❤️ in India.</span>
                    </div>

                    <div className="flex items-center gap-1 order-first md:order-last px-3 py-1 transparent-badge rounded-full border border-emerald-500/10 bg-emerald-500/5 hover:border-emerald-500/30 transition-all">
                        <span className="opacity-40">Made by</span>
                        <span className="text-emerald-50/70 font-bold group-hover:text-white transition-colors">Sourodip, Souvik & Soyam</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
