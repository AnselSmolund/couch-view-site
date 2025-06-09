"use client";

import { allStageHighlights } from "@/app/data";
import VideoHighlight from "@/components/VideoHighlight";

import Link from "next/link";

export default function AllVideosPage() {
  return (
    <main className="min-h-screen bg-black text-green-400 font-vcr px-4 py-12 md:px-8 lg:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-widest mb-2">
          ALL COUCH VIEW HIGHLIGHTS
        </h1>
        <p className="text-sm text-green-300 max-w-xl mx-auto">
          Click to play. Full coverage from the monuments to the mountains.
        </p>
      </div>

      {/* Video Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {allStageHighlights.map((stage) => (
          <VideoHighlight key={stage.slug} stage={stage} />
        ))}
      </div>

      {/* Back Button */}
      <div className="mt-20 text-center">
        <Link
          href="/"
          className="inline-block bg-green-400 text-black hover:bg-green-300 font-bold py-2 px-6 rounded-md border border-green-400 transition-all duration-200"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
