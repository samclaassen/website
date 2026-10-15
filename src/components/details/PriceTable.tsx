import Link from "next/link";
import { PRICING, TIER_DESCRIPTIONS, pricingFor } from "@/lib/pricing";
import { getElement, TIER_LABEL, type Tier } from "@/lib/details";

const TIERS: Tier[] = ["essential", "signature", "heirloom"];

export function ElementPriceTiers({ element }: { element: string }) {
  const p = pricingFor(element);
  if (!p) return null;
  return (
    <div className="border border-border">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
        {TIERS.map((t) => (
          <div key={t} className="p-6">
            <p className="text-[12px] tracking-[0.12em] uppercase text-bark mb-2">{TIER_LABEL[t]}</p>
            <p className="font-serif text-2xl font-semibold text-stone">{p.tiers[t]}</p>
            <p className="mt-1 text-[12px] text-muted">{p.unit}</p>
            <p className="mt-4 text-[14px] leading-[1.7] text-muted">{TIER_DESCRIPTIONS[t]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AllPricingTable() {
  return (
    <div className="overflow-x-auto border border-border">
      <table className="w-full text-left text-[14px]">
        <thead className="bg-cream-dark text-[12px] uppercase tracking-[0.1em] text-muted">
          <tr>
            <th className="p-4 font-medium">Element</th>
            <th className="p-4 font-medium">Essential</th>
            <th className="p-4 font-medium">Signature</th>
            <th className="p-4 font-medium">Heirloom</th>
            <th className="p-4 font-medium">Priced</th>
          </tr>
        </thead>
        <tbody>
          {PRICING.map((p) => (
            <tr key={p.element} className="border-t border-border align-top">
              <td className="p-4">
                <Link href={`/elements/${p.element}`} className="font-medium text-stone hover:text-muted">
                  {getElement(p.element)?.name}
                </Link>
              </td>
              <td className="p-4 text-stone">{p.tiers.essential}</td>
              <td className="p-4 text-stone">{p.tiers.signature}</td>
              <td className="p-4 text-stone">{p.tiers.heirloom}</td>
              <td className="p-4 text-muted">{p.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
