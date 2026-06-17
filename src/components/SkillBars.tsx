"use client";

import { useRef, useEffect } from "react";

interface SkillItem {
  name: string;
  level: number;
}

interface SkillBarsProps {
  items: SkillItem[];
  gradient: string;
}

export default function SkillBars({ items, gradient }: SkillBarsProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const bars = container.querySelectorAll<HTMLElement>(".skill-fill");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bars.forEach((bar, i) => {
            setTimeout(() => bar.classList.add("active"), i * 120);
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-4">
      {items.map((skill) => (
        <div key={skill.name}>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
              {skill.name}
            </span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {skill.level}%
            </span>
          </div>
          <div className="progress-bar">
            <div
              className={`skill-fill progress-fill bg-gradient-to-r ${gradient}`}
              style={
                { "--scale-target": skill.level / 100 } as React.CSSProperties
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
}
