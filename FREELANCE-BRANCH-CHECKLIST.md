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

## Langkah 6 — Selected Projects, 2 case study baru, mockup booking

- [x] `src/data/projects.ts` — **3 case study lama dihapus total dari data** (bukan cuma di-hide), diganti 2 case study baru:
  1. `booking-meja-mahjong` — Booking Meja Mahjong Online, `liveUrl` diisi `https://bookmahjong.paulosugaro.com` (link demo yang kamu berikan)
  2. `booking-cuci-motor-mobil` — Booking Cuci Motor & Mobil Online (MVP), `liveUrl` **sengaja tidak diisi** — lihat catatan placeholder di bawah
  - Struktur mengikuti pola lama: overview (masalah) → challenges (tantangan) → solutionSections (solusi/fitur) → results (hasil)
  - Field baru `liveUrl?: string` ditambahkan ke interface `Project` (opsional, dipakai kalau ada demo live)
  - ⚠️ Karena data lama dihapus total (bukan cuma disembunyikan dari homepage), 3 halaman case study lama (`/projects/business-management-platform`, dst.) sekarang **404** di branch ini — dikonfirmasi lewat `npm run build`, hanya 2 slug baru yang ter-generate. Ini pilihan sengaja untuk keamanan (bukan cuma "tidak ditampilkan", tapi benar-benar tidak bisa diakses)
- [x] `src/components/sections/SelectedProjects.tsx` — ditulis ulang, sekarang mengambil data dari `getFeaturedProjects()` di `src/data/projects.ts` (tidak lagi duplikasi array lokal terpisah), copy Bahasa Indonesia, tombol "Lihat Studi Kasus →" + "Lihat Demo Live ↗" (muncul kalau `liveUrl` ada)
  - **Blok "Hioe Mahjong Academy"** (highlight terpisah yang link ke `mahjong.paulosugaro.com`, project mahjong LAIN yang bukan bagian dari 2 case study yang kamu konfirmasi) **dihapus** dari section ini — di luar daftar 2 case study yang disetujui, jadi tidak ditampilkan di branch freelance ini. Kalau ternyata project itu juga boleh ditampilkan, kasih tahu supaya ditambahkan kembali
- [x] `src/app/page.tsx` — `<SelectedProjects />` di-uncomment (tidak lagi hidden)
- [x] `src/components/sections/Hero.tsx` — tombol "View Projects" di-restore & diterjemahkan jadi "Lihat Studi Kasus" (link ke `/#projects`), sesuai catatan restore lama di PROJECT-INSTRUCTIONS.md
- [x] `src/components/case-study/CaseStudyChallenges.tsx`, `CaseStudyResults.tsx`, `CaseStudyTechStack.tsx`, `CaseStudyCTA.tsx` — label chrome diterjemahkan ("Tantangan Utama", "Hasil yang Dicapai", "Teknologi yang Digunakan", "Tertarik Membangun Sistem Serupa?", dst.)
- [x] `src/components/case-study/CaseStudyHero.tsx` — tombol "Lihat Demo Live ↗" ditambahkan, muncul kalau project punya `liveUrl`

### Mockup booking (placeholder visual)

Semua mockup berikut **dibuat sebagai SVG buatan tangan** (bukan screenshot asli), dark background `#1F2937`, accent `#6BB8D4` (booking terisi) dan `#D4A853` (menunggu konfirmasi) — konsisten satu sama lain. Setiap file punya komentar `<!-- PLACEHOLDER MOCKUP -->` di dalamnya, dan titik pemakaiannya di kode juga dikomentari `// PLACEHOLDER`:

- [x] `public/images/showcase/booking-calendar-main.svg` — Hero, dashboard utama (kalender mingguan)
- [x] `public/images/showcase/booking-today-schedule.svg` — Hero, floating card "Jadwal Hari Ini"
- [x] `public/images/showcase/booking-confirmed.svg` — Hero, floating card "Booking Dikonfirmasi"
- [x] `public/images/projects/mahjong-booking-cover.svg` — cover case study mahjong (grid ketersediaan meja)
- [x] `public/images/projects/mahjong-booking-calendar.svg`, `mahjong-booking-confirmation.svg` — 2 gambar solution section mahjong
- [x] `public/images/projects/cuci-motor-cover.svg` — cover case study cuci motor (grid status slot cuci)
- [x] `public/images/projects/cuci-motor-booking-form.svg`, `cuci-motor-queue.svg` — 2 gambar solution section cuci motor
- [x] Ditambahkan `unoptimized` pada semua `<Image>` yang merender SVG ini (di `Hero.tsx`'s `ScreenshotCard`, `CaseStudyHero.tsx`, `CaseStudySolutionSections.tsx`, `SelectedProjects.tsx`) — perlu karena Next.js Image optimizer menolak SVG secara default
- Gambar showcase lama (`dashboard.png`, `kas-bank.png`, `stock-request.png`, `master-item.png`, `review-coa.png`) **tidak dihapus dari repo**, tapi sudah tidak direferensikan di kode manapun — aman dihapus manual kapan saja kalau kamu mau beres-beres

### ⚠️ PENTING — perlu tindakanmu

- **Link demo cuci motor/mobil belum diisi.** Bukan pakai link placeholder (mis. `href="#"`) supaya tidak ada link mati yang ke-deploy ke pengunjung — field `liveUrl` di project `booking-cuci-motor-mobil` (`src/data/projects.ts`) sengaja dibiarkan kosong, ditandai komentar `// PLACEHOLDER` tepat di atas entry project-nya. Begitu link ketemu, tambahkan baris `liveUrl: "https://..."` di situ.
- **Semua gambar case study & Hero masih mockup SVG buatan tangan**, bukan screenshot asli. Kalau kamu sudah punya screenshot asli (terutama untuk cuci motor/mobil yang kamu sebut mungkin belum ada), kirim filenya dan aku ganti — cari komentar `// PLACEHOLDER` di `Hero.tsx` dan `src/data/projects.ts` untuk titik penggantiannya.
- Verifikasi visual (dev server + screenshot headless browser) sudah dilakukan untuk homepage dan kedua halaman case study — semua render tanpa gambar rusak. `npm run build` juga sukses.

## Belum disentuh (sengaja, di luar scope langkah 4–6)

- `src/components/sections/Solutions.tsx` — tetap hidden permanen di branch ini, tidak disentuh
- `src/components/blog/*.tsx`, `src/app/blog/**`, `content/blog/*.md` — tetap Inggris & tidak ditautkan dari nav/footer, sesuai instruksi "default-kan hidden dulu"
- `src/app/layout.tsx` (metadata SEO title/description, `<html lang>`) dan `src/app/robots.ts` — akan dikerjakan di Langkah 7 bersamaan dengan noindex, supaya tidak mengubah file yang sama dua kali
- `src/app/sitemap.ts` — tidak ada teks user-facing, tidak perlu diubah
- Vercel deployment ke subdomain terpisah — Langkah 8, belum dikerjakan
