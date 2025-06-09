// components/TVScreen.tsx

import Image from "next/image";

export default function TVScreen() {
  return (
    <div className="relative w-[300px] sm:w-[500px] md:w-[500px] lg:w-[600px] mb-6 lg:mt-6 aspect-[1/0.95] mx-auto">
      {/* Video window — stays same size and position */}
      <div
        style={{ inset: "25.8% 17.3% 12.5% 11.2%", marginInline: 0 }}
        className="absolute z-0  rounded-[9px] overflow-hidden bg-black"
      >
        <video
          src="/videos/giro2025.mov"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* TV Frame — gets larger */}
      <Image
        src="/tv.png"
        alt="Retro TV"
        fill
        priority
        className="object-contain z-10 pointer-events-none select-none scale-[1.08]"
      />
    </div>
  );
}
