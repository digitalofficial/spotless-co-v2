import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group" aria-label="Spotless Co. Home">
      {/* Sparkle SVG */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-fresh transition-transform duration-300 group-hover:rotate-12"
      >
        <path
          d="M16 2L18.5 12.5L28 16L18.5 19.5L16 30L13.5 19.5L4 16L13.5 12.5L16 2Z"
          fill="currentColor"
        />
        <path
          d="M26 4L27 8L30 9L27 10L26 14L25 10L22 9L25 8L26 4Z"
          fill="currentColor"
          opacity="0.5"
        />
        <path
          d="M7 22L8 25L11 26L8 27L7 30L6 27L3 26L6 25L7 22Z"
          fill="currentColor"
          opacity="0.4"
        />
      </svg>
      <span className="font-display text-xl font-light tracking-[0.15em] text-charcoal uppercase">
        Spotless Co.
      </span>
    </Link>
  );
}
