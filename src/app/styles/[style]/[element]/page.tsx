import { notFound } from "next/navigation";
import Link from "next/link";
import { generatePageMetadata, breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { EntryGrid } from "@/components/details/EntryCard";
import { ElementPriceTiers } from "@/components/details/PriceTable";
import { STYLE_HUBS, ELEMENT_HUBS } from "@/data/hubs";
import { COMBO_INDEX_MIN, comboPages, entriesFor, getElement, getStyle, isOrderable } from "@/lib/details";

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
    title: `${s.name} ${el.name}: ${list.length} Historical Examples`,
    description: `Real ${s.name} ${el.name.toLowerCase()} from museums and archives, with notes on how each can be made for your home today.`,
    path: `/styles/${style}/${element}`,
    noIndex: list.length < COMBO_INDEX_MIN,
  });
}

export default async function ComboPage({ params }: { params: Promise<Params> }) {
  const { style, element } = await params;
  const s = getStyle(style);
  const el = getElement(element);
  if (!s || !el) notFound();
  const list = entriesFor(style, element);
  if (list.length === 0) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: s.name, href: `/styles/${style}` },
          { name: el.name, href: `/styles/${style}/${element}` },
        ])}
      />
      <JsonLd data={itemListJsonLd(`${s.name} ${el.name}`, list.map((e) => ({ name: e.title, path: `/details/${e.slug}` })))} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: s.name, href: `/styles/${style}` }, { label: el.name }]} />

      <section className="px-6 lg:px-10 pt-8 pb-14">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <p className="text-[13px] tracking-[0.15em] uppercase text-bark mb-4">{s.era}</p>
            <h1 className="font-serif text-[clamp(2.3rem,4.5vw,3.6rem)] font-semibold leading-[1.1] text-stone mb-6">
              {s.name} {el.name.toLowerCase()}
            </h1>
            <p className="text-[17px] leading-[1.75] text-stone-light mb-4">{s.summary}</p>
            {STYLE_HUBS[style]?.intro[1] && <p className="text-base leading-[1.85] text-muted mb-4">{STYLE_HUBS[style].intro[1]}</p>}
            {ELEMENT_HUBS[element]?.[0] && <p className="text-base leading-[1.85] text-muted">{ELEMENT_HUBS[element][0]}</p>}
          </div>
          <div className="lg:col-span-5 lg:pt-12">
            <p className="text-[14px] text-muted mb-3">{list.length} examples on this page</p>
            <div className="flex flex-wrap gap-3">
              <Link href={`/styles/${style}`} className="text-[13px] underline text-muted hover:text-stone">All {s.name}</Link>
              <Link href={`/elements/${element}`} className="text-[13px] underline text-muted hover:text-stone">All {el.name.toLowerCase()}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-20">
        <div className="mx-auto max-w-[1400px]">
          <EntryGrid entries={list} showStyle={false} showElement={false} />
        </div>
      </section>

      {isOrderable(element) && (
        <section className="border-t border-border px-6 lg:px-10 py-16">
          <div className="mx-auto max-w-[1400px]">
            <h2 className="font-serif text-3xl font-semibold text-stone mb-3">What a custom {s.name} piece costs</h2>
            <p className="text-muted mb-8 max-w-2xl">Published price ranges for custom {el.name.toLowerCase()}. Each example above is tagged with the tier a faithful version would need.</p>
            <ElementPriceTiers element={element} />
            <div className="mt-8">
              <Link href={`/request?style=${style}&element=${element}`} className="cta-button text-stone">
                Request a custom piece <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
