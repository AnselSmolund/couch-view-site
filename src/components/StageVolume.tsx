import { StageHighlight } from "@/app/data";
import Link from "next/link";

export default function StageVolume({ slug, stage, winner }: StageHighlight) {
  return (
    <Link href={`/stage/${slug}`} key={slug}>
      <div className="relative bg-gradient-to-br from-neutral-800 to-black border border-gray-700 rounded-md p-3 w-[180px] h-[280px] cursor-pointer hover:scale-[1.02] transition-transform shadow-vhs-glow flex flex-col justify-between">
        <div className="h-[70%] bg-vhsTape-gray border border-neutral-600 rounded-sm shadow-inner mb-2" />
        <div className="text-left text-xs font-mono text-neutral-400">
          <p className="text-white leading-tight line-clamp-2">{stage}</p>
          <p className="text-neutral-500">Winner: {winner}</p>
        </div>
      </div>
    </Link>
  );
}
