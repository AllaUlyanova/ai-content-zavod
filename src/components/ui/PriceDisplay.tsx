interface PriceDisplayProps {
  oldPrice?: number;
  newPrice: number | string;
  currency?: string;
  note?: string;
  size?: "sm" | "md" | "lg";
  light?: boolean;
}

export function PriceDisplay({
  oldPrice,
  newPrice,
  currency = "₽",
  note,
  size = "md",
  light = false,
}: PriceDisplayProps) {
  const formattedNew =
    typeof newPrice === "number"
      ? `${newPrice.toLocaleString("ru-RU")} ${currency}`
      : newPrice;

  const sizeStyles = {
    sm: { old: "text-sm", new: "text-xl", note: "text-xs" },
    md: { old: "text-base", new: "text-3xl", note: "text-sm" },
    lg: { old: "text-lg", new: "text-4xl md:text-5xl", note: "text-sm" },
  };

  const styles = sizeStyles[size];

  return (
    <div className="flex flex-col gap-1">
      {oldPrice && (
        <span
          className={`${styles.old} line-through ${
            light ? "text-graphite-400" : "text-graphite-400"
          }`}
        >
          {oldPrice.toLocaleString("ru-RU")} {currency}
        </span>
      )}
      <span
        className={`${styles.new} font-bold tracking-tight ${
          light ? "text-white" : "text-graphite-950"
        }`}
      >
        {formattedNew}
      </span>
      {note && (
        <span
          className={`${styles.note} ${light ? "text-graphite-400" : "text-graphite-500"}`}
        >
          {note}
        </span>
      )}
    </div>
  );
}
