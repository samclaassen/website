import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

/**
 * Breadcrumb navigation with JSON-LD structured data.
 * Always starts with Home automatically.
 */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ name: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
      <JsonLd data={breadcrumbJsonLd(allItems)} />
      <ol className="flex items-center gap-1.5">
        {allItems.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1.5">
            {index > 0 && (
              <span aria-hidden="true" className="text-gray-300">
                /
              </span>
            )}
            {index === allItems.length - 1 ? (
              <span aria-current="page" className="text-gray-900 font-medium">
                {item.name}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-gray-700 transition-colors"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
