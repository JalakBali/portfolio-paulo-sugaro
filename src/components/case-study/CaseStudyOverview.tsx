"use client";

import { motion, type Variants } from "framer-motion";
import type { Project } from "@/data/projects";

const fadeUp: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

interface CaseStudyOverviewProps {
  project: Project;
}

export default function CaseStudyOverview({ project }: CaseStudyOverviewProps) {
  return (
    <section className="bg-[#111827] py-16">
      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="rounded-2xl border border-gray-700/50 bg-[#1F2937] p-8 shadow-lg shadow-black/20 md:p-12"
        >
          <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">
            {project.overview.heading}
          </h2>
          <p className="mt-4 leading-relaxed text-gray-400">
            {project.overview.body}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
