export interface Service {
  slug: string;
  name: string;
  tagline: string;
  includes: string[];
  startingPrice: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface WorkItem {
  name: string;
  blurb: string;
  liveUrl?: string;
  screenshot: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  youtubeId?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  company?: string;
}

export type SocialPlatform =
  | "youtube"
  | "kick"
  | "twitch"
  | "github"
  | "email";

export interface Social {
  platform: SocialPlatform;
  label: string;
  href: string;
}
