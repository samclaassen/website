import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Renders guide text with inline links written as [label](/path) or [label](https://...).
 * Internal links use next/link; external links open in a new tab.
 */
export function Inline({ text }: { text: string }) {
  const re = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  const parts: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const [, label, href] = m;
    parts.push(
      href.startsWith("/") ? (
        <Link key={i++} href={href} className="link-underline">
          {label}
        </Link>
      ) : (
        <a key={i++} href={href} className="link-underline" rel="noopener" target="_blank">
          {label}
        </a>
      ),
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
