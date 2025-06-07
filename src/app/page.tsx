import React from "react";
import RecentEdits from "./recentEdits";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-crtBlack text-vhsRed font-vcr scanlines flex flex-col">
      {/* Content Wrapper */}
      <main className="flex-grow px-4 py-8 md:px-16 lg:px-32 text-center flex flex-col gap-10 items-center">
        {/* Title */}
        <h1 className="text-4xl text-vhsPurple glow-text tracking-widest mb-4">
          COUCH VIEW CYCLING CLIPS
        </h1>

        {/* Hero Video */}
        <section className="relative bg-black p-2 rounded-xl shadow-vhs-glow border-2 flicker-border max-w-[720px] w-full">
          <div className="aspect-[4/3] border-2 border-gray-900 overflow-hidden shadow-[0_0_80px_rgba(0,255,0,0.3)] relative">
            <video
              src="/videos/giro2025.mov"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Recent Edits */}
        <section className="w-full max-w-[1080px] px-2">
          <RecentEdits />
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center text-neutral-600 text-sm mt-12 pb-8">
        <p>couch view</p>
      </footer>
    </div>
  );
}
