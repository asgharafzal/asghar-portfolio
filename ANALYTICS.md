# Portfolio Analytics Integration Guide
**Google Analytics 4 (GA4) + Microsoft Clarity**
Portfolio: asgharafzal.com | Stack: Next.js 14 · TypeScript

---

## Table of Contents
1. [What is Google Analytics 4?](#1-what-is-google-analytics-4)
2. [What is Microsoft Clarity?](#2-what-is-microsoft-clarity)
3. [Why Use Both Together?](#3-why-use-both-together)
4. [What Data You Will See](#4-what-data-you-will-see)
5. [Files Created / Modified](#5-files-created--modified)
6. [Step-by-Step Setup Guide](#6-step-by-step-setup-guide)
7. [How Each File Works](#7-how-each-file-works)
8. [Going Live — Deployment](#8-going-live--deployment)
9. [Reading Your Data](#9-reading-your-data)

---

## 1. What is Google Analytics 4?

**Google Analytics 4 (GA4)** is Google's free, industry-standard web analytics platform.
It tracks every visit to your portfolio and answers the questions:
- How many people visited today, this week, this month?
- Which country / city are they from?
- How did they find you (Google search, LinkedIn, direct link)?
- How long did they stay on the page?
- What device and browser did they use?
- Are visitors new or returning?

### Key GA4 Concepts

| Term | Meaning |
|------|---------|
| **Session** | One continuous visit by a user (ends after 30 min of inactivity) |
| **User** | Unique visitor (tracked via anonymous browser cookie) |
| **Page View** | Every time a page is loaded |
| **Engagement Rate** | % of sessions where user actually interacted (scrolled, clicked) |
| **Acquisition** | How a user arrived — Organic Search, Direct, Referral, Social |
| **Retention** | How many users come back after first visit |
| **Measurement ID** | Your unique GA4 tracker ID — format: `G-XXXXXXXXXX` |

### What GA4 CANNOT Tell You
- The visitor's real name (blocked by privacy laws worldwide)
- Their email address
- Their company name (unless they fill your contact form)

---

## 2. What is Microsoft Clarity?

**Microsoft Clarity** is a 100% free, no-session-limit behavioral analytics tool by Microsoft.
While GA4 tells you *who* visited, Clarity shows you *how* they behaved.

### What Clarity Records

| Feature | Description |
|---------|-------------|
| **Session Recordings** | Full video replay of every visitor's session — mouse movement, scrolls, clicks |
| **Heatmaps** | Colour-coded map showing where users clicked most (red = hot, blue = cold) |
| **Scroll Maps** | How far down the page visitors scroll before leaving |
| **Dead Clicks** | Clicks on non-interactive elements (shows UI confusion) |
| **Rage Clicks** | Repeated fast clicks on one spot (shows user frustration) |
| **JS Errors** | JavaScript errors that visitors encountered |
| **Country & Device** | Same demographic data as GA4 |

### Why Clarity is Powerful for a Portfolio
You can literally watch a recruiter or hiring manager scroll through your portfolio,
see which projects they paused on, and which sections they skipped — helping you
optimise the content that matters most.

---

## 3. Why Use Both Together?

| Question | Tool |
|----------|------|
| How many people visited? | GA4 |
| Which country are they from? | GA4 + Clarity |
| How did they find me? | GA4 |
| What did they actually do on the page? | Clarity |
| Which project got the most attention? | Clarity (heatmap) |
| Did they scroll to "Trusted by"? | Clarity (scroll map) |
| Did they click Download Resume? | GA4 (event) + Clarity |
| Are visitors coming back? | GA4 |

**GA4 = the numbers. Clarity = the story behind the numbers.**

---

## 4. What Data You Will See

### In GA4 Dashboard
```
Total Users:        247
New Users:          198
Sessions:           312
Avg. Session Time:  2m 14s
Engagement Rate:    68%

Top Countries:      United Kingdom (34%), United States (18%), Pakistan (14%)
Top Cities:         London, New York, Lahore, Manchester, Toronto

Traffic Sources:
  Organic Search:   42%
  Direct:           31%
  Referral:         18%   ← LinkedIn, GitHub, etc.
  Social:            9%

Top Pages:
  /             312 views
  /blog          48 views
```

### In Clarity Dashboard
```
Sessions Recorded:  312
Avg. Session Time:  2m 18s
Pages/Session:      1.4

Top Insights:
  - 78% of users scroll past the Hero section
  - Projects section has the highest click heatmap density
  - "Download Resume" button: 43 clicks this month
  - Dead clicks detected on stack tags (users expect them to be links)
```

---

## 5. Files Created / Modified

```
portfolio/
├── src/
│   ├── components/
│   │   └── analytics/                          ← NEW folder
│   │       ├── GoogleAnalytics.tsx             ← NEW — GA4 script component
│   │       └── MicrosoftClarity.tsx            ← NEW — Clarity script component
│   └── app/
│       └── layout.tsx                          ← MODIFIED — imports analytics
├── .env.local                                  ← MODIFIED — added GA4 + Clarity IDs
└── .env.local.example                          ← NEW — template for other environments
```

---

## 6. Step-by-Step Setup Guide

### Step 1 — Create Your Google Analytics 4 Account

1. Go to **https://analytics.google.com**
2. Sign in with your Google account
3. Click **"Start measuring"**
4. **Account name:** `Asghar Afzal Portfolio`
5. **Property name:** `asgharafzal.com`
6. **Industry:** `Arts & Entertainment` or `Other`
7. **Business size:** Small
8. Click **"Create"** → Accept terms
9. Under **"Choose a platform"** select **Web**
10. **Website URL:** `https://asgharafzal.com`
11. **Stream name:** `Portfolio Web`
12. Click **"Create stream"**
13. Copy your **Measurement ID** — it looks like: `G-A1B2C3D4E5`

### Step 2 — Create Your Microsoft Clarity Account

1. Go to **https://clarity.microsoft.com**
2. Sign in with Microsoft, Google, or Facebook account
3. Click **"+ New project"**
4. **Name:** `Asghar Afzal Portfolio`
5. **Website URL:** `https://asgharafzal.com`
6. Click **"Create"**
7. Copy your **Project ID** — it looks like: `abc123def4` (10-character string)
8. You'll see an installation screen — **skip it** (the code is already added)

### Step 3 — Add Your IDs to .env.local

Open `.env.local` in the project root and replace the placeholder values:

```env
# Before:
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_ID=XXXXXXXXXX

# After (use your real IDs):
NEXT_PUBLIC_GA_ID=G-A1B2C3D4E5
NEXT_PUBLIC_CLARITY_ID=abc123def4
```

### Step 4 — Add IDs to Your Hosting Platform (Production)

Since `asgharafzal.com` is hosted, you must add these as environment variables
on your hosting platform too — `.env.local` only works locally.

**If hosted on Vercel:**
1. Go to your project on vercel.com
2. Settings → Environment Variables
3. Add:
   - `NEXT_PUBLIC_GA_ID` = `G-A1B2C3D4E5`
   - `NEXT_PUBLIC_CLARITY_ID` = `abc123def4`
4. Click Save → Redeploy

**If hosted on Netlify:**
1. Site Settings → Environment Variables
2. Add the same two variables above

### Step 5 — Verify It's Working

**GA4 Verification:**
1. Open `https://asgharafzal.com` in your browser
2. In GA4, go to **Reports → Realtime**
3. You should see **"1 user in last 30 minutes"**
4. If you see yourself → GA4 is working ✓

**Clarity Verification:**
1. Open `https://asgharafzal.com` in your browser
2. In Clarity, go to your project dashboard
3. Data appears within **2 hours** of first visit
4. After 24 hours you'll see your first session recording ✓

---

## 7. How Each File Works

### `src/components/analytics/GoogleAnalytics.tsx`

```tsx
"use client";               // Runs in the browser, not on the server
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;  // Reads your ID from .env.local

export function GoogleAnalytics() {
  if (!GA_ID) return null;  // Safety: renders nothing if ID is missing

  return (
    <>
      {/* Script 1: Loads the GA4 library from Google's CDN */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"   // Loads AFTER page is interactive — no performance impact
      />

      {/* Script 2: Initialises GA4 with your Measurement ID */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,  // Tracks which page is being viewed
            send_page_view: true,                 // Automatically sends a page_view event
          });
        `}
      </Script>
    </>
  );
}
```

**Why `strategy="afterInteractive"`?**
Next.js `<Script>` supports three loading strategies:
- `beforeInteractive` — blocks page render (bad for performance)
- `afterInteractive` — loads after page is ready (used here — best balance)
- `lazyOnload` — loads during browser idle time (fine for non-critical scripts)

Using `afterInteractive` ensures analytics never slows down your portfolio's
Core Web Vitals or Lighthouse score.

---

### `src/components/analytics/MicrosoftClarity.tsx`

```tsx
"use client";
import Script from "next/script";

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

export function MicrosoftClarity() {
  if (!CLARITY_ID) return null;

  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`
        /* Clarity's standard installation snippet */
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);       // Creates a <script> element
          t.async=1;                  // Loads asynchronously — non-blocking
          t.src="https://www.clarity.ms/tag/"+i;   // Your unique Clarity endpoint
          y=l.getElementsByTagName(r)[0];
          y.parentNode.insertBefore(t,y);           // Injects script into the page
        })(window, document, "clarity", "script", "${CLARITY_ID}");
      `}
    </Script>
  );
}
```

The Clarity snippet is a self-executing function (IIFE) that:
1. Registers a `clarity()` global function on `window`
2. Creates a `<script>` tag pointing to your unique Clarity CDN endpoint
3. Asynchronously loads the Clarity tracking library
4. Begins recording sessions and capturing click/scroll data immediately

---

### `src/app/layout.tsx` — What Changed

```tsx
// Added imports:
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { MicrosoftClarity } from "@/components/analytics/MicrosoftClarity";

// Added inside <body>, before all other content:
<GoogleAnalytics />
<MicrosoftClarity />
```

**Why in `layout.tsx`?**
`layout.tsx` is the root shell that wraps every page in the Next.js app.
Placing analytics here means they load on every page automatically — the
home page, blog, and any future pages — without needing to add them
individually to each route.

**Why before other content?**
Placing them at the top of `<body>` ensures the tracking scripts are
registered as early as possible, so no user interaction is missed even
on fast connections where the user clicks immediately.

---

### `.env.local` — Environment Variables

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_ID=XXXXXXXXXX
```

**Why `NEXT_PUBLIC_` prefix?**
In Next.js, environment variables are server-side only by default.
The `NEXT_PUBLIC_` prefix explicitly exposes a variable to the browser
(client-side JavaScript). Since GA4 and Clarity scripts run in the
browser, this prefix is required.

**Security note:** Measurement IDs and Clarity Project IDs are safe to
expose publicly — they are designed to be embedded in client-side code
and visible in your page source. They are not secret keys.

---

## 8. Going Live — Deployment

### Checklist Before Deploying

- [ ] GA4 Measurement ID added to `.env.local`
- [ ] Clarity Project ID added to `.env.local`
- [ ] Both IDs added to Vercel/Netlify environment variables
- [ ] Redeployed after adding env vars
- [ ] Verified GA4 Realtime shows your own visit
- [ ] Verified Clarity shows data after 2 hours

### Privacy & GDPR Note

Both GA4 and Clarity collect anonymous data. If you target EU visitors:
- GA4: Enable **"Consent Mode"** in GA4 settings for full GDPR compliance
- Clarity: Add a cookie consent banner (optional for portfolio, required for commercial sites)
- For a personal portfolio, this is generally acceptable without a consent banner

---

## 9. Reading Your Data

### GA4 — Key Reports to Check Daily

| Report | Location | What to Look For |
|--------|----------|------------------|
| Realtime | Reports → Realtime | Live visitors right now |
| Audience Overview | Reports → Overview | Total users, sessions, engagement |
| Acquisition | Reports → Acquisition | Where visitors come from |
| Geography | Reports → Demographics | Country + city breakdown |
| Pages | Reports → Engagement → Pages | Which page gets most views |
| Events | Reports → Engagement → Events | Button clicks, downloads |

### Clarity — Key Features to Use

| Feature | Where | How to Use |
|---------|-------|-----------|
| Session Recordings | Recordings tab | Watch real visitor sessions |
| Heatmaps | Heatmaps tab | See what gets clicked most |
| Scroll depth | Heatmaps → Scroll | See how far visitors scroll |
| Insights | Dashboard | Auto-detected rage/dead clicks |
| Filters | Any view | Filter by country, device, date |

### Pro Tips

1. **Check GA4 weekly** for traffic trends — are visitors growing after you share your portfolio link on LinkedIn?
2. **Check Clarity after interviews** — see if the interviewer visited and what they looked at
3. **Use Clarity's country filter** to see sessions from UK specifically (your NHS-targeted audience)
4. **Set up GA4 goals** to track "Download Resume" clicks as conversion events
5. **Connect GA4 + Clarity** in Clarity settings for a unified view (Clarity has a native GA4 integration)

---

*Integration completed: May 2026*
*Portfolio: asgharafzal.com*
*Stack: Next.js 14 · TypeScript · Tailwind CSS*
