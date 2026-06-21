"use client";

import { useState, useEffect, useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import { featuredPlayables, stats } from "@/lib/data";

const adNetworks = [
  { name: "AppLovin MAX", icon: "/networks/applovin.png"   },
  { name: "IronSource",   icon: "/networks/ironsource.png" },
  { name: "Meta Ads",     icon: "/networks/meta.png"       },
  { name: "TikTok Ads",   icon: "/networks/tiktok.png"     },
  { name: "Unity Ads",    icon: "/networks/unity.png"      },
  { name: "Google Ads",   icon: "/networks/googleads.png"  },
  { name: "Mintegral",    icon: "/networks/mintegral.png"  },
];

function NetworkItem({ n }: { n: (typeof adNetworks)[number] }) {
  return (
    <div className="mx-4 flex flex-col items-center gap-2.5 px-6 py-4 rounded-2xl border border-slate-200/60 dark:border-white/8 bg-white/50 dark:bg-white/[0.03] cursor-default select-none grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 min-w-[130px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={n.icon} alt={n.name} className="max-h-9 max-w-[120px] w-auto h-auto" />
      <span className="text-[0.65rem] font-black uppercase tracking-widest text-slate-600 dark:text-white/70 whitespace-nowrap">
        {n.name}
      </span>
    </div>
  );
}

export default function FeaturedPlayables() {
  const [activePlayUrl, setActivePlayUrl] = useState<string | null>(null);
  const [landscape, setLandscape] = useState(false);
  const [ctaToast, setCtaToast] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.data?.type === "game-cta") {
        setCtaToast(true);
        setTimeout(() => setCtaToast(false), 2500);
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  function handleIframeLoad() {
    const cw = iframeRef.current?.contentWindow;
    if (!cw) return;
    const notify = () => window.postMessage({ type: "game-cta" }, "*");
    cw.open = () => { notify(); return null; };
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mraid = (cw as any).mraid;
      if (mraid?.open) mraid.open = notify;
    } catch {}
  }

  return (
    <section id="playables" className="relative py-20 overflow-hidden">

      <div className="container mx-auto px-6">
        <AnimatedSection>
          <SectionHeader
            label="Showcase"
            title="Playable Ads Showcase"
            description="High-performance interactive ads built with Unity & Luna Playable — optimized for AppLovin, Meta, TikTok, and 5 more networks."
          />
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
        {/* ── Ad Networks Marquee ── */}
        <AnimatedSection delay={50}>
          <div className="relative overflow-hidden mb-14">
            <div className="absolute left-0 inset-y-0 w-16 z-10 bg-gradient-to-r from-slate-50 dark:from-[#060910] to-transparent pointer-events-none" />
            <div className="absolute right-0 inset-y-0 w-16 z-10 bg-gradient-to-l from-slate-50 dark:from-[#060910] to-transparent pointer-events-none" />
            <div className="flex animate-marquee w-max py-2">
              {[...adNetworks, ...adNetworks].map((n, i) => (
                <NetworkItem key={i} n={n} />
              ))}
            </div>
          </div>
        </AnimatedSection>
          {/* Stats */}
          <AnimatedSection delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200/80 dark:border-white/8 bg-white/60 dark:bg-white/[0.04] backdrop-blur-sm px-6 py-6 text-center hover:border-blue-500/30 dark:hover:border-blue-500/25 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="text-4xl font-black text-gradient leading-none mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Card grid */}
          <div className="flex flex-wrap justify-center gap-6">
            {featuredPlayables.map((game, i) => (
              <AnimatedSection
                key={game.id}
                delay={i * 70}
                className="w-full sm:w-[320px] lg:w-[340px]"
              >
                <PlayableCard game={game} onPlay={setActivePlayUrl} />
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
      </div>

      {/* ── Iframe modal ── */}
      {activePlayUrl && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setActivePlayUrl(null)}
        >
          <div className="relative flex items-start" onClick={(e) => e.stopPropagation()}>
            {/* Modal window */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 transition-all duration-300"
              style={landscape
                ? { width: "min(700px, 88vw)", height: "min(390px, 60vh)" }
                : { width: "min(390px, 80vw)", height: "min(700px, 84vh)" }}
            >
              <iframe
                ref={iframeRef}
                src={activePlayUrl}
                className="w-full h-full border-0"
                allow="autoplay"
                onLoad={handleIframeLoad}
              />
              {ctaToast && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl bg-black/80 backdrop-blur-sm border border-white/20 text-white text-xs font-bold tracking-widest uppercase whitespace-nowrap">
                  CTA tapped
                </div>
              )}
            </div>

            {/* Controls — vertical strip outside right edge */}
            <div className="flex flex-col gap-2 ml-2 mt-0">
              <button
                onClick={() => { if (iframeRef.current) iframeRef.current.src = iframeRef.current.src; }}
                className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                title="Replay"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
                </svg>
              </button>
              <button
                onClick={() => setLandscape(l => !l)}
                className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                title="Rotate"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="7" y="3" width="10" height="17" rx="2"/>
                  <circle cx="12" cy="18" r="0.8" fill="currentColor" stroke="none"/>
                  <path d="M19 8 A8.5 8.5 0 0 0 15.5 3.5"/>
                  <polyline points="19,4.5 19,8 15.5,8"/>
                </svg>
              </button>
              <button
                onClick={() => setActivePlayUrl(null)}
                className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                title="Close"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function PlayableCard({
  game,
  onPlay,
}: {
  game: (typeof featuredPlayables)[number];
  onPlay: (url: string) => void;
}) {
  const [activeTask, setActiveTask] = useState(0);
  const currentTask = game.tasks[activeTask];
  const gameThumb = "thumbnailUrl" in game ? (game as { thumbnailUrl: string }).thumbnailUrl : undefined;

  return (
    <div
      className={`group relative flex flex-col rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/8 bg-white/60 dark:bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${game.glowColor} ${game.borderGlow} dark:${game.borderGlow}`}
    >
      {/* ── Cover ── */}
      <div
        className="relative overflow-hidden flex-shrink-0 cursor-pointer"
        style={{ aspectRatio: "4/3" }}
        onClick={() => onPlay(currentTask.playUrl)}
      >
        {/* Thumbnail — CDN as base, local on top (hides itself on error) */}
        {gameThumb ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={gameThumb} alt="" className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${game.gradient}`} />
        )}
        {currentTask.thumbnailUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={currentTask.thumbnailUrl}
            src={currentTask.thumbnailUrl}
            alt=""
            onError={(e) => { e.currentTarget.style.display = "none"; }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/25" />

        {/* Game icon — fades & shrinks on hover */}
        {"iconUrl" in game && game.iconUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={game.iconUrl as string}
            alt={game.gameName}
            className="absolute inset-0 m-auto w-24 h-24 rounded-2xl shadow-2xl border-2 border-white/20 group-hover:scale-75 group-hover:opacity-30 transition-all duration-300"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-[72px] group-hover:scale-75 group-hover:opacity-30 transition-all duration-300 filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
            {game.icon}
          </span>
        )}

        {/* Hover overlay + play button */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border-2 border-white/70 bg-white/15 backdrop-blur-sm flex items-center justify-center shadow-2xl play-btn-pulse">
            <svg
              className="w-9 h-9 text-white ml-1.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Task badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="game-badge bg-black/50 text-white border border-white/25 backdrop-blur-sm">
            {currentTask.name}
          </span>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 p-5">
        {/* Badges */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="game-badge bg-slate-200/80 dark:bg-white/8 text-slate-600 dark:text-slate-300 border border-slate-300/60 dark:border-white/10">
            {game.genre}
          </span>
          <span className="flex items-center gap-1 px-2 py-0.5 rounded text-[0.65rem] font-bold tracking-wider uppercase bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
            🌙 {game.engine}
          </span>
        </div>

        {/* Game name */}
        <h3 className="text-xl font-black text-slate-800 dark:text-white mb-1.5 tracking-tight group-hover:text-gradient transition-all duration-300 leading-tight">
          {game.gameName}
        </h3>

        {/* Description */}
        {"description" in game && game.description && (
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
            {game.description as string}
          </p>
        )}

        {/* Task selector */}
        <div className="mb-4">
          <div
            className="grid gap-1.5"
            style={{ gridTemplateColumns: `repeat(${game.tasks.length}, 1fr)` }}
          >
            {game.tasks.map((task, idx) => (
              <button
                key={task.name}
                onClick={() => setActiveTask(idx)}
                className={`py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all duration-200 text-center ${
                  activeTask === idx
                    ? "bg-indigo-500 text-white shadow-sm shadow-indigo-500/30"
                    : "bg-slate-100 dark:bg-white/6 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200/80 dark:border-white/10"
                }`}
              >
                {task.name}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
