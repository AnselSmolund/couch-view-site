"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { useRef } from "react";

type StageCardProps = {
  stage: {
    slug: string;
    stage: string;
    winner: string;
    riderImage: string;
    profileImg: string;
    previewVideo: string;
    description: string;
  };
};

export default function StageCard({ stage }: StageCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play().catch((e) => {
        console.warn("Autoplay failed:", e);
      });
    }
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <Link href={`/giro/2025/${stage.slug}`}>
      <Card
        className="group relative overflow-hidden transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl cursor-pointer h-[400px] flex flex-col justify-between"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Hover Video Preview */}
        <video
          ref={videoRef}
          src={stage.previewVideo}
          muted
          playsInline
          preload="metadata"
          loop
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Foreground Content */}
        <CardContent className="relative z-10 h-full flex flex-col justify-between p-4">
          <div>
            <CardTitle className="text-lg font-semibold mb-2">
              {stage.stage}
            </CardTitle>
            <div className="w-full flex justify-center mb-4">
              <Image
                src={stage.riderImage}
                alt={stage.winner}
                width={80}
                height={80}
                className="rounded-full object-cover shadow-md"
              />
            </div>
            <p className="text-sm  text-center mb-3">Winner: {stage.winner}</p>
            <p className="text-sm  line-clamp-4">{stage.description}</p>
            {/* <div className="w-full flex justify-center mb-4">
              <Image
                src={stage.profileImg}
                alt={`${stage.stage} profile`}
                width={200}
                height={100}
                className="rounded-xl w-full h-full object-contain group-hover:opacity-0 transition-opacity duration-300"
              />
            </div> */}
          </div>

          <div className="flex items-center justify-end text-sm font-medium mt-4">
            <span className="mr-1">Watch Recap</span>
            <ArrowRightIcon className="w-4 h-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
