# ELSEWHERE — Cinematic Luxury Travel Website

A premium, multi-page portfolio website for a fictional luxury travel brand.

**Tagline:** "The world is closer than you think."

---

## Tech stack

- React 18 + TypeScript
- Vite 5
- React Router 6
- GSAP 3 + ScrollTrigger
- Custom CSS (no UI framework)

---

## Setup

```bash
npm install
npm run dev        # development server at http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build
```

---

## Routes

| Route | Page |
|---|---|
| `/` | Homepage — hero, featured destinations, journeys, journal, CTA |
| `/destinations` | All destinations with region + style filters |
| `/destinations/:slug` | Individual destination with gallery and enquiry link |
| `/journeys` | All journeys list |
| `/journeys/:slug` | Journey detail with full itinerary |
| `/about` | Brand story and travel philosophy |
| `/journal` | Editorial articles grid |
| `/journal/:slug` | Individual article |
| `/contact` | Enquiry form (portfolio demo — no data is sent) |
| `/*` | Custom 404 page |

---

## Data

All content is local TypeScript data in `src/data/`:

- `destinations.ts` — 6 destinations with gallery images, highlights, climate info
- `journeys.ts` — 4 journeys with full day-by-day itineraries
- `articles.ts` — 6 journal articles with full body text

---

## Deployment (SPA fallback)

Because this uses client-side routing, the server must redirect all routes to `index.html`.

### Netlify
Create `public/_redirects`:
```
/* /index.html 200
```

### Vercel
Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Apache
Add to `.htaccess`:
```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

### Nginx
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## Notes

- The contact form is a **portfolio demonstration** and does not send real enquiries.
- All photography is from [Unsplash](https://unsplash.com) (free to use).
- Animations respect `prefers-reduced-motion`.
- Gallery supports keyboard (←/→), touch swipe, and pointer drag.
