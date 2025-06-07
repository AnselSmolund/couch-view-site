"use client";

import StageCard from "@/components/stageCard";

const stageHighlights = [
  {
    slug: "stage-1",
    previewVideo: "/videos/giro-stage-1.mov",
    stage: "Stage 1 – Durrës to Tirana",
    winner: "Mads Pedersen",
    teamLogo: "/team-logos/lidl-trek.jpeg",
    riderImage: "/riders/pederson.jpg",
    profileImg: "/giro-stage-profiles/stage-1.avif",
    description:
      "Mads Pedersen (Lidl-Trek) claimed victory in the opening stage of the 2025 Giro d'Italia, a 160km route from Durrës to Tirana, Albania. Out-sprinting Wout van Aert, Pedersen secured both the stage win and the coveted maglia rosa (leader's pink jersey).",
  },
  {
    slug: "stage-2",
    stage: "Stage 2 – Tirana ITT",
    previewVideo: "/videos/giro-stage-2.mov",
    winner: "Josh Tarling",
    teamLogo: "/team-logos/ineos.jpeg",
    riderImage: "/riders/tarling.jpg",
    profileImg: "/giro-stage-profiles/stage-2.jpeg",
    description:
      "Josh Tarling (Ineos Grenadiers), at just 21 years old, made history as the youngest-ever winner of a Giro time trial by clocking 16:07 over the 13.7km course in Tirana. His performance edged out Primož Roglič by one second.",
  },
  {
    slug: "stage-3",
    stage: "Stage 3 – Vlorë to Vlorë",
    previewVideo: "/videos/giro-stage-3.mov",
    winner: "Mads Pedersen",
    riderImage: "/riders/pederson.jpg",
    profileImg: "/giro-stage-profiles/stage-3.jpeg",
    description:
      "Mads Pedersen (Lidl-Trek) reclaimed the maglia rosa with a commanding sprint victory in Stage 3, a 160km loop starting and finishing in Vlorë, Albania. The stage featured the challenging Qafa e Llogarasë climb, but Pedersen's team controlled the race expertly, setting him up for a powerful finish ahead of Corbin Strong and Orluis Aular.",
  },
];

export default function RecentEdits() {
  return (
    <section className="py-10 px-6">
      <h2 className="text-3xl font-bold mb-6">Giro D'Italia 2025</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {stageHighlights.map((stage, index) => (
          <StageCard key={index} stage={stage} />
        ))}
      </div>
    </section>
  );
}
