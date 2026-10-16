import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ELEMENT_GROUPS } from "@/data/elementGroups";

export const metadata = generatePageMetadata({
  title: "Future Custom Commissions",
  description:
    "Legacy Homeware plans to offer custom architectural woodwork based on its design library. Commissions are in preparation and not yet available.",
  path: "/custom",
  noIndex: true,
});

export default function CustomPage() {
  const planned = ELEMENT_GROUPS.filter((g) => ["doors", "cabinetry", "wall-paneling", "fireplaces", "ornament", "kitchen-details"].includes(g.slug));
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Future commissions" }]} />
      <section className="px-5 sm:px-8 lg:px-12 pt-6 pb-28">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">Future commissions</p>
            <h1 className="font-serif text-[clamp(2.4rem,4.8vw,3.9rem)] font-normal leading-[1.05] tracking-[-0.015em] text-stone mb-8">
              From reference to a piece for your own home
            </h1>
            <div className="prose-editorial">
              <p className="!text-[19px] !text-stone">
                Legacy Homeware is a reference library first. In time, we intend to offer custom architectural woodwork designed from the traditions
                it documents. Commissions are in preparation and are not available yet.
              </p>
              <p>
                The plan is to start small and well: a few element types, made to measure, with each design drawn from documented examples rather
                than invented. Pricing, lead times and the areas served will be published when commissions open.
              </p>
            </div>
            <h2 className="eyebrow mt-12 mb-5">Elements under consideration</h2>
            <ul className="border-t border-border">
              {planned.map((g) => (
                <li key={g.slug} className="border-b border-border py-4 flex flex-wrap justify-between gap-2">
                  <span className="font-serif text-[20px] text-stone">{g.name}</span>
                  <span className="text-[14px] text-muted">{g.description}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 items-center">
              <Link href="/request" className="text-link">Register interest <span aria-hidden="true">→</span></Link>
              <Link href="/library" className="text-[14px] text-muted hover:text-stone">Browse the library</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
