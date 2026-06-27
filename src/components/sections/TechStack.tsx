"use client";

import { motion, type Variants } from "framer-motion";

const stack = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vite", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "Backend & Database",
    items: ["Supabase"],
  },
  {
    category: "Cloud & Deployment",
    items: ["Vercel", "Cloudflare"],
  },
  {
    category: "Tools",
    items: ["GitHub", "VS Code"],
  },
];

const headingVariants: Variants = {
  hidden: { y: -16, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
  hidden: { y: 12, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function TechStack() {
  return (
    <section id="stack" className="bg-[#111827] py-16">
      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          className="mb-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#6BB8D4]/70">
            Built With
          </span>
          <h2 className="mt-1 font-heading text-xl font-bold text-gray-300 md:text-2xl">
            Technology Stack
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {stack.map(({ category, items }) => (
            <motion.div key={category} variants={fadeUp}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#6BB8D4]/60">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-gray-700 bg-[#1F2937] px-2.5 py-1 text-xs text-gray-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
