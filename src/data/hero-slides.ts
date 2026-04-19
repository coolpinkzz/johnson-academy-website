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

export type HeroSlide = HeroImageSlide | HeroAppPromoSlide;

export const heroSlides: HeroSlide[] = [
  {
    kind: "image",
    key: "bangalore",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1920&q=85",
    imageAlt:
      "Students learning music and dance at Johnson Academy in Bangalore — guitar, keyboard, and drums training",
    lineBefore: "Best Music & Dance Academy in ",
    highlight: "Bangalore",
    lineAfter: "",
    description:
      "Master Guitar, Keyboard, Drums, Violin, Dance & Art with certified trainers. Flexible timings for all age groups. Start your musical journey today.",
  },
  {
    kind: "image",
    key: "trainers",
    image:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1920&q=85",
    imageAlt:
      "Musicians and instruments at a music school representing structured lessons at Johnson Academy",
    lineBefore: "Learn with ",
    highlight: "Certified Trainers",
    lineAfter: "",
    description:
      "Structured paths from beginner to advanced, performance opportunities, and personal attention in every class—so you improve with confidence.",
  },
  {
    kind: "image",
    key: "every-age",
    image:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1920&q=85",
    imageAlt:
      "Dance and movement class environment reflecting Johnson Academy dance programs in Bangalore",
    lineBefore: "Flexible Programs for ",
    highlight: "Every Age",
    lineAfter: "",
    description:
      "Weekday and weekend batches, multiple branches across Bangalore, and courses designed for kids, teens, and adults.",
  },
  {
    kind: "app-promo",
    key: "mobile-app",
    brandName: "Johnson's Academy",
    brandLogoSrc: "/logo.svg",
    brandLogoAlt: "Johnson Academy logo",
    headingLine1: "Learn music",
    headingLine2Before: "On our ",
    headingAccent: "mobile app",
    headingLine2After: "",
    supportingText:
      "Practice guitar, keyboard, drums, and more with our online music learning app—lesson-friendly, built for busy learners in Bangalore and beyond.",
    appStoreUrl: "https://apps.apple.com/",
    playStoreUrl: "https://play.google.com/store",
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
];
