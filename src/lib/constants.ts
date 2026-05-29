import type { Project } from "@/types";

export const GITHUB_USERNAME = "newwavejacob-web";
export const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;
export const LINKEDIN_URL = "https://linkedin.com/in/jacob";
export const EMAIL = "jacob@example.com";

export const FEATURED_PROJECTS: Project[] = [
  {
    name: "HealthDB",
    description:
      "Distributed database implementing the Raft consensus algorithm from scratch in Rust. Built for high availability and fault tolerance with a custom write-ahead log, leader election, log replication, and network protocol design.",
    tags: ["Rust", "Raft Consensus", "Distributed Systems", "Write-Ahead Log"],
    language: "Rust",
    url: `${GITHUB_URL}/HealthDB`,
  },
  {
    name: "Seal Bound",
    description:
      "A 2D, narrative-driven, turn-based RPG that weaves together the dungeon exploration of Pok\u00e9mon Mystery Dungeon with the relationship-driven heart of Stardew Valley.\n\nYou wake at the edge of a quiet village with no memory\u2014only an inexplicable pull toward ancient Seals that hold the fabric of reality together. As entropy spreads and the world begins to unravel, you\u2019ll discover that these Seals don\u2019t want sacrifice. They want something far more difficult to give: genuine connection.\n\nForm bonds with the villagers of Hearthwyn. Venture into corrupted dungeons. Recover fragments of your lost past. And learn that the world was never meant to be carried by one pair of hands.",
    tags: ["Game Dev", "2D RPG", "Turn-based", "Narrative"],
    language: "C#",
    isPrivate: true,
    inProgress: true,
  },
];

export const IOT_PROJECTS: Project[] = [
  {
    name: "IoT Sensor Dashboard",
    description:
      "Real-time monitoring dashboard for IoT sensor networks with data visualization and alerting.",
    tags: ["IoT", "Embedded", "Real-time"],
    language: "Python",
  },
];

export const OTHER_PROJECTS: Project[] = [
  {
    name: "Solaris Shell",
    description:
      "A Fallout-themed C shell with custom built-in commands, process management, and a retro post-apocalyptic UI.",
    tags: ["C", "Systems", "Shell"],
    language: "C",
    url: `${GITHUB_URL}/Solaris-Shell`,
  },
  {
    name: "MiniC Compiler",
    description:
      "Compiler for a tiny Pascal-like language featuring lexical analysis, parsing, and code generation.",
    tags: ["C", "Compilers", "Language Design"],
    language: "C",
    url: `${GITHUB_URL}/MiniC-Compiler`,
  },
  {
    name: "What 2 Watch",
    description:
      "Movie and TV recommendation service built in Go for when you don\u2019t know what to watch.",
    tags: ["Go", "API", "Recommendations"],
    language: "Go",
    url: `${GITHUB_URL}/What-2-Watch`,
  },
  {
    name: "Shadow of the Sword",
    description:
      "3D souls-like parry-based combat game built in Unity with custom shader work.",
    tags: ["Unity", "Game Dev", "3D", "Shaders"],
    language: "C#",
    url: `${GITHUB_URL}/shadow-of-the-sword-4053`,
  },
];

export const SKILLS = [
  "Rust",
  "C",
  "Go",
  "TypeScript",
  "C#",
  "Python",
  "Systems Programming",
  "Distributed Systems",
  "Game Development",
  "Compilers",
  "IoT",
  "Linux",
];

export const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Activity", href: "#activity" },
  { label: "About", href: "#about" },
];
