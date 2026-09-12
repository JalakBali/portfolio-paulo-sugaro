import Hero from "@/components/sections/Hero";
import BusinessDifferently from "@/components/sections/BusinessDifferently";
import UnderstandingYourBusiness from "@/components/sections/UnderstandingYourBusiness";
import OurApproach from "@/components/sections/OurApproach";
import SelectedProjects from "@/components/sections/SelectedProjects";
import Solutions from "@/components/sections/Solutions";
import WhyWorkWithMe from "@/components/sections/WhyWorkWithMe";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BusinessDifferently />
      <UnderstandingYourBusiness />
      <OurApproach />
      {/* HIDDEN 12 Sep 2026 — SelectedProjects section disembunyikan sementara, lihat PROJECT-INSTRUCTIONS.md */}
      {/* <SelectedProjects /> */}
      {/* HIDDEN 2 Agu 2026 — Solutions section disembunyikan sementara, lihat PROJECT-INSTRUCTIONS.md */}
      {/* <Solutions /> */}
      <WhyWorkWithMe />
      <About />
      <TechStack />
      <Contact />
    </main>
  );
}
