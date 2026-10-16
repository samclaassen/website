import Link from "next/link";
import { generatePageMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { pricingFor } from "@/lib/pricing";

const ANSWER =
  "Custom kitchen cabinets in Colorado typically cost about $500 to $1,200 per linear foot installed, according to national cost guides' Denver figures, with semi-custom cabinets around $200 to $550 per linear foot. A standard 10-by-10-foot kitchen has about 20 linear feet of cabinets, so custom cabinetry for it usually runs about $10,000 to $24,000 installed.";

export const metadata = generatePageMetadata({
  title: "Custom Cabinet Cost in Colorado (2026 Guide)",
  description: ANSWER,
  path: "/colorado/custom-cabinet-cost",
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
  const kc = pricingFor("kitchen-cabinets")!;
  const bi = pricingFor("built-ins-bookcases")!;
  const mr = pricingFor("mudroom-entry")!;
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Colorado", href: "/colorado" }, { name: "Custom cabinet cost", href: "/colorado/custom-cabinet-cost" }])} />
      <JsonLd data={faqJsonLd(FAQS)} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Colorado", href: "/colorado" }, { label: "Custom cabinet cost" }]} />

      <article className="px-6 lg:px-10 pt-8 pb-24">
        <div className="mx-auto max-w-[900px]">
          <p className="text-[13px] tracking-[0.15em] uppercase text-bark mb-4">Colorado cost guide · Updated October 2026</p>
          <h1 className="font-serif text-[clamp(2.3rem,4.5vw,3.6rem)] font-semibold leading-[1.1] text-stone mb-6">
            How much do custom cabinets cost in Colorado?
          </h1>
          <p className="text-[18px] leading-[1.75] text-stone-light mb-12">{ANSWER}</p>

          <h2 className="font-serif text-3xl font-semibold text-stone mb-5">Colorado price benchmarks</h2>
          <p className="text-muted mb-6">Published third-party estimates for Denver and Colorado, checked October 2026.</p>
          <div className="overflow-x-auto border border-border mb-14">
            <table className="w-full text-left text-[14px]">
              <thead className="bg-cream-dark text-[12px] uppercase tracking-[0.1em] text-muted">
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

          <h2 className="font-serif text-3xl font-semibold text-stone mb-5">Our published prices</h2>
          <p className="text-muted mb-6">
            Installed along Colorado’s Front Range. Mountain towns are quoted with travel. Prices cover design, build and installation
            of the cabinetry, not countertops or appliances.
          </p>
          <div className="overflow-x-auto border border-border mb-6">
            <table className="w-full text-left text-[14px]">
              <thead className="bg-cream-dark text-[12px] uppercase tracking-[0.1em] text-muted">
                <tr><th className="p-4 font-medium">Per linear foot</th><th className="p-4 font-medium">Essential</th><th className="p-4 font-medium">Signature</th><th className="p-4 font-medium">Heirloom</th></tr>
              </thead>
              <tbody>
                {[["Kitchen cabinets", kc], ["Built-ins and bookcases", bi], ["Mudroom and entry storage", mr]].map(([name, p]) => {
                  const pp = p as typeof kc;
                  return (
                    <tr key={name as string} className="border-t border-border">
                      <td className="p-4 text-stone">{name as string}</td>
                      <td className="p-4 text-stone">{pp.tiers.essential}</td>
                      <td className="p-4 text-stone">{pp.tiers.signature}</td>
                      <td className="p-4 text-stone">{pp.tiers.heirloom}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-[14px] text-muted mb-14">
            Example: a 20-linear-foot kitchen at the Signature tier runs about $13,000–$19,000 installed.{" "}
            <Link href="/custom" className="underline hover:text-stone">See all prices, tiers and terms</Link>.
          </p>

          <h2 className="font-serif text-3xl font-semibold text-stone mb-5">What changes the price</h2>
          <ul className="space-y-3 text-[15px] leading-[1.75] text-muted mb-14 list-disc pl-5">
            <li><strong className="text-stone font-medium">Linear footage and layout.</strong> More cabinets, tall pantry units, islands and corners add cost.</li>
            <li><strong className="text-stone font-medium">Construction.</strong> Frameless and framed full-overlay boxes cost less than inset construction.</li>
            <li><strong className="text-stone font-medium">Species and finish.</strong> Paint-grade and plain-sawn oak cost less than quarter-sawn oak, walnut or custom stains.</li>
            <li><strong className="text-stone font-medium">Detail.</strong> Applied mouldings, glazed doors, carving and period hardware move a project up a tier.</li>
            <li><strong className="text-stone font-medium">Location.</strong> Mountain towns add travel and delivery, especially in winter.</li>
            <li><strong className="text-stone font-medium">Climate.</strong> Colorado’s dry air calls for stable panel construction and careful acclimation of solid wood.</li>
          </ul>

          <h2 className="font-serif text-3xl font-semibold text-stone mb-6">Questions</h2>
          <dl className="divide-y divide-border border-y border-border mb-14">
            {FAQS.map((f) => (
              <div key={f.question} className="py-6">
                <dt className="font-serif text-xl font-semibold text-stone mb-2">{f.question}</dt>
                <dd className="text-[15px] leading-[1.8] text-muted">{f.answer}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/request?element=kitchen-cabinets" className="cta-button text-stone">Get a Colorado cabinet quote <span aria-hidden="true">→</span></Link>
            <Link href="/colorado" className="text-[14px] underline text-muted hover:text-stone">Custom work in Colorado</Link>
          </div>
        </div>
      </article>
    </>
  );
}
