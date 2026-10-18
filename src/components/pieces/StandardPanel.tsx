import Link from "next/link";
import type { Piece } from "@/lib/piece-types";
import { CHECK_LABEL, CHECK_ORDER } from "@/lib/piece-types";
import { verifiedCount } from "@/lib/pieces";

/** Full-width linen panel: the five tests with a ✓ (or "Not yet verified") and a one-line reason. */
export function StandardPanel({ piece }: { piece: Piece }) {
  const n = verifiedCount(piece);
  return (
    <section id="standard" className="card-texture scroll-mt-8 px-6 py-10 sm:px-12 sm:py-14 lg:px-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="lab">The Heirloom Standard</p>
          <h2 className="display text-[30px] sm:text-[36px] leading-tight mt-2">How this piece measures up</h2>
        </div>
        <p className="lab text-umber">{n} of 5 tests verified</p>
      </div>
      <ul className="mt-8 grid gap-x-14 gap-y-6 md:grid-cols-2">
        {CHECK_ORDER.map((k, i) => {
          const c = piece.checks[k];
          const pass = c.status === "pass";
          return (
            <li key={k} className="grid grid-cols-[30px_1fr] text-[17px] leading-normal">
              <span
                className={`display text-[20px] leading-none pt-0.5 ${pass ? "text-terracotta" : "text-caption"}`}
                aria-hidden="true"
              >
                {pass ? "✓" : "◦"}
              </span>
              <div>
                <b className="block font-label font-semibold text-[13px] tracking-[0.1em] uppercase mb-1">
                  {i + 1}. {CHECK_LABEL[k]}
                  {!pass && <span className="block mt-0.5 font-medium normal-case tracking-normal text-caption">Not yet verified</span>}
                </b>
                <span className="sr-only">{pass ? "Passes. " : "Not yet verified. "}</span>
                {c.reason}
              </div>
            </li>
          );
        })}
        <li className="grid grid-cols-[30px_1fr] text-[17px] leading-normal">
          <span className="display text-[20px] leading-none pt-0.5 text-caption" aria-hidden="true">◦</span>
          <div>
            <b className="block font-label font-semibold text-[13px] tracking-[0.1em] uppercase mb-1">Made in</b>
            {piece.madeIn ?? "Not yet verified."}
            {!piece.madeIn && piece.makerBase ? ` The maker is based in ${piece.makerBase}.` : ""}
          </div>
        </li>
      </ul>
      {piece.worthKnowing && (
        <p className="mt-8 pt-6 border-t border-line text-[17px]">
          <b className="font-semibold">Worth knowing:</b> {piece.worthKnowing}
        </p>
      )}
      <p className="mt-6 text-[14px] text-caption font-label">
        &ldquo;Not yet verified&rdquo; means we haven&apos;t confirmed it from the maker yet, not that the piece fails.{" "}
        <Link href="/standard" className="link-underline text-umber">How we evaluate</Link>
      </p>
    </section>
  );
}
