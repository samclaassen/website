import type { Piece } from "@/lib/piece-types";
import { CATEGORY_LABEL } from "@/lib/piece-types";
import { CreditedImage } from "./CreditedImage";
import { MaterialMotif } from "./MaterialMotif";

interface Props {
  piece: Piece;
  size?: "card" | "hero";
  priority?: boolean;
}

/**
 * The visual for a piece. Until a credited, rights-cleared photo exists (piece.photo),
 * this renders a typographic linen panel: the material set large, the maker's name,
 * and a small material motif. Drop a CreditedPhoto into the data to switch over.
 */
export function PieceVisual({ piece, size = "card", priority = false }: Props) {
  if (piece.photo) {
    return (
      <div className="aspect-[4/5] overflow-hidden bg-card">
        <CreditedImage
          photo={piece.photo}
          priority={priority}
          showCredit={size === "hero"}
          sizes={size === "hero" ? "(min-width: 860px) 560px, 100vw" : "(min-width: 860px) 360px, 100vw"}
        />
      </div>
    );
  }

  const material = piece.checks.solid.badge ?? piece.material;
  const hero = size === "hero";

  return (
    <div
      className={`card-texture relative aspect-[4/5] flex flex-col justify-between overflow-hidden ${
        hero ? "p-8 sm:p-12" : "p-6 sm:p-7"
      }`}
      role="img"
      aria-label={`${piece.name} by ${piece.maker}, ${piece.material}. No photo yet.`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="lab">{CATEGORY_LABEL[piece.category]}</span>
        <span className="lab opacity-70">{piece.id}</span>
      </div>

      <div className="text-center">
        <MaterialMotif
          family={piece.materialFamily}
          className={`mx-auto text-terracotta ${hero ? "w-[120px] sm:w-[150px]" : "w-[84px] sm:w-[96px]"}`}
        />
        <p
          className={`display font-light mt-6 leading-[1.02] text-balance ${
            hero ? "text-[44px] sm:text-[58px]" : "text-[30px] sm:text-[34px]"
          }`}
        >
          {material}
        </p>
      </div>

      <div className="text-center">
        <span className="block mx-auto mb-3 h-px w-10 bg-line" aria-hidden="true" />
        <span className="lab text-umber">{piece.maker}</span>
      </div>
    </div>
  );
}
