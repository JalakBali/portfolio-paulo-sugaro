"use client";

import { motion, type Variants } from "framer-motion";
import { Briefcase, Layers, Rocket, MessageSquare } from "lucide-react";

const reasons = [
  {
    icon: Briefcase,
    title: "Understand Your Business",
    description: "Before writing code, we learn how your business actually works.",
  },
  {
    icon: Layers,
    title: "Design Around Your Workflow",
    description:
      "Every system is tailored to support your existing operations—not replace them.",
  },
  {
    icon: Rocket,
    title: "Build With Modern Technology",
    description:
      "Reliable, scalable, and maintainable software built for long-term growth.",
  },
  {
    icon: MessageSquare,
    title: "Continuous Improvement",
    description:
      "Software evolves with your business through ongoing refinement and support.",
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

export default function WhyWorkWithMe() {
  return (
    <section id="approach" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#6BB8D4]">
            Our Approach
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl">
            The Paulo Sugaro Approach
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Great software starts long before development.
            <br className="hidden sm:block" />
            Every successful project begins by understanding how your business
            works, identifying bottlenecks, and designing a solution that fits
            your workflow—not forcing your workflow to fit the software.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerGrid}
        >
          {reasons.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="rounded-xl border border-gray-800 bg-[#1F2937] p-6 transition-colors hover:border-[#6BB8D4]/50"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#6BB8D4]/10">
                <Icon size={24} className="text-[#6BB8D4]" />
              </div>
              <h3 className="mb-2 font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
