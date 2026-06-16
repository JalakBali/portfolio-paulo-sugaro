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
          <motion.h1
            variants={fadeInLeft}
            className="font-heading text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl"
          >
            Turning Business Challenges into Seamless Digital Solutions
          </motion.h1>

          <motion.p
            variants={fadeInLeft}
            className="mx-auto mt-6 max-w-xl text-base text-gray-300 md:mx-0 md:text-lg"
          >
            I&rsquo;m Paul, a software developer based in Bali, Indonesia. I
            help businesses streamline their operations and grow their
            presence online — from professional websites to custom internal
            systems. Whether you&rsquo;re a local business or an
            international brand, I build solutions that just work.
          </motion.p>

          <motion.div
            variants={fadeInLeft}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start"
          >
            <Link
              href="#projects"
              className="border-2 border-[#6BB8D4] text-[#6BB8D4] hover:bg-[#6BB8D4] hover:text-white transition-colors duration-300 rounded-full px-6 py-3"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Get In Touch
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
              className="relative z-10 h-auto w-72 rounded-2xl object-cover object-top shadow-2xl ring-1 ring-white/10 sm:w-80 md:w-96"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
