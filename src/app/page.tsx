import Hero from "@/components/sections/Hero";
import FeaturedPlayables from "@/components/sections/FeaturedPlayables";
import DiceSection from "@/components/sections/DiceSection";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <FeaturedPlayables />
      <DiceSection />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
