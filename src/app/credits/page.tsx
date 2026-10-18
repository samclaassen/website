import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd, generatePageMetadata, webPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { IMAGE_LIBRARY } from "@/data/image-library";
import { RIGHTS_LABEL } from "@/lib/images";

const DESCRIPTION =
  "Every photograph on Legacy Homeware, with its creator, source and license. All are real photographs or public-domain artworks, openly licensed and credited.";

export const metadata = generatePageMetadata({ title: "Photo credits", description: DESCRIPTION, path: "/credits" });

const CHECKED = "October 18, 2026";

export default function CreditsPage() {
  const images = [...IMAGE_LIBRARY].sort((a, b) => a.title.localeCompare(b.title));
  return (
    <>
      <JsonLd data={webPageJsonLd({ title: "Photo credits", description: DESCRIPTION, path: "/credits" })} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Photo credits", href: "/credits" }])} />
      <PageHeader kicker="Photo credits" title="Where our photos come from">
        <p>
          We don&apos;t have permission to show makers&apos; product photos yet, so the photographs here set the scene
          and show materials. Each one is a real photograph or a public-domain artwork, used under an open license
          that we checked on the image&apos;s own page on {CHECKED}. None shows the exact piece it sits beside.
        </p>
      </PageHeader>

      <div className="wrap max-w-[980px] pb-24">
        <p className="text-[15px] text-caption font-label mb-8">
          {images.length} images. Files were resized and converted to WebP; nothing else was changed. Licenses:{" "}
          public domain, <a className="link-underline" href="https://creativecommons.org/publicdomain/zero/1.0/" rel="noopener license" target="_blank">CC0</a>,{" "}
          Creative Commons Attribution (<a className="link-underline" href="https://creativecommons.org/licenses/by/2.0/" rel="noopener license" target="_blank">CC BY 2.0</a>,{" "}
          <a className="link-underline" href="https://creativecommons.org/licenses/by/4.0/" rel="noopener license" target="_blank">4.0</a>) and the{" "}
          <a className="link-underline" href="https://unsplash.com/license" rel="noopener license" target="_blank">Unsplash License</a>.
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
        <p className="mt-10 text-[15px] text-caption">
          See something credited wrongly? Tell us and we&apos;ll fix it. Our photo policy is part of{" "}
          <Link href="/standard#images" className="link-underline text-umber">the Heirloom Standard</Link>.
        </p>
      </div>
    </>
  );
}
