"use client";

import { AnimatePresence, motion } from "motion/react";

import type { FontSizeKey } from "@/lib/constants";

import { FontSizeControl } from "../ui/FontSizeControl";
import { ThemeToggle } from "../ui/ThemeToggle";

interface SettingsPanelProps {
  isOpen: boolean;
  fontSize: FontSizeKey;
  onFontSizeChange: (size: FontSizeKey) => void;
}

export function SettingsPanel({
  isOpen,
  fontSize,
  onFontSizeChange,
}: SettingsPanelProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                글자 크기
              </span>
              <FontSizeControl
                fontSize={fontSize}
                onChange={onFontSizeChange}
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                테마
              </span>
              <ThemeToggle />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
