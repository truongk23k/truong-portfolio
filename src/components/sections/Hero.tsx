import Image from "next/image";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden pt-16"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 hex-grid dark:opacity-60 opacity-30 pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-10 xl:gap-16 items-center max-w-5xl mx-auto">

            {/* ── LEFT: Photo ── */}
            <div
              className="flex justify-center animate-in"
              style={{ animationDelay: "0.05s" }}
            >
              <div className="relative w-full max-w-[380px]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-20 blur-2xl animate-glow-pulse" />
                <div className="relative rounded-2xl overflow-hidden border border-white/10 dark:border-white/8 shadow-2xl aspect-[3/4]">
                  <Image
                    src="/avatar.jpg"
                    alt="Truong LV"
                    fill
                    className="object-cover object-[center_20%]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/75" />

                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="font-black text-2xl text-white tracking-tight drop-shadow-lg">
                      {personalInfo.name}
                    </div>
                    <div className="text-sm text-emerald-400 font-semibold mt-1">
                      {personalInfo.title}
                    </div>
                  </div>

                  {/* HUD corners */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-emerald-400/60" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-emerald-400/60" />
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-emerald-400/60" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-emerald-400/60" />

                  {/* Available badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-emerald-400 font-bold tracking-wide">Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Info ── */}
            <div
              className="space-y-6 animate-in"
              style={{ animationDelay: "0.1s" }}
            >
              {/* Name + subtitle */}
              <div>
                <h1 className="text-6xl xl:text-7xl font-black tracking-tight leading-none uppercase text-slate-900 dark:text-white mb-3">
                  {personalInfo.name}
                </h1>
                <p className="font-mono text-base tracking-widest text-slate-500 dark:text-slate-400">
                  Playable Ads — Game Developer — Unity
                </p>
              </div>

              {/* Info — open grid, no card wrapper */}
              <div>
                {/* Row 1 */}
                <div className="grid grid-cols-2 gap-x-8 pb-4 border-b border-slate-200/60 dark:border-white/8">
                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/6 border border-slate-200/60 dark:border-white/8 flex items-center justify-center text-slate-500 dark:text-slate-400 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Phone</p>
                      <a href={`tel:${personalInfo.phone}`} className="text-base font-medium text-slate-700 dark:text-slate-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/6 border border-slate-200/60 dark:border-white/8 flex items-center justify-center text-slate-500 dark:text-slate-400 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Location</p>
                      <p className="text-base font-medium text-slate-700 dark:text-slate-200">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-2 gap-x-8 pt-4">
                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/6 border border-slate-200/60 dark:border-white/8 flex items-center justify-center text-slate-500 dark:text-slate-400 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Email</p>
                      <a href={`mailto:${personalInfo.email}`} className="text-base font-medium text-slate-700 dark:text-slate-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors truncate block">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Status</p>
                      <p className="text-base font-semibold text-emerald-600 dark:text-emerald-400">Available for hire</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Me */}
              <div className="rounded-xl border border-slate-200/80 dark:border-white/8 bg-white/50 dark:bg-white/[0.03] backdrop-blur-sm p-5">
                <p className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">
                  About Me
                </p>
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {personalInfo.description}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
