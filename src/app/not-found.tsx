import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap py-28 text-center">
      <p className="lab">404</p>
      <h1 className="display font-light text-[44px] sm:text-[56px] mt-4">We couldn&apos;t find that page</h1>
      <p className="mt-4 text-caption max-w-md mx-auto">
        Legacy Homeware has changed. It&apos;s now a guide to new home items made to become heirlooms.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link href="/pieces" className="btn">Browse the pieces</Link>
        <Link href="/standard" className="btn-quiet">The Heirloom Standard</Link>
      </div>
    </div>
  );
}
