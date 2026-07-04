"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { y: 16, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

interface CaseStudyTechStackProps {
  techStack: string[];
}

export default function CaseStudyTechStack({ techStack }: CaseStudyTechStackProps) {
  return (
    <section className="bg-[#111827] py-16">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#6BB8D4]">
            Technology Used
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-gray-700 bg-[#1F2937] px-3 py-1.5 text-xs text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
