// components/StageTimelineNav.tsx
"use client";

import Link from "next/link";
import clsx from "clsx";
import { StageHighlight } from "@/app/data";

type Props = {
  stages: StageHighlight[];
  currentSlug: string;
};

export default function StageTimelineNav({ stages, currentSlug }: Props) {
  return (
    <nav className="w-full overflow-x-auto pb-2 pt-3 mb-4">
      <ul className="flex gap-3 whitespace-nowrap px-2">
        {stages.map((stage) => (
          <li key={stage.slug}>
            <Link
              href={`/collections/giro-2025/${stage.slug}`}
              className={clsx(
                "px-4 py-2 rounded-full border text-sm font-medium transition-all",
                stage.slug === currentSlug
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-muted text-muted-foreground hover:bg-muted"
              )}
            >
              {stage.stage}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
