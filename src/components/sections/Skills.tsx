import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import SkillBars from "@/components/SkillBars";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-600/10 dark:bg-blue-600/8 blur-[100px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-600/10 dark:bg-purple-600/8 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6">
        <AnimatedSection>
          <SectionHeader
            label="Tech Stack"
            title="Built for Game Ads"
            description="Every tool chosen for one goal: maximum visual impact inside a minimum-size deliverable."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((group, i) => (
            <AnimatedSection key={group.category} delay={i * 100}>
              <div className="relative group h-full rounded-3xl bg-white/60 dark:bg-white/4 border border-slate-200/80 dark:border-white/8 backdrop-blur-xl overflow-hidden hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/8 hover:-translate-y-1">
                {/* Gradient top bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${group.gradient}`} />

                {/* Hover glow bg */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${group.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none`}
                />

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.gradient} flex items-center justify-center text-lg shadow-lg`}
                    >
                      {group.icon}
                    </div>
                    <h3 className="font-bold text-slate-800 dark:text-white text-sm leading-tight">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skill bars — client component handles animation */}
                  <SkillBars items={group.items} gradient={group.gradient} />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Tech stack pills */}
        <AnimatedSection delay={300}>
          <div className="mt-16 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-bold tracking-widest uppercase">
              Also in my pipeline
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {[
                "AppLovin SDK", "IronSource Mediation", "Meta Audience Network",
                "Unity Ads SDK", "C# Shaders", "WebGL Compression",
                "Spine 2D", "TextMesh Pro", "Unity Addressables", "Mintegral",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white/70 dark:bg-white/5 border border-slate-200/80 dark:border-white/8 text-slate-600 dark:text-slate-300 hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
