import { generatePageMetadata, webPageJsonLd, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SITE_NAME } from "@/lib/constants";
import Link from "next/link";

export const metadata = generatePageMetadata({
  title: "About",
  description:
    "Legacy Homeware creates handcrafted decorative hardware — switch plates, outlet covers, doorknobs, and fixtures cast in solid metal. Our mission: make homes beautiful again.",
  path: "/about",
  keywords: ["about legacy homeware", "handcrafted hardware", "decorative hardware company", "custom home hardware"],
});

export default function AboutPage() {
  const faqs = [
    {
      question: "What does Legacy Homeware make?",
      answer: "Legacy Homeware creates decorative home hardware — light switch plates, outlet covers, doorknobs, hinges, cabinet hardware, and fixtures. Every piece is designed and cast in solid metal (bronze, brass, or iron), inspired by the great architectural eras from Colonial to Art Deco.",
    },
    {
      question: "How is Legacy Homeware different from mass-produced hardware?",
      answer: "Mass-produced hardware is stamped from thin metal or injection-molded plastic. Legacy Homeware pieces are cast in solid metal using foundry techniques, with designs drawn from historical architectural styles. Each piece has real weight, real detail, and is built to outlast the home it's installed in.",
    },
    {
      question: "What architectural styles does Legacy Homeware offer?",
      answer: "We offer seven collections spanning major architectural eras: Hearthstone (Arts & Crafts), Ashworth (Victorian), Meridian (Art Deco), Heritage (Traditional/Colonial), Solstice (Art Nouveau), Ironforge (Farmhouse/Rustic), and Provence (French Country).",
    },
  ];

  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: "About",
          description: "Legacy Homeware creates handcrafted decorative hardware cast in solid metal.",
          path: "/about",
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      <div className="mx-auto max-w-3xl px-6 py-12">
        <Breadcrumbs items={[{ name: "About", href: "/about" }]} />

        <article className="mt-8">
          <header>
            <p className="text-sm font-medium tracking-widest uppercase text-brand-gold">
              Our Mission
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold text-brand-dark sm:text-5xl">
              Make homes beautiful again
            </h1>
            <p className="mt-6 text-lg text-brand-muted leading-relaxed">
              Everything about modern homes is mass-manufactured and looks the same.
              Every house uses the same plastic outlet and light switch covers that yellow
              over time. At best you can get a cheap stamped metal plate that&apos;s still
              identical to every other house on the street. We&apos;re changing that.
            </p>
          </header>

          <section className="mt-12">
            <h2 className="font-serif text-2xl font-semibold text-brand-dark">
              The Problem
            </h2>
            <p className="mt-4 text-brand-muted leading-relaxed">
              Walk into any home built in the last fifty years and you&apos;ll find the same
              hardware everywhere — plastic switch plates, stamped outlet covers, hollow
              doorknobs. These are the details you touch dozens of times a day, and they&apos;re
              the cheapest components in the entire house. They yellow, crack, and cheapen
              the look of everything around them.
            </p>
            <p className="mt-4 text-brand-muted leading-relaxed">
              It wasn&apos;t always this way. A century ago, the hardware in a home was a point
              of pride — cast in solid brass or iron, designed to match the architectural style
              of the house, and built to outlast the structure itself. That quality didn&apos;t
              disappear because people stopped wanting it. It disappeared because mass
              production made it cheaper to ignore.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="font-serif text-2xl font-semibold text-brand-dark">
              What We Do
            </h2>
            <p className="mt-4 text-brand-muted leading-relaxed">
              Legacy Homeware brings decorative hardware back to the quality it had when
              craftspeople made it by hand. Every piece is designed with attention to
              historical accuracy and cast in solid metal — real bronze, brass, and iron
              that develops a natural patina and lasts for generations.
            </p>
            <p className="mt-4 text-brand-muted leading-relaxed">
              We offer seven collections, each rooted in a real architectural era — from
              the geometric restraint of Arts &amp; Crafts to the flowing curves of Art
              Nouveau. Whether you&apos;re restoring a Victorian, renovating a Craftsman
              bungalow, or building something new that deserves better than builder-grade,
              there&apos;s a Legacy collection designed for your home.
            </p>
            <ul className="mt-6 space-y-3 text-brand-muted">
              <li className="flex items-start gap-3">
                <span className="text-brand-gold font-semibold">&rarr;</span>
                <span>Light switch plates, outlet covers, and wall plates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold font-semibold">&rarr;</span>
                <span>Doorknobs, handles, and lever sets</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold font-semibold">&rarr;</span>
                <span>Decorative hinges and door accessories</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold font-semibold">&rarr;</span>
                <span>Cabinet knobs, pulls, and handles</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold font-semibold">&rarr;</span>
                <span>Complete home hardware packages in matched styles</span>
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="font-serif text-2xl font-semibold text-brand-dark">
              How It Works
            </h2>
            <p className="mt-4 text-brand-muted leading-relaxed">
              Each design begins with deep research into historical hardware traditions —
              the patterns, proportions, and techniques that defined the best decorative
              metalwork of each era. These designs are then refined and sent to a foundry
              to be cast in solid metal, producing hardware with the weight, detail, and
              durability that mass production can&apos;t match.
            </p>
            <p className="mt-4 text-brand-muted leading-relaxed">
              The result is hardware that&apos;s at least fairly unique to your home —
              something with real character, real weight, and a story behind every detail.
            </p>
          </section>

          {/* FAQ */}
          <section className="mt-16 border-t border-brand-dark/10 pt-12">
            <h2 className="font-serif text-2xl font-semibold text-brand-dark">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 space-y-8">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-semibold text-brand-dark">{faq.question}</h3>
                  <p className="mt-2 text-brand-muted leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 rounded-sm bg-brand-dark p-10 text-center">
            <h2 className="font-serif text-2xl font-semibold text-brand-cream">
              Explore Our Collections
            </h2>
            <p className="mt-3 text-brand-cream/60">
              Find the style that belongs in your home.
            </p>
            <Link
              href="/collections"
              className="mt-6 inline-block rounded-sm bg-brand-gold px-8 py-3 text-sm font-semibold tracking-wide uppercase text-white hover:bg-brand-gold/90 transition-colors"
            >
              View Collections
            </Link>
          </section>
        </article>
      </div>
    </>
  );
}
