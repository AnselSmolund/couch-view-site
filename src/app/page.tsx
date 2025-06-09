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
            <h1 className="text-5xl md:text-6xl font-bold text-[#008f4f] drop-shadow-[0_0_5px_rgba(0,143,79,0.6)] tracking-wider mb-2">
              Couch View
            </h1>
            <p className="text-sm md:text-base text-[#1a1a1a] tracking-[0.2em]">
              Cycling Clips
            </p>
          </div>

          <div className="w-full flex flex-col gap-4 mt-6">
            {Object.entries(stageCollections).map(
              ([slug, { label, stages }]) => {
                const isSingleStage = stages.length === 1;
                const href = isSingleStage
                  ? `/collections/${slug}/${stages[0].slug}` // ➡️ go straight to the stage
                  : `/collections/${slug}`; // ➡️ open full collection

                return (
                  <Link href={href} key={slug}>
                    <button className="group w-full px-6 py-4 rounded-md uppercase tracking-widest text-sm bg-black border border-[#a34fff] text-[#a34fff] shadow-[0_0_8px_rgba(163,79,255,0.5)] hover:bg-[#2d0b38] hover:text-[#ff2d2d] transition-all duration-300 text-left">
                      {label}
                    </button>
                  </Link>
                );
              }
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
