"use client";

import { Mail, MessageCircle, MapPin } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@paulosugaro.com",
    href: "mailto:hello@paulosugaro.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+62 811 5727 800",
    href: "https://wa.me/628115727800",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bali, Indonesia",
    href: undefined,
  },
];

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
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

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-[60%_40%]">
        {/* Left column */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-5 text-center lg:text-left"
        >
          <motion.span
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-widest text-[#6BB8D4]"
          >
            Contact
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl"
          >
            Let&rsquo;s Build a Better System
            <br />
            for Your Business
          </motion.h2>

          <motion.p variants={fadeUp} className="leading-relaxed text-gray-300">
            Every business has its own workflow.
          </motion.p>

          <motion.p variants={fadeUp} className="leading-relaxed text-gray-300">
            If you&rsquo;re exploring ways to simplify operations,
            <br />
            reduce manual work,
            <br />
            or build software around the way your team actually works,
          </motion.p>

          <motion.p variants={fadeUp} className="leading-relaxed text-gray-300">
            I&rsquo;d be happy to discuss your ideas.
          </motion.p>

          <motion.p variants={fadeUp} className="leading-relaxed text-gray-300">
            No pressure.
            <br />
            No obligation.
            <br />
            Just a conversation.
          </motion.p>

          <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
            <a
              href="mailto:hello@paulosugaro.com"
              className="inline-block rounded-full bg-[#6BB8D4] px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#5aa6c2]"
            >
              Discuss Your Project
            </a>
          </motion.div>
        </motion.div>

        {/* Right column — contact card */}
        <motion.div
          variants={fromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl border border-[#6BB8D4]/25 bg-[#1F2937] p-6 shadow-lg shadow-black/30 sm:p-8"
        >
          <h3 className="mb-6 font-heading text-lg font-semibold text-white">
            Get in Touch
          </h3>

          <div className="flex flex-col gap-5">
            {contactItems.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <>
                  <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-800/60">
                    <Icon size={18} className="text-[#6BB8D4]/70" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      {label}
                    </p>
                    <p className="text-sm text-gray-300">{value}</p>
                  </div>
                </>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 transition-colors hover:text-[#6BB8D4]"
                >
                  {content}
                </a>
              ) : (
                <div key={label} className="flex items-center gap-3">
                  {content}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
