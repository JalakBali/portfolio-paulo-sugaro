"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function BlogCTA() {
  return (
    <section className="bg-[#111827] py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="rounded-2xl border border-accent/25 bg-[#1F2937] p-10 shadow-lg shadow-black/30 md:p-14"
        >
          <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">
            Ready to Build Something That Fits Your Business?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-gray-400">
            If this sounds like where your business is at, let&apos;s talk
            through your workflow and see whether a custom system would pay
            for itself.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/#contact"
              className="inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#5aa6c2]"
            >
              Discuss Your Project
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
