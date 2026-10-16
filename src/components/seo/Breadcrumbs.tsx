import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="px-5 sm:px-8 lg:px-12 pt-6 pb-3">
      <ol className="mx-auto max-w-[1440px] flex flex-wrap items-center gap-x-2 gap-y-1 text-[12.5px] text-light">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2 min-w-0">
            {index > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-stone transition-colors">{item.label}</Link>
            ) : (
              <span aria-current="page" className="text-muted truncate max-w-[60vw]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
