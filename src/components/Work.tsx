import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { AnimateIn } from "./AnimateIn";
import { FEATURED_WORK } from "@/lib/constants";

export function Work() {
  const work = FEATURED_WORK;

  return (
    <section id="work" className="px-6 py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <AnimateIn>
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
            Recent work
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-fg mb-16">
            What I&rsquo;ve shipped.
          </h2>
        </AnimateIn>

        <AnimateIn>
          <article className="rounded-lg border border-border bg-bg-elevated overflow-hidden">
            {work.screenshot ? (
              <div className="aspect-[16/10] relative bg-bg">
                <Image
                  src={work.screenshot.src}
                  alt={work.screenshot.alt}
                  fill
                  sizes="(min-width: 1024px) 800px, 100vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div
                className="aspect-[16/10] flex items-center justify-center bg-bg font-mono text-sm text-fg-subtle"
                aria-hidden
              >
                {/* TODO: drop a screenshot into /public/work/ and update FEATURED_WORK.screenshot. */}
                screenshot.png
              </div>
            )}

            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl sm:text-2xl font-semibold text-fg">
                  {work.name}
                </h3>
                {work.liveUrl && (
                  <a
                    href={work.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-fg-muted hover:text-accent transition-colors"
                  >
                    Visit site
                    <ExternalLink size={14} aria-hidden />
                  </a>
                )}
              </div>
              <p className="text-fg-muted leading-relaxed">{work.blurb}</p>
            </div>
          </article>
        </AnimateIn>

        {work.youtubeId && (
          <AnimateIn delay={0.1}>
            <div className="mt-12">
              <p className="font-mono text-xs uppercase tracking-widest text-fg-subtle mb-4">
                From the stream
              </p>
              <div className="aspect-video rounded-lg overflow-hidden border border-border bg-bg-elevated">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${work.youtubeId}`}
                  title="Featured video from tranqy-lives"
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </AnimateIn>
        )}
      </div>
    </section>
  );
}
