import { prestations } from "@/lib/site-content";
import { SlotImage } from "./slot-image";

export function PrestationsSection() {
  return (
    <section
      id="prestations"
      className="mx-auto max-w-[1500px] px-[clamp(20px,6vw,96px)] py-[clamp(64px,10vh,140px)]"
    >
      <div className="mb-[52px] flex flex-wrap items-end justify-between gap-5">
        <div className="flex flex-col gap-3.5">
          <span className="text-[11px] uppercase tracking-[0.3em] text-accent">
            Nos prestations
          </span>
          <h2 className="m-0 max-w-[22ch] font-serif text-[clamp(30px,4.2vw,58px)] font-normal leading-[1.08]">
            Des tresses pensées pour durer, sans tension.
          </h2>
        </div>
        <a
          href="#prestations"
          className="border-b border-accent pb-1.5 text-[11px] uppercase tracking-[0.2em]"
        >
          Voir tout le catalogue
        </a>
      </div>

      <div className="grid gap-[22px] [grid-template-columns:repeat(auto-fit,minmax(255px,1fr))]">
        {prestations.map((p) => (
          <a
            key={p.slotId}
            href="#reservation"
            className="flex h-full flex-col overflow-hidden rounded-gmk border border-ink/13 transition-colors hover:border-accent"
          >
            <div className="relative aspect-[4/5]">
              <SlotImage src={p.image} alt={p.nom} label={p.nom} />
            </div>
            <div className="flex flex-1 flex-col gap-2.5 px-[22px] pt-6 pb-[26px]">
              <span className="text-[10px] uppercase tracking-[0.26em] text-accent">
                {p.categorie}
              </span>
              <h3 className="m-0 line-clamp-1 font-serif text-[26px] font-normal">{p.nom}</h3>
              <p className="m-0 line-clamp-2 min-h-[47px] text-sm leading-[1.65] text-ink/62">
                {p.description}
              </p>
              <div className="mt-auto flex items-baseline justify-between gap-3 border-t border-ink/13 pt-4">
                <span className="text-[13px] text-ink">À partir de {p.prix} €</span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-ink/62">
                  {p.duree}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
