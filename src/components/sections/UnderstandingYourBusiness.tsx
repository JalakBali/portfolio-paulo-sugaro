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
    title: "Manual Processes",
    description:
      "Your team spends hours repeating the same work every day.",
  },
  {
    icon: TableProperties,
    title: "Scattered Information",
    description:
      "Important data lives in spreadsheets, WhatsApp, and paper notes.",
  },
  {
    icon: Package,
    title: "Inventory Doesn't Match",
    description:
      "Stock numbers rarely reflect what's actually on the shelf.",
  },
  {
    icon: Users,
    title: "Duplicate Data Entry",
    description:
      "The same information gets entered multiple times by different people.",
  },
  {
    icon: Clock3,
    title: "Slow Reporting",
    description:
      "Managers wait days for reports that should take seconds.",
  },
  {
    icon: TriangleAlert,
    title: "Too Many Small Mistakes",
    description:
      "Tiny human errors become expensive business problems.",
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
            Understanding Your Business
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl">
            Does Any of This Sound Familiar?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Many businesses don&apos;t need more software. They need fewer
            manual processes, clearer information, and systems that actually
            work the way their team works.
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
            If even one of these feels familiar,
          </p>
          <p className="mt-2 text-lg text-gray-300 md:text-xl">
            your business probably doesn&apos;t need another generic
            application.
          </p>
          <p className="mt-2 text-lg text-gray-300 md:text-xl">
            It needs{" "}
            <span className="text-[#6BB8D4]">
              software designed around the way your business actually works.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
