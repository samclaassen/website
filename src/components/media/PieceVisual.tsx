import type { Piece } from "@/lib/piece-types";
import { CATEGORY_LABEL } from "@/lib/piece-types";
import { pieceMedia } from "@/lib/piece-media";
import { CreditedImage, PhotoCredit } from "./CreditedImage";

interface Props {
  piece: Piece;
  size?: "card" | "hero";
  priority?: boolean;
  /**
   * Render the caption (material note + credit) under the image. Cards wrapped in a link
   * pass false and render <PieceVisualCaption> outside the link instead.
   */
  caption?: boolean;
}

/**
 * The visual for a piece. A cleared photo of the exact piece wins (piece.photo). Until one
 * exists, this shows an openly licensed MATERIAL photo with the material name over it and a
 * clear "Material photo — not this exact piece" caption with its credit.
 */
export function PieceVisual({ piece, size = "card", priority = false, caption = true }: Props) {
  const { photo, isMaterialPhoto } = pieceMedia(piece);
  const hero = size === "hero";
  const sizes = hero ? "(min-width: 1024px) 600px, 100vw" : "(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw";

  if (!isMaterialPhoto) {
    return (
      <CreditedImage
        photo={photo}
        frame="aspect-[4/5]"
        priority={priority}
        sizes={sizes}
        credit={caption ? "below" : "none"}
      />
    );
  }

  const material = piece.checks.solid.badge ?? piece.material;
  return (
    <div>
      <CreditedImage
        photo={{ ...photo, alt: `Stand-in photo: ${photo.alt}. Not the ${piece.name} by ${piece.maker}.` }}
        frame="aspect-[4/5]"
        priority={priority}
        sizes={sizes}
        credit="none"
        imgClassName="saturate-[.92]"
      >
        {/* Scrim so the material name stays readable on any photo. */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(30,22,15,.80) 0%, rgba(30,22,15,.35) 38%, rgba(30,22,15,.05) 62%, rgba(30,22,15,.28) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-5 sm:p-6">
          <span className="lab text-linen/90">{CATEGORY_LABEL[piece.category]}</span>
          <span className="lab text-linen/75">{piece.id}</span>
        </div>
        <div className={`absolute inset-x-0 bottom-0 ${hero ? "p-8 sm:p-10" : "p-5 sm:p-6"}`}>
          <p
            className={`display font-light text-linen leading-[1.04] text-balance ${
              hero ? "text-[40px] sm:text-[52px]" : "text-[28px] sm:text-[30px]"
            }`}
          >
            {material}
          </p>
          <p className="lab mt-2 text-linen/80">{piece.maker}</p>
        </div>
      </CreditedImage>
      {caption && <PieceVisualCaption piece={piece} />}
    </div>
  );
}

/** "Material photo — not this exact piece · Photo: … · License" under a piece visual. */
export function PieceVisualCaption({ piece, className = "" }: { piece: Piece; className?: string }) {
  const { photo, isMaterialPhoto, note } = pieceMedia(piece);
  return (
    <p className={`mt-2 text-[11.5px] leading-snug font-label text-caption ${className}`}>
      {isMaterialPhoto && <span className="font-medium text-umber/80">{note}</span>}
      {isMaterialPhoto && " · "}
      <PhotoCredit photo={photo} />
    </p>
  );
}
