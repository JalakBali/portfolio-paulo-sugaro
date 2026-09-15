import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogList from "@/components/blog/BlogList";

export const metadata: Metadata = {
  title: "Blog | Paulo Sugaro",
  description:
    "Practical notes on custom software, business automation, and building systems that fit how your team works.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="bg-[#111827]">
      <BlogList posts={posts} />
    </main>
  );
}
