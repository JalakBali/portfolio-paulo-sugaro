"use client";

import { motion, type Variants } from "framer-motion";
import {
  FileText,
  TableProperties,
  Package,
  Users,
  Clock3,
  TriangleAlert,
} from "lucide-react";

const problems = [
  {
    icon: FileText,
    title: "Booking Masih Manual",
    description:
      "Tim Anda mencatat pemesanan berulang kali lewat chat, telepon, atau buku catatan setiap hari.",
  },
  {
    icon: TableProperties,
    title: "Data Booking Berantakan",
    description:
      "Jadwal, data pelanggan, dan status pemesanan tersebar di WhatsApp, spreadsheet, dan catatan kertas.",
  },
  {
    icon: Package,
    title: "Jadwal Sering Bentrok",
    description:
      "Slot atau meja yang sama bisa dipesan dua kali karena tidak ada pengecekan otomatis.",
  },
  {
    icon: Users,
    title: "Input Data Berulang",
    description:
      "Informasi pelanggan yang sama harus diketik ulang oleh orang berbeda di tempat berbeda.",
  },
  {
    icon: Clock3,
    title: "Rekap Lambat",
    description:
      "Butuh waktu lama untuk tahu berapa booking masuk hari ini, padahal seharusnya instan.",
  },
  {
    icon: TriangleAlert,
    title: "Kesalahan Kecil yang Berdampak Besar",
    description:
      "Salah catat tanggal atau jam booking bisa bikin pelanggan kecewa.",
  },
];

const headingVariants: Variants = {
  hidden: { y: -24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerGrid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function UnderstandingYourBusiness() {
  return (
    <section id="understanding-your-business" className="bg-[#111827] py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#6BB8D4]">
            Memahami Bisnis Anda
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl">
            Apakah Ini Terasa Familiar?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Banyak bisnis berbasis reservasi sebenarnya tidak butuh lebih
            banyak aplikasi. Mereka butuh sistem booking yang anti bentrok,
            catatan yang jelas, dan alur kerja yang sesuai cara tim Anda
            menerima pemesanan.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerGrid}
        >
          {problems.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="rounded-xl border border-gray-700/50 bg-[#1F2937] p-6 transition-all duration-300 hover:border-[#6BB8D4]/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#6BB8D4]/10">
                <Icon size={24} className="text-[#6BB8D4]" />
              </div>
              <h3 className="mb-2 font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-lg text-gray-300 md:text-xl">
            Kalau salah satu dari ini terasa familiar,
          </p>
          <p className="mt-2 text-lg text-gray-300 md:text-xl">
            bisnis Anda mungkin tidak butuh aplikasi generik lainnya.
          </p>
          <p className="mt-2 text-lg text-gray-300 md:text-xl">
            Yang dibutuhkan adalah{" "}
            <span className="text-[#6BB8D4]">
              sistem booking yang dirancang sesuai cara bisnis Anda benar-benar
              berjalan.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
