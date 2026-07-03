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
      <SelectedProjects />
      <Solutions />
      <WhyWorkWithMe />
      <About />
      <TechStack />
      <Contact />
    </main>
  );
}
