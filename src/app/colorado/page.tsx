import Link from "next/link";
import { generatePageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { EntryCard } from "@/components/details/EntryCard";
import { ENTRIES, getStyle } from "@/lib/details";
import { STYLE_HUBS } from "@/data/hubs";

const DESCRIPTION =
  "A guide to the architectural styles found in Colorado houses, from Denver Squares and Capitol Hill Victorians to Craftsman bungalows, Tudor Revival, mid-century houses and mountain lodges, with documented local examples.";

export const metadata = generatePageMetadata({
  title: "Colorado Architecture: House Styles and Woodwork",
  description: DESCRIPTION,
  path: "/colorado",
});

const COLORADO_STYLES = ["denver-square", "victorian", "arts-and-crafts", "tudor-revival", "mid-century-modern", "mountain-modern", "alpine-chalet"];

const COLORADO_ENTRY_PATTERNS = [/molly-brown/, /grand-lake/, /curtis/, /mountain-camp/];

export default function ColoradoPage() {
  const local = ENTRIES.filter((e) => COLORADO_ENTRY_PATTERNS.some((p) => p.test(e.slug))).slice(0, 8);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Colorado", href: "/colorado" }])} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Colorado" }]} />

      <section className="px-5 sm:px-8 lg:px-12 pt-6 pb-16">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">Regional guide</p>
            <h1 className="font-serif text-[clamp(2.6rem,5vw,4.25rem)] font-normal leading-[1.04] tracking-[-0.015em] text-stone mb-7">
              Colorado architecture and its woodwork
            </h1>
            <div className="prose-editorial">
              <p className="!text-[19px] !text-stone">{DESCRIPTION}</p>
              <p>
                Colorado&rsquo;s very dry air also shapes its woodwork: solid wood shrinks and moves more here than in most of the country, which is
                why wide solid panels in older houses often show gaps or cracks.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-14">
            <p className="text-[12px] tracking-[0.14em] uppercase text-light mb-3">Related reading</p>
            <Link href="/journal/custom-cabinet-cost-colorado" className="text-link">Custom cabinet cost in Colorado <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-border px-5 sm:px-8 lg:px-12 py-20">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-serif text-[clamp(1.9rem,3vw,2.6rem)] font-normal text-stone mb-10">Styles found in Colorado houses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {COLORADO_STYLES.map((slug) => {
              const s = getStyle(slug)!;
              return (
                <Link key={slug} href={`/styles/${slug}`} className="group border-t border-border pt-5">
                  <h3 className="font-serif text-[24px] text-stone group-hover:text-stone-light mb-2">{s.name}</h3>
                  <p className="text-[14.5px] leading-[1.7] text-muted">{STYLE_HUBS[slug]?.colorado ?? s.summary}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {local.length > 0 && (
        <section className="px-5 sm:px-8 lg:px-12 py-20">
          <div className="mx-auto max-w-[1440px]">
            <h2 className="font-serif text-[clamp(1.9rem,3vw,2.6rem)] font-normal text-stone mb-3">Details with Colorado connections</h2>
            <p className="text-muted mb-10 max-w-2xl">
              From Denver&rsquo;s Molly Brown House to Grand Lake Lodge and the stock millwork that finished Denver Squares.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {local.map((e) => <EntryCard key={e.slug} entry={e} aspect="portrait" />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
