import { newsletterConfigured } from "@/lib/newsletter";
import { SubscribeForm } from "./SubscribeForm";

/**
 * "The keeping list" signup. Renders nothing until a newsletter provider is configured
 * (see src/lib/newsletter.ts), so the site never shows a form that goes nowhere.
 * `source` is the page the signup came from; it is passed to the provider as a tag.
 */
export function SubscribeSection({ source }: { source: string }) {
  if (!newsletterConfigured()) return null;
  return (
    <section aria-labelledby="subscribe-heading" className="wrap py-20">
      <div className="card-texture mx-auto max-w-[860px] px-6 py-10 text-center sm:px-12 sm:py-12">
        <p className="lab">The keeping list</p>
        <h2 id="subscribe-heading" className="display text-[30px] sm:text-[36px] leading-tight mt-3 text-balance">
          New pieces and care guides, about once a month.
        </h2>
        <p className="mt-4 text-[17px] text-caption max-w-[52ch] mx-auto">
          One short letter when we add pieces that pass the Standard or publish a guide. No ads, no selling your
          address, unsubscribe any time.
        </p>
        <SubscribeForm source={source} />
      </div>
    </section>
  );
}
