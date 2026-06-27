"use client";

import { motion, type Variants } from "framer-motion";
import {
  FileSpreadsheet,
  RefreshCw,
  Unplug,
  Clock,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

const problems = [
  {
    icon: FileSpreadsheet,
    title: "Manual Spreadsheets",
    description:
      "Critical data is scattered across spreadsheets that become harder to manage as your business grows.",
  },
  {
    icon: RefreshCw,
    title: "Repetitive Tasks",
    description:
      "Your team spends hours every week doing work that could be automated.",
  },
  {
    icon: Unplug,
    title: "Disconnected Systems",
    description:
      "Information lives in different places, making collaboration slow and error-prone.",
  },
  {
    icon: Clock,
    title: "Slow Reporting",
    description:
      "Important business decisions are delayed because reports take too long to prepare.",
  },
  {
    icon: AlertTriangle,
    title: "Human Errors",
    description:
      "Manual processes increase the risk of mistakes that cost time and money.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description:
      "Your business is growing, but your current tools are no longer keeping up.",
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

export default function ProblemsWeSolve() {
  return (
    <section id="problems" className="bg-[#111827] py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#6BB8D4]">
            Common Business Challenges
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl">
            Still Managing Your Business the Hard Way?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Many growing businesses lose valuable time because their daily
            operations still depend on manual processes, disconnected tools, and
            repetitive work.
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
          <p className="text-2xl font-semibold text-white md:text-3xl">
            Every business is{" "}
            <span className="text-[#6BB8D4]">unique.</span>
          </p>
          <p className="mt-2 text-2xl font-semibold text-white md:text-3xl">
            Your software should be{" "}
            <span className="text-[#6BB8D4]">too.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
