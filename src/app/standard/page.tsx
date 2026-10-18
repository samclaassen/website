import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, generatePageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Ornament } from "@/components/ui/Ornament";
import { DISQUALIFIERS, STANDARD_TESTS, StandardList } from "@/components/pieces/StandardList";
import { CHECK_LABEL, CHECK_ORDER } from "@/lib/piece-types";
import { PIECES } from "@/lib/pieces";
import { CreditedImage } from "@/components/media/CreditedImage";
import { libraryPhoto } from "@/data/image-library";

const DESCRIPTION =
  "The five tests every Legacy Homeware piece must pass: solid materials, built to be repaired, ages well, lasting design, and a maker that stands behind it. Plus what we reject, how we evaluate, and our affiliate policy.";

export const metadata = generatePageMetadata({
  title: "The Heirloom Standard",
  description: DESCRIPTION,
  path: "/standard",
});

export default function StandardPage() {
  const affiliateNone = PIECES.filter((p) => p.affiliate.status === "none").length;
  return (
    <>
      <JsonLd
        data={faqJsonLd([
          {
            question: "What is the Heirloom Standard?",
            answer: `Five tests every piece on Legacy Homeware must pass: ${CHECK_ORDER.map((k) => `${CHECK_LABEL[k]} (${STANDARD_TESTS[k]})`).join(" ")}`,
          },
          {
            question: "What is automatically disqualified?",
            answer: DISQUALIFIERS.join("; ") + ".",
          },
          {
            question: "Does Legacy Homeware only feature pieces that pay a commission?",
            answer:
              "No. We include pieces whether or not the maker has an affiliate program. Commission never decides what we include.",
          },
        ])}
      />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "The Heirloom Standard", href: "/standard" }])} />

      <PageHeader kicker="How we choose" title="The Heirloom Standard">
        <p>
          One question sits behind every piece: <em className="text-umber">could this leave the house with the family
          and be handed down?</em> These five tests are how we answer it.
        </p>
      </PageHeader>

      <div className="wrap pb-16 sm:pb-20 grid gap-8 sm:grid-cols-[1fr_1.35fr] items-end">
        <CreditedImage
          photo={libraryPhoto("craft-blacksmith-anvil")}
          frame="aspect-[4/5]"
          sizes="(min-width: 640px) 440px, 100vw"
          priority
        />
        <CreditedImage
          photo={libraryPhoto("craft-hot-iron")}
          frame="aspect-[4/3]"
          sizes="(min-width: 640px) 600px, 100vw"
        />
      </div>

      <section className="card-texture">
        <div className="wrap py-16 sm:py-20">
          <p className="lab mb-8">A piece qualifies only if it passes all five</p>
          <StandardList />
        </div>
      </section>

      <div className="wrap max-w-[760px] py-20 prose-lh">
        <h2 id="disqualifiers" className="!mt-0">What we reject outright</h2>
        <p>Some things rule a piece out before we look any further:</p>
        <ul>
          {DISQUALIFIERS.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
        <p>
          Built-in fixtures such as cabinetry, flooring and windows are out of scope too. They belong to the house,
          not the family.
        </p>

        <h2 id="how-we-evaluate">How we evaluate</h2>
        <p>
          We start from the maker&apos;s own product page: the materials, construction, warranty and where it&apos;s
          made. We record the price as listed and the date we checked it. Each piece page shows the five tests with
          a one-line reason for each.
        </p>
        <p>
          When a fact isn&apos;t confirmed yet (a warranty, a country of origin, what a mesh or body is made of) the
          test is marked <b>Not yet verified</b> rather than given a tick. That means we haven&apos;t confirmed it,
          not that the piece fails. Where something is worth knowing before you buy, we say it plainly on the page.
        </p>
        <p>
          Some facts are confirmed but fall short. For test 5, a lifetime or &ldquo;forever&rdquo; guarantee, a
          warranty of 10 years or more, or free repair and service for life earns a tick. A 1&ndash;5 year warranty,
          cover on the finish only, or a return guarantee with no warranty is marked <b>Partial</b>, with the reason
          given. Where the made-in country is known we show it, but it isn&apos;t one of the five tests.
        </p>
        <p>
          This is Wave 1: {PIECES.length} pieces across Hearth &amp; Heat, Kitchen and Hardware. Prices were checked
          on October 18, 2026 and change often, so always confirm on the retailer&apos;s site.
        </p>

        <div className="not-prose my-12 grid gap-6 sm:grid-cols-[minmax(0,300px)_1fr] items-end">
          <CreditedImage
            photo={libraryPhoto("hist-rim-lock")}
            frame="aspect-square"
            sizes="300px"
          />
          <p className="italic text-caption text-[16px] leading-relaxed">
            An 18th-century rim lock, recorded by the Historic American Buildings Survey. A rim lock is screwed to
            the face of the door, so it can be taken off, oiled and mended: the idea behind test two.
          </p>
        </div>

        <h2 id="affiliate-policy">Our affiliate policy</h2>
        <p>
          Legacy Homeware isn&apos;t a store. We earn money through affiliate links: if you buy through some of our
          links, the retailer may pay us a commission at no extra cost to you.
        </p>
        <p>
          <b>We include pieces whether or not they pay a commission.</b> Many of the best makers, including small
          blacksmiths, bronze foundries and stove makers, don&apos;t run affiliate programs. {affiliateNone} of our{" "}
          {PIECES.length} Wave 1 pieces have no program we could find, and they&apos;re here anyway because they meet
          the Standard. Each piece page says whether the link may earn us a commission.
        </p>

        <h2 id="images">Photos</h2>
        <p>
          We only show a maker&apos;s photos once we have the right to: through an affiliate program, a press kit or
          written permission, always credited and linked. Until then, a piece is shown with an openly licensed
          photograph of its material, clearly labelled &ldquo;Material photo — not this exact piece&rdquo;. Every
          photo on the site is a real photograph or a public-domain artwork, credited and linked to its source; the
          full list is on our <Link href="/credits">photo credits</Link> page. We never use AI-generated images.
        </p>

        <div className="not-prose mt-16 text-center">
          <Ornament className="mx-auto w-[160px] text-line" />
          <p className="mt-8">
            <Link href="/pieces" className="btn">See the pieces</Link>
          </p>
        </div>
      </div>
    </>
  );
}
