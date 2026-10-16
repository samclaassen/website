import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { generatePageMetadata, breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { EntryImage } from "@/components/details/EntryImage";
import { EntryCard } from "@/components/details/EntryCard";
import { ArticleCard } from "@/components/journal/ArticleCard";
import { STYLE_HUBS } from "@/data/hubs";
import { STYLE_META } from "@/data/styleMeta";
import { ELEMENT_GROUPS } from "@/data/elementGroups";
import { articlesForStyle } from "@/data/journal";
import {
  STYLES,
  allTags,
  coverEntry,
  entriesForStyle,
  getElement,
  getEntry,
  getStyle,
  hasComboPage,
  humanize,
  isCatalogPlate,
  photoEntries,
  type Entry,
} from "@/lib/details";

interface Params {
  style: string;
}

/** Larger hero files available for some styles (downloaded at 2400px+). */
const HERO_LARGE: Record<string, string> = {
  "16th-century-stube-from-the-courthouse-in-niederdorf-tiroler-volkskunstmuseum":
    "/images/details/16th-century-stube-from-the-courthouse-in-niederdorf-tiroler-volkskunstmuseum-2400.jpg",
};

const DETAIL_ELEMENTS = new Set(["corbels-brackets-ornament", "trim-moulding", "metal-hardware"]);

export function generateStaticParams() {
  return STYLES.map((s) => ({ style: s.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { style } = await params;
  const s = getStyle(style);
  if (!s) return {};
  const meta = STYLE_META[style];
  return generatePageMetadata({
    title: `${s.name} Interiors: Doors, Paneling, Cabinetry and Details`,
    description: `${meta?.tagline ?? s.summary} A visual guide to ${s.name} woodwork with ${entriesForStyle(style).length} documented examples.`,
    path: `/styles/${style}`,
  });
}

export default async function StylePage({ params }: { params: Promise<Params> }) {
  const { style } = await params;
  const s = getStyle(style);
  if (!s) notFound();
  const hub = STYLE_HUBS[style];
  const meta = STYLE_META[style];
  const list = entriesForStyle(style);
  const cover = (meta && getEntry(meta.cover)) || coverEntry(list);
  const heroLarge = cover ? HERO_LARGE[cover.slug] : undefined;
  const photos = photoEntries(list).filter((e) => e.slug !== cover?.slug);

  // Characteristic imagery: four photographs, preferring different elements.
  const characterImages: Entry[] = [];
  for (const e of photos) {
    if (characterImages.length >= 4) break;
    if (!e.image.local) continue;
    if (characterImages.some((c) => c.element === e.element) && photos.filter((p) => p.image.local).length > 8) continue;
    characterImages.push(e);
  }

  // The style applied across element groups (only groups with content).
  const groups = ELEMENT_GROUPS.map((g) => ({ g, items: photoEntries(list.filter((e) => g.elements.includes(e.element))) })).filter(
    (x) => x.items.length > 0,
  );

  // Signature details: ornament, trim and hardware first, then close views.
  const signature = [
    ...list.filter((e) => DETAIL_ELEMENTS.has(e.element)),
    ...list.filter((e) => /detail|carv|panel|bracket|corbel|ornament/i.test(e.slug) && !DETAIL_ELEMENTS.has(e.element)),
  ]
    .filter((e, i, arr) => arr.findIndex((x) => x.slug === e.slug) === i && e.slug !== cover?.slug)
    .slice(0, 4);

  const materialSlugs = new Set(allTags("materials").map((t) => t.slug));
  const motifSlugs = new Set(allTags("motifs").map((t) => t.slug));
  const related = (meta?.related ?? []).map((r) => ({ ...r, style: getStyle(r.slug), cover: getEntry(STYLE_META[r.slug]?.cover ?? "") })).filter((r) => r.style);
  const reading = articlesForStyle(style).slice(0, 3);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Styles", href: "/styles" },
          { name: s.name, href: `/styles/${style}` },
        ])}
      />
      <JsonLd data={itemListJsonLd(`${s.name} details`, list.map((e) => ({ name: e.title, path: `/library/${e.slug}` })))} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Styles", href: "/styles" }, { label: s.name }]} />

      {/* Hero */}
      <header className="px-5 sm:px-8 lg:px-12 pt-6 pb-12">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">{meta?.context ?? s.era}</p>
            <h1 className="font-serif text-[clamp(3rem,7vw,5.5rem)] font-normal leading-[0.98] tracking-[-0.02em] text-stone">{s.name}</h1>
          </div>
          <p className="lg:col-span-5 font-serif text-[clamp(1.2rem,1.8vw,1.5rem)] leading-[1.45] text-stone-light">{meta?.tagline ?? s.summary}</p>
        </div>
      </header>
      {cover && (
        <figure className="px-5 sm:px-8 lg:px-12 mb-20">
          <div className="mx-auto max-w-[1440px]">
            <div className={`relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] overflow-hidden ${isCatalogPlate(cover) ? "bg-[#ece6d8]" : "bg-cream-dark"}`}>
              {heroLarge ? (
                <Image src={heroLarge} alt={cover.image.alt} fill priority sizes="100vw" className="object-cover" />
              ) : (
                <EntryImage image={cover.image} fill priority sizes="100vw" className={isCatalogPlate(cover) ? "object-contain p-6" : "object-cover"} />
              )}
            </div>
            <figcaption className="mt-3 text-[12.5px] text-light">
              <Link href={`/library/${cover.slug}`} className="underline hover:text-stone">{cover.title}</Link>. {cover.image.credit}.
            </figcaption>
          </div>
        </figure>
      )}

      {/* Introduction */}
      {hub && (
        <section className="px-5 sm:px-8 lg:px-12 pb-20">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-8">
            <p className="lg:col-span-3 eyebrow">Introduction</p>
            <div className="lg:col-span-7 prose-editorial">
              {hub.intro.map((p, i) => (
                <p key={i} className={i === 0 ? "!text-[19px] !leading-[1.7] !text-stone" : ""}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Visual characteristics */}
      {hub && (
        <section className="bg-surface border-y border-border px-5 sm:px-8 lg:px-12 py-20 sm:py-24">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4">Visual characteristics</p>
              <h2 className="font-serif text-[clamp(2rem,3.4vw,2.9rem)] font-normal leading-[1.08] text-stone mb-8">How to recognize {s.name}</h2>
              <ol className="border-t border-border">
                {hub.identify.map((item, i) => (
                  <li key={item} className="grid grid-cols-[40px_1fr] gap-2 border-b border-border py-4">
                    <span className="font-serif text-[18px] text-light">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[16px] leading-[1.6] text-stone">{item}</span>
                  </li>
                ))}
              </ol>
              {hub.colorado && (
                <p className="mt-8 text-[14px] leading-[1.7] text-muted">
                  <span className="eyebrow mr-2">In Colorado</span>
                  {hub.colorado}
                </p>
              )}
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-5 self-start">
              {characterImages.map((e, i) => (
                <Link key={e.slug} href={`/library/${e.slug}`} className={`group block ${i % 2 === 1 ? "sm:mt-10" : ""}`}>
                  <div className="relative aspect-[4/5] overflow-hidden bg-cream-dark mb-2.5">
                    <EntryImage image={e.image} fill sizes="(max-width: 1024px) 50vw, 30vw" className={`img-quiet ${isCatalogPlate(e) ? "object-contain p-3" : "object-cover"}`} />
                  </div>
                  <p className="text-[13px] leading-[1.45] text-muted">{e.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Explore architectural elements */}
      <section className="px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">Across the house</p>
            <h2 className="font-serif text-[clamp(2rem,3.4vw,2.9rem)] font-normal leading-[1.08] text-stone">
              {s.name} by architectural element
            </h2>
          </div>
          <div className="space-y-20">
            {groups.map(({ g, items }) => {
              const elementsHere = [...new Set(items.map((e) => e.element))];
              const single = elementsHere.length === 1 ? elementsHere[0] : null;
              const href = single && hasComboPage(style, single) ? `/styles/${style}/${single}` : `/library?style=${style}${single ? `&element=${single}` : ""}`;
              return (
                <div key={g.slug}>
                  <div className="flex flex-wrap items-baseline justify-between gap-4 mb-7 border-b border-border pb-4">
                    <h3 className="font-serif text-[clamp(1.5rem,2.2vw,1.9rem)] font-normal text-stone">
                      {s.name} {g.name.toLowerCase()}
                      <span className="ml-3 text-[14px] font-sans text-light">{items.length}</span>
                    </h3>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 text-[13.5px]">
                      {elementsHere.length > 1 &&
                        elementsHere.map((el) => (
                          <Link
                            key={el}
                            href={hasComboPage(style, el) ? `/styles/${style}/${el}` : `/library?style=${style}&element=${el}`}
                            className="text-muted hover:text-stone"
                          >
                            {getElement(el)?.name}
                          </Link>
                        ))}
                      <Link href={href} className="text-stone underline underline-offset-[3px] decoration-border-strong hover:decoration-stone">
                        See all <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 sm:gap-x-6 gap-y-10">
                    {items.slice(0, 4).map((e) => (
                      <EntryCard key={e.slug} entry={e} showStyle={false} aspect="portrait" sizes="(max-width: 1024px) 50vw, 25vw" />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Signature details */}
      {signature.length >= 2 && (
        <section className="bg-cream-dark/60 px-5 sm:px-8 lg:px-12 py-20">
          <div className="mx-auto max-w-[1440px]">
            <p className="eyebrow mb-4">Signature details</p>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] font-normal leading-[1.1] text-stone mb-10">Look closer</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {signature.map((e) => (
                <Link key={e.slug} href={`/library/${e.slug}`} className="group block">
                  <div className="relative aspect-square overflow-hidden bg-cream-dark mb-3">
                    <EntryImage image={e.image} fill sizes="(max-width: 1024px) 50vw, 25vw" className={`img-quiet ${isCatalogPlate(e) ? "object-contain p-3" : "object-cover"}`} />
                  </div>
                  <p className="font-serif text-[17px] leading-[1.3] text-stone">{e.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Materials and motifs */}
      <section className="px-5 sm:px-8 lg:px-12 py-20">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3"><p className="eyebrow">Materials and motifs</p></div>
          <div className="md:col-span-4">
            <h2 className="font-serif text-[22px] text-stone mb-4">Typical woods and materials</h2>
            <ul className="flex flex-wrap gap-2">
              {s.signature_materials.map((m) => (
                <li key={m}>
                  {materialSlugs.has(m) ? (
                    <Link href={`/library?material=${m}`} className="inline-block text-[13.5px] text-stone border border-border px-3 py-1.5 hover:border-stone">{humanize(m)}</Link>
                  ) : (
                    <span className="inline-block text-[13.5px] text-muted border border-border px-3 py-1.5">{humanize(m)}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-5">
            <h2 className="font-serif text-[22px] text-stone mb-4">Recurring motifs</h2>
            <ul className="flex flex-wrap gap-2">
              {s.signature_motifs.map((m) => (
                <li key={m}>
                  {motifSlugs.has(m) ? (
                    <Link href={`/library?motif=${m}`} className="inline-block text-[13.5px] text-stone border border-border px-3 py-1.5 hover:border-stone">{humanize(m)}</Link>
                  ) : (
                    <span className="inline-block text-[13.5px] text-muted border border-border px-3 py-1.5">{humanize(m)}</span>
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[13px] leading-[1.6] text-light">
              Historical materials are listed; many new interpretations substitute stable engineered cores, veneers or paint-grade woods.
            </p>
          </div>
        </div>
      </section>

      {/* Related styles */}
      {related.length > 0 && (
        <section className="border-t border-border px-5 sm:px-8 lg:px-12 py-20">
          <div className="mx-auto max-w-[1440px]">
            <p className="eyebrow mb-4">Related styles</p>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] font-normal leading-[1.1] text-stone mb-10">Neighboring traditions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((r) => (
                <Link key={r.slug} href={`/styles/${r.slug}`} className="group grid grid-cols-[112px_1fr] gap-5 items-start">
                  <div className="relative aspect-square overflow-hidden bg-cream-dark">
                    {r.cover && <EntryImage image={r.cover.image} fill sizes="112px" className={`img-quiet ${isCatalogPlate(r.cover) ? "object-contain p-2" : "object-cover"}`} />}
                  </div>
                  <div>
                    <h3 className="font-serif text-[22px] leading-[1.2] text-stone mb-2">{r.style!.name}</h3>
                    <p className="text-[14px] leading-[1.6] text-muted">{r.note}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related reading */}
      {reading.length > 0 && (
        <section className="border-t border-border px-5 sm:px-8 lg:px-12 py-20">
          <div className="mx-auto max-w-[1440px]">
            <p className="eyebrow mb-4">Related reading</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 mt-8">
              {reading.map((a) => <ArticleCard key={a.slug} article={a} />)}
            </div>
          </div>
        </section>
      )}

      <aside className="px-5 sm:px-8 lg:px-12 py-12 border-t border-border">
        <div className="mx-auto max-w-[1440px] flex flex-wrap items-center justify-between gap-4 text-[13.5px] text-light">
          <p>
            {list.length} documented {s.name} details in the{" "}
            <Link href={`/library?style=${style}`} className="underline hover:text-stone">Design Library</Link>.
          </p>
          <p>
            Custom commissions are in preparation. <Link href="/custom" className="underline hover:text-stone">Learn more</Link>
          </p>
        </div>
      </aside>
    </>
  );
}
