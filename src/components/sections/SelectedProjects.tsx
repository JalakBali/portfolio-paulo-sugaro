"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { getFeaturedProjects } from "@/data/projects";

const projects = getFeaturedProjects();

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

export default function SelectedProjects() {
  return (
    <section id="projects" className="bg-[#111827] py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#6BB8D4]">
            Proyek Terpilih
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl">
            Sistem Booking Nyata untuk Kebutuhan Nyata
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Beberapa sistem booking yang sudah dibangun untuk membantu bisnis
            mengelola reservasi tanpa bentrok jadwal dan tanpa ribet.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerGrid}
        >
          {projects.map(
            ({ slug, title, subtitle, description, coverImage, tags, featured, liveUrl }) => (
              <motion.div
                key={slug}
                variants={cardVariants}
                className={`group overflow-hidden rounded-xl border border-gray-700/50 bg-[#1F2937] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-[#6BB8D4]/50 hover:shadow-lg hover:shadow-black/30 ${
                  featured ? "lg:col-span-2" : ""
                }`}
              >
                <div
                  className={
                    featured ? "lg:grid lg:grid-cols-[11fr_9fr] lg:items-stretch" : ""
                  }
                >
                  <div
                    className={`relative aspect-video overflow-hidden ${
                      featured ? "lg:order-2 lg:aspect-auto lg:min-h-[320px]" : ""
                    }`}
                  >
                    <Image
                      src={coverImage}
                      alt={`${title} screenshot`}
                      fill
                      unoptimized
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1F2937]/40 to-transparent" />
                  </div>
                  <div
                    className={`flex flex-col justify-center p-6 lg:p-8 ${
                      featured ? "lg:order-1" : ""
                    }`}
                  >
                    <h3
                      className={`font-heading font-semibold text-white ${
                        featured ? "text-2xl lg:text-3xl" : "text-lg lg:text-xl"
                      }`}
                    >
                      {title}
                    </h3>
                    <p
                      className={`mt-1 text-[#6BB8D4] ${
                        featured ? "text-base lg:text-lg" : "text-sm"
                      }`}
                    >
                      {subtitle}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-gray-400">
                      {description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-gray-700/50 bg-gray-800/50 px-3 py-1 text-xs text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                      <Link
                        href={`/projects/${slug}`}
                        className="inline-flex w-fit items-center text-sm font-medium text-[#6BB8D4] transition-transform duration-200 hover:translate-x-0.5 hover:underline"
                      >
                        Lihat Studi Kasus →
                      </Link>
                      {liveUrl && (
                        <a
                          href={liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-fit items-center text-sm font-medium text-gray-300 transition-transform duration-200 hover:translate-x-0.5 hover:text-white hover:underline"
                        >
                          Lihat Demo Live ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
