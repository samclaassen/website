import { generatePageMetadata, webPageJsonLd } from "@/lib/seo";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { COLLECTIONS } from "@/lib/collections";
import Link from "next/link";
import Image from "next/image";

export const metadata = generatePageMetadata({
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function HomePage() {
  const featured = COLLECTIONS[0];
  const secondary = COLLECTIONS.slice(1, 4);
  const remaining = COLLECTIONS.slice(4);

  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: SITE_NAME,
          description: SITE_DESCRIPTION,
          path: "/",
        })}
      />

      {/* Hero — full bleed dark, Aesop-style centered text */}
      <section className="relative min-h-[85vh] flex items-center justify-center">
        <Image
          src="/images/hero-hardware.png"
          alt="Sunlit luxury home entryway with brass chandelier and decorative hardware"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-cream/50" />

        <div className="relative z-10 text-center px-6 max-w-2xl">
          <p className="text-[13px] tracking-[0.2em] uppercase text-bark mb-6">
            The Visual Archive
          </p>

          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.08] text-stone mb-6">
            Hardware worth inheriting
          </h1>

          <p className="text-base leading-[1.8] text-muted mb-10 max-w-lg mx-auto">
            A visual study of ornamental lighting and home hardware across seven
            architectural eras. Solid metal, historically grounded, built to outlast the home.
          </p>

          <Link
            href="/collections"
            className="cta-button text-stone mx-auto"
          >
            Explore the collection
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* Section label + featured era — split layout like Aesop */}
      <section className="bg-cream">
        <div className="px-6 lg:px-10 pt-20 pb-4">
          <p className="text-[13px] tracking-[0.15em] uppercase text-bark font-medium">
            Featured Era
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
          {/* Text side */}
          <div className="flex flex-col justify-center px-6 lg:px-10 xl:px-20 py-16">
            <p className="text-[13px] text-muted mb-4">
              {featured.period}
            </p>

            <h2 className="font-serif text-4xl font-semibold text-stone lg:text-5xl mb-6">
              {featured.era}
            </h2>

            <p className="text-base leading-[1.8] text-muted max-w-md mb-8">
              {featured.description}
            </p>

            <Link
              href={`/collections/${featured.slug}`}
              className="cta-button text-stone self-start"
            >
              Explore era
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Image side */}
          <Link
            href={`/collections/${featured.slug}`}
            className="relative min-h-[400px] group"
          >
            <Image
              src={featured.image}
              alt={`${featured.era} interior featuring decorative lighting and hardware`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Link>
        </div>
      </section>

      {/* Browse by era — Aesop-style horizontal cards */}
      <section className="bg-cream border-t border-border">
        <div className="px-6 lg:px-10 pt-20 pb-10">
          <h2 className="font-serif text-3xl font-semibold text-stone sm:text-4xl">
            Browse by era
          </h2>
        </div>

        <div className="px-6 lg:px-10 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {secondary.map((col) => (
              <Link
                key={col.slug}
                href={`/collections/${col.slug}`}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-5">
                  <Image
                    src={col.image}
                    alt={`${col.era} era interior with decorative lighting and hardware`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold text-stone mb-1 group-hover:text-muted transition-colors">
                  {col.era}
                </h3>
                <p className="text-[13px] text-muted">
                  {col.period} · {col.pieces.length} pieces
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dark editorial section — Aesop storytelling style */}
      <section className="bg-stone text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
          {/* Image */}
          <div className="relative min-h-[400px]">
            <Image
              src="/images/collection-meridian.png"
              alt="Art Deco apartment interior with geometric brass lighting and hardware"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-6 lg:px-16 xl:px-24 py-20">
            <p className="text-[13px] tracking-[0.15em] uppercase text-white/50 mb-6">
              Craftsmanship
            </p>

            <h2 className="font-serif text-3xl font-semibold text-white lg:text-4xl mb-6 leading-snug">
              Every light fixture, every switch plate, every doorknob is a design choice
            </h2>

            <p className="text-base leading-[1.8] text-white/60 max-w-md mb-10">
              Before mass production, the hardware in a home was a point of pride
              — cast in solid brass or iron, designed to match the architectural
              style of the house, and built to outlast the structure itself.
            </p>

            <Link
              href="/about"
              className="cta-button cta-button-light self-start"
            >
              Our story
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* More eras */}
      <section className="bg-cream border-t border-border">
        <div className="px-6 lg:px-10 pt-20 pb-10">
          <h2 className="font-serif text-3xl font-semibold text-stone sm:text-4xl">
            More eras to explore
          </h2>
        </div>

        <div className="px-6 lg:px-10 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {remaining.map((col) => (
              <Link
                key={col.slug}
                href={`/collections/${col.slug}`}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-5">
                  <Image
                    src={col.image}
                    alt={`${col.era} era interior with decorative lighting and hardware`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="font-serif text-lg font-semibold text-stone mb-1 group-hover:text-muted transition-colors">
                  {col.era}
                </h3>
                <p className="text-[13px] text-muted">
                  {col.period} · {col.pieces.length} pieces
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote — Aesop style centered on cream */}
      <section className="bg-cream-dark py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="font-serif text-2xl leading-[1.5] text-stone sm:text-3xl italic">
            &ldquo;The hardware in your home is the design decision you make
            dozens of times a day — and the one most people get wrong.&rdquo;
          </blockquote>
          <div className="mt-8">
            <Link
              href="/collections"
              className="cta-button text-stone mx-auto"
            >
              View all eras
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
