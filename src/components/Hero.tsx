"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from "@/lib/constants";
import { AnimateIn } from "./AnimateIn";

export function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6">
      <div className="max-w-5xl w-full">
        <AnimateIn>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Jacob
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <p className="mt-4 text-lg sm:text-xl text-neutral-500 dark:text-neutral-400 font-light">
            Systems Programmer{" "}
            <span className="text-neutral-300 dark:text-neutral-600">|</span> CS
            @ UCF
          </p>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="mt-8 flex items-center gap-5">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
