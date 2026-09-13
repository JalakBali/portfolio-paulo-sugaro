# Checklist Branch `portfolio-freelance` — Langkah 1–5

> File ini untuk review manual. Bukan dokumentasi permanen — bisa dihapus setelah semua poin dikonfirmasi.

## Langkah 1–3 (sudah di-commit sebelumnya: `3d3733a`)

- [x] Branch `portfolio-freelance` dibuat dari `main`
- [x] `src/components/sections/About.tsx` — foto asli & layout 2 kolom di-restore
- [x] `src/components/sections/Contact.tsx` — WhatsApp CTA di-restore, dijadikan tombol utama (filled, di atas link email)

## Langkah 4 — Copy Hero ke Bahasa Indonesia

- [x] `src/components/sections/Hero.tsx`
  - Eyebrow, H1 ("Jasa Bikin Sistem Booking & Reservasi Online — Anti Bentrok Jadwal, Anti Ribet"), 3 paragraf, tombol "Diskusikan Proyek Anda"
  - Alt text gambar showcase **sengaja dibiarkan Inggris** (keputusanmu)
  - ⚠️ Catatan: gambar showcase (`dashboard.png`, `kas-bank.png`, `stock-request.png`) masih mockup generik office-software, belum relevan secara visual dengan positioning booking system — di luar scope teks, mungkin perlu diganti asetnya nanti

## Langkah 5 — Audit & terjemahkan seluruh komponen user-facing

Semua section homepage disesuaikan ke Bahasa Indonesia **dan** contoh/copy-nya diadaptasi ke konteks booking/reservasi (sesuai konfirmasimu):

- [x] `src/components/sections/BusinessDifferently.tsx` — heading, poin generik vs Paulo Sugaro, label FlowCue
- [x] `src/components/sections/UnderstandingYourBusiness.tsx` — heading, 6 kartu masalah (diganti ke masalah booking: jadwal bentrok, booking manual, dll), paragraf penutup
- [x] `src/components/sections/OurApproach.tsx` — heading, 4 tahap (Memahami/Merancang/Membangun/Menyempurnakan)
- [x] `src/components/sections/WhyWorkWithMe.tsx` — heading, 4 alasan
- [x] `src/components/sections/TechStack.tsx` — heading, label kategori (`Backend & Otomatisasi`, `Data & Integrasi`, `Deployment & Alur Kerja`); nama teknologi (Next.js, React, dst) tidak diterjemahkan (nama produk)
- [x] `src/components/sections/About.tsx` — heading, 3 paragraf, 3 kartu prinsip. Alt text foto **sengaja dibiarkan Inggris**
- [x] `src/components/sections/Contact.tsx` — heading, paragraf, label tombol WhatsApp
- [x] `src/components/sections/ContactForm.tsx` — semua label (Nama/Email/Pesan), placeholder, pesan sukses, fallback pesan error, teks tombol submit
- [x] `src/app/api/contact/route.ts` — semua pesan error yang dikirim ke `data.message` (ditampilkan di form): request tidak valid, rate limit, field wajib, email tidak valid, gagal kirim
  - Subject email & body HTML email notifikasi (yang masuk ke inbox `hello@paulosugaro.com`) **sengaja tidak diterjemahkan** — itu email internal untuk kamu sebagai pemilik situs, bukan teks yang dibaca pengunjung
- [x] `src/components/layout/Navbar.tsx` — semua label nav (Beranda/Pendekatan/Tentang/Kontak), tombol "Diskusikan Proyek Anda" (desktop+mobile), aria-label menu (Buka/Tutup menu)
  - Link **Blog dihapus dari nav** karena kontennya masih Inggris — lihat catatan restore di komentar `NAV_LINKS`
- [x] `src/components/layout/Footer.tsx` — tagline diganti ("Sistem Booking yang Sesuai Alur Bisnis Anda"), copyright ("Seluruh hak cipta dilindungi")
  - Link **Blog dihapus dari footer** juga, alasan sama seperti Navbar

## Belum disentuh (sengaja, di luar scope langkah 4–5)

- `src/components/sections/SelectedProjects.tsx` — masih hidden, isi lama (3 case study kantor) akan **diganti total** di Langkah 6, bukan diterjemahkan
- `src/components/sections/Solutions.tsx` — tetap hidden permanen di branch ini, tidak disentuh
- `src/components/case-study/*.tsx` & `src/app/projects/[slug]/page.tsx` — label chrome ("Challenge", "Solution", "Results", dst) akan diterjemahkan bersamaan saat menulis 2 case study baru di Langkah 6
- `src/components/blog/*.tsx`, `src/app/blog/**`, `content/blog/*.md` — tetap Inggris & tidak ditautkan dari nav/footer, sesuai instruksi "default-kan hidden dulu"
- `src/app/layout.tsx` (metadata SEO title/description, `<html lang>`) dan `src/app/robots.ts` — akan dikerjakan di Langkah 7 bersamaan dengan noindex, supaya tidak mengubah file yang sama dua kali
- `src/app/sitemap.ts` — tidak ada teks user-facing, tidak perlu diubah

## Yang perlu kamu putuskan/lengkapi sebelum Langkah 6

- Link demo cuci motor/mobil (placeholder `[DEMO_LINK_CUCI_MOTOR]`) — isi kalau sudah ketemu, atau lanjut dengan deskripsi + screenshot saja
- Screenshot/asset baru untuk 2 case study (mahjong booking + cuci motor/mobil)
