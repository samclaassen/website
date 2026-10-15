import { notFound } from "next/navigation";
import Link from "next/link";
import { generatePageMetadata, breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { EntryImage } from "@/components/details/EntryImage";
import { EntryGrid } from "@/components/details/EntryCard";
import { STYLE_HUBS } from "@/data/hubs";
import {
  ELEMENTS,
  STYLES,
  coverEntry,
  entriesForStyle,
  getStyle,
  hasComboPage,
  humanize,
  isCatalogPlate,
} from "@/lib/details";

interface Params {
  style: string;
}

export function generateStaticParams() {
  return STYLES.map((s) => ({ style: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { style } = await params;
  const s = getStyle(style);
  if (!s) return {};
  return generatePageMetadata({
    title: `${s.name} Interiors: Woodwork, Cabinetry and Details`,
    description: `${s.summary} See ${entriesForStyle(style).length} real examples and how each can be made for your home.`,
    path: `/styles/${style}`,
  });
}

export default async function StylePage({ params }: { params: Promise<Params> }) {
  const { style } = await params;
  const s = getStyle(style);
  if (!s) notFound();
  const hub = STYLE_HUBS[style];
  const list = entriesForStyle(style);
  const cover = coverEntry(list);
  const groups = ELEMENTS.map((el) => ({ el, items: list.filter((e) => e.element === el.slug) })).filter((g) => g.items.length > 0);
  const others = STYLES.filter((x) => x.slug !== style);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Styles", href: "/styles" },
          { name: s.name, href: `/styles/${style}` },
        ])}
      />
      <JsonLd data={itemListJsonLd(`${s.name} details`, list.map((e) => ({ name: e.title, path: `/details/${e.slug}` })))} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Styles", href: "/styles" }, { label: s.name }]} />

      {/* Header split */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
        <div className="flex flex-col justify-center px-6 lg:px-10 xl:px-20 py-12">
          <p className="text-[13px] tracking-[0.15em] uppercase text-bark mb-4">{s.era}</p>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.08] text-stone mb-6">{s.name}</h1>
          <p className="text-[17px] leading-[1.75] text-stone-light max-w-xl mb-6">{s.summary}</p>
          {hub?.intro.map((p, i) => (
            <p key={i} className="text-base leading-[1.85] text-muted max-w-xl mb-4">{p}</p>
          ))}
        </div>
        <div className="relative min-h-[420px] bg-cream-dark">
          {cover && <EntryImage image={cover.image} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className={isCatalogPlate(cover) ? "object-contain p-8" : "object-cover"} />}
        </div>
      </section>

      {/* How to identify */}
      {hub && (
        <section className="bg-cream-dark px-6 lg:px-10 py-16">
          <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-3xl font-semibold text-stone">How to recognize {s.name}</h2>
            </div>
            <ul className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
              {hub.identify.map((item) => (
                <li key={item} className="text-[15px] leading-[1.7] text-stone border-t border-border pt-4">{item}</li>
              ))}
            </ul>
            {hub.colorado && (
              <p className="lg:col-start-5 lg:col-span-8 text-[14px] leading-[1.7] text-muted">
                <span className="text-bark uppercase tracking-[0.12em] text-[12px] mr-2">In Colorado</span>
                {hub.colorado}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Entries grouped by element */}
      <section className="px-6 lg:px-10 py-20">
        <div className="mx-auto max-w-[1400px] space-y-20">
          {groups.map(({ el, items }) => (
            <div key={el.slug}>
              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8 border-b border-border pb-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone">
                  {s.name} {el.name.toLowerCase()}
                </h2>
                {hasComboPage(style, el.slug) ? (
                  <Link href={`/styles/${style}/${el.slug}`} className="text-[13px] text-muted underline hover:text-stone">
                    See all {items.length}
                  </Link>
                ) : (
                  <Link href={`/elements/${el.slug}`} className="text-[13px] text-muted underline hover:text-stone">
                    All {el.name.toLowerCase()}
                  </Link>
                )}
              </div>
              <EntryGrid entries={items} showStyle={false} showElement={false} />
            </div>
          ))}
        </div>
      </section>

      {/* Signature motifs & materials */}
      <section className="border-t border-border px-6 lg:px-10 py-16">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-[13px] tracking-[0.15em] uppercase text-bark mb-4">Signature motifs</h2>
            <div className="flex flex-wrap gap-2">
              {s.signature_motifs.map((m) => (
                <Link key={m} href={`/search?q=${encodeURIComponent(humanize(m))}`} className="text-[13px] text-stone border border-border px-3 py-1 hover:border-stone">
                  {humanize(m)}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-[13px] tracking-[0.15em] uppercase text-bark mb-4">Typical woods and materials</h2>
            <div className="flex flex-wrap gap-2">
              {s.signature_materials.map((m) => (
                <Link key={m} href={`/search?q=${encodeURIComponent(humanize(m))}`} className="text-[13px] text-stone border border-border px-3 py-1 hover:border-stone">
                  {humanize(m)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA + other styles */}
      <section className="bg-stone text-white px-6 lg:px-10 py-20">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-3xl font-semibold mb-4">Have a {s.name} detail made for your home</h2>
            <p className="text-white/60 leading-[1.8] mb-8 max-w-md">
              Choose any example above as a starting point. We adapt it to your measurements and make it on our CNC,
              with published price ranges for every element.
            </p>
            <Link href="/custom" className="cta-button cta-button-light">How custom work works <span aria-hidden="true">→</span></Link>
          </div>
          <div>
            <p className="text-[13px] tracking-[0.15em] uppercase text-white/40 mb-4">Other styles</p>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-6">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/styles/${o.slug}`} className="text-[14px] text-white/70 hover:text-white">{o.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
