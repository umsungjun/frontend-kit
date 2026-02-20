"use client";

import { CATEGORIES, CATEGORY_CONFIG } from "@/lib/constants";
import { useFlashcard } from "@/context/FlashcardContext";

export function CategoryFilter() {
  const { state, setCategory } = useFlashcard();

  return (
    <div className="scrollbar-hide flex gap-2 overflow-x-auto px-4 py-2">
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
      className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
        isActive
          ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
