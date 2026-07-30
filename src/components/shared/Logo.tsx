import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  /** Tailwind sizing utilities applied to the logo mark (drives height; width follows). */
  className?: string;
  /** Link target. Pass `null` to render the mark without a link wrapper. */
  href?: string | null;
  /** Intrinsic size hint for CLS (actual render size is driven by `className`). */
  width?: number;
  height?: number;
  /** Marks the mark as LCP-critical (above-the-fold usages, e.g. the NavBar). */
  preload?: boolean;
}

/**
 * Single source of truth for the IPTV Compleet brand mark. Renders the
 * `public/images/site-logo.png` raster mark — regenerate that file (and its
 * favicon derivatives via `npm run generate:favicons`) on a rebrand.
 */
const Logo = ({
  className = "h-11 w-auto sm:h-12",
  href = "/",
  width = 432,
  height = 96,
  preload = false,
}: LogoProps) => {
  const mark = (
    <Image
      src="/images/site-logo.png"
      alt="IPTV Compleet"
      width={width}
      height={height}
      priority={preload}
      className={`shrink-0 object-contain ${className}`}
    />
  );

  if (href === null) {
    return mark;
  }

  return (
    <Link href={href} aria-label="IPTV Compleet – Startpagina">
      {mark}
    </Link>
  );
};

export default Logo;
