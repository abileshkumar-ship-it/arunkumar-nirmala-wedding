# Arun Kumar S & Nirmala – Wedding Invitation Website

A single-page, mobile-first wedding invitation built with **React + Vite + Bootstrap 5**, themed after the invitation poster (royal purple, lavender, ivory and gold).

## Features

- Hero with Bible verse, names (Arun Kumar S / Nirmala) and floral artwork
- Live countdown to the wedding (cleans up its timer on unmount)
- Ceremony and reception cards (kept clearly separate)
- Family cards for both sides
- Reception venue with an embedded Google Map and a **Get Directions** button
- Invitation poster with a click-to-enlarge lightbox
- **Add to Calendar** (downloads an `.ics` file you import yourself)
- Scroll-reveal animations (Intersection Observer), floating florals, back-to-top button
- Respects `prefers-reduced-motion`
- No API keys, no backend

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview    # preview the production build
```

Requires Node.js 18 or newer.

## IMPORTANT: add your invitation poster

The poster image is **not included**. Save your invitation image as:

```
public/wedding-invitation.png
```

It is used by the invitation section (with lightbox) and as the social-sharing (Open Graph) image. Its original aspect ratio is preserved. If you use a `.jpg`, change the file name in `src/data/weddingData.js` (`poster.src`) and `index.html` (`og:image`).

For best sharing previews, set `og:image` in `index.html` to your full live URL after deploying, e.g. `https://your-site.vercel.app/wedding-invitation.png`.

## Editing wedding details

Everything lives in **`src/data/weddingData.js`**: names, verse, dates, times, venues, addresses, family details and the map links. Components contain no hard-coded wedding information.

- **TPM Kellys address:** when you have it, put it in `events.ceremony.address`. It will appear on the ceremony card automatically.
- **Groom's father's description:** it currently reads "Retired Tamilnadu Secretariat". Change `families.groom.members[0].note` if you prefer different wording.

## Countdown timezone

The countdown targets **midnight at the start of 12 January 2027, Asia/Kolkata (IST, UTC+05:30)**, stored as `2027-01-12T00:00:00+05:30`. Because it is one absolute moment, every visitor sees the same remaining time regardless of their device's timezone.

## Google Maps

The map uses a key-free embed URL built from the venue address text (no invented coordinates):

```
https://www.google.com/maps?q=<encoded address>&output=embed
```

The **Get Directions** button opens `https://www.google.com/maps/dir/?api=1&destination=<encoded address>` in a new tab. After deploying, open the live site and check that the map pin lands on the hall.

## Optional: WhatsApp RSVP

RSVP is intentionally left out, since it needs a contact number or a backend and this project has neither. To add a simple one later, build a link such as:

```
https://wa.me/<countrycode><number>?text=<encoded message with guest name, attendees and note>
```

and put it behind a button. Never present it as "saved" unless a real backend exists.

## Project structure

```
src/
  assets/flowers/        (reserved for extra floral images)
  components/
    Navbar.jsx  Hero.jsx  Countdown.jsx  EventDetails.jsx
    FamilySection.jsx  VenueMap.jsx  Gallery.jsx
    ClosingSection.jsx  Footer.jsx  BackToTop.jsx
    Floral.jsx  (SVG florals + gold divider)   Reveal.jsx  (scroll animation)
  data/weddingData.js
  hooks/useCountdown.js  useReveal.js
  styles/global.css  responsive.css
  utils/calendar.js      (.ics generation)
  App.jsx  main.jsx
public/
  favicon.svg
  flowers/
  wedding-invitation.png   <- add your poster here
index.html  package.json  vite.config.js  vercel.json
```

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Sign in at [vercel.com](https://vercel.com) (GitHub login works).
3. Click **Add New → Project** and import the repository.
4. Confirm the build settings (already set in `vercel.json`):
   - Framework Preset: **Vite**
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**.
6. Open the live URL and verify: countdown running, both event cards, map and Get Directions, poster lightbox, Add to Calendar, and the mobile menu.

Do not commit secrets. No environment variables are required.
