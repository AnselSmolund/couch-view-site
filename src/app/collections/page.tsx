"use client";

import Link from "next/link";
import { stageCollections } from "@/app/data";

export default function CollectionsPage() {
  return (
    <div className="min-h-screen px-6 py-12 font-mono bg-gradient-to-br from-[#1e1e2f] via-[#2d0b38] to-[#0c0c1c] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-20">
        <h1 className="text-4xl md:text-5xl text-center text-[#a34fff] drop-shadow-[0_0_5px_rgba(163,79,255,0.6)] tracking-widest mb-12">
          CHOOSE YOUR TAPE
        </h1>

        <div className="flex flex-col gap-8">
          {Object.entries(stageCollections).map(([slug, { label }]) => (
            <Link href={`/collections/${slug}`} key={slug}>
              <div className="group relative bg-black border border-[#a34fff] rounded-xl px-6 py-5 shadow-[0_0_12px_rgba(163,79,255,0.5)] hover:shadow-[0_0_24px_rgba(255,45,45,0.6)] hover:bg-[#2d0b38] transition-all duration-300 cursor-pointer">
                <h2 className="text-xl md:text-2xl uppercase tracking-wide text-[#a34fff] group-hover:text-[#ff2d2d] transition-colors duration-300">
                  {label}
                </h2>
                <div className="absolute bottom-1 right-3 text-xs text-neutral-500 group-hover:text-[#ff2d2d] transition">
                  View Collection →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
