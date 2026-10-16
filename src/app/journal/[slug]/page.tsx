import { notFound } from "next/navigation";
import Link from "next/link";
import { generatePageMetadata, breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { EntryImage } from "@/components/details/EntryImage";
import { EntryCard } from "@/components/details/EntryCard";
import { ArticleBody, slugifyHeading } from "@/components/journal/ArticleBody";
import { ArticleCard } from "@/components/journal/ArticleCard";
import { ARTICLES, getArticle } from "@/data/journal";
import { ENTRIES, getEntry, getStyle } from "@/lib/details";

interface Params {
  slug: string;
}

export function generateStaticParams() {
  return ARTICLES.filter((a) => !a.custom).map((a) => ({ slug: a.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  const hero = getEntry(a.heroEntry);
  return generatePageMetadata({
    title: a.seoTitle,
    description: a.description,
    path: `/journal/${a.slug}`,
    ogImage: hero?.image.local ? hero.image.src : undefined,
  });
}

function formatDate(d: string) {
  return new Date(`${d}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a || a.custom) notFound();
  const hero = getEntry(a.heroEntry);
  const headings = a.body.filter((b) => b.type === "h2").map((b) => (b as { text: string }).text);
  const figureSlugs = new Set(a.body.filter((b) => b.type === "figure").map((b) => (b as { entry: string }).entry));
  const moreFromLibrary = ENTRIES.filter(
    (e) => (a.elements.includes(e.element) || a.styles.includes(e.style)) && !figureSlugs.has(e.slug) && e.slug !== a.heroEntry && e.image.local,
  ).slice(0, 4);
  const others = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Journal", href: "/journal" }, { name: a.title, href: `/journal/${a.slug}` }])} />
      <JsonLd data={articleJsonLd({ slug: a.slug, title: a.title, description: a.description, imageUrl: hero?.image.src, published: a.published, reviewed: a.reviewed })} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Journal", href: "/journal" }, { label: a.shortTitle ?? a.title }]} />

      <article className="pb-24">
        <header className="px-5 sm:px-8 lg:px-12 pt-6 pb-12">
          <div className="mx-auto max-w-[900px]">
            <p className="eyebrow mb-5">{a.kicker}</p>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4.1rem)] font-normal leading-[1.05] tracking-[-0.015em] text-stone mb-6">{a.title}</h1>
            <p className="font-serif text-[clamp(1.2rem,1.8vw,1.45rem)] leading-[1.5] text-stone-light mb-6">{a.dek}</p>
            <p className="text-[13px] text-light">
              Published {formatDate(a.published)}
              {a.reviewed !== a.published ? ` · Reviewed ${formatDate(a.reviewed)}` : ""}
              {a.styles.length > 0 && (
                <>
                  {" · "}
                  {a.styles.map((s, i) => (
                    <span key={s}>{i > 0 && ", "}<Link href={`/styles/${s}`} className="underline hover:text-stone">{getStyle(s)?.name ?? s}</Link></span>
                  ))}
                </>
              )}
            </p>
          </div>
        </header>

        {hero && (
          <figure className="px-5 sm:px-8 lg:px-12 mb-16">
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
          <div className="mx-auto max-w-[1180px] grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12">
            <aside className="hidden lg:block">
              {headings.length > 2 && (
                <nav aria-label="In this guide" className="sticky top-[100px]">
                  <p className="text-[11px] tracking-[0.16em] uppercase text-light mb-4">In this guide</p>
                  <ol className="space-y-2.5 text-[13.5px] leading-[1.45]">
                    {headings.map((h) => (
                      <li key={h}><a href={`#${slugifyHeading(h)}`} className="text-muted hover:text-stone">{h}</a></li>
                    ))}
                  </ol>
                </nav>
              )}
            </aside>
            <div className="max-w-[720px]">
              <ArticleBody blocks={a.body} />
              {a.sources.length > 0 && (
                <section className="mt-16 border-t border-border pt-8">
                  <h2 className="text-[11px] tracking-[0.16em] uppercase text-light mb-4">Sources and further reading</h2>
                  <ol className="list-decimal pl-5 space-y-2 text-[14px] leading-[1.6] text-muted">
                    {a.sources.map((s) => (
                      <li key={s.url}><a href={s.url} target="_blank" rel="noopener" className="underline hover:text-stone">{s.label}</a></li>
                    ))}
                  </ol>
                </section>
              )}
            </div>
          </div>
        </div>
      </article>

      {moreFromLibrary.length > 0 && (
        <section className="bg-cream-dark/60 px-5 sm:px-8 lg:px-12 py-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
              <h2 className="font-serif text-[clamp(1.8rem,2.6vw,2.4rem)] font-normal text-stone">More from the library</h2>
              <Link href="/library" className="text-link">Open the Design Library <span aria-hidden="true">→</span></Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {moreFromLibrary.map((e) => <EntryCard key={e.slug} entry={e} aspect="portrait" />)}
            </div>
          </div>
        </section>
      )}

      {others.length > 0 && (
        <section className="px-5 sm:px-8 lg:px-12 py-20 border-t border-border">
          <div className="mx-auto max-w-[1440px]">
            <h2 className="font-serif text-[clamp(1.8rem,2.6vw,2.4rem)] font-normal text-stone mb-10">More from the Journal</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14">
              {others.map((o) => <ArticleCard key={o.slug} article={o} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
