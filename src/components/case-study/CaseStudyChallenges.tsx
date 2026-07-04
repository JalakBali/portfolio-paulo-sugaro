"use client";

import { CircleAlert } from "lucide-react";
import { motion, type Variants } from "framer-motion";

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

interface CaseStudyChallengesProps {
  challenges: string[];
}

export default function CaseStudyChallenges({ challenges }: CaseStudyChallengesProps) {
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
            Key Challenges
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {challenges.map((challenge) => (
            <motion.div
              key={challenge}
              variants={fadeUp}
              className="flex items-start gap-3 rounded-xl border border-gray-700/50 bg-[#1F2937] p-5 transition-colors duration-300 hover:border-[#6BB8D4]/40"
            >
              <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gray-800/60">
                <CircleAlert size={16} className="text-[#6BB8D4]/70" />
              </span>
              <p className="text-sm leading-relaxed text-gray-300">{challenge}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
