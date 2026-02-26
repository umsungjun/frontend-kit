"use client";

import { Trash2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
  variant?: "danger" | "default";
}

export function ConfirmDialog({
  isOpen,
  title,
  description,
  confirmLabel = "확인",
  cancelLabel = "취소",
  onConfirm,
  onCancel,
  variant = "danger",
}: ConfirmDialogProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="absolute inset-0 z-[60] flex items-end justify-center bg-black/50 pb-4 backdrop-blur-sm sm:items-center sm:pb-0 sm:p-6"
          onClick={onCancel}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="w-full max-w-sm rounded-t-3xl bg-white px-6 pb-8 pt-6 shadow-2xl dark:bg-neutral-900 sm:rounded-3xl sm:pb-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 드래그 핸들 (모바일) */}
            <div className="mb-5 flex justify-center sm:hidden">
              <div className="h-1 w-10 rounded-full bg-neutral-200 dark:bg-neutral-700" />
            </div>

            {/* 아이콘 */}
            <div className="mb-4 flex justify-center">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                  variant === "danger"
                    ? "bg-red-100 dark:bg-red-950/50"
                    : "bg-neutral-100 dark:bg-neutral-800"
                }`}
              >
                <Trash2
                  size={24}
                  className={
                    variant === "danger"
                      ? "text-red-500"
                      : "text-neutral-600 dark:text-neutral-400"
                  }
                />
              </div>
            </div>

            {/* 텍스트 */}
            <p className="text-center text-base font-semibold text-neutral-900 dark:text-neutral-100">
              {title}
            </p>
            {description && (
              <p className="mt-2 text-center text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                {description}
              </p>
            )}

            {/* 버튼 */}
            <div className="mt-6 flex flex-col gap-2.5">
              <button
                onClick={onConfirm}
                className={`w-full cursor-pointer rounded-2xl py-3.5 text-sm font-semibold text-white transition-all active:scale-[0.98] ${
                  variant === "danger"
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900"
                }`}
              >
                {confirmLabel}
              </button>
              <button
                onClick={onCancel}
                className="w-full cursor-pointer rounded-2xl border border-neutral-200 py-3.5 text-sm font-medium text-neutral-600 transition-all hover:bg-neutral-50 active:scale-[0.98] dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800"
              >
                {cancelLabel}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
