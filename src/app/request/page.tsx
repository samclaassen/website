import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RequestForm } from "@/components/request/RequestForm";
import { ELEMENTS, STYLES, getEntry } from "@/lib/details";

export const metadata = generatePageMetadata({
  title: "Register Interest in Future Commissions",
  description: "Tell us about a project you would like to commission when Legacy Homeware begins offering custom woodwork.",
  path: "/request",
  noIndex: true,
});

export default async function RequestPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);
  const entry = one(sp.entry) ? getEntry(one(sp.entry)!) : undefined;
  const style = entry?.style ?? STYLES.find((s) => s.slug === one(sp.style))?.slug;
  const element = entry?.element ?? ELEMENTS.find((e) => e.slug === one(sp.element))?.slug;

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Future commissions", href: "/custom" }, { label: "Register interest" }]} />
      <section className="px-6 lg:px-10 pt-8 pb-24">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">Future commissions</p>
            <h1 className="font-serif text-[clamp(2.3rem,4vw,3.4rem)] font-normal leading-[1.1] text-stone mb-6">
              Register interest
            </h1>
            <p className="text-base leading-[1.85] text-muted mb-6">
              Commissions are not open yet. Tell us what you would like made and where, and we will contact you when custom work
              begins. Nothing is ordered or quoted through this form.
            </p>
            <Link href="/custom" className="text-[14px] underline text-muted hover:text-stone">About future commissions</Link>
          </div>
          <div className="lg:col-span-8">
            <RequestForm
              styles={STYLES.map((s) => ({ slug: s.slug, name: s.name }))}
              elements={ELEMENTS.filter((e) => e.custom_status === "orderable").map((e) => ({ slug: e.slug, name: e.name }))}
              defaults={{ entry: entry?.slug, entryTitle: entry?.title, style, element }}
              contactEmail={process.env.NEXT_PUBLIC_CONTACT_EMAIL}
            />
          </div>
        </div>
      </section>
    </>
  );
}
