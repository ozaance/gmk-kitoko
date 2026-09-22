import { reservation } from "@/lib/site-content";

export function ReservationSection() {
  return (
    <section
      id="reservation"
      className="relative flex flex-col items-center gap-[30px] border-t border-ink/13 px-[clamp(20px,6vw,96px)] py-[clamp(80px,14vh,190px)] text-center"
    >
      <span className="text-[11px] uppercase tracking-[0.3em] text-accent">
        {reservation.eyebrow}
      </span>
      <h2 className="m-0 max-w-[20ch] font-serif text-[clamp(32px,5.4vw,76px)] font-normal leading-[1.05]">
        {reservation.title}
      </h2>
      <p className="m-0 max-w-[46ch] text-[15px] leading-[1.7] text-ink/62">
        {reservation.text}
      </p>

      <div className="flex flex-wrap justify-center gap-3.5">
        <a
          href="#reservation"
          className="rounded-gmk bg-accent px-9 py-[18px] text-[11px] uppercase tracking-[0.22em] text-bg transition-opacity hover:opacity-[0.85]"
        >
          Prendre rendez-vous
        </a>
        <a
          href="#contact"
          className="rounded-gmk border border-ink/13 px-9 py-[18px] text-[11px] uppercase tracking-[0.22em] text-ink transition-colors hover:border-accent"
        >
          {reservation.secondaryCta}
        </a>
      </div>

      <div className="mt-[46px] flex w-full max-w-[520px] flex-col items-center gap-4 border-t border-ink/13 pt-[46px]">
        <span className="text-xs uppercase tracking-[0.18em] text-ink/62">
          {reservation.newsletterLabel}
        </span>
        <div className="flex w-full flex-wrap gap-2.5">
          <input
            type="email"
            placeholder="Votre e-mail"
            className="min-w-0 flex-1 rounded-gmk border border-ink/13 bg-transparent px-4 py-4 text-sm text-ink placeholder:text-ink/40"
          />
          <button
            type="button"
            className="shrink-0 rounded-gmk bg-ink px-[26px] py-4 text-[11px] uppercase tracking-[0.2em] text-bg"
          >
            {reservation.newsletterCta}
          </button>
        </div>
      </div>
    </section>
  );
}
