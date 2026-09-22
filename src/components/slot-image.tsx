import Image from "next/image";
import { ImagePlaceholder } from "./image-placeholder";

type SlotImageProps = {
  src?: string;
  alt: string;
  label?: string;
  className?: string;
  sizes?: string;
};

/**
 * Fills an image slot with real photography when available, falling back
 * to the empty-state placeholder otherwise. Keeps layout identical either
 * way so photos can be dropped in per item without touching section code.
 */
export function SlotImage({ src, alt, label, className = "", sizes }: SlotImageProps) {
  if (!src) {
    return <ImagePlaceholder label={label ?? alt} className={className} />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes ?? "(min-width: 1024px) 25vw, 50vw"}
      className={`object-cover ${className}`}
    />
  );
}
