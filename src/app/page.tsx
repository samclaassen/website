import Link from "next/link";
import { generatePageMetadata, itemListJsonLd } from "@/lib/seo";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { PieceCard } from "@/components/pieces/PieceCard";
import { StandardList } from "@/components/pieces/StandardList";
import { CATEGORIES, PIECES, featured, fullName, piecesIn } from "@/lib/pieces";
import { CATEGORY_BLURB, CATEGORY_LABEL } from "@/lib/piece-types";
import Image from "next/image";
import { CreditedImage, PhotoCredit } from "@/components/media/CreditedImage";
import { libraryPhoto } from "@/data/image-library";

export const metadata = generatePageMetadata({
  title: `${SITE_NAME} — ${SITE_TAGLINE.replace(/\.$/, "")}`,
  description: SITE_DESCRIPTION,
  path: "",
});

const HERO = libraryPhoto("hero-cabin-stove");
const CATEGORY_PHOTO = {
  hearth: libraryPhoto("cat-hearth-fireplace"),
  kitchen: libraryPhoto("cat-kitchen-skillets"),
  hardware: libraryPhoto("cat-hardware-lock"),
} as const;
const STANDARD_PHOTO = libraryPhoto("craft-blacksmith-forge");

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

      {/* Photographic hero */}
      <section className="relative h-[min(78vh,720px)] min-h-[520px] overflow-hidden bg-umber" aria-labelledby="hero-heading">
        <Image
          src={HERO.src}
          alt={HERO.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: HERO.focus }}
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to right, rgba(30,22,15,.62) 0%, rgba(30,22,15,.30) 45%, rgba(30,22,15,0) 70%), linear-gradient(to bottom, rgba(30,22,15,.10) 0%, rgba(30,22,15,.05) 35%, rgba(30,22,15,.55) 68%, rgba(30,22,15,.85) 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0">
          <div className="wrap pb-20 sm:pb-16 lg:pb-20">
            <p className="lab text-linen/85">A curated guide · Wave 1</p>
            <h1
              id="hero-heading"
              className="display font-light text-linen text-[44px] sm:text-[64px] lg:text-[84px] leading-[1.02] mt-5 max-w-[13ch] text-balance [text-shadow:0_1px_24px_rgba(30,22,15,.35)]"
            >
              Home items that become heirlooms.
            </h1>
            <p className="lab mt-7 text-linen/80">
              Cast iron · Brass &amp; bronze · Forged iron · Copper · Hardwood
            </p>
          </div>
        </div>
        <p className="absolute bottom-3 left-[22px] right-4 sm:left-auto sm:right-6 sm:max-w-[70%] sm:text-right">
          <PhotoCredit photo={HERO} tone="light" />
        </p>
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
          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16 items-center mb-14">
            <CreditedImage
              photo={STANDARD_PHOTO}
              frame="aspect-[3/2]"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
            <div>
              <p className="lab">The Heirloom Standard</p>
              <h2 id="standard-heading" className="display text-[34px] sm:text-[40px] leading-tight mt-2">
                Five tests. Every piece.
              </h2>
            <p className="text-[18px] text-caption max-w-[56ch] mt-5">
              A piece is only featured if it passes all five. Plating, zinc or pot metal, &ldquo;brass finish&rdquo;,
              nonstick and MDF are out from the start. Where we haven&apos;t confirmed a fact yet, the piece page says
              so.
            </p>
            </div>
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
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {CATEGORIES.map((c) => (
            <article key={c} className="group">
              <Link href={`/pieces?category=${c}`} className="block" tabIndex={-1} aria-hidden="true">
                <div className="relative aspect-[4/3] overflow-hidden bg-card">
                  <Image
                    src={CATEGORY_PHOTO[c].src}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 360px, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{ objectPosition: CATEGORY_PHOTO[c].focus }}
                  />
                </div>
              </Link>
              <p className="mt-2">
                <PhotoCredit photo={CATEGORY_PHOTO[c]} />
              </p>
              <Link href={`/pieces?category=${c}`} className="block">
                <h3 className="display text-[28px] mt-3 group-hover:text-terracotta transition-colors">
                  {CATEGORY_LABEL[c]}
                </h3>
                <p className="italic text-caption text-[16px] mt-1">{CATEGORY_BLURB[c]}</p>
                <p className="lab mt-4">{piecesIn(c).length} pieces →</p>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
