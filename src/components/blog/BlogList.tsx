"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import type { BlogPostMeta } from "@/lib/blog";

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

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

interface BlogListProps {
  posts: BlogPostMeta[];
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <section className="bg-[#111827] pb-24 pt-32 md:pt-40">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Blog
          </span>
          <h1 className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl">
            Insights &amp; Guides for Growing Businesses
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Practical notes on custom software, business automation, and
            building systems that actually fit how your team works.
          </p>
        </motion.div>

        {posts.length === 0 ? (
          <p className="text-center text-gray-400">No articles published yet.</p>
        ) : (
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={staggerGrid}
          >
            {posts.map((post) => (
              <motion.div key={post.slug} variants={cardVariants}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-gray-700/50 bg-[#1F2937] p-6 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-black/30"
                >
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    {formatDate(post.date)}
                  </p>
                  <h2 className="mt-3 font-heading text-lg font-semibold text-white transition-colors group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex w-fit items-center text-sm font-medium text-accent transition-transform duration-200 group-hover:translate-x-0.5">
                    Read Article →
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
