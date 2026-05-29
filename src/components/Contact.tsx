import { ArrowRight, Mail } from "lucide-react";
import { AnimateIn } from "./AnimateIn";
import { ContactForm } from "./ContactForm";
import { CTA_LABEL, CTA_URL, EMAIL_DISPLAY } from "@/lib/constants";

export function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-24 sm:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
        <AnimateIn>
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-fg mb-4">
            Let&rsquo;s build something.
          </h2>
          <p className="text-fg-muted mb-8 leading-relaxed max-w-md">
            Fastest way to reach me is the call link. If you&rsquo;d rather
            type, the form lands straight in my inbox.
          </p>

          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-accent text-bg font-medium hover:bg-accent/90 transition-colors mb-6"
          >
            {CTA_LABEL}
            <ArrowRight size={16} aria-hidden />
          </a>

          <p className="text-sm text-fg-muted flex items-center gap-2">
            <Mail size={14} aria-hidden />
            <a
              href={`mailto:${EMAIL_DISPLAY}`}
              className="hover:text-accent transition-colors"
            >
              {EMAIL_DISPLAY}
            </a>
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <ContactForm />
        </AnimateIn>
      </div>
    </section>
  );
}
