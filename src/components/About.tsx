"use client";

import { SKILLS } from "@/lib/constants";
import { AnimateIn } from "./AnimateIn";

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-12">
            About
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimateIn>
            <div className="space-y-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Computer Science student at the University of Central Florida,
                graduating August 2026. Vice President of CHIDA. Focused on
                systems programming, distributed systems, and building things
                that work reliably at scale.
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                I like working close to the metal — writing Rust, C, and Go to
                solve problems where performance and correctness matter. When
                I&apos;m not building infrastructure, I&apos;m building games.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-500 mb-4">
                Skills &amp; Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
