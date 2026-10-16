import { notFound } from "next/navigation";
import Link from "next/link";
import { generatePageMetadata, breadcrumbJsonLd, entryJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { EntryImage } from "@/components/details/EntryImage";
import { EntryCard } from "@/components/details/EntryCard";
import {
  ENTRIES,
  entriesForStyle,
  getEntry,
  getElement,
  getStyle,
  hasComboPage,
  humanize,
  provenanceLabel,
  relatedEntries,
} from "@/lib/details";
import { STYLE_META } from "@/data/styleMeta";
import { groupForElement } from "@/data/elementGroups";

interface Params {
  slug: string;
}

export function generateStaticParams() {
  return ENTRIES.map((e) => ({ slug: e.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) return {};
  return generatePageMetadata({
    title: entry.title,
    description: entry.summary,
    path: `/library/${slug}`,
    ogImage: entry.image.local ? entry.image.src : undefined,
  });
}

export default async function LibraryEntryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) notFound();

  const style = getStyle(entry.style)!;
  const element = getElement(entry.element)!;
  const group = groupForElement(entry.element);
  const meta = STYLE_META[style.slug];
  const related = relatedEntries(entry).slice(0, 4);
  const combo = hasComboPage(entry.style, entry.element);
  // Cross-category exploration: the same style applied to other elements.
  const relatedSlugs = new Set([entry.slug, ...related.map((r) => r.slug)]);
  const acrossStyle = entriesForStyle(entry.style)
    .filter((e) => e.element !== entry.element && !relatedSlugs.has(e.slug) && e.image.local)
    .filter((e, i, arr) => arr.findIndex((x) => x.element === e.element) === i)
    .slice(0, 4);

  const classification: [string, React.ReactNode][] = [
    ["Style", <Link key="s" href={`/styles/${style.slug}`} className="underline decoration-border-strong underline-offset-[3px] hover:decoration-stone">{style.name}</Link>],
    ["Category", <Link key="c" href={`/elements/${element.slug}`} className="underline decoration-border-strong underline-offset-[3px] hover:decoration-stone">{element.name}</Link>],
    ...(entry.materials.length
      ? ([["Material", <span key="m">{entry.materials.map((m, i) => (
          <span key={m}>{i > 0 && ", "}<Link href={`/library?material=${m}`} className="underline decoration-border-strong underline-offset-[3px] hover:decoration-stone">{humanize(m)}</Link></span>
        ))}</span>]] as [string, React.ReactNode][])
      : []),
    ...(entry.motifs.length
      ? ([["Motifs", <span key="mo">{entry.motifs.map((m, i) => (
          <span key={m}>{i > 0 && ", "}<Link href={`/library?motif=${m}`} className="underline decoration-border-strong underline-offset-[3px] hover:decoration-stone">{humanize(m)}</Link></span>
        ))}</span>]] as [string, React.ReactNode][])
      : []),
    [entry.dateLabel || "Date", entry.dateDisplay],
    ["Maker or designer", entry.maker],
    ["Recorded medium", entry.medium],
    ["Dimensions", entry.dimensions],
    ["Evidence", provenanceLabel(entry)],
    ["Source", <a key="src" href={entry.source.pageUrl} target="_blank" rel="noopener" className="underline decoration-border-strong underline-offset-[3px] hover:decoration-stone">{entry.source.name}</a>],
  ].filter(([, v]) => v && (typeof v !== "string" || v.trim() !== "")) as [string, React.ReactNode][];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Design Library", href: "/library" },
          { name: style.name, href: `/styles/${style.slug}` },
          { name: entry.title, href: `/library/${entry.slug}` },
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
          { label: "Design Library", href: "/library" },
          { label: style.name, href: `/styles/${style.slug}` },
          { label: entry.title },
        ]}
      />

      <article className="px-5 sm:px-8 lg:px-12 pt-4 pb-24">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <figure className="lg:col-span-7 lg:sticky lg:top-[96px] self-start">
            <div className="bg-cream-dark flex justify-center">
              <EntryImage image={entry.image} priority sizes="(max-width: 1024px) 100vw, 58vw" className="w-full h-auto max-h-[82vh] object-contain" />
            </div>
            <figcaption className="mt-3 text-[12.5px] leading-[1.6] text-light">
              {entry.image.credit}. {entry.image.license}
              {entry.image.licenseUrl ? (
                <>
                  {" "}(<a href={entry.image.licenseUrl} className="underline hover:text-stone" rel="license noopener" target="_blank">license</a>)
                </>
              ) : null}
              .{" "}
              <a href={entry.source.pageUrl} className="underline hover:text-stone" target="_blank" rel="noopener">View the source record</a>
            </figcaption>
          </figure>

          <div className="lg:col-span-5">
            <p className="eyebrow mb-5">
              <Link href={`/elements/${element.slug}`} className="hover:text-stone">{element.name}</Link>
              <span className="text-light"> · </span>
              <Link href={`/styles/${style.slug}`} className="hover:text-stone">{style.name}</Link>
            </p>
            <h1 className="font-serif text-[clamp(2.1rem,3.6vw,3.2rem)] font-normal leading-[1.08] tracking-[-0.01em] text-stone mb-6">
              {entry.title}
            </h1>
            <p className="font-serif text-[21px] leading-[1.5] text-stone-light mb-8">{entry.summary}</p>

            <h2 className="eyebrow !text-light mb-3">Design characteristics</h2>
            <div className="prose-editorial mb-10"><p>{entry.description}</p></div>

            <h2 className="eyebrow !text-light mb-4">Classification</h2>
            <dl className="grid grid-cols-[132px_1fr] gap-x-4 gap-y-3 text-[14.5px] border-t border-border pt-5">
              {classification.map(([k, v]) => (
                <div key={k} className="contents">
                  <dt className="text-light">{k}</dt>
                  <dd className="text-stone">{v}</dd>
                </div>
              ))}
            </dl>

            {meta && (
              <div className="mt-10 border-t border-border pt-6">
                <h2 className="eyebrow !text-light mb-3">Architectural context</h2>
                <p className="text-[15px] leading-[1.75] text-muted mb-4">{meta.tagline} {meta.context}.</p>
                <div className="flex flex-col gap-2.5 text-[14px]">
                  <Link href={`/styles/${style.slug}`} className="text-stone hover:underline">Explore {style.name} <span aria-hidden="true">→</span></Link>
                  {combo && (
                    <Link href={`/styles/${style.slug}/${element.slug}`} className="text-stone hover:underline">
                      {style.name} {element.name.toLowerCase()} <span aria-hidden="true">→</span>
                    </Link>
                  )}
                  <Link href={`/elements/${element.slug}`} className="text-stone hover:underline">
                    {group && group.elements.length > 1 ? element.name : `All ${element.name.toLowerCase()}`} in the library <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-border px-5 sm:px-8 lg:px-12 py-20">
          <div className="mx-auto max-w-[1440px]">
            <h2 className="font-serif text-[clamp(1.8rem,2.6vw,2.4rem)] font-normal text-stone mb-10">Related designs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {related.map((e) => (
                <EntryCard key={e.slug} entry={e} aspect="portrait" />
              ))}
            </div>
          </div>
        </section>
      )}

      {acrossStyle.length > 0 && (
        <section className="bg-cream-dark/60 px-5 sm:px-8 lg:px-12 py-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
              <h2 className="font-serif text-[clamp(1.8rem,2.6vw,2.4rem)] font-normal text-stone">{style.name} across the house</h2>
              <Link href={`/styles/${style.slug}`} className="text-link">The {style.name} guide <span aria-hidden="true">→</span></Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {acrossStyle.map((e) => (
                <EntryCard key={e.slug} entry={e} showStyle={false} aspect="landscape" />
              ))}
            </div>
          </div>
        </section>
      )}

      <aside className="px-5 sm:px-8 lg:px-12 py-14 border-t border-border">
        <p className="mx-auto max-w-[1440px] text-[13.5px] text-light">
          Legacy Homeware is a reference library. We are preparing to offer custom commissions based on entries like this one;{" "}
          <Link href="/custom" className="underline hover:text-stone">read about future commissions</Link>.
        </p>
      </aside>
    </>
  );
}
