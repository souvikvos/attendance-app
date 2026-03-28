"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { CinematicHero } from "@/components/ui/cinematic-landing-hero";

// Hydration-safe dynamic imports for interactive/client-only layers
const Navbar = dynamic(() => import("@/components/ui/mini-navbar").then((mod) => mod.Navbar), { ssr: false });
const StarsBackground = dynamic(() => import("@/components/ui/stars-background").then((mod) => mod.StarsBackground), { ssr: false });
const HoverFooter = dynamic(() => import("@/components/ui/hover-footer").then((mod) => mod.default), { ssr: false });

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative overflow-x-hidden w-full min-h-screen bg-black">
      {/* 
        CRITICAL HYDRATION FIX: 
        1. Stable, server-rendered components (Hero) are at the top.
        2. Dynamic, client-heavy components are added at the END to keep DOM indices stable during hydration.
      */}
      
      <CinematicHero
        brandName="Present"
        tagline1="Stop the roll call."
        tagline2="Just be present."
        cardHeading="Effortless Attendance."
        cardDescription={
          <>
            Mark presence automatically as you walk in using <span className="text-white font-semibold flex items-center gap-1 mt-1 font-mono">Bluetooth BLE</span>. No more queues or manual roll calls.
          </>
        }
        metricValue={100}
        metricLabel="Touchless"
        ctaHeading="Download & Go."
        ctaDescription="Experience immediate, proximity-based attendance tracking. Install our Android app and never wait in a roll-call line again."
      />

      {/* Dynamic components added last to ensure a stable hydration pass */}
      {mounted && (
        <div className="relative z-50">
          <StarsBackground />
          <Navbar />
          <HoverFooter />
        </div>
      )}
    </main>
  );
}
