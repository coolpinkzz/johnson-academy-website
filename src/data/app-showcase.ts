export type AppShowcaseScreenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type AppShowcaseFeature = {
  title: string;
  description: string;
};

export type AppShowcaseStat = {
  label: string;
  value: string;
};

export type AppShowcaseContent = {
  sectionId: string;
  eyebrow: string;
  heading: string;
  description: string;
  features: AppShowcaseFeature[];
  screenshots: AppShowcaseScreenshot[];
  stats: AppShowcaseStat[];
  appStoreUrl: string;
  playStoreUrl: string;
  appStoreAriaLabel: string;
  playStoreAriaLabel: string;
};

export const appShowcaseContent: AppShowcaseContent = {
  sectionId: "mobile-app",
  eyebrow: "Learn anywhere",
  heading:
    "Johnson Academy app — your guitar learning app and music practice companion",
  description:
    "Take Johnson Academy with you on Android and iOS. Our learn music online app helps you review lessons, track progress, and stay motivated between classes—whether you study guitar, keyboard, drums, or dance. Download the Johnson Academy mobile app to practice smarter and keep your momentum between sessions at our Bangalore centres.",
  features: [
    {
      title: "Lesson summaries & practice reminders",
      description:
        "Revisit key concepts from class so your guitar learning app reinforces what you already covered in-studio.",
    },
    {
      title: "Progress you can see",
      description:
        "Set goals and follow your journey across instruments and levels in one place.",
    },
    {
      title: "Schedules & updates",
      description:
        "Stay on top of batches, announcements, and academy news without missing a beat.",
    },
    {
      title: "Built for busy learners",
      description:
        "Short, focused sessions that fit around school, work, and family life.",
    },
    {
      title: "Secure sign-in",
      description:
        "Access your content with a simple, privacy-conscious experience.",
    },
  ],
  screenshots: [
    {
      src: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=640&q=80&auto=format&fit=crop",
      alt: "Learner using a smartphone with headphones for online music practice, representing the Johnson Academy learn music online app experience",
      width: 640,
      height: 960,
    },
    {
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=640&q=80&auto=format&fit=crop",
      alt: "Music listening and practice setup suggesting in-app audio lessons within the Johnson Academy mobile application",
      width: 640,
      height: 960,
    },
    {
      src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=640&q=80&auto=format&fit=crop",
      alt: "Creative music workspace evoking digital lesson content available through the Johnson Academy app for students in Bangalore",
      width: 640,
      height: 960,
    },
  ],
  stats: [
    { label: "Average rating", value: "4.8★" },
    { label: "Learners on the app", value: "Growing" },
    { label: "Practice on the go", value: "iOS & Android" },
  ],
  appStoreUrl: "https://apps.apple.com/",
  playStoreUrl: "https://play.google.com/store",
  appStoreAriaLabel: "Download Johnson Academy on the App Store",
  playStoreAriaLabel: "Get Johnson Academy on Google Play",
};
