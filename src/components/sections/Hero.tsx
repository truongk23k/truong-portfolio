import { personalInfo, stats } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* ── Deep game-studio background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dark base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-[#060910] dark:via-[#080c1a] dark:to-[#0d0a1a]" />

        {/* Ambient orbs — more saturated, game-y */}
        <div className="absolute top-1/5 left-[10%] w-[600px] h-[600px] rounded-full bg-blue-600/20 dark:bg-blue-600/12 blur-[130px] animate-float" />
        <div
          className="absolute bottom-1/5 right-[10%] w-[600px] h-[600px] rounded-full bg-violet-600/20 dark:bg-violet-600/12 blur-[130px] animate-float"
          style={{ animationDelay: "-3.5s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-emerald-400/15 dark:bg-emerald-400/8 blur-[80px] animate-glow-pulse"
          style={{ animationDelay: "-2s" }}
        />
      </div>

      {/* ── Hex grid overlay ── */}
      <div className="absolute inset-0 hex-grid dark:opacity-60 opacity-30 pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm font-bold mb-10 animate-in tracking-wide"
          style={{ animationDelay: "0s" }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          AVAILABLE FOR NEW PROJECTS
        </div>

        {/* Name — large, game-studio display font */}
        <h1
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-4 animate-in leading-none"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="block text-slate-800 dark:text-white uppercase">
            {personalInfo.name}
          </span>
        </h1>

        {/* Roles on one line */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-6 animate-in"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-blue-500/40 dark:border-blue-400/30 bg-blue-500/8 text-blue-700 dark:text-blue-300 text-lg font-bold tracking-wide">
            🎮 Playable Ads Developer
          </span>
          <span className="hidden sm:block text-slate-400 dark:text-slate-600 text-xl font-light">
            ×
          </span>
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-purple-500/40 dark:border-purple-400/30 bg-purple-500/8 text-purple-700 dark:text-purple-300 text-lg font-bold tracking-wide">
            ⚡ Unity Developer
          </span>
        </div>

        {/* Tagline */}
        <p
          className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-12 animate-in"
          style={{ animationDelay: "0.3s" }}
        >
          {personalInfo.description}
        </p>

        {/* CTAs — game-studio style */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-in"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#playables"
            className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-black text-lg uppercase tracking-wider shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-100 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Play Demo Ads
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-4 rounded-xl bg-white/50 dark:bg-white/6 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-bold text-lg hover:bg-white/80 dark:hover:bg-white/12 hover:border-blue-500/50 hover:scale-105 active:scale-100 transition-all duration-300 backdrop-blur-sm"
          >
            Get In Touch
          </a>
        </div>

        {/* Stats — game metrics */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto animate-in"
          style={{ animationDelay: "0.5s" }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-2xl bg-white/50 dark:bg-white/4 border border-slate-200/80 dark:border-white/8 backdrop-blur-sm p-5 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="text-3xl font-black text-gradient leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 animate-bounce">
        <span className="text-[9px] uppercase tracking-[0.3em] font-bold">
          Explore
        </span>
        <div className="w-5 h-8 rounded-full border border-slate-300 dark:border-slate-600 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-slate-400 dark:bg-slate-500 animate-bounce" />
        </div>
      </div>

    </section>
  );
}
