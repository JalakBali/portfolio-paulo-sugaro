"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import type { Project } from "@/data/projects";

const fadeUp: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

interface CaseStudyHeroProps {
  project: Project;
}

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <section className="bg-[#111827] pb-16 pt-32 md:pt-40">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-widest text-[#6BB8D4]"
          >
            {project.overview.label}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-2 font-heading text-3xl font-bold text-white md:text-5xl"
          >
            {project.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg text-[#6BB8D4]"
          >
            {project.subtitle}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-400"
          >
            {project.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-wrap justify-center gap-2"
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-gray-700/50 bg-gray-800/50 px-3 py-1 text-xs text-gray-300"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 32, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto mt-12 aspect-video max-w-5xl overflow-hidden rounded-2xl border border-gray-700/50 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
        >
          <Image
            src={project.coverImage}
            alt={`${project.title} cover`}
            fill
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover object-top"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111827]/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
