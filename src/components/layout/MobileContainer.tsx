export function MobileContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-dvh max-w-md flex-col bg-white shadow-lg dark:bg-gray-900">
      {children}
    </div>
  );
}
