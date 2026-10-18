import Image from "next/image";
import type { CreditedPhoto } from "@/lib/images";
import { isLocal, RIGHTS_LABEL } from "@/lib/images";

interface Props {
  photo: CreditedPhoto;
  sizes?: string;
  className?: string;
  priority?: boolean;
  /** Show the credit line under the image. Defaults to true. */
  showCredit?: boolean;
}

/**
 * A photo with its credit and rights basis. Local images go through next/image;
 * remote images (only where the rights allow loading them from the source) are
 * loaded directly by the browser.
 */
export function CreditedImage({ photo, sizes = "100vw", className = "", priority = false, showCredit = true }: Props) {
  return (
    <figure className="relative h-full w-full">
      {isLocal(photo) ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width ?? 1200}
          height={photo.height ?? 1500}
          sizes={sizes}
          priority={priority}
          className={`h-full w-full object-cover ${className}`}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo.src}
          alt={photo.alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          referrerPolicy="no-referrer"
          className={`h-full w-full object-cover ${className}`}
        />
      )}
      {showCredit && (
        <figcaption className="mt-2 text-[12px] text-caption font-label">
          <a href={photo.sourceUrl} rel="noopener" target="_blank" className="link-underline">
            {photo.credit}
          </a>
          <span className="sr-only"> · {RIGHTS_LABEL[photo.rightsBasis]}</span>
        </figcaption>
      )}
    </figure>
  );
}
