import { generatePageMetadata, breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ArticleCard } from "@/components/journal/ArticleCard";
import { ARTICLES } from "@/data/journal";

export const metadata = generatePageMetadata({
  title: "Journal: Guides to Architectural Styles, Woodwork and Materials",
  description:
    "Researched guides to traditional interior doors, wall paneling, Alpine chalet interiors and other architectural details, illustrated with documented examples from the Legacy Homeware library.",
  path: "/journal",
});

export default function JournalPage() {
  const [lead, ...rest] = ARTICLES;
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Journal", href: "/journal" }])} />
      <JsonLd data={itemListJsonLd("Legacy Homeware Journal", ARTICLES.map((a) => ({ name: a.title, path: `/journal/${a.slug}` })))} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Journal" }]} />
      <section className="px-5 sm:px-8 lg:px-12 pt-6 pb-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-3xl mb-16">
            <p className="eyebrow mb-5">Journal</p>
            <h1 className="font-serif text-[clamp(2.6rem,5vw,4.25rem)] font-normal leading-[1.04] tracking-[-0.015em] text-stone mb-6">
              Guides to the details that define a home
            </h1>
            <p className="text-[17px] leading-[1.75] text-muted">
              Researched explainers on architectural styles, woodwork and materials, illustrated with documented examples from the library and
              cited to their sources.
            </p>
          </div>
          {lead && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pb-16 mb-16 border-b border-border">
              <div className="lg:col-span-8"><ArticleCard article={lead} large /></div>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14">
            {rest.map((a) => <ArticleCard key={a.slug} article={a} />)}
          </div>
        </div>
      </section>
    </>
  );
}
