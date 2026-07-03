import type { Service, Social, Testimonial, WorkItem } from "@/types";

export const BRAND = {
  name: "Tranqy",
  wordmark: "tranqy.com",
  tagline: "Built quiet · runs loud",
  // TODO: confirm LLC formation. Use "Tranqy" until Tranq Tech LLC is filed.
  legalName: "Tranq Tech LLC",
  location: "Orlando, FL",
} as const;

// TODO: confirm cal.com handle before launch.
export const CTA_URL = "https://cal.com/jacob";
export const CTA_LABEL = "Book a 15-min call";

// TODO: set up jacob@tranqy.com inbox.
export const EMAIL_DISPLAY = "jacobrberts@gmail.com";
// Resend sends from this address (must be on a verified domain in Resend).
export const CONTACT_TO = "jacobrberts@gmail.com";

export const SERVICES: Service[] = [
  {
    slug: "launch-site",
    name: "Launch Site",
    tagline:
      "A fast 5-page marketing site you can hand to a customer the day it ships.",
    includes: [
      "Up to 5 responsive pages",
      "Contact form wired to your inbox",
      "Basic on-page SEO + sitemap",
      "Analytics + performance tuning",
    ],
    // TODO: confirm pricing
    startingPrice: "$700",
    ctaLabel: "Get started",
    ctaHref: CTA_URL,
  },
  {
    slug: "custom-build",
    name: "Custom Build",
    tagline:
      "Bespoke web apps, internal tools, dashboards, and API integrations.",
    includes: [
      "Discovery + scope doc up front",
      "Iterative delivery, no surprises",
      "Auth, payments, and 3rd-party integrations",
      "Handoff with deploy + runbook",
    ],
    // TODO: confirm pricing
    startingPrice: "$1200",
    ctaLabel: "Start a project",
    ctaHref: CTA_URL,
  },
  {
    slug: "audit-fix",
    name: "Audit & Fix",
    tagline:
      "I tear apart your existing site for performance, SEO, and accessibility wins.",
    includes: [
      "Lighthouse + Core Web Vitals report",
      "Prioritized fix list with effort estimates",
      "Option to have me implement the fixes",
      "Turnaround in under a week",
    ],
    // TODO: confirm pricing
    startingPrice: "$500 flat",
    ctaLabel: "Book an audit",
    ctaHref: CTA_URL,
  },
];

export const FEATURED_WORK: WorkItem = {
  // TODO: replace with real client work as it ships.
  name: "Psychic Website",
  blurb:
    "Worked on creating a website for psychic Hope, bringing in customers through digital marketing practices",
  // TODO: live URL when client work ships.
  liveUrl: "psychichope.org",
  // TODO: drop a screenshot into /public/work/ and set this to
  // { src, alt, width, height }. Until then Work renders a placeholder.
  screenshot: undefined,
  // TODO: replace with the actual YouTube video ID from tranqy-lives.
  youtubeId: "dQw4w9WgXcQ",
};

export const TESTIMONIALS: Testimonial[] = [
  // TODO: add real testimonials as clients ship.
];

const GITHUB_USERNAME = "newwavejacob-web";

export const SOCIALS: Social[] = [
  {
    platform: "youtube",
    label: "YouTube",
    href: "https://youtube.com/@tranqy-lives",
  },
  {
    platform: "kick",
    label: "Kick",
    href: "https://kick.com/tranqy_lives",
  },
  {
    platform: "twitch",
    label: "Twitch",
    href: "https://twitch.tv/tranqy_lives",
  },
  {
    platform: "github",
    label: "GitHub",
    href: `https://github.com/${GITHUB_USERNAME}`,
  },
];

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
