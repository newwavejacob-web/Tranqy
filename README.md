# tranqy.com

The Tranqy freelance business site. Next.js 16 (App Router) + TypeScript +
Tailwind v4. Deployed on Vercel.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint flat config
```

## Environment

Create `.env.local` (gitignored) for local dev:

```
RESEND_API_KEY=re_xxx_your_key_here
```

In production, set `RESEND_API_KEY` in Vercel project settings. Without it,
`/api/contact` returns 500. The `FROM_ADDRESS` in
`src/app/api/contact/route.ts` is currently pinned to
`onboarding@resend.dev`; switch it to `contact@tranqy.com` once the domain
is verified in Resend.

## Editing content

All copy and structured data live in `src/lib/constants.ts`. The site has
no CMS — push to main to ship.

| What you want to change           | Where                                                                 |
| --------------------------------- | --------------------------------------------------------------------- |
| Tagline, location, legal name     | `BRAND` in `src/lib/constants.ts`                                     |
| Booking link (Cal.com)            | `CTA_URL` in `src/lib/constants.ts`                                   |
| Display email                     | `EMAIL_DISPLAY` (visible) / `CONTACT_TO` (Resend recipient)           |
| Service offerings + pricing       | `SERVICES` array in `src/lib/constants.ts`                            |
| Featured project (live work)      | `FEATURED_WORK` in `src/lib/constants.ts`                             |
| YouTube video shown under "Work"  | `FEATURED_WORK.youtubeId`                                             |
| Socials (YouTube/Kick/Twitch/GH)  | `SOCIALS` array in `src/lib/constants.ts`                             |
| Nav links                         | `NAV_LINKS` array in `src/lib/constants.ts`                           |
| Hero value-prop sentence          | `src/components/Hero.tsx` (marked with a TODO)                        |
| About paragraphs                  | `src/components/About.tsx`                                            |
| Headshot                          | Replace the placeholder block in `src/components/About.tsx`           |
| Design tokens (colors, fonts)     | `@theme` block in `src/app/globals.css`                               |
| Site metadata + OG description    | `src/app/layout.tsx`                                                  |
| OG image                          | `src/app/opengraph-image.tsx` (regenerates at build)                  |

### Swap the featured project

1. Drop a screenshot in `public/work/your-screenshot.png` (any aspect ratio
   — the card is `16:10`, anything else letterboxes).
2. In `src/lib/constants.ts`, set:
   ```ts
   screenshot: {
     src: "/work/your-screenshot.png",
     alt: "Short, descriptive alt text",
     width: 1600,
     height: 1000,
   }
   ```
3. Fill in `liveUrl`, `name`, `blurb`, and (optional) `youtubeId`.

### Add a testimonial

Push an object into the `TESTIMONIALS` array in `src/lib/constants.ts`:

```ts
{
  quote: "Jacob shipped our site in a week and it still loads instantly.",
  author: "First Last",
  role: "Owner",
  company: "Their Business",
}
```

The Testimonials section auto-hides when the array is empty and renders a
2-column grid as soon as you add entries.

## Architecture (skim)

- **App Router, dark only.** No theme toggle. All pages render statically
  except `/api/contact` (POST → Resend).
- **Sections are isolated.** `src/app/page.tsx` composes
  `Hero · Services · Work · Testimonials · About · Contact`, each in its
  own file under `src/components/`. Add a new section by writing the
  component and dropping it into `page.tsx`.
- **Subtle motion only.** `AnimateIn` wraps any block that should fade in
  on scroll. Don't reach for Framer Motion beyond that.
- **No CMS, no client-side data fetch, no third-party scripts** other than
  Vercel Analytics and the lazy YouTube embed.

## TODOs to clear before launch

`grep -rn "TODO:" src` for the full list. Highlights:

- `BRAND.legalName` — confirm "Tranq Tech LLC" formation, otherwise drop
  back to "Tranqy".
- `CTA_URL` — replace with the real cal.com handle.
- `EMAIL_DISPLAY` / `CONTACT_TO` — wire up the `jacob@tranqy.com` inbox
  and verify `tranqy.com` in Resend, then update `FROM_ADDRESS` in the
  contact route.
- `SERVICES[*].startingPrice` — set real prices.
- `FEATURED_WORK` — replace placeholder with first shipped client project
  (screenshot, blurb, live URL, real YouTube id).
- `Hero` value-prop sentence — tighten with a specific local-audience hook.
- `About` headshot block — drop in a real photo or stylized avatar.
