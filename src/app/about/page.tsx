import { generatePageMetadata, webPageJsonLd, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import Link from "next/link";

export const metadata = generatePageMetadata({
  title: "About",
  description:
    "Legacy Homeware is a searchable archive of architectural details and a maker of custom woodwork, based in Colorado, alongside a collection of decorative lighting and hardware.",
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
      question: "What is the Legacy Homeware archive?",
      answer:
        "The archive is a searchable collection of real architectural details, such as cabinetry, built-ins, mantels, paneling, doors and trim, drawn from museums, archives and period catalogs across twelve styles. Every orderable example can be made to fit your home, with published price ranges. Custom cabinetry, built-ins and mudrooms are installed in Colorado; doors, fronts, paneling, mantels, hood covers and trim ship anywhere in the US.",
    },
    {
      question: "What does Legacy Homeware make?",
      answer:
        "Legacy Homeware creates decorative lighting and home hardware — chandeliers, wall sconces, pendant lights, light switch plates, outlet covers, doorknobs, hinges, cabinet hardware, and fixtures. Every piece is designed and cast in solid metal (bronze, brass, or iron), inspired by the great architectural eras from Colonial to Art Deco.",
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
            "Legacy Homeware creates handcrafted decorative lighting and hardware cast in solid metal.",
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
      <section className="px-6 lg:px-10 pt-8 pb-20">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-[13px] tracking-[0.15em] uppercase text-bark mb-6">
            Our story
          </p>

          <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.1] text-stone max-w-2xl mb-8">
            Make homes beautiful again
          </h1>

          <p className="text-base leading-[1.9] text-muted max-w-xl">
            Everything about modern homes is mass-manufactured and looks the
            same. Every house uses the same plastic outlet and light switch
            covers that yellow over time. We&apos;re changing that.
          </p>
        </div>
      </section>

      {/* The Problem — dark section like Aesop storytelling */}
      <section className="bg-stone text-white px-6 lg:px-10 py-24">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[13px] tracking-[0.15em] uppercase text-white/50 mb-6">
              The problem
            </p>
            <h2 className="font-serif text-3xl font-semibold text-white leading-snug">
              A century ago, the hardware in a home was a point of pride
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-base leading-[1.9] text-white/60">
              Walk into any home built in the last fifty years and you&apos;ll
              find the same hardware everywhere — plastic switch plates, stamped
              outlet covers, hollow doorknobs. These are the details you touch
              dozens of times a day, and they&apos;re the cheapest components in
              the entire house.
            </p>

            <p className="text-base leading-[1.9] text-white/60">
              That quality didn&apos;t disappear because people stopped wanting
              it. It disappeared because mass production made it cheaper to
              ignore.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-cream px-6 lg:px-10 py-24">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[13px] tracking-[0.15em] uppercase text-bark mb-6">
              What we do
            </p>
            <h2 className="font-serif text-3xl font-semibold text-stone leading-snug">
              Lighting and hardware cast in solid metal, rooted in real architectural eras
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-base leading-[1.9] text-muted">
              Legacy Homeware brings decorative lighting and hardware back to the
              quality it had when craftspeople made it by hand. Every piece —
              from chandeliers and wall sconces to switch plates and doorknobs —
              is designed with attention to historical accuracy and cast in solid
              metal. Real bronze, brass, and iron that develops a natural patina
              and lasts for generations.
            </p>

            <div className="pt-4 space-y-3">
              {[
                "Chandeliers, pendant lights, wall sconces, and flush mounts",
                "Light switch plates, outlet covers, and wall plates",
                "Doorknobs, handles, and lever sets",
                "Cabinet knobs, pulls, and door accessories",
              ].map((item) => (
                <p
                  key={item}
                  className="text-sm text-stone pl-4 border-l-2 border-border"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — Aesop style clean grid */}
      <section className="bg-cream-dark px-6 lg:px-10 py-24">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-[13px] tracking-[0.15em] uppercase text-bark mb-16">
            Frequently Asked Questions
          </p>

          <div className="space-y-0">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 border-b border-border last:border-0"
              >
                <h3 className="font-serif text-xl font-semibold text-stone">
                  {faq.question}
                </h3>
                <p className="text-base leading-[1.8] text-muted">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream px-6 lg:px-10 py-24">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-stone mb-4">
            Explore the archive
          </h2>
          <p className="text-base text-muted mb-10">
            Browse decorative lighting and hardware across seven architectural eras.
          </p>
          <Link
            href="/collections"
            className="cta-button text-stone mx-auto"
          >
            View all eras
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
