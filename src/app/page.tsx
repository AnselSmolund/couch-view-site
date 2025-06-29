"use client";

import Link from "next/link";
import React from "react";
import { stageCollections } from "@/app/data";
import TVScreen from "@/components/TVScreen";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff8dc] via-[#f6e6a5] to-[#ffef99] text-[#1a1a1a] font-vcr">
      {" "}
      <main className="relative z-20 px-6 py-16 max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-1">
        <section className="w-full lg:w-1/2 flex-shrink-0">
          <TVScreen />
        </section>
        <section className="w-full lg:w-1/2 flex flex-col gap-6 items-center lg:items-start">
          <div className="uppercase text-center lg:text-left">
            <h1 className="text-5xl md:text-[80px] md:text-6xl font-bold text-[#008f4f] drop-shadow-[0_0_5px_rgba(0,143,79,0.6)] tracking-wider mb-2">
              Couch View
            </h1>
            <p className="text-sm md:text-base text-[#1a1a1a] tracking-[0.2em]">
              Cycling Clips
            </p>
          </div>{" "}
          <div className="text-center">
            <Link
              href="/all-videos"
              className="inline-block bg-green-400 text-black hover:bg-green-300 font-bold py-2 px-6 rounded-md border border-green-400 transition-all duration-200 tracking-wide"
            >
              📼 See All Videos
            </Link>
          </div>
          <div className="w-full flex flex-col gap-4 mt-1">
            {Object.entries(stageCollections).map(
              ([slug, { label, stages, theme }]) => {
                const isSingleStage = stages.length === 1;
                const href = isSingleStage
                  ? `/collections/${slug}/${stages[0].slug}`
                  : `/collections/${slug}`;

                const {
                  stripes,
                  bodyBg,
                  textColor = "text-white",
                } = getTapeTheme(theme);

                return (
                  <Link href={href} key={slug}>
                    <VhsTape
                      label={label}
                      stripes={stripes}
                      textColor={textColor}
                      isSingleStage={isSingleStage}
                      bodyBg={bodyBg}
                    />
                  </Link>
                );
              }
            )}
          </div>
          <div className="mt-2 text-center flex flex-row gap-4">
            <Link
              href="mailto:couchviewcc@gmail.com"
              className="inline-block bg-green-400 text-black hover:bg-green-300 font-bold py-2 px-6 rounded-md border border-green-400 transition-all duration-200 tracking-wide"
            >
              Email
            </Link>
            <Link
              href="https://www.instagram.com/couchview.cc/"
              className="inline-block bg-green-400 text-black hover:bg-green-300 font-bold py-2 px-6 rounded-md border border-green-400 transition-all duration-200 tracking-wide"
            >
              Instagram
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

const tapeThemes: Record<
  string,
  { stripes: string[]; bodyBg: string; textColor?: string }
> = {
  default: {
    stripes: ["bg-yellow-400", "bg-red-500", "bg-blue-500", "bg-green-500"],
    bodyBg: "bg-[#1a1d25]",
    textColor: "text-white",
  },
  pink: {
    stripes: ["bg-pink-300", "bg-pink-400", "bg-rose-400", "bg-fuchsia-600"],
    bodyBg: "bg-pink-300",
    textColor: "text-white",
  },
  rocky: {
    stripes: ["bg-gray-700", "bg-stone-500", "bg-black", "bg-zinc-800"],
    bodyBg: "bg-stone-700",
    textColor: "text-white",
  },
  flemish: {
    stripes: ["bg-yellow-300", "bg-yellow-500", "bg-black", "bg-yellow-700"],
    bodyBg: "bg-yellow-300",
    textColor: "text-black",
  },
  milanSanRemo: {
    stripes: ["bg-green-500", "bg-white", "bg-red-500", "bg-sky-400"],
    bodyBg: "bg-emerald-950", // deep sea greenish-blue
    textColor: "text-white",
  },
  dusty: {
    stripes: [
      "bg-amber-300",
      "bg-orange-400",
      "bg-stone-500",
      "bg-zinc-400",
      "bg-stone-400",
      "bg-amber-500",
    ],
    bodyBg: "bg-stone-800",
    textColor: "text-white",
  },
  // Add more if needed
};

function getTapeTheme(theme?: string) {
  return tapeThemes[theme ?? ""] || tapeThemes.default;
}

const VhsTape = ({
  stripes,
  textColor,
  label,
  isSingleStage,
  bodyBg,
}: {
  stripes: string[];
  textColor: string;
  label: string;
  isSingleStage: boolean;
  bodyBg: string;
}) => {
  return (
    <div
      className={`relative flex w-full h-[80px] rounded-md overflow-hidden border border-black group cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${bodyBg}`}
    >
      <div className="absolute inset-0 z-0 pointer-events-none bg-[url('/vhsTape.png')] opacity-10 mix-blend-screen" />
      <div className="flex flex-row z-10">
        {stripes.map((cls, i) => (
          <div key={i} className={`w-3 h-full ${cls}`} />
        ))}
      </div>

      <div
        className={`flex-1 flex items-center justify-between px-4 z-10 group-hover:brightness-110 transition`}
      >
        <span
          className={`${textColor} text-sm tracking-widest font-vcr uppercase`}
        >
          {label}
        </span>
        <span className={`${textColor} text-xs opacity-70 tracking-wide`}>
          {isSingleStage ? "STAGE" : "COLLECTION"}
        </span>
      </div>
    </div>
  );
};
