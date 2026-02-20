"use client";

import { Settings } from "lucide-react";

interface HeaderProps {
  onSettingsToggle: () => void;
  isSettingsOpen: boolean;
}

export function Header({ onSettingsToggle, isSettingsOpen }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 py-3">
      <h1 className="text-lg font-bold tracking-tight">Frontend Kit</h1>
      <button
        onClick={onSettingsToggle}
        className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
          isSettingsOpen
            ? "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100"
            : "text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
        }`}
        aria-label="설정"
      >
        <Settings size={20} />
      </button>
    </header>
  );
}
