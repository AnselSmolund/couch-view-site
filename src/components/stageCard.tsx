"use client";

import Link from "next/link";
import Image from "next/image";

type StageCardProps = {
  stage: {
    slug: string;
    title: string;
    winner: string;
    screenshot?: string;
    brandTag?: string;
  };
};

export default function StageCard({ stage }: StageCardProps) {
  return (
    <Link href={`/collections/giro-2025/${stage.slug}`}>
      <div className="relative w-full h-[480px] flex flex-col justify-between bg-black border border-neutral-700 rounded-md overflow-hidden shadow-md transition-transform hover:scale-[1.02] cursor-pointer">
        <div className="relative w-full h-[100%]">
          <Image
            src={stage.screenshot ?? "/race-covers/giro-2025-stage-1.png"}
            alt={stage.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
          {/* Optional retro brand tag */}
          {stage.brandTag && (
            <div className="absolute top-1 right-1 px-1 py-[2px] text-[9px] uppercase font-bold bg-red-600 text-white z-10">
              {stage.brandTag}
            </div>
          )}
        </div>

        {/* Text Label */}
        <div className="flex flex-col justify-between h-[30%] px-3 py-2 bg-black/85 text-white font-mono tracking-wide text-xs">
          <div className="font-bold leading-snug min-h-[2.25rem]">
            {stage.title}
          </div>
          <div className="text-neutral-300 text-[11px] min-h-[1.25rem]">
            Winner: {stage.winner}
          </div>
        </div>
      </div>
    </Link>
  );
}
