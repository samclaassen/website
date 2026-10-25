import Link from "next/link";
import { notFound } from "next/navigation";
import type { GuideBlock } from "@/data/guides/types";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd, generatePageMetadata, howToJsonLd } from "@/lib/seo";
import { CARE_GUIDES, getGuide, guideWordCount, piecesFor, readingMinutes, stripLinks } from "@/lib/guides";
import { GuideVisual } from "@/components/guides/GuideVisual";
import { Inline } from "@/components/guides/Inline";
import { PieceCard } from "@/components/pieces/PieceCard";
import { SubscribeSection } from "@/components/ui/Subscribe";
import { sitePhoto } from "@/lib/site-images";
import { listPath, listsForGuide } from "@/lib/lists";

interface Params {
  slug: string;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return CARE_GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return generatePageMetadata({
    title: g.title,
    description: g.description,
    path: `/care/${g.slug}`,
    ogImage: g.image ? sitePhoto(g.image).src : undefined,
  });
}

function longDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function Block({ block }: { block: GuideBlock }) {
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

export default async function GuidePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();

  const path = `/care/${g.slug}`;
  const pieces = piecesFor(g);
  const others = CARE_GUIDES.filter((x) => x.slug !== g.slug);
  const lists = listsForGuide(g.slug);
  const image = g.image ? sitePhoto(g.image).src : undefined;

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: g.title,
          description: g.description,
          path,
          image,
          datePublished: g.published,
          dateModified: g.updated,
          wordCount: guideWordCount(g),
          about: g.kicker,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Care & Keeping", href: "/care" },
          { name: g.title, href: path },
        ])}
      />
      {g.howTo && (
        <JsonLd
          data={howToJsonLd({
            name: g.howTo.name,
            description: g.howTo.description,
            path,
            totalTime: g.howTo.totalTime,
            supplies: g.howTo.supplies,
            tools: g.howTo.tools,
            steps: g.howTo.steps.map((s) => ({ name: s.name, text: stripLinks(s.text) })),
          })}
        />
      )}
      <JsonLd data={faqJsonLd(g.faqs.map((f) => ({ question: f.question, answer: stripLinks(f.answer) })))} />

      <nav aria-label="Breadcrumb" className="wrap pt-8">
        <ol className="flex flex-wrap gap-2 lab">
          <li>
            <Link href="/care" className="hover:text-terracotta">Care &amp; Keeping</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>{g.kicker}</li>
        </ol>
      </nav>

      <article>
        <header className="wrap max-w-[860px] pt-8 pb-10 sm:pt-10 sm:pb-12">
          <h1 className="display font-light text-[40px] sm:text-[56px] leading-[1.05] text-balance">{g.title}</h1>
          <p className="lab mt-6">
            Updated <time dateTime={g.updated}>{longDate(g.updated)}</time> · {readingMinutes(g)} min read
            {pieces.length > 0 ? ` · applies to ${pieces.length} pieces` : ""}
          </p>
        </header>

        <div className="wrap max-w-[1040px]">
          <GuideVisual guide={g} size="hero" priority />
        </div>

        <div className="wrap max-w-[760px] pt-12 sm:pt-14">
          <section aria-labelledby="short-answer" className="card-texture px-6 py-7 sm:px-9 sm:py-8">
            <h2 id="short-answer" className="lab">The short answer</h2>
            <p className="display italic text-[19px] text-caption mt-3">{g.question}</p>
            <p className="mt-3 text-[20px] leading-[1.6]">
              <Inline text={g.answer} />
            </p>
          </section>

          {lists.length > 0 && (
            <p className="mt-5 text-[15px] text-caption font-label leading-relaxed">
              Buying one?{" "}
              {lists.map((l, i) => (
                <span key={l.slug}>
                  {i > 0 && " · "}
                  <Link href={listPath(l)} className="link-underline text-umber">
                    {l.title}
                  </Link>
                </span>
              ))}
            </p>
          )}

          <div className="prose-lh text-[19px]">
            {g.sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-8">
                <h2>{s.heading}</h2>
                {s.blocks.map((b, i) => (
                  <Block key={`${s.id}-${i}`} block={b} />
                ))}
              </section>
            ))}
          </div>

          {g.howTo && (
            <section id="method" className="mt-16 scroll-mt-8" aria-labelledby="method-heading">
              <p className="lab">Step by step</p>
              <h2 id="method-heading" className="display text-[32px] leading-[1.15] mt-2">{g.howTo.name}</h2>
              <p className="mt-3 text-[18px] text-caption">{g.howTo.description}</p>
              {(g.howTo.supplies?.length || g.howTo.tools?.length) && (
                <dl className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2 text-[16px]">
                  {g.howTo.supplies?.length ? (
                    <div>
                      <dt className="lab mb-2">You need</dt>
                      {g.howTo.supplies.map((s) => (
                        <dd key={s} className="py-1 border-b border-line">{s}</dd>
                      ))}
                    </div>
                  ) : null}
                  {g.howTo.tools?.length ? (
                    <div>
                      <dt className="lab mb-2">Tools</dt>
                      {g.howTo.tools.map((t) => (
                        <dd key={t} className="py-1 border-b border-line">{t}</dd>
                      ))}
                    </div>
                  ) : null}
                </dl>
              )}
              <ol className="mt-8 border-t border-line">
                {g.howTo.steps.map((st, i) => (
                  <li
                    key={st.name}
                    id={`step-${i + 1}`}
                    className="grid grid-cols-[44px_1fr] gap-4 py-5 border-b border-line scroll-mt-8"
                  >
                    <span className="display text-[26px] leading-none text-terracotta" aria-hidden="true">
                      {i + 1}
                    </span>
                    <div>
                      <b className="block font-label font-semibold text-[13px] tracking-[0.1em] uppercase mb-1.5">
                        {st.name}
                      </b>
                      <p className="text-[17.5px] leading-normal">
                        <Inline text={st.text} />
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {g.mistakes && g.mistakes.length > 0 && (
            <section className="mt-16" aria-labelledby="mistakes-heading">
              <h2 id="mistakes-heading" className="display text-[32px] leading-[1.15]">What not to do</h2>
              <ul className="mt-6 border-t border-line">
                {g.mistakes.map((m) => (
                  <li key={m} className="grid grid-cols-[30px_1fr] py-3 border-b border-line text-[17.5px]">
                    <span className="display text-[20px] leading-none pt-0.5 text-terracotta" aria-hidden="true">
                      ×
                    </span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section id="questions" className="mt-16 scroll-mt-8" aria-labelledby="questions-heading">
            <h2 id="questions-heading" className="display text-[32px] leading-[1.15]">Questions</h2>
            {g.faqs.map((f) => (
              <div key={f.question} className="mt-8">
                <h3 className="font-label font-semibold text-[13px] tracking-[0.1em] uppercase">{f.question}</h3>
                <p className="mt-2 text-[18px] leading-[1.6]">
                  <Inline text={f.answer} />
                </p>
              </div>
            ))}
          </section>

          {g.sources && g.sources.length > 0 && (
            <section className="mt-16" aria-labelledby="sources-heading">
              <h2 id="sources-heading" className="lab">Sources</h2>
              <ul className="mt-4 text-[16px] space-y-2">
                {g.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} className="link-underline" rel="noopener" target="_blank">{s.name}</a>
                    {s.note && <span className="text-caption"> · {s.note}</span>}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[14px] text-caption font-label">
                Guides describe materials in general. For a specific piece, the maker&apos;s own instructions come
                first.
              </p>
            </section>
          )}
        </div>
      </article>

      {pieces.length > 0 && (
        <section className="wrap pt-20 pb-6" aria-labelledby="applies-heading">
          <p className="lab">From the collection</p>
          <h2 id="applies-heading" className="display text-[32px] sm:text-[36px] leading-tight mt-2 mb-10">
            Pieces this guide applies to
          </h2>
          <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {pieces.slice(0, 6).map((p) => (
              <PieceCard key={p.slug} piece={p} />
            ))}
          </div>
          {pieces.length > 6 && (
            <p className="mt-12">
              <Link href={`/pieces?material=${g.families[0]}`} className="btn-quiet">
                All {pieces.length} pieces →
              </Link>
            </p>
          )}
        </section>
      )}

      <SubscribeSection source={path} />

      <section className="wrap pb-24" aria-labelledby="more-guides-heading">
        <h2 id="more-guides-heading" className="lab">More guides</h2>
        <ul className="mt-4 grid gap-x-10 gap-y-2 sm:grid-cols-2 text-[17px]">
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`/care/${o.slug}`} className="link-underline">{o.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
