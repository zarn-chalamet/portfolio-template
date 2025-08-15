export function SkillBar({ name, level, icon }) {
  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/10 p-4 bg-white dark:bg-neutral-900">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium">
          {icon} {name}
        </div>
        <span className="text-xs text-neutral-500 dark:text-neutral-400">{level}%</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}