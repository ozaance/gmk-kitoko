import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-60 flex items-center justify-between gap-6 border-b border-bg/10 bg-white/92 px-[clamp(16px,4vw,56px)] py-3.5 backdrop-blur-[14px]">
      <Link href="#accueil" className="flex items-center gap-2.5">
        <Image
          src="/images/gmk-logo.png"
          alt="GMK Kitoko Paris"
          width={54}
          height={54}
          priority
          className="h-[54px] w-auto"
        />
      </Link>

      <nav className="flex items-center gap-[clamp(14px,2.2vw,34px)] text-[12px] uppercase tracking-[0.18em] text-bg/70">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="whitespace-nowrap transition-colors hover:text-accent"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Link
        href="#reservation"
        className="shrink-0 rounded-gmk bg-accent px-[22px] py-[13px] text-[11px] uppercase tracking-[0.2em] text-bg transition-opacity hover:opacity-[0.85]"
      >
        Prendre rendez-vous
      </Link>
    </header>
  );
}
