"use client";

import { motion, type Variants } from "framer-motion";
import type { BlogPostMeta } from "@/lib/blog";

const fadeUp: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

interface BlogPostHeaderProps {
  post: BlogPostMeta;
}

export default function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <section className="bg-[#111827] pb-12 pt-32 md:pt-40">
      <div className="mx-auto max-w-3xl px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center"
        >
          <motion.span
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-widest text-accent"
          >
            Blog
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl"
          >
            {post.title}
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-4 text-sm text-gray-400">
            {formatDate(post.date)} &middot; {post.author}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
