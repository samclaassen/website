import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

/**
 * Breadcrumb navigation — minimal editorial style.
 * Visually hidden by default, accessible + SEO structured data handled separately.
 */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="px-8 lg:px-10 xl:px-16 pt-8 pb-2"
    >
      <ol className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-brand-muted">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 && (
              <span aria-hidden="true" className="text-brand-light">
                /
              </span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-brand-dark transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-brand-dark">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
