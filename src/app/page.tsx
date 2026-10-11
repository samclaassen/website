import { generatePageMetadata, webPageJsonLd } from "@/lib/seo";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = generatePageMetadata({
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: SITE_NAME,
          description: SITE_DESCRIPTION,
          path: "/",
        })}
      />

      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Welcome to {SITE_NAME}
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
          {SITE_DESCRIPTION}
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#learn-more"
            className="rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
          >
            Get Started
          </a>
          <a
            href="/about"
            className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features / Value Props Section */}
      <section
        id="learn-more"
        className="border-t border-gray-200 bg-gray-50 py-20"
      >
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
            Why Choose Us
          </h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Replace this section with your actual value propositions.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Feature One",
                description:
                  "Describe the first key benefit or feature of your product/service.",
              },
              {
                title: "Feature Two",
                description:
                  "Describe the second key benefit or feature of your product/service.",
              },
              {
                title: "Feature Three",
                description:
                  "Describe the third key benefit or feature of your product/service.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Add your call to action here. What should visitors do next?
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-block rounded-lg bg-gray-900 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
