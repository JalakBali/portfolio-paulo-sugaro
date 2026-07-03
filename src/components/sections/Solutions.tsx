"use client";

import { motion, type Variants } from "framer-motion";
import {
  Wallet,
  Warehouse,
  ShoppingCart,
  Settings,
  BarChart3,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Wallet,
    title: "Finance & Accounting",
    description:
      "Track transactions, cash flow, and reporting with fewer manual processes.",
  },
  {
    icon: Warehouse,
    title: "Inventory & Warehouse",
    description:
      "Manage stock, warehouse activities, requests, and transfers from one place.",
  },
  {
    icon: ShoppingCart,
    title: "Purchasing",
    description:
      "Simplify purchasing workflows, suppliers, approvals, and procurement records.",
  },
  {
    icon: Settings,
    title: "Operations",
    description:
      "Support daily business activities with software built around your workflow.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Dashboards",
    description:
      "Transform operational data into clear dashboards and reports.",
  },
  {
    icon: Zap,
    title: "Business Automation",
    description:
      "Reduce repetitive work through automation and workflow improvements.",
  },
];

const headingVariants: Variants = {
  hidden: { y: -24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerGrid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Solutions() {
  return (
    <section id="solutions" className="bg-[#1F2937] py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#6BB8D4]">
            What We Build
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl">
            Solutions Built Around
            <br />
            Business Operations
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Every business has different workflows, but most operational
            challenges fall into a few key areas.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-gray-400">
            We build software that connects these operations into one
            integrated system.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerGrid}
        >
          {services.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="rounded-xl border border-gray-800 bg-[#111827] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#6BB8D4]/50"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#6BB8D4]/10">
                <Icon size={24} className="text-[#6BB8D4]" />
              </div>
              <h3 className="mb-2 font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
