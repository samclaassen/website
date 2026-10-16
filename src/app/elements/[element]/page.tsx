import { notFound } from "next/navigation";
import Link from "next/link";
import { generatePageMetadata, breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { EntryGrid } from "@/components/details/EntryCard";
import { ElementPriceTiers } from "@/components/details/PriceTable";
import { ELEMENT_HUBS } from "@/data/hubs";
import { ELEMENTS, STYLES, entriesForElement, getElement, hasComboPage, isOrderable } from "@/lib/details";
import { fromPrice, pricingFor } from "@/lib/pricing";

interface Params {
  element: string;
}

export function generateStaticParams() {
  return ELEMENTS.map((e) => ({ element: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { element } = await params;
  const el = getElement(element);
  if (!el) return {};
  const from = fromPrice(element);
  const p = pricingFor(element);
  return generatePageMetadata({
    title: `Custom ${el.name}${from ? ` from ${from}` : ""}: Historical Examples by Style`,
    description: `${entriesForElement(element).length} historical ${el.name.toLowerCase()} across twelve styles${
      from && p ? `, with custom versions from ${from} ${p.unit}` : ""
    }.`,
    path: `/elements/${element}`,
  });
}

export default async function ElementPage({ params }: { params: Promise<Params> }) {
  const { element } = await params;
  const el = getElement(element);
  if (!el) notFound();
  const list = entriesForElement(element);
  const orderable = isOrderable(element);
  const groups = STYLES.map((s) => ({ s, items: list.filter((e) => e.style === s.slug) })).filter((g) => g.items.length > 0);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Elements", href: "/elements" },
          { name: el.name, href: `/elements/${element}` },
        ])}
      />
      <JsonLd data={itemListJsonLd(el.name, list.map((e) => ({ name: e.title, path: `/details/${e.slug}` })))} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Elements", href: "/elements" }, { label: el.name }]} />

      <section className="px-6 lg:px-10 pt-8 pb-14">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <p className="text-[13px] tracking-[0.15em] uppercase text-bark mb-4">{orderable ? "Made to order" : "Reference only"}</p>
            <h1 className="font-serif text-[clamp(2.4rem,4.8vw,3.8rem)] font-semibold leading-[1.08] text-stone mb-6">{el.name}</h1>
            {ELEMENT_HUBS[element]?.map((p, i) => (
              <p key={i} className={i === 0 ? "text-[17px] leading-[1.75] text-stone-light mb-4" : "text-base leading-[1.85] text-muted mb-4"}>
                {p}
              </p>
            ))}
          </div>
          <div className="lg:col-span-5 lg:pt-12">
            <p className="text-[13px] tracking-[0.15em] uppercase text-bark mb-3">Browse by style</p>
            <ul className="space-y-2">
              {groups.map(({ s, items }) => (
                <li key={s.slug} className="text-[14px]">
                  <Link
                    href={hasComboPage(s.slug, element) ? `/styles/${s.slug}/${element}` : `#${s.slug}`}
                    className="text-stone hover:text-muted"
                  >
                    {s.name}
                  </Link>{" "}
                  <span className="text-muted">({items.length})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {orderable && (
        <section className="px-6 lg:px-10 pb-16">
          <div className="mx-auto max-w-[1400px]">
            <h2 className="font-serif text-3xl font-semibold text-stone mb-3">Custom {el.name.toLowerCase()} pricing</h2>
            <p className="text-muted mb-8 max-w-2xl">
              Three tiers, from clean and simple to carved showpiece work. Each example below is tagged with the tier a faithful
              custom version would need.
            </p>
            <ElementPriceTiers element={element} />
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <Link href={`/request?element=${element}`} className="cta-button text-stone">
                Request a custom quote <span aria-hidden="true">→</span>
              </Link>
              <Link href="/custom" className="text-[13px] underline text-muted hover:text-stone">Fees, terms and process</Link>
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-border px-6 lg:px-10 py-20">
        <div className="mx-auto max-w-[1400px] space-y-20">
          {groups.map(({ s, items }) => (
            <div key={s.slug} id={s.slug} className="scroll-mt-28">
              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8 border-b border-border pb-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone">
                  {s.name} {el.name.toLowerCase()}
                </h2>
                <Link href={`/styles/${s.slug}`} className="text-[13px] text-muted underline hover:text-stone">About {s.name}</Link>
              </div>
              <EntryGrid entries={items} showStyle={false} showElement={false} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
