import Link from "next/link";
import type { PieceListPage, ProseBlock } from "@/data/lists/types";
import { PRICE_CHECKED_DISPLAY } from "@/data/pieces";
import { JsonLd } from "@/components/seo/JsonLd";
import { Inline } from "@/components/guides/Inline";
import { SubscribeSection } from "@/components/ui/Subscribe";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd, itemListJsonLd } from "@/lib/seo";
import { getGuide, stripLinks } from "@/lib/guides";
import { fullName } from "@/lib/pieces";
import {
  BIFL_LISTS,
  BIFL_PATH,
  GIFTS_PATH,
  GIFT_GUIDES,
  listPath,
  listWordCount,
  picksFor,
  sectionsFor,
} from "@/lib/lists";
import { sitePhoto } from "@/lib/site-images";
import { AtAGlance } from "./AtAGlance";
import { ComparisonTable } from "./ComparisonTable";
import { ListEntry } from "./ListEntry";
import { ListVisual } from "./ListVisual";

function longDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function Block({ block }: { block: ProseBlock }) {
  switch (block.type) {
    case "h3":
      return (
        <h3>
          <Inline text={block.text} />
        </h3>
      );
    case "list":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>
              <Inline text={item} />
            </li>
          ))}
        </ul>
      );
    default:
      return (
        <p>
          <Inline text={block.text} />
        </p>
      );
  }
}

