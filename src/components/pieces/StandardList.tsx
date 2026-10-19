import { CHECK_LABEL, CHECK_ORDER } from "@/lib/piece-types";

export const STANDARD_TESTS: Record<(typeof CHECK_ORDER)[number], string> = {
  solid: "Solid, not plated, veneered over particleboard, or a \"-look\" finish. Brass is solid brass; bronze is solid bronze.",
  repair: "Held together with screws, rivets and joinery rather than glue and sealed plastic, so it can be taken apart, fixed and refinished.",
  ages: "It develops a patina instead of falling apart: brass mellows, bronze darkens, wood deepens in color.",
  design: "Rooted in a proven traditional form, not a trend.",
  maker: "A real warranty, parts you can get, and a maker with a track record.",
};

export const DISQUALIFIERS = [
  "Plating of any kind, including brass-plated steel",
  "Zinc or pot metal sold as \"brass\"",
  "\"Brass finish\" or any \"-look\" finish",
  "Nonstick coatings",
  "MDF or particleboard in structural parts",
];

export function StandardList({ compact = false }: { compact?: boolean }) {
  return (
    <ol className={`grid gap-x-14 ${compact ? "gap-y-6 md:grid-cols-2 lg:grid-cols-5 lg:gap-x-8" : "gap-y-8 md:grid-cols-2"}`}>
      {CHECK_ORDER.map((k, i) => (
        <li key={k} className="grid grid-cols-[34px_1fr] lg:block">
          <span className="display text-[26px] leading-none text-terracotta">{i + 1}</span>
          <div className={compact ? "lg:mt-3" : ""}>
            <b className="block font-label font-semibold text-[13px] tracking-[0.1em] uppercase mb-1.5">{CHECK_LABEL[k]}</b>
            <p className={compact ? "text-[16px] leading-snug text-caption" : "text-[17.5px]"}>{STANDARD_TESTS[k]}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
