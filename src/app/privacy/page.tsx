import Link from "next/link";
import { breadcrumbJsonLd, generatePageMetadata, webPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";

/**
 * Privacy notice. Google Analytics' terms require one that discloses its use. Keep this page in
 * step with what the site actually loads (src/app/layout.tsx and src/proxy.ts), and update the
 * date whenever a tool is added or removed, for example if the newsletter signup is switched on.
 */
const UPDATED = "2026-10-24";
const UPDATED_DISPLAY = "October 24, 2026";
const DESCRIPTION =
  "What Legacy Homeware measures about visits to the site, which tools it uses to do that, and the choices you have.";

export const metadata = generatePageMetadata({ title: "Privacy", description: DESCRIPTION, path: "/privacy" });

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ title: "Privacy", description: DESCRIPTION, path: "/privacy" })} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Privacy", href: "/privacy" }])} />
      <PageHeader kicker="Privacy" title="What we measure, and why">
        <p>
          Legacy Homeware has no accounts, no ads and nothing to buy. We measure visits so we know which pages and
          guides are useful. Updated <time dateTime={UPDATED}>{UPDATED_DISPLAY}</time>.
        </p>
      </PageHeader>
      <div className="wrap max-w-[720px] pb-24 prose-lh text-[18px]">
        <h2 className="!mt-0">What we measure</h2>
        <ul>
          <li>
            <b>Vercel Web Analytics</b> counts page views and where visits come from. It doesn&apos;t use cookies or
            build a profile of you.
          </li>
          <li>
            <b>Google Analytics</b> measures visits, the pages viewed and where visits come from. It uses first-party
            cookies (named <code>_ga</code>) to tell new visits from returning ones. We don&apos;t use Google&apos;s
            advertising features, and Google Analytics doesn&apos;t store IP addresses.
          </li>
          <li>
            <b>PromptWatch</b> counts visits that arrive from AI assistants such as ChatGPT, and logs requests made
            by AI crawlers, which are automated programs rather than people.
          </li>
        </ul>
        <h2>What we don&apos;t do</h2>
        <ul>
          <li>We don&apos;t sell or share personal information, and we don&apos;t show ads.</li>
          <li>We don&apos;t ask you to sign up or log in, and we don&apos;t collect email addresses.</li>
        </ul>
        <h2>Links to makers and retailers</h2>
        <p>
          When you follow a link to a maker or retailer, their site and its privacy policy apply. Some links are
          affiliate links, which may let the retailer set a cookie that credits the visit to us. More in our{" "}
          <Link href="/standard#affiliate-policy">affiliate policy</Link>.
        </p>
        <h2>Your choices</h2>
        <ul>
          <li>Block or clear cookies in your browser&apos;s settings. The site works the same without them.</li>
          <li>
            Opt out of Google Analytics on every site with Google&apos;s{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener" target="_blank">
              opt-out browser add-on
            </a>
            .
          </li>
        </ul>
        <h2>Changes</h2>
        <p>If what we measure changes, we&apos;ll update this page and the date at the top.</p>
      </div>
    </>
  );
}
