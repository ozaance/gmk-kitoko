import { siteCopy } from "@/lib/site-content";

export function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative flex h-screen min-h-[520px] flex-col justify-end overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/gmk-hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.95)_0%,rgba(10,10,10,0.55)_45%,rgba(10,10,10,0.35)_100%)]" />

      <div className="relative mx-auto flex w-full max-w-[1500px] animate-[gmk-fade_1.1s_ease_both] flex-col items-start gap-[26px] px-[clamp(20px,6vw,96px)] pb-[clamp(56px,9vh,110px)] text-left">
        <span className="text-[11px] uppercase tracking-[0.34em] text-accent">
          {siteCopy.heroEyebrow}
        </span>

        <h1 className="m-0 max-w-[15ch] text-pretty font-serif text-[clamp(38px,6.4vw,92px)] font-normal leading-[1.02] text-ink">
          {siteCopy.slogan}
        </h1>

        <div className="flex flex-wrap gap-3.5">
          <a
            href="#reservation"
            className="rounded-gmk bg-accent px-[34px] py-[18px] text-[11px] uppercase tracking-[0.22em] text-bg transition-opacity hover:opacity-[0.85]"
          >
            {siteCopy.ctaPrimary}
          </a>
          <a
            href="#boutique"
            className="rounded-gmk border border-ink/45 px-[34px] py-[18px] text-[11px] uppercase tracking-[0.22em] text-ink transition-colors hover:bg-ink/10"
          >
            {siteCopy.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
