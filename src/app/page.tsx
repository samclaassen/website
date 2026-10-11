import { generatePageMetadata, webPageJsonLd } from "@/lib/seo";
import { SITE_NAME, SITE_DESCRIPTION, SITE_TAGLINE } from "@/lib/constants";
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
  // Split collections for layout: first 2 featured large, rest in grid
  const featured = COLLECTIONS.filter((c) => c.image).slice(0, 2);
  const remaining = COLLECTIONS.filter((c) => !featured.includes(c));

  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: SITE_NAME,
          description: SITE_DESCRIPTION,
          path: "/",
        })}
      />

      {/* Hero — Full-bleed image with overlay */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-hardware.png"
          alt="Decorative home hardware from Legacy Homeware — switch plates, doorknobs, and fixtures cast in solid metal"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-brand-dark/50 to-brand-dark/80" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-brand-cream">
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-brand-gold">
            {SITE_TAGLINE}
          </p>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.1] sm:text-6xl lg:text-7xl xl:text-8xl">
            Make your home
            <br />
            beautiful again
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-brand-cream/70 sm:text-xl">
            Decorative switch plates, outlet covers, doorknobs, hinges, and
            fixtures — cast in solid metal, inspired by centuries of craft
            tradition.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/collections"
              className="rounded-sm bg-brand-gold px-8 py-4 text-sm font-semibold tracking-widest uppercase text-white transition-colors hover:bg-brand-gold/90"
            >
              Explore Collections
            </Link>
            <Link
              href="/about"
              className="rounded-sm border border-brand-cream/30 px-8 py-4 text-sm font-semibold tracking-widest uppercase text-brand-cream/80 transition-colors hover:border-brand-cream/60 hover:text-brand-cream"
            >
              Our Mission
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="h-12 w-[1px] bg-gradient-to-b from-brand-cream/0 via-brand-cream/40 to-brand-cream/0" />
        </div>
      </section>

      {/* The Problem — brief, impactful */}
      <section className="py-24 px-6 bg-brand-cream">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-brand-gold">
            The Problem
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-brand-dark sm:text-4xl lg:text-5xl">
            Your home deserves better
          </h2>
          <p className="mt-6 text-lg text-brand-muted leading-relaxed">
            Every home uses the same mass-manufactured plastic outlet and light
            switch covers that yellow over time. We&apos;re bringing these home
            components back to the quality they had when they were handmade —
            and built to outlast the home.
          </p>
        </div>
      </section>

      {/* Featured Collections — large image cards */}
      <section className="bg-brand-dark py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-[0.25em] uppercase text-brand-gold">
              Seven Styles, Centuries of Craft
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-brand-cream sm:text-4xl lg:text-5xl">
              Our Collections
            </h2>
          </div>

          {/* Featured: 2 large alternating cards */}
          <div className="space-y-6">
            {featured.map((collection, index) => (
              <Link
                key={collection.slug}
                href={`/collections/${collection.slug}`}
                className="group block overflow-hidden rounded-sm"
              >
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Image side */}
                  <div className="relative aspect-[4/3] lg:aspect-auto lg:w-3/5 overflow-hidden">
                    {collection.image && (
                      <Image
                        src={collection.image}
                        alt={`${collection.name} collection — ${collection.era} decorative hardware`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent lg:hidden" />
                  </div>
                  {/* Text side */}
                  <div className="flex flex-col justify-center bg-brand-dark p-8 sm:p-12 lg:w-2/5 lg:p-16">
                    <p className="text-xs font-medium tracking-[0.25em] uppercase text-brand-gold">
                      {collection.era} · {collection.period}
                    </p>
                    <h3 className="mt-3 font-serif text-3xl font-semibold text-brand-cream transition-colors group-hover:text-brand-gold sm:text-4xl">
                      {collection.name}
                    </h3>
                    <p className="mt-2 text-sm italic text-brand-cream/50">
                      &ldquo;{collection.tagline}&rdquo;
                    </p>
                    <p className="mt-6 text-brand-cream/60 leading-relaxed">
                      {collection.description}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {collection.materials.map((material) => (
                        <span
                          key={material}
                          className="rounded-full border border-brand-cream/15 px-3 py-1 text-xs text-brand-cream/50"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                    <p className="mt-8 text-sm font-medium tracking-widest uppercase text-brand-gold opacity-0 transition-opacity group-hover:opacity-100">
                      Explore Collection →
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Remaining collections: image grid */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {remaining.map((collection) => (
              <Link
                key={collection.slug}
                href={`/collections/${collection.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-sm"
              >
                {collection.image ? (
                  <Image
                    src={collection.image}
                    alt={`${collection.name} collection — ${collection.era} decorative hardware`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-muted/40 to-brand-dark" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                  <p className="text-xs font-medium tracking-[0.25em] uppercase text-brand-gold">
                    {collection.era}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-brand-cream transition-colors group-hover:text-brand-gold sm:text-3xl">
                    {collection.name}
                  </h3>
                  <p className="mt-2 text-sm text-brand-cream/60 leading-relaxed line-clamp-2">
                    {collection.description}
                  </p>
                  <p className="mt-4 text-xs font-medium tracking-widest uppercase text-brand-gold opacity-0 transition-opacity group-hover:opacity-100">
                    Explore →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* View all CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/collections"
              className="inline-block rounded-sm border border-brand-gold/40 px-10 py-4 text-sm font-semibold tracking-widest uppercase text-brand-gold transition-colors hover:bg-brand-gold hover:text-white"
            >
              View All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* What We Make */}
      <section className="py-24 px-6 bg-brand-cream">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-[0.25em] uppercase text-brand-gold">
              Cast in Solid Metal
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-brand-dark sm:text-4xl lg:text-5xl">
              Every detail in your home
            </h2>
            <p className="mt-4 text-brand-muted max-w-2xl mx-auto text-lg">
              Bronze, brass, and iron — hardware designed to match across your
              entire home.
            </p>
          </div>
          <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Light Switch Plates",
                desc: "Single, double, triple, dimmer, smart-switch compatible",
              },
              {
                name: "Outlet Covers",
                desc: "Standard, GFCI, USB — every configuration",
              },
              {
                name: "Doorknobs & Handles",
                desc: "Knobs, levers, and pulls in every style",
              },
              {
                name: "Hinges",
                desc: "Decorative exposed hinges that become a feature",
              },
              {
                name: "Cabinet Hardware",
                desc: "Knobs, pulls, and handles for kitchen and bath",
              },
              {
                name: "Door Accessories",
                desc: "Knockers, kick plates, house numbers, and more",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="group border border-brand-dark/5 bg-brand-warm/50 p-8 transition-colors hover:bg-brand-warm"
              >
                <h3 className="font-serif text-xl font-semibold text-brand-dark">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-28 px-6 overflow-hidden">
        <Image
          src="/images/hero-hardware.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-brand-dark/85" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-brand-cream sm:text-4xl lg:text-5xl">
            Hardware that outlasts the home
          </h2>
          <p className="mt-6 text-lg text-brand-cream/60 max-w-xl mx-auto">
            Explore our collections to find the style that belongs in your home.
            Every piece is cast in solid metal and built to last for
            generations.
          </p>
          <div className="mt-10">
            <Link
              href="/collections"
              className="inline-block rounded-sm bg-brand-gold px-10 py-4 text-sm font-semibold tracking-widest uppercase text-white transition-colors hover:bg-brand-gold/90"
            >
              Explore Collections
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