/** A ranked "buy it for life" list or a gift guide. Everything comes from src/data/lists. */
export function ListPageView({ list }: { list: PieceListPage }) {
  const ranked = list.type === "bifl";
  const path = listPath(list);
  const sections = sectionsFor(list);
  const picks = picksFor(list);
  const hub = ranked
    ? { name: "Buy it for life", href: BIFL_PATH }
    : { name: "Gift guides", href: GIFTS_PATH };
  const image = list.image ? sitePhoto(list.image).src : undefined;
  const guides = list.care.map((s) => getGuide(s)).filter((g) => g !== undefined);
  const others = (ranked ? BIFL_LISTS : GIFT_GUIDES).filter((l) => l.slug !== list.slug);

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: list.title,
          description: list.description,
          path,
          image,
          datePublished: list.published,
          dateModified: list.updated,
          wordCount: listWordCount(list),
          about: list.shortTitle,
        })}
      />
      <JsonLd
        data={itemListJsonLd(
          list.title,
          picks.map((pk) => ({ name: fullName(pk.piece), path: `/pieces/${pk.piece.slug}` })),
        )}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          hub,
          { name: list.title, href: path },
        ])}
      />
      <JsonLd
        data={faqJsonLd(
          [{ question: list.question, answer: list.answer }, ...list.faqs].map((f) => ({
            question: f.question,
            answer: stripLinks(f.answer),
          })),
        )}
      />

      <nav aria-label="Breadcrumb" className="wrap pt-8">
        <ol className="flex flex-wrap gap-2 lab">
          <li>
            <Link href={hub.href} className="hover:text-terracotta">
              {hub.name}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>{list.shortTitle}</li>
        </ol>
      </nav>

      <article>
        <header className="wrap max-w-[860px] pt-8 pb-10 sm:pt-10 sm:pb-12">
          <h1 className="display font-light text-[40px] sm:text-[56px] leading-[1.05] text-balance">{list.title}</h1>
          <p className="lab mt-6">
            Updated <time dateTime={list.updated}>{longDate(list.updated)}</time> · {picks.length}{" "}
            {ranked ? "picks, ranked" : "gifts"} · Prices as listed {PRICE_CHECKED_DISPLAY}
          </p>
        </header>

        <div className="wrap max-w-[1040px]">
          <ListVisual list={list} size="hero" priority />
        </div>

        <div className="wrap max-w-[760px] pt-12 sm:pt-14">
          <section aria-labelledby="short-answer" className="card-texture px-6 py-7 sm:px-9 sm:py-8">
            <h2 id="short-answer" className="lab">
              The short answer
            </h2>
            <p className="display italic text-[19px] text-caption mt-3">{list.question}</p>
            <p className="mt-3 text-[20px] leading-[1.6]">
              <Inline text={list.answer} />
            </p>
          </section>

          <AtAGlance sections={sections} ranked={ranked} />

          <section aria-labelledby="method-heading" className="mt-10 text-[16.5px] leading-[1.6] text-caption">
            <h2 id="method-heading" className="lab text-umber">
              {ranked ? "How we ranked" : "How we chose"}
            </h2>
            <p className="mt-3">
              {ranked ? (
                <>
                  First by the <Link href="/standard" className="link-underline text-umber">Heirloom Standard</Link>: a
                  piece that verifiably passes more of the five tests always ranks higher.{" "}
                </>
              ) : null}
              <Inline text={list.method} />
            </p>
            <p className="mt-3">
              Every fact comes from the maker&apos;s or retailer&apos;s own pages, checked {PRICE_CHECKED_DISPLAY}; we
              haven&apos;t tested these side by side.{" "}
              <Link href="/standard#how-we-evaluate" className="link-underline text-umber">
                How we evaluate
              </Link>
              . We may earn a commission from some links; it never decides what&apos;s included
              {ranked ? " or where it ranks" : ""}.
            </p>
          </section>
        </div>

        <div className="wrap max-w-[1040px] pt-16 sm:pt-20">
          {sections.map((s) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-heading`} className="scroll-mt-8 pb-6">
              <h2 id={`${s.id}-heading`} className="display text-[32px] sm:text-[38px] leading-tight text-balance">
                {s.heading}
              </h2>
              {s.intro && (
                <p className="mt-3 mb-8 text-[18px] leading-[1.6] text-caption max-w-[62ch]">
                  <Inline text={s.intro} />
                </p>
              )}
              <div className={s.intro ? "" : "mt-8"}>
                {s.picks.map((pk) => (
                  <ListEntry key={pk.id} pick={pk} ranked={ranked} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {list.comparison && (
          <div className="wrap max-w-[1040px] pt-10">
            <ComparisonTable comparison={list.comparison} />
          </div>
        )}

        <div className="wrap max-w-[760px] pt-6">
          <div className="prose-lh text-[19px]">
            {list.guide.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-8">
                <h2>{s.heading}</h2>
                {s.blocks.map((b, i) => (
                  <Block key={`${s.id}-${i}`} block={b} />
                ))}
              </section>
            ))}
          </div>

          <section id="questions" className="mt-16 scroll-mt-8" aria-labelledby="questions-heading">
            <h2 id="questions-heading" className="display text-[32px] leading-[1.15]">
              Questions
            </h2>
            {list.faqs.map((f) => (
              <div key={f.question} className="mt-8">
                <h3 className="font-label font-semibold text-[13px] tracking-[0.1em] uppercase">{f.question}</h3>
                <p className="mt-2 text-[18px] leading-[1.6]">
                  <Inline text={f.answer} />
                </p>
              </div>
            ))}
          </section>
        </div>
      </article>

      <SubscribeSection source={path} />

      <section className="wrap max-w-[760px] pt-16 pb-24" aria-labelledby="keep-reading-heading">
        <h2 id="keep-reading-heading" className="lab">
          Keep reading
        </h2>
        <div className="mt-4 grid gap-x-10 gap-y-8 sm:grid-cols-2 text-[17px]">
          {guides.length > 0 && (
            <div>
              <p className="lab text-umber mb-2">Care &amp; Keeping</p>
              <ul className="space-y-2">
                {guides.map((g) => (
                  <li key={g.slug}>
                    <Link href={`/care/${g.slug}`} className="link-underline">
                      {g.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <p className="lab text-umber mb-2">{ranked ? "More lists" : "More gift guides"}</p>
            <ul className="space-y-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={listPath(o)} className="link-underline">
                    {o.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={ranked ? GIFTS_PATH : BIFL_PATH} className="link-underline">
                  {ranked ? "Heirloom gift guides" : "Buy it for life: the ranked lists"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
