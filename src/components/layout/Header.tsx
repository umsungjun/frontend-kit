"use client";

import { Settings } from "lucide-react";

interface HeaderProps {
  onSettingsToggle: () => void;
  isSettingsOpen: boolean;
}

export function Header({ onSettingsToggle, isSettingsOpen }: HeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-neutral-100 px-5 py-4 dark:border-neutral-800">
      <h1 className="text-lg font-bold tracking-tight">Frontend Kit</h1>
      <button
        onClick={onSettingsToggle}
        className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors ${
          isSettingsOpen
            ? "bg-neutral-200 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100"
            : "text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
        }`}
        aria-label="설정"
      >
        <Settings size={20} />
      </button>
    </header>
  );
}
