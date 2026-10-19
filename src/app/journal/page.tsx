import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = generatePageMetadata({
  title: "Journal",
  description: "Material explainers, buying guides and maker stories from Legacy Homeware. Coming soon.",
  path: "/journal",
  noIndex: true,
});

export default function JournalPage() {
  return (
    <>
      <PageHeader kicker="Journal · Coming soon" title="Stories about things worth keeping">
        <p>
          Material explainers, buying guides and maker stories. The first pieces are being written; there&apos;s
          nothing published here yet.
        </p>
      </PageHeader>
      <div className="wrap max-w-[640px] pb-24 text-center">
        <Link href="/standard" className="btn-quiet">Read the Heirloom Standard</Link>
      </div>
    </>
  );
}
