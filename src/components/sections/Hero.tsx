"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const textContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeInLeft: Variants = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInRight: Variants = {
  hidden: { x: 30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 text-center md:order-1 md:text-left"
        >
          <motion.span
            variants={fadeInLeft}
            className="text-sm font-semibold uppercase tracking-widest text-[#6BB8D4]"
          >
            Custom Software &amp; Business Automation
          </motion.span>

          <motion.h1
            variants={fadeInLeft}
            className="mt-3 font-heading text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
          >
            Software That Fits
            <br className="hidden sm:block" />{" "}
            <span className="text-[#6BB8D4]">Your Business.</span>
          </motion.h1>

          <motion.p
            variants={fadeInLeft}
            className="mx-auto mt-6 max-w-xl text-base text-gray-300 md:mx-0 md:text-lg"
          >
            We build software that adapts to your business—not the other way
            around.
          </motion.p>

          <motion.p
            variants={fadeInLeft}
            className="mx-auto mt-3 max-w-xl text-sm text-[#6BB8D4]/80 md:mx-0"
          >
            Based in Bali. Working with businesses locally and internationally.
          </motion.p>

          <motion.div
            variants={fadeInLeft}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start"
          >
            <Link
              href="#contact"
              className="rounded-full bg-[#6BB8D4] px-7 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Discuss Your Project
            </Link>
            <Link
              href="#solutions"
              className="rounded-full border-2 border-[#6BB8D4]/60 px-7 py-3 text-sm font-medium text-[#6BB8D4] transition-colors hover:border-[#6BB8D4] hover:bg-[#6BB8D4]/10"
            >
              View Services
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          className="order-1 flex justify-center md:order-2 md:justify-end"
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 scale-110 rounded-2xl bg-accent/30 blur-2xl"
            />
            <Image
              src="/images/Paul.png"
              alt="Paul, software developer based in Bali, Indonesia"
              width={480}
              height={600}
              preload
              loading="eager"
              className="relative z-10 h-auto w-72 rounded-2xl object-cover object-top shadow-2xl ring-1 ring-white/10 sm:w-80 md:w-96"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
