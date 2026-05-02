import type { Metadata } from "next";
import Link from "next/link";
import { courses } from "@/data/courses";
import CoursePageLayout from "@/components/CoursePageLayout";
import CoursesMarketplace from "@/components/courses/CoursesMarketplace";

const SITE_URL = "https://johnsonsacademy.com";

export const metadata: Metadata = {
  title: "Music, Dance, Art and Karate Courses in Bangalore",
  description:
    "Explore guitar, keyboard, drums, violin, vocal, dance, art, and karate classes at Johnson's Academy Bangalore. Compare courses and book a free demo.",
  keywords: [
    "music classes Bangalore",
    "dance classes Bangalore",
    "guitar classes Bangalore",
    "piano classes Bangalore",
    "art classes Bangalore",
    "karate classes Bangalore",
    "Johnson Academy",
  ],
  openGraph: {
    title: "Johnson's Academy Courses - Music, Dance, Art and Karate",
    description:
      "Explore music, dance, art, and karate courses at Johnson's Academy. Expert trainers. Book a free demo.",
    type: "website",
    url: `${SITE_URL}/courses`,
  },
  alternates: {
    canonical: `${SITE_URL}/courses`,
  },
};

function CoursesJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Courses at Johnson's Academy",
    description:
      "Music, dance, art, and karate courses in Bangalore at Johnson's Academy",
    numberOfItems: courses.length,
    itemListElement: courses.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: course.title,
        description: course.description,
        provider: {
          "@type": "Organization",
          name: "Johnson's Academy",
        },
        url: `${SITE_URL}/courses/${course.id}`,
        image: course.image,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function CoursesPage() {
  return (
    <CoursePageLayout>
      <CoursesJsonLd />
      <CoursesMarketplace />

      <section className="border-t border-white/10 bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Not sure which course to choose?
          </h2>
          <p className="mt-4 text-muted">
            Book a free demo for any course and experience our teaching firsthand.
          </p>
          <Link
            href="tel:+917798347976"
            className="mt-6 inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/30"
          >
            Book Free Demo
          </Link>
        </div>
      </section>
    </CoursePageLayout>
  );
}
