"use client";

import { FEATURED_PROJECTS, OTHER_PROJECTS } from "@/lib/constants";
import { FeaturedProject } from "./FeaturedProject";
import { ProjectCard } from "./ProjectCard";
import { AnimateIn } from "./AnimateIn";

export function ProjectsGrid() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-12">
            Featured Projects
          </h2>
        </AnimateIn>

        <div className="space-y-6 mb-20">
          {FEATURED_PROJECTS.map((project, i) => (
            <FeaturedProject key={project.name} project={project} index={i} />
          ))}
        </div>

        <AnimateIn>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-12">
            Other Projects
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {OTHER_PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
