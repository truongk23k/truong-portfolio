"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { gameDevProjects, gamingAwards } from "@/lib/data";

export default function Games() {
  return (
    <section id="games" className="relative py-20 overflow-hidden">

      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
              Game Development
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
              Beyond the 30-second loop — personal projects, game jams, and the mechanics
              I build for fun, not conversion rates.
            </p>
          </div>
        </AnimatedSection>

        {/* Awards & Achievements */}
        {gamingAwards.length > 0 && (
          <AnimatedSection delay={100}>
            <div className="mb-16">
              <h3 className="text-lg font-black text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                <span>🏆</span> Awards &amp; Achievements
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {gamingAwards.map((award) => (
                  <AwardCard key={award.id} award={award} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Game project banner cards */}
        {gameDevProjects.length > 0 ? (
          <AnimatedSection delay={150}>
            <h3 className="text-lg font-black text-slate-800 dark:text-white mb-6 flex items-center gap-2">
              <span>🎮</span> Projects
            </h3>
          </AnimatedSection>
        ) : null}
        {gameDevProjects.length > 0 ? (
          <div className="space-y-4">
            {gameDevProjects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 80}>
                <GameBannerCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <AnimatedSection delay={200}>
            <div className="rounded-2xl border border-slate-200/80 dark:border-white/8 bg-white/60 dark:bg-white/[0.03] p-12 text-center">
              <p className="text-slate-500 text-sm">Game projects coming soon...</p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}

function AwardCard({
  award,
}: {
  award: (typeof gamingAwards)[number];
}) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/8 bg-white/60 dark:bg-white/[0.03] group">
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={award.imageUrl}
          alt={award.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <h4 className="text-lg font-black text-slate-900 dark:text-white mb-1.5 leading-tight">{award.title}</h4>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1">{award.description}</p>

        {award.checkoutUrl && (
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/8">
            <a
              href={award.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/8 hover:bg-slate-200 dark:hover:bg-white/12 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white text-xs font-bold tracking-wide transition-colors"
            >
              Checkout
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

function GameBannerCard({
  project,
}: {
  project: (typeof gameDevProjects)[number];
}) {
  return (
    <div className="relative rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-1 hover:shadow-2xl transition-all duration-300" style={{ minHeight: "220px" }}>
      {/* Background */}
      {project.backgroundUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.backgroundUrl}
          alt=""
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900" />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />

      {/* Content */}
      <div className="relative flex items-center justify-between h-full p-8 min-h-[220px]">
        {/* Left */}
        <div className="flex-1 max-w-lg">
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <h4 className="text-3xl md:text-4xl font-black uppercase text-white tracking-tight leading-none">
              {project.title}
            </h4>
            <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
              {project.status}
            </span>
          </div>
          <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
            {project.description}
          </p>
          <a
            href={project.playUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-white/90 transition-colors"
          >
            Play Now
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>

        {/* Right: artwork */}
        {project.artworkUrl && (
          <div className="hidden sm:block flex-shrink-0 ml-6 group/icon">
            <div className="rounded-2xl overflow-hidden border border-white/15 h-36 group-hover/icon:border-white/40 transition-colors duration-300">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.artworkUrl}
                alt={project.title}
                className="h-full w-auto object-cover group-hover/icon:scale-110 group-hover/icon:rotate-2 group-hover/icon:brightness-110 transition-all duration-400"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
