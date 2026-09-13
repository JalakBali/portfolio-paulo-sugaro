"use client";

import { motion, type Variants } from "framer-motion";

const stack = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    category: "Backend & Otomatisasi",
    items: ["Node.js", "Apps Script", "Supabase"],
  },
  {
    category: "Data & Integrasi",
    items: ["Google Sheets", "PostgreSQL", "MySQL"],
  },
  {
    category: "Deployment & Alur Kerja",
    items: ["GitHub", "Vercel", "Cloud Services"],
  },
];

const headingVariants: Variants = {
  hidden: { y: -24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
  hidden: { y: 12, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function TechStack() {
  return (
    <section id="stack" className="bg-[#111827] py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#6BB8D4]">
            Dibangun dengan Teknologi Modern
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl">
            Teknologi Modern
            <br />
            untuk Sistem Booking yang Andal
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Teknologi yang andal itu penting&mdash;bukan karena baru, tapi
            karena bisnis Anda bergantung padanya.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-gray-400">
            Setiap sistem dibangun dengan tools yang dipilih karena stabil,
            scalable, dan mudah dirawat dalam jangka panjang.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {stack.map(({ category, items }) => (
            <motion.div
              key={category}
              variants={fadeUp}
              className="rounded-lg border border-gray-800 bg-[#1F2937] p-4 transition-colors duration-300 hover:border-[#6BB8D4]/40"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#6BB8D4]/70">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-gray-700 bg-[#111827] px-2.5 py-1 text-xs text-gray-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
