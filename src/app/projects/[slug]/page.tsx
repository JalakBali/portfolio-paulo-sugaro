import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjectSlugs, getProjectBySlug } from "@/data/projects";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyOverview from "@/components/case-study/CaseStudyOverview";
import CaseStudyChallenges from "@/components/case-study/CaseStudyChallenges";
import CaseStudySolutionSections from "@/components/case-study/CaseStudySolutionSections";
import CaseStudyResults from "@/components/case-study/CaseStudyResults";
import CaseStudyTechStack from "@/components/case-study/CaseStudyTechStack";
import CaseStudyCTA from "@/components/case-study/CaseStudyCTA";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Paulo Sugaro",
    };
  }

  return {
    title: `${project.title} | Paulo Sugaro`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-[#111827]">
      <CaseStudyHero project={project} />
      <CaseStudyOverview project={project} />
      <CaseStudyChallenges challenges={project.challenges} />
      <CaseStudySolutionSections sections={project.solutionSections} />
      <CaseStudyResults results={project.results} />
      <CaseStudyTechStack techStack={project.techStack} />
      <CaseStudyCTA projectTitle={project.title} />
    </main>
  );
}
