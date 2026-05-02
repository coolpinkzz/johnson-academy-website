import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getCourseById,
  getAllCourseIds,
} from "@/data/courses";
import CoursePageLayout from "@/components/CoursePageLayout";
import CourseHeader from "@/components/course-detail/CourseHeader";
import TeacherProfile from "@/components/course-detail/TeacherProfile";
import LearningSection from "@/components/course-detail/LearningSection";
import EligibilitySection from "@/components/course-detail/EligibilitySection";
import CTASection from "@/components/course-detail/CTASection";

const ACADEMY_NAME = "Johnson's Academy";
const SITE_URL = "https://johnsonsacademy.com";

type Props = {
  params: Promise<{ courseId: string }>;
};

export async function generateStaticParams() {
  return getAllCourseIds().map((courseId) => ({ courseId }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { courseId } = await params;
  const course = getCourseById(courseId);
  if (!course) return {};
  return {
    title: `${course.title} Classes in Bangalore`,
    description: course.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/courses/${course.id}`,
    },
    openGraph: {
      title: `${course.title} | ${ACADEMY_NAME}`,
      description: course.metaDescription,
      type: "article",
      url: `${SITE_URL}/courses/${course.id}`,
      images: course.image ? [{ url: course.image, alt: course.title }] : undefined,
    },
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { courseId } = await params;
  const course = getCourseById(courseId);
  if (!course) notFound();

  return (
    <CoursePageLayout>
      <CourseHeader
        title={course.title}
        description={course.description}
        image={course.image}
        imageAlt={course.title}
      />

      <section className="border-t border-white/10 bg-black px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            About the course
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {course.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <TeacherProfile teachers={course.teachers} />
      <LearningSection learningPoints={course.learningPoints} />
      <EligibilitySection whoCanJoin={course.whoCanJoin} />
      <CTASection courseTitle={course.title} />
    </CoursePageLayout>
  );
}
