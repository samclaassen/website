import Link from "next/link";
import { generatePageMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { AllPricingTable } from "@/components/details/PriceTable";
import { INSTALL_ADD_ONS, TERMS, TIER_DESCRIPTIONS } from "@/lib/pricing";
import { TIER_LABEL, type Tier } from "@/lib/details";

const DESCRIPTION =
  "Every detail in our archive can be made to order: cabinetry, built-ins, mantels, range hoods, paneling, doors and trim. Published price ranges, three tiers, shipped anywhere in the US or installed in Colorado.";

export const metadata = generatePageMetadata({
  title: "Custom Work and Pricing",
  description: DESCRIPTION,
  path: "/custom",
});

const STEPS = [
  { title: "Choose a starting point", body: "Pick any example from the archive, or describe what you have in mind. Photos and rough measurements help." },
  { title: "Design", body: "We draw your piece to fit your space and style. The $350 design fee is credited to your order." },
  { title: "Quote", body: "You receive a fixed quote based on the published range for the element and tier, with drawings and lead time." },
  { title: "Make", body: "With a 50% deposit, we cut, assemble and finish your piece. CNC precision for repeatable parts, hand work where it matters." },
  { title: "Ship or install", body: "We ship finished pieces anywhere in the US, or deliver and install along Colorado’s Front Range and in mountain towns by quote." },
];

const FAQS = [
  {
    question: "How much does custom architectural woodwork cost?",
    answer:
      "It depends on the element and the level of detail. For example, custom range hood covers run about $1,600–$8,500, mantels about $950–$15,000+, cabinet doors about $45–$220 per square foot, and kitchen cabinets installed in Colorado about $450–$1,500 per linear foot. Each element has three published tiers.",
  },
  {
    question: "What are the Essential, Signature and Heirloom tiers?",
    answer:
      "Essential covers clean, simple geometry. Signature adds period detail such as raised panels, applied mouldings and simple relief. Heirloom covers carved and showpiece work with hand finishing and premium woods. Every example in the archive is tagged with the tier a faithful version would need.",
  },
  {
    question: "Do you ship outside Colorado?",
    answer:
      "Yes. Doors, cabinet fronts, paneling kits, mantels, hood covers, trim, corbels, vanities and radiator covers ship finished anywhere in the US. Kitchen cabinets, built-ins and mudroom storage are installed in Colorado.",
  },
  {
    question: "Can you copy a historical piece exactly?",
    answer:
      "We use historical examples as references and adapt them to your measurements, materials and budget. Close reproductions are possible, especially for profiles and panels; carved work is interpreted rather than copied line for line.",
  },
  {
    question: "How long does custom work take?",
    answer: "Shipped pieces typically take about 4–8 weeks after design approval; installed Colorado projects about 6–10 weeks.",
  },
];

const TIERS: Tier[] = ["essential", "signature", "heirloom"];

export default function CustomPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Custom work", href: "/custom" }])} />
      <JsonLd data={faqJsonLd(FAQS)} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Custom work" }]} />

      <section className="px-6 lg:px-10 pt-8 pb-16">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <p className="text-[13px] tracking-[0.15em] uppercase text-bark mb-4">Custom work</p>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.08] text-stone mb-6">
              Have it made for your home
            </h1>
            <p className="text-[17px] leading-[1.75] text-stone-light mb-4">{DESCRIPTION}</p>
            <p className="text-base leading-[1.85] text-muted">
              We publish our price ranges because custom work should not be a mystery. Your quote will fall within the range for
              the element and tier you choose.
            </p>
          </div>
          <div className="lg:col-span-5 lg:pt-14 flex flex-col gap-4 items-start">
            <Link href="/request" className="cta-button text-stone">Start a request <span aria-hidden="true">→</span></Link>
            <Link href="/search" className="text-[14px] underline text-muted hover:text-stone">Browse the archive for a starting point</Link>
          </div>
        </div>
      </section>

      <section className="bg-cream-dark px-6 lg:px-10 py-20">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="font-serif text-3xl font-semibold text-stone mb-10">How it works</h2>
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {STEPS.map((s, i) => (
              <li key={s.title} className="border-t border-stone pt-5">
                <p className="text-[12px] text-bark mb-2">0{i + 1}</p>
                <h3 className="font-serif text-xl font-semibold text-stone mb-2">{s.title}</h3>
                <p className="text-[14px] leading-[1.7] text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-20">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="font-serif text-3xl font-semibold text-stone mb-10">Three tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {TIERS.map((t) => (
              <div key={t} className="border-t border-border pt-5">
                <h3 className="font-serif text-2xl font-semibold text-stone mb-2">{TIER_LABEL[t]}</h3>
                <p className="text-[15px] leading-[1.7] text-muted">{TIER_DESCRIPTIONS[t]}</p>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-3xl font-semibold text-stone mb-3">Price ranges by element</h2>
          <p className="text-muted mb-8 max-w-2xl">
            Shipped prices exclude freight outside Colorado. Installed prices cover Colorado’s Front Range; mountain towns are
            quoted with travel. Countertops, appliances, ventilation inserts and electrical, plumbing or masonry work are not included.
          </p>
          <AllPricingTable />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-stone mb-5">Installation in Colorado for shipped pieces</h3>
              <ul className="divide-y divide-border border-y border-border">
                {INSTALL_ADD_ONS.map((a) => (
                  <li key={a.item} className="flex justify-between gap-6 py-3 text-[14px]">
                    <span className="text-stone">{a.item}</span>
                    <span className="text-muted text-right">{a.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-semibold text-stone mb-5">Fees and terms</h3>
              <ul className="divide-y divide-border border-y border-border">
                {TERMS.map((a) => (
                  <li key={a.item} className="flex justify-between gap-6 py-3 text-[14px]">
                    <span className="text-stone">{a.item}</span>
                    <span className="text-muted text-right">{a.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-6 lg:px-10 py-20">
        <div className="mx-auto max-w-[900px]">
          <h2 className="font-serif text-3xl font-semibold text-stone mb-8">Questions</h2>
          <dl className="divide-y divide-border border-y border-border">
            {FAQS.map((f) => (
              <div key={f.question} className="py-6">
                <dt className="font-serif text-xl font-semibold text-stone mb-2">{f.question}</dt>
                <dd className="text-[15px] leading-[1.8] text-muted">{f.answer}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-12">
            <Link href="/request" className="cta-button text-stone">Start a request <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
