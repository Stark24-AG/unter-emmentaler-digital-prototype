import type { ReactNode } from "react";

interface DemoNoticeProps {
  children: ReactNode;
  tone?: "neutral" | "warning";
}

export function DemoNotice({ children, tone = "neutral" }: DemoNoticeProps) {
  const styles =
    tone === "warning"
      ? "border-premium-500 bg-premium-100 text-premium-700"
      : "border-line bg-white text-ink";

  return (
    <div className={`border px-4 py-3 text-sm leading-6 ${styles}`}>
      {children}
    </div>
  );
}
