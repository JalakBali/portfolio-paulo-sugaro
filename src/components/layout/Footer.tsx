import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0D1117] py-7">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3.5 px-4">
        <p className="text-sm font-medium uppercase tracking-widest text-[#6BB8D4]">
          Software That Fits Your Business
        </p>

        <Link
          href="/blog"
          className="text-sm text-gray-400 transition-colors hover:text-white"
        >
          Blog
        </Link>

        <hr className="w-full border-t border-gray-800" />

        <p className="text-sm text-gray-500">
          &copy; 2026 Paulo Sugaro &middot; All rights reserved
        </p>
      </div>
    </footer>
  );
}
