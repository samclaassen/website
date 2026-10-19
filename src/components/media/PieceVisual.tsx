import type { Piece } from "@/lib/piece-types";
import { CATEGORY_LABEL } from "@/lib/piece-types";
import { productPhoto } from "@/lib/piece-media";
import { CreditedImage, PhotoCredit } from "./CreditedImage";
import { MaterialMotif } from "./MaterialMotif";

interface Props {
  piece: Piece;
  size?: "card" | "hero";
  priority?: boolean;
  /**
   * Render the photo credit under a product photo. Cards wrapped in a link pass false and
   * render <PieceVisualCaption> outside the link instead.
   */
  caption?: boolean;
}

/**
 * The visual for a piece. A cleared photo of the exact piece wins (see lib/piece-media.ts).
 * Otherwise this renders the illustrated card: a linen panel with the material set large,
 * the maker's name and a small material motif. No stand-in photography.
 */
export function PieceVisual({ piece, size = "card", priority = false, caption = true }: Props) {
  const hero = size === "hero";
  const photo = productPhoto(piece);

  if (photo) {
    return (
      <CreditedImage
        photo={photo}
        frame="aspect-[4/5]"
        priority={priority}
        sizes={hero ? "(min-width: 1024px) 600px, 100vw" : "(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"}
        credit={caption ? "below" : "none"}
      />
    );
  }

  const material = piece.checks.solid.badge ?? piece.material;
  return (
    <div
      className={`card-texture relative aspect-[4/5] flex flex-col justify-between overflow-hidden ${
        hero ? "p-8 sm:p-12" : "p-6 sm:p-7"
      }`}
      role="img"
      aria-label={`${piece.name} by ${piece.maker}: ${piece.material}. Illustration; no photo of this piece yet.`}
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

/** Credit line for a piece's product photo, rendered outside card links. Nothing for illustrated cards. */
export function PieceVisualCaption({ piece, className = "" }: { piece: Piece; className?: string }) {
  const photo = productPhoto(piece);
  if (!photo) return null;
  return (
    <p className={`mt-2 ${className}`}>
      <PhotoCredit photo={photo} />
    </p>
  );
}
