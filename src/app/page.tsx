import { CinematicHero } from "@/components/ui/cinematic-landing-hero";
import { NeoMinimalFooter } from "@/components/ui/neo-minimal-footer";
import { Navbar } from "@/components/ui/mini-navbar";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden w-full min-h-screen">
      <StarsBackground />
      <Navbar />
      <CinematicHero
        brandName="Present"
        tagline1="Stop the roll call."
        tagline2="Just be present."
        cardHeading="Effortless Attendance."
        cardDescription={
          <>
            Mark presence automatically as you walk in using <span className="text-white font-semibold flex items-center gap-1 mt-1">Bluetooth Low Energy.</span> No more queues or manual roll calls.
          </>
        }
        metricValue={100}
        metricLabel="Touchless"
        ctaHeading="Download & Go."
        ctaDescription="Experience immediate, proximity-based attendance tracking. Install our Android app and never wait in a roll-call line again."
      />
      <NeoMinimalFooter />
    </main>
  );
}
