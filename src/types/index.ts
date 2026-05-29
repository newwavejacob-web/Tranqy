export interface Project {
  name: string;
  description: string;
  tags: string[];
  language: string;
  url?: string;
  isPrivate?: boolean;
  inProgress?: boolean;
}

export interface GitHubEvent {
  id: string;
  type: string;
  repo: {
    name: string;
    url: string;
  };
  payload: {
    commits?: Array<{
      sha: string;
      message: string;
    }>;
    ref?: string;
    action?: string;
  };
  created_at: string;
}
