import { BRAND } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto max-w-5xl text-sm text-fg-muted">
        {/* TODO: replaced by the full footer (socials, legal, location) in phase 2 footer refactor. */}
        &copy; {new Date().getFullYear()} {BRAND.name}
      </div>
    </footer>
  );
}
