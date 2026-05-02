export type HeroImageSlide = {
  kind: "image";
  key: string;
  image: string;
  imageAlt: string;
  lineBefore: string;
  highlight: string;
  lineAfter: string;
  description: string;
};

export type HeroAppMockup = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** CSS rotate, e.g. "-6deg" */
  rotate?: string;
};

export type HeroAppPromoSlide = {
  kind: "app-promo";
  key: string;
  brandName: string;
  brandLogoSrc: string;
  brandLogoAlt: string;
  headingLine1: string;
  headingLine2Before: string;
  headingAccent: string;
  headingLine2After: string;
  supportingText: string;
  appStoreUrl: string;
  playStoreUrl: string;
  appStoreLabel: string;
  playStoreLabel: string;
  appStoreAriaLabel: string;
  playStoreAriaLabel: string;
  mockups: HeroAppMockup[];
};

export type HeroAffiliationSlide = {
  kind: "affiliation-promo";
  key: string;
  heading: string;
  intro: string;
  details: string;
  highlights: string[];
  ctaLabel: string;
  ctaHref: string;
  institutions: {
    name: string;
    logoSrc: string;
    logoAlt: string;
  }[];
};

export type HeroSlide =
  | HeroImageSlide
  | HeroAppPromoSlide
  | HeroAffiliationSlide;

export const heroSlides: HeroSlide[] = [
  {
    kind: "image",
    key: "bangalore",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1920&q=85",
    imageAlt:
      "Students learning music and dance at Johnson Academy in Bangalore — guitar, keyboard, and drums training",
    lineBefore: "Top Music & Dance Academy in ",
    highlight: "Bangalore",
    lineAfter: "",
    description:
      "Learn Guitar, Keyboard, Drums, Violin, Dance, and Art with expert trainers. Flexible batches for kids and adults.",
  },
  {
    kind: "app-promo",
    key: "mobile-app",
    brandName: "Johnson's Academy",
    brandLogoSrc: "/logo.png",
    brandLogoAlt: "Johnson Academy logo",
    headingLine1: "Learn music",
    headingLine2Before: "On our ",
    headingAccent: "mobile app",
    headingLine2After: "",
    supportingText:
      "Practice guitar, keyboard, drums, and more with our online music learning app—lesson-friendly, built for busy learners in Bangalore and beyond.",
    appStoreUrl: "https://apps.apple.com/app/johnson-academy/id6753088790",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.johnsonacademy.app",
    appStoreLabel: "Download on the App Store",
    playStoreLabel: "Get it on Google Play",
    appStoreAriaLabel: "Download Johnson Academy on the App Store",
    playStoreAriaLabel: "Get Johnson Academy on Google Play",
    mockups: [
      {
        src: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=640&q=80&auto=format&fit=crop",
        alt: "Johnson Academy learn music app interface preview showing practice and lessons on a smartphone",
        width: 640,
        height: 960,
        rotate: "-8deg",
      },
      {
        src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=640&q=80&auto=format&fit=crop",
        alt: "Second screen of the Johnson Academy music learning app with headphones and lesson content",
        width: 640,
        height: 960,
        rotate: "10deg",
      },
    ],
  },
  {
    kind: "affiliation-promo",
    key: "international-affiliation",
    heading: "Globally Recognized Music Certifications",
    intro:
      "We are affiliated with RSL Awards (UK) and Trinity College London, offering internationally recognized music certifications that enhance your learning journey.",
    details: "",
    highlights: [
      "Internationally accepted qualifications",
      "Performance-based assessment",
      "Suitable for all age groups",
      "Flexible learning approach",
    ],
    ctaLabel: "Book Free Demo \u2192",
    ctaHref: "tel:+917798347976",
    institutions: [
      {
        name: "RSL Awards (UK)",
        logoSrc:
          "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Rockschool_logo.png/640px-Rockschool_logo.png.png",
        logoAlt: "RSL Awards United Kingdom logo",
      },
      {
        name: "Trinity College London",
        logoSrc:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Trinity_College_London_logo.png/640px-Trinity_College_London_logo.png.png",
        logoAlt: "Trinity College London logo",
      },
    ],
  },
];
