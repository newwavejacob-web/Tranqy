"use client";

import { useEffect, useState } from "react";
import { GitCommit, GitBranch, GitPullRequest, Loader2 } from "lucide-react";
import type { GitHubEvent } from "@/types";
import { fetchGitHubEvents, timeAgo, repoName } from "@/lib/github";
import { AnimateIn } from "./AnimateIn";

function EventIcon({ type }: { type: string }) {
  switch (type) {
    case "PushEvent":
      return <GitCommit size={14} />;
    case "CreateEvent":
      return <GitBranch size={14} />;
    case "PullRequestEvent":
      return <GitPullRequest size={14} />;
    default:
      return <GitCommit size={14} />;
  }
}

function eventDescription(event: GitHubEvent): string {
  switch (event.type) {
    case "PushEvent": {
      const count = event.payload.commits?.length || 0;
      return `Pushed ${count} commit${count !== 1 ? "s" : ""} to`;
    }
    case "CreateEvent":
      return `Created ${event.payload.ref ? "branch" : "repository"}`;
    case "PullRequestEvent":
      return `${event.payload.action === "opened" ? "Opened" : "Updated"} PR in`;
    default:
      return "Activity in";
  }
}

export function ActivityFeed() {
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitHubEvents().then((data) => {
      setEvents(data);
      setLoading(false);
    });
  }, []);

  const currentProject = events[0] ? repoName(events[0].repo.name) : null;

  return (
    <section id="activity" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              Recent Activity
            </h2>
            {currentProject && (
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                Currently working on{" "}
                <span className="text-neutral-900 dark:text-neutral-100 font-medium">
                  {currentProject}
                </span>
              </span>
            )}
          </div>
        </AnimateIn>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2
              size={20}
              className="animate-spin text-neutral-400 dark:text-neutral-600"
            />
          </div>
        ) : events.length === 0 ? (
          <AnimateIn>
            <p className="text-sm text-neutral-500 dark:text-neutral-500 py-16 text-center">
              No recent public activity — probably deep in a private repo.
            </p>
          </AnimateIn>
        ) : (
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-neutral-200 dark:bg-neutral-800" />

            <div className="space-y-6">
              {events.map((event, i) => (
                <AnimateIn key={event.id} delay={i * 0.03}>
                  <div className="flex items-start gap-4 relative">
                    <div className="relative z-10 mt-1 p-1 rounded-full bg-white dark:bg-[#0a0a0a] text-neutral-400 dark:text-neutral-600 border border-neutral-200 dark:border-neutral-800">
                      <EventIcon type={event.type} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-neutral-500 dark:text-neutral-400">
                          {eventDescription(event)}
                        </span>
                        <a
                          href={`https://github.com/${event.repo.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-neutral-900 dark:text-neutral-100 hover:text-accent dark:hover:text-accent-light transition-colors truncate"
                        >
                          {repoName(event.repo.name)}
                        </a>
                        <span className="text-xs text-neutral-400 dark:text-neutral-600 shrink-0">
                          {timeAgo(event.created_at)}
                        </span>
                      </div>

                      {event.type === "PushEvent" &&
                        event.payload.commits &&
                        event.payload.commits.length > 0 && (
                          <div className="mt-1.5 space-y-1">
                            {event.payload.commits.slice(0, 3).map((commit) => (
                              <p
                                key={commit.sha}
                                className="text-xs text-neutral-500 dark:text-neutral-500 font-mono truncate"
                              >
                                <span className="text-neutral-400 dark:text-neutral-600">
                                  {commit.sha.slice(0, 7)}
                                </span>{" "}
                                {commit.message.split("\n")[0]}
                              </p>
                            ))}
                          </div>
                        )}
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
