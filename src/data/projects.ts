export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  tags: string[];
  featured?: boolean;
  // Link demo/live project — opsional, ditampilkan di CaseStudyHero & SelectedProjects kalau ada.
  liveUrl?: string;

  overview: {
    label: string;
    heading: string;
    body: string;
  };

  challenges: string[];

  solutionSections: {
    title: string;
    body: string;
    image?: string;
  }[];

  results: {
    title: string;
    description: string;
  }[];

  techStack: string[];
}

export const projects: Project[] = [
  {
    slug: "booking-meja-mahjong",
    title: "Booking Meja Mahjong Online",
    subtitle:
      "Sistem reservasi meja mahjong real-time yang anti bentrok jadwal.",
    description:
      "Dibangun untuk tempat bermain mahjong yang sebelumnya mengandalkan booking manual lewat WhatsApp dan buku catatan, sering menyebabkan meja double-booking dan pelanggan kecewa.",
    coverImage: "/images/projects/mahjong-booking-cover.svg",
    tags: ["Booking Online", "Reservasi Meja", "Real-time"],
    featured: true,
    liveUrl: "https://bookmahjong.paulosugaro.com",

    overview: {
      label: "STUDI KASUS",
      heading: "Booking Meja Mahjong Tanpa Bentrok Jadwal",
      body: "Tempat bermain mahjong ini sebelumnya menerima reservasi lewat chat dan telepon, membuat staf harus mengecek manual apakah meja tersedia. Sistem baru memungkinkan pelanggan booking meja secara online, real-time, tanpa risiko dua pelanggan mendapat meja yang sama di jam yang sama.",
    },

    challenges: [
      "Reservasi meja masih dicatat manual lewat WhatsApp dan buku, rawan bentrok.",
      "Staf harus mengecek ketersediaan meja satu per satu secara manual.",
      "Pelanggan tidak punya cara melihat sendiri jadwal meja yang kosong.",
      "Tidak ada catatan riwayat booking yang rapi untuk evaluasi bisnis.",
    ],

    solutionSections: [
      {
        title: "Kalender Ketersediaan Real-time",
        body: "Pelanggan bisa langsung melihat meja mana yang kosong di jam berapa, tanpa perlu bertanya ke staf. Sistem otomatis mengunci slot begitu booking dikonfirmasi, sehingga tidak ada dua pelanggan yang bisa mendapat meja yang sama.",
        image: "/images/projects/mahjong-booking-calendar.svg",
      },
      {
        title: "Konfirmasi Booking Otomatis",
        body: "Setiap reservasi baru langsung tercatat dan terkonfirmasi tanpa perlu staf mengecek manual, mengurangi waktu tunggu pelanggan dan beban kerja tim di jam sibuk.",
        image: "/images/projects/mahjong-booking-confirmation.svg",
      },
    ],

    results: [
      {
        title: "Nol Booking Bentrok",
        description: "Tidak ada lagi dua pelanggan mendapat meja yang sama di jam yang sama.",
      },
      {
        title: "Booking 24 Jam",
        description: "Pelanggan bisa reservasi kapan saja tanpa menunggu staf membalas chat.",
      },
      {
        title: "Beban Kerja Staf Berkurang",
        description: "Staf tidak perlu lagi mengecek ketersediaan meja secara manual.",
      },
      {
        title: "Riwayat Booking Tercatat Rapi",
        description: "Semua reservasi tersimpan otomatis untuk kebutuhan evaluasi bisnis.",
      },
    ],

    techStack: ["Next.js", "React", "Supabase", "PostgreSQL", "Vercel"],
  },

  {
    // PLACEHOLDER — link demo belum ditemukan (catatan pemilik: "akan diisi
    // setelah ketemu catatannya"). Field `liveUrl` sengaja tidak diisi supaya
    // tidak menampilkan link mati ke pengunjung. Begitu link ditemukan,
    // tambahkan `liveUrl: "https://..."` di sini — lihat juga
    // FREELANCE-BRANCH-CHECKLIST.md.
    slug: "booking-cuci-motor-mobil",
    title: "Booking Cuci Motor & Mobil Online",
    subtitle: "MVP reservasi jadwal cuci kendaraan tanpa antre di tempat.",
    description:
      "MVP booking pribadi untuk usaha cuci kendaraan, memungkinkan pelanggan memilih jenis kendaraan, layanan, dan slot waktu cuci secara online tanpa perlu datang lebih dulu untuk antre.",
    coverImage: "/images/projects/cuci-motor-cover.svg",
    tags: ["Booking Online", "MVP", "Reservasi Slot"],
    featured: true,

    overview: {
      label: "STUDI KASUS",
      heading: "MVP Booking Cuci Kendaraan Tanpa Antre",
      body: "Usaha cuci motor dan mobil pada umumnya masih mengandalkan sistem antre di tempat, membuat pelanggan menunggu tanpa kepastian waktu. Project ini dibangun sebagai MVP untuk menguji sistem booking slot cuci kendaraan secara online, dari pemilihan jenis kendaraan sampai konfirmasi jadwal.",
    },

    challenges: [
      "Pelanggan harus datang dan menunggu tanpa tahu estimasi waktu.",
      "Tidak ada cara reservasi slot cuci dari jarak jauh.",
      "Jadwal antrean sulit dikelola saat ramai, rawan penumpukan.",
      "Tidak ada catatan riwayat pelanggan untuk layanan berulang.",
    ],

    solutionSections: [
      {
        title: "Pilih Slot Cuci Sesuai Jenis Kendaraan",
        body: "Pelanggan memilih jenis kendaraan (motor/mobil), jenis layanan, dan slot waktu yang tersedia langsung dari HP, tanpa perlu datang dulu untuk antre.",
        image: "/images/projects/cuci-motor-booking-form.svg",
      },
      {
        title: "Manajemen Antrean untuk Staf",
        body: "Staf bisa melihat jadwal booking hari itu dalam satu tampilan, sehingga antrean lebih teratur dan tidak ada slot yang terlewat atau bentrok.",
        image: "/images/projects/cuci-motor-queue.svg",
      },
    ],

    results: [
      {
        title: "Booking Tanpa Antre di Tempat",
        description: "Pelanggan tahu jadwalnya sebelum datang, tidak perlu menunggu di lokasi.",
      },
      {
        title: "Antrean Lebih Teratur",
        description: "Staf punya gambaran jelas jadwal cuci sepanjang hari.",
      },
      {
        title: "Anti Bentrok Slot",
        description: "Sistem mencegah dua kendaraan dijadwalkan di slot cuci yang sama.",
      },
      {
        title: "Basis untuk Pengembangan Lanjutan",
        description: "MVP ini jadi fondasi untuk fitur langganan cuci rutin & program pelanggan setia.",
      },
    ],

    techStack: ["Next.js", "React", "Supabase", "Vercel"],
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
