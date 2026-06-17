import DiceWidget from "@/components/DiceWidget";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

export default function DiceSection() {
  return (
    <section id="dice" className="relative py-24 overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 flex flex-col items-center gap-12">
        <AnimatedSection>
          <SectionHeader
            label="Just for Fun"
            title="Roll the Dice"
            description="Every great game has an element of chance. Give it a roll."
          />
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <DiceWidget />
        </AnimatedSection>
      </div>
    </section>
  );
}
