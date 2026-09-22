type ImagePlaceholderProps = {
  label: string;
  className?: string;
};

/**
 * Static stand-in for the design's empty <image-slot>. Real photography
 * drops in here later without touching layout (see image-slot.js in the
 * source maquette, which is an editor-only drag/drop tool, not shipped).
 */
export function ImagePlaceholder({ label, className = "" }: ImagePlaceholderProps) {
  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center gap-2 bg-ink/[0.06] text-center ${className}`}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-ink/35"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span className="max-w-[85%] px-3 text-[11px] font-medium tracking-wide text-ink/40">
        {label}
      </span>
      <div className="pointer-events-none absolute inset-0 border border-dashed border-ink/20" />
    </div>
  );
}
