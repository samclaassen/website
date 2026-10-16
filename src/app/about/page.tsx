import Link from "next/link";
import { generatePageMetadata, webPageJsonLd, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { EntryImage } from "@/components/details/EntryImage";
import { ENTRIES, STYLES, getEntry } from "@/lib/details";

const DESCRIPTION =
  "Legacy Homeware is an evolving architectural design library that documents the doors, cabinetry, paneling, fireplaces and ornament that define architectural styles, with every example credited to its source.";

export const metadata = generatePageMetadata({
  title: "About the Library",
  description: DESCRIPTION,
  path: "/about",
});

const FAQS = [
  {
    question: "What is Legacy Homeware?",
    answer:
      "Legacy Homeware is an architectural design library: a visual reference to architectural styles organized around the details that define them, such as doors, cabinetry, wall paneling, fireplaces, stairs and ornament. Each entry is a documented example from a museum, archive, historic house or period catalog.",
  },
  {
    question: "Does Legacy Homeware sell products?",
    answer:
      "Not yet. Nothing in the library is offered for sale, and the pieces pictured were not made by Legacy Homeware. The longer-term plan is to offer custom commissions for doors, cabinet fronts, paneling, mantels and other woodwork based on the library, and that will be announced when it is ready.",
  },
  {
    question: "Where do the images come from?",
    answer:
      "Library photographs come from museum open-access programs, the Library of Congress, Wikimedia Commons contributors and digitized period catalogs. Each entry credits the photographer or institution, states the license and links to the original record.",
  },
  {
    question: "Are the hardware and lighting collections real products?",
    answer:
      "No. The hardware and lighting pages by era are concept illustrations exploring how period metalwork completes a room. They are design studies, not products for sale or photographs of historical objects.",
  },
];

export default function AboutPage() {
  const images = [
    "16th-century-stube-from-the-courthouse-in-niederdorf-tiroler-volkskunstmuseum",
    "hector-guimard-double-door-from-the-coutolleau-shop-angers",
    "carved-linenfold-panel-with-cross-motif",
  ]
    .map((s) => getEntry(s))
    .filter(Boolean);
  const sources = [...new Set(ENTRIES.map((e) => e.source.name.replace(/\s*\(.*\)\s*$/, "").replace(/, via .*/, "")))].sort();
  const contact = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  return (
    <>
      <JsonLd data={webPageJsonLd({ title: "About the Library", description: DESCRIPTION, path: "/about" })} />
      <JsonLd data={faqJsonLd(FAQS)} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />

      <section className="px-5 sm:px-8 lg:px-12 pt-6 pb-20">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <p className="eyebrow mb-5">About</p>
            <h1 className="font-serif text-[clamp(2.6rem,5.4vw,4.6rem)] font-normal leading-[1.02] tracking-[-0.015em] text-stone">
              An architectural design library, built one detail at a time
            </h1>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 pb-20">
        <div className="mx-auto max-w-[1440px] grid grid-cols-3 gap-4 sm:gap-6">
          {images.map((e) => (
            <Link key={e!.slug} href={`/library/${e!.slug}`} className="group relative block aspect-[4/5] overflow-hidden bg-cream-dark">
              <EntryImage image={e!.image} fill sizes="33vw" className="img-quiet object-cover" />
            </Link>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 pb-24">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-8">
          <p className="lg:col-span-3 eyebrow">Why it exists</p>
          <div className="lg:col-span-7 prose-editorial">
            <p className="!text-[20px] !leading-[1.65] !text-stone">
              Most design inspiration shows whole rooms. Legacy Homeware looks at the parts: how a door is paneled, how a run of wainscoting meets a
              window, how a carver finished a bracket. Those details are what make a style recognizable, and they are the hardest thing to find
              organized in one place.
            </p>
            <p>
              The library currently documents {ENTRIES.length} details across {STYLES.length} architectural styles and regional traditions, from
              Alpine Stuben and Tudor linenfold to Shaker built-ins and Art Deco doors. Each entry is classified by style, architectural element,
              material and motif, so the same carved door can be found from the Alpine guide, the doors directory or a search for oak.
            </p>
            <p>
              Alongside the library, the <Link href="/journal">Journal</Link> publishes researched guides that explain styles and techniques and
              compare them, illustrated with documented examples and cited to their sources.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-border px-5 sm:px-8 lg:px-12 py-20">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-8">
          <p className="lg:col-span-3 eyebrow">Our standards</p>
          <div className="lg:col-span-7">
            <ul className="border-t border-border">
              {[
                ["Documented, not invented", "Entries are real objects and rooms recorded by museums, archives, historic houses and period catalogs. Dates, makers and materials come from the source record, and are left out when the source does not give them."],
                ["Evidence is labeled", "Each entry says what kind of evidence it is: a documented object, a photograph of a documented interior, a period catalog illustration or a museum scale model."],
                ["Credited and linked", "Every image carries its credit and license and links back to the original record."],
                ["No pictured product is for sale", "Legacy Homeware did not make the pieces shown and does not currently sell products. Concept illustrations, such as the hardware and lighting pages, are labeled as concepts."],
              ].map(([t, b]) => (
                <li key={t} className="grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-2 sm:gap-8 border-b border-border py-6">
                  <h2 className="font-serif text-[22px] leading-[1.2] text-stone">{t}</h2>
                  <p className="text-[15.5px] leading-[1.75] text-muted">{b}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 py-20">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-8">
          <p className="lg:col-span-3 eyebrow">What comes next</p>
          <div className="lg:col-span-7 prose-editorial">
            <p>
              Legacy Homeware is based in Colorado and intends, in time, to offer custom commissions for architectural woodwork: doors, cabinet
              fronts, paneling, mantels and ornament designed from the traditions in the library. That work is in preparation and is not available
              yet. <Link href="/custom">Read about future commissions</Link>.
            </p>
          </div>
        </div>
      </section>

      <section id="image-credits" className="scroll-mt-28 border-t border-border px-5 sm:px-8 lg:px-12 py-20">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-8">
          <p className="lg:col-span-3 eyebrow">Image credits and rights</p>
          <div className="lg:col-span-7">
            <div className="prose-editorial">
              <p>
                Photographs are published under the license stated on each entry, most often public domain, CC0 or Creative Commons
                Attribution-ShareAlike, with credit to the photographer or institution and a link to the source record. If you hold rights to an
                image and would like it credited differently or removed, please get in touch.
              </p>
            </div>
            <p className="text-[12px] tracking-[0.14em] uppercase text-light mt-8 mb-3">Sources represented in the library</p>
            <p className="text-[14px] leading-[1.8] text-muted">{sources.join(" · ")}</p>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-28 border-t border-border px-5 sm:px-8 lg:px-12 py-20">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-8">
          <p className="lg:col-span-3 eyebrow">Contact</p>
          <div className="lg:col-span-7 prose-editorial">
            {contact ? (
              <p>
                Corrections, sources, image questions and project ideas are welcome at <a href={`mailto:${contact}`}>{contact}</a>.
              </p>
            ) : (
              <p>A contact address for corrections, sources and image questions will be published here shortly.</p>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-border px-5 sm:px-8 lg:px-12 py-20">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-8">
          <p className="lg:col-span-3 eyebrow">Questions</p>
          <dl className="lg:col-span-7 divide-y divide-border border-y border-border">
            {FAQS.map((f) => (
              <div key={f.question} className="py-6">
                <dt className="font-serif text-[21px] text-stone mb-2">{f.question}</dt>
                <dd className="text-[15.5px] leading-[1.75] text-muted">{f.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
