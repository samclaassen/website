import Link from "next/link";
import type { PieceListPage } from "@/data/lists/types";
import { PhotoCredit } from "@/components/media/CreditedImage";
import { fullName } from "@/lib/pieces";
import { fromPrice, listPath, picksFor, topPick } from "@/lib/lists";
import { sitePhoto } from "@/lib/site-images";
import { ListVisual } from "./ListVisual";

/** Grid card for a list or gift guide: visual, kicker, title, the number one (or the price range), count. */
export function ListCard({ list, priority = false }: { list: PieceListPage; priority?: boolean }) {
  const href = listPath(list);
  const photo = list.image ? sitePhoto(list.image) : null;
  const n = picksFor(list).length;
  const ranked = list.type === "bifl";
  const top = topPick(list);
  const from = fromPrice(list);
  return (
    <article className="group">
      <Link href={href} className="block" tabIndex={-1} aria-hidden="true">
        <div className="transition-transform duration-300 group-hover:-translate-y-0.5">
          <ListVisual list={list} priority={priority} credit="none" />
        </div>
      </Link>
      {/* The credit sits outside the card link so its source link is separate. */}
      {photo && (
        <p className="mt-2">
          <PhotoCredit photo={photo} />
        </p>
      )}
      <Link href={href} className="block">
        <p className="lab mt-4">{list.kicker}</p>
        <h3 className="display text-[23px] leading-[1.15] mt-2 group-hover:text-terracotta transition-colors text-balance">
          {list.title}
        </h3>
        <p className="italic text-[16px] leading-snug text-caption mt-2">
          {ranked && top ? `Number one: ${fullName(top.piece)}` : list.question}
        </p>
        <span className="lab inline-block mt-3">
          {n} {ranked ? "ranked" : "gifts"}
          {!ranked && from ? ` · from ${from}` : ""} →
        </span>
      </Link>
    </article>
  );
}
