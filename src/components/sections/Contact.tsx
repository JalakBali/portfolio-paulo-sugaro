"use client";

import { Mail, MessageCircle } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import ContactForm from "@/components/sections/ContactForm";

const contactItems = [
  {
    icon: Mail,
    value: "hello@paulosugaro.com",
    href: "mailto:hello@paulosugaro.com",
  },
  {
    icon: MessageCircle,
    value: "+62 811 5727 800",
    href: "https://wa.me/628115727800",
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
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[45%_55%] lg:items-start">
          {/* Left column — plain text, no card */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-4 text-left"
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
              Every business has its own workflow — tell me about yours, no
              pressure, just a conversation.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-2 flex flex-col gap-3">
              {contactItems.map(({ icon: Icon, value, href }) => (
                <a
                  key={value}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-[#6BB8D4]"
                >
                  <Icon size={18} className="shrink-0 text-[#6BB8D4]/70" />
                  {value}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column — the only card in this section */}
          <motion.div
            variants={fromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
