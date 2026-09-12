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
| gray-matter | ^4.0.3 | Parsing frontmatter file markdown blog |
| remark / remark-html | ^15.0.1 / ^16.0.1 | Render markdown blog jadi HTML |
| @tailwindcss/typography | ^0.5.20 | Styling konten artikel blog (`prose`) |
| resend | ^6.18.1 | Kirim email dari contact form (`/api/contact`) |

⚠️ Catatan: project ini pakai **Next.js 16**, versi yang cukup baru — kalau minta bantuan soal API/convention Next.js, jangan asumsikan sama seperti Next.js 13/14 di training data.

Font: Geist Sans/Mono, **Plus Jakarta Sans** (heading), **Inter** (body) — semua load via `next/font/google` di `layout.tsx`.

---

## 📂 Struktur Folder (src/)

```
content/
└── blog/
    └── saas-tax-custom-cloud-systems.md   # artikel blog, format frontmatter + markdown

src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                  # homepage — assemble semua section
│   ├── globals.css               # Tailwind v4 theme vars (@theme inline) + typography plugin
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── api/
│   │   └── contact/route.ts      # POST handler — validasi, honeypot, rate limit, kirim via Resend
│   ├── blog/
│   │   ├── page.tsx              # listing semua artikel blog
│   │   └── [slug]/page.tsx       # dynamic blog post page
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
│   │   └── ContactForm.tsx       # form client component, dipakai di dalam Contact.tsx
│   ├── case-study/                # komponen khusus halaman /projects/[slug]
│   │   ├── CaseStudyHero.tsx
│   │   ├── CaseStudyOverview.tsx
│   │   ├── CaseStudyChallenges.tsx
│   │   ├── CaseStudySolutionSections.tsx
│   │   ├── CaseStudyResults.tsx
│   │   ├── CaseStudyTechStack.tsx
│   │   └── CaseStudyCTA.tsx
│   └── blog/                      # komponen khusus /blog & /blog/[slug]
│       ├── BlogList.tsx
│       ├── BlogPostHeader.tsx
│       └── BlogCTA.tsx
├── data/
│   └── projects.ts               # single source of truth data project (typed `Project[]`)
└── lib/
    ├── utils.ts
    ├── tech-icons.tsx            # 10 SVG icon tech stack, diselamatkan dari Skills.tsx
    └── blog.ts                   # helper baca & parse file markdown di content/blog/
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
| SelectedProjects | ⏸️ Disembunyikan sementara (12 Sep 2026) — komponen masih ada di kode, tinggal di-uncomment di page.tsx untuk restore (lihat catatan restore di bawah) |
| Solutions | ⏸️ Disembunyikan sementara (2 Agu 2026) — komponen masih ada di kode, tinggal di-uncomment di page.tsx dan tambahkan lagi link Navbar untuk restore |
| WhyWorkWithMe | ✅ Selesai |
| About | ⏸️ Foto disembunyikan sementara (12 Sep 2026), layout jadi 1 kolom — lihat catatan restore di bawah |
| TechStack | ✅ Selesai |
| Contact | ✅ Selesai (sudah include working contact form via Resend, bukan cuma mailto — lihat bagian "📧 Contact Form & Email" di bawah) |
| Footer | ✅ Selesai |
| Case Study page (`/projects/[slug]`) — Hero, Overview, Challenges, SolutionSections, Results, TechStack, CTA | ✅ Selesai (7 komponen, semua terpakai) |
| Blog (listing + detail) — `/blog` & `/blog/[slug]` | ✅ Selesai |
| Testimonials / FAQ / Pricing | ⏳ Belum ada file sama sekali (umum ada di site company profile, tapi belum tentu memang direncanakan — cek dulu ke aku kalau relevan) |

---

## 🎨 Konvensi Kode (disimpulkan dari file yang ada)

- **`'use client'`**: dipakai di komponen yang butuh interaktivitas/hooks/animasi — misal `Hero.tsx`, `Navbar.tsx` (pakai `useState`/`useEffect`), dan hampir semua section yang pakai `framer-motion`. Komponen server-only seperti `layout.tsx` dan `projects/[slug]/page.tsx` (async, `generateStaticParams`) **tidak** pakai `'use client'`.
- **Import**: selalu alias `@/...` dari `src/`, bukan relative path panjang (`../../../`).
- **Props/TypeScript**: interface props dinamai `<NamaKomponen>Props` (contoh: `CaseStudyOverviewProps`), didefinisikan langsung di atas komponennya, bukan di file terpisah.
- **Data terpusat**: semua data project ada di `src/data/projects.ts` sebagai satu array `Project[]` bertipe, diakses lewat helper (`getAllProjects`, `getFeaturedProjects`, `getProjectBySlug`, `getAllProjectSlugs`) — bukan diambil dari CMS/API eksternal.
- **Styling Tailwind**: campuran antara token tema (`bg-accent`, `text-accent-gold`, `bg-background`) dan **arbitrary hex value** langsung di className (`bg-[#6BB8D4]`, `bg-[#111827]`) — belum 100% konsisten pakai token, jadi kalau nambah section baru sebaiknya pakai token tema (`accent`, `accent-gold`, dst) biar rapi ke depannya.
- **Animasi**: pola konsisten pakai `framer-motion` — `Variants` di-define di atas komponen (`fadeUp`, `fadeInLeft`, `fadeInRight`), reveal-on-scroll pakai `whileInView` + `viewport={{ once: true }}`, stagger children pakai `staggerChildren` di parent variant.
- **Images**: selalu lewat `next/image`, path dari folder `public/images/...`.
- **Anchor link ke section homepage**: WAJIB format absolut `/#section-id` (contoh: `/#contact`, `/#projects`), bukan `#section-id` relatif. Alasan: link relatif cuma berfungsi kalau section tujuannya ada di halaman yang sedang dibuka — begitu diklik dari halaman lain (`/blog`, `/blog/[slug]`, `/projects/[slug]`), link relatif diam saja karena section-nya tidak ada di situ. `next/link` App Router sudah otomatis menangani navigasi ke `/` + scroll ke elemen id-nya, jadi tidak perlu `onClick`/`scrollIntoView` custom.

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

## 📝 Blog

Blog dibangun mengikuti pola yang sama dengan case study (`/projects/[slug]`) — data mentah di luar `src/`, helper baca data, lalu server component yang fetch data dan render lewat komponen client bertema `framer-motion`.

| Bagian | Lokasi | Fungsi |
|---|---|---|
| Artikel mentah | `content/blog/*.md` | Satu file markdown per artikel. Frontmatter wajib: `title`, `excerpt`, `date`, `author`, `slug`. Body markdown dirender jadi HTML saat build. |
| Helper data | `src/lib/blog.ts` | `getAllPosts()`, `getPostBySlug(slug)`, `getAllPostSlugs()` — baca & parse file di `content/blog/` pakai `gray-matter` (frontmatter) + `remark`/`remark-html` (markdown → HTML). H1 pertama di body otomatis di-strip karena title sudah ditampilkan di header. |
| Listing page | `src/app/blog/page.tsx` | Server component, panggil `getAllPosts()`, render `<BlogList />`. |
| Detail page | `src/app/blog/[slug]/page.tsx` | Server component, `generateStaticParams()` dari `getAllPostSlugs()`, `generateMetadata()` dari `getPostBySlug()` (title + excerpt untuk SEO), render `<BlogPostHeader />` → body markdown (`prose prose-invert`, di-styling manual pakai token tema lewat modifier `prose-*`) → `<BlogCTA />`. |
| Komponen | `src/components/blog/BlogList.tsx`, `BlogPostHeader.tsx`, `BlogCTA.tsx` | Semua `'use client'`, styling & animasi konsisten dengan `SelectedProjects.tsx`/`CaseStudyHero.tsx`/`CaseStudyCTA.tsx`. `BlogCTA` mengarah ke `/#contact` (section Contact di homepage), bukan `mailto:` langsung. |

Nambah artikel baru = tinggal taruh file `.md` baru di `content/blog/` dengan frontmatter yang sesuai — listing & detail page otomatis ke-generate saat build, tidak perlu ubah kode.

---

## 📧 Contact Form & Email

Contact form di section Contact (homepage) kirim email langsung ke inbox lewat Resend — bukan lagi cuma `mailto:`.

| Bagian | Lokasi | Detail |
|---|---|---|
| Dependency | `resend` (^6.18.1) | SDK resmi Resend untuk kirim email dari server. |
| API route | `src/app/api/contact/route.ts` | Route Handler `POST`. Alurnya: cek honeypot (kalau terisi, balas sukses palsu tanpa kirim apa-apa) → rate limit in-memory **3 request/10 menit per IP** (key dari header `x-forwarded-for`) → validasi field wajib + format email → kirim email via Resend. |
| Pengirim & tujuan | — | Dari `noreply@paulosugaro.com`, ke `hello@paulosugaro.com`, dengan **Reply-To** di-set ke alamat email pengirim form — jadi bisa langsung reply dari inbox tanpa copy-paste alamat. |
| Komponen form | `src/components/sections/ContactForm.tsx` | Client component, dipakai di dalam `Contact.tsx`. State `idle/loading/success/error`, honeypot tersembunyi (`position:absolute; left:-9999px`). |

**Environment variable — WAJIB di-set di 2 tempat:**
1. **Vercel** — `RESEND_API_KEY`, scope **Production + Preview**, ditandai **Sensitive**.
2. **`.env.local`** — untuk development lokal (file ini di-`.gitignore`, tidak pernah ke-commit).

Domain `paulosugaro.com` sudah diverifikasi di Resend (region **Tokyo, ap-northeast-1**) lewat Cloudflare auto-configure — jadi record DNS (SPF/DKIM/dsb) sudah otomatis benar, tidak perlu setting manual tambahan di Cloudflare.

---

## 🗑️ Riwayat File yang Dibersihkan

- **`sections/Projects.tsx`** — file kosong (0 bytes) sejak initial commit, tidak pernah dipakai. Dihapus 2 Agu 2026.
- **`sections/Skills.tsx`** — sempat dipakai di homepage (ditambahkan 18 Jun 2026), digantikan `TechStack.tsx` saat redesign business-first (27 Jun 2026). Dihapus 2 Agu 2026 — 10 SVG icon-nya diselamatkan ke `src/lib/tech-icons.tsx` untuk dipakai nanti saat upgrade `TechStack.tsx` jadi versi visual.

---

## 🔧 Riwayat Perbaikan

- **12 Sep 2026 — Link "View Case Study" di `SelectedProjects.tsx` diperbaiki dari dead-link.** Sebelumnya tiap card pakai `href="#"` (tidak mengarah kemana pun). Sekarang array `projects` lokal di file itu punya field `slug` (cocok dengan `slug` di `src/data/projects.ts`), dan link dibuat dinamis lewat `href={\`/projects/${slug}\`}` sehingga tiap card mengarah ke halaman case study yang benar di `/projects/[slug]`.

---

## ⏸️ Section yang Sedang Disembunyikan Sementara

- **Solutions** — disembunyikan dari homepage 2 Agu 2026. Komponen (`src/components/sections/Solutions.tsx`) **tidak dihapus**, masih utuh.
- **Cara restore:**
  1. Di `src/app/page.tsx`, hapus komentar penanda `HIDDEN 2 Agu 2026` dan uncomment baris `<Solutions />`.
  2. Di `src/components/layout/Navbar.tsx`, tambahkan kembali `{ label: "Services", href: "/#solutions" }` ke array `NAV_LINKS` (lihat komentar `NOTE` di atas array untuk posisi semula), lalu hapus komentar `NOTE`-nya.
  3. Jalankan `npm run build` untuk memastikan tidak ada error.

- **SelectedProjects** — disembunyikan dari homepage 12 Sep 2026. Komponen (`src/components/sections/SelectedProjects.tsx`) **tidak dihapus**, masih utuh. Tombol "View Projects" di `Hero.tsx` (yang link ke `/#projects`) ikut disembunyikan bersamaan karena section targetnya tidak dirender.
- **Cara restore (harus dilakukan bersamaan, keduanya):**
  1. Di `src/app/page.tsx`, hapus komentar penanda `HIDDEN 12 Sep 2026` dan uncomment baris `<SelectedProjects />`.
  2. Di `src/components/sections/Hero.tsx`, hapus komentar penanda `HIDDEN 12 Sep 2026` dan uncomment tombol `View Projects` (`<Link href="/#projects">`).
  3. Jalankan `npm run build` untuk memastikan tidak ada error.

- **WhatsApp link (Contact)** — disembunyikan dari section Contact 12 Sep 2026. Entry-nya di array `contactItems` (`src/components/sections/Contact.tsx`) di-comment, bukan dihapus. Import `MessageCircle` dari `lucide-react` sengaja dibiarkan meski jadi unused, supaya gampang di-restore tanpa re-import manual.
- **Cara restore:**
  1. Di `src/components/sections/Contact.tsx`, hapus komentar penanda `HIDDEN 12 Sep 2026` dan uncomment entry `{ icon: MessageCircle, value: "+62 811 5727 800", href: "https://wa.me/628115727800" }` di array `contactItems`.
  2. Jalankan `npm run build` untuk memastikan tidak ada error.

- **Foto About** — disembunyikan dari section About 12 Sep 2026. Elemen `<Image src="/images/Paul.png" .../>` (dibungkus `<motion.div variants={fromLeft} ...>`) di-comment, bukan dihapus. Layout section diubah dari grid 2 kolom jadi 1 kolom penuh (teks full-width) supaya foto benar-benar hilang dari layout, bukan cuma disembunyikan visual dengan ruang kosong tersisa.
- **Struktur original (untuk restore persis):**
  - Container original: `<div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 px-4 md:grid-cols-[35%_65%]">` (grid 2 kolom di desktop, 35% kolom foto / 65% kolom teks, max-w-6xl).
  - Container saat ini (disembunyikan): `<div className="mx-auto max-w-3xl px-4">` (1 kolom, max-w-3xl, hanya berisi blok teks).
  - Elemen foto original persis: `<motion.div variants={fromLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex justify-center md:justify-start"><Image src="/images/Paul.png" alt="Paul, software developer based in Bali" width={480} height={600} className="h-auto w-72 rounded-2xl border border-gray-700/50 object-cover object-top shadow-lg shadow-black/30 sm:w-80 md:w-full" /></motion.div>`.
- **Cara restore:**
  1. Di `src/components/sections/About.tsx`, ganti `className` container dari `"mx-auto max-w-3xl px-4"` kembali ke `"mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 px-4 md:grid-cols-[35%_65%]"`.
  2. Hapus komentar penanda `HIDDEN 12 Sep 2026` dan uncomment blok `<motion.div>` foto (variant `fromLeft`) di atas blok Text, persis seperti struktur original di atas.
  3. Jalankan `npm run build` untuk memastikan tidak ada error.
