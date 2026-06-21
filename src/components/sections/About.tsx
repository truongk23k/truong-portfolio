import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import { personalInfo, stats } from "@/lib/data";

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

const infoRows = [
  {
    label: "Name",
    value: personalInfo.name,
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    label: "Role",
    value: personalInfo.title,
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  },
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    label: "Location",
    value: personalInfo.location,
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <SectionHeader
            label="About"
            title="The Dev Behind the Ads"
            description="Transforming game mechanics into interactive ads that convert — built in Unity and HTML5, shipped across 7+ ad networks."
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-14 items-start max-w-5xl mx-auto">
          {/* ── Left: Avatar card ── */}
          <AnimatedSection delay={100}>
            <div className="relative flex justify-center">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-20 blur-2xl animate-glow-pulse" />

              <div className="relative w-full max-w-sm">
                <div className="rounded-3xl overflow-hidden border border-white/10 dark:border-white/8 bg-white/50 dark:bg-white/4 backdrop-blur-xl shadow-2xl">

                  {/* Photo */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src="/avatar.jpg"
                      alt="Truong LV"
                      fill
                      className="object-cover object-[center_20%]"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/75" />

                    {/* Name / title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="font-black text-xl text-white tracking-tight">
                        {personalInfo.name}
                      </div>
                      <div className="text-sm text-emerald-400 font-semibold mt-0.5">
                        {personalInfo.title}
                      </div>
                    </div>

                    {/* HUD corners */}
                    <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-emerald-400/60" />
                    <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-emerald-400/60" />
                    <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-emerald-400/60" />
                    <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-emerald-400/60" />

                    {/* Available badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs text-emerald-400 font-bold">Available</span>
                    </div>
                  </div>

                  {/* Stats 2×2 grid */}
                  <div className="grid grid-cols-2">
                    {stats.map((stat, i) => (
                      <div
                        key={stat.label}
                        className={[
                          "p-4 text-center",
                          i % 2 === 1 ? "border-l border-slate-200/80 dark:border-white/6" : "",
                          i >= 2 ? "border-t border-slate-200/80 dark:border-white/6" : "",
                        ].join(" ")}
                      >
                        <div className="text-xl font-black text-gradient">{stat.value}</div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Right: Info ── */}
          <AnimatedSection delay={200}>
            <div className="space-y-7">

              {/* Headline */}
              <div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white leading-snug mb-3">
                  I make players{" "}
                  <span className="text-gradient">tap before they install</span>
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                  Playable ads live and die by their first 5 seconds. I design game
                  mechanics that hook immediately, teach the core loop fast, and drive
                  installs — all inside a 5MB zip file.
                </p>
              </div>

              {/* Info table */}
              <div className="rounded-2xl border border-slate-200/80 dark:border-white/8 overflow-hidden bg-white/60 dark:bg-white/[0.03] backdrop-blur-sm">
                {infoRows.map((row, i) => (
                  <div
                    key={row.label}
                    className={[
                      "flex items-center gap-4 px-5 py-3.5",
                      i < infoRows.length - 1
                        ? "border-b border-slate-100 dark:border-white/5"
                        : "",
                    ].join(" ")}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/6 border border-slate-200/60 dark:border-white/8 flex items-center justify-center text-slate-500 dark:text-slate-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={row.icon} />
                      </svg>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 w-14 flex-shrink-0">
                      {row.label}
                    </span>
                    {"href" in row ? (
                      <a
                        href={row.href}
                        className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors truncate"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-200 truncate">
                        {row.value}
                      </span>
                    )}
                  </div>
                ))}

                {/* Status row */}
                <div className="flex items-center gap-4 px-5 py-3.5 bg-emerald-500/[0.04] border-t border-emerald-500/10">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 w-14 flex-shrink-0">
                    Status
                  </span>
                  <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    Available for hire
                  </span>
                </div>
              </div>

              {/* Ad networks */}
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
