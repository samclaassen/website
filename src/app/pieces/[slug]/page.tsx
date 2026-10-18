import Link from "next/link";
import { notFound } from "next/navigation";
import { breadcrumbJsonLd, generatePageMetadata, productJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PieceVisual } from "@/components/media/PieceVisual";
import { BuyCard } from "@/components/pieces/BuyCard";
import { StandardPanel } from "@/components/pieces/StandardPanel";
import { PieceCard } from "@/components/pieces/PieceCard";
import { PIECES, badgesFor, fullName, getPiece, parsePrice, related, verifiedCount } from "@/lib/pieces";
import { CATEGORY_LABEL, MATERIAL_LABEL, TIER_LABEL, TIER_RANGE } from "@/lib/piece-types";
import { PRICE_CHECKED } from "@/data/pieces";

interface Params {
  slug: string;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return PIECES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = getPiece(slug);
  if (!p) return {};
  return generatePageMetadata({
    title: fullName(p),
    description: `${p.whyHeirloom} ${p.material}. ${p.price} at ${p.retailer}.`.slice(0, 300),
    path: `/pieces/${slug}`,
    ogImage: p.photo?.src,
  });
}

export default async function PiecePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = getPiece(slug);
  if (!p) notFound();

  const badges = badgesFor(p);
  const more = related(p);
  const specs: [string, string][] = [
    ["Material", p.material],
    ["Maker", p.maker],
    ...(p.makerBase ? ([["Maker based in", p.makerBase]] as [string, string][]) : []),
    ["Made in", p.madeIn ?? "Not yet verified"],
    ["Warranty", p.warranty ?? "Not yet verified"],
    ["Price band", `${TIER_LABEL[p.tier]} (${TIER_RANGE[p.tier]})`],
  ];

  return (
    <>
      <JsonLd
        data={productJsonLd({
          slug: p.slug,
          name: fullName(p),
          maker: p.maker,
          material: p.material,
          category: CATEGORY_LABEL[p.category],
          description: p.whyHeirloom,
          productUrl: p.productUrl,
          retailer: p.retailer,
          price: parsePrice(p.price),
          priceChecked: PRICE_CHECKED,
          image: p.photo?.src,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Pieces", href: "/pieces" },
          { name: fullName(p), href: `/pieces/${p.slug}` },
        ])}
      />

      <nav aria-label="Breadcrumb" className="wrap pt-8">
        <ol className="flex flex-wrap gap-2 lab">
          <li><Link href="/pieces" className="hover:text-terracotta">Pieces</Link></li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href={`/pieces?category=${p.category}`} className="hover:text-terracotta">
              {CATEGORY_LABEL[p.category]}
            </Link>
          </li>
        </ol>
      </nav>

      <article>
        <section className="wrap pt-8 pb-20 grid gap-12 lg:gap-[72px] lg:grid-cols-[1.1fr_1fr] items-start">
          <div className="lg:sticky lg:top-8">
            <PieceVisual piece={p} size="hero" priority />
            {!p.photo && (
              <p className="mt-3 text-[13px] text-caption font-label">
                No photo yet. We only show maker photos once we have permission to.
              </p>
            )}
          </div>

          <div>
            <p className="lab">
              {CATEGORY_LABEL[p.category]} · {MATERIAL_LABEL[p.materialFamily]}
            </p>
            <h1 className="display text-[40px] sm:text-[52px] leading-[1.05] mt-3">{p.name}</h1>
            <p className="display italic text-[19px] text-caption mt-2">
              by {p.maker}
              {p.makerBase ? `, ${p.makerBase}` : ""}
            </p>

            {badges.length > 0 && (
              <a href="#standard" className="flex flex-wrap gap-2.5 mt-7" aria-label="Heirloom Standard summary">
                {badges.map((b) => (
                  <span key={b} className="pill bg-linen">✓ {b}</span>
                ))}
                <span className="pill border-transparent text-caption underline underline-offset-4 decoration-line">
                  {verifiedCount(p)} of 5 verified
                </span>
              </a>
            )}

            <div className="mt-8">
              <BuyCard piece={p} />
            </div>

            <div className="mt-10">
              <h2 className="lab mb-3">Why it&apos;s an heirloom</h2>
              <p className="text-[19px] leading-[1.65]">{p.whyHeirloom}</p>
            </div>

            <dl className="mt-10 border-t border-line">
              {specs.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[140px_1fr] gap-4 py-3 border-b border-line text-[16px]">
                  <dt className="lab pt-1">{k}</dt>
                  <dd className={v === "Not yet verified" ? "text-caption italic" : ""}>{v}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-[14px] text-caption font-label">
              Care guide for {MATERIAL_LABEL[p.materialFamily].toLowerCase()}:{" "}
              <Link href="/care" className="link-underline text-umber">coming soon</Link>
            </p>
          </div>
        </section>

        <div className="max-w-[1116px] mx-auto px-0 sm:px-8 mb-24">
          <StandardPanel piece={p} />
        </div>
      </article>

      {more.length > 0 && (
        <section className="wrap pb-24" aria-labelledby="more-heading">
          <p className="lab">More from {CATEGORY_LABEL[p.category]}</p>
          <h2 id="more-heading" className="display text-[32px] sm:text-[36px] leading-tight mt-2 mb-10">
            Pieces worth keeping
          </h2>
          <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((m) => (
              <PieceCard key={m.slug} piece={m} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
