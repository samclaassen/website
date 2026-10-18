import Link from "next/link";
import { generatePageMetadata, itemListJsonLd } from "@/lib/seo";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { Ornament } from "@/components/ui/Ornament";
import { PieceCard } from "@/components/pieces/PieceCard";
import { StandardList } from "@/components/pieces/StandardList";
import { CATEGORIES, PIECES, featured, fullName, piecesIn } from "@/lib/pieces";
import { CATEGORY_BLURB, CATEGORY_LABEL } from "@/lib/piece-types";
import { MaterialMotif } from "@/components/media/MaterialMotif";

export const metadata = generatePageMetadata({
  title: `${SITE_NAME} — ${SITE_TAGLINE.replace(/\.$/, "")}`,
  description: SITE_DESCRIPTION,
  path: "",
});

const CATEGORY_MOTIF = { hearth: "soapstone", kitchen: "cast-iron", hardware: "brass" } as const;

export default function HomePage() {
  const picks = featured();
  return (
    <>
      <JsonLd
        data={itemListJsonLd(
          "Featured heirloom pieces",
          picks.map((p) => ({ name: fullName(p), path: `/pieces/${p.slug}` })),
        )}
      />

      {/* Typographic hero */}
      <section className="linen-texture border-b border-line">
        <div className="wrap py-24 sm:py-32 lg:py-40 text-center">
          <p className="lab">A curated guide · Wave 1</p>
          <h1 className="display font-light text-[46px] sm:text-[68px] lg:text-[88px] leading-[1.02] mt-6 mx-auto max-w-[13ch] text-balance">
            Home items that become heirlooms.
          </h1>
          <Ornament className="mx-auto mt-10 w-[200px] text-caption/60" />
          <p className="lab mt-8 text-umber/80">
            Cast iron · Brass &amp; bronze · Forged iron · Copper · Hardwood
          </p>
        </div>
      </section>

      {/* Standfirst */}
      <p className="max-w-[680px] mx-auto my-20 sm:my-24 px-6 text-center text-[20px] sm:text-[21px] leading-[1.6]">
        We find new pieces made the way they used to be: solid cast iron, solid brass and bronze, forged iron,
        tinned copper and hardwood. They&apos;re built to be used every day and{" "}
        <em className="text-terracotta">handed down</em>. Every one is checked against our{" "}
        <Link href="/standard" className="link-underline">Heirloom Standard</Link>. We don&apos;t sell anything; we
        point you to the maker.
      </p>

      {/* Featured: one per category */}
      <section className="wrap pb-24" aria-labelledby="featured-heading">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="lab">From the collection</p>
            <h2 id="featured-heading" className="display text-[34px] sm:text-[38px] leading-tight mt-2">
              Three pieces worth keeping
            </h2>
          </div>
          <Link href="/pieces" className="lab text-umber link-underline">All {PIECES.length} pieces →</Link>
        </div>
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {picks.map((p, i) => (
            <PieceCard key={p.slug} piece={p} priority={i === 0} />
          ))}
        </div>
      </section>

      {/* Heirloom Standard teaser */}
      <section className="card-texture" aria-labelledby="standard-heading">
        <div className="wrap py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_1.6fr] lg:gap-16 items-end mb-12">
            <div>
              <p className="lab">The Heirloom Standard</p>
              <h2 id="standard-heading" className="display text-[34px] sm:text-[40px] leading-tight mt-2">
                Five tests. Every piece.
              </h2>
            </div>
            <p className="text-[18px] text-caption max-w-[56ch]">
              A piece is only featured if it passes all five. Plating, zinc or pot metal, &ldquo;brass finish&rdquo;,
              nonstick and MDF are out from the start. Where we haven&apos;t confirmed a fact yet, the piece page says
              so.
            </p>
          </div>
          <StandardList compact />
          <div className="mt-12">
            <Link href="/standard" className="btn-quiet">Read the Standard</Link>
          </div>
        </div>
      </section>

      {/* Browse by category */}
      <section className="wrap py-24" aria-labelledby="browse-heading">
        <p className="lab">Browse</p>
        <h2 id="browse-heading" className="display text-[34px] sm:text-[38px] leading-tight mt-2 mb-10">
          By category
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {CATEGORIES.map((c) => (
            <Link
              key={c}
              href={`/pieces?category=${c}`}
              className="group block border border-line p-8 hover:border-umber transition-colors"
            >
              <MaterialMotif family={CATEGORY_MOTIF[c]} className="w-[64px] text-terracotta" />
              <h3 className="display text-[28px] mt-6 group-hover:text-terracotta transition-colors">
                {CATEGORY_LABEL[c]}
              </h3>
              <p className="italic text-caption text-[16px] mt-2">{CATEGORY_BLURB[c]}</p>
              <p className="lab mt-6">{piecesIn(c).length} pieces →</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
