import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import { personalInfo, stats } from "@/lib/data";

const highlights = [
  "50+ playable ads shipped across hyper-casual, mid-core & casino genres",
  "Unity WebGL specialist — C#, shaders, physics, 60fps delivery",
  "HTML5 expert: PixiJS, GSAP, Canvas — sub-5MB optimized builds",
  "Works directly with UA teams to iterate on CTR and IPM data",
];

const adNetworks = [
  "AppLovin MAX",
  "IronSource",
  "Meta Ads",
  "TikTok for Business",
  "Unity Ads",
  "Google UAC",
  "Mintegral",
  "Vungle",
];

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <SectionHeader
            label="About"
            title="The Dev Behind the Ads"
            description="Transforming game mechanics into interactive ads that convert — built in Unity and HTML5, shipped across 7+ ad networks."
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">
          {/* ── Left: Avatar card ── */}
          <AnimatedSection delay={100}>
            <div className="relative flex justify-center">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-20 blur-2xl animate-glow-pulse" />

              <div className="relative w-full max-w-sm">
                <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/50 dark:bg-white/4 backdrop-blur-xl shadow-2xl">
                  {/* Avatar — real photo */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src="/avatar.jpg"
                      alt="Truong LV"
                      fill
                      className="object-cover object-[center_20%]"
                      priority
                    />
                    {/* Top overlay — soften busy event background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/40" />

                    {/* HUD corners */}
                    <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-emerald-400/60" />
                    <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-emerald-400/60" />
                    <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-emerald-400/60" />
                    <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-emerald-400/60" />
                  </div>

                  {/* Card footer */}
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <div className="font-black text-slate-800 dark:text-white">
                        {personalInfo.name}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {personalInfo.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/25">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                        Available
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </AnimatedSection>

          {/* ── Right: Text content ── */}
          <AnimatedSection delay={200}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white leading-snug">
                I make players{" "}
                <span className="text-gradient">tap before they install</span>
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                Playable ads live and die by their first 5 seconds. I design
                game mechanics that hook immediately, teach the core loop fast,
                and drive installs — all inside a 5MB zip file.
              </p>

              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                My stack covers the full pipeline: Unity C# for rich 3D
                experiences, PixiJS + GSAP for lightweight HTML5 builds, and
                deep familiarity with every major ad network SDK. I work closely
                with UA teams to iterate on performance data — CTR, IPM, D1
                retention — and ship new variations fast.
              </p>

              {/* Highlights */}
              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Stats mini grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-2xl bg-white/60 dark:bg-white/4 border border-slate-200/80 dark:border-white/8 backdrop-blur-sm"
                  >
                    <div className="text-2xl font-black text-gradient">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Ad network pills */}
              <div>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest mb-3">
                  Ad Networks I&apos;ve Shipped On
                </p>
                <div className="flex flex-wrap gap-2">
                  {adNetworks.map((n) => (
                    <span
                      key={n}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-white/6 border border-slate-200/80 dark:border-white/8 text-slate-600 dark:text-slate-300"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
