
## Zam Zam Hostel — Single-page conversion-focused website

A modern, SEO-optimized landing page targeting students/parents searching for hostels in Panvel. Built as a single long-scroll page with a sticky Call/WhatsApp bar always in view.

### Design system
- **Palette:** Deep indigo primary (trust), warm orange/amber accent (youth), off-white background, WhatsApp green + bold blue CTAs
- **Typography:** Poppins for headings, Inter for body (via Google Fonts)
- **Motion:** Subtle fade-in-on-scroll, image hover zoom, gentle pulse on primary CTAs — kept light for performance
- **Mobile-first** (current viewport is narrow — sticky bottom CTA bar is critical)

### Page sections (in order)
1. **Sticky top nav** — logo "Zam Zam Hostel" + Call button (always visible on desktop)
2. **Hero** — full-bleed hostel image, name, tagline "Your Student Home in Panvel – Safe, Affordable & Comfortable", urgency line "Limited beds available", primary 📞 Call Now (blue) + 💬 WhatsApp (green) buttons
3. **Trust strip** — quick badges: Owner-supervised • Multiple properties • Student-friendly • Meals included
4. **About** — short intro, owner mention (Mufti Zaid Mansoor Surme), values
5. **Rooms & Accommodation** — cards for 1BHK / 2BHK / 3BHK with sharing options (3/4/5 sharing), images, clean specs
6. **Facilities** — icon grid: Food, Washing Machine, Refrigerator, Electricity included, Clean & safe, Supervised
7. **Food / Mess plans** — 3 meal options summarized
8. **Pricing** — 3 cards: ₹4500 (No food), ₹6000 (One meal), **₹7500 "Most Popular" (Lunch + Dinner)** highlighted with accent color, each with Call/WhatsApp CTA
9. **Gallery** — responsive image grid with hover zoom (rooms, beds, mess, common area)
10. **Testimonials** — 3 short student/parent quotes in cards
11. **Location** — embedded Google Map of Panvel + "Get Directions" button + nearby colleges note
12. **Contact** — phone (click-to-call 9833642422), WhatsApp button, address placeholder
13. **Footer** — quick links, copyright
14. **Sticky bottom mobile bar** — full-width Call + WhatsApp buttons, always visible on mobile

### SEO setup
- `<title>` + meta description targeting "Hostel in Panvel", "Student hostel in Panvel", "PG for students in Panvel"
- Proper H1 → H2 → H3 hierarchy
- Semantic HTML (`<section>`, `<article>`)
- Image alt text on every image
- JSON-LD structured data (LocalBusiness / LodgingBusiness schema with phone, address, price range)
- Open Graph tags for WhatsApp/social sharing previews
- robots.txt + basic sitemap

### Conversion mechanics
- Call/WhatsApp CTAs repeated after Hero, Pricing, and Contact
- WhatsApp deep-links with prefilled message ("Hi, I'm interested in Zam Zam Hostel…")
- `tel:` links for one-tap calling on mobile
- "Most Popular" tag on ₹7500 plan
- Urgency messaging ("Limited beds available")

### Out of scope (can add later)
- Backend lead form, admin dashboard, multi-language, blog
