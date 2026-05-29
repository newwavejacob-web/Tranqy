import { ArrowRight, Check } from "lucide-react";
import { AnimateIn } from "./AnimateIn";
import { SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <section
      id="services"
      className="px-6 py-24 sm:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-5xl">
        <AnimateIn>
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-fg mb-3">
            Three ways I can help.
          </h2>
          <p className="text-fg-muted max-w-2xl mb-16">
            Pricing is visible up front. No discovery call required to find out
            whether you can afford the room.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => (
            <AnimateIn key={service.slug} delay={i * 0.05}>
              <article className="h-full flex flex-col rounded-lg border border-border bg-bg-elevated p-6 hover:border-accent/40 transition-colors">
                <h3 className="font-mono text-sm text-accent mb-2">
                  {service.name}
                </h3>
                <p className="text-fg text-base leading-snug mb-8">
                  {service.tagline}
                </p>

                <div className="mb-6">
                  <p className="font-mono text-2xl text-fg leading-none">
                    {service.startingPrice}
                  </p>
                  <p className="font-mono text-xs text-fg-subtle mt-1">
                    starting
                  </p>
                </div>

                <ul className="space-y-2 mb-8 flex-1">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-fg-muted"
                    >
                      <Check
                        size={14}
                        className="mt-1 shrink-0 text-accent"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={service.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium px-4 py-2.5 rounded-md border border-border text-fg hover:border-accent hover:text-accent transition-colors"
                >
                  {service.ctaLabel}
                  <ArrowRight size={14} aria-hidden />
                </a>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
