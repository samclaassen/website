import Link from "next/link";
import { EntryImage } from "@/components/details/EntryImage";
import { getEntry } from "@/lib/details";
import type { Article } from "@/data/journal";

export function ArticleCard({ article, large = false }: { article: Article; large?: boolean }) {
  const hero = getEntry(article.heroEntry);
  return (
    <Link href={`/journal/${article.slug}`} className="group block">
      {hero && (
        <div className={`relative ${large ? "aspect-[3/2]" : "aspect-[4/3]"} overflow-hidden bg-cream-dark mb-5`}>
          <EntryImage image={hero.image} fill sizes={large ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 1024px) 100vw, 33vw"} className="img-quiet object-cover" />
        </div>
      )}
      <p className="eyebrow mb-3">{article.kicker}</p>
      <h3 className={`font-serif ${large ? "text-[clamp(1.8rem,2.8vw,2.5rem)]" : "text-[24px]"} font-normal leading-[1.15] text-stone mb-3`}>
        {article.title}
      </h3>
      <p className="text-[15px] leading-[1.7] text-muted max-w-xl">{article.dek}</p>
    </Link>
  );
}
