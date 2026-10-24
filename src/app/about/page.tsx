import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, generatePageMetadata, webPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { PIECES } from "@/lib/pieces";
import { CreditedImage } from "@/components/media/CreditedImage";
import { SITE_IMAGES, sitePhoto } from "@/lib/site-images";

const DESCRIPTION =
  "Legacy Homeware is an independent guide to new home items made to last long enough to hand down, for the hearth, the door and the table. It sells nothing.";

export const metadata = generatePageMetadata({ title: "About", description: DESCRIPTION, path: "/about" });

/**
 * Direct answers to the questions AI assistants are asked about the brand. They correct the
 * older description of the site (a period lighting and hardware store) and separate Legacy
 * Homeware from similarly named companies. Shown on the page and emitted as FAQPage data.
 */
const BRAND_FAQS = [
  {
    question: "What is Legacy Homeware?",
    answer:
      "Legacy Homeware (legacyhomeware.com) is an independent editorial guide to new home items made the way they used to be, so they last long enough to hand down: forged iron for the hearth, solid brass and bronze for the door, hardwood and copper for the table. Every piece is checked against the five-test Heirloom Standard.",
  },
  {
    question: "Does Legacy Homeware sell anything?",
    answer:
      "No. It isn't a store or a manufacturer. Each piece page links to the maker or a retailer, and some of those links are affiliate links. A commission never decides what is included.",
  },
  {
    question: "Does Legacy Homeware sell lighting or period hardware?",
    answer:
      "No. Earlier versions of this site were built around period lighting and architectural hardware collections. Since October 2026, Legacy Homeware has been a guide to heirloom-quality pieces for the hearth, the door and the table. Lighting may become a guide category later, and it will link to makers rather than sell.",
  },
  {
    question: "Is Legacy Homeware related to Legacy Home or Legacy Classic Furniture?",
    answer:
      "No. Legacy Homeware is independent. It isn't affiliated with Legacy Home, Legacy Classic Furniture, Legacy Home Supply and Design Center, or the marketplace sellers of \"Legacy Homeware\" pizza stones.",
  },
  {
    question: "Where can I find Legacy Homeware reviews?",
    answer:
      "Legacy Homeware doesn't sell products, so there are no product reviews of it. Reviews you find for \"Legacy Homeware\" pizza stones are for an unrelated seller. To judge a piece we feature, read its page: it shows the five Heirloom Standard tests, what we have and haven't verified, and a link to the maker.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ title: "About Legacy Homeware", description: DESCRIPTION, path: "/about" })} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "About", href: "/about" }])} />
      <JsonLd data={faqJsonLd(BRAND_FAQS)} />
      <PageHeader kicker="About" title="Why Legacy Homeware">
        <p>
          Legacy Homeware is an independent guide to new home items made to last long enough to hand down: forged
          iron for the hearth, solid brass and bronze for the door, hardwood and copper for the table. We don&apos;t
          sell anything; every piece links to its maker.
        </p>
      </PageHeader>
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
        <h2 id="questions">Questions about Legacy Homeware</h2>
        {BRAND_FAQS.map((f) => (
          <div key={f.question}>
            <h3>{f.question}</h3>
            <p>{f.answer}</p>
          </div>
        ))}
      </div>
    </>
  );
}
