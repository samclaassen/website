import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-6 py-32 text-center">
      <p className="text-sm font-semibold text-gray-400">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
        Page not found
      </h1>
      <p className="mt-4 text-gray-600">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
