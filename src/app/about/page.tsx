import Link from "next/link";
import { breadcrumbJsonLd, generatePageMetadata, webPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { PIECES } from "@/lib/pieces";
import { CreditedImage } from "@/components/media/CreditedImage";
import { SITE_IMAGES, sitePhoto } from "@/lib/site-images";

const DESCRIPTION =
  "Legacy Homeware is a curated guide to new home items for the hearth, the door and the table, made the way they used to be so they last long enough to hand down.";

export const metadata = generatePageMetadata({ title: "About", description: DESCRIPTION, path: "/about" });

export default function AboutPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ title: "About Legacy Homeware", description: DESCRIPTION, path: "/about" })} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "About", href: "/about" }])} />
      <PageHeader kicker="About" title="Why Legacy Homeware" />
      <div className="wrap max-w-[1040px] pb-14">
        <CreditedImage
          photo={sitePhoto(SITE_IMAGES.about.lead)}
          frame="aspect-[16/9]"
          sizes="(min-width: 1040px) 980px, 100vw"
          priority
        />
      </div>
      <div className="wrap max-w-[720px] pb-24 prose-lh text-[19px]">
        <p>
          Most of what fills a home today is made to be replaced. A &ldquo;brass&rdquo; knob turns out to be plated
          zinc; a fire set bends in its first winter; a board splits at the glue line. Yet the things people inherit,
          the iron latch on an old door, the andirons in the hearth, the table everyone sat at, were made of solid
          materials by makers who expected them to last.
        </p>
        <p>
          Those things are still being made. Smiths still forge iron, bronze is still poured into sand, brass is
          still turned and cast, woodworkers still glue up end-grain blocks, and coppersmiths still line pans with tin. Legacy Homeware is a guide to them: new pieces
          you can buy today, made the way they used to be, that should last long enough to hand down.
        </p>
        <div className="not-prose my-12 grid gap-6 sm:grid-cols-2">
          {SITE_IMAGES.about.pair.map((id) => (
            <CreditedImage
              key={id}
              photo={sitePhoto(id)}
              frame="aspect-[4/5]"
              sizes="(min-width: 640px) 340px, 100vw"
            />
          ))}
        </div>
        <h2>What we do</h2>
        <ul>
          <li>We choose pieces against a published test, the <Link href="/standard">Heirloom Standard</Link>.</li>
          <li>We say what we haven&apos;t confirmed yet, and what&apos;s worth knowing before you buy.</li>
          <li>We link to the maker or retailer. We don&apos;t sell anything ourselves.</li>
        </ul>
        <h2>How we&apos;re paid</h2>
        <p>
          Some links are affiliate links, which may earn us a commission. That never decides what we include: we
          feature pieces whether or not they pay. More on that in our{" "}
          <Link href="/standard#affiliate-policy">affiliate policy</Link>.
        </p>
        <h2>Where we are now</h2>
        <p>
          This is Wave 1: {PIECES.length} pieces across Hearth &amp; Heat, Hardware and Kitchen. Lighting and
          Tableware come next, then Textiles and Furniture &amp; Wood.
        </p>
      </div>
    </>
  );
}
