import type { PieceListPage } from "@/data/lists/types";
import { CreditedImage } from "@/components/media/CreditedImage";
import { MaterialMotif } from "@/components/media/MaterialMotif";
import { sitePhoto } from "@/lib/site-images";

interface Props {
  list: PieceListPage;
  size?: "card" | "hero";
  priority?: boolean;
  /** Passed to CreditedImage. Cards wrapped in a link pass "none" and show the credit outside. */
  credit?: "below" | "overlay" | "none";
}

/**
 * The visual for a list or gift guide: a credited library photo where we have a bright one,
 * otherwise the illustrated linen panel used across the site, with the material's motif.
 * Library photos show the kind of thing on the list, never the pieces themselves.
 */
export function ListVisual({ list, size = "card", priority = false, credit = "below" }: Props) {
  const hero = size === "hero";
  const aspect = hero ? "aspect-[16/9]" : "aspect-[4/3]";

  if (list.image) {
    return (
      <CreditedImage
        photo={sitePhoto(list.image)}
        frame={aspect}
        priority={priority}
        sizes={hero ? "(min-width: 1040px) 980px, 100vw" : "(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"}
        credit={credit}
      />
    );
  }

  return (
    <div
      className={`card-texture relative ${aspect} flex flex-col justify-between overflow-hidden ${hero ? "p-8 sm:p-12" : "p-5 sm:p-6"}`}
      role="img"
      aria-label={`${list.shortTitle}: illustration.`}
    >
      <span className="lab">{list.type === "bifl" ? "Buy it for life" : "Gift guide"}</span>
      <div className="text-center">
        <MaterialMotif
          family={list.motif}
          className={`mx-auto text-terracotta ${hero ? "w-[110px] sm:w-[140px]" : "w-[64px] sm:w-[76px]"}`}
        />
        <p className={`display font-light mt-4 leading-[1.02] text-balance ${hero ? "text-[40px] sm:text-[52px]" : "text-[26px] sm:text-[30px]"}`}>
          {list.shortTitle}
        </p>
      </div>
      <span className="block mx-auto h-px w-10 bg-line" aria-hidden="true" />
    </div>
  );
}
