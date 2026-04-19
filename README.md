<div align="center">

# 🏨 Zam Zam Hostel — Panvel

**Modern, conversion-focused student hostel website**

[![Live Site](https://img.shields.io/badge/Live_Site-zamzamhostel.com-indigo?style=for-the-badge&logo=vercel)](https://zamzamhostel.com)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)

</div>

---

## 📖 Overview

A fully responsive, SEO-optimised marketing website for **Zam Zam Hostel** — an affordable student accommodation provider in Panvel, Navi Mumbai. The site is designed to drive enquiries through prominent Call and WhatsApp CTAs, showcase the hostel's rooms, facilities, and pricing, and build trust with prospective students and parents.

The entire website is a single-page application (SPA) with smooth scroll navigation, scroll-reveal animations, and a persistent sticky contact bar on mobile.

---

## ✨ Features

| Feature | Details |
|---|---|
| 🎨 **Design System** | Deep Indigo + Warm Amber palette; Poppins (display) + Inter (body) |
| 📱 **Fully Responsive** | Mobile-first layout; hamburger nav drawer on mobile/tablet |
| 🗺️ **Exact Location** | Google Maps pin linking directly to the hostel (not just the city) |
| 💬 **One-tap CTAs** | Persistent Call + WhatsApp bar on mobile; CTA buttons in every section |
| 🌟 **Scroll Reveal** | Smooth `opacity + translateY` entrance animations on all sections |
| 🔖 **Branded Favicon** | Custom SVG "ZZ" monogram favicon matching the navbar logo |
| 🔍 **SEO Ready** | Title, meta description, Open Graph, Twitter Card, JSON-LD schema |
| ⚡ **Performance** | Lazy-loaded images, `fetchpriority="high"` on hero, SVG favicon |
| 🍎 **iOS Friendly** | Dynamic viewport height (`dvh`), safe-area inset padding, Apple touch icon |

---

## 🗂️ Page Sections

The site is composed of the following sections, in order:

1. **TopNav** — Sticky header with logo, desktop nav links, Call Now button, and mobile hamburger menu
2. **Hero** — Full-viewport hero image with headline, tagline, and CTA buttons
3. **TrustStrip** — Key trust signals (owner-supervised, meals included, etc.)
4. **About** — Brief hostel overview and owner introduction
5. **Rooms** — 3 / 4 / 5 sharing room cards with photos and features
6. **Facilities** — Icon grid: meals, washing machine, fridge, electricity, hygiene, security
7. **Pricing** — Three transparent monthly plans (Stay Only / Single Meal / Full Meals)
8. **Gallery** — Masonry photo grid of rooms, food, and common areas
9. **Testimonials** — Student and parent review cards
10. **Location** — Embedded map + "Get Directions" button (exact hostel pin)
11. **Contact** — Full-width CTA section with Call + WhatsApp cards
12. **Footer** — Links, contact info, copyright, developer credit
13. **StickyMobileBar** — Persistent bottom bar on mobile with Call + WhatsApp

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 18](https://react.dev) + [TypeScript 5](https://typescriptlang.org) |
| Build Tool | [Vite 5](https://vitejs.dev) with `@vitejs/plugin-react-swc` |
| Styling | [Tailwind CSS 3](https://tailwindcss.com) with custom HSL design tokens |
| UI Primitives | [Radix UI](https://www.radix-ui.com) + [shadcn/ui](https://ui.shadcn.com) |
| Icons | [Lucide React](https://lucide.dev) |
| Routing | [React Router v6](https://reactrouter.com) |
| Fonts | Google Fonts — Poppins (700/800) + Inter (400/500/600) |
| Linting | ESLint 9 + TypeScript ESLint |
| Testing | Vitest + Testing Library |

---

## 📁 Project Structure

```
zam-zam-panvel-living/
├── public/
│   ├── favicon.svg          # Branded ZZ monogram favicon (SVG)
│   ├── favicon.ico          # Legacy .ico fallback
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── assets/              # Optimised hostel photos
│   │   ├── hero-hostel.jpg
│   │   ├── room-3sharing.jpg
│   │   ├── room-4sharing.jpg
│   │   ├── room-5sharing.jpg
│   │   ├── gallery-food.jpg
│   │   ├── gallery-kitchen.jpg
│   │   ├── gallery-common.jpg
│   │   └── gallery-bed.jpg
│   │
│   ├── components/
│   │   ├── sections/        # One file per page section
│   │   │   ├── Hero.tsx
│   │   │   ├── TrustStrip.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Rooms.tsx
│   │   │   ├── Facilities.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Location.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/              # shadcn/ui base components
│   │   ├── CTAButtons.tsx   # Reusable Call + WhatsApp button pair
│   │   ├── TopNav.tsx       # Sticky header with mobile menu
│   │   └── StickyMobileBar.tsx
│   │
│   ├── hooks/
│   │   └── use-reveal.ts    # Intersection Observer scroll reveal
│   │
│   ├── lib/
│   │   ├── hostel.ts        # ⚙️ Central config — phone, location, maps link
│   │   └── utils.ts
│   │
│   ├── pages/
│   │   ├── Index.tsx        # Main page — assembles all sections
│   │   └── NotFound.tsx
│   │
│   ├── App.tsx
│   ├── App.css
│   ├── index.css            # Design system tokens + global styles
│   └── main.tsx
│
├── index.html               # SEO meta, favicon links, JSON-LD schema
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

---

## ⚙️ Central Configuration

All hostel-specific content (phone number, location, Maps link, owner name) lives in one place — **`src/lib/hostel.ts`**. Update this file to change any business details site-wide:

```ts
// src/lib/hostel.ts
export const HOSTEL = {
  name: "Zam Zam Hostel",
  phone: "9833642422",
  phoneIntl: "+919833642422",
  location: "Panvel, Maharashtra",
  owner: "Mufti Zaid Mansoor Surme",
  mapsHref: "https://maps.app.goo.gl/7V1wKRepDgHPKCfU9",  // ← exact hostel pin
  whatsappMessage: "Hi, I'm interested in Zam Zam Hostel...",
};
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) v18 or higher
- npm / bun

### Installation

```bash
# Clone the repository
git clone https://github.com/Arsan-sk/zam-zam-hotel-portfolio.git
cd zam-zam-hotel-portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:8080` with hot module replacement.

### Build for Production

```bash
npm run build
```

Output is in the `dist/` folder — ready to deploy on Vercel, Netlify, or any static host.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 🎨 Design Tokens

The design system is defined as CSS custom properties in `src/index.css` and consumed via Tailwind's `theme.extend.colors`:

| Token | Value | Use |
|---|---|---|
| `--primary` | `hsl(230 65% 22%)` | Deep Indigo — trust, authority |
| `--accent` | `hsl(35 95% 55%)` | Warm Amber — energy, youth |
| `--call` | `hsl(218 88% 45%)` | Call-to-action blue |
| `--whatsapp` | `hsl(142 70% 42%)` | WhatsApp green |
| `--background` | `hsl(40 33% 98%)` | Warm off-white |

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Behaviour |
|---|---|---|
| Base (mobile) | `< 640px` | Single column, hamburger nav, stacked CTAs |
| `sm` | `≥ 640px` | Two-column grids start appearing |
| `md` | `≥ 768px` | Three-column layouts (rooms, pricing, footer) |
| `lg` | `≥ 1024px` | Desktop nav visible, hamburger hidden |
| `2xl` | `≥ 1320px` | Max container width capped |

---

## 🔍 SEO Implementation

- **Title tag** — descriptive, keyword-rich
- **Meta description** — conversion-focused with phone number
- **Open Graph** — `og:title`, `og:description`, `og:image` for link previews
- **Twitter Card** — `summary_large_image` format
- **JSON-LD Schema** — `LodgingBusiness` structured data for Google rich results
- **Canonical URL** — prevents duplicate content
- **Sitemap** — `public/sitemap.xml`
- **Robots.txt** — `public/robots.txt`

---

## 📍 Location

The hostel's exact Google Maps pin is used throughout:

**[Zam Zam Hostel, Panvel →](https://maps.app.goo.gl/7V1wKRepDgHPKCfU9)**

---

## 👨‍💻 Developer

Built with ❤️ by **[Shaikh Mohd Arsan](https://arsansk.vercel.app)**

---

<div align="center">
<sub>© 2025 Zam Zam Hostel, Panvel. All rights reserved.</sub>
</div>
