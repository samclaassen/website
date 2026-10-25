import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { SubscribeSection } from "@/components/ui/Subscribe";
import { StandardList } from "@/components/pieces/StandardList";
import { ListCard } from "@/components/lists/ListCard";
import { Inline } from "@/components/guides/Inline";
import { BIFL_HUB } from "@/data/lists/hubs";
import { breadcrumbJsonLd, faqJsonLd, generatePageMetadata, itemListJsonLd, webPageJsonLd } from "@/lib/seo";
import { stripLinks } from "@/lib/guides";
import { BIFL_LISTS, BIFL_PATH, GIFTS_PATH, listPath } from "@/lib/lists";

export const metadata = generatePageMetadata({
  title: "Buy it for life: home goods that last (2026)",
  description: BIFL_HUB.description,
  path: BIFL_PATH,
});

export default function BuyItForLifePage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ title: BIFL_HUB.title, description: BIFL_HUB.description, path: BIFL_PATH })} />
      <JsonLd
        data={itemListJsonLd(
          "Buy it for life: the ranked lists",
          BIFL_LISTS.map((l) => ({ name: l.title, path: listPath(l) })),
        )}
      />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: BIFL_HUB.title, href: BIFL_PATH }])} />
      <JsonLd
        data={faqJsonLd(
          [{ question: BIFL_HUB.question, answer: BIFL_HUB.answer }, ...BIFL_HUB.faqs].map((f) => ({ question: f.question, answer: stripLinks(f.answer) })),
        )}
      />

      <PageHeader kicker="Buy it for life" title="Home goods worth buying once">
        <p>
          Five ranked lists for the kitchen, the hearth and the door. Every piece on them is checked against the{" "}
          <Link href="/standard" className="link-underline">Heirloom Standard</Link>, and ranked on what we can verify.
        </p>
      </PageHeader>

      <div className="wrap max-w-[760px] pb-16">
        <section aria-labelledby="short-answer" className="card-texture px-6 py-7 sm:px-9 sm:py-8">
          <h2 id="short-answer" className="lab">The short answer</h2>
          <p className="display italic text-[19px] text-caption mt-3">{BIFL_HUB.question}</p>
          <p className="mt-3 text-[20px] leading-[1.6]">
            <Inline text={BIFL_HUB.answer} />
          </p>
        </section>
      </div>

      <div className="wrap pb-24">
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {BIFL_LISTS.map((l, i) => (
            <ListCard key={l.slug} list={l} priority={i < 3} />
          ))}
        </div>
      </div>

      <section className="card-texture" aria-labelledby="how-heading">
        <div className="wrap py-20 sm:py-24">
          <div className="max-w-[760px]">
            <p className="lab">How we rank</p>
            <h2 id="how-heading" className="display text-[34px] sm:text-[40px] leading-tight mt-2">
              Five tests, then the guarantee.
            </h2>
            <p className="text-[18px] leading-[1.6] text-caption mt-5">
              Every list is ranked the same way. First by the Standard: a confirmed pass counts fully, a partial
              (confirmed but short, like a 5-year warranty) counts for half, and a test we haven&apos;t confirmed yet
              counts for nothing until we have. Among pieces that pass the same tests, the stronger guarantee ranks
              higher, and the rest is our judgement, explained in each entry. We work from the makers&apos; own
              published facts, record the price and the date we checked it, and haven&apos;t tested the pieces side by
              side.
            </p>
          </div>
          <div className="mt-12">
            <StandardList compact />
          </div>
          <div className="mt-12">
            <Link href="/standard" className="btn-quiet">Read the Standard</Link>
          </div>
        </div>
      </section>

      <div className="wrap max-w-[760px] pt-20">
        <section id="questions" aria-labelledby="questions-heading">
          <h2 id="questions-heading" className="display text-[32px] leading-[1.15]">Questions</h2>
          {BIFL_HUB.faqs.map((f) => (
            <div key={f.question} className="mt-8">
              <h3 className="font-label font-semibold text-[13px] tracking-[0.1em] uppercase">{f.question}</h3>
              <p className="mt-2 text-[18px] leading-[1.6]">
                <Inline text={f.answer} />
              </p>
            </div>
          ))}
        </section>
        <p className="mt-14 text-[18px]">
          Buying for someone else?{" "}
          <Link href={GIFTS_PATH} className="link-underline">The heirloom gift guides</Link> sort the same pieces by
          budget and by who they&apos;re for.
        </p>
      </div>

      <SubscribeSection source={BIFL_PATH} />
      <div className="pb-16" />
    </>
  );
}
