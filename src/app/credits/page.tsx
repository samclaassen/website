import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd, generatePageMetadata, webPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { displayedLibraryImages, displayedProductPhotos } from "@/lib/site-images";
import { RIGHTS_LABEL } from "@/lib/images";
import type { LibraryImage } from "@/data/image-library";

const DESCRIPTION =
  "Every photograph on Legacy Homeware, with its creator, source and license. All are real photographs or public-domain artworks, openly licensed and credited.";

export const metadata = generatePageMetadata({ title: "Photo credits", description: DESCRIPTION, path: "/credits" });


/** "public domain, CC0, CC BY 2.0 and the Pexels License", linked, from the images actually shown. */
function licenseSummary(images: LibraryImage[]) {
  const seen = new Map<string, string>();
  for (const img of images) if (!seen.has(img.license)) seen.set(img.license, img.licenseUrl);
  const items = [...seen.entries()].sort(([a], [b]) => a.localeCompare(b));
  return items.map(([name, url], i) => (
    <span key={name}>
      {i > 0 && (i === items.length - 1 ? " and " : ", ")}
      <a className="link-underline" href={url} rel="noopener license" target="_blank">{name}</a>
    </span>
  ));
}

export default function CreditsPage() {
  const images = displayedLibraryImages().sort((a, b) => a.title.localeCompare(b.title));
  const products = displayedProductPhotos();
  return (
    <>
      <JsonLd data={webPageJsonLd({ title: "Photo credits", description: DESCRIPTION, path: "/credits" })} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Photo credits", href: "/credits" }])} />
      <PageHeader kicker="Photo credits" title="Where our photos come from">
        <p>
          The photographs on our editorial pages set the scene: the hearth, the door, the table and the workshops
          where things are still made. Each one is a real photograph or a public-domain artwork, used under an open
          license that we checked on the image&apos;s own page. Pieces are shown as illustrations until a maker
          gives us the right to show the piece itself.
        </p>
      </PageHeader>

      <div className="wrap max-w-[980px] pb-24">
        <p className="text-[15px] text-caption font-label mb-8">
          {images.length + products.length} images, exactly the ones shown on the site. Files were resized and converted
          to WebP; nothing else was changed. Licenses: {licenseSummary(images)}.
        </p>
        <ul className="border-t border-line">
          {images.map((img) => (
            <li key={img.id} id={img.id} className="grid grid-cols-[96px_1fr] sm:grid-cols-[132px_1fr] gap-5 sm:gap-7 py-6 border-b border-line scroll-mt-8">
              <a href={img.sourceUrl} rel="noopener" target="_blank" className="relative block aspect-[4/3] overflow-hidden bg-card" tabIndex={-1} aria-hidden="true">
                <Image src={img.file} alt="" fill sizes="132px" className="object-cover" style={img.focus ? { objectPosition: img.focus } : undefined} />
              </a>
              <div className="text-[16px] leading-snug">
                <p className="display text-[20px] leading-tight">{img.title}</p>
                <dl className="mt-2 grid grid-cols-[88px_1fr] gap-x-3 gap-y-1 text-[14.5px]">
                  <dt className="lab pt-0.5">Creator</dt>
                  <dd>{img.creator}</dd>
                  <dt className="lab pt-0.5">Source</dt>
                  <dd>
                    <a className="link-underline" href={img.sourceUrl} rel="noopener" target="_blank">
                      {img.source}
                    </a>
                  </dd>
                  <dt className="lab pt-0.5">License</dt>
                  <dd>
                    <a className="link-underline" href={img.licenseUrl} rel="noopener license" target="_blank">
                      {img.license}
                    </a>
                    <span className="text-caption">
                      {RIGHTS_LABEL[img.rightsBasis] !== img.license ? ` · ${RIGHTS_LABEL[img.rightsBasis]}` : ""} · checked{" "}
                      {img.checkedAt}
                    </span>
                  </dd>
                </dl>
              </div>
            </li>
          ))}
        </ul>
        {products.length > 0 && (
          <>
            <h2 className="display text-[26px] mt-14 mb-4">Photos of the pieces</h2>
            <ul className="border-t border-line">
              {products.map(({ piece, photo }) => (
                <li key={piece.slug} className="py-5 border-b border-line text-[15px]">
                  <Link href={`/pieces/${piece.slug}`} className="display text-[19px] link-underline">{piece.name}</Link>
                  <span className="text-caption"> · {photo.credit} · {RIGHTS_LABEL[photo.rightsBasis]} · checked {photo.dateCleared}</span>
                </li>
              ))}
            </ul>
          </>
        )}
        <p className="mt-10 text-[15px] text-caption">
          See something credited wrongly? Tell us and we&apos;ll fix it. Our photo policy is part of{" "}
          <Link href="/standard#images" className="link-underline text-umber">the Heirloom Standard</Link>.
        </p>
      </div>
    </>
  );
}
