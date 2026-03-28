"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion"; 
import { cn } from "@/lib/utils";
import {
  Mail,
  Heart,
  Code
} from "lucide-react";

/* -------------------------------------------------------------------
   1. TEXT HOVER EFFECT (The Dynamic SVG Layer)
---------------------------------------------------------------------- */

export const TextHoverEffect = ({
  text,
  duration,
  className,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn("select-none uppercase cursor-pointer", className)}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#10b981" /> 
              <stop offset="25%" stopColor="#3b82f6" /> 
              <stop offset="50%" stopColor="#8b5cf6" /> 
              <stop offset="75%" stopColor="#f59e0b" /> 
              <stop offset="100%" stopColor="#ec4899" /> 
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-black/10 dark:stroke-white/10 font-[helvetica] text-7xl font-bold"
        style={{ opacity: hovered ? 0.7 : 0 }}
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-emerald-500 font-[helvetica] text-7xl font-bold"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] text-7xl font-bold"
      >
        {text}
      </text>
    </svg>
  );
};

/* -------------------------------------------------------------------
   2. BACKGROUND GRADIENT
---------------------------------------------------------------------- */

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, var(--footer-bg-gradient-start) 50%, var(--footer-bg-gradient-end) 100%)",
      }}
    />
  );
};

/* -------------------------------------------------------------------
   3. GITHUB PROFILES WIDGET (Thread Rippers Team)
---------------------------------------------------------------------- */

export const GitHubProfiles = () => {
    const profiles = [
        { name: "souvikvos", url: "https://github.com/souvikvos", avatar: "https://github.com/souvikvos.png" },
        { name: "Sourodip-1", url: "https://github.com/Sourodip-1", avatar: "https://github.com/Sourodip-1.png" },
        { name: "yo-soyam", url: "https://github.com/yo-soyam", avatar: "https://github.com/yo-soyam.png" },
        { name: "Soumadip-max", url: "https://github.com/Soumadip-max", avatar: "https://github.com/Soumadip-max.png" }
    ];

    return (
        <div className="flex flex-col space-y-4">
            <h4 className="text-zinc-950 dark:text-white text-lg font-bold mb-2">Team Thread Rippers</h4>
            <div className="flex -space-x-4 overflow-hidden">
                {profiles.map((p, i) => (
                    <motion.a 
                        key={i}
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, zIndex: 10 }}
                        className="inline-block h-14 w-14 rounded-full border-2 border-emerald-500 bg-zinc-200 dark:bg-zinc-900 overflow-hidden relative group"
                    >
                        <img 
                            src={p.avatar} 
                            alt={p.name} 
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute top-16 left-1/2 -translate-x-1/2 bg-white dark:bg-black/95 backdrop-blur-md px-2 py-1 rounded text-[10px] text-zinc-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 border border-emerald-500/20 shadow-xl">
                            {p.name}
                        </div>
                    </motion.a>
                ))}
            </div>
            <p className="text-zinc-600 dark:text-zinc-500 text-xs italic font-medium flex items-center gap-2">
                <Code size={14} className="text-emerald-500" /> Shaping the future of attendance
            </p>
        </div>
    );
}

/* -------------------------------------------------------------------
   4. MAIN EXPORT: HOVER FOOTER
---------------------------------------------------------------------- */

export default function HoverFooter() {
  const customStyles = `
    :root {
      --footer-bg-gradient-start: #F4F4F566;
      --footer-bg-gradient-end: #10b98105;
    }
    .dark {
      --footer-bg-gradient-start: #0F0F1166;
      --footer-bg-gradient-end: #10b98111;
    }
  `;

  return (
    <footer className="bg-zinc-50 dark:bg-[#0b0c10]/40 relative h-fit rounded-t-[3rem] overflow-hidden md:mt-16 border-t border-black/5 dark:border-white/5 backdrop-blur-3xl transition-colors duration-500">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      <div className="max-w-7xl mx-auto p-8 md:px-14 md:pt-20 md:pb-14 z-40 relative">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
          
          {/* Brand section */}
          <div className="flex flex-col space-y-6 max-w-sm">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Present Logo" 
                className="w-12 h-12 rounded-xl object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.3)] dark:drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" 
              />
              <span className="text-zinc-950 dark:text-white text-4xl font-black tracking-tighter transition-colors">Present</span>
            </div>
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 font-light italic transition-colors">
              "The next-generation smart attendance solution built for speed, security, and precision."
            </p>
          </div>

          {/* GitHub & Contact section */}
          <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
              <GitHubProfiles />
              
              <div className="space-y-6">
                  <h4 className="text-zinc-950 dark:text-white text-lg font-bold transition-colors">Help & Support</h4>
                  <div className="group">
                    <a
                      href="mailto:presentapp.official@gmail.com"
                      className="flex items-center space-x-3 bg-black/5 dark:bg-white/5 hover:bg-emerald-500/10 border border-black/10 dark:border-white/10 hover:border-emerald-500/30 p-4 rounded-2xl transition-all duration-300"
                    >
                      <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-500 group-hover:scale-110 transition-transform">
                        <Mail size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-zinc-500 dark:text-zinc-500 text-[10px] uppercase font-bold tracking-widest transition-colors text-zinc-500/80">Email Support</span>
                        <span className="text-zinc-950 dark:text-white font-medium transition-colors">presentapp.official@gmail.com</span>
                      </div>
                    </a>
                  </div>
              </div>
          </div>
        </div>

        <hr className="border-t border-black/5 dark:border-white/5 my-12 transition-colors" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 text-zinc-600 dark:text-zinc-500">
          <p className="font-medium tracking-tight">
             Handcrafted by <span className="text-zinc-950 dark:text-white font-bold transition-colors">Thread Rippers</span> 
          </p>

          <p className="font-medium">
            &copy; {new Date().getFullYear()} Present. Developed with <Heart size={14} className="inline text-emerald-500 drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]" /> for the community.
          </p>
        </div>
      </div>

      {/* Text hover effect (Brand Signature) */}
      <div className="lg:flex hidden h-[30rem] -mt-40 -mb-32">
        <TextHoverEffect text="Thread Rippers" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
