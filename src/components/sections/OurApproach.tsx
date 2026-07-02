"use client";

import { motion, type Variants } from "framer-motion";
import { Search, PenTool, Hammer, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Understand",
    description:
      "We learn how your team works, where friction happens, and what needs to improve.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design",
    description:
      "We map the workflow before writing code, so the system fits the way your business operates.",
  },
  {
    icon: Hammer,
    number: "03",
    title: "Build",
    description:
      "We develop custom software around your process, not around generic templates.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Improve",
    description:
      "We refine the system with real feedback so it continues to support your business over time.",
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
            Our Approach
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl">
            How We Build Software That Fits Your Business
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Every project starts with understanding how your business
            actually works. We map your workflow, design the right system,
            build carefully, and improve continuously as your business grows.
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
