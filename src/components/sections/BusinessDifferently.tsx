"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, ArrowDown, X, Check } from "lucide-react";

const genericPoints = [
  "Less flexible workflows",
  "Extra manual work",
  "Higher friction for the team",
];

const pauloPoints = [
  "Built around real workflows",
  "Less duplicate entry",
  "Designed for how your team actually works",
];

const headingVariants: Variants = {
  hidden: { y: -24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerGrid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

function FlowCue({
  topLabel,
  bottomLabel,
  accent,
}: {
  topLabel: string;
  bottomLabel: string;
  accent: boolean;
}) {
  const textClass = accent ? "text-gray-200" : "text-gray-400";
  const iconClass = accent ? "text-[#6BB8D4]" : "text-gray-600";

  return (
    <div className="mb-4 flex flex-col items-center space-y-2">
      <span className={`text-sm font-medium leading-none tracking-wide ${textClass}`}>
        {topLabel}
      </span>
      <ArrowDown size={16} className={iconClass} />
      <span className={`text-sm font-medium leading-none tracking-wide ${textClass}`}>
        {bottomLabel}
      </span>
      {accent ? (
        <Check size={16} className="text-[#6BB8D4]" />
      ) : (
        <X size={16} className="text-gray-500" />
      )}
    </div>
  );
}

export default function BusinessDifferently() {
  return (
    <section id="business-differently" className="bg-[#111827] py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#6BB8D4]">
            Our Philosophy
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl">
            Every Business Works Differently.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Off-the-shelf software often forces teams to change the way they
            work. We believe software should adapt to your business
            process—not the other way around.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerGrid}
        >
          <motion.div
            variants={cardVariants}
            className="rounded-xl border border-gray-700/50 bg-[#1F2937] p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                Generic Software
              </span>
              <ArrowRight size={16} className="text-gray-600" />
            </div>
            <h3 className="mb-6 font-semibold text-gray-300">
              Business adapts to the software.
            </h3>
            <FlowCue topLabel="Business" bottomLabel="Software" accent={false} />
            <ul className="space-y-4">
              {genericPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gray-700/50">
                    <X size={12} className="text-gray-400" />
                  </span>
                  <span className="text-sm leading-relaxed text-gray-400">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="rounded-xl bg-gradient-to-br from-[#6BB8D4]/40 via-[#6BB8D4]/10 to-white/5 p-px shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5),0_0_45px_-12px_rgba(107,184,212,0.25)]"
          >
            <div className="h-full rounded-[11px] bg-[#1F2937] p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#6BB8D4]">
                  Paulo Sugaro
                </span>
                <ArrowRight size={16} className="text-[#6BB8D4]" />
              </div>
              <h3 className="mb-6 font-semibold text-white">
                Software adapts to the business.
              </h3>
              <FlowCue topLabel="Software" bottomLabel="Business" accent />
              <ul className="space-y-4">
                {pauloPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#6BB8D4]/10">
                      <Check size={12} className="text-[#6BB8D4]" />
                    </span>
                    <span className="text-sm leading-relaxed text-gray-300">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
