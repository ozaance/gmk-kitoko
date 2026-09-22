"use client";

import { useRef, useState } from "react";
import { formatPrice, produits, type Produit } from "@/lib/site-content";
import { SlotImage } from "./slot-image";

export function ShopExperience() {
  const [quick, setQuick] = useState<Produit | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleAdd(p: Produit) {
    setToast(`${p.nom} ajouté au panier`);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2200);
  }

  return (
    <>
      <section id="boutique" className="bg-ink/[0.035] px-[clamp(20px,6vw,96px)] py-[clamp(64px,10vh,140px)]">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-[52px] flex flex-wrap items-end justify-between gap-5">
            <div className="flex flex-col gap-3.5">
              <span className="text-[11px] uppercase tracking-[0.3em] text-accent">
                Produits phares
              </span>
              <h2 className="m-0 font-serif text-[clamp(30px,4.2vw,58px)] font-normal leading-[1.08]">
                Le soin ne s&apos;arrête pas au salon.
              </h2>
            </div>
            <a
              href="#boutique"
              className="border-b border-accent pb-1.5 text-[11px] uppercase tracking-[0.2em]"
            >
              Toute la boutique
            </a>
          </div>

          <div className="grid gap-[22px] [grid-template-columns:repeat(auto-fit,minmax(275px,1fr))]">
            {produits.map((pr) => (
              <div key={pr.slotId} className="flex flex-col gap-3.5">
                <div className="relative aspect-square overflow-hidden rounded-gmk border border-ink/13">
                  <SlotImage src={pr.image} alt={pr.nom} label={pr.nom} />
                  <button
                    type="button"
                    onClick={() => setQuick(pr)}
                    className="absolute right-3 bottom-3 left-3 z-10 rounded-gmk bg-bg/[0.82] px-3 py-3 text-[10px] uppercase tracking-[0.22em] text-ink transition-colors hover:bg-accent hover:text-bg"
                  >
                    Aperçu rapide
                  </button>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] uppercase tracking-[0.24em] text-accent">
                    {pr.categorie}
                  </span>
                  <h3 className="m-0 font-serif text-[21px] font-normal">{pr.nom}</h3>
                  <span className="text-[13px] text-ink/62">
                    {formatPrice(pr.prix)} · {pr.contenance}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleAdd(pr)}
                  className="rounded-gmk border border-ink/13 px-3.5 py-3.5 text-[10px] uppercase tracking-[0.22em] text-ink transition-colors hover:border-accent hover:bg-accent hover:text-bg"
                >
                  Ajouter au panier
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {quick && (
        <div
          onClick={() => setQuick(null)}
          className="fixed inset-0 z-90 flex items-center justify-center bg-bg/[0.78] p-5 backdrop-blur-[6px]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="grid w-full max-w-[840px] grid-cols-1 overflow-hidden rounded-gmk border border-ink/13 bg-modal sm:[grid-template-columns:repeat(auto-fit,minmax(230px,1fr))]"
          >
            <div className="relative min-h-[260px]">
              <SlotImage src={quick.image} alt={quick.nom} label="Visuel produit" />
            </div>
            <div className="flex flex-col gap-4 p-[clamp(24px,4vw,42px)]">
              <span className="text-[10px] uppercase tracking-[0.26em] text-accent">
                {quick.categorie}
              </span>
              <h3 className="m-0 font-serif text-[30px] font-normal">{quick.nom}</h3>
              <span className="text-base">{formatPrice(quick.prix)}</span>
              <p className="m-0 text-sm leading-[1.75] text-ink/62">{quick.description}</p>
              <span className="text-xs text-ink/62">Contenance {quick.contenance}</span>
              <button
                type="button"
                onClick={() => handleAdd(quick)}
                className="mt-2 rounded-gmk bg-accent px-4 py-4 text-[11px] uppercase tracking-[0.22em] text-bg"
              >
                Ajouter au panier
              </button>
              <button
                type="button"
                onClick={() => setQuick(null)}
                className="rounded-gmk px-2.5 py-2.5 text-left text-[11px] uppercase tracking-[0.18em] text-ink/62"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div className="fixed bottom-[26px] left-1/2 z-95 -translate-x-1/2 rounded-gmk bg-accent px-6 py-3.5 text-[11px] uppercase tracking-[0.2em] text-bg">
          {toast}
        </div>
      )}
    </>
  );
}
