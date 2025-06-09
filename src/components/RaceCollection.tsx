"use client";

import React from "react";
import { StageHighlight } from "@/app/data";
import Link from "next/link";
import Image from "next/image";

type RaceCollectionProps = {
  collections: Record<string, StageHighlight[]>;
};

export default function RaceCollection({ collections }: RaceCollectionProps) {
  return (
    <div className="flex flex-col gap-16">
      {Object.entries(collections).map(([label, stages]) => (
        <section key={label}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-1">
            {stages.map((stage) => (
              <StageCard
                key={stage.slug}
                stage={{
                  slug: stage.slug,
                  title: stage.stage,
                  winner: stage.winner,
                  screenshot: stage.coverImage,
                  brandTag: stage.stageType,
                }}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

type StageCardProps = {
  stage: {
    slug: string;
    title: string;
    winner: string;
    screenshot?: string;
    brandTag?: string;
  };
};

function StageCard({ stage }: StageCardProps) {
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
          {stage.brandTag && (
            <div className="absolute top-1 right-1 px-1 py-[2px] text-[9px] uppercase font-bold bg-red-600 text-white z-10">
              {stage.brandTag}
            </div>
          )}
        </div>

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
