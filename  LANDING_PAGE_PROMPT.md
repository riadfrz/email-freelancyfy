# Freelancyfy Landing Page — Build Prompt

## Goal

Build a standalone, production-ready email-collection landing page for **Freelancyfy** — a platform that connects businesses with top freelancers. The page captures early-access emails and stores them in **Supabase**.

---

## Tech Stack

- React 18 + TypeScript + Vite
- TailwindCSS (custom config below)
- Framer Motion (animations)
- Supabase JS client (`@supabase/supabase-js`) for email storage
- Lucide React (icons)
- Inter font (Google Fonts)

> No router needed. Single page: `src/pages/LandingPage.tsx` with a `src/lib/supabase.ts` client file.

---

## Design System

Match the existing Freelancyfy visual identity exactly.

### Colors

```js
// tailwind.config.ts — extend colors with:
colors: {
  landing: {
    bg:               '#000000',
    surface:          '#0E0E10',
    surfaceHighlight: '#1C1C1F',
    primary:          '#FFFFFF',
    secondary:        '#8A8F98',
    border:           'rgba(255,255,255,0.08)',
    accent:           '#5E6AD2',   // purple/indigo — use for CTAs and glows
  },
  admin: {
    sidebar:    '#0a0a0d',
    card:       '#111114',
    cardHover:  '#161619',
    surface:    '#0d0d10',
    muted:      '#A1A1AA',
    accent:     '#27272A',
  },
  status: {
    success:        '#10b981',
    successMuted:   'rgba(16,185,129,0.12)',
    warning:        '#f59e0b',
    warningMuted:   'rgba(245,158,11,0.12)',
    danger:         '#ef4444',
    dangerMuted:    'rgba(239,68,68,0.12)',
    info:           '#6366f1',
    infoMuted:      'rgba(99,102,241,0.12)',
  },
}
```

### Typography

- **Font**: Inter (weights 400, 500, 600, 700) — import from Google Fonts in `index.html`
- **Smoothing**: `-webkit-font-smoothing: antialiased`
- **Hero heading**: `text-5xl md:text-7xl font-bold` with gradient:
  ```css
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ```
- **Section headings**: `text-3xl md:text-4xl font-semibold text-white`
- **Body / subtext**: `text-sm text-landing-secondary`

### Border Radius

- Cards: `rounded-2xl`
- Inputs & buttons: `rounded-lg`
- Pills/badges: `rounded-full`

### Shadows & Glows

- No heavy drop shadows — flat, modern minimalist look
- Accent glow on CTA button: `shadow-[0_0_20px_rgba(94,106,210,0.35)]`
- Deep dark shadow on cards (hover): `shadow-[0_20px_40px_-12px_rgba(0,0,0,1)]`

### Animations (add to tailwind config)

```js
keyframes: {
  'fade-in-up': {
    '0%':   { opacity: '0', transform: 'translateY(24px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  'hero-enter': {
    '0%':   { opacity: '0', transform: 'scale(0.96) translateY(16px)' },
    '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
  },
  sheen: {
    '0%, 100%': { opacity: '0.3' },
    '50%':      { opacity: '0.7' },
  },
},
animation: {
  'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.16,1,0.3,1) both',
  'hero-enter': 'hero-enter 1.2s cubic-bezier(0.16,1,0.3,1) both',
  'sheen':      'sheen 4s ease-in-out infinite',
},
```

### Global Background Effect

Apply to `<body>` or the page wrapper:

```css
background: #000000;
/* Subtle purple radial glow centered above the fold */
background-image: radial-gradient(
  ellipse at 50% 0%,
  rgba(94, 106, 210, 0.15) 0%,
  rgba(0, 0, 0, 0) 70%
);
```

---

## Page Sections

### 1. Header / Navbar

- Sticky top, `backdrop-blur-xl`, `bg-black/60`, `border-b border-landing-border`
- Left: Freelancyfy logo (`logo-light.svg` from `src/assets/`) + wordmark in white
- Right: "Get Early Access" button (accent style, small)
- Height: `h-16`, max-width container `max-w-[1280px] mx-auto px-6`

---

### 2. Hero Section

- Full viewport height (`min-h-screen`) centered content
- **Badge**: Small pill above heading — `"🚀 Now accepting early access"` — style: `rounded-full border border-landing-border bg-landing-surface/50 px-4 py-1 text-xs text-landing-secondary`
- **Heading**: `"The smarter way to hire freelancers"` — gradient text, `text-5xl md:text-7xl font-bold leading-tight`
- **Subheadline**: `"Connect with vetted freelancers, manage projects, and pay securely — all in one place."` — `text-lg text-landing-secondary max-w-xl mx-auto`
- **Email form** (inline on desktop, stacked on mobile):
  - Input: `bg-landing-surface border border-landing-border rounded-lg px-4 py-3 text-sm text-white placeholder-landing-secondary/50 focus:border-landing-accent focus:ring-1 focus:ring-landing-accent focus:outline-none w-full md:w-80`
  - Button: `bg-landing-accent hover:bg-landing-accent/90 text-white rounded-lg px-6 py-3 text-sm font-medium shadow-[0_0_20px_rgba(94,106,210,0.35)] transition-all`
  - Loading state: spinner icon + disabled, 1.2s simulated delay before Supabase insert
  - Success state: replace form with `"✓ You're on the list! We'll be in touch."` in `text-status-success`
  - Error state: show error message below input in `text-status-danger text-xs`
