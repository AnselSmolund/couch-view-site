import { stageCollections } from "@/app/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    collection: string;
    stage: string;
  };
};

export default function StagePage({ params }: Props) {
  const { collection, stage } = params;
  const data = stageCollections[collection];

  if (!data) return notFound();
  const collectionData = stageCollections[collection];
  const currentStage = data.stages.find((s) => s.slug === stage);
  if (!currentStage) return notFound();
  const isSingleStageCollection = collectionData.stages.length === 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffe4ec] via-[#f6d1e5] to-[#ffebf2] text-[#1a1a1a] font-mono relative overflow-hidden">
      {/* Scanlines */}
      <div className="pointer-events-none fixed inset-0 z-10 bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.03)_0px,rgba(0,0,0,0.03)_1px,transparent_1px,transparent_2px)]" />

      <div className="max-w-6xl mx-auto px-4 py-10 relative z-20">
        {/* Back link */}
        <Link
          href={isSingleStageCollection ? "/" : `/collections/${collection}`}
          className="text-[#8c6b00] hover:text-[#c29300] text-sm uppercase underline mb-6 inline-block"
        >
          ← {isSingleStageCollection ? "Back to Home" : "View other stages"}
        </Link>
        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Video */}
          <div className="lg:w-[400px]  sm:w-full rounded-xl overflow-hidden border-2 border-[#ad1457] shadow-[0_0_24px_rgba(214,51,132,0.3)]">
            <video
              src={currentStage.previewVideo}
              controls
              className="w-full h-auto"
              autoPlay={true}
            />
          </div>

          {/* Textual Details */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start">
            <h1 className="text-2xl sm:text-3xl text-[#d63384] drop-shadow-[0_0_4px_rgba(214,51,132,0.6)] mb-4">
              {currentStage.stage}
            </h1>
            <p className="text-base leading-relaxed">
              {currentStage.description}
            </p>
            {/* Winner image */}
            {currentStage.riderImage && (
              <div className="mb-4 flex justify-start">
                <Image
                  src={currentStage.riderImage}
                  alt={currentStage.winner}
                  width={200}
                  height={100}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
