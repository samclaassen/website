import Link from "next/link";
import { generatePageMetadata, breadcrumbJsonLd, faqJsonLd, articleJsonLd } from "@/lib/seo";
import { EntryImage } from "@/components/details/EntryImage";
import { ArticleCard } from "@/components/journal/ArticleCard";
import { ARTICLES, getArticle } from "@/data/journal";
import { getEntry } from "@/lib/details";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

const ANSWER =
  "Custom kitchen cabinets in Colorado typically cost about $500 to $1,200 per linear foot installed, according to national cost guides' Denver figures, with semi-custom cabinets around $200 to $550 per linear foot. A standard 10-by-10-foot kitchen has about 20 linear feet of cabinets, so custom cabinetry for it usually runs about $10,000 to $24,000 installed.";

export const metadata = generatePageMetadata({
  title: "Custom Cabinet Cost in Colorado (2026 Guide)",
  description: ANSWER,
  path: "/journal/custom-cabinet-cost-colorado",
});

const BENCHMARKS = [
  { measure: "Custom cabinets, Denver, installed", range: "$500–$1,200 per linear foot", source: "HomeGuide (Denver)", url: "https://homeguide.com/co/denver/custom-cabinet-makers" },
  { measure: "Custom cabinets, Denver, installed", range: "$500–$1,500+ per linear foot", source: "UncoverDenver", url: "https://www.uncoverdenver.com/best-cabinet-maker-denver" },
  { measure: "Custom cabinetry, Denver (average)", range: "About $689 per linear foot; range $265–$1,591", source: "Renovetted", url: "https://www.renovetted.com/cost/cabinetry/colorado/denver" },
  { measure: "Semi-custom cabinets, Denver", range: "$200–$550 per linear foot", source: "HomeGuide; UncoverDenver", url: "https://homeguide.com/co/denver/custom-cabinet-makers" },
  { measure: "All cabinet types, Denver / Colorado Springs", range: "$260–$570 / $240–$530 per linear foot", source: "HomeBlue", url: "https://www.homeblue.com/cabinets/denver-co-cost-of-kitchen-cabinets.htm" },
  { measure: "Cabinetmaker labor, Denver", range: "About $90–$110 per hour", source: "UncoverDenver", url: "https://www.uncoverdenver.com/best-cabinet-maker-denver" },
  { measure: "Cabinet installation, Colorado", range: "$50–$250 per linear foot", source: "VL Builders", url: "https://www.vlbuilders.com/blog/cost-of-kitchen-cabinets-in-colorado" },
];

const FAQS = [
  { question: "How much do custom cabinets cost per linear foot in Colorado?", answer: "Most Colorado estimates put fully custom cabinets at about $500 to $1,200 per linear foot installed, with premium woods, inset construction and carved details pushing higher." },
  { question: "How much does a 10x10 kitchen of custom cabinets cost in Denver?", answer: "A 10x10 kitchen has about 20 linear feet of cabinets. At $500 to $1,200 per linear foot, custom cabinets for it typically cost about $10,000 to $24,000 installed, before countertops and appliances." },
  { question: "Why are custom cabinets more expensive in the mountains?", answer: "Mountain projects add travel time, delivery to sites that can be hard to reach in winter, and sometimes lodging for installers. These costs are usually quoted separately." },
  { question: "Does Colorado’s dry climate affect cabinets?", answer: "Yes. Very low indoor humidity makes solid wood shrink, so wide solid panels can crack or gap. Stable construction such as veneered or engineered panels, proper acclimation and allowance for movement help cabinets last." },
];

