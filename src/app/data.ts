export type StageHighlight = {
  slug: string;
  previewVideo: string;
  stage: string;
  winner: string;
  stageType?: "FLAT" | "HILLY" | "MOUNTAIN" | "ITT";
  coverImage?: string;
  teamLogo?: string;
  riderImage: string;
  description: string;
  coverColor?: string;
};

export const stageCollections: Record<
  string,
  {
    label: string;
    stages: StageHighlight[];
  }
> = {
  "giro-2025": {
    label: "Giro d’Italia 2025",
    stages: [
      {
        slug: "giro-stage-1",
        previewVideo: "/videos/giro-stage-1.mov",
        stage: "Stage 1 – Durrës to Tirana",
        stageType: "HILLY",
        winner: "Mads Pedersen",
        teamLogo: "/team-logos/lidl-trek.jpeg",
        riderImage: "/riders/pederson.jpg",
        coverImage: "/race-covers/giro-2025-stage-1.png",
        coverColor: "#DC143C",
        description:
          "Mads Pedersen (Lidl-Trek) claimed victory in the opening stage of the 2025 Giro d'Italia, a 160km route from Durrës to Tirana, Albania. Out-sprinting Wout van Aert, Pedersen secured both the stage win and the coveted maglia rosa (leader's pink jersey).",
      },
      {
        slug: "giro-stage-2",
        stage: "Stage 2 – Tirana ITT",
        stageType: "ITT",
        previewVideo: "/videos/giro-stage-2.mov",
        winner: "Josh Tarling",
        teamLogo: "/team-logos/ineos.jpeg",
        riderImage: "/riders/tarling.jpg",
        coverImage: "/race-covers/giro-2025-stage-2.png",
        description:
          "Josh Tarling (Ineos Grenadiers), at just 21 years old, made history as the youngest-ever winner of a Giro time trial by clocking 16:07 over the 13.7km course in Tirana. His performance edged out Primož Roglič by one second.",
      },
      {
        slug: "giro-stage-3",
        stage: "Stage 3 – Vlorë to Vlorë",
        stageType: "HILLY",
        previewVideo: "/videos/giro-stage-3.mov",
        winner: "Mads Pedersen",
        riderImage: "/riders/pederson.jpg",
        coverImage: "/race-covers/giro-2025-stage-3.png",
        description:
          "Mads Pedersen (Lidl-Trek) reclaimed the maglia rosa with a commanding sprint victory in Stage 3, a 160km loop starting and finishing in Vlorë, Albania. The stage featured the challenging Qafa e Llogarasë climb, but Pedersen's team controlled the race expertly, setting him up for a powerful finish ahead of Corbin Strong and Orluis Aular.",
      },
    ],
  },
  "milan-san-remo": {
    label: "Milan – Sanremo 2025",
    stages: [
      {
        slug: "milan-sanremo-2025",
        previewVideo: "/videos/milan-sanremo-2025.mov",
        stage: "Milano-Sanremo 2025",
        winner: "Mathieu van der Poel",
        riderImage: "/riders/mvdp.jpg",
        description:
          "Mathieu van der Poel claimed victory at the 2025 Milan–San Remo with a devastating solo attack over the Poggio. As the select group crested the final climb, he launched clear with perfect timing, carving the descent with fearless precision. Despite a hard-charging chase from top sprinters behind, Van der Poel held his gap all the way to the Via Roma, taking his second win in La Classicissima with trademark aggression and flair.",
      },
    ],
  },
};
