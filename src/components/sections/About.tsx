"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Search, Hammer, TrendingUp } from "lucide-react";

const principles = [
  {
    icon: Search,
    title: "Pahami Dulu",
    description: "Setiap project dimulai dengan mempelajari cara bisnis Anda benar-benar berjalan.",
  },
  {
    icon: Hammer,
    title: "Bangun dengan Cermat",
    description:
      "Setiap alur kerja dirancang dengan sengaja—bukan disalin dari template generik.",
  },
  {
    icon: TrendingUp,
    title: "Sempurnakan Terus-Menerus",
    description:
      "Software berkembang bersama bisnis Anda, bukan malah jadi usang.",
  },
];

const fromLeft: Variants = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="bg-[#1F2937] py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 px-4 md:grid-cols-[35%_65%]">
        {/* Portrait */}
        <motion.div
          variants={fromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center md:justify-start"
        >
          <Image
            src="/images/Paul.png"
            alt="Paul, software developer based in Bali"
            width={480}
            height={600}
            className="h-auto w-72 rounded-2xl border border-gray-700/50 object-cover object-top shadow-lg shadow-black/30 sm:w-80 md:w-full"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-5"
        >
          <motion.span
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-widest text-[#6BB8D4]"
          >
            Tentang Paulo Sugaro
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl font-bold text-white md:text-4xl"
          >
            Software Harus Menyesuaikan Manusia
            &mdash; Bukan Sebaliknya.
          </motion.h2>

          <motion.div variants={staggerContainer} className="flex flex-col gap-6">
            <motion.p variants={fadeUp} className="leading-relaxed text-gray-300">
              Saya percaya software yang baik dimulai dari memahami cara orang
              benar-benar bekerja &mdash; bukan sebaliknya. Terlalu sering, tim
              dipaksa mengubah alur kerja mereka supaya cocok dengan sistem
              yang sejak awal tidak dirancang untuk mereka.
            </motion.p>

            <motion.p variants={fadeUp} className="leading-relaxed text-gray-300">
              Pendekatan saya sebaliknya: pahami dulu prosesnya, baru rancang
              software di sekitarnya &mdash; bukan kebalikannya.
            </motion.p>

            <motion.p variants={fadeUp} className="leading-relaxed text-gray-300">
              Karena tujuannya bukan sekadar membangun software.
              Tapi membantu orang bekerja dengan lebih jelas, lebih sedikit
              pekerjaan berulang, dan informasi yang lebih baik.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {principles.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={cardVariants}
                className="rounded-xl border border-gray-700/50 bg-[#111827] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#6BB8D4]/50 hover:shadow-lg hover:shadow-black/30"
              >
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800/60">
                  <Icon size={18} className="text-[#6BB8D4]/70" />
                </div>
                <h3 className="mb-1.5 text-base font-bold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
