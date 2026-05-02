export type Branch = {
  id: string;
  name: string;
  address: string;
  landmark: string;
  mapLink: string;
  seoLine: string;
  image: string;
  badge: string | null;
  overview: string;
  highlights: string[];
  timings: string[];
  courses: string[];
  phone: string;
  rating: number;
  parking: string;
};

export const BRANCH_COURSES_LINE =
  "Guitar • Keyboard • Drums • Violin • Dance • Art";

export const branches: Branch[] = [
  {
    id: "arekere",
    name: "Arekere Branch",
    address:
      "Vysya Bank Colony, Shantiniketan Layout, Arekere, Bengaluru, Karnataka - 560076",
    landmark: "Near Arekere Lake",
    mapLink: "https://share.google/pqvAQTeNf1lAeT0ne",
    seoLine: "Music & Dance Classes in Arekere",
    image: "/images/branches/arekere.png",
    badge: "Popular Branch",
    overview:
      "Our Arekere centre is designed for focused learning with dedicated rooms for instrument and dance training. It is ideal for students looking for a structured path from beginner to performance level.",
    highlights: [
      "Small batches with personal instructor attention",
      "Weekend and weekday class options",
      "Regular recitals and student showcases",
    ],
    timings: [
      "Monday to Friday: 10:00 AM - 8:30 PM",
      "Saturday & Sunday: 9:00 AM - 7:00 PM",
    ],
    courses: [
      "Guitar",
      "Keyboard",
      "Drums",
      "Violin",
      "Dance",
      "Art",
    ],
    phone: "+917798347976",
    rating: 4.8,
    parking: "Street parking available near the branch",
  },
  {
    id: "hulimavu",
    name: "Hulimavu Branch",
    address: "SS Arcade, DLF Main Rd, Hulimavu, Bengaluru, Karnataka - 560076",
    landmark: "Near Hulimavu Lake",
    mapLink: "https://share.google/dTQU1pmIZCAI8kKUp",
    seoLine: "Music & Dance Classes in Hulimavu",
    image: "/images/branches/hulimavu.png",
    badge: "New Batches Open",
    overview:
      "The Hulimavu branch offers a lively academy environment with convenient access from Bannerghatta Road and nearby residential areas. It is a strong choice for working professionals and school students.",
    highlights: [
      "Convenient location with easy commute",
      "Dedicated beginner and advanced batches",
      "Performance-ready practice environment",
    ],
    timings: [
      "Monday to Friday: 10:30 AM - 8:30 PM",
      "Saturday & Sunday: 9:00 AM - 7:30 PM",
    ],
    courses: [
      "Guitar",
      "Keyboard",
      "Drums",
      "Vocals",
      "Dance",
      "Art",
    ],
    phone: "+917798347976",
    rating: 4.8,
    parking: "Limited on-site and nearby parking",
  },
  {
    id: "vijaya-bank",
    name: "Vijaya Bank Layout Branch",
    address:
      "Sumukha Greenville, Johnson's Academy, Vijaya Bank Layout, Bengaluru, Karnataka - 560076",
    landmark: "Near Vijaya Bank Layout Main Rd",
    mapLink: "https://share.google/Odqg3ozY0QjjfCt5p",
    seoLine: "Music & Dance Classes in Vijaya Bank Layout",
    image: "/images/branches/vijaya-bank.png",
    badge: null,
    overview:
      "Our Vijaya Bank Layout branch is built for comfortable long-term training, with disciplined scheduling and mentor support for both kids and adults.",
    highlights: [
      "Consistent progress tracking by instructors",
      "Balanced focus on technique and confidence",
      "Friendly ecosystem for all age groups",
    ],
    timings: [
      "Monday to Friday: 11:00 AM - 8:00 PM",
      "Saturday & Sunday: 9:00 AM - 7:00 PM",
    ],
    courses: [
      "Guitar",
      "Keyboard",
      "Drums",
      "Violin",
      "Dance",
      "Art",
    ],
    phone: "+917798347976",
    rating: 4.8,
    parking: "Nearby residential and roadside parking",
  },
];

export function getAllBranchIds() {
  return branches.map((branch) => branch.id);
}

export function getBranchById(branchId: string) {
  return branches.find((branch) => branch.id === branchId);
}
