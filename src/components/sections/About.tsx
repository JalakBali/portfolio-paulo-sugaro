"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Search, Hammer, TrendingUp } from "lucide-react";

const principles = [
  {
    icon: Search,
    title: "Understand First",
    description: "Every project begins by learning how your business actually works.",
  },
  {
    icon: Hammer,
    title: "Build Carefully",
    description:
      "Every workflow is designed deliberately—not copied from generic templates.",
  },
  {
    icon: TrendingUp,
    title: "Improve Continuously",
    description:
      "Software evolves together with your business instead of becoming outdated.",
  },
];

const fromLeft: Variants = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="bg-[#1F2937] py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 px-4 md:grid-cols-[35%_65%]">
        {/* Portrait */}
        <motion.div
          variants={fromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center md:justify-start"
        >
          <Image
            src="/images/Paul.png"
            alt="Paul, software developer based in Bali"
            width={480}
            height={600}
            className="h-auto w-72 rounded-2xl border border-gray-700/50 object-cover object-top shadow-lg shadow-black/30 sm:w-80 md:w-full"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-5"
        >
          <motion.span
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-widest text-[#6BB8D4]"
          >
            About Paulo Sugaro
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl font-bold text-white md:text-4xl"
          >
            Software Should Adapt
            <br />
            to People — Not
            <br />
            the Other Way Around.
          </motion.h2>

          <motion.div variants={staggerContainer} className="flex flex-col gap-6">
            <motion.p variants={fadeUp} className="leading-relaxed text-gray-300">
              For years I&rsquo;ve worked closely with businesses that struggled
              because their software didn&rsquo;t match the way they actually
              operated.
            </motion.p>

            <motion.p variants={fadeUp} className="leading-relaxed text-gray-300">
              Instead of forcing teams to change their workflow, I prefer to
              understand how people work first&mdash;then design software that
              supports those processes.
            </motion.p>

            <motion.p variants={fadeUp} className="leading-relaxed text-gray-300">
              The goal isn&rsquo;t just to build software.
              <br />
              It&rsquo;s to help businesses operate with more clarity, less
              repetition, and better information.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {principles.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={cardVariants}
                className="rounded-xl border border-gray-700/50 bg-[#111827] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#6BB8D4]/50 hover:shadow-lg hover:shadow-black/30"
              >
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800/60">
                  <Icon size={18} className="text-[#6BB8D4]/70" />
                </div>
                <h3 className="mb-1.5 text-base font-bold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
