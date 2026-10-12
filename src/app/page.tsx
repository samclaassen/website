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
  const featured = COLLECTIONS[0]; // Arts & Crafts
  const secondary = COLLECTIONS[1]; // Victorian
  const remaining = COLLECTIONS.slice(2);

  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: SITE_NAME,
          description: SITE_DESCRIPTION,
          path: "/",
        })}
      />

      {/* Hero — asymmetric split */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left: image, full-bleed */}
        <div className="relative min-h-[60vh] lg:min-h-screen">
          <Image
            src="/images/hero-hardware.png"
            alt="Decorative hardware — switch plates, doorknobs, and hinges cast in solid metal"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>

        {/* Right: editorial intro */}
        <div className="flex flex-col justify-center px-8 py-20 lg:px-16 xl:px-24">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-brand-muted">
            Est. 2026
          </p>

          <h1 className="mt-8 font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] text-brand-dark">
            The craft
            <br />
            your home
            <br />
            is missing
          </h1>

          <p className="mt-8 text-base leading-[1.8] text-brand-muted max-w-md">
            A visual study of ornamental hardware across seven architectural
            eras. The switch plates, doorknobs, and hinges that were once
            handmade, historically grounded, and built to outlast the home.
          </p>

          <div className="mt-12 flex items-center gap-6">
            <Link
              href="/collections"
              className="text-sm font-medium tracking-[0.15em] uppercase text-brand-dark border-b border-brand-dark pb-1 hover:text-brand-muted hover:border-brand-muted transition-colors"
            >
              Explore all eras
            </Link>
          </div>

          <div className="mt-20 pt-8 border-t border-brand-dark/10">
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-brand-muted">
              Seven eras · 28 pieces · Centuries of craft
            </p>
          </div>
        </div>
      </section>

      {/* Featured era — full editorial spread */}
      <section className="border-t border-brand-dark/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh]">
          {/* Text — narrow left column */}
          <div className="lg:col-span-4 xl:col-span-3 flex flex-col justify-center px-8 py-16 lg:px-10 xl:px-16 lg:border-r border-brand-dark/10">
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-brand-muted">
              {featured.period}
            </p>

            <h2 className="mt-6 font-serif text-4xl font-semibold text-brand-dark lg:text-5xl">
              {featured.era}
            </h2>

            <p className="mt-6 text-base leading-[1.8] text-brand-muted">
              {featured.description}
            </p>

            <div className="mt-8">
              {featured.materials.map((m) => (
                <p key={m} className="text-sm text-brand-dark/60 leading-relaxed">
                  {m}
                </p>
              ))}
            </div>

            <Link
              href={`/collections/${featured.slug}`}
              className="mt-10 text-sm font-medium tracking-[0.15em] uppercase text-brand-dark border-b border-brand-dark pb-1 self-start hover:text-brand-muted hover:border-brand-muted transition-colors"
            >
              View {featured.pieces.length} pieces
            </Link>
          </div>

          {/* Image — wide right */}
          <Link
            href={`/collections/${featured.slug}`}
            className="lg:col-span-8 xl:col-span-9 relative min-h-[50vh] group"
          >
            <Image
              src={featured.image}
              alt={`${featured.era} decorative hardware`}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 67vw"
            />
          </Link>
        </div>
      </section>

      {/* Second era — reversed layout */}
      <section className="border-t border-brand-dark/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh]">
          {/* Image — wide left */}
          <Link
            href={`/collections/${secondary.slug}`}
            className="lg:col-span-8 xl:col-span-9 lg:order-1 relative min-h-[50vh] group"
          >
            <Image
              src={secondary.image}
              alt={`${secondary.era} decorative hardware`}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 67vw"
            />
          </Link>

          {/* Text — narrow right */}
          <div className="lg:col-span-4 xl:col-span-3 lg:order-2 flex flex-col justify-center px-8 py-16 lg:px-10 xl:px-16 lg:border-l border-brand-dark/10">
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-brand-muted">
              {secondary.period}
            </p>

            <h2 className="mt-6 font-serif text-4xl font-semibold text-brand-dark lg:text-5xl">
              {secondary.era}
            </h2>

            <p className="mt-6 text-base leading-[1.8] text-brand-muted">
              {secondary.description}
            </p>

            <div className="mt-8">
              {secondary.materials.map((m) => (
                <p key={m} className="text-sm text-brand-dark/60 leading-relaxed">
                  {m}
                </p>
              ))}
            </div>

            <Link
              href={`/collections/${secondary.slug}`}
              className="mt-10 text-sm font-medium tracking-[0.15em] uppercase text-brand-dark border-b border-brand-dark pb-1 self-start hover:text-brand-muted hover:border-brand-muted transition-colors"
            >
              View {secondary.pieces.length} pieces
            </Link>
          </div>
        </div>
      </section>

      {/* Remaining eras — clean editorial list */}
      <section className="border-t border-brand-dark/10 px-8 lg:px-10 xl:px-16 py-24">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-brand-muted mb-16">
            Continue exploring
          </p>

          <div className="space-y-0">
            {remaining.map((col) => (
              <Link
                key={col.slug}
                href={`/collections/${col.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-6 py-10 border-b border-brand-dark/10 first:pt-0 last:border-0"
              >
                {/* Image thumb */}
                <div className="lg:col-span-3 relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={col.image}
                    alt={col.era}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                </div>

                {/* Info */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  <p className="text-xs font-medium tracking-[0.25em] uppercase text-brand-muted">
                    {col.period}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl font-semibold text-brand-dark group-hover:text-brand-muted transition-colors">
                    {col.era}
                  </h3>
                  <p className="mt-3 text-base leading-[1.8] text-brand-muted max-w-lg">
                    {col.description}
                  </p>
                </div>

                {/* Meta */}
                <div className="lg:col-span-3 flex flex-col justify-center lg:items-end lg:text-right">
                  <p className="text-sm text-brand-muted">
                    {col.pieces.length} pieces
                  </p>
                  <p className="text-sm font-medium tracking-[0.15em] uppercase text-brand-dark mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    View era →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing statement — editorial */}
      <section className="border-t border-brand-dark/10 px-8 lg:px-10 py-32">
        <div className="mx-auto max-w-2xl">
          <p className="pull-quote font-serif text-2xl leading-[1.6] text-brand-dark sm:text-3xl">
            Every light switch, every doorknob, every hinge is a design
            choice. We&apos;re building this archive because the craft traditions
            that produced beautiful hardware shouldn&apos;t be forgotten.
          </p>
          <div className="mt-10">
            <Link
              href="/about"
              className="text-sm font-medium tracking-[0.15em] uppercase text-brand-dark border-b border-brand-dark pb-1 hover:text-brand-muted hover:border-brand-muted transition-colors"
            >
              Read our story
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
