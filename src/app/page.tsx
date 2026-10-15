import { generatePageMetadata, webPageJsonLd } from "@/lib/seo";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { COLLECTIONS } from "@/lib/collections";
import { STYLE_PRODUCTS } from "@/data/styleProducts";
import { ELEMENTS, ENTRIES, STYLES, coverEntry, entriesForElement, entriesForStyle, getEntry } from "@/lib/details";
import { fromPrice, pricingFor } from "@/lib/pricing";
import { STYLE_HUBS } from "@/data/hubs";
import { EntryImage } from "@/components/details/EntryImage";
import Link from "next/link";
import Image from "next/image";

export const metadata = generatePageMetadata({
  title: `${SITE_NAME} — Architectural Details, Made for Your Home`,
  description: SITE_DESCRIPTION,
  path: "/",
});

const QUICK_SEARCHES = ["Inglenook", "Linenfold", "Copper hood", "Built-in sideboard", "Peg rail", "Marquetry", "Denver"];

export default function HomePage() {
  const featuredStyle = STYLES.find((s) => s.slug === "arts-and-crafts")!;
  const featuredEntry = getEntry("stickley-living-room-with-boulder-fireplace-and-built-in-bookcase-nook") ?? coverEntry(entriesForStyle("arts-and-crafts"));
  const customEntry = getEntry("entrance-hall-eltham-palace-london") ?? ENTRIES[0];
  const orderable = ELEMENTS.filter((e) => e.custom_status === "orderable");
  const hardware = COLLECTIONS.slice(0, 4);

  return (
    <>
      <JsonLd data={webPageJsonLd({ title: SITE_NAME, description: SITE_DESCRIPTION, path: "/" })} />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center">
        <Image
          src="/images/hero-hardware.png"
          alt="Sunlit luxury home entryway with brass chandelier and decorative hardware"
          fill
          className="object-cover"
          priority
          quality={75}
        />
        <div className="absolute inset-0 bg-cream/70" />

        <div className="relative z-10 text-center px-6 max-w-3xl w-full">
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.08] text-stone mb-6">
            Make a home worth passing down
          </h1>
          <p className="text-base leading-[1.8] text-stone-light mb-10 max-w-xl mx-auto">
            Search {ENTRIES.length} real examples of cabinetry, built-ins, mantels, paneling and doors across twelve styles, then
            have any of them made to fit your home.
          </p>

          <form action="/search" method="get" role="search" className="flex max-w-xl mx-auto mb-6">
            <label htmlFor="home-q" className="sr-only">Search the archive</label>
            <input
              id="home-q"
              name="q"
              type="search"
              placeholder="Search a style, element, motif or wood…"
              className="flex-1 bg-white/90 border border-stone/40 px-5 py-4 text-[15px] text-stone placeholder:text-muted focus:outline-none focus:border-stone"
            />
            <button type="submit" className="bg-stone text-cream px-6 text-[14px] hover:bg-stone-light transition-colors">
              Search
            </button>
          </form>
          <div className="flex flex-wrap justify-center gap-2">
            {QUICK_SEARCHES.map((q) => (
              <Link key={q} href={`/search?q=${encodeURIComponent(q)}`} className="text-[12px] text-stone border border-stone/30 bg-cream/60 px-3 py-1 hover:border-stone">
                {q}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Explore by style */}
      <section className="bg-cream">
        <div className="px-6 lg:px-10 pt-20 pb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[13px] tracking-[0.15em] uppercase text-bark font-medium mb-3">Explore by style</p>
            <h2 className="font-serif text-3xl font-semibold text-stone sm:text-4xl">Twelve styles, told through their details</h2>
          </div>
          <Link href="/styles" className="cta-button text-stone">All styles <span aria-hidden="true">→</span></Link>
        </div>
        <div className="px-6 lg:px-10 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
            {STYLES.map((s) => {
              const product = STYLE_PRODUCTS[s.slug];
              const cover = product ? null : coverEntry(entriesForStyle(s.slug));
              return (
                <div key={s.slug} className="group">
                  <Link href={`/styles/${s.slug}`} className="block">
                    <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark mb-4">
                      {product ? (
                        <Image
                          src={product.image}
                          alt={`${product.product}, ${s.name} style`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-contain p-6 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        cover && (
                          <EntryImage
                            image={cover.image}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        )
                      )}
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-stone mb-1 group-hover:text-muted transition-colors">{s.name}</h3>
                    <p className="text-[13px] text-muted">{s.era}</p>
                  </Link>
                  {product && (
                    <p className="text-[12px] text-light mt-2">
                      Shown:{" "}
                      <a href={product.url} target="_blank" rel="nofollow noopener noreferrer" className="underline decoration-border underline-offset-2 hover:text-muted">
                        {product.product}
                      </a>
                      {" "}· {product.seller}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured style */}
      <section className="bg-cream border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
          <div className="flex flex-col justify-center px-6 lg:px-10 xl:px-20 py-16">
            <p className="text-[13px] tracking-[0.15em] uppercase text-bark font-medium mb-4">Featured style</p>
            <p className="text-[13px] text-muted mb-4">{featuredStyle.era}</p>
            <h2 className="font-serif text-4xl font-semibold text-stone lg:text-5xl mb-6">{featuredStyle.name}</h2>
            <p className="text-base leading-[1.8] text-muted max-w-md mb-8">{STYLE_HUBS[featuredStyle.slug]?.intro[0]}</p>
            <Link href={`/styles/${featuredStyle.slug}`} className="cta-button text-stone self-start">
              Explore {featuredStyle.name} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <Link href={`/details/${featuredEntry.slug}`} className="relative min-h-[420px] group bg-cream-dark">
            <EntryImage
              image={featuredEntry.image}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </Link>
        </div>
      </section>

      {/* Explore by element */}
      <section className="bg-cream-dark">
        <div className="px-6 lg:px-10 pt-20 pb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[13px] tracking-[0.15em] uppercase text-bark font-medium mb-3">Made to order</p>
            <h2 className="font-serif text-3xl font-semibold text-stone sm:text-4xl">Explore by element</h2>
          </div>
          <Link href="/custom" className="cta-button text-stone">Prices and process <span aria-hidden="true">→</span></Link>
        </div>
        <div className="px-6 lg:px-10 pb-20">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-border">
            {orderable.map((el) => (
              <li key={el.slug} className="border-b border-border sm:odd:border-r lg:border-r lg:[&:nth-child(4n)]:border-r-0">
                <Link href={`/elements/${el.slug}`} className="group block p-6 h-full hover:bg-cream transition-colors">
                  <h3 className="font-serif text-xl font-semibold text-stone mb-2 group-hover:text-muted">{el.name}</h3>
                  <p className="text-[13px] text-muted">
                    {entriesForElement(el.slug).length} examples · from {fromPrice(el.slug)} {pricingFor(el.slug)?.unit.split(",")[0]}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Custom work editorial */}
      <section className="bg-stone text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
          <div className="relative min-h-[400px]">
            <EntryImage image={customEntry.image} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center px-6 lg:px-16 xl:px-24 py-20">
            <p className="text-[13px] tracking-[0.15em] uppercase text-white/50 mb-6">Custom work</p>
            <h2 className="font-serif text-3xl font-semibold text-white lg:text-4xl mb-6 leading-snug">
              Every detail in the archive can be made for your home
            </h2>
            <p className="text-base leading-[1.8] text-white/60 max-w-md mb-10">
              Pick a reference, send your measurements, and we design and build it on our CNC with hand finishing where it
              matters. Prices are published for every element, in three tiers from simple to heirloom.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/request" className="cta-button cta-button-light">Start a request <span aria-hidden="true">→</span></Link>
              <Link href="/custom" className="text-[14px] text-white/70 underline self-center hover:text-white">How it works</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Colorado */}
      <section className="bg-cream border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-[13px] tracking-[0.15em] uppercase text-bark font-medium mb-3">Colorado</p>
            <h2 className="font-serif text-3xl font-semibold text-stone sm:text-4xl mb-5">
              Installed along the Front Range and in the mountains
            </h2>
            <p className="text-base leading-[1.8] text-muted max-w-xl">
              Kitchens, built-ins, mudrooms and restoration woodwork for Denver Squares, Victorians, bungalows and mountain homes.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-4 items-start">
            <Link href="/colorado" className="cta-button text-stone">Custom work in Colorado <span aria-hidden="true">→</span></Link>
            <Link href="/colorado/custom-cabinet-cost" className="text-[14px] underline text-muted hover:text-stone">
              What custom cabinets cost in Colorado
            </Link>
          </div>
        </div>
      </section>

      {/* Hardware archive */}
      <section className="bg-cream">
        <div className="px-6 lg:px-10 pt-20 pb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[13px] tracking-[0.15em] uppercase text-bark font-medium mb-3">The hardware archive</p>
            <h2 className="font-serif text-3xl font-semibold text-stone sm:text-4xl">Lighting and hardware by era</h2>
          </div>
          <Link href="/collections" className="cta-button text-stone">All eras <span aria-hidden="true">→</span></Link>
        </div>
        <div className="px-6 lg:px-10 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {hardware.map((col) => (
              <Link key={col.slug} href={`/collections/${col.slug}`} className="group">
                <div className="relative aspect-[4/3] overflow-hidden mb-5">
                  <Image
                    src={col.image}
                    alt={`${col.era} era interior with decorative lighting and hardware`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="font-serif text-lg font-semibold text-stone mb-1 group-hover:text-muted transition-colors">{col.era}</h3>
                <p className="text-[13px] text-muted">{col.period} · {col.pieces.length} pieces</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-cream-dark py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="font-serif text-2xl leading-[1.5] text-stone sm:text-3xl italic">
            &ldquo;The details of a house are where its history lives, and where a new home earns its character.&rdquo;
          </blockquote>
          <div className="mt-8">
            <Link href="/search" className="cta-button text-stone mx-auto">Search the archive <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
