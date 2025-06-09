import { stageCollections } from "@/app/data";
import RaceCollection from "@/components/RaceCollection";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function CollectionPage({
  params,
}: {
  params: { collection: string };
}) {
  const { collection } = params;
  const data = stageCollections[collection];

  if (!data) return notFound();

  if (collection === "giro-2025") {
    return <GiroPage />;
  }
  return (
    <div className="px-6 py-10 max-w-6xl mx-auto text-white font-vcr">
      <h1 className="text-3xl sm:text-4xl text-black tracking-wide mb-8">
        {data.label}
      </h1>
      <Link
        href="/"
        className="text-[#d63384] hover:text-[#ad1457] text-sm uppercase underline mb-8 block"
      >
        ← Back to All Collections
      </Link>
      <RaceCollection collections={{ [collection]: data.stages }} />
    </div>
  );
}

export function GiroPage() {
  const collection = "giro-2025";
  const data = stageCollections[collection];
  if (!data) return notFound();

  return (
    <div className="min-h-screen px-6 py-12 font-mono bg-gradient-to-br from-[#ffe4ec] via-[#f6d1e5] to-[#ffebf2] text-[#1a1a1a] relative overflow-hidden">
      {/* Scanline Overlay */}
      <div className="pointer-events-none fixed inset-0 z-10 bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.03)_0px,rgba(0,0,0,0.03)_1px,transparent_1px,transparent_2px)]" />

      <div className="max-w-5xl mx-auto relative z-20">
        {/* Back Link */}
        <Link
          href="/"
          className="text-[#d63384] hover:text-[#ad1457] text-sm uppercase underline mb-8 block"
        >
          ← Back to All Collections
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl text-[#d63384] tracking-widest text-center drop-shadow-[0_0_4px_rgba(214,51,132,0.6)] mb-6 uppercase">
          Giro d’Italia 2025
        </h1>

        {/* Italian Flag Bar */}
        <div className="flex justify-center items-center gap-1 mb-10">
          <div className="w-6 h-3 bg-[#009246] rounded-sm" />
          <div className="w-6 h-3 bg-white rounded-sm border border-gray-300" />
          <div className="w-6 h-3 bg-[#ce2b37] rounded-sm" />
        </div>

        {/* Race Collection */}
        <RaceCollection collections={{ [collection]: data.stages }} />
      </div>
    </div>
  );
}
