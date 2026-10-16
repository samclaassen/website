import Link from "next/link";
import { generatePageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { EntryGrid } from "@/components/details/EntryCard";
import { ENTRIES, getStyle } from "@/lib/details";
import { STYLE_HUBS } from "@/data/hubs";

const DESCRIPTION =
  "Custom cabinetry, built-ins, mudrooms, mantels and period woodwork for Colorado homes, from Denver Squares and Victorians to bungalows and mountain houses. Installed along the Front Range and in mountain towns.";

export const metadata = generatePageMetadata({
  title: "Custom Cabinetry and Architectural Woodwork in Colorado",
  description: DESCRIPTION,
  path: "/colorado",
});

const COLORADO_STYLES = ["denver-square", "victorian", "arts-and-crafts", "tudor-revival", "mid-century-modern", "mountain-modern", "alpine-tyrolean"];

const COLORADO_ENTRY_PATTERNS = [/molly-brown/, /grand-lake/, /curtis/, /mountain-camp/];

export default function ColoradoPage() {
  const local = ENTRIES.filter((e) => COLORADO_ENTRY_PATTERNS.some((p) => p.test(e.slug))).slice(0, 8);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Colorado", href: "/colorado" }])} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Colorado" }]} />

      <section className="px-6 lg:px-10 pt-8 pb-16">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <p className="text-[13px] tracking-[0.15em] uppercase text-bark mb-4">Colorado</p>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.08] text-stone mb-6">
              Custom woodwork for Colorado homes
            </h1>
            <p className="text-[17px] leading-[1.75] text-stone-light mb-4">{DESCRIPTION}</p>
            <p className="text-base leading-[1.85] text-muted">
              We publish our prices, design from real historical references and build to your measurements. Colorado’s very dry
              air means solid wood moves more than in most of the country, so we choose construction, species and finishes with
              that in mind.
            </p>
          </div>
          <div className="lg:col-span-5 lg:pt-14 flex flex-col gap-4 items-start">
            <Link href="/colorado/custom-cabinet-cost" className="cta-button text-stone">
              What custom cabinets cost in Colorado <span aria-hidden="true">→</span>
            </Link>
            <Link href="/request" className="text-[14px] underline text-muted hover:text-stone">Start a request</Link>
          </div>
        </div>
      </section>

      <section className="bg-cream-dark px-6 lg:px-10 py-20">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { t: "Installed along the Front Range", b: "Kitchens, built-ins, mudrooms and paneling designed, built and installed from Fort Collins to Colorado Springs, including the Denver metro area and Boulder." },
            { t: "Mountain homes", b: "Ski houses and cabins in the high country, from boot rooms and gear storage to timber-clad beams, mantels and statement range hoods. Travel and delivery are quoted per project." },
            { t: "Restoration", b: "Missing built-ins, mantels, doors and trim recreated to match original profiles in Denver Squares, Victorians, bungalows and Tudor Revival houses." },
          ].map((c) => (
            <div key={c.t} className="border-t border-stone pt-5">
              <h2 className="font-serif text-2xl font-semibold text-stone mb-3">{c.t}</h2>
              <p className="text-[15px] leading-[1.75] text-muted">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-10 py-20">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="font-serif text-3xl font-semibold text-stone mb-10">Colorado house styles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {COLORADO_STYLES.map((slug) => {
              const s = getStyle(slug)!;
              return (
                <Link key={slug} href={`/styles/${slug}`} className="group border-t border-border pt-5">
                  <h3 className="font-serif text-2xl font-semibold text-stone group-hover:text-muted mb-2">{s.name}</h3>
                  <p className="text-[14px] leading-[1.7] text-muted">{STYLE_HUBS[slug]?.colorado ?? s.summary}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {local.length > 0 && (
        <section className="border-t border-border px-6 lg:px-10 py-20">
          <div className="mx-auto max-w-[1400px]">
            <h2 className="font-serif text-3xl font-semibold text-stone mb-3">Details with Colorado connections</h2>
            <p className="text-muted mb-10 max-w-2xl">
              From Denver’s Molly Brown House to Grand Lake Lodge and the stock millwork that finished Denver Squares.
            </p>
            <EntryGrid entries={local} />
          </div>
        </section>
      )}
    </>
  );
}
