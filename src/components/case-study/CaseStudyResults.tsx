"use client";

import { CircleCheck } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import type { Project } from "@/data/projects";

const headingVariants: Variants = {
  hidden: { y: -24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { y: 16, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

interface CaseStudyResultsProps {
  results: Project["results"];
}

export default function CaseStudyResults({ results }: CaseStudyResultsProps) {
  return (
    <section className="bg-[#111827] py-16">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
          className="mb-10 text-center"
        >
          <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">
            What Improved
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {results.map((result) => (
            <motion.div
              key={result.title}
              variants={fadeUp}
              className="rounded-xl border border-gray-700/50 bg-[#1F2937] p-6 transition-colors duration-300 hover:border-[#6BB8D4]/40"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-800/60">
                  <CircleCheck size={16} className="text-[#6BB8D4]/70" />
                </span>
                <h3 className="font-heading text-base font-semibold text-white">
                  {result.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {result.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
