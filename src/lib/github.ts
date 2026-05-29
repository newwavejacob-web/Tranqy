import type { GitHubEvent } from "@/types";

const GITHUB_API = "https://api.github.com";
const USERNAME = "newwavejacob-web";

export async function fetchGitHubEvents(): Promise<GitHubEvent[]> {
  try {
    const res = await fetch(
      `${GITHUB_API}/users/${USERNAME}/events?per_page=30`,
      { next: { revalidate: 0 } }
    );

    if (!res.ok) {
      return [];
    }

    const events: GitHubEvent[] = await res.json();

    return events
      .filter(
        (e) =>
          e.type === "PushEvent" ||
          e.type === "CreateEvent" ||
          e.type === "PullRequestEvent"
      )
      .slice(0, 10);
  } catch {
    return [];
  }
}

export function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return "just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function repoName(fullName: string): string {
  return fullName.split("/").pop() || fullName;
}
