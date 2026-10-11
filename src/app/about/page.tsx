import { generatePageMetadata, webPageJsonLd, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import Link from "next/link";

export const metadata = generatePageMetadata({
  title: "About",
  description:
    "Legacy Homeware creates handcrafted decorative hardware — switch plates, outlet covers, doorknobs, and fixtures cast in solid metal. Our mission: make homes beautiful again.",
  path: "/about",
  keywords: [
    "about legacy homeware",
    "handcrafted hardware",
    "decorative hardware company",
    "custom home hardware",
  ],
});

export default function AboutPage() {
  const faqs = [
    {
      question: "What does Legacy Homeware make?",
      answer:
        "Legacy Homeware creates decorative home hardware — light switch plates, outlet covers, doorknobs, hinges, cabinet hardware, and fixtures. Every piece is designed and cast in solid metal (bronze, brass, or iron), inspired by the great architectural eras from Colonial to Art Deco.",
    },
    {
      question: "How is Legacy Homeware different from mass-produced hardware?",
      answer:
        "Mass-produced hardware is stamped from thin metal or injection-molded plastic. Legacy Homeware pieces are cast in solid metal using foundry techniques, with designs drawn from historical architectural styles. Each piece has real weight, real detail, and is built to outlast the home it's installed in.",
    },
    {
      question: "What architectural styles does Legacy Homeware offer?",
      answer:
        "We offer seven collections spanning major architectural eras: Hearthstone (Arts & Crafts), Ashworth (Victorian), Meridian (Art Deco), Heritage (Traditional/Colonial), Solstice (Art Nouveau), Ironforge (Farmhouse/Rustic), and Provence (French Country).",
    },
  ];

  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: "About",
          description:
            "Legacy Homeware creates handcrafted decorative hardware cast in solid metal.",
          path: "/about",
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      {/* Hero statement */}
      <section className="px-8 lg:px-10 xl:px-16 pt-12 pb-24">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-brand-muted">
              Our Mission
            </p>

            <h1 className="mt-8 font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] text-brand-dark">
              Make homes
              <br />
              beautiful again
            </h1>

            <p className="mt-10 text-[15px] leading-[1.9] text-brand-muted max-w-xl">
              Everything about modern homes is mass-manufactured and looks the
              same. Every house uses the same plastic outlet and light switch
              covers that yellow over time. At best you can get a cheap stamped
              metal plate that&apos;s still identical to every other house on the
              street. We&apos;re changing that.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem — editorial pull quote style */}
      <section className="border-t border-brand-dark/10 px-8 lg:px-10 xl:px-16 py-24">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl font-semibold text-brand-dark">
              The Problem
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-6">
            <p className="text-[15px] leading-[1.9] text-brand-muted">
              Walk into any home built in the last fifty years and you&apos;ll
              find the same hardware everywhere — plastic switch plates, stamped
              outlet covers, hollow doorknobs. These are the details you touch
              dozens of times a day, and they&apos;re the cheapest components in
              the entire house. They yellow, crack, and cheapen the look of
              everything around them.
            </p>

            <p className="pull-quote font-serif text-xl leading-[1.6] text-brand-dark">
              A century ago, the hardware in a home was a point of pride — cast
              in solid brass or iron, designed to match the architectural style
              of the house, and built to outlast the structure itself.
            </p>

            <p className="text-[15px] leading-[1.9] text-brand-muted">
              That quality didn&apos;t disappear because people stopped wanting
              it. It disappeared because mass production made it cheaper to
              ignore.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="border-t border-brand-dark/10 px-8 lg:px-10 xl:px-16 py-24">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl font-semibold text-brand-dark">
              What We Do
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-6">
            <p className="text-[15px] leading-[1.9] text-brand-muted">
              Legacy Homeware brings decorative hardware back to the quality it
              had when craftspeople made it by hand. Every piece is designed with
              attention to historical accuracy and cast in solid metal — real
              bronze, brass, and iron that develops a natural patina and lasts
              for generations.
            </p>

            <p className="text-[15px] leading-[1.9] text-brand-muted">
              We offer seven collections, each rooted in a real architectural
              era — from the geometric restraint of Arts &amp; Crafts to the
              flowing curves of Art Nouveau. Whether you&apos;re restoring a
              Victorian, renovating a Craftsman bungalow, or building something
              new that deserves better than builder-grade, there&apos;s a Legacy
              collection designed for your home.
            </p>

            <div className="pt-4 space-y-3">
              {[
                "Light switch plates, outlet covers, and wall plates",
                "Doorknobs, handles, and lever sets",
                "Decorative hinges and door accessories",
                "Cabinet knobs, pulls, and handles",
                "Complete home hardware packages in matched styles",
              ].map((item) => (
                <p
                  key={item}
                  className="text-[14px] text-brand-dark pl-4 border-l border-brand-dark/20"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-brand-dark/10 px-8 lg:px-10 xl:px-16 py-24">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl font-semibold text-brand-dark">
              How It Works
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-6">
            <p className="text-[15px] leading-[1.9] text-brand-muted">
              Each design begins with deep research into historical hardware
              traditions — the patterns, proportions, and techniques that defined
              the best decorative metalwork of each era. These designs are then
              refined and sent to a foundry to be cast in solid metal, producing
              hardware with the weight, detail, and durability that mass
              production can&apos;t match.
            </p>

            <p className="text-[15px] leading-[1.9] text-brand-muted">
              The result is hardware that&apos;s unique to your home — something
              with real character, real weight, and a story behind every detail.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-brand-dark/10 px-8 lg:px-10 xl:px-16 py-24">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-brand-muted mb-16">
            Frequently Asked Questions
          </p>

          <div className="space-y-0">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 border-b border-brand-dark/10 first:pt-0 last:border-0"
              >
                <h3 className="lg:col-span-4 font-serif text-xl font-semibold text-brand-dark">
                  {faq.question}
                </h3>
                <p className="lg:col-span-7 lg:col-start-6 text-[15px] leading-[1.8] text-brand-muted">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-brand-dark/10 px-8 lg:px-10 py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-brand-dark sm:text-4xl">
            Explore the archive
          </h2>
          <p className="mt-4 text-[15px] text-brand-muted">
            Browse decorative hardware across seven architectural eras.
          </p>
          <div className="mt-10">
            <Link
              href="/collections"
              className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-dark border-b border-brand-dark pb-1 hover:text-brand-muted hover:border-brand-muted transition-colors"
            >
              View all eras
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
