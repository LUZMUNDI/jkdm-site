import { getEntry } from 'astro:content';

// Small token-interpolation helper so prices (and similar repeated values) can
// be edited in exactly ONE place (Globale Einstellungen in the CMS) and have
// that change propagate into every button/label/sentence that references it.
// Content editors write literal tokens like "{{price}}" inside any text field
// and they get resolved at build time.
export function interpolateTokens<T>(value: T, tokens: Record<string, string>): T {
  if (typeof value === 'string') {
    return Object.entries(tokens).reduce(
      (s, [k, v]) => s.split(`{{${k}}}`).join(v ?? ''),
      value
    ) as unknown as T;
  }
  if (Array.isArray(value)) {
    return value.map((v) => interpolateTokens(v, tokens)) as unknown as T;
  }
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      out[k] = interpolateTokens(v, tokens);
    }
    return out as T;
  }
  return value;
}

export function priceTokens(settings: any): Record<string, string> {
  return {
    price: settings?.probetrainingPrice ?? '',
    monthlyPrice: settings?.monthlyPriceFrom ?? '',
    bookPrice: settings?.bookPrice ?? ''
  };
}

// Fetches the global settings singleton and resolves its own price tokens
// (e.g. ctaBandBody mentions "{{price}}") against itself, so every consumer
// (footer, CTA band, nav, any page) always sees final resolved text.
export async function getSettings() {
  const raw = (await getEntry('settings', 'global'))?.data;
  if (!raw) return raw;
  return interpolateTokens(raw, priceTokens(raw));
}

// Fetches a page-content singleton and resolves price tokens against the
// already-resolved settings object.
export async function getPageContent(collection: string, id: string, settings: any) {
  const raw = (await getEntry(collection as any, id))?.data;
  if (!raw) return raw;
  return interpolateTokens(raw, priceTokens(settings));
}
