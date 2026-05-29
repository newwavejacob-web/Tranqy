import { AnimateIn } from "./AnimateIn";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="px-6 py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <AnimateIn>
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
            What clients say
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-fg mb-16">
            Heard around town.
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <AnimateIn key={`${t.author}-${i}`} delay={i * 0.05}>
              <figure className="h-full rounded-lg border border-border bg-bg-elevated p-6">
                <blockquote className="text-fg leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="text-sm text-fg-muted">
                  <span className="text-fg font-medium">{t.author}</span>
                  {t.role ? `, ${t.role}` : null}
                  {t.company ? ` · ${t.company}` : null}
                </figcaption>
              </figure>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
