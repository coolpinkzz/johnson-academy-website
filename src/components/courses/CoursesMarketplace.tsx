"use client";

import { useEffect, useMemo, useState } from "react";
import { BookOpen, Sparkles, WandSparkles } from "lucide-react";
import type { Course } from "@/data/courses";
import { courses as allCourses } from "@/data/courses";
import CategoryFilter from "./CategoryFilter";
import CourseCard, { type CourseCardData } from "./CourseCard";
import CourseSkeletonCard from "./CourseSkeletonCard";
import SectionWrapper from "./SectionWrapper";

type CourseWithMeta = CourseCardData & {
  category: string;
};

function categoryFromCourseId(courseId: string): string {
  if (courseId.includes("vocal")) return "Vocal";
  if (courseId.includes("dance")) return "Dance";
  if (courseId.includes("art")) return "Design";
  if (courseId.includes("karate")) return "Fitness";
  return "Music";
}

function shortTitle(fullTitle: string): string {
  return fullTitle.replace(/\s+in Bangalore$/i, "").trim() || fullTitle;
}

/** Stable pseudo-random values for demo stats (same slug → same numbers). */
function hashSlug(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i += 1) h = (h << 5) - h + s.charCodeAt(i);
  return Math.abs(h);
}

function courseToListing(c: Course): CourseWithMeta {
  const h = hashSlug(c.id);
  const rating = 4.6 + (h % 40) / 100;
  const lessons = 20 + (h % 25);
  const weeks = 8 + (h % 8);
  const studentCount = 500 + (h % 2000);
  const students =
    studentCount >= 1000
      ? `${(studentCount / 1000).toFixed(1)}k`
      : `${studentCount}`;
  const instructors = [
    "Arjun Rao",
    "Mira Joseph",
    "Ananya Sharma",
    "Megha Nair",
    "Diya Thomas",
    "Sanjay Kumar",
    "Sneha Iyer",
    "Karthik R",
  ];
  return {
    title: shortTitle(c.title),
    description: c.description,
    image: c.image,
    href: `/courses/${c.id}`,
    category: categoryFromCourseId(c.id),
    instructor: instructors[h % instructors.length],
    rating,
    students,
    duration: `${weeks} weeks`,
    lessons,
    price: "Free",
  };
}

const listingCourses: CourseWithMeta[] = allCourses.map(courseToListing);

const EXTRA_CATEGORY_PILLS = ["AI", "Web Dev", "Backend"];

export default function CoursesMarketplace() {
  const categories = useMemo(() => {
    const fromData = new Set<string>();
    listingCourses.forEach((c) => fromData.add(c.category));
    const ordered = ["All", ...Array.from(fromData).sort(), ...EXTRA_CATEGORY_PILLS];
    return ordered;
  }, []);

  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initialTimer = window.setTimeout(() => setIsLoading(false), 500);
    return () => window.clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const timer = window.setTimeout(() => setIsLoading(false), 250);
    return () => window.clearTimeout(timer);
  }, [query, activeCategory]);

  const filteredCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return listingCourses.filter((course) => {
      const inCategory =
        activeCategory === "All" || course.category === activeCategory;
      const inSearch =
        !normalizedQuery ||
        course.title.toLowerCase().includes(normalizedQuery) ||
        course.description.toLowerCase().includes(normalizedQuery);
      return inCategory && inSearch;
    });
  }, [activeCategory, query]);

  return (
    <section
      id="course-catalog"
      className="bg-overlay px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-7xl space-y-10 sm:space-y-14">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent px-5 py-12 text-center sm:px-8 sm:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,106,26,0.28),transparent_60%)]" />
          <div className="relative">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Premium learning experience
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Explore Our Courses
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted sm:text-base">
              Learn from expert mentors with a structured curriculum across
              music, dance, art, and performance tracks.
            </p>

            <div className="mx-auto mt-8 flex max-w-2xl items-center rounded-full border border-white/10 bg-black/40 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur">
              <WandSparkles className="h-5 w-5 shrink-0 text-muted" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search courses, skills, or topics..."
                className="w-full bg-transparent px-3 text-sm text-white placeholder:text-white/50 focus:outline-none sm:text-base"
                aria-label="Search courses"
              />
            </div>
          </div>
        </div>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        <SectionWrapper
          title="All Courses"
          description="Browse all programs and choose what matches your learning goals."
        >
          {isLoading ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <CourseSkeletonCard key={`skeleton-${index}`} />
              ))}
            </div>
          ) : filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 transition-all duration-300 sm:grid-cols-2 xl:grid-cols-4">
              {filteredCourses.map((course) => (
                <CourseCard key={course.href} course={course} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-white/20 bg-white/[0.02] px-6 py-12 text-center">
              <BookOpen className="mx-auto h-10 w-10 text-muted" />
              <h2 className="mt-4 text-xl font-semibold text-white">
                No courses found
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-sm text-muted">
                Try a different keyword or category to discover the right
                course.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setActiveCategory("All");
                }}
                className="mt-6 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-orange-500"
              >
                Reset filters
              </button>
            </div>
          )}
        </SectionWrapper>
      </div>
    </section>
  );
}
