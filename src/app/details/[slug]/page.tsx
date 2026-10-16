import { notFound } from "next/navigation";
import Link from "next/link";
import { generatePageMetadata, breadcrumbJsonLd, entryJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { EntryImage } from "@/components/details/EntryImage";
import { EntryGrid } from "@/components/details/EntryCard";
import {
  ENTRIES,
  getEntry,
  getElement,
  getStyle,
  hasComboPage,
  humanize,
  isOrderable,
  relatedEntries,
  TIER_LABEL,
} from "@/lib/details";
import { priceLine } from "@/lib/pricing";

interface Params {
  slug: string;
}

export function generateStaticParams() {
  return ENTRIES.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) return {};
  return generatePageMetadata({
    title: entry.title,
    description: entry.summary,
    path: `/details/${slug}`,
    ogImage: entry.image.local ? entry.image.src : undefined,
  });
}

export default async function DetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) notFound();

  const style = getStyle(entry.style)!;
  const element = getElement(entry.element)!;
  const orderable = isOrderable(entry.element);
  const price = orderable ? priceLine(entry.element, entry.tier) : null;
  const related = relatedEntries(entry);
  const combo = hasComboPage(entry.style, entry.element);

  const facts: [string, string][] = [
    ["Style", style.name],
    ["Element", element.name],
    [entry.dateLabel || "Date", entry.dateDisplay],
    ["Maker or designer", entry.maker],
    ["Materials", entry.medium],
    ["Dimensions", entry.dimensions],
    ["Source", entry.source.name],
  ].filter(([, v]) => v && v.trim() !== "") as [string, string][];

  const requestHref = `/request?entry=${entry.slug}`;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: style.name, href: `/styles/${style.slug}` },
          { name: element.name, href: `/elements/${element.slug}` },
          { name: entry.title, href: `/details/${entry.slug}` },
        ])}
      />
      <JsonLd
        data={entryJsonLd({
          slug: entry.slug,
          title: entry.title,
          summary: entry.summary,
          styleName: style.name,
          elementName: element.name,
          imageUrl: entry.image.src,
          credit: entry.image.credit,
          license: entry.image.license,
          licenseUrl: entry.image.licenseUrl,
          sourceUrl: entry.source.pageUrl,
          dateDisplay: entry.dateDisplay,
        })}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: style.name, href: `/styles/${style.slug}` },
          { label: element.name, href: `/elements/${element.slug}` },
          { label: entry.title },
        ]}
      />

      <article className="px-6 lg:px-10 pt-6 pb-20">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Image */}
          <figure className="lg:col-span-7">
            <div className="bg-cream-dark">
              <EntryImage image={entry.image} priority sizes="(max-width: 1024px) 100vw, 58vw" className="w-full h-auto" />
            </div>
            <figcaption className="mt-3 text-[12px] leading-[1.6] text-muted">
              {entry.image.credit}. {entry.image.license}
              {entry.image.licenseUrl ? (
                <>
                  {" "}(
                  <a href={entry.image.licenseUrl} className="underline hover:text-stone" rel="license noopener" target="_blank">
                    license
                  </a>
                  )
                </>
              ) : null}
              .{" "}
              <a href={entry.source.pageUrl} className="underline hover:text-stone" target="_blank" rel="noopener">
                View source
              </a>
            </figcaption>
          </figure>

          {/* Text */}
          <div className="lg:col-span-5">
            <p className="text-[13px] tracking-[0.15em] uppercase text-bark mb-4">
              <Link href={`/styles/${style.slug}`} className="hover:text-stone">{style.name}</Link>
              <span className="text-light"> · </span>
              <Link href={`/elements/${element.slug}`} className="hover:text-stone">{element.name}</Link>
            </p>
            <h1 className="font-serif text-[clamp(2rem,3.4vw,2.9rem)] font-semibold leading-[1.12] text-stone mb-6">
              {entry.title}
            </h1>
            <p className="text-[17px] leading-[1.75] text-stone-light mb-6">{entry.summary}</p>
            <p className="text-base leading-[1.85] text-muted mb-10">{entry.description}</p>

            {/* Custom version */}
            <div className="border border-border bg-cream-dark/50 p-6 mb-10">
              <p className="text-[12px] tracking-[0.12em] uppercase text-bark mb-2">
                {orderable ? `Have this made · ${TIER_LABEL[entry.tier]} tier` : "Reference only"}
              </p>
              <p className="text-[15px] leading-[1.7] text-stone mb-3">{entry.makeItToday}</p>
              {price ? (
                <p className="text-[15px] text-stone mb-5">
                  A custom version typically runs <strong className="font-semibold">{price.range}</strong>{" "}
                  <span className="text-muted">{price.unit}</span>.
                </p>
              ) : (
                <p className="text-[14px] text-muted mb-5">
                  {element.name} are not part of our custom range yet. Leave your details and we will let you know when they are.
                </p>
              )}
              <div className="flex flex-wrap gap-3">
                <Link href={requestHref} className="cta-button text-stone">
                  {orderable ? "Request a custom version" : "Notify me"}
                  <span aria-hidden="true">→</span>
                </Link>
                {orderable && (
                  <Link href="/custom" className="text-[13px] text-muted underline self-center hover:text-stone">
                    How custom work and pricing work
                  </Link>
                )}
              </div>
            </div>

            {/* Facts */}
            <dl className="grid grid-cols-[140px_1fr] gap-x-4 gap-y-3 text-[14px] border-t border-border pt-6">
              {facts.map(([k, v]) => (
                <div key={k} className="contents">
                  <dt className="text-muted">{k}</dt>
                  <dd className="text-stone">{v}</dd>
                </div>
              ))}
            </dl>

            {(entry.motifs.length > 0 || entry.materials.length > 0) && (
              <div className="mt-8 flex flex-wrap gap-2">
                {[...entry.motifs, ...entry.materials].map((t) => (
                  <Link
                    key={t}
                    href={`/search?q=${encodeURIComponent(humanize(t))}`}
                    className="text-[12px] text-muted border border-border px-3 py-1 hover:text-stone hover:border-stone transition-colors"
                  >
                    {humanize(t)}
                  </Link>
                ))}
              </div>
            )}

            <p className="mt-8 text-[13px] text-muted">
              More{" "}
              {combo ? (
                <Link href={`/styles/${style.slug}/${element.slug}`} className="underline hover:text-stone">
                  {style.name} {element.name.toLowerCase()}
                </Link>
              ) : (
                <Link href={`/search?style=${style.slug}&element=${element.slug}`} className="underline hover:text-stone">
                  {style.name} {element.name.toLowerCase()}
                </Link>
              )}{" "}
              · all <Link href={`/styles/${style.slug}`} className="underline hover:text-stone">{style.name}</Link> · all{" "}
              <Link href={`/elements/${element.slug}`} className="underline hover:text-stone">{element.name.toLowerCase()}</Link>
            </p>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-border px-6 lg:px-10 py-20">
          <div className="mx-auto max-w-[1400px]">
            <h2 className="font-serif text-3xl font-semibold text-stone mb-10">Related details</h2>
            <EntryGrid entries={related.slice(0, 4)} />
          </div>
        </section>
      )}
    </>
  );
}
