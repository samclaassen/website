import Link from "next/link";
import Image from "next/image";
import { generatePageMetadata, webPageJsonLd } from "@/lib/seo";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { EntryImage } from "@/components/details/EntryImage";
import { ArticleCard } from "@/components/journal/ArticleCard";
import { COLLECTIONS } from "@/lib/collections";
import { ENTRIES, STYLES, entriesFor, entriesForElement, entriesForStyle, getElement, getEntry, hasComboPage, isCatalogPlate, type Entry } from "@/lib/details";
import { STYLE_META } from "@/data/styleMeta";
import { ELEMENT_GROUPS, groupHref } from "@/data/elementGroups";
import { ARTICLES, getArticle } from "@/data/journal";

export const metadata = generatePageMetadata({
  title: `${SITE_NAME} — The Architectural Design Library`,
  description: SITE_DESCRIPTION,
  path: "/",
});

const HERO = {
  src: "/images/details/renaissance-stube-from-thierburg-castle-tiroler-volkskunstmuseum-2400.jpg",
  entry: "renaissance-stube-from-thierburg-castle-tiroler-volkskunstmuseum",
  alt: "A Renaissance Stube from Thierburg Castle in Tyrol, lined with carved pine paneling, with a coffered ceiling and a tiled stove",
};

const ALPINE_FEATURE = {
  src: "/images/details/painted-farmhouse-stube-appenzell-folk-museum-stein-2400.jpg",
  entry: "painted-farmhouse-stube-appenzell-folk-museum-stein",
  details: [
    "carved-gothic-door-in-the-niederdorf-stube",
    "painted-star-door-gasthof-tiroler-weinhaus-achenkirch",
    "bench-with-chip-carved-back-luneburg-heath",
  ],
};

const DETAILS_WORTH_EXPLORING = [
  "hector-guimard-double-door-from-the-coutolleau-shop-angers",
  "carved-linenfold-panel-with-cross-motif",
  "spiral-stair-in-the-trustees-office-shaker-village-of-pleasant-hill",
  "marquetry-elevator-doors-chrysler-building-new-york",
  "painted-beam-bracket-musee-de-l-ecole-de-nancy",
  "painted-door-at-red-house-bexleyheath",
  "samuel-mcintire-mantel-from-the-elias-hasket-derby-house-salem",
  "inglenook-fireplace-wightwick-manor",
];

const CRAFT_CLOSEUPS = [
  { entry: "bench-with-chip-carved-back-luneburg-heath", label: "Chip carving" },
  { entry: "carved-linenfold-panel-with-cross-motif", label: "Linenfold" },
  { entry: "carved-main-door-museum-of-cultural-history-oslo", label: "Relief carving" },
  { entry: "carved-wood-detail-inside-broad-leys-windermere", label: "Shaped joinery" },
];

function plural(n: number, word: string) {
  return `${n} documented ${word}${n === 1 ? "" : "s"}`;
}

function StyleImage({ entry, sizes, priority = false }: { entry: Entry; sizes: string; priority?: boolean }) {
  const plate = isCatalogPlate(entry);
  return (
    <EntryImage
      image={entry.image}
      fill
      sizes={sizes}
      priority={priority}
      className={`img-quiet ${plate ? "object-contain p-5" : "object-cover"}`}
    />
  );
}

