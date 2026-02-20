"use client";

import { CATEGORIES, CATEGORY_CONFIG } from "@/lib/constants";
import { useFlashcard } from "@/context/FlashcardContext";

export function CategoryFilter() {
  const { state, setCategory } = useFlashcard();

  return (
    <div className="scrollbar-hide flex gap-2 overflow-x-auto px-5 pt-5 pb-4">
      <FilterButton
        label="전체"
        isActive={state.selectedCategory === "all"}
        onClick={() => setCategory("all")}
      />
      {CATEGORIES.map((cat) => {
        const config = CATEGORY_CONFIG[cat];
        const Icon = config.icon;
        return (
          <FilterButton
            key={cat}
            label={config.label}
            icon={<Icon size={14} />}
            isActive={state.selectedCategory === cat}
            onClick={() => setCategory(cat)}
          />
        );
      })}
    </div>
  );
}

interface FilterButtonProps {
  label: string;
  icon?: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

function FilterButton({ label, icon, isActive, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all ${
        isActive
          ? "border-neutral-900 bg-neutral-900 text-white shadow-sm dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900"
          : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:bg-neutral-700"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
