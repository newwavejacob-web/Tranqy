# tranqy.com — Site Overhaul Brief

## Context
The current site is a Next.js personal landing page that mostly mirrors my GitHub. It looks fine but has no purpose — it doesn't convert, doesn't sell, doesn't demonstrate competence beyond "I can deploy Next.js."

I'm pivoting it into a **freelance business site**. GitHub is no longer my proof-of-work — YouTube will be. The site should make a small-business owner think "this person can build my website" within 5 seconds of landing.

## The job
**Audit the existing codebase first.** Before writing anything, walk the repo and summarize:
- Current routes / pages
- Component structure
- Styling approach (Tailwind config, custom CSS, design tokens)
- Dependencies (what's actually used vs cruft)
- Deploy target (vercel.json, env vars, build config)

Then propose a concrete plan (file-level: what gets deleted, kept, refactored, added) and wait for my sign-off before making changes. Replace, don't accumulate — if a component isn't used in the new design, delete it.

## Brand
- **Business name on-site:** Tranqy
- **Legal name (footer + invoices only):** Tranq Tech LLC (or "Tranqy" if I haven't formed the LLC yet — put a `<!-- TODO -->` if uncertain)
- **Tagline (working):** "Built quiet · runs loud" — open to alternatives that lean technical
- **Voice:** direct, first-person, no buzzwords, no "passionate about leveraging synergies" slop. Read like a developer wrote it, not a marketing agency.

## Primary goal
A small-business owner in Orlando/Cape Coral lands here from a referral, scrolls once, and books a discovery call. That's the only conversion event that matters. Everything else (showing skills, social proof, streaming links) supports it.

## Audience
- Local small businesses needing a real website (spas, gyms, contractors, restaurants, professional services)
- Tech-adjacent founders who need a developer who can actually ship
- NOT recruiters, NOT FAANG, NOT other developers

## Page structure (single-page or 2-3 routes max)

1. **Hero**
   - Wordmark: `tranqy.tech` style with mint accent dot (or matching aesthetic with `.com`)
   - One-sentence value prop: what I build, for whom
   - Primary CTA: "Book a 15-min call" → Cal.com or Calendly link (placeholder `https://cal.com/jacob` for now)
   - Secondary: "See recent work" → scrolls to proof section

2. **Services (productized, 2-3 offerings)**
   - Card grid, each with: name, one-line description, what's included, starting price, "Get started" link
   - Examples (placeholders, I'll refine copy):
     - *Launch Site* — 5-page responsive marketing site, contact form, basic SEO, analytics. Starts at $X.
     - *Custom Build* — bespoke web apps, integrations, dashboards. Project-based, $X+.
     - *Audit & Fix* — performance, SEO, accessibility audit on an existing site. Flat $X.
   - Pricing visible — no "contact for quote" mystery box

3. **Proof**
   - Featured project: live link + 1-paragraph case-study blurb + screenshot
   - Embedded YouTube video (latest "build with me" or project demo) — channel `tranqy-lives`
   - Future-proof slot for client testimonials (just a `Testimonials` component, empty array for now, easy to add later)

4. **About (short, human)**
   - 2-3 short paragraphs max
   - CS senior at UCF, VP of CHIDA hardware club, builds embedded systems and distributed infra in my spare time, freelance web on the side
   - One line about streaming (link out to YouTube/Kick/Twitch — supports the brand but isn't the focus)
   - Headshot or stylized avatar — placeholder image for now

5. **Contact / Final CTA**
   - Repeat the booking CTA
   - Plus a simple form (name, email, what you need) → posts to a placeholder endpoint or mailto
   - Email displayed: `jacob@tranqy.com` (placeholder, I'll set up the inbox)

6. **Footer**
   - Socials: YouTube (tranqy-lives), Kick (tranqy_lives), Twitch (tranqy_lives), GitHub
   - Legal name + year
   - Tiny "based in Orlando, FL"

## Design direction
- **Dark theme primary**, light theme optional toggle (don't bikeshed this — dark first)
- **Monospace for the wordmark and accents**, sans-serif for body
- **Single accent color** — mint/teal (#7FE5C9) on near-black (#0E0F14)
- **Flat, no gradients, no glassmorphism, no parallax noise**
- Generous whitespace, big type in the hero, everything else tight
- Mobile-first — most referral clicks come from a phone
- Subtle motion only — fade-in on scroll, no scroll-jacking, no Lottie animations

Reference vibe: think Vercel's marketing pages, Linear, Pirsch — clean, fast, confident. Not Webflow template slop, not glassy SaaS, not "developer brutalism" either.

## Technical requirements
- **Stack:** keep Next.js App Router, Tailwind. TypeScript if it isn't already.
- **No CMS** — content lives in TypeScript constants or MDX files. I'll edit in code.
- **Performance:** Lighthouse 95+ on mobile across all four scores. Image optimization via next/image. No unused JS.
- **SEO:** proper meta tags, OG image (generate one with `next/og`), sitemap.xml, robots.txt
- **Analytics:** Plausible or Vercel Analytics — privacy-respecting, no cookie banner needed
- **Forms:** start with `mailto:` or a simple POST to a Vercel serverless route. No Formspree, no third-party form services.
- **Deploy:** Vercel. Custom domain `tranqy.com` already wired up (don't touch DNS).

## What NOT to do
- No "Projects" page listing every GitHub repo. GitHub link goes in the footer, that's it.
- No skills bars, no "tech stack" cloud, no "languages I know" section. Show, don't list.
- No blog yet. We can add `/blog` later; don't scaffold it now.
- No cookie banner (no cookies that need consent).
- No third-party chat widget.
- No newsletter signup.
- No AI chatbot.

## Deliverable
- Working site at `pnpm dev` (or `npm run dev` — match existing)
- All copy as placeholders I can edit — mark `// TODO:` where I need to fill in real numbers, real client work, real testimonials
- A short `README.md` section explaining how to update content (where copy lives, how to swap the featured project, how to add a testimonial)
- Commit message convention: conventional commits (`feat:`, `fix:`, `chore:`, `refactor:`)

## Process
1. Audit and report (no code changes)
2. Propose a file-level plan and wait for sign-off
3. Implement in small, reviewable commits
4. After each major section, run `next build` and `next lint` — fix everything before moving on
5. Final: Lighthouse run, screenshot the scores, link me to the preview deployment

---

**Question for me before you start:**
- Is the existing repo at a clean state (no uncommitted work) or do I need to stash anything?
- Do you want me to keep any of the existing pages/components, or is this a full scorched-earth rebuild?
