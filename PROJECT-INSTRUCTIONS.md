# Project Instructions — Portfolio Paulo Sugaro

> Paste isi file ini ke "Project Instructions" di Claude.ai. Ini adalah project portfolio/company site untuk Paulo Sugaro — custom software & business automation, based in Bali.

---

## 📍 Info Proyek

| Item | Detail |
|---|---|
| 💻 Folder Laptop | D:\Proyek\portfolio-paulo-sugaro |
| 🖥️ Folder PC Kantor Lama | belum dipakai lagi |
| 🖥️ Folder PC Baru | belum dibuat |
| 🐙 GitHub | https://github.com/JalakBali/portfolio-paulo-sugaro |
| 🌐 URL Live | https://paulosugaro.com *(custom domain sudah aktif di Vercel — dikonfirmasi)* |
| ⚡ Vercel | Paul's projects (Hobby) |
| 🌿 Branch | main |

**Catatan tambahan:** tidak ditemukan clue folder/path PC lain di `.git/config` atau file config lainnya — cuma remote GitHub di atas.

---

## 🧱 Stack Lengkap

Diambil langsung dari `package.json`, bukan dari ingatan:

| Package | Versi | Kategori |
|---|---|---|
| next | 16.2.9 | Framework |
| react | 19.2.4 | Library |
| react-dom | 19.2.4 | Library |
| framer-motion | ^12.40.0 | Animasi |
| lucide-react | ^1.18.0 | Icon set |
| tailwindcss | ^4 | Styling |
| @tailwindcss/postcss | ^4 | Styling (PostCSS plugin, Tailwind v4 style — bukan `tailwind.config.js`, tapi `@theme` di CSS) |
| typescript | ^5 | Bahasa |
| eslint / eslint-config-next | ^9 / 16.2.9 | Linting |
| @types/node, @types/react, @types/react-dom | ^20 / ^19 / ^19 | Types |

⚠️ Catatan: project ini pakai **Next.js 16**, versi yang cukup baru — kalau minta bantuan soal API/convention Next.js, jangan asumsikan sama seperti Next.js 13/14 di training data.

Font: Geist Sans/Mono, **Plus Jakarta Sans** (heading), **Inter** (body) — semua load via `next/font/google` di `layout.tsx`.

---

## 📂 Struktur Folder (src/)

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                  # homepage — assemble semua section
│   ├── globals.css               # Tailwind v4 theme vars (@theme inline)
│   ├── robots.ts
│   ├── sitemap.ts
│   └── projects/
│       └── [slug]/page.tsx       # dynamic case study page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/                 # section-section homepage
│   │   ├── Hero.tsx
│   │   ├── BusinessDifferently.tsx
│   │   ├── UnderstandingYourBusiness.tsx
│   │   ├── OurApproach.tsx
│   │   ├── SelectedProjects.tsx
│   │   ├── Solutions.tsx
│   │   ├── WhyWorkWithMe.tsx
│   │   ├── About.tsx
│   │   ├── TechStack.tsx
│   │   ├── Contact.tsx
│   │   ├── Projects.tsx          # ⚠️ ada file-nya tapi TIDAK di-import di mana pun (orphan/legacy)
│   │   └── Skills.tsx            # ⚠️ sama, orphan/legacy
│   └── case-study/                # komponen khusus halaman /projects/[slug]
│       ├── CaseStudyHero.tsx
│       ├── CaseStudyOverview.tsx
│       ├── CaseStudyChallenges.tsx
│       ├── CaseStudySolutionSections.tsx
│       ├── CaseStudyResults.tsx
│       ├── CaseStudyTechStack.tsx
│       └── CaseStudyCTA.tsx
├── data/
│   └── projects.ts               # single source of truth data project (typed `Project[]`)
└── lib/
    └── utils.ts
