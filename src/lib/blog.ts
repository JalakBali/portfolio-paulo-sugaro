import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
}

export interface BlogPost extends BlogPostMeta {
  contentHtml: string;
}

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function readPostMeta(slug: string): BlogPostMeta {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return {
    slug: data.slug ?? slug,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    author: data.author,
  };
}

export function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllPosts(): BlogPostMeta[] {
  return getAllPostSlugs()
    .map((slug) => readPostMeta(slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return undefined;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Strip a leading H1 — the post title is already rendered by BlogPostHeader.
  const body = content.replace(/^\s*#\s+.*\n+/, "");

  const processed = await remark().use(html).process(body);

  return {
    slug: data.slug ?? slug,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    author: data.author,
    contentHtml: processed.toString(),
  };
}
