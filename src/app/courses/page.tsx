import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { courses } from "@/data/courses";
import CoursePageLayout from "@/components/CoursePageLayout";
import { ArrowRight } from "lucide-react";

const SITE_URL = "https://johnsonsacademy.com";

export const metadata: Metadata = {
  title: "Courses | Johnson's Academy — Music, Dance, Art & Karate in Bangalore",
  description:
    "Explore music, dance, art, and karate courses at Johnson's Academy Bangalore. Guitar, Piano, Drums, Violin, Vocal, Dance, Art & more. Expert trainers. Book a free demo today.",
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
    title: "Courses | Johnson's Academy — Music, Dance, Art & Karate in Bangalore",
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
        description: course.heroDescription,
        provider: {
          "@type": "Organization",
          name: "Johnson's Academy",
        },
        url: `${SITE_URL}/courses/${course.slug}`,
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

      {/* Hero */}
      <header className="relative overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Courses
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted sm:text-xl">
            From music to dance, art, and martial arts—discover programs designed
            for all ages. Book a free demo for any course.
          </p>
        </div>
      </header>

      {/* Course Grid */}
      <section
        className="border-t border-white/10 bg-[#0A0A0A] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        aria-label="Course catalog"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111111] transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="relative aspect-16/10 overflow-hidden bg-white/5">
                  <Image
                    src={course.image}
                    alt={`${course.title} at Johnson's Academy`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-xl font-semibold text-white">
                    {course.title}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-sm text-muted">
                    {course.heroDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3">
                    View details
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
