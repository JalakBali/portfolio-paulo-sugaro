"use client";

import { MessageCircle, Mail } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const fadeDown: Variants = {
  hidden: { y: -24, opacity: 0 },
  visible: {
    y: 0,
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
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-4 text-center">
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <motion.span
            variants={fadeDown}
            className="text-sm font-semibold uppercase tracking-widest text-[#6BB8D4]"
          >
            Contact
          </motion.span>

          <motion.h2
            variants={fadeDown}
            className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl"
          >
            Let&rsquo;s Work Together
          </motion.h2>

          <motion.p
            variants={fadeDown}
            className="mx-auto max-w-lg text-gray-300"
          >
            Have a project in mind? I&rsquo;d love to hear about it. Reach out
            via WhatsApp or Email and let&rsquo;s make it happen.
          </motion.p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <motion.a
            variants={fadeUp}
            href="https://wa.me/628115727800"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-green-500 px-8 py-4 font-medium text-white transition-colors hover:bg-green-600"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </motion.a>

          <motion.a
            variants={fadeUp}
            href="mailto:sugiharto@budidarman.my.id"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#6BB8D4] px-8 py-4 font-medium text-[#6BB8D4] transition-colors hover:bg-[#6BB8D4] hover:text-white"
          >
            <Mail size={20} />
            Send an Email
          </motion.a>
        </motion.div>

        {/* Footer note */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-sm text-gray-500"
        >
          Based in Bali, Indonesia &middot; Available for new projects
        </motion.p>
      </div>
    </section>
  );
}
