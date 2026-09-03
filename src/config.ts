import { defineCollection, z } from 'astro:content';

const statPair = z.object({ value: z.string(), label: z.string() });

// Instructors and testimonials each live in ONE json file as a drag-reorderable
// list in the CMS (Decap's list widget supports native drag-and-drop + add/remove),
// instead of one file per person. Array order = display order, no manual number needed.
const teacherItem = z.object({
  slug: z.string(),
  name: z.string(),
  short: z.string(),
  role: z.string(),
  title: z.string(),
  tagline: z.string(),
  bio: z.string(),
  brush: z.string(),
  image: z.string(),
  stats: z.array(statPair).default([])
});

const teachers = defineCollection({
  type: 'data',
  schema: z.object({
    teachers: z.array(teacherItem)
  })
});

const studentItem = z.object({
  slug: z.string(),
  name: z.string(),
  initial: z.string(),
  image: z.string().nullable().optional(),
  isReal: z.boolean().default(false),
  disc: z.string(),
  since: z.string(),
  style: z.string(),
  quote: z.string(),
  stats: z.array(statPair).default([])
});

const students = defineCollection({
  type: 'data',
  schema: z.object({
    students: z.array(studentItem)
  })
});

// Site-wide settings used across pages (footer, CTA band, prices, address, nav labels).
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
    ctaBandButton: z.string(),
    navHomeLabel: z.string().default('Main Menu'),
    navAboutLabel: z.string().default('Story Mode'),
    navTrainingLabel: z.string().default('Training Mode'),
    navVoicesLabel: z.string().default('Roster'),
    navBookLabel: z.string().default('Archive'),
    navSeminarsLabel: z.string().default('Side Quests'),
    contactEmail: z.string().default('')
  })
});

// In-page title/subhead text for pages whose nav label is edited separately above.
const aboutPage = defineCollection({
  type: 'data',
  schema: z.object({
    mode: z.string().default('Story Mode'),
    title: z.string().default('\u00dcber uns'),
    subhead: z.string().default('Drei Lehrer, eine Linie. Klick dich durch \u2014 einer von ihnen wird dir bald sagen, dass deine Deckung unten ist.')
  })
});

const voicesPage = defineCollection({
  type: 'data',
  schema: z.object({
    mode: z.string().default('Character Select'),
    title: z.string().default('Stimmen'),
    subhead: z.string().default('Zehn Sch\u00fcler, zehn Wege in dieselbe Linie. Klick dich durch die Reihe.'),
    disclosureText: z.string().default('').optional()
  })
});

const seminarsPage = defineCollection({
  type: 'data',
  schema: z.object({
    mode: z.string().default('Side Quests'),
    title: z.string().default('Seminare'),
    subhead: z.string().default('Sondertrainings, Gastlehrer und Themenabende \u2014 abseits des regul\u00e4ren Stundenplans.')
  })
});

const seminars = defineCollection({
  type: 'data',
  schema: z.object({
    order: z.number(),
    title: z.string(),
    dateLabel: z.string(),
    location: z.string().optional(),
    badge: z.string().optional(),
    summary: z.string(),
    body: z.string(),
    image: z.string().nullable().optional(),
    gallery: z.array(z.string()).default([]),
    ctaLabel: z.string().default('Jetzt anmelden'),
    ctaHref: z.string().default('/probetraining')
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
    badgeText: z.string(),
    transferTitle: z.string().default('Per Überweisung bestellen'),
    transferIntro: z.string().default(''),
    transferAccountHolder: z.string().default(''),
    transferIban: z.string().default(''),
    transferBic: z.string().default(''),
    transferReferenceHint: z.string().default(''),
    transferNote: z.string().default(''),
    transferButtonLabel: z.string().default('Zahlungsbeleg senden')
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

const legalSection = z.object({ heading: z.string(), body: z.string() });

const impressumPage = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string().default('Impressum'),
    sections: z.array(legalSection).default([])
  })
});

const datenschutzPage = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string().default('Datenschutzerklärung'),
    sections: z.array(legalSection).default([])
  })
});

const widerrufPage = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string().default('Widerrufsbelehrung'),
    sections: z.array(legalSection).default([])
  })
});

export const collections = { teachers, students, settings, homePage, trainingPage, bookPage, trialPage, aboutPage, voicesPage, seminarsPage, seminars, impressumPage, datenschutzPage, widerrufPage };
