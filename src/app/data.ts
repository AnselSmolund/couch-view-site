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
  "milan-san-remo-2025": {
    label: "Milan – Sanremo 2025",
    stages: [
      {
        slug: "milan-sanremo-2025",
        previewVideo: "/videos/milan-sanremo-2025.mov",
        stage: "Milano-Sanremo 2025",
        winner: "Mathieu van der Poel",
        riderImage: "/riders/mvdp.jpg",
        coverImage: "/race-covers/milan-san-remo-2025.png",
        description:
          "Mathieu van der Poel claimed victory at the 2025 Milan–San Remo with a devastating solo attack over the Poggio. As the select group crested the final climb, he launched clear with perfect timing, carving the descent with fearless precision. Despite a hard-charging chase from top sprinters behind, Van der Poel held his gap all the way to the Via Roma, taking his second win in La Classicissima with trademark aggression and flair.",
      },
    ],
  },
  "paris-roubaix-2025": {
    label: "Paris–Roubaix 2025",
    stages: [
      {
        slug: "paris-roubaix-2025",
        stage: "Paris–Roubaix 2025",
        previewVideo: "/videos/paris-roubaix-2025.mov",
        winner: "Mathieu van der Poel",
        riderImage: "/riders/mvdp.jpg",
        teamLogo: "/team-logos/alpecin.jpg",
        coverImage: "/race-covers/paris-roubaix-2025.png",
        description:
          "Mathieu van der Poel (Alpecin–Deceuninck) stormed to a third straight Paris–Roubaix victory on April 13, 2025, becoming the first rider since Francesco Moser to win three in a row. Launching his attack after a chaotic moment involving Tadej Pogačar’s crash and puncture, Van der Poel soloed through the Carrefour de l’Arbre with remarkable composure despite suffering a flat tire himself. He finished 1:18 ahead of Pogačar, with Mads Pedersen completing the podium after a bruising 259 km across the cobbles of northern France.",
      },
    ],
  },
  "ronde-van-vlaanderen-2025": {
    label: "Ronde van Vlaanderen 2025",
    stages: [
      {
        slug: "ronde-van-vlaanderen-2025",
        stage: "Ronde van Vlaanderen 2025",
        previewVideo: "/videos/flanders-2025.mov",
        winner: "Tadej Pogačar",
        riderImage: "/riders/tadej.png",
        teamLogo: "/team-logos/uae.jpg",
        coverImage: "/race-covers/flanders-2025.png",
        description:
          "Tadej Pogačar (UAE Team Emirates) powered to a dominant victory in the 109th Tour of Flanders on April 6, 2025. His decisive attack came on the second ascent of the Oude Kwaremont, and he rode solo over the final 18 km to the finish in Oudenaarde, crossing the line more than a minute ahead of strong chasers Mads Pedersen and Mathieu van der Poel. Pogačar became only the fourth rider in history to claim multiple Ronde titles, cementing his status as one of cycling’s all-time greats.",
      },
    ],
  },
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
      {
        slug: "giro-stage-4",
        stage: "Stage 4 – Alberobello to Lecce",
        stageType: "FLAT",
        previewVideo: "/videos/giro-stage-4.mov",
        winner: "Casper van Uden",
        riderImage: "/riders/van-uden.jpg",
        teamLogo: "/team-logos/dsm.jpg",
        coverImage: "/race-covers/giro-2025-stage-4.png",
        description:
          "Casper van Uden (Team dsm–firmenich) sprinted to a surprise victory on the flat 189 km route from Alberobello to Lecce. It marked the Giro’s return to Italian soil — an unexpected breakthrough for the Dutch sprinter on a day that favored pure speedsters.",
      },
      {
        slug: "giro-stage-5",
        stage: "Stage 5 – Ceglie Messapica to Matera",
        stageType: "HILLY",
        previewVideo: "/videos/giro-stage-5.mov",
        winner: "Mads Pedersen",
        riderImage: "/riders/pederson.jpg",
        teamLogo: "/team-logos/lidl-trek.jpeg",
        coverImage: "/race-covers/giro-2025-stage-5.png",
        description:
          "151 km day from Ceglie Messapica to Matera featured rolling terrain and two sprint points. Mads Pedersen*(Lidl–Trek) powered through a reduced finale to take the win at the iconic cave-city finish, showcasing his punchy sprinting ability.",
      },
      {
        slug: "giro-stage-7",
        stage: "Stage 7 – Castel di Sangro to Tagliacozzo",
        stageType: "MOUNTAIN",
        previewVideo: "/videos/giro-stage-7.mov",
        winner: "Juan Ayuso",
        riderImage: "/riders/ayuso.jpg",
        teamLogo: "/team-logos/uae.jpg",
        coverImage: "/race-covers/giro-2025-stage-7.png",
        description:
          "Riders tackled a grueling 168 km mountain stage from Castel di Sangro to Tagliacozzo in the Apennines. Juan Ayuso (UAE Team Emirates) broke clear in the finale to take a sharp uphill solo win, highlighting his climbing prowess and GC ambitions.",
      },
    ],
  },
};

export const allStageHighlights: StageHighlight[] = Object.values(
  stageCollections
).flatMap((collection) => collection.stages);
