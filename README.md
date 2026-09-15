# Glasshill Pansol — Landing Page

A Next.js 14 (App Router) + TypeScript + Tailwind landing page for Glasshill
Pansol, a private hot-spring villa in Pansol, Calamba.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The first build needs an internet connection —
`next/font/google` downloads Cormorant and Jost once at build time and
self-hosts them from then on (no client-side calls to Google Fonts, no
layout shift).

```bash
npm run build   # production build
npm run start   # serve the production build
```

## What's here

```
app/
  layout.tsx      – fonts, metadata
  page.tsx        – assembles the sections below
  globals.css     – base styles, focus states, the photo "grade" treatment
components/
  Logo.tsx             – SVG brand mark + typographic wordmark (Cormorant)
  Navbar.tsx           – sticky nav, transparent over the hero
  Hero.tsx             – full-bleed pool shot, headline, CTAs
  Intro.tsx            – "the villa" — quick facts + copy
  RelaxUnwind.tsx      – hot-spring pools
  EntertainConnect.tsx – karaoke / billiards / bar / dining
  ComfortDine.tsx      – rooms, ramp access, parking, kitchen, BBQ
  Location.tsx         – map + directions
  Inquire.tsx          – reservation-request form + FB/IG
  Footer.tsx
public/images/    – photos cropped from the provided marketing graphic
```

## Design notes

- **Type**: the wordmark font is **Cormorant**, the closest free match to the
  logo you sent (thin, high-contrast old-style serif with wide tracking).
  Body/UI text is **Jost**, a geometric sans that keeps the page feeling
  current next to the heritage serif. If you own the exact logo font's
  license file, drop the `.woff2` into `app/fonts/` and swap the
  `next/font/google` calls in `app/layout.tsx` for `next/font/local`.
- **Color**: pulled directly from your assets — the espresso brown and linen
  cream are sampled from the logo file itself; the deep blue accent is
  sampled from your night-time jacuzzi photo, used as the one accent color
  across CTAs so it doesn't compete with the earth tones.
- **Photography**: the images in `public/images` are cropped straight out of
  your "Discover Glasshill" marketing graphic, so the page reads as *your*
  property right away. They're fine for a first deploy, but they were
  upscaled from a compressed source — swap in your original, full-resolution
  photos (same filenames, or update the `src` paths in each component) as
  soon as you have them, especially for `hero-pool.jpg`.
- **Booking**: `Inquire.tsx` currently opens the visitor's email client with
  a pre-filled message (no backend required). Point the Facebook/Instagram
  links at your real handles, and if you'd rather collect requests
  server-side, wire the form's `handleSubmit` to Formspree, Resend, or your
  booking system of choice.
- **Map**: `Location.tsx` embeds a keyless Google Maps iframe centered on
  "Pansol, Calamba, Laguna." Replace the query string with your exact address
  or coordinates once you're ready to publish.

## Extra assets

`public/images` also includes a few cropped photos that aren't wired into
any component yet — `balcony-ramp.jpg`, `outdoor-chaise.jpg`,
`parking-topdown.jpg`, `poolview-lounge.jpg`, `tv-lounge.jpg`. Handy if you
want to extend the Rooms or Entertain sections with a fuller gallery later.

## Before you launch

- [ ] Swap placeholder photography for full-resolution shots
- [ ] Confirm/adjust the copy in `Intro.tsx` (guest count, distance from Manila)
- [ ] Point `Inquire.tsx` and `Footer.tsx` at your real email/FB/IG
- [ ] Set the exact map query in `Location.tsx`
- [ ] Add real Open Graph / favicon assets if you want more than `app/icon.svg`
