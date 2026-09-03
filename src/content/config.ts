import { defineCollection, z } from 'astro:content';

const statPair = z.object({ value: z.string(), label: z.string() });

const instructors = defineCollection({
  type: 'data',
  schema: z.object({
    order: z.number(),
    name: z.string(),
    short: z.string(),
    role: z.string(),
    title: z.string(),
    tagline: z.string(),
    bio: z.string(),
    brush: z.string(),
    image: z.string(),
    stats: z.array(statPair)
  })
});

const testimonials = defineCollection({
  type: 'data',
  schema: z.object({
    order: z.number(),
    name: z.string(),
    initial: z.string(),
    image: z.string().nullable().optional(),
    isReal: z.boolean().default(false),
    disc: z.string(),
    since: z.string(),
    style: z.string(),
    quote: z.string(),
    stats: z.array(statPair)
  })
});

// Site-wide settings used across pages (footer, CTA band, prices, address).
const settings = defineCollection({
  type: 'data',
  schema: z.object({
    probetrainingPrice: z.string(),
    monthlyPriceFrom: z.string(),
    bookPrice: z.string(),
    bookCopiesSold: z.string(),
    scheduleLine: z.string(),
    addressStreet: z.string(),
    addressCity: z.string(),
    addressUbahn: z.string(),
    instagramHandle: z.string(),
    instagramUrl: z.string(),
    tiktokHandle: z.string(),
    tiktokUrl: z.string(),
    footerBlurb: z.string(),
    footerBlurbBold: z.string(),
    ctaBandHeadline: z.string(),
    ctaBandBody: z.string(),
    ctaBandButton: z.string()
  })
});

const homePage = defineCollection({
  type: 'data',
  schema: z.object({
    heroEyebrow: z.string(),
    heroHeadline: z.string(),
    heroSubhead: z.string(),
    heroPrimaryButton: z.string(),
    heroSecondaryButton: z.string(),
    heroStats: z.array(statPair),
    minuteLabel: z.string(),
    minuteTitle: z.string(),
    minuteBody: z.string(),
    minuteQuotes: z.array(z.string()),
    minuteClosing: z.string(),
    whyLabel: z.string(),
    whyTitle: z.string(),
    whyLead: z.string(),
    whyReasons: z.array(z.object({ title: z.string(), body: z.string() })),
    disciplinesLabel: z.string(),
    disciplinesTitle: z.string(),
    disciplines: z.array(z.object({ name: z.string(), cjk: z.string().optional() })),
    locationLine: z.string()
  })
});

const trainingPage = defineCollection({
  type: 'data',
  schema: z.object({
    headline: z.string(),
    subhead: z.string(),
    formats: z.array(z.object({ title: z.string(), body: z.string(), stats: z.array(statPair) })),
    locationLine: z.string(),
    ctaButton: z.string(),
    badgeText: z.string(),
    videoLabel: z.string(),
    videoCaption: z.string(),
    videoNote: z.string(),
    videoHref: z.string(),
    section2Label: z.string(),
    section2Title: z.string(),
    section2Body: z.string(),
    section2Button: z.string()
  })
});

const bookPage = defineCollection({
  type: 'data',
  schema: z.object({
    headline: z.string(),
    subhead: z.string(),
    coverCaption: z.string(),
    title: z.string(),
    body: z.string(),
    statCards: z.array(z.object({ value: z.string(), label: z.string(), note: z.string() })),
    primaryButton: z.string(),
    secondaryButton: z.string(),
    badgeText: z.string()
  })
});

const trialPage = defineCollection({
  type: 'data',
  schema: z.object({
    headline: z.string(),
    subhead: z.string(),
    statPills: z.array(statPair),
    whyOptions: z.array(z.string()),
    bringOptions: z.array(z.string()),
    submitButton: z.string(),
    confirmHeadline: z.string(),
    confirmBody: z.string()
  })
});

export const collections = { instructors, testimonials, settings, homePage, trainingPage, bookPage, trialPage };
