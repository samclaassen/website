import { generatePageMetadata, webPageJsonLd } from "@/lib/seo";
import { SITE_NAME, SITE_DESCRIPTION, SITE_TAGLINE } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { COLLECTIONS } from "@/lib/collections";
import Link from "next/link";

export const metadata = generatePageMetadata({
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: SITE_NAME,
          description: SITE_DESCRIPTION,
          path: "/",
        })}
      />

      {/* Hero */}
      <section className="bg-brand-dark text-brand-cream py-28 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium tracking-widest uppercase text-brand-gold">
            {SITE_TAGLINE}
          </p>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Make your home<br />beautiful again
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-brand-cream/70 max-w-2xl mx-auto">
            Every home deserves hardware that&apos;s more than mass-manufactured plastic.
            Legacy Homeware creates decorative switch plates, outlet covers, doorknobs,
            hinges, and fixtures — cast in solid metal, inspired by centuries of craft tradition.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/collections"
              className="rounded-sm bg-brand-gold px-8 py-3.5 text-sm font-semibold tracking-wide uppercase text-white hover:bg-brand-gold/90 transition-colors"
            >
              Explore Collections
            </Link>
            <Link
              href="/about"
              className="rounded-sm border border-brand-cream/30 px-8 py-3.5 text-sm font-semibold tracking-wide uppercase text-brand-cream/80 hover:border-brand-cream/60 hover:text-brand-cream transition-colors"
            >
              Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-6 bg-brand-cream">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-brand-dark sm:text-4xl">
            Your home deserves better
          </h2>
          <p className="mt-6 text-brand-muted leading-relaxed">
            Everything about modern homes is mass-manufactured and looks the same.
            Every house uses the same plastic outlet and light switch covers that yellow
            over time. At best you can get a cheap stamped metal plate that&apos;s still
            mass-produced. We want to bring these home components back to the quality
            they had when they were handmade and outlasted the home they were built into.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20 px-6 bg-brand-warm">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-brand-gold">
              Seven Styles, Centuries of Craft
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-brand-dark sm:text-4xl">
              Our Collections
            </h2>
            <p className="mt-4 text-brand-muted max-w-2xl mx-auto">
              Each collection draws from a distinct architectural era — the same eras
              that shaped the homes you live in today.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COLLECTIONS.map((collection) => (
              <Link
                key={collection.slug}
                href={`/collections/${collection.slug}`}
                className="group block rounded-sm border border-brand-dark/10 bg-brand-cream p-8 hover:border-brand-gold/40 hover:shadow-lg transition-all duration-300"
              >
                <p className="text-xs font-medium tracking-widest uppercase text-brand-gold">
                  {collection.era}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-brand-dark group-hover:text-brand-gold transition-colors">
                  {collection.name}
                </h3>
                <p className="mt-1 text-sm text-brand-muted">{collection.period}</p>
                <p className="mt-4 text-sm text-brand-muted leading-relaxed">
                  {collection.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {collection.materials.map((material) => (
                    <span
                      key={material}
                      className="rounded-full border border-brand-dark/10 px-3 py-1 text-xs text-brand-muted"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </Link>
            ))}

            {/* CTA card */}
            <div className="flex items-center justify-center rounded-sm border border-dashed border-brand-dark/20 bg-brand-cream/50 p-8">
              <div className="text-center">
                <p className="font-serif text-xl font-semibold text-brand-dark">
                  More styles coming
                </p>
                <p className="mt-2 text-sm text-brand-muted">
                  New collections inspired by additional architectural eras are in development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Make */}
      <section className="py-20 px-6 bg-brand-cream">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-semibold text-brand-dark sm:text-4xl">
              Every detail in your home
            </h2>
            <p className="mt-4 text-brand-muted max-w-2xl mx-auto">
              Cast in solid bronze, brass, and iron — hardware designed to match across
              your entire home.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-center">
            {[
              { name: "Light Switch Plates", desc: "Single, double, triple, dimmer, smart-switch compatible" },
              { name: "Outlet Covers", desc: "Standard, GFCI, USB — every configuration" },
              { name: "Doorknobs & Handles", desc: "Knobs, levers, and pulls in every style" },
              { name: "Hinges", desc: "Decorative exposed hinges that become a feature" },
              { name: "Cabinet Hardware", desc: "Knobs, pulls, and handles for kitchen and bath" },
              { name: "Door Accessories", desc: "Knockers, kick plates, house numbers, and more" },
            ].map((item) => (
              <div key={item.name} className="rounded-sm border border-brand-dark/10 p-6">
                <h3 className="font-serif text-lg font-semibold text-brand-dark">{item.name}</h3>
                <p className="mt-2 text-sm text-brand-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark text-brand-cream py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Hardware that outlasts the home
          </h2>
          <p className="mt-4 text-brand-cream/60 max-w-xl mx-auto">
            Explore our collections to find the style that belongs in your home.
            Each piece is designed to be cast in solid metal and built to last for generations.
          </p>
          <div className="mt-8">
            <Link
              href="/collections"
              className="inline-block rounded-sm bg-brand-gold px-8 py-3.5 text-sm font-semibold tracking-wide uppercase text-white hover:bg-brand-gold/90 transition-colors"
            >
              Browse All Collections
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
