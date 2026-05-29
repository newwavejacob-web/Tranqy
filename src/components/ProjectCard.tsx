"use client";

import { ExternalLink } from "lucide-react";
import type { Project } from "@/types";
import { AnimateIn } from "./AnimateIn";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <AnimateIn delay={index * 0.05}>
      <div className="group relative rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 p-5 transition-all hover:border-neutral-300 dark:hover:border-neutral-700 hover:-translate-y-0.5 hover:shadow-sm h-full flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
            {project.name}
          </h3>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors shrink-0"
              aria-label={`View ${project.name} on GitHub`}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>

        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600" />
          <span className="text-xs text-neutral-500 dark:text-neutral-500 font-medium">
            {project.language}
          </span>
          {project.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </AnimateIn>
  );
}
