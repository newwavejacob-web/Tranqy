import { Github, Twitch, Youtube } from "lucide-react";
import { BRAND, SOCIALS } from "@/lib/constants";
import type { SocialPlatform } from "@/types";

function PlatformIcon({ platform }: { platform: SocialPlatform }) {
  switch (platform) {
    case "youtube":
      return <Youtube size={18} aria-hidden />;
    case "twitch":
      return <Twitch size={18} aria-hidden />;
    case "github":
      return <Github size={18} aria-hidden />;
    case "kick":
      // Lucide doesn't ship a Kick icon. Glyph reads as "K" alongside the
      // other icons; the parent <a> carries the aria-label.
      return (
        <span
          className="font-mono font-bold text-[15px] leading-none"
          aria-hidden
        >
          K
        </span>
      );
    case "email":
      return null;
  }
}

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div className="space-y-1">
          <p className="font-mono text-sm text-fg">
            tranqy<span className="text-accent">.</span>com
          </p>
          <p className="text-xs text-fg-subtle">
            {/* TODO: confirm Tranq Tech LLC formation; until then this is a working name. */}
            &copy; {new Date().getFullYear()} {BRAND.legalName} &middot; Based
            in {BRAND.location}
          </p>
        </div>

        <ul className="flex items-center gap-5">
          {SOCIALS.map((social) => (
            <li key={social.platform}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="block text-fg-muted hover:text-accent transition-colors"
              >
                <PlatformIcon platform={social.platform} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
