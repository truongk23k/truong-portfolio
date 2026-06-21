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
