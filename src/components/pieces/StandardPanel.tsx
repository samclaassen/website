import Link from "next/link";
import type { Piece } from "@/lib/piece-types";
import { CHECK_LABEL, CHECK_ORDER } from "@/lib/piece-types";
import { verifiedSummary } from "@/lib/pieces";

const MARK = { pass: "✓", partial: "◐", unverified: "◦" } as const;
const MARK_CLASS = { pass: "text-terracotta", partial: "text-umber", unverified: "text-caption" } as const;
const STATE_LABEL = { pass: "Passes", partial: "Partial", unverified: "Not yet verified" } as const;

/**
 * Full-width linen panel: the five tests with a ✓, a "Partial" (verified but falls short) or
 * "Not yet verified", each with a one-line reason. "Made in" sits apart from the five tests.
 */
export function StandardPanel({ piece }: { piece: Piece }) {
  return (
    <section id="standard" className="card-texture scroll-mt-8 px-6 py-10 sm:px-12 sm:py-14 lg:px-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="lab">The Heirloom Standard</p>
          <h2 className="display text-[30px] sm:text-[36px] leading-tight mt-2">How this piece measures up</h2>
        </div>
        <p className="lab text-umber">{verifiedSummary(piece, "tests verified")}</p>
      </div>
      <ul className="mt-8 grid gap-x-14 gap-y-6 md:grid-cols-2">
        {CHECK_ORDER.map((k, i) => {
          const c = piece.checks[k];
          const st = c.status;
          return (
            <li key={k} className="grid grid-cols-[30px_1fr] text-[17px] leading-normal">
              <span className={`display text-[20px] leading-none pt-0.5 ${MARK_CLASS[st]}`} aria-hidden="true">
                {MARK[st]}
              </span>
              <div>
                <b className="block font-label font-semibold text-[13px] tracking-[0.1em] uppercase mb-1">
                  {i + 1}. {CHECK_LABEL[k]}
                  {st === "partial" && (
                    <span className="block mt-0.5 font-semibold normal-case tracking-normal text-umber">Partial</span>
                  )}
                  {st === "unverified" && (
                    <span className="block mt-0.5 font-medium normal-case tracking-normal text-caption">Not yet verified</span>
                  )}
                </b>
                <span className="sr-only">{STATE_LABEL[st]}. </span>
                {c.reason}
              </div>
            </li>
          );
        })}
        <li className="grid grid-cols-[30px_1fr] text-[17px] leading-normal">
          <span className="display text-[20px] leading-none pt-0.5 text-caption" aria-hidden="true">·</span>
          <div>
            <b className="block font-label font-semibold text-[13px] tracking-[0.1em] uppercase mb-1">
              Made in <span className="font-medium normal-case tracking-normal text-caption">(not one of the five tests)</span>
            </b>
            {piece.madeIn ?? <span className="italic text-caption">Not yet verified.</span>}
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
        &ldquo;Partial&rdquo; means we&apos;ve confirmed it and it falls short of what we&apos;d like (a short or
        finish-only warranty, for example). &ldquo;Not yet verified&rdquo; means we haven&apos;t confirmed it from the
        maker yet, not that the piece fails.{" "}
        <Link href="/standard" className="link-underline text-umber">How we evaluate</Link>
      </p>
    </section>
  );
}
