import Link from "next/link";
import { breadcrumbJsonLd, generatePageMetadata, itemListJsonLd, webPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { GuideCard } from "@/components/guides/GuideCard";
import { SubscribeSection } from "@/components/ui/Subscribe";
import { CARE_GUIDES } from "@/lib/guides";

const DESCRIPTION =
  "Plain guides to keeping cast iron, enameled iron, copper, brass and bronze, forged iron, hardwood and wood stoves in use for generations. The short answer first, then the method.";

export const metadata = generatePageMetadata({
  title: "Care & Keeping",
  description: DESCRIPTION,
  path: "/care",
});

export default function CarePage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ title: "Care & Keeping", description: DESCRIPTION, path: "/care" })} />
      <JsonLd
        data={itemListJsonLd(
          "Care & Keeping guides",
          CARE_GUIDES.map((g) => ({ name: g.title, path: `/care/${g.slug}` })),
        )}
      />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Care & Keeping", href: "/care" }])} />

      <PageHeader kicker="Care & Keeping" title="How to keep them for good">
        <p>
          A piece that passes the <Link href="/standard" className="link-underline">Heirloom Standard</Link> can be
          handed down, but only if it is looked after. These are the guides to the materials behind every piece we
          feature. Each one starts with the short answer, then gives the full method, then what not to do.
        </p>
      </PageHeader>

      <div className="wrap pb-20">
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {CARE_GUIDES.map((g, i) => (
            <GuideCard key={g.slug} guide={g} priority={i < 2} />
          ))}
        </div>
      </div>

      <div className="wrap max-w-[760px] pb-12 prose-lh text-[19px]">
        <h2 className="!mt-0">Why care is part of the Standard</h2>
        <p>
          Two of the five tests are about what happens after you buy: a piece must be{" "}
          <em>built to be repaired</em> and it must <em>age well</em>. Solid materials make both possible, and the
          guides here are the other half of the bargain: a cast-iron pan that is dried and oiled lasts a century; one
          left in the sink does not. Nothing here needs special products or skill, and most of it takes minutes a
          year.
        </p>
        <p>
          Every piece page links to the guide for its material. If something you own is not covered yet, the{" "}
          <Link href="/makers">makers</Link> we feature publish care instructions for their own pieces, and those come
          first.
        </p>
      </div>

      <SubscribeSection source="/care" />
    </>
  );
}
