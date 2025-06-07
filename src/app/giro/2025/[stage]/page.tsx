"use client";

import StageTimelineNav from "@/components/stageTimelineNav";
import { useParams } from "next/navigation";
import Image from "next/image";
import { notFound } from "next/navigation";
import React, { use } from "react";

type StageSlug = "stage-1" | "stage-2" | "stage-3";

const stageData: Record<
  StageSlug,
  {
    title: string;
    videoSrc: string;
    recap: string;
    riderImage: string;
    winner: string;
  }
> = {
  "stage-1": {
    title: "Stage 1 – Durrës to Tirana",
    riderImage: "/riders/pederson.jpg",
    videoSrc: "/videos/giro-stage-1.mov",
    winner: "Mads Pedersen",
    recap:
      "Mads Pedersen (Lidl-Trek) claimed victory in the opening stage of the 2025 Giro d'Italia, a 160km route from Durrës to Tirana, Albania. Out-sprinting Wout van Aert, Pedersen secured both the stage win and the coveted maglia rosa (leader's pink jersey).",
  },
  "stage-2": {
    title: "Stage 2 – Tirana ITT",
    videoSrc: "/videos/giro-stage-2.mov",
    riderImage: "/riders/tarling.jpg",
    winner: "Josh Tarling",
    recap:
      "Josh Tarling (Ineos Grenadiers), at just 21 years old, made history as the youngest-ever winner of a Giro time trial by clocking 16:07 over the 13.7km course in Tirana. His performance edged out Primož Roglič by one second.",
  },
  "stage-3": {
    title: "Stage 3 – Vlorë to Vlorë",
    videoSrc: "/videos/giro-stage-3.mov",
    riderImage: "/riders/pederson.jpg",
    winner: "Mads Pedersen",
    recap:
      "Mads Pedersen (Lidl-Trek) reclaimed the maglia rosa with a commanding sprint victory in Stage 3, a 160km loop starting and finishing in Vlorë, Albania. The stage featured the challenging Qafa e Llogarasë climb, but Pedersen's team controlled the race expertly, setting him up for a powerful finish ahead of Corbin Strong and Orluis Aular.",
  },
};

const allStages = [
  { slug: "stage-1", label: "Stage 1" },
  { slug: "stage-2", label: "Stage 2" },
  { slug: "stage-3", label: "Stage 3" },
  // Add more as you go
];
export default function StagePage(paramsPromise: {
  params: Promise<{ stage: string }>;
}) {
  const { stage } = use(paramsPromise.params);
  const data = stageData[stage as StageSlug];

  if (!data) return notFound();

  return (
    <main className="px-6 py-1 max-w-3xl mx-auto">
      <div className="bg-muted/10 rounded-lg px-2 py-1 mb-1 overflow-x-auto">
        <StageTimelineNav stages={allStages} currentSlug={stage} />
      </div>
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>

      <div className="flex flex-col lg:flex-row gap-10 px-6 py-10 max-w-6xl mx-auto">
        <div className="w-full lg:w-1/2">
          <video
            src={data.videoSrc}
            controls
            playsInline
            className="w-full rounded-xl shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
          <p className="text-lg text-muted-foreground mb-4">{data.recap}</p>
          <div className="flex items-center gap-4">
            <Image
              src={data.riderImage}
              alt={data.winner}
              width={100}
              height={100}
              className="rounded-full shadow-md border"
            />
            <div>
              <p className="text-sm text-muted-foreground">Winner</p>
              <p className="text-md font-medium">{data.winner}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
