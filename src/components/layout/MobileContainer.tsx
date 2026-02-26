export function MobileContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto flex min-h-dvh w-full max-w-md flex-col overflow-hidden bg-white shadow-lg sm:my-6 sm:min-h-0 sm:max-w-xl sm:rounded-2xl sm:border sm:border-neutral-200 sm:shadow-xl lg:max-w-2xl dark:bg-neutral-900 dark:sm:border-neutral-800 dark:sm:shadow-2xl dark:sm:shadow-black/20">
      {children}
    </div>
  );
}
