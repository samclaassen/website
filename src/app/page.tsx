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
import { SITE_IMAGES, sitePhoto } from "@/lib/site-images";
import { GuideCard } from "@/components/guides/GuideCard";
import { SubscribeSection } from "@/components/ui/Subscribe";
import { homeGuides } from "@/lib/guides";
import { BIFL_LISTS, BIFL_PATH, GIFTS_PATH, GIFT_GUIDES, listPath, topPick } from "@/lib/lists";

export const metadata = generatePageMetadata({
  title: `${SITE_NAME} — ${SITE_TAGLINE.replace(/\.$/, "")}`,
  description: SITE_DESCRIPTION,
  path: "",
});

const HERO_PHOTOS = SITE_IMAGES.homeHero.map((id) => sitePhoto(id));
const CATEGORY_PHOTO = {
  hearth: sitePhoto(SITE_IMAGES.category.hearth),
  hardware: sitePhoto(SITE_IMAGES.category.hardware),
  kitchen: sitePhoto(SITE_IMAGES.category.kitchen),
} as const;
const STANDARD_PHOTO = sitePhoto(SITE_IMAGES.homeStandard);

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

      {/* Hero: the tagline on linen beside a curated grid of four objects */}
      <section className="wrap pt-12 pb-6 sm:pt-16 lg:pt-20" aria-labelledby="hero-heading">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 items-center">
          <div>
            <p className="lab">A curated guide · Wave 1</p>
            <h1
              id="hero-heading"
              className="display font-light text-[44px] sm:text-[60px] lg:text-[72px] leading-[1.02] mt-5 max-w-[12ch] text-balance"
            >
              Home items that become heirlooms.
            </h1>
            <p className="lab mt-7 text-umber">For the hearth, the door and the table</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/pieces" className="btn-quiet">See the collection</Link>
            </div>
          </div>
          <figure>
            <ul className="grid grid-cols-2 gap-2 sm:gap-3" aria-label="Brass, cast iron, copper and hardwood">
              {HERO_PHOTOS.map((photo, i) => (
                <li key={photo.src} className="relative aspect-square overflow-hidden bg-card">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    priority={i < 2}
                    sizes="(min-width: 1024px) 340px, 50vw"
                    className="object-cover"
                    style={{ objectPosition: photo.focus }}
                  />
                </li>
              ))}
            </ul>
            <figcaption className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
              {HERO_PHOTOS.map((photo) => (
                <PhotoCredit key={photo.src} photo={photo} />
              ))}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Standfirst */}
      <p className="max-w-[680px] mx-auto my-20 sm:my-24 px-6 text-center text-[20px] sm:text-[21px] leading-[1.6]">
        Legacy Homeware is an independent guide to new pieces made the way they used to be, for the whole house: andirons and stoves for the hearth,
        forged latches and solid brass and bronze for the door, hardwood and copper for the table. They&apos;re
        built to be used every day and{" "}
        <em className="text-terracotta">handed down</em>. Every one is checked against our{" "}
        <Link href="/standard" className="link-underline">Heirloom Standard</Link>. We don&apos;t sell anything; we
        point you to the maker.
      </p>

      {/* Featured: one per category, hearth and door first */}
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

      {/* Buy it for life: the ranked lists, then the holiday gift guides */}
      <section className="wrap pb-24" aria-labelledby="bifl-heading">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <p className="lab">Buy it for life</p>
            <h2 id="bifl-heading" className="display text-[34px] sm:text-[38px] leading-tight mt-2">
              The ranked lists
            </h2>
            <p className="text-[18px] text-caption max-w-[56ch] mt-4">
              The pieces worth buying once, ranked against the Standard on what we can verify.
            </p>
          </div>
          <Link href={BIFL_PATH} className="btn-quiet">All lists</Link>
        </div>
        <ol className="grid border-t border-line sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-5 lg:gap-x-8">
          {BIFL_LISTS.map((l) => {
            const top = topPick(l);
            return (
              <li key={l.slug} className="border-b border-line">
                <Link href={listPath(l)} className="group block py-5 lg:py-6">
                  <h3 className="display text-[24px] leading-tight group-hover:text-terracotta transition-colors">
                    {l.shortTitle}
                  </h3>
                  {top && (
                    <p className="text-[15.5px] leading-snug text-caption mt-2">Number one: {fullName(top.piece)}</p>
                  )}
                </Link>
              </li>
            );
          })}
        </ol>
        <div className="mt-10 flex flex-wrap items-baseline gap-x-6 gap-y-3">
          <Link href={GIFTS_PATH} className="lab text-umber link-underline">
            Holiday gift guides
          </Link>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[17px]">
            {GIFT_GUIDES.map((g) => (
              <li key={g.slug}>
                <Link href={listPath(g)} className="link-underline">
                  {g.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
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
              Every piece is checked against all five, and anything that fails is left out. Plating, zinc or pot metal, &ldquo;brass finish&rdquo;,
              nonstick and MDF are out from the start. Where we haven&apos;t confirmed a fact yet, or a maker falls a little short, the piece page says
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

      {/* Care & Keeping: the guides behind the second and third tests */}
      <section className="card-texture" aria-labelledby="care-heading">
        <div className="wrap py-20 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <p className="lab">Care &amp; Keeping</p>
              <h2 id="care-heading" className="display text-[34px] sm:text-[38px] leading-tight mt-2">
                How to keep them for good
              </h2>
              <p className="text-[18px] text-caption max-w-[56ch] mt-4">
                Plain guides to the materials behind every piece: the short answer first, then the method, then what
                not to do.
              </p>
            </div>
            <Link href="/care" className="btn-quiet">All guides</Link>
          </div>
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {homeGuides().map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </div>
      </section>

      <SubscribeSection source="/" />
    </>
  );
}
