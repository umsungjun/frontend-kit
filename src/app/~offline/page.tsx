export default function OfflinePage() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-white px-4 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="mb-2 text-2xl font-bold">오프라인 상태입니다</h1>
        <p className="text-gray-500 dark:text-gray-400">
          인터넷 연결을 확인한 후 다시 시도해주세요.
        </p>
      </div>
    </div>
  );
}
