import type { CareGuide } from "@/data/guides/types";
import { CreditedImage } from "@/components/media/CreditedImage";
import { MaterialMotif } from "@/components/media/MaterialMotif";
import { MATERIAL_LABEL } from "@/lib/piece-types";
import { sitePhoto } from "@/lib/site-images";

interface Props {
  guide: CareGuide;
  size?: "card" | "hero";
  priority?: boolean;
  frame?: string;
  /** Passed to CreditedImage. Cards wrapped in a link pass "none" and show the credit outside. */
  credit?: "below" | "overlay" | "none";
}

/**
 * The visual for a guide: a credited library photo where we have a bright one, otherwise
 * the same illustrated linen panel pieces use, with the material's motif.
 */
export function GuideVisual({ guide, size = "card", priority = false, frame, credit = "below" }: Props) {
  const hero = size === "hero";
  const aspect = frame ?? (hero ? "aspect-[16/9]" : "aspect-[4/3]");

  if (guide.image) {
    return (
      <CreditedImage
        photo={sitePhoto(guide.image)}
        frame={aspect}
        priority={priority}
        sizes={hero ? "(min-width: 1040px) 980px, 100vw" : "(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"}
        credit={credit}
      />
    );
  }

  const label = MATERIAL_LABEL[guide.motif];
  return (
    <div
      className={`card-texture relative ${aspect} flex flex-col justify-between overflow-hidden ${hero ? "p-8 sm:p-12" : "p-5 sm:p-6"}`}
      role="img"
      aria-label={`${label}: illustration.`}
    >
      <span className="lab">Care &amp; Keeping</span>
      <div className="text-center">
        <MaterialMotif
          family={guide.motif}
          className={`mx-auto text-terracotta ${hero ? "w-[110px] sm:w-[140px]" : "w-[64px] sm:w-[76px]"}`}
        />
        <p className={`display font-light mt-4 leading-[1.02] text-balance ${hero ? "text-[40px] sm:text-[52px]" : "text-[24px] sm:text-[28px]"}`}>
          {label}
        </p>
      </div>
      <span className="block mx-auto h-px w-10 bg-line" aria-hidden="true" />
    </div>
  );
}
