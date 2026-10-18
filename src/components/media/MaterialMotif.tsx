import type { MaterialFamily } from "@/lib/piece-types";

/**
 * Small line drawings that stand for a material, drawn in SVG. Not product images:
 * they never depict a specific piece.
 */
export function MaterialMotif({ family, className = "" }: { family: MaterialFamily; className?: string }) {
  const common = {
    viewBox: "0 0 120 120",
    className,
    "aria-hidden": true,
    focusable: false,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.2,
    strokeLinecap: "round" as const,
  };
  switch (family) {
    case "cast-iron":
      // A pan seen from above: rim, cooking surface, handle.
      return (
        <svg {...common}>
          <circle cx="52" cy="60" r="34" />
          <circle cx="52" cy="60" r="27" />
          <circle cx="52" cy="60" r="12" opacity=".45" />
          <path d="M86 56 L112 52 M86 64 L112 68 M112 52 Q117 60 112 68" />
        </svg>
      );
    case "enameled-cast-iron":
      // A lidded pot: lid knob, lid, body.
      return (
        <svg {...common}>
          <path d="M22 54 H98" />
          <path d="M26 54 Q60 34 94 54" />
          <rect x="54" y="34" width="12" height="7" rx="2" />
          <path d="M26 58 V86 Q26 96 38 96 H82 Q94 96 94 86 V58" />
          <path d="M18 64 H26 M94 64 H102" />
          <path d="M34 72 H86" opacity=".4" />
        </svg>
      );
    case "soapstone":
      // Stacked stone blocks with a flame opening.
      return (
        <svg {...common}>
          <rect x="22" y="28" width="76" height="70" />
          <path d="M22 46 H98 M22 80 H98 M60 28 V46 M41 80 V98 M79 80 V98" opacity=".55" />
          <path d="M40 78 V60 Q60 48 80 60 V78" />
          <path d="M60 74 Q53 67 58 61 Q60 66 63 64 Q67 70 60 74 Z" />
        </svg>
      );
    case "forged":
      // A twisted forged bar ending in a scroll.
      return (
        <svg {...common}>
          <path d="M60 104 V40" />
          <path d="M60 40 Q60 20 76 20 Q90 20 90 33 Q90 44 79 44 Q70 44 70 36" />
          <path d="M54 92 L66 86 M54 82 L66 76 M54 72 L66 66 M54 62 L66 56 M54 52 L66 46" opacity=".6" />
        </svg>
      );
    case "carbon-steel":
      // A shallow pan in profile.
      return (
        <svg {...common}>
          <path d="M14 58 Q20 82 52 82 Q84 82 90 58" />
          <path d="M14 58 H90" opacity=".5" />
          <path d="M90 60 L112 50" />
          <path d="M30 92 Q52 98 74 92" opacity=".35" />
        </svg>
      );
    case "copper":
      // A hammered surface: a circle filled with small strikes.
      return (
        <svg {...common}>
          <circle cx="60" cy="60" r="38" />
          {[
            [48, 40], [64, 36], [78, 46], [40, 54], [56, 52], [72, 58], [84, 64],
            [44, 70], [60, 68], [74, 76], [50, 84], [66, 86], [36, 62],
          ].map(([x, y]) => (
            <path key={`${x}-${y}`} d={`M${x - 4} ${y + 1} Q${x} ${y - 3} ${x + 4} ${y + 1}`} opacity=".6" />
          ))}
        </svg>
      );
    case "brass":
      // A knob on a long backplate.
      return (
        <svg {...common}>
          <rect x="46" y="14" width="28" height="92" rx="14" />
          <circle cx="60" cy="54" r="11" />
          <circle cx="60" cy="54" r="5" opacity=".5" />
          <path d="M56 80 Q60 76 64 80 L62 90 H58 Z" />
        </svg>
      );
    case "bronze":
      // A ring knocker hanging from its boss.
      return (
        <svg {...common}>
          <circle cx="60" cy="34" r="9" />
          <circle cx="60" cy="68" r="30" />
          <circle cx="60" cy="68" r="24" opacity=".45" />
          <path d="M60 43 V38" />
        </svg>
      );
    case "hardwood":
      // End grain rings on a board.
      return (
        <svg {...common}>
          <rect x="18" y="26" width="84" height="68" rx="3" />
          <path d="M32 94 Q34 60 60 58 Q86 56 88 26" opacity=".55" />
          <path d="M44 94 Q46 70 62 68 Q78 66 78 26" opacity=".45" />
          <path d="M22 70 Q40 66 46 42 Q50 30 64 26" opacity=".35" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <polygon points="60,24 96,60 60,96 24,60" />
          <polygon points="60,40 80,60 60,80 40,60" opacity=".5" />
        </svg>
      );
  }
}
