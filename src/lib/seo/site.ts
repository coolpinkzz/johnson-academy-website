/** Canonical origin for JSON-LD, canonical URLs, and metadata alignment. */
export const SITE_ORIGIN = "https://www.johnsonsacademy.in" as const;

export const SITE_NAME = "Johnson's Academy";

export const SITE_DESCRIPTION =
  "Learn Guitar, Keyboard, Drums, Violin, Dance, Art & Karate at Johnson's Academy in Bangalore. Book your free demo class today.";

export const ORGANIZATION_ID = `${SITE_ORIGIN}/#organization` as const;
export const WEBSITE_ID = `${SITE_ORIGIN}/#website` as const;

export const CONTACT = {
  email: "info@johnsonsacademy.in",
  telephone: "+917798347976",
} as const;

export const ADDRESSES = [
  {
    streetAddress:
      "189, 5th Main Rd, Vysya Bank Colony, Shantiniketan Layout, Arekere",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560076",
    addressCountry: "IN",
  },
  {
    streetAddress:
      "3rd Floor, SS Arcade, DLF Main Rd, above KFC, Bhagyalakshmi Avenue, Rukmaiah Layout, Hulimavu",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560076",
    addressCountry: "IN",
  },
] as const;

export const SAME_AS = [
  "https://www.facebook.com/johnsonsacademyblr/",
  "https://www.instagram.com/johnsonsacademy_blr/",
  "https://www.youtube.com/@johnsonsacademy8011",
] as const;

export const FOUNDING_DATE = "2017";

export function absoluteUrl(pathnameOrUrl: string): string {
  if (pathnameOrUrl.startsWith("http://") || pathnameOrUrl.startsWith("https://")) {
    return pathnameOrUrl;
  }
  const path = pathnameOrUrl.startsWith("/") ? pathnameOrUrl : `/${pathnameOrUrl}`;
  return `${SITE_ORIGIN}${path}`;
}
