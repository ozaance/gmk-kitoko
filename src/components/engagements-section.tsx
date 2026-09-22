import { engagements } from "@/lib/site-content";

export function EngagementsSection() {
  return (
    <section className="mx-auto max-w-[1500px] px-[clamp(20px,6vw,96px)] py-[clamp(64px,10vh,130px)]">
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-gmk border border-ink/13 sm:[grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
        {engagements.map((e) => (
          <div key={e.num} className="flex flex-col gap-4 p-[clamp(28px,4vw,54px)]">
            <span className="font-serif text-[34px] text-accent">{e.num}</span>
            <h3 className="m-0 font-serif text-[27px] font-normal">{e.titre}</h3>
            <p className="m-0 text-sm leading-[1.7] text-ink/62">{e.texte}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
