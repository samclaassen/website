import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-brand-gold">404</p>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-brand-dark">
          Page Not Found
        </h1>
        <p className="mt-4 text-brand-muted max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-sm bg-brand-gold px-6 py-3 text-sm font-semibold tracking-wide uppercase text-white hover:bg-brand-gold/90 transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/collections"
            className="rounded-sm border border-brand-dark/20 px-6 py-3 text-sm font-semibold tracking-wide uppercase text-brand-muted hover:text-brand-dark hover:border-brand-dark/40 transition-colors"
          >
            Collections
          </Link>
        </div>
      </div>
    </div>
  );
}
