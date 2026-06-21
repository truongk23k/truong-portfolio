import Hero from "@/components/sections/Hero";
import FeaturedPlayables from "@/components/sections/FeaturedPlayables";
import Games from "@/components/sections/Games";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <FeaturedPlayables />
      <Games />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
