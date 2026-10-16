import { notFound } from "next/navigation";
import Link from "next/link";
import { generatePageMetadata, breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { EntryMasonry } from "@/components/details/EntryCard";
import { STYLE_HUBS, ELEMENT_HUBS } from "@/data/hubs";
import { STYLE_META } from "@/data/styleMeta";
import { COMBO_INDEX_MIN, STYLES, comboPages, entriesFor, getElement, getStyle, hasComboPage, photoEntries } from "@/lib/details";

interface Params {
  style: string;
  element: string;
}

export function generateStaticParams() {
  return comboPages().map((c) => ({ style: c.style, element: c.element }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { style, element } = await params;
  const s = getStyle(style);
  const el = getElement(element);
  if (!s || !el) return {};
  const list = entriesFor(style, element);
  return generatePageMetadata({
    title: `${s.name} ${el.name}: ${list.length} Documented Examples`,
    description: `${list.length} documented ${s.name} ${el.name.toLowerCase()} from museums, archives and historic houses, with notes on design, materials and construction.`,
    path: `/styles/${style}/${element}`,
    noIndex: list.length < COMBO_INDEX_MIN,
  });
}

export default async function ComboPage({ params }: { params: Promise<Params> }) {
  const { style, element } = await params;
  const s = getStyle(style);
  const el = getElement(element);
  if (!s || !el) notFound();
  const list = photoEntries(entriesFor(style, element));
  if (list.length === 0) notFound();
  const meta = STYLE_META[style];
  const otherElements = comboPages().filter((c) => c.style === style && c.element !== element);
  const otherStyles = STYLES.filter((x) => x.slug !== style && hasComboPage(x.slug, element));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Styles", href: "/styles" },
          { name: s.name, href: `/styles/${style}` },
          { name: el.name, href: `/styles/${style}/${element}` },
        ])}
      />
      <JsonLd data={itemListJsonLd(`${s.name} ${el.name}`, list.map((e) => ({ name: e.title, path: `/library/${e.slug}` })))} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Styles", href: "/styles" }, { label: s.name, href: `/styles/${style}` }, { label: el.name }]} />

      <header className="px-5 sm:px-8 lg:px-12 pt-6 pb-14">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">
              <Link href={`/styles/${style}`} className="hover:text-stone">{s.name}</Link>
              <span className="text-light"> · </span>
              <Link href={`/elements/${element}`} className="hover:text-stone">{el.name}</Link>
            </p>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4.1rem)] font-normal leading-[1.04] tracking-[-0.015em] text-stone mb-7">
              {s.name} {el.name.toLowerCase()}
            </h1>
            <div className="prose-editorial max-w-2xl">
              <p className="!text-[19px] !text-stone">{meta?.tagline ?? s.summary}</p>
              {STYLE_HUBS[style]?.intro[1] && <p>{STYLE_HUBS[style].intro[1]}</p>}
              {ELEMENT_HUBS[element]?.[0] && <p>{ELEMENT_HUBS[element][0]}</p>}
            </div>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-14 space-y-8">
            <p className="text-[12px] tracking-[0.14em] uppercase text-light">{list.length} documented examples</p>
            {otherElements.length > 0 && (
              <div>
                <p className="text-[12px] tracking-[0.14em] uppercase text-light mb-3">More {s.name}</p>
                <ul className="space-y-2 text-[15px]">
                  {otherElements.map((c) => (
                    <li key={c.element}>
                      <Link href={`/styles/${style}/${c.element}`} className="text-stone hover:underline">{getElement(c.element)?.name}</Link>{" "}
                      <span className="text-light text-[13px]">{c.count}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {otherStyles.length > 0 && (
              <div>
                <p className="text-[12px] tracking-[0.14em] uppercase text-light mb-3">{el.name} in other styles</p>
                <ul className="space-y-2 text-[15px]">
                  {otherStyles.map((x) => (
                    <li key={x.slug}><Link href={`/styles/${x.slug}/${element}`} className="text-stone hover:underline">{x.name}</Link></li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>

      <section className="px-5 sm:px-8 lg:px-12 pb-24">
        <div className="mx-auto max-w-[1440px]">
          <EntryMasonry entries={list} showStyle={false} showElement={false} />
        </div>
      </section>
    </>
  );
}
