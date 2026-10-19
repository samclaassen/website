import type { Piece } from "@/lib/piece-types";
import { PRICE_CHECKED, PRICE_CHECKED_DISPLAY } from "@/data/pieces";

export function BuyCard({ piece }: { piece: Piece }) {
  const earns = piece.affiliate.status !== "none";
  return (
    <section aria-labelledby="buy-heading" className="border-t border-line pt-5">
      <h2 id="buy-heading" className="lab mb-1">Where to buy</h2>
      <div className="flex flex-wrap items-center justify-between gap-3 py-3 border-b border-line font-label text-[16px]">
        <span>
          {piece.retailer} · <b className="font-semibold">{piece.price}</b>
        </span>
        <a
          href={piece.productUrl}
          className="btn"
          target="_blank"
          rel={earns ? "sponsored noopener" : "noopener"}
        >
          Visit {piece.retailer === piece.maker ? "maker" : "retailer"} →
        </a>
      </div>
      {piece.priceNote && <p className="mt-3 text-[14px] text-caption">{piece.priceNote}</p>}
      <p className="mt-3 text-[13px] leading-snug text-caption font-label">
        Price checked <time dateTime={PRICE_CHECKED}>{PRICE_CHECKED_DISPLAY}</time>.{" "}
        {earns
          ? "We may earn a commission from this link; it never decides what we include."
          : "We don't earn a commission from this link. It's here because the piece meets the Standard."}
      </p>
    </section>
  );
}
