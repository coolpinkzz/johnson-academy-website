import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4">
      <h1 className="text-4xl font-bold text-white">404</h1>
      <p className="mt-4 text-gray-400">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary/90"
      >
        Back to Home
      </Link>
    </div>
  );
}
