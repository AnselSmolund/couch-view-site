"use client";
import Image from "next/image";
import React from "react";
import { StagePreivews } from "./data";

export default function TourPreviewPage() {
  return (
    <div className="bg-yellow-400 min-h-screen text-black font-mono px-4 py-8 space-y-12">
      <h1 className="text-4xl text-center font-bold tracking-widest">
        TOUR DE FRANCE PREVIEW
      </h1>
      {StagePreivews.map((stage) => (
        <div
          key={stage.number}
          className="max-w-6xl mx-auto bg-yellow-300 px-6 pt-4 rounded-xl shadow-lg relative overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-1 items-center relative">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-1">STAGE {stage.number}</h2>
              <p className="text-sm mb-2">
                {stage.date} — {stage.distance} — {stage.type}
              </p>
              <h3 className="text-xl font-bold mb-3 uppercase">
                {stage.route}
              </h3>
              <p className="text-2xl mb-4">
                COUCH RATING: <span>{stage.rating}</span>
              </p>
              <p
                className="mb-4 text-[16px]"
                style={{
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontWeight: 900,
                  lineHeight: 0.85,
                }}
              >
                {stage.description}
              </p>
              <p className="font text-xl mt-1">
                COUCH VIEW PICK: <br />
                <span className="text-2xl font-bold">{stage.pick}</span>
              </p>
            </div>

            <div className="relative w-full h-[400px] md:h-[300px] z-0">
              {/* Route behind */}
              <Image
                src={stage.routeImg}
                alt={`Route map for Stage ${stage.number}`}
                fill
                className="object-contain opacity-100 z-0"
                priority
              />
              {/* Rider on top */}
              <Image
                src={stage.riderImg}
                alt={stage.pick}
                fill
                className="object-contain z-10"
                priority
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
