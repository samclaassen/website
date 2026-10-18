import Image from "next/image";
import type { CreditedPhoto } from "@/lib/images";
import { isLocal, RIGHTS_LABEL } from "@/lib/images";

interface Props {
  photo: CreditedPhoto;
  sizes?: string;
  priority?: boolean;
  /** Classes for the image frame, e.g. "aspect-[4/5]" or "h-full". The image covers the frame. */
  frame?: string;
  /** Classes for the outer figure. */
  className?: string;
  /** Classes for the img element (filters, hover effects). */
  imgClassName?: string;
  /**
   * Where the credit goes:
   * - "below": a small caption under the image (default)
   * - "overlay": a small line over the bottom-right corner of the image
   * - "none": no credit here; the caller must show it nearby (see PhotoCredit)
   */
  credit?: "below" | "overlay" | "none";
  /** Extra content drawn over the image (scrims, labels). */
  children?: React.ReactNode;
}

/** A small "Photo: … · License" credit line linking to the image's source page. */
export function PhotoCredit({
  photo,
  className = "",
  tone = "dark",
}: {
  photo: CreditedPhoto;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span className={`font-label text-[11.5px] leading-snug ${tone === "light" ? "text-linen/90" : "text-caption"} ${className}`}>
      <a
        href={photo.sourceUrl}
        rel="noopener"
        target="_blank"
        className="underline decoration-current/30 underline-offset-2 hover:decoration-current"
      >
        {photo.credit}
      </a>
      {photo.license && (
        <>
          {" · "}
          {photo.licenseUrl ? (
            <a href={photo.licenseUrl} rel="noopener license" target="_blank" className="hover:underline">
              {photo.license}
            </a>
          ) : (
            photo.license
          )}
        </>
      )}
      <span className="sr-only"> ({RIGHTS_LABEL[photo.rightsBasis]})</span>
    </span>
  );
}

/**
 * A photo with its credit and rights basis. Local images go through next/image;
 * remote images (only where the rights allow loading them from the source) are
 * loaded directly by the browser.
 */
export function CreditedImage({
  photo,
  sizes = "100vw",
  priority = false,
  frame = "aspect-[4/3]",
  className = "",
  imgClassName = "",
  credit = "below",
  children,
}: Props) {
  const style = photo.focus ? { objectPosition: photo.focus } : undefined;
  return (
    <figure className={className}>
      <div className={`relative overflow-hidden bg-card ${frame}`}>
        {isLocal(photo) ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={sizes}
            priority={priority}
            className={`object-cover ${imgClassName}`}
            style={style}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo.src}
            alt={photo.alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            referrerPolicy="no-referrer"
            className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
            style={style}
          />
        )}
        {children}
        {credit === "overlay" && (
          <figcaption className="absolute bottom-0 right-0 max-w-[92%] bg-umber/60 px-2.5 py-1 text-right">
            <PhotoCredit photo={photo} tone="light" />
          </figcaption>
        )}
      </div>
      {credit === "below" && (
        <figcaption className="mt-2">
          <PhotoCredit photo={photo} />
        </figcaption>
      )}
    </figure>
  );
}