```

**Pola penamaan:**
- Komponen React: `PascalCase.tsx`, satu default export per file, nama file = nama komponen (`Hero.tsx` → `export default function Hero()`).
- Section homepage dikasih nama deskriptif langsung sesuai isinya (`BusinessDifferently`, `UnderstandingYourBusiness`, `OurApproach`) — bukan generic `Section1`, `Section2`.
- Komponen case study di-prefix `CaseStudy*` dan dikelompokkan di folder sendiri (`components/case-study/`).
- Import pakai alias `@/` (contoh: `@/components/sections/Hero`, `@/data/projects`).

---

## ✅ Progress Section (Homepage)

Urutan render di `src/app/page.tsx`:

| Section | Status |
|---|---|
| Navbar | ✅ Selesai |
| Hero | ✅ Selesai |
| BusinessDifferently | ✅ Selesai |
| UnderstandingYourBusiness | ✅ Selesai |
| OurApproach | ✅ Selesai |
| SelectedProjects | ✅ Selesai |
| Solutions | ✅ Selesai |
| WhyWorkWithMe | ✅ Selesai |
| About | ✅ Selesai |
| TechStack | ✅ Selesai |
| Contact | ✅ Selesai |
| Footer | ✅ Selesai |
| Case Study page (`/projects/[slug]`) — Hero, Overview, Challenges, SolutionSections, Results, TechStack, CTA | ✅ Selesai (7 komponen, semua terpakai) |
| Testimonials / Blog / FAQ / Pricing | ⏳ Belum ada file sama sekali (umum ada di site company profile, tapi belum tentu memang direncanakan — cek dulu ke aku kalau relevan) |

---

## 🎨 Konvensi Kode (disimpulkan dari file yang ada)

- **`'use client'`**: dipakai di komponen yang butuh interaktivitas/hooks/animasi — misal `Hero.tsx`, `Navbar.tsx` (pakai `useState`/`useEffect`), dan hampir semua section yang pakai `framer-motion`. Komponen server-only seperti `layout.tsx` dan `projects/[slug]/page.tsx` (async, `generateStaticParams`) **tidak** pakai `'use client'`.
- **Import**: selalu alias `@/...` dari `src/`, bukan relative path panjang (`../../../`).
- **Props/TypeScript**: interface props dinamai `<NamaKomponen>Props` (contoh: `CaseStudyOverviewProps`), didefinisikan langsung di atas komponennya, bukan di file terpisah.
- **Data terpusat**: semua data project ada di `src/data/projects.ts` sebagai satu array `Project[]` bertipe, diakses lewat helper (`getAllProjects`, `getFeaturedProjects`, `getProjectBySlug`, `getAllProjectSlugs`) — bukan diambil dari CMS/API eksternal.
- **Styling Tailwind**: campuran antara token tema (`bg-accent`, `text-accent-gold`, `bg-background`) dan **arbitrary hex value** langsung di className (`bg-[#6BB8D4]`, `bg-[#111827]`) — belum 100% konsisten pakai token, jadi kalau nambah section baru sebaiknya pakai token tema (`accent`, `accent-gold`, dst) biar rapi ke depannya.
- **Animasi**: pola konsisten pakai `framer-motion` — `Variants` di-define di atas komponen (`fadeUp`, `fadeInLeft`, `fadeInRight`), reveal-on-scroll pakai `whileInView` + `viewport={{ once: true }}`, stagger children pakai `staggerChildren` di parent variant.
- **Images**: selalu lewat `next/image`, path dari folder `public/images/...`.

---

## 🎨 Warna Brand

Didefinisikan di `src/app/globals.css` (`:root` + `@theme inline` — Tailwind v4 style, bukan `tailwind.config.js`):

| Token CSS | Tailwind class | Hex | Kegunaan |
|---|---|---|---|
| `--background` | `bg-background` | `#111827` | Warna dasar background (navy gelap) |
| `--foreground` | `text-foreground` | `#F9FAFB` | Warna teks utama (nyaris putih) |
| `--card` | `bg-card` | `#1F2937` | Background card/panel |
| `--text-secondary` | `text-text-secondary` | `#9CA3AF` | Teks sekunder/abu-abu |
| `--accent` | `bg-accent` / `text-accent` | `#6BB8D4` | Warna aksen utama (biru muda/cyan) — dipakai di CTA, link, highlight |
| `--accent-gold` | `bg-accent-gold` / `text-accent-gold` | `#D4A853` | Warna aksen kedua (gold) |

Catatan: di banyak komponen, warna-warna ini sering ditulis ulang sebagai hex literal (`#6BB8D4`, `#111827`, dll) alih-alih pakai class token — konsisten secara visual, tapi kurang konsisten secara kode.

---

## 🗑️ Riwayat File yang Dibersihkan

- **`sections/Projects.tsx`** — file kosong (0 bytes) sejak initial commit, tidak pernah dipakai. Dihapus 2 Agu 2026.
- **`sections/Skills.tsx`** — sempat dipakai di homepage (ditambahkan 18 Jun 2026), digantikan `TechStack.tsx` saat redesign business-first (27 Jun 2026). Dihapus 2 Agu 2026 — 10 SVG icon-nya diselamatkan ke `src/lib/tech-icons.tsx` untuk dipakai nanti saat upgrade `TechStack.tsx` jadi versi visual.