- **Social proof**: `"Join 2,000+ businesses already on the waitlist"` with 5 avatar circles (placeholder initials, overlapping, `ring-2 ring-black`)
- Animation: `animate-hero-enter` on heading, staggered `animate-fade-in-up` on subtext and form

---

### 3. Features Section

- Section label: `"FEATURES"` — `text-xs font-semibold tracking-widest text-landing-accent`
- Heading: `"Everything you need to scale your team"`
- 3-column grid (`grid-cols-1 md:grid-cols-3 gap-6`), each card:
  - `rounded-2xl border border-landing-border bg-landing-surface/20 p-8`
  - Hover: `hover:border-landing-accent/40 hover:bg-landing-surface/40 transition-all`
  - Icon container: `h-12 w-12 rounded-lg bg-landing-accent/10 text-landing-accent mb-4`
  - Cards:
    1. **Vetted Freelancers** (Users icon) — "Every freelancer is reviewed and verified before joining."
    2. **Fast Matching** (Zap icon) — "AI-powered matching gets you the right person in minutes."
    3. **Secure Payments** (Shield icon) — "Escrow-based payments protect both sides, always."

---

### 4. How It Works Section

- Heading: `"Go from idea to done in 3 steps"`
- Horizontal step layout on desktop, vertical on mobile
- Steps connected by a dashed line (`border-dashed border-t border-landing-border`)
- Each step:
  - Number badge: `w-8 h-8 rounded-full bg-landing-accent/10 border border-landing-accent/30 text-landing-accent text-sm font-bold`
  - Title: `text-white font-semibold`
  - Description: `text-landing-secondary text-sm`
  - Steps: `Post a Project` → `Get Matched` → `Start Working`

---

### 5. Social Proof / Stats Bar

- Full-width `border-y border-landing-border bg-landing-surface/30 py-12`
- 3 stats side by side:
  - `2,000+` — Businesses on waitlist
  - `500+` — Vetted freelancers
  - `< 24h` — Average match time
- Each stat: number in `text-4xl font-bold text-white`, label in `text-sm text-landing-secondary`

---

### 6. Second CTA Section

- Centered, `py-32`
- Heading: `"Be first. Spots are limited."` — gradient text
- Subtext: `"We're onboarding businesses one by one to ensure quality. Reserve your spot today."`
- Repeat the email form component (same logic, shared state or separate instance)
- Subtle decorative element: blurred `bg-landing-accent/10 rounded-full blur-3xl` circle behind

---

### 7. Footer

- `border-t border-landing-border py-8`
- Left: Freelancyfy logo (small) + `© 2025 Freelancyfy. All rights reserved.`
- Right: `Privacy Policy` and `Terms` links (placeholder `#` hrefs) in `text-landing-secondary text-sm hover:text-white`

---

## Supabase Integration

### 1. Create Table in Supabase

Run this SQL in the Supabase dashboard SQL editor:

```sql
create table if not exists waitlist (
  id         uuid primary key default gen_random_uuid(),
  email      text not null unique,
  created_at timestamptz default now()
);

-- Disable RLS for now (enable + add policy before going to production)
alter table waitlist disable row level security;
```

### 2. Supabase Client (`src/lib/supabase.ts`)

```ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl  = import.meta.env.VITE_SUPABASE_URL  as string;
const supabaseKey  = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseKey);
```

### 3. Environment Variables (`.env`)

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key
```

### 4. Email Submit Logic

```ts
const handleSubmit = async (email: string) => {
  setLoading(true);
  setError(null);

  const { error } = await supabase
    .from('waitlist')
    .insert([{ email }]);

  if (error) {
    if (error.code === '23505') {
      setError("You're already on the list!");
    } else {
      setError('Something went wrong. Please try again.');
    }
  } else {
    setSuccess(true);
  }

  setLoading(false);
};
```

---

## File Structure

```
src/
├── assets/
│   ├── logo-light.svg        # white version of logo
│   └── logo-dark.svg
├── lib/
│   └── supabase.ts           # supabase client
├── components/
│   └── landing/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── HowItWorks.tsx
│       ├── StatsBar.tsx
│       ├── SecondCTA.tsx
│       ├── Footer.tsx
│       └── EmailForm.tsx     # shared reusable email form
└── pages/
    └── LandingPage.tsx       # composes all sections
```

---

## Additional Notes

- Use `max-w-[1280px] mx-auto px-6` as the consistent container width
- All sections use `py-24` vertical padding
- Framer Motion: use `initial={{ opacity: 0, y: 24 }}` + `whileInView={{ opacity: 1, y: 0 }}` + `viewport={{ once: true }}` on each section for scroll-triggered entrance
- No custom CSS files — Tailwind utility classes only
- No `any` types — strict TypeScript throughout
- Use `satisfies` instead of `as` for type assertions
- Package manager: **pnpm** (`pnpm add @supabase/supabase-js framer-motion lucide-react`)
