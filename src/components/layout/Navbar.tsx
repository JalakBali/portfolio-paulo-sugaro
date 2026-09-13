"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

// NOTE: "Services" link dihapus sementara 2 Agu 2026 (Solutions section di-hide).
// Untuk restore: tambahkan kembali { label: "Services", href: "/#solutions" } di sini,
// dan uncomment <Solutions /> di src/app/page.tsx
// HIDDEN 14 Sep 2026 (branch portfolio-freelance) — link Blog disembunyikan
// karena kontennya masih Bahasa Inggris. Untuk restore: tambahkan kembali
// { label: "Blog", href: "/blog" } di array ini.
const NAV_LINKS = [
  { label: "Beranda", href: "/#home" },
  { label: "Pendekatan", href: "/#approach" },
  { label: "Tentang", href: "/#about" },
  { label: "Kontak", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-colors duration-300 ${
        isScrolled
          ? "bg-[#111827]/95 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/#home" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Paulo Sugaro"
            width={140}
            height={40}
            preload
            style={{ height: "auto" }}
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#contact"
          className="hidden md:inline-block rounded-full bg-[#6BB8D4] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#5aa6c2]"
        >
          Diskusikan Proyek Anda
        </Link>

        <button
          type="button"
          aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="md:hidden text-gray-300 hover:text-white"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-[#111827]/95 backdrop-blur-md border-b border-gray-800">
          <ul className="flex flex-col gap-4 px-4 py-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-base font-medium text-gray-300 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="inline-block rounded-full bg-[#6BB8D4] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#5aa6c2]"
              >
                Diskusikan Proyek Anda
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
