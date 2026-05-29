import Link from "next/link";
import { CTA_URL, NAV_LINKS } from "@/lib/constants";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg border-b border-border">
      <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="font-mono text-sm font-medium text-fg hover:text-accent transition-colors"
          aria-label="Tranqy home"
        >
          tranqy<span className="text-accent">.</span>com
        </Link>

        <nav className="hidden sm:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-fg-muted hover:text-fg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium px-3 py-1.5 rounded-md border border-border text-fg hover:border-accent hover:text-accent transition-colors"
        >
          Book a call
        </a>
      </div>
    </header>
  );
}
