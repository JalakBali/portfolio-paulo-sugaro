"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const fromLeft: Variants = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fromRight: Variants = {
  hidden: { x: 40, opacity: 0 },
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

export default function About() {
  return (
    <section id="about" className="bg-[#1F2937] py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        {/* Photo */}
        <motion.div
          variants={fromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 scale-110 rounded-2xl bg-[#6BB8D4]/30 blur-2xl"
            />
            <Image
              src="/images/Paul.png"
              alt="Paul, software developer based in Bali"
              width={480}
              height={600}
              className="relative z-10 h-auto w-72 rounded-2xl object-cover object-top shadow-2xl ring-1 ring-white/10 sm:w-80 md:w-96"
            />
          </div>
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
            About
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl font-bold text-[#6BB8D4] md:text-4xl"
          >
            About Me
          </motion.h2>

          <motion.p variants={fadeUp} className="leading-relaxed text-gray-300">
            I&rsquo;m Paul, a software developer based in Bali, Indonesia. With
            a background in Physics and years of experience in IT, I&rsquo;ve
            grown from hands-on IT support and operational systems into building
            modern accounting applications and web solutions for real businesses.
          </motion.p>

          <motion.p variants={fadeUp} className="leading-relaxed text-gray-300">
            Over the past two years, I&rsquo;ve focused on developing custom
            accounting systems and business applications using React, Vite, and
            Supabase &mdash; serving clients in the restaurant, hospitality, and
            lifestyle industries. I&rsquo;m now expanding into modern web
            development with Next.js and Tailwind CSS.
          </motion.p>

          <motion.p variants={fadeUp} className="leading-relaxed text-gray-300">
            I take on freelance projects outside office hours &mdash; from
            professional websites to custom internal systems. If you have a
            project in mind, I&rsquo;d love to hear about it.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col gap-4 sm:flex-row sm:items-center">
            {/* Availability badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-green-900/50 px-4 py-1.5 text-sm font-medium text-green-400">
              <span
                aria-hidden="true"
                className="h-2 w-2 animate-pulse rounded-full bg-green-400"
              />
              Available for New Projects
            </span>

            {/* CTA button */}
            <a
              href="#contact"
              className="inline-block rounded-full bg-[#6BB8D4] px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
