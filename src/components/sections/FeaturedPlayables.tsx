"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import { featuredPlayables } from "@/lib/data";

export default function FeaturedPlayables() {
  return (
    <section id="playables" className="relative py-28 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] rounded-full bg-emerald-500/6 dark:bg-emerald-500/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/6 w-[500px] h-[500px] rounded-full bg-violet-500/6 dark:bg-violet-500/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6">
        <AnimatedSection>
          <SectionHeader
            label="Interactive Showcase"
            title="Featured Playables"
            description="Tap a card to launch the demo. Built for AppLovin, IronSource, Meta, and TikTok networks."
          />
        </AnimatedSection>

        {/* Card grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {featuredPlayables.map((game, i) => (
            <AnimatedSection key={game.id} delay={i * 70} className="w-full sm:w-[340px] lg:w-[360px]">
              <PlayableCard game={game} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <div className="mt-14 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              All demos are production-ready builds delivered at sub-5MB.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function PlayableCard({
  game,
}: {
  game: (typeof featuredPlayables)[number];
}) {
  const [activeTask, setActiveTask] = useState(0);
  const currentTask = game.tasks[activeTask];

  return (
    <div
      className={`group relative flex flex-col rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/8 bg-white/60 dark:bg-white/[0.03] backdrop-blur-sm transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl ${game.glowColor} ${game.borderGlow} dark:${game.borderGlow}`}
    >
      {/* ── Thumbnail ── */}
      <div className="relative h-56 overflow-hidden flex-shrink-0">
        {"thumbnailUrl" in game && game.thumbnailUrl ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={game.thumbnailUrl as string}
              alt=""
              className="absolute inset-0 w-full h-full object-cover scale-110 blur-sm opacity-80"
            />
            <div className="absolute inset-0 bg-black/40" />
          </>
        ) : (
          <>
            <div className={`absolute inset-0 bg-gradient-to-br ${game.gradient}`} />
            <div className="absolute inset-0 scan-lines opacity-30" />
          </>
        )}

        {/* Top bar: active task badge */}
        <div className="absolute top-0 inset-x-0 flex items-center px-4 pt-3 pb-2 bg-gradient-to-b from-black/60 to-transparent">
          <span className="game-badge bg-white/20 text-white border border-white/30 backdrop-blur-sm">
            {currentTask.name}
          </span>
        </div>

        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          {"iconUrl" in game && game.iconUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={game.iconUrl as string}
              alt={game.gameName}
              className="w-24 h-24 rounded-2xl shadow-2xl border-2 border-white/20 group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <span className="text-[80px] leading-none filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] group-hover:scale-110 transition-transform duration-500">
              {game.icon}
            </span>
          )}
        </div>
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col flex-1 p-5">
        {/* Genre + Engine */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="game-badge bg-slate-200/80 dark:bg-white/8 text-slate-600 dark:text-slate-300 border border-slate-300/60 dark:border-white/10">
            {game.genre}
          </span>
          <span className="flex items-center gap-1 px-2 py-0.5 rounded text-[0.65rem] font-bold tracking-wider uppercase bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
            🌙 {game.engine}
          </span>
        </div>

        {/* Game title */}
        <h3 className="text-xl font-black text-slate-800 dark:text-white mb-3 tracking-tight group-hover:text-gradient transition-all duration-300 leading-tight">
          {game.gameName}
        </h3>

        {/* Task selector */}
        <div className="flex flex-wrap gap-2 mb-4">
          {game.tasks.map((task, idx) => (
            <button
              key={task.name}
              onClick={() => setActiveTask(idx)}
              className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide transition-all duration-200 ${
                activeTask === idx
                  ? "bg-indigo-500 text-white shadow-sm shadow-indigo-500/30"
                  : "bg-slate-100 dark:bg-white/6 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200/80 dark:border-white/10"
              }`}
            >
              {task.name}
            </button>
          ))}
        </div>

        {/* Action buttons */}
        <div className="mt-auto space-y-2">
          <a
            href={currentTask.playUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-black tracking-wider uppercase shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-100 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Play Demo
          </a>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={game.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-100 dark:bg-white/6 border border-slate-200/80 dark:border-white/10 text-slate-600 dark:text-slate-300 text-xs font-semibold hover:bg-slate-200 dark:hover:bg-white/10 hover:scale-[1.02] transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76a2.5 2.5 0 0 0 2.61-.26l13.15-7.59-3.03-3.03zM.75 1.12A2.5 2.5 0 0 0 0 3v18a2.5 2.5 0 0 0 .75 1.88l.1.09 10.08-10.08v-.24zM23.25 10.54l-2.92-1.69-3.27 3.27 3.27 3.27 2.94-1.7a2.5 2.5 0 0 0 0-4.15zm-20.07 9.5 11.38-11.37-3.03-3.04L2.78 1.38A2.5 2.5 0 0 0 .85 2.5z"/>
              </svg>
              Google Play
            </a>
            <a
              href={game.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-100 dark:bg-white/6 border border-slate-200/80 dark:border-white/10 text-slate-600 dark:text-slate-300 text-xs font-semibold hover:bg-slate-200 dark:hover:bg-white/10 hover:scale-[1.02] transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.19 1.28-2.17 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.77M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
