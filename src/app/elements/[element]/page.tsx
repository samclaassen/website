import { notFound } from "next/navigation";
import Link from "next/link";
import { generatePageMetadata, breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { EntryImage } from "@/components/details/EntryImage";
import { EntryCard } from "@/components/details/EntryCard";
import { ArticleCard } from "@/components/journal/ArticleCard";
import { ELEMENT_HUBS } from "@/data/hubs";
import { groupForElement } from "@/data/elementGroups";
import { articlesForElement } from "@/data/journal";
import { ELEMENTS, STYLES, entriesForElement, getElement, hasComboPage, isCatalogPlate, photoEntries } from "@/lib/details";

interface Params {
  element: string;
}

export function generateStaticParams() {
  return ELEMENTS.map((e) => ({ element: e.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { element } = await params;
  const el = getElement(element);
  if (!el) return {};
  const n = entriesForElement(element).length;
  const styles = new Set(entriesForElement(element).map((e) => e.style)).size;
  return generatePageMetadata({
    title: `Traditional ${el.name}: Designs by Architectural Style`,
    description: `${n} documented ${el.name.toLowerCase()} across ${styles} architectural styles. ${ELEMENT_HUBS[element]?.[0]?.split(". ")[0] ?? ""}.`.slice(0, 300),
    path: `/elements/${element}`,
  });
}

export default async function ElementPage({ params }: { params: Promise<Params> }) {
  const { element } = await params;
  const el = getElement(element);
  if (!el) notFound();
  const list = entriesForElement(element);
  const group = groupForElement(element);
  const byStyle = STYLES.map((s) => ({ s, items: photoEntries(list.filter((e) => e.style === s.slug)) }))
    .filter((g) => g.items.length > 0)
    // Styles with documented photographs first, then those shown through period catalogs.
    .sort((a, b) => b.items.filter((e) => !isCatalogPlate(e)).length - a.items.filter((e) => !isCatalogPlate(e)).length);
  const siblings = (group?.elements ?? []).filter((x) => x !== element).map((x) => getElement(x)).filter(Boolean);
  const reading = articlesForElement(element).slice(0, 3);
  const hub = ELEMENT_HUBS[element] ?? [];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Architectural Elements", href: "/elements" },
          { name: el.name, href: `/elements/${element}` },
        ])}
      />
      <JsonLd data={itemListJsonLd(el.name, list.map((e) => ({ name: e.title, path: `/library/${e.slug}` })))} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Architectural Elements", href: "/elements" }, { label: el.name }]} />

      <header className="px-5 sm:px-8 lg:px-12 pt-6 pb-14">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">{group ? <Link href={`/elements#${group.slug}`} className="hover:text-stone">{group.name}</Link> : "Architectural elements"}</p>
            <h1 className="font-serif text-[clamp(2.6rem,5.4vw,4.5rem)] font-normal leading-[1.02] tracking-[-0.015em] text-stone mb-7">
              Traditional {el.name.toLowerCase()}
            </h1>
            <div className="prose-editorial max-w-2xl">
              {hub.map((p, i) => (
                <p key={i} className={i === 0 ? "!text-[19px] !text-stone" : ""}>{p}</p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-14">
            <p className="text-[12px] tracking-[0.14em] uppercase text-light mb-4">{list.length} examples in {byStyle.length} styles</p>
            {siblings.length > 0 && (
              <div className="mb-8">
                <p className="text-[12px] tracking-[0.14em] uppercase text-light mb-3">Also in {group?.name}</p>
                <ul className="space-y-2 text-[15px]">
                  {siblings.map((x) => (
                    <li key={x!.slug}><Link href={`/elements/${x!.slug}`} className="text-stone hover:underline">{x!.name}</Link></li>
                  ))}
                </ul>
              </div>
            )}
            <Link href={`/library?element=${element}`} className="text-link">Filter {el.name.toLowerCase()} in the library <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </header>

      {/* Browse by style */}
      <section className="px-5 sm:px-8 lg:px-12 pb-20">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="eyebrow mb-6">Browse by style</h2>
          <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-2 -mx-5 px-5 sm:mx-0 sm:px-0 snap-x">
            {byStyle.map(({ s, items }) => {
              const c = items.find((e) => e.image.local) ?? items[0];
              return (
                <a key={s.slug} href={hasComboPage(s.slug, element) ? `/styles/${s.slug}/${element}` : `#${s.slug}`} className="group block flex-none w-[180px] sm:w-[210px] snap-start">
                  <div className="relative aspect-[4/5] overflow-hidden bg-cream-dark mb-3">
                    <EntryImage image={c.image} fill sizes="210px" className={`img-quiet ${isCatalogPlate(c) ? "object-contain p-3" : "object-cover"}`} />
                  </div>
                  <p className="font-serif text-[18px] leading-[1.2] text-stone">{s.name}</p>
                  <p className="mt-1 text-[12px] text-light">{items.length} {items.length === 1 ? "example" : "examples"}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design gallery by style */}
      <section className="border-t border-border px-5 sm:px-8 lg:px-12 py-20">
        <div className="mx-auto max-w-[1440px] space-y-20">
          {byStyle.map(({ s, items }) => (
            <div key={s.slug} id={s.slug} className="scroll-mt-28">
              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-7 border-b border-border pb-4">
                <h2 className="font-serif text-[clamp(1.5rem,2.2vw,1.9rem)] font-normal text-stone">
                  {s.name} {el.name.toLowerCase()}
                  <span className="ml-3 text-[14px] font-sans text-light">{items.length}</span>
                </h2>
                <div className="flex gap-5 text-[13.5px]">
                  {hasComboPage(s.slug, element) && (
                    <Link href={`/styles/${s.slug}/${element}`} className="text-stone underline underline-offset-[3px] decoration-border-strong hover:decoration-stone">Collection</Link>
                  )}
                  <Link href={`/styles/${s.slug}`} className="text-muted hover:text-stone">About {s.name}</Link>
                </div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 sm:gap-x-6 gap-y-10">
                {items.map((e) => (
                  <EntryCard key={e.slug} entry={e} showStyle={false} showElement={false} aspect="portrait" sizes="(max-width: 1024px) 50vw, 25vw" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {reading.length > 0 && (
        <section className="bg-cream-dark/60 px-5 sm:px-8 lg:px-12 py-20">
          <div className="mx-auto max-w-[1440px]">
            <p className="eyebrow mb-8">Related reading</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
              {reading.map((a) => <ArticleCard key={a.slug} article={a} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
