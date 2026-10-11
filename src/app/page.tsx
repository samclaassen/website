import { generatePageMetadata, webPageJsonLd } from "@/lib/seo";
import { SITE_NAME, SITE_DESCRIPTION, SITE_TAGLINE } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { COLLECTIONS, getAllPieces } from "@/lib/collections";
import Link from "next/link";
import Image from "next/image";

export const metadata = generatePageMetadata({
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function HomePage() {
  const allPieces = getAllPieces();

  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: SITE_NAME,
          description: SITE_DESCRIPTION,
          path: "/",
        })}
      />

      {/* Archive intro — clean, editorial, not a sales pitch */}
      <section className="px-6 pt-16 pb-12">
        <div className="mx-auto max-w-5xl text-center">
          <Image
            src="/images/logo-light.png"
            alt="Legacy Homeware monogram"
            width={72}
            height={72}
            className="mx-auto mb-8 rounded-sm"
          />
          <h1 className="font-serif text-4xl font-semibold text-brand-dark sm:text-5xl lg:text-6xl leading-[1.1]">
            {SITE_TAGLINE}
          </h1>
          <p className="mt-6 text-lg text-brand-muted leading-relaxed max-w-2xl mx-auto">
            A curated study of ornamental home hardware across seven
            architectural eras — the craftsmanship that shaped the homes we live
            in, explored through the pieces that defined each movement.
          </p>
        </div>
      </section>

      {/* Era navigation — horizontal visual timeline */}
      <section className="px-6 pb-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {COLLECTIONS.map((col) => (
              <Link
                key={col.slug}
                href={`/collections/${col.slug}`}
                className="group flex-none"
              >
                <div className="relative w-44 h-28 rounded-sm overflow-hidden">
                  <Image
                    src={col.image}
                    alt={col.era}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="176px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-brand-dark/20 group-hover:from-brand-dark/70 transition-colors" />
                  <div className="absolute inset-0 flex flex-col justify-end p-3">
                    <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-brand-gold">
                      {col.period}
                    </p>
                    <p className="text-sm font-serif font-semibold text-brand-cream">
                      {col.era}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="border-t border-brand-dark/10" />
      </div>

      {/* Visual archive grid — all pieces, image-first */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-brand-muted">
                Browse the Archive
              </h2>
              <p className="mt-1 text-sm text-brand-muted/70">
                {allPieces.length} curated pieces across {COLLECTIONS.length}{" "}
                eras
              </p>
            </div>
          </div>

          {/* Masonry-style grid using CSS columns */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {COLLECTIONS.map((collection, colIndex) =>
              collection.pieces.map((piece, pieceIndex) => {
                // Vary card heights for visual interest
                const isLarge =
                  (colIndex + pieceIndex) % 3 === 0;
                const era = collection;

                return (
                  <Link
                    key={piece.id}
                    href={`/collections/${era.slug}`}
                    className="group block break-inside-avoid rounded-sm overflow-hidden bg-white border border-brand-dark/5 hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Piece image — uses era image as representative */}
                    <div
                      className={`relative overflow-hidden ${
                        isLarge ? "aspect-[3/4]" : "aspect-square"
                      }`}
                    >
                      <Image
                        src={era.image}
                        alt={`${piece.name} — ${era.era} decorative hardware`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      {/* Era badge */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-brand-dark/70 backdrop-blur-sm text-brand-cream text-[10px] font-medium tracking-[0.15em] uppercase px-2.5 py-1 rounded-sm">
                          {era.era}
                        </span>
                      </div>
                    </div>

                    {/* Piece info */}
                    <div className="p-4">
                      <h3 className="font-serif text-lg font-semibold text-brand-dark group-hover:text-brand-gold transition-colors leading-snug">
                        {piece.name}
                      </h3>
                      <div className="mt-1 flex items-center gap-2 text-xs text-brand-muted">
                        <span>{piece.type}</span>
                        <span className="text-brand-dark/20">·</span>
                        <span>{piece.material}</span>
                      </div>
                      <p className="mt-2 text-sm text-brand-muted/80 leading-relaxed line-clamp-2">
                        {piece.description}
                      </p>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* About the archive — brief, at the bottom */}
      <section className="bg-brand-dark px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-brand-gold">
            Why This Archive Exists
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-brand-cream sm:text-4xl">
            Your home deserves hardware with a history
          </h2>
          <p className="mt-6 text-brand-cream/60 leading-relaxed">
            Every light switch plate, every doorknob, every hinge in your home
            is a design choice — usually a bad one. We&apos;re building this
            archive because the craft traditions that produced beautiful hardware
            for centuries shouldn&apos;t be forgotten. Explore the eras, study the
            details, and when you&apos;re ready — we cast them in solid metal.
          </p>
          <div className="mt-8">
            <Link
              href="/about"
              className="text-sm font-medium tracking-[0.2em] uppercase text-brand-gold hover:text-brand-cream transition-colors"
            >
              Read Our Story →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
