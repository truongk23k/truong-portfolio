interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      {/* Label pill with lines */}
      <div className="inline-flex items-center gap-4 mb-6">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-indigo-500/60 hidden sm:block" />
        <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.18em] uppercase text-indigo-500 dark:text-indigo-400 border border-indigo-500/30 dark:border-indigo-400/25 bg-indigo-500/5 dark:bg-indigo-400/5">
          {label}
        </span>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-indigo-500/60 hidden sm:block" />
      </div>

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight text-slate-800 dark:text-white">
        {title}
      </h2>

      {description && (
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
