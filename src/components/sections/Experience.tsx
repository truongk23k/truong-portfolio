import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 overflow-hidden">

      <div className="container mx-auto px-6">
        <AnimatedSection>
          <SectionHeader
            label="Career"
            title="Game Industry Timeline"
            description="From junior game dev to leading playable ad campaigns for top mobile publishers."
          />
        </AnimatedSection>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px timeline-line md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isEven = i % 2 === 0;
              return (
                <AnimatedSection key={exp.id} delay={i * 120}>
                  <div
                    className={`relative flex items-start gap-0 md:gap-8 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Desktop: spacer half */}
                    <div className="hidden md:block flex-1" />

                    {/* Timeline node — centered on the line */}
                    <div className="relative z-10 flex-shrink-0 mt-6">
                      <div
                        className={`w-4 h-4 rounded-full border-2 border-white dark:border-[#080c1a] shadow-lg ml-6 md:ml-0 ${
                          exp.current
                            ? "bg-gradient-to-br from-blue-500 to-purple-500 shadow-blue-500/40"
                            : "bg-slate-400 dark:bg-slate-600"
                        }`}
                      />
                    </div>

                    {/* Card */}
                    <div className="flex-1 ml-10 md:ml-0">
                      <div className="group relative rounded-3xl bg-white/60 dark:bg-white/4 border border-slate-200/80 dark:border-white/8 backdrop-blur-xl p-6 hover:border-blue-500/30 dark:hover:border-blue-500/25 hover:shadow-xl hover:shadow-blue-500/8 transition-all duration-400 hover:-translate-y-1">
                        {/* Hover glow */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/3 to-purple-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

                        {/* Period badge */}
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div className="flex-1">
                            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1">
                              {exp.period}
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 dark:text-white leading-tight">
                              {exp.role}
                            </h3>
                            <div className="text-sm font-medium text-gradient mt-0.5">
                              {exp.company}
                            </div>
                          </div>
                          {exp.current && (
                            <span className="flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                              Current
                            </span>
                          )}
                        </div>

                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-white/6 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-white/8"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
