"use client";

import { ExternalLink, Lock } from "lucide-react";
import type { Project } from "@/types";
import { AnimateIn } from "./AnimateIn";

interface FeaturedProjectProps {
  project: Project;
  index: number;
}

export function FeaturedProject({ project, index }: FeaturedProjectProps) {
  return (
    <AnimateIn delay={index * 0.1}>
      <div className="group relative rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 p-6 sm:p-8 transition-all hover:border-neutral-300 dark:hover:border-neutral-700">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              {project.name}
            </h3>
            {project.inProgress && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 font-medium">
                In Progress
              </span>
            )}
          </div>
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors shrink-0"
              aria-label={`View ${project.name} on GitHub`}
            >
              <ExternalLink size={18} />
            </a>
          ) : project.isPrivate ? (
            <span className="text-neutral-400 dark:text-neutral-600 shrink-0" title="Private repository">
              <Lock size={18} />
            </span>
          ) : null}
        </div>

        <div className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed whitespace-pre-line mb-6">
          {project.description}
        </div>

        {project.name === "HealthDB" && (
          <div className="mb-6 space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
              Technical Highlights
            </h4>
            <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1.5">
              <li className="flex items-start gap-2">
                <span className="text-neutral-300 dark:text-neutral-600 mt-1.5 text-[6px]">&#9679;</span>
                Raft consensus implementation with leader election and log replication
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neutral-300 dark:text-neutral-600 mt-1.5 text-[6px]">&#9679;</span>
                Custom write-ahead log for durability and crash recovery
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neutral-300 dark:text-neutral-600 mt-1.5 text-[6px]">&#9679;</span>
                Network protocol design for inter-node communication
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neutral-300 dark:text-neutral-600 mt-1.5 text-[6px]">&#9679;</span>
                Built for high availability and fault tolerance
              </li>
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </AnimateIn>
  );
}
