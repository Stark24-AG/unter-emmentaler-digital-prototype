interface DemoToastProps {
  message: string;
  onClose: () => void;
}

export function DemoToast({ message, onClose }: DemoToastProps) {
  if (!message) {
    return null;
  }

  return (
    <div
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl border border-ink bg-ink px-5 py-4 text-sm text-white shadow-soft"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start justify-between gap-4">
        <p className="leading-6">{message}</p>
        <button
          type="button"
          className="border border-white/30 px-2 py-1 text-xs font-bold uppercase hover:bg-white hover:text-ink focus:outline-none focus:ring-2 focus:ring-white"
          onClick={onClose}
        >
          Schliessen
        </button>
      </div>
    </div>
  );
}
