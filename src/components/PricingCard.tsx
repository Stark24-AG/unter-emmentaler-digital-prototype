interface PricingCardProps {
  title: string;
  price: string;
  label?: string;
  features: string[];
  buttonLabel: string;
  emphasized?: boolean;
  onClick: () => void;
}

export function PricingCard({
  title,
  price,
  label,
  features,
  buttonLabel,
  emphasized = false,
  onClick,
}: PricingCardProps) {
  return (
    <article
      className={[
        "border bg-white p-6",
        emphasized ? "border-brand-700 shadow-soft" : "border-line",
      ].join(" ")}
    >
      {label ? (
        <span className="inline-flex border border-premium-500 bg-premium-100 px-3 py-1 text-xs font-bold uppercase text-premium-700">
          {label}
        </span>
      ) : null}
      <h2 className="mt-4 font-serif text-2xl font-bold text-ink">{title}</h2>
      <p className="mt-3 text-3xl font-extrabold text-brand-700">{price}</p>
      <ul className="mt-6 grid gap-3 text-sm leading-6 text-ink/75">
        {features.map((feature) => (
          <li className="border-l-4 border-line pl-3" key={feature}>
            {feature}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={`btn mt-7 w-full justify-center ${emphasized ? "btn-primary" : "btn-secondary"}`}
        onClick={onClick}
      >
        {buttonLabel}
      </button>
    </article>
  );
}
