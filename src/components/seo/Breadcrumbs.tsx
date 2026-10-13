import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="px-6 lg:px-10 pt-6 pb-2"
    >
      <ol className="flex flex-wrap items-center gap-2 text-[12px] text-muted">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 && (
              <span aria-hidden="true" className="text-light">
                /
              </span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-stone transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-stone">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
