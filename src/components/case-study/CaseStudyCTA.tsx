"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

interface CaseStudyCTAProps {
  projectTitle?: string;
}

export default function CaseStudyCTA({ projectTitle }: CaseStudyCTAProps) {
  return (
    <section className="bg-[#111827] py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="rounded-2xl border border-[#6BB8D4]/25 bg-[#1F2937] p-10 shadow-lg shadow-black/30 md:p-14"
        >
          {projectTitle && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#6BB8D4]/70">
              {projectTitle}
            </p>
          )}

          <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">
            Interested in Building Something Similar?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-gray-400">
            If your business has a workflow that feels too manual, too
            fragmented, or too difficult to manage, we can start with a simple
            conversation.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="mailto:hello@paulosugaro.com"
              className="inline-block rounded-full bg-[#6BB8D4] px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#5aa6c2]"
            >
              Discuss Your Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
