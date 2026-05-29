"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <p className="text-xs text-neutral-400 dark:text-neutral-600">
          &copy; {new Date().getFullYear()} Jacob
        </p>

        <div className="flex items-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
