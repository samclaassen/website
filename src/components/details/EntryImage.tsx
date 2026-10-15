import Image from "next/image";
import type { EntryImage as EntryImageType } from "@/lib/details";

interface Props {
  image: EntryImageType;
  sizes?: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
}

/**
 * Locally hosted images go through next/image. Images from collections that
 * block server-side fetching (Art Institute of Chicago, Library of Congress)
 * are loaded directly by the browser.
 */
export function EntryImage({ image, sizes = "100vw", className = "", priority = false, fill = false }: Props) {
  if (image.local) {
    if (fill) {
      return <Image src={image.src} alt={image.alt} fill sizes={sizes} className={className} priority={priority} />;
    }
    return (
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width ?? 1200}
        height={image.height ?? 900}
        sizes={sizes}
        className={className}
        priority={priority}
      />
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={image.src}
      alt={image.alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      referrerPolicy="no-referrer"
      className={fill ? `absolute inset-0 h-full w-full ${className}` : className}
    />
  );
}
