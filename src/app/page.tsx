import { CinematicHero } from "@/components/ui/cinematic-landing-hero";

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full min-h-screen">
      <CinematicHero
        brandName="BLE-Check"
        tagline1="Seamless check-ins,"
        tagline2="zero friction."
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
    </main>
  );
}
