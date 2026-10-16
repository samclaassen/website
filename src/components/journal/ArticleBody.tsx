import Link from "next/link";
import { Fragment } from "react";
import { EntryImage } from "@/components/details/EntryImage";
import { getEntry } from "@/lib/details";
import type { ArticleBlock } from "@/data/journal";

/** Render text with [label](href) links; internal hrefs use next/link. */
export function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(<Fragment key={i++}>{text.slice(last, m.index)}</Fragment>);
    const [, label, href] = m;
    parts.push(
      href.startsWith("/") ? (
        <Link key={i++} href={href}>{label}</Link>
      ) : (
        <a key={i++} href={href} target="_blank" rel="noopener">{label}</a>
      ),
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(<Fragment key={i++}>{text.slice(last)}</Fragment>);
  return <>{parts}</>;
}

export function slugifyHeading(t: string) {
  return t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="prose-editorial">
      {blocks.map((b, idx) => {
        switch (b.type) {
          case "p":
            return <p key={idx}><RichText text={b.text} /></p>;
          case "h2":
            return (
              <h2 key={idx} id={slugifyHeading(b.text)} className="font-serif text-[clamp(1.6rem,2.4vw,2.1rem)] font-normal leading-[1.2] text-stone mt-14 mb-5 scroll-mt-28">
                {b.text}
              </h2>
            );
          case "list":
            return (
              <ul key={idx} className="list-disc pl-5 mb-7 space-y-2 text-[17px] leading-[1.75] text-stone-light marker:text-border-strong">
                {b.items.map((it, j) => <li key={j}><RichText text={it} /></li>)}
              </ul>
            );
          case "dl":
            return (
              <dl key={idx} className="my-9 border-y border-border divide-y divide-border">
                {b.items.map((it, j) => (
                  <div key={j} className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-x-6 gap-y-1 py-4">
                    <dt className="font-serif text-[18px] text-stone">{it.term}</dt>
                    <dd className="text-[15.5px] leading-[1.7] text-muted"><RichText text={it.def} /></dd>
                  </div>
                ))}
              </dl>
            );
          case "figure": {
            const e = getEntry(b.entry);
            if (!e) return null;
            const wide = (e.image.width ?? 4) >= (e.image.height ?? 3);
            return (
              <figure key={idx} className={`my-12 ${wide ? "lg:-mx-24" : "max-w-[460px] mx-auto"}`}>
                <Link href={`/library/${e.slug}`} className="block bg-cream-dark">
                  <EntryImage image={e.image} sizes="(max-width: 1024px) 100vw, 900px" className="w-full h-auto" />
                </Link>
                <figcaption className="mt-3 text-[13.5px] leading-[1.6] text-muted">
                  <RichText text={b.caption} />{" "}
                  <span className="text-light">
                    <Link href={`/library/${e.slug}`} className="!text-light">{e.title}</Link>. {e.image.credit}.
                  </span>
                </figcaption>
              </figure>
            );
          }
        }
      })}
    </div>
  );
}
