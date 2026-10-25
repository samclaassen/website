import Link from "next/link";
import { Inline } from "@/components/guides/Inline";
import { PieceVisual, PieceVisualCaption } from "@/components/media/PieceVisual";
import { fullName, verifiedSummary } from "@/lib/pieces";
import { NOT_VERIFIED, type ResolvedPick } from "@/lib/lists";

/**
 * One piece on a list: its place (on ranked lists), the role it plays, our verdict, the facts
 * that matter from the piece data, anything worth knowing, and where to buy it. The full
 * five-test check lives on the piece page.
 */
export function ListEntry({ pick, ranked }: { pick: ResolvedPick; ranked: boolean }) {
  const p = pick.piece;
  const href = `/pieces/${p.slug}`;
  const earns = p.affiliate.status !== "none";
  const facts: [string, string][] = [
    ["Material", p.material],
    ["Made in", p.madeIn ?? NOT_VERIFIED],
    ["Warranty", p.warranty ?? NOT_VERIFIED],
    ["Standard", verifiedSummary(p)],
  ];

  return (
    <article
      id={p.slug}
      aria-labelledby={`${p.slug}-name`}
      className="scroll-mt-8 border-t border-line pt-9 pb-12 sm:grid sm:grid-cols-[190px_1fr] sm:gap-10 lg:grid-cols-[230px_1fr] lg:gap-14"
    >
      <div className="hidden sm:block">
        <Link href={href} tabIndex={-1} aria-hidden="true" className="block">
          <PieceVisual piece={p} caption={false} />
        </Link>
        <PieceVisualCaption piece={p} />
      </div>

      <div>
        <p className="flex items-baseline gap-3">
          {ranked && (
            <span className="display text-[34px] leading-none text-terracotta">
              <span className="sr-only">Number </span>
              {pick.rank}
            </span>
          )}
          <span className="lab text-umber">{pick.label}</span>
        </p>
        <h3 id={`${p.slug}-name`} className="display text-[28px] sm:text-[32px] leading-[1.1] mt-3 text-balance">
          <Link href={href} className="hover:text-terracotta transition-colors">
            {fullName(p)}
          </Link>
        </h3>
        <p className="mt-4 text-[18px] leading-[1.6]">
          <Inline text={pick.verdict} />
        </p>
        {pick.chooseIf && (
          <p className="mt-3 text-[16.5px] leading-normal">
            <span className="font-label font-semibold text-[12px] tracking-[0.1em] uppercase mr-2">Choose it if</span>
            <span className="text-caption">{pick.chooseIf}.</span>
          </p>
        )}

        <dl className="mt-6 grid border-t border-line sm:grid-cols-2 sm:gap-x-8 text-[15.5px]">
          {facts.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[96px_1fr] gap-3 py-2.5 border-b border-line">
              <dt className="lab pt-[3px]">{k}</dt>
              <dd className={v === NOT_VERIFIED ? "italic text-caption" : ""}>{v}</dd>
            </div>
          ))}
        </dl>

        {p.worthKnowing && (
          <p className="mt-4 text-[15.5px] leading-normal">
            <span className="font-label font-semibold text-[12px] tracking-[0.1em] uppercase mr-2">Worth knowing</span>
            {p.worthKnowing}
          </p>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a href={p.productUrl} className="btn" target="_blank" rel={earns ? "sponsored noopener" : "noopener"}>
            {p.price} at {p.retailer} →
          </a>
          <Link href={href} className="lab text-umber link-underline">
            The full check
          </Link>
        </div>
        {p.priceNote && <p className="mt-3 text-[13.5px] leading-snug text-caption font-label">{p.priceNote}</p>}
      </div>
    </article>
  );
}
