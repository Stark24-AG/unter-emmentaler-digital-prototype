interface PremiumBadgeProps {
  compact?: boolean;
}

export function PremiumBadge({ compact = false }: PremiumBadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center border border-premium-500 bg-premium-100 font-bold uppercase text-premium-700",
        compact ? "px-2 py-0.5 text-[0.65rem]" : "px-3 py-1 text-xs",
      ].join(" ")}
    >
      Premium
    </span>
  );
}