export default function ColoradoCostPage() {
  const a = getArticle("custom-cabinet-cost-colorado")!;
  const hero = getEntry(a.heroEntry);
  const others = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 3);
  const h2 = "font-serif text-[clamp(1.6rem,2.4vw,2.1rem)] font-normal leading-[1.2] text-stone mt-14 mb-5";
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Journal", href: "/journal" }, { name: a.title, href: `/journal/${a.slug}` }])} />
      <JsonLd data={articleJsonLd({ slug: a.slug, title: a.title, description: a.description, imageUrl: hero?.image.src, published: a.published, reviewed: a.reviewed })} />
      <JsonLd data={faqJsonLd(FAQS)} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Journal", href: "/journal" }, { label: a.shortTitle ?? a.title }]} />

      <article className="pb-24">
        <header className="px-5 sm:px-8 lg:px-12 pt-6 pb-12">
          <div className="mx-auto max-w-[900px]">
            <p className="eyebrow mb-5">{a.kicker} · Updated October 2026</p>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4.1rem)] font-normal leading-[1.05] tracking-[-0.015em] text-stone mb-6">{a.title}</h1>
            <p className="font-serif text-[clamp(1.2rem,1.8vw,1.45rem)] leading-[1.5] text-stone-light">{ANSWER}</p>
          </div>
        </header>

        {hero && (
          <figure className="px-5 sm:px-8 lg:px-12 mb-14">
            <div className="mx-auto max-w-[1440px]">
              <div className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-cream-dark">
                <EntryImage image={hero.image} fill priority sizes="100vw" className="object-cover" />
              </div>
              <figcaption className="mt-3 text-[12.5px] text-light">
                <Link href={`/library/${hero.slug}`} className="underline hover:text-stone">{hero.title}</Link>. {hero.image.credit}.
              </figcaption>
            </div>
          </figure>
        )}

        <div className="px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[760px] prose-editorial">
            <h2 className={h2}>Colorado price benchmarks</h2>
            <p>Published third-party estimates for Denver and Colorado, checked October 2026. Listed ranges are estimates, not quotes or transaction data.</p>
            <div className="overflow-x-auto border border-border mb-10 not-prose">
              <table className="w-full text-left text-[14px]">
                <thead className="bg-cream-dark text-[11px] uppercase tracking-[0.12em] text-muted">
                  <tr><th className="p-4 font-medium">Measure</th><th className="p-4 font-medium">Range</th><th className="p-4 font-medium">Source</th></tr>
                </thead>
                <tbody>
                  {BENCHMARKS.map((b) => (
                    <tr key={b.measure + b.source} className="border-t border-border align-top">
                      <td className="p-4 text-stone">{b.measure}</td>
                      <td className="p-4 text-stone">{b.range}</td>
                      <td className="p-4"><a href={b.url} className="underline text-muted hover:text-stone" target="_blank" rel="noopener">{b.source}</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className={h2}>What changes the price</h2>
            <ul className="space-y-3 text-[17px] leading-[1.75] text-stone-light mb-10 list-disc pl-5 marker:text-border-strong">
              <li><strong className="text-stone font-medium">Linear footage and layout.</strong> More cabinets, tall pantry units, islands and corners add cost.</li>
              <li><strong className="text-stone font-medium">Construction.</strong> Frameless and framed full-overlay boxes cost less than inset construction.</li>
              <li><strong className="text-stone font-medium">Species and finish.</strong> Paint-grade and plain-sawn oak cost less than quarter-sawn oak, walnut or custom stains.</li>
              <li><strong className="text-stone font-medium">Detail.</strong> Applied mouldings, glazed doors, carving and period hardware add design and shop time.</li>
              <li><strong className="text-stone font-medium">Location.</strong> Mountain towns add travel and delivery, especially in winter.</li>
              <li><strong className="text-stone font-medium">Climate.</strong> Colorado’s dry air calls for stable panel construction and careful acclimation of solid wood.</li>
            </ul>
            <p>
              For period houses, the most useful starting point is the original woodwork. Denver Squares, for example, were finished with stock
              millwork of the day; see the <Link href="/styles/denver-square">Denver Square guide</Link> and the{" "}
              <Link href="/elements/kitchen-cabinets">kitchen cabinetry</Link> in the library.
            </p>

            <h2 className={h2}>Questions</h2>
            <dl className="divide-y divide-border border-y border-border mb-6">
              {FAQS.map((f) => (
                <div key={f.question} className="py-6">
                  <dt className="font-serif text-[20px] text-stone mb-2">{f.question}</dt>
                  <dd className="text-[15.5px] leading-[1.75] text-muted">{f.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </article>

      <section className="px-5 sm:px-8 lg:px-12 py-20 border-t border-border">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-serif text-[clamp(1.8rem,2.6vw,2.4rem)] font-normal text-stone mb-10">More from the Journal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14">
            {others.map((o) => <ArticleCard key={o.slug} article={o} />)}
          </div>
        </div>
      </section>
    </>
  );
}
