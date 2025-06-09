"use client";

import { StageHighlight } from "@/app/data";
import { useRef, useState } from "react";
import { PlayIcon } from "lucide-react";
import Image from "next/image";

export default function VideoHighlight({ stage }: { stage: StageHighlight }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  const handleStart = () => setIsReady(true);

  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-4 shadow-xl flex flex-col items-start hover:shadow-vhs-glow transition min-h-[500px]">
      <h2 className="text-green-300 text-lg font-bold mb-3">{stage.stage}</h2>

      <div
        className="relative w-full h-[500px] rounded-md border border-zinc-700 overflow-hidden cursor-pointer group"
        onClick={!isReady ? handleStart : undefined}
      >
        {!isReady ? (
          <>
            <Image
              src={stage.coverImage ?? "/race-covers/giro-2025-stage-1.png"}
              alt={stage.stage}
              className="w-full h-full object-cover"
              width={800}
              height={500}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition">
              <PlayIcon className="w-12 h-12 text-white drop-shadow-lg" />
            </div>
          </>
        ) : (
          <video
            ref={videoRef}
            src={stage.previewVideo}
            className="w-full h-full object-cover"
            controls
            height={500}
            autoPlay={true}
          />
        )}
      </div>
    </div>
  );
}
