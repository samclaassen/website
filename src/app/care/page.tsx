import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = generatePageMetadata({
  title: "Care & Keeping",
  description: "Guides to caring for brass, bronze, forged iron, wood, copper and cast iron so they last generations. Coming soon.",
  path: "/care",
  noIndex: true,
});

const PLANNED = [
  "Solid brass vs. brass-plated: how to tell",
  "Cleaning and patina for solid brass and bronze",
  "Keeping forged iron latches, hinges and fire tools from rust",
  "How to care for cast iron so it lasts generations",
  "When and how to re-tin copper",
  "Oiling and resurfacing wooden boards and spoons",
];

export default function CarePage() {
  return (
    <>
      <PageHeader kicker="Care & Keeping · Coming soon" title="Care guides are on the way">
        <p>Step-by-step guides to keeping each material in use for generations. We&apos;re writing these now.</p>
      </PageHeader>
      <div className="wrap max-w-[640px] pb-24">
        <p className="lab mb-4">Planned guides</p>
        <ul className="border-t border-line">
          {PLANNED.map((t) => (
            <li key={t} className="py-4 border-b border-line text-[18px]">
              {t} <span className="lab ml-2">Coming soon</span>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-caption">
          In the meantime, every <Link href="/pieces" className="link-underline text-umber">piece page</Link> explains
          how that piece can be repaired and how it ages.
        </p>
      </div>
    </>
  );
}
