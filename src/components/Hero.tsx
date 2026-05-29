import { ArrowRight } from "lucide-react";
import { AnimateIn } from "./AnimateIn";
import { BRAND, CTA_LABEL, CTA_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center px-6 pt-24 pb-16">
      <div className="mx-auto max-w-5xl w-full">
        <AnimateIn>
          <h1 className="font-mono text-5xl sm:text-7xl md:text-8xl font-medium tracking-tight text-fg">
            tranqy<span className="text-accent">.</span>com
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <p className="mt-6 font-mono text-base sm:text-lg text-fg-muted">
            {BRAND.tagline}
          </p>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          {/* TODO: tighten this value prop with Jacob — one specific sentence for an Orlando small-business owner. */}
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-fg leading-relaxed">
            I build fast, no-nonsense websites and custom web apps for small
            businesses. Based in Orlando, shipping for clients across Florida
            and beyond.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-accent text-bg font-medium hover:bg-accent/90 transition-colors"
            >
              {CTA_LABEL}
              <ArrowRight size={16} />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border text-fg hover:border-accent hover:text-accent transition-colors"
            >
              See recent work
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
