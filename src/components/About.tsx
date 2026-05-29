import { AnimateIn } from "./AnimateIn";

export function About() {
  return (
    <section id="about" className="px-6 py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
        <AnimateIn>
          {/* TODO: swap with a real headshot or stylized avatar — drop the image into /public/ and replace this block. */}
          <div className="aspect-square rounded-lg border border-border bg-bg-elevated flex items-center justify-center">
            <span className="font-mono text-7xl text-accent leading-none">
              T
            </span>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-fg mb-6">
            I&rsquo;m Jacob.
          </h2>

          <div className="space-y-4 text-fg-muted leading-relaxed">
            <p>
              CS senior at UCF (graduating August 2026) and VP of CHIDA, our
              hardware club. By day I write Rust, C, and Go for fun — by night
              I build embedded systems and distributed infrastructure that
              shouldn&rsquo;t be possible on a student budget.
            </p>
            <p>
              Freelance web is what I do for businesses that need a developer
              who can actually ship. Same engineering discipline I use on
              distributed systems, no agency markup, no &ldquo;passionate about
              leveraging synergies&rdquo;.
            </p>
            <p>
              I also stream the build process on{" "}
              <a
                href="https://youtube.com/@tranqy-lives"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg hover:text-accent transition-colors underline underline-offset-4 decoration-fg-subtle hover:decoration-accent"
              >
                tranqy-lives
              </a>
              . If you want to see how I work before you hire me, it&rsquo;s
              all there.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
