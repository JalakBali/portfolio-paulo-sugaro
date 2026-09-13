export default function Footer() {
  return (
    <footer className="bg-[#0D1117] py-7">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3.5 px-4">
        <p className="text-sm font-medium uppercase tracking-widest text-[#6BB8D4]">
          Sistem Booking yang Sesuai Alur Bisnis Anda
        </p>

        {/* HIDDEN 14 Sep 2026 (branch portfolio-freelance) — link Blog
            disembunyikan karena kontennya masih Bahasa Inggris. Untuk
            restore: kembalikan import Link dan
            <Link href="/blog" className="text-sm text-gray-400 transition-colors hover:text-white">Blog</Link> */}

        <hr className="w-full border-t border-gray-800" />

        <p className="text-sm text-gray-500">
          &copy; 2026 Paulo Sugaro &middot; Seluruh hak cipta dilindungi
        </p>
      </div>
    </footer>
  );
}
