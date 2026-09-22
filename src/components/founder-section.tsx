import { founder } from "@/lib/site-content";
import { SlotImage } from "./slot-image";

export function FounderSection() {
  return (
    <section id="apropos" className="bg-ink/[0.035] px-[clamp(20px,6vw,96px)] py-[clamp(64px,10vh,140px)]">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-[clamp(32px,6vw,88px)] sm:[grid-template-columns:repeat(auto-fit,minmax(290px,1fr))]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-gmk">
          <SlotImage
            src={founder.image}
            alt="Portrait de la fondatrice de GMK Kitoko Paris"
            label="Portrait de la fondatrice"
            sizes="(min-width: 1024px) 45vw, 90vw"
          />
        </div>
        <div className="flex flex-col gap-[22px]">
          <span className="text-[11px] uppercase tracking-[0.3em] text-accent">
            {founder.eyebrow}
          </span>
          <h2 className="m-0 font-serif text-[clamp(28px,3.8vw,52px)] font-normal leading-[1.1]">
            {founder.title}
          </h2>
          <p className="m-0 max-w-[52ch] text-pretty text-[15px] leading-[1.85] text-ink/62">
            {founder.text}
          </p>
          <a
            href="#apropos"
            className="self-start border-b border-accent pb-1.5 text-[11px] uppercase tracking-[0.2em]"
          >
            {founder.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
