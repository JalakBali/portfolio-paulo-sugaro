"use client";

import { motion, type Variants } from "framer-motion";
import { Search, PenTool, Hammer, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Memahami",
    description:
      "Saya pelajari cara pelanggan Anda booking saat ini, di mana letak masalahnya, dan apa yang perlu diperbaiki.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Merancang",
    description:
      "Saya petakan alur booking sebelum menulis kode, supaya sistemnya pas dengan cara bisnis Anda beroperasi.",
  },
  {
    icon: Hammer,
    number: "03",
    title: "Membangun",
    description:
      "Saya kembangkan sistem booking khusus sesuai proses Anda, bukan template generik.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Menyempurnakan",
    description:
      "Sistem terus disempurnakan berdasarkan feedback nyata supaya tetap mendukung bisnis Anda dari waktu ke waktu.",
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

export default function OurApproach() {
  return (
    <section id="approach" className="bg-[#111827] py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#6BB8D4]">
            Pendekatan Kami
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl">
            Cara Saya Membangun Sistem Booking yang Sesuai Bisnis Anda
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Setiap project dimulai dengan memahami cara pemesanan berjalan di
            bisnis Anda saat ini. Saya petakan alurnya, rancang sistem yang
            tepat, bangun dengan cermat, dan terus disempurnakan seiring
            bisnis Anda berkembang.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerGrid}
        >
          {steps.map(({ icon: Icon, number, title, description }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="rounded-xl border border-gray-700/50 bg-[#1F2937] p-5 transition-all duration-300 hover:border-[#6BB8D4]/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30"
            >
              <div className="mb-3 flex items-start justify-between">
                <span className="font-heading text-3xl font-bold tracking-tight text-gray-500">
                  {number}
                </span>
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800/60">
                  <Icon size={18} className="text-[#6BB8D4]/70" />
                </div>
              </div>
              <h3 className="mb-1.5 font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
