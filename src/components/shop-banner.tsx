import { marqueeItems } from "@/lib/site-content";

export function ShopBanner() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="flex overflow-hidden bg-accent text-bg">
      <div className="flex flex-none animate-[gmk-marquee_26s_linear_infinite] gap-12 whitespace-nowrap px-6 py-3.5 text-[11px] uppercase tracking-[0.26em]">
        {items.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
