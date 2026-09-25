import Image from "next/image";
import type { ReactElement } from "react";
import { footer, siteCopy } from "@/lib/site-content";

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3v10.5a3.5 3.5 0 1 1-3-3.47" />
      <path d="M14 3c0 2.5 2.24 4.5 5 4.5" />
    </svg>
  );
}

const socialIcons: Record<string, () => ReactElement> = {
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
};

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-bg/10 bg-white px-[clamp(20px,6vw,96px)] pt-[clamp(56px,8vh,96px)] pb-[34px] text-bg"
    >
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-11 sm:[grid-template-columns:repeat(auto-fit,minmax(210px,1fr))]">
        <div className="flex flex-col gap-4">
          <Image
            src="/images/gmk-logo.png"
            alt="GMK Kitoko Paris"
            width={1062}
            height={597}
            className="h-[58px] w-auto self-start object-contain"
          />
          <p className="m-0 max-w-[26ch] font-serif text-[17px] italic text-bg/62">
            {siteCopy.slogan}
          </p>
          <div className="flex gap-4">
            {footer.social.map((link) => {
              const Icon = socialIcons[link.label];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="text-bg/70 transition-colors hover:text-accent"
                >
                  {Icon ? <Icon /> : link.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-3 text-[13px] text-bg/62">
          <span className="text-[10px] uppercase tracking-[0.26em] text-bg">Navigation</span>
          {footer.navigation.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-accent">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3 text-[13px] text-bg/62">
          <span className="text-[10px] uppercase tracking-[0.26em] text-bg">Informations</span>
          {footer.informations.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-accent">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3 text-[13px] text-bg/62">
          <span className="text-[10px] uppercase tracking-[0.26em] text-bg">Contact</span>
          <a href={footer.phoneHref} className="flex items-center gap-2.5 transition-colors hover:text-accent">
            <PhoneIcon />
            {footer.phone}
          </a>
          <a href={`mailto:${footer.email}`} className="flex items-center gap-2.5 transition-colors hover:text-accent">
            <MailIcon />
            {footer.email}
          </a>
          <span className="flex items-center gap-2.5">
            <PinIcon />
            {footer.location}
          </span>
        </div>
      </div>

      <div className="mx-auto mt-[42px] flex max-w-[1500px] flex-wrap justify-between gap-3 border-t border-bg/10 pt-[22px] text-[11px] uppercase tracking-[0.14em] text-bg/62">
        <span>{footer.copyright}</span>
        <span>{siteCopy.slogan}</span>
      </div>
    </footer>
  );
}
