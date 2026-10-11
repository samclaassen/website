import { generatePageMetadata, webPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata = generatePageMetadata({
  title: "About",
  description:
    "Learn more about who we are, what we do, and why we do it.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: "About",
          description:
            "Learn more about who we are, what we do, and why we do it.",
          path: "/about",
        })}
      />

      <div className="mx-auto max-w-3xl px-6 py-12">
        <Breadcrumbs items={[{ name: "About", href: "/about" }]} />

        <article className="mt-8">
          <header>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              About Us
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              A brief introduction to your company or project. This is the first
              paragraph search engines and AI answer engines will read — make it
              count.
            </p>
          </header>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900">
              Our Mission
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Describe what drives your organization. What problem do you solve?
              Who do you serve? Keep this direct and specific — AI answer engines
              surface clear, confident statements.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900">
              What We Do
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Describe your products, services, or offerings. Use bullet points
              or short paragraphs for scannability.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
              <li>Service or product one</li>
              <li>Service or product two</li>
              <li>Service or product three</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900">
              Our Team
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Introduce key team members. Author attribution and expertise
              signals strengthen E-E-A-T (Experience, Expertise,
              Authoritativeness, Trustworthiness) for SEO.
            </p>
          </section>
        </article>
      </div>
    </>
  );
}
