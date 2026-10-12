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
  const totalPieces = COLLECTIONS.reduce((n, c) => n + c.pieces.length, 0);

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

      {/* Page header */}
      <section className="px-6 lg:px-10 pt-8 pb-16">
        <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.1] text-stone max-w-xl mb-4">
          Seven eras of ornamental hardware
        </h1>
        <p className="text-base text-muted max-w-lg">
          {COLLECTIONS.length} architectural eras. {totalPieces} curated pieces.
          Centuries of craft tradition documented in solid metal.
        </p>
      </section>

      {/* Era grid — Aesop-style cards */}
      <section className="px-6 lg:px-10 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COLLECTIONS.map((col) => (
            <Link
              key={col.slug}
              href={`/collections/${col.slug}`}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-5">
                <Image
                  src={col.image}
                  alt={`${col.era} decorative hardware`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h2 className="font-serif text-xl font-semibold text-stone mb-1 group-hover:text-muted transition-colors">
                {col.era}
              </h2>
              <p className="text-[13px] text-muted mb-2">
                {col.period}
              </p>
              <p className="text-sm text-muted leading-relaxed line-clamp-2">
                {col.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
