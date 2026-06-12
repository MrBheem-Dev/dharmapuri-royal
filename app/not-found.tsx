import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-maroon-900 flex items-center justify-center px-4 text-center">
      <div>
        <p className="font-serif text-gold-400 text-7xl font-black mb-4">404</p>
        <h1 className="text-white text-xl font-semibold mb-2">Page Not Found</h1>
        <p className="text-maroon-300 text-sm mb-6">The page you're looking for doesn't exist.</p>
        <Link
          href="/"
          className="bg-gold-400 text-maroon-900 font-bold px-6 py-2.5 rounded text-sm hover:bg-gold-200 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
