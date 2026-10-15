import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RequestForm } from "@/components/request/RequestForm";
import { ELEMENTS, STYLES, getEntry } from "@/lib/details";

export const metadata = generatePageMetadata({
  title: "Request a Custom Piece",
  description: "Tell us about your project and we will reply with design questions and a first idea of price.",
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
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Custom work", href: "/custom" }, { label: "Request" }]} />
      <section className="px-6 lg:px-10 pt-8 pb-24">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-[13px] tracking-[0.15em] uppercase text-bark mb-4">Custom work</p>
            <h1 className="font-serif text-[clamp(2.3rem,4vw,3.4rem)] font-semibold leading-[1.1] text-stone mb-6">
              Request a custom piece
            </h1>
            <p className="text-base leading-[1.85] text-muted mb-6">
              Tell us what you would like made and where. We reply by email with questions, and then a design and quote within
              our published price ranges.
            </p>
            <Link href="/custom" className="text-[14px] underline text-muted hover:text-stone">See prices, tiers and terms</Link>
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
