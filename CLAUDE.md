@AGENTS.md

## Struktur Branch & Domain

Project ini punya 3 branch yang di-deploy sebagai 3 domain terpisah di Vercel (satu project, multiple branch deployment):

| Branch | Domain | Bahasa | Status |
|---|---|---|---|
| `main` | paulosugaro.com | Inggris | Versi saat ini masih ada beberapa section hidden (foto profil, section Services, Selected Projects) — rencana ke depan branch ini akan diubah jadi halaman hub/landing netral yang mengarahkan ke `freelance.paulosugaro.com` dan `en.paulosugaro.com` |
| `portfolio-freelance` | freelance.paulosugaro.com | Indonesia | Live, khusus untuk platform freelance lokal (Projects.co.id dll). Noindex (tidak untuk pencarian Google). Foto asli ditampilkan, case study kantor sudah dihapus total, diganti case study bersih (Booking Mahjong, SparkWash) |
| `en` | en.paulosugaro.com | Inggris | Dibuat 15 Sept 2026 sebagai snapshot dari `main` — isinya SAMA PERSIS dengan `main` saat branch dibuat (termasuk section yang masih hidden). Tujuan: jadi portofolio Bahasa Inggris untuk platform internasional (Upwork dll). Section yang hidden akan di-unhide bertahap di branch ini secara terpisah, TIDAK otomatis ikut berubah kalau `main` diubah setelah titik ini |

## Catatan penting soal branch independence

- Setelah `en` dibuat dari `main` (commit awal: lihat riwayat git, dibuat 15 Sept 2026), kedua branch **tidak lagi otomatis sinkron**. Perubahan di `main` tidak akan muncul di `en` kecuali di-merge manual (`git checkout en && git merge main`), begitu juga sebaliknya.
- Kalau ada perbaikan komponen/bug fix yang sifatnya universal (bukan konten spesifik satu branch), pertimbangkan untuk merge lintas branch supaya semua domain dapat perbaikan yang sama.
- Root domain (`paulosugaro.com` dari branch `main`) rencananya akan diubah total jadi halaman hub netral (bukan portfolio lengkap) — jangan bingung kalau suatu saat kontennya sudah sangat berbeda dari `en`/`portfolio-freelance` meski originnya sama.
