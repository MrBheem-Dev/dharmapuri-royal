# Dharmapuri Royal Furniture & Home Appliances — Next.js Website

## Tech Stack
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS** (Deep Maroon & Gold custom theme)
- **next/font/google** — Playfair Display + Inter (zero layout shift)
- **JSON-LD** structured data (LocalBusiness schema for Google)
- **Sitemap** & **robots.txt** auto-generated

## Project Structure
```
app/
├── layout.tsx          ← Root layout: fonts, global SEO metadata
├── page.tsx            ← Home page + JSON-LD structured data
├── globals.css         ← Tailwind + custom CSS
├── sitemap.ts          ← Auto sitemap.xml
├── robots.ts           ← Auto robots.txt
├── not-found.tsx       ← Custom 404
└── components/
    ├── Navbar.tsx      ← Sticky nav, mobile hamburger
    ├── Hero.tsx        ← Hero section
    ├── WhyUs.tsx       ← 6-feature grid
    ├── Packages.tsx    ← Silver / Gold / Royal cards
    ├── Products.tsx    ← Furniture & appliances grid
    ├── Promise.tsx     ← CTA strip
    ├── Contact.tsx     ← WhatsApp enquiry form
    └── Footer.tsx
```

## Before going live — replace these

| Placeholder | Replace with |
|---|---|
| `+91XXXXXXXXXX` | Actual phone number (no spaces) |
| `info@dharmapuriroyal.com` | Real email |
| `dharmapuriroyal.com` | Your actual domain |
| `/og-image.jpg` | 1200×630 store photo |
| Geo coordinates in `page.tsx` | Exact lat/lon of your store |

## Commands
```bash
npm install        # install dependencies
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve production build
```

## SEO Checklist
- [x] `<title>` + `<meta description>` with local keywords
- [x] Open Graph + Twitter Card tags
- [x] JSON-LD LocalBusiness structured data
- [x] `sitemap.xml` auto-generated
- [x] `robots.txt` auto-generated
- [x] Canonical URL set
- [x] Tamil Nadu city keywords in metadata
- [x] `next/font` — no layout shift on fonts
- [ ] Add Google Search Console after deploy
- [ ] Submit sitemap to GSC
- [ ] Add real OG image (1200×630 store photo)
- [ ] Register on Google Business Profile
