import { generatePageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { COLLECTIONS } from "@/lib/collections";
import Link from "next/link";
import Image from "next/image";

export const metadata = generatePageMetadata({
  title: "Eras — Legacy Homeware",
  description:
    "Seven architectural eras of decorative hardware design. From Arts & Crafts to Art Nouveau — explore the craft traditions that shaped ornamental home hardware.",
  path: "/collections",
});

export default function CollectionsPage() {
  const hero = COLLECTIONS[0];
  const rest = COLLECTIONS.slice(1);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Eras", href: "/collections" },
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Eras" },
        ]}
      />

      {/* Page title — editorial spread */}
      <section className="px-8 lg:px-10 xl:px-16 pt-12 pb-20">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-brand-muted">
            {COLLECTIONS.length} eras · {COLLECTIONS.reduce((n, c) => n + c.pieces.length, 0)} pieces
          </p>
          <h1 className="mt-6 font-serif text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[1.05] text-brand-dark max-w-3xl">
            Seven centuries
            <br />
            of ornamental
            <br />
            hardware
          </h1>
        </div>
      </section>

      {/* Hero era — full bleed */}
      <section>
        <Link
          href={`/collections/${hero.slug}`}
          className="group grid grid-cols-1 lg:grid-cols-12 min-h-[70vh] border-t border-brand-dark/10"
        >
          <div className="lg:col-span-8 relative min-h-[50vh]">
            <Image
              src={hero.image}
              alt={`${hero.era} decorative hardware`}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 67vw"
              priority
            />
          </div>
          <div className="lg:col-span-4 flex flex-col justify-center px-8 lg:px-12 py-16">
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-brand-muted">
              {hero.period}
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-brand-dark lg:text-5xl group-hover:text-brand-muted transition-colors">
              {hero.era}
            </h2>
            <p className="mt-6 text-base leading-[1.8] text-brand-muted max-w-sm">
              {hero.description}
            </p>
            <p className="mt-6 text-sm font-medium tracking-[0.15em] uppercase text-brand-dark">
              {hero.pieces.length} pieces →
            </p>
          </div>
        </Link>
      </section>

      {/* Two-up grid — staggered */}
      <section className="border-t border-brand-dark/10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {rest.map((col, i) => (
            <Link
              key={col.slug}
              href={`/collections/${col.slug}`}
              className={`group relative border-b border-brand-dark/10 ${
                i % 2 === 0 ? "md:border-r" : ""
              }`}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={col.image}
                  alt={`${col.era} decorative hardware`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 px-8 pb-10">
                <p className="text-xs font-medium tracking-[0.25em] uppercase text-white/70">
                  {col.period}
                </p>
                <h3 className="mt-2 font-serif text-3xl font-semibold text-white group-hover:text-white/80 transition-colors lg:text-4xl">
                  {col.era}
                </h3>
                <p className="mt-3 text-sm text-white/70">
                  {col.pieces.length} pieces
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
