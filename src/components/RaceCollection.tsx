"use client";

import React from "react";
import { StageHighlight } from "@/app/data";
import StageCard from "./StageCard";

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