export default function HomePage() {
  const styleCards = STYLES.map((s) => ({ style: s, meta: STYLE_META[s.slug], cover: getEntry(STYLE_META[s.slug]?.cover ?? "") }))
    .filter((c) => c.meta && c.cover) as { style: (typeof STYLES)[number]; meta: (typeof STYLE_META)[string]; cover: Entry }[];
  const flagships = ["alpine-chalet", "arts-and-crafts", "english-country"].map((slug) => styleCards.find((c) => c.style.slug === slug)!);
  const others = styleCards.filter((c) => !flagships.includes(c));
  const [lead, ...medium] = flagships;

  const alpineCount = entriesForStyle("alpine-chalet").length;
  const alpineElements = [...new Set(entriesForStyle("alpine-chalet").map((e) => e.element))]
    .map((el) => ({ el, name: getElement(el)?.name ?? el, n: entriesFor("alpine-chalet", el).length }))
    .sort((a, b) => b.n - a.n);
  const featureDetails = ALPINE_FEATURE.details.map((s) => getEntry(s)).filter(Boolean) as Entry[];
  const worth = DETAILS_WORTH_EXPLORING.map((s) => getEntry(s)).filter(Boolean) as Entry[];
  const closeups = CRAFT_CLOSEUPS.map((c) => ({ ...c, e: getEntry(c.entry) })).filter((c) => c.e) as { entry: string; label: string; e: Entry }[];
  const heroEntry = getEntry(HERO.entry);
  const journal = ARTICLES.slice(0, 3);

  return (
    <>
      <JsonLd data={webPageJsonLd({ title: `${SITE_NAME} — The Architectural Design Library`, description: SITE_DESCRIPTION, path: "/" })} />

      {/* 1 · Hero */}
      <section className="relative h-[min(84vh,880px)] min-h-[540px] overflow-hidden bg-ink">
        <Image src={HERO.src} alt={HERO.alt} fill priority sizes="100vw" quality={75} className="object-cover object-[50%_45%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />
        <div className="relative z-10 h-full mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 flex flex-col justify-end pb-14 sm:pb-20">
          <div className="max-w-[880px] fade-up">
            <p className="text-[11.5px] sm:text-[12px] tracking-[0.22em] uppercase text-white/80 mb-5">The Architectural Design Library</p>
            <h1 className="font-serif text-[clamp(2.9rem,7vw,5.6rem)] font-normal leading-[0.98] tracking-[-0.02em] text-white mb-6 text-shadow-hero">
              The details that <em className="italic">define</em> a home.
            </h1>
            <p className="text-[16px] sm:text-[18px] leading-[1.65] text-white/85 max-w-[600px] mb-9">
              Explore the doors, cabinetry, paneling and architectural craftsmanship behind the world&rsquo;s most enduring design styles.
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link href="/library" className="text-link text-link-light text-[15px]">
                Explore the Library <span aria-hidden="true">→</span>
              </Link>
              <Link href="/styles" className="text-[14px] text-white/75 hover:text-white">
                Browse by style
              </Link>
            </div>
          </div>
        </div>
        {heroEntry && (
          <Link
            href={`/library/${heroEntry.slug}`}
            className="hidden sm:block absolute right-8 lg:right-12 bottom-5 z-10 text-[11px] text-white/60 hover:text-white max-w-[60vw] text-right"
          >
            Renaissance Stube, Thierburg Castle, Tyrol · Photo: {heroEntry.image.credit}, {heroEntry.image.license}
          </Link>
        )}
      </section>
      {heroEntry && (
        <p className="sm:hidden px-5 pt-2 text-[11px] leading-[1.5] text-light">
          Renaissance Stube, Thierburg Castle, Tyrol. Photo: {heroEntry.image.credit}, {heroEntry.image.license}.
        </p>
      )}

      {/* 2 · Styles */}
      <section className="px-5 sm:px-8 lg:px-12 pt-24 sm:pt-32 pb-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14">
            <div className="lg:col-span-6">
              <p className="eyebrow mb-4">Explore by style</p>
              <h2 className="font-serif text-[clamp(2.2rem,4vw,3.4rem)] font-normal leading-[1.05] tracking-[-0.01em] text-stone">
                Discover architectural traditions
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 lg:pt-10">
              <p className="text-[17px] leading-[1.75] text-muted mb-5">
                From carved Alpine woodwork to the restrained geometry of Arts &amp; Crafts, explore the details that make each style distinctive.
              </p>
              <Link href="/styles" className="text-link">All {STYLES.length} styles <span aria-hidden="true">→</span></Link>
            </div>
          </div>

          {/* Flagship composition: one large, two medium */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-16">
            <Link href={`/styles/${lead.style.slug}`} className="group lg:col-span-7 block">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[640px] overflow-hidden bg-cream-dark mb-5">
                <StyleImage entry={lead.cover} sizes="(max-width: 1024px) 100vw, 58vw" />
              </div>
              <p className="text-[12px] tracking-[0.14em] uppercase text-light mb-2">{lead.meta.context}</p>
              <h3 className="font-serif text-[clamp(1.9rem,3vw,2.6rem)] font-normal leading-[1.1] text-stone mb-2">{lead.style.name}</h3>
              <p className="text-[15.5px] leading-[1.65] text-muted max-w-xl">{lead.meta.tagline}</p>
              <p className="mt-2 text-[13px] text-light">{plural(entriesForStyle(lead.style.slug).length, "detail")}</p>
            </Link>
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8">
              {medium.map((c) => (
                <Link key={c.style.slug} href={`/styles/${c.style.slug}`} className="group block">
                  <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[248px] overflow-hidden bg-cream-dark mb-4">
                    <StyleImage entry={c.cover} sizes="(max-width: 1024px) 50vw, 40vw" />
                  </div>
                  <h3 className="font-serif text-[26px] font-normal leading-[1.15] text-stone mb-1">{c.style.name}</h3>
                  <p className="text-[14.5px] leading-[1.6] text-muted">{c.meta.tagline}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Secondary styles */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 border-t border-border pt-12">
            {others.map((c) => (
              <Link key={c.style.slug} href={`/styles/${c.style.slug}`} className="group grid grid-cols-1 sm:grid-cols-[132px_1fr] gap-4 items-start">
                <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-cream-dark">
                  <StyleImage entry={c.cover} sizes="(max-width: 640px) 50vw, 160px" />
                </div>
                <div>
                  <h3 className="font-serif text-[21px] leading-[1.2] text-stone mb-1.5">{c.style.name}</h3>
                  <p className="text-[13.5px] leading-[1.55] text-muted line-clamp-3">{c.meta.tagline}</p>
                  <p className="mt-1.5 text-[12px] text-light">{plural(entriesForStyle(c.style.slug).length, "detail")}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · Elements */}
      <section className="bg-surface border-y border-border px-5 sm:px-8 lg:px-12 py-24 sm:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14">
            <div className="lg:col-span-6">
              <p className="eyebrow mb-4">Explore by architectural element</p>
              <h2 className="font-serif text-[clamp(2.2rem,4vw,3.4rem)] font-normal leading-[1.05] tracking-[-0.01em] text-stone">
                Every detail has a history
              </h2>
            </div>
            <p className="lg:col-span-5 lg:col-start-8 lg:pt-10 text-[17px] leading-[1.75] text-muted">
              A door, a mantel or a run of paneling can say as much about a style as a whole room. Browse the library by the object itself.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 sm:gap-x-6 gap-y-12">
            {ELEMENT_GROUPS.map((g) => {
              const cover = getEntry(g.cover);
              const n = g.elements.reduce((sum, el) => sum + entriesForElement(el).length, 0);
              return (
                <Link key={g.slug} href={groupHref(g)} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-cream-dark mb-4">
                    {cover && <EntryImage image={cover.image} fill sizes="(max-width: 1024px) 50vw, 25vw" className="img-quiet object-cover" />}
                  </div>
                  <h3 className="font-serif text-[22px] sm:text-[24px] leading-[1.15] text-stone mb-1.5">{g.name}</h3>
                  <p className="text-[13.5px] leading-[1.55] text-muted hidden sm:block">{g.description}</p>
                  <p className="mt-1.5 text-[12px] text-light">{plural(n, "example")}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4 · Featured style deep dive: Alpine */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12">
          <Link href={`/library/${ALPINE_FEATURE.entry}`} className="relative block lg:col-span-7 min-h-[420px] lg:min-h-[760px]">
            <Image
              src={ALPINE_FEATURE.src}
              alt="Painted farmhouse Stube at the Appenzell Folk Museum in Stein, with painted built-in cupboards and pine paneling"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
          </Link>
          <div className="lg:col-span-5 px-5 sm:px-8 lg:px-14 py-16 lg:py-20 flex flex-col">
            <p className="text-[12px] tracking-[0.18em] uppercase text-white/55 mb-5">Featured style · Alpine Chalet</p>
            <h2 className="font-serif text-[clamp(2.1rem,3.6vw,3.2rem)] font-normal leading-[1.06] tracking-[-0.01em] mb-6">
              The enduring character of Alpine woodwork
            </h2>
            <p className="text-[16.5px] leading-[1.8] text-white/75 mb-4">
              In the farmhouses and castles of Tyrol and Switzerland, the heated Stube was lined with pine, larch or stone pine, fitted with benches
              along the walls and a table in the corner, and finished with carved, inlaid or painted detail.
            </p>
            <p className="text-[16.5px] leading-[1.8] text-white/75 mb-8">
              Explore the carved doors, paneled rooms and painted cabinetry documented in {alpineCount} Alpine entries.
            </p>
            <ul className="border-t border-white/15 mb-10">
              {alpineElements.filter((a) => a.n >= 2).slice(0, 4).map((a) => (
                <li key={a.el} className="border-b border-white/15">
                  <Link
                    href={hasComboPage("alpine-chalet", a.el) ? `/styles/alpine-chalet/${a.el}` : `/library?style=alpine-chalet&element=${a.el}`}
                    className="flex items-center justify-between py-3.5 text-[15px] text-white/85 hover:text-white"
                  >
                    <span>Alpine {a.name.toLowerCase()}</span>
                    <span className="text-white/45 text-[13px]">{a.n}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-3 gap-3 mb-10">
              {featureDetails.map((e) => (
                <Link key={e.slug} href={`/library/${e.slug}`} className="group block relative aspect-square overflow-hidden bg-white/5" title={e.title}>
                  <EntryImage image={e.image} fill sizes="160px" className="img-quiet object-cover" />
                </Link>
              ))}
            </div>
            <Link href="/styles/alpine-chalet" className="text-link text-link-light self-start mt-auto">
              Explore Alpine Chalet <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5 · Details worth exploring */}
      <section className="px-5 sm:px-8 lg:px-12 py-24 sm:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="eyebrow mb-4">From the Design Library</p>
              <h2 className="font-serif text-[clamp(2.2rem,4vw,3.4rem)] font-normal leading-[1.05] tracking-[-0.01em] text-stone mb-4">
                Details worth exploring
              </h2>
              <p className="text-[17px] leading-[1.75] text-muted">
                {ENTRIES.length} documented details, each classified by style, element, material and motif, and credited to its source.
              </p>
            </div>
            <Link href="/library" className="text-link">Open the library <span aria-hidden="true">→</span></Link>
          </div>
          <div className="columns-1 min-[480px]:columns-2 lg:columns-4 gap-6">
            {worth.map((e) => (
              <Link key={e.slug} href={`/library/${e.slug}`} className="group block break-inside-avoid mb-10">
                <div className="overflow-hidden bg-cream-dark mb-3.5">
                  <EntryImage image={e.image} sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw" className="img-quiet w-full h-auto" />
                </div>
                <h3 className="font-serif text-[19px] leading-[1.25] text-stone">{e.title}</h3>
                <p className="mt-1.5 text-[12.5px] text-light">
                  {getElement(e.element)?.name} · {STYLES.find((s) => s.slug === e.style)?.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6 · The craft of architectural detail */}
      <section className="bg-cream-dark/70 px-5 sm:px-8 lg:px-12 py-24 sm:py-28">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">The craft of architectural detail</p>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.4rem)] font-normal leading-[1.05] tracking-[-0.01em] text-stone mb-7">
              Designed to be noticed. <em className="italic">Made to endure.</em>
            </h2>
            <div className="prose-editorial">
              <p>
                The character of an old room usually comes down to a few decisions: how a door is divided into panels, how deep a molding is cut,
                where a carver chose to stop. Those decisions were made by joiners and carvers working within their region&rsquo;s timber, tools and
                traditions.
              </p>
              <p>
                The library documents them closely, so the reasons a Stube feels warm or a Georgian room feels calm can be seen, compared and
                understood.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-start">
              {["wainscoting-vs-wall-paneling", "traditional-interior-door-styles", "alpine-chalet-interiors"]
                .map((slug) => getArticle(slug))
                .filter(Boolean)
                .slice(0, 2)
                .map((a) => (
                  <Link key={a!.slug} href={`/journal/${a!.slug}`} className="text-link">
                    {a!.shortTitle ?? a!.title} <span aria-hidden="true">→</span>
                  </Link>
                ))}
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-5">
            {closeups.map((c, i) => (
              <Link key={c.entry} href={`/library/${c.e.slug}`} className={`group relative block overflow-hidden bg-cream-dark ${i % 2 === 1 ? "lg:mt-12" : ""} aspect-[4/5]`}>
                <EntryImage image={c.e.image} fill sizes="(max-width: 1024px) 50vw, 30vw" className="img-quiet object-cover" />
                <span className="absolute left-3 bottom-3 bg-surface/90 px-2.5 py-1 text-[11.5px] tracking-[0.08em] uppercase text-stone">{c.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7 · Journal */}
      {journal.length > 0 && (
        <section className="px-5 sm:px-8 lg:px-12 py-24 sm:py-28">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
              <div>
                <p className="eyebrow mb-4">Journal</p>
                <h2 className="font-serif text-[clamp(2.2rem,4vw,3.4rem)] font-normal leading-[1.05] tracking-[-0.01em] text-stone">
                  Read the guides
                </h2>
              </div>
              <Link href="/journal" className="text-link">All articles <span aria-hidden="true">→</span></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14">
              {journal.map((a) => <ArticleCard key={a.slug} article={a} />)}
            </div>
          </div>
        </section>
      )}

      {/* 8 · Hardware & lighting concepts (complementary) */}
      <section className="border-t border-border px-5 sm:px-8 lg:px-12 py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <p className="eyebrow mb-4">Complementary</p>
              <h2 className="font-serif text-[clamp(1.8rem,2.8vw,2.4rem)] font-normal leading-[1.1] text-stone mb-3">Lighting and hardware by era</h2>
              <p className="text-[15px] leading-[1.7] text-muted">
                Concept illustrations of period lighting and hardware, shown to explore how metalwork completes a room. They are design studies,
                not products for sale.
              </p>
            </div>
            <Link href="/collections" className="text-link">All eras <span aria-hidden="true">→</span></Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {COLLECTIONS.slice(0, 4).map((col) => (
              <Link key={col.slug} href={`/collections/${col.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden mb-4 bg-cream-dark">
                  <Image
                    src={col.image}
                    alt={`Concept illustration of ${col.era} lighting and hardware`}
                    fill
                    className="img-quiet object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="font-serif text-[20px] leading-[1.2] text-stone mb-1">{col.era}</h3>
                <p className="text-[12.5px] text-light">{col.period} · concept illustrations</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
