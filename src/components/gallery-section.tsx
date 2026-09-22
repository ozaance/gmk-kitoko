import { galerie } from "@/lib/site-content";
import { SlotImage } from "./slot-image";

export function GallerySection() {
  return (
    <section
      id="galerie"
      className="mx-auto flex max-w-[1500px] flex-col gap-[42px] px-[clamp(20px,6vw,96px)] py-[clamp(64px,10vh,140px)]"
    >
      <div className="flex flex-wrap items-end justify-between gap-5">
        <h2 className="m-0 font-serif text-[clamp(30px,4.2vw,58px)] font-normal leading-[1.08]">
          Nos réalisations
        </h2>
        <span className="text-[11px] uppercase tracking-[0.2em] text-ink/62">
          @gmkkitokoparis sur Instagram &amp; TikTok
        </span>
      </div>

      <div className="grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(180px,1fr))]">
        {galerie.map((g) => (
          <div key={g.slotId} className="relative aspect-[3/4] overflow-hidden rounded-gmk">
            <SlotImage src={g.image} alt={g.label} label={g.label} sizes="(min-width: 1024px) 16vw, 33vw" />
          </div>
        ))}
      </div>
    </section>
  );
}
