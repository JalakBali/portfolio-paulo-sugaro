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

// Placeholder paths — drop the real images into public/images/showcase/
const SHOWCASE = {
  main: "/images/showcase/dashboard.png",
  card1: "/images/showcase/kas-bank.png",
  card2: "/images/showcase/stock-request.png",
} as const;

function ScreenshotCard({
  src,
  alt,
  label,
  imgWidth,
  imgHeight,
  className,
  shadowClass = "shadow-[0_16px_40px_-6px_rgba(0,0,0,0.6),0_4px_16px_-4px_rgba(0,0,0,0.35)]",
}: {
  src: string;
  alt: string;
  label?: string;
  imgWidth: number;
  imgHeight: number;
  className?: string;
  shadowClass?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/10 bg-[#1a1f2e] ${shadowClass} ${className ?? ""}`}
    >
      <div className="flex items-center gap-1.5 bg-[#1e2433] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]/80" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]/80" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]/80" />
        {label && (
          <span className="ml-2 truncate text-[10px] text-white/30">
            {label}
          </span>
        )}
      </div>
      <div className="relative">
        <Image
          src={src}
          alt={alt}
          width={imgWidth}
          height={imgHeight}
          className="block w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d1117]/30 to-transparent" />
      </div>
    </div>
  );
}

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
        {/* ── Text column ── */}
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left"
        >
          <motion.span
            variants={fadeInLeft}
            className="text-sm font-semibold uppercase tracking-widest text-[#6BB8D4]"
          >
            Sistem Booking &amp; Reservasi Online
          </motion.span>

          <motion.h1
            variants={fadeInLeft}
            className="mt-3 font-heading text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
          >
            Jasa Bikin Sistem Booking &amp; Reservasi Online
            <br className="hidden sm:block" />{" "}
            <span className="text-[#6BB8D4]">Anti Bentrok Jadwal, Anti Ribet.</span>
          </motion.h1>

          <motion.p
            variants={fadeInLeft}
            className="mx-auto mt-6 max-w-xl text-base text-gray-300 md:mx-0 md:text-lg"
          >
            Saya bangun sistem booking custom yang mengikuti alur bisnis
            Anda—bukan sebaliknya.
          </motion.p>

          <motion.p
            variants={fadeInLeft}
            className="mx-auto mt-3 max-w-xl text-sm text-gray-400 md:mx-0"
          >
            Cocok untuk bisnis berbasis reservasi—booking meja, lapangan,
            kendaraan, sampai jasa reservasi lainnya. Setiap sistem dirancang
            supaya jadwal tidak bentrok, konfirmasi berjalan otomatis, dan tim
            Anda tidak perlu lagi catat manual di WhatsApp atau buku.
          </motion.p>

          <motion.p
            variants={fadeInLeft}
            className="mx-auto mt-3 max-w-xl text-sm text-[#6BB8D4]/80 md:mx-0"
          >
            Berbasis di Bali. Melayani klien lokal maupun internasional secara
            remote.
          </motion.p>

          <motion.div
            variants={fadeInLeft}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start"
          >
            {/* HIDDEN 12 Sep 2026 — "View Projects" disembunyikan sementara karena target
                section (/#projects) tidak dirender selama SelectedProjects di-hide.
                Untuk restore: uncomment bersamaan dengan <SelectedProjects /> di
                src/app/page.tsx, lihat PROJECT-INSTRUCTIONS.md */}
            {/* <Link
              href="/#projects"
              className="rounded-full bg-[#6BB8D4] px-7 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              View Projects
            </Link> */}
            <Link
              href="/#contact"
              className="rounded-full border-2 border-[#6BB8D4]/60 px-7 py-3 text-sm font-medium text-[#6BB8D4] transition-colors hover:border-[#6BB8D4] hover:bg-[#6BB8D4]/10"
            >
              Diskusikan Proyek Anda
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Visual column ── */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          className="flex justify-center md:justify-end"
        >
          {/* Outer wrapper — padding reserves space so floating cards don't clip */}
          <div className="relative w-full max-w-[680px] px-2 py-10">
            {/* Large ambient glow behind the dashboard */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 scale-125 rounded-full bg-[rgba(96,165,250,0.14)] blur-[220px]"
            />

            {/* Main screenshot card */}
            <div className="relative z-10 -rotate-2 shadow-[0_24px_64px_-8px_rgba(0,0,0,0.65),0_8px_24px_-4px_rgba(0,0,0,0.4),0_0_40px_-8px_rgba(107,184,212,0.18)]">
              <ScreenshotCard
                src={SHOWCASE.main}
                alt="Business dashboard overview"
                label="Dashboard — Overview"
                imgWidth={790}
                imgHeight={494}
              />
            </div>

            {/* Floating card — top right */}
            <motion.div
              className="absolute -top-2 right-10 z-20 w-48 rotate-3 sm:w-56 md:-top-4 md:right-8"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            >
              <ScreenshotCard
                src={SHOWCASE.card1}
                alt="Bank reconciliation module"
                imgWidth={280}
                imgHeight={175}
                shadowClass="shadow-[0_16px_40px_-6px_rgba(0,0,0,0.6),0_4px_16px_-4px_rgba(0,0,0,0.35)]"
              />
            </motion.div>

            {/* Floating card — bottom left */}
            <motion.div
              className="absolute bottom-8 left-5 z-20 w-44 -rotate-1 sm:w-52 md:bottom-6 md:left-1"
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
            >
              <ScreenshotCard
                src={SHOWCASE.card2}
                alt="Stock request module"
                imgWidth={260}
                imgHeight={163}
                shadowClass="shadow-[0_16px_40px_-6px_rgba(0,0,0,0.6),0_4px_16px_-4px_rgba(0,0,0,0.35)]"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
