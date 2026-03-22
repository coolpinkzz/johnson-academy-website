import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getCourseBySlug,
  getAllCourseSlugs,
} from "@/data/courses";
import CoursePageLayout from "@/components/CoursePageLayout";

const ACADEMY_NAME = "Johnson's Academy";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllCourseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: `${course.title} | ${ACADEMY_NAME}`,
    description: course.metaDescription,
  };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  return (
    <CoursePageLayout>
      {/* 1. Hero Section */}
      <section className="bg-black px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {course.title}
          </h1>
          <p className="mt-6 text-lg text-gray-400 sm:text-xl">
            {course.heroDescription}
          </p>
          <Link
            href="tel:+917798347976"
            className="mt-8 inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/30"
          >
            Book Free Demo
          </Link>
        </div>
      </section>

      {/* 2. About the Course */}
      <section className="border-t border-white/10 bg-[#0A0A0A] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            About the Course
          </h2>
          <div className="mt-6 space-y-4 text-gray-400">
            {course.about.map((paragraph, i) => (
              <p key={i} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What You'll Learn */}
      <section className="border-t border-white/10 bg-black px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            What You&apos;ll Learn
          </h2>
          <ul className="mt-6 space-y-3">
            {course.learnItems.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-400"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Who Can Join */}
      <section className="border-t border-white/10 bg-[#0A0A0A] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Who Can Join
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {course.whoCanJoin.map((item, i) => (
              <li
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="border-t border-white/10 bg-black px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to Start?
          </h2>
          <p className="mt-4 text-gray-400">
            Book a free demo class and experience {course.title} at{" "}
            {ACADEMY_NAME}.
          </p>
          <Link
            href="tel:+917798347976"
            className="mt-8 inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/30"
          >
            Book Free Demo
          </Link>
        </div>
      </section>
    </CoursePageLayout>
  );
}
