import Link from "next/link";
import type { CareGuide } from "@/data/guides/types";
import { PhotoCredit } from "@/components/media/CreditedImage";
import { piecesFor, readingMinutes } from "@/lib/guides";
import { sitePhoto } from "@/lib/site-images";
import { GuideVisual } from "./GuideVisual";

/** Grid card for a care guide: visual, kicker, title, the question it answers, reading time. */
export function GuideCard({ guide, priority = false }: { guide: CareGuide; priority?: boolean }) {
  const href = `/care/${guide.slug}`;
  const photo = guide.image ? sitePhoto(guide.image) : null;
  const n = piecesFor(guide).length;
  return (
    <article className="group">
      <Link href={href} className="block" tabIndex={-1} aria-hidden="true">
        <div className="transition-transform duration-300 group-hover:-translate-y-0.5">
          <GuideVisual guide={guide} priority={priority} credit="none" />
        </div>
      </Link>
      {/* The credit sits outside the card link so its source link is separate. */}
      {photo && (
        <p className="mt-2">
          <PhotoCredit photo={photo} />
        </p>
      )}
      <Link href={href} className="block">
        <p className="lab mt-4">{guide.kicker}</p>
        <h3 className="display text-[23px] leading-[1.15] mt-2 group-hover:text-terracotta transition-colors">
          {guide.title}
        </h3>
        <p className="italic text-[16px] leading-snug text-caption mt-2">{guide.question}</p>
        <span className="lab inline-block mt-3">
          {readingMinutes(guide)} min read{n > 0 ? ` · ${n} pieces` : ""}
        </span>
      </Link>
    </article>
  );
}
