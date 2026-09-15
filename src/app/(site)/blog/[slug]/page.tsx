import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogCTA from "@/components/blog/BlogCTA";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Paulo Sugaro",
    };
  }

  return {
    title: `${post.title} | Paulo Sugaro`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-[#111827]">
      <BlogPostHeader post={post} />

      <section className="bg-[#111827] pb-16">
        <div className="mx-auto max-w-3xl px-4">
          <article
            className="prose prose-invert max-w-none prose-headings:font-heading prose-headings:text-white prose-p:leading-relaxed prose-p:text-gray-300 prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-blockquote:border-accent prose-blockquote:text-gray-400 prose-th:text-white prose-td:text-gray-300 prose-table:text-sm prose-hr:border-gray-700 prose-li:text-gray-300"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </section>

      <BlogCTA />
    </main>
  );
}
