import { CATEGORY_CONFIG } from "@/lib/constants";
import type { Category } from "@/types/flashcard";

interface CategoryBadgeProps {
  category: Category;
}

export function CategoryBadge({ category }: CategoryBadgeProps) {
  const config = CATEGORY_CONFIG[category];
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${config.bgColor} ${config.color}`}
    >
      <Icon size={14} />
      {config.label}
    </span>
  );
}
