import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { SubscribeSection } from "@/components/ui/Subscribe";
import { ListCard } from "@/components/lists/ListCard";
import { Inline } from "@/components/guides/Inline";
import { GIFT_HUB } from "@/data/lists/hubs";
import { breadcrumbJsonLd, faqJsonLd, generatePageMetadata, itemListJsonLd, webPageJsonLd } from "@/lib/seo";
import { stripLinks } from "@/lib/guides";
import { BIFL_PATH, GIFTS_PATH, GIFT_FLOOR, GIFT_GUIDES, listPath } from "@/lib/lists";
import { PRICE_CHECKED_DISPLAY } from "@/data/pieces";

export const metadata = generatePageMetadata({
  title: "Heirloom gift guides 2026: gifts that last",
  description: GIFT_HUB.description,
  path: GIFTS_PATH,
});

export default function GiftsPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ title: GIFT_HUB.title, description: GIFT_HUB.description, path: GIFTS_PATH })} />
      <JsonLd
        data={itemListJsonLd(
          GIFT_HUB.title,
          GIFT_GUIDES.map((l) => ({ name: l.title, path: listPath(l) })),
        )}
      />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Gift guides", href: GIFTS_PATH }])} />
      <JsonLd
        data={faqJsonLd(
          [{ question: GIFT_HUB.question, answer: GIFT_HUB.answer }, ...GIFT_HUB.faqs].map((f) => ({ question: f.question, answer: stripLinks(f.answer) })),
        )}
      />

      <PageHeader kicker="Gift guides · Holiday 2026" title="Heirloom gifts">
        <p>
          Five guides for the holidays, by budget and by who it&apos;s for. Every gift is a piece from our list that
          verifies at least {GIFT_FLOOR === 4 ? "four" : GIFT_FLOOR} of the five tests of the{" "}
          <Link href="/standard" className="link-underline">Heirloom Standard</Link>.
        </p>
      </PageHeader>

      <div className="wrap max-w-[760px] pb-16">
        <section aria-labelledby="short-answer" className="card-texture px-6 py-7 sm:px-9 sm:py-8">
          <h2 id="short-answer" className="lab">The short answer</h2>
          <p className="display italic text-[19px] text-caption mt-3">{GIFT_HUB.question}</p>
          <p className="mt-3 text-[20px] leading-[1.6]">
            <Inline text={GIFT_HUB.answer} />
          </p>
        </section>
      </div>

      <div className="wrap pb-20">
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {GIFT_GUIDES.map((l, i) => (
            <ListCard key={l.slug} list={l} priority={i < 3} />
          ))}
        </div>
      </div>

      <div className="wrap max-w-[760px]">
        <section aria-labelledby="order-heading" className="border-t border-line pt-10">
          <h2 id="order-heading" className="lab text-umber">Before you order</h2>
          <p className="mt-3 text-[18px] leading-[1.6]">
            Hand-forged and made-to-order pieces can take weeks to make, and small workshops can sell out before the
            holidays, so check the maker&apos;s lead time when you order. Prices are as listed on{" "}
            {PRICE_CHECKED_DISPLAY}; check the retailer for the price on the day. We may earn a commission from some
            links; it never decides what&apos;s included.
          </p>
        </section>

        <section id="questions" className="mt-16" aria-labelledby="questions-heading">
          <h2 id="questions-heading" className="display text-[32px] leading-[1.15]">Questions</h2>
          {GIFT_HUB.faqs.map((f) => (
            <div key={f.question} className="mt-8">
              <h3 className="font-label font-semibold text-[13px] tracking-[0.1em] uppercase">{f.question}</h3>
              <p className="mt-2 text-[18px] leading-[1.6]">
                <Inline text={f.answer} />
              </p>
            </div>
          ))}
        </section>

        <p className="mt-14 text-[18px]">
          Buying for yourself? <Link href={BIFL_PATH} className="link-underline">Buy it for life</Link> ranks the same
          pieces for the kitchen, the hearth and the door.
        </p>
      </div>

      <SubscribeSection source={GIFTS_PATH} />
      <div className="pb-16" />
    </>
  );
}
