"use client";

import { useState } from "react";
import { reviews } from "@/lib/site-content";

export function ReviewsSection() {
  const [index, setIndex] = useState(0);
  const current = reviews[index % reviews.length];
  const stars = "★★★★★".slice(0, current.note);

  return (
    <section className="bg-ink/[0.035] px-[clamp(20px,6vw,96px)] py-[clamp(64px,10vh,140px)]">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-[30px] text-center">
        <span className="text-[11px] uppercase tracking-[0.3em] text-accent">Avis clientes</span>
        <span className="text-[15px] tracking-[0.4em] text-accent">{stars}</span>
        <p className="m-0 text-pretty font-serif text-[clamp(22px,3.2vw,40px)] font-normal italic leading-[1.32]">
          « {current.texte} »
        </p>
        <div className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-[0.2em]">{current.nom}</span>
          <span className="text-xs text-ink/62">{current.presta}</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIndex((i) => (i - 1 + reviews.length) % reviews.length)}
            className="h-11 w-11 rounded-gmk border border-ink/13 text-ink transition-colors hover:border-accent hover:text-accent"
            aria-label="Avis précédent"
          >
            ←
          </button>
          <span className="min-w-[52px] text-xs text-ink/62">
            {(index % reviews.length) + 1} / {reviews.length}
          </span>
          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % reviews.length)}
            className="h-11 w-11 rounded-gmk border border-ink/13 text-ink transition-colors hover:border-accent hover:text-accent"
            aria-label="Avis suivant"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
