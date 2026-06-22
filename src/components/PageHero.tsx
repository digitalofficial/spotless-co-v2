import Bubbles from "./Bubbles";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}

export default function PageHero({ eyebrow, title, highlight, subtitle }: PageHeroProps) {
  return (
    <section className="relative bg-paper pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <Bubbles />
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        {eyebrow && (
          <p className="inline-flex items-center gap-2 rounded-full bg-mint px-4 py-1.5 text-xs font-semibold text-fresh tracking-wide uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-fresh" />
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extralight leading-[1.1] tracking-tight text-charcoal">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-fresh font-light">{highlight}</span>
            </>
          )}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
