import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
