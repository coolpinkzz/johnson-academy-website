"use client";

import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

export default function AboutStatsSection() {
  const studentsCount = useAnimatedCounter(500, "+");
  const reviewsCount = useAnimatedCounter(300, "+");
  const programsCount = useAnimatedCounter(25, "+");

  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid gap-8 sm:grid-cols-3 text-center">
        <div>
          <p className="text-4xl font-bold text-primary sm:text-5xl">
            {studentsCount}
          </p>
          <p className="mt-2 text-sm font-medium text-white">Students Taught</p>
          <p className="mt-1 text-sm text-muted">
            Students across all ages have found their musical path with us
          </p>
        </div>
        <div>
          <p className="text-4xl font-bold text-primary sm:text-5xl">
            {reviewsCount}
          </p>
          <p className="mt-2 text-sm font-medium text-white">
            Online 5-Star Reviews
          </p>
          <p className="mt-1 text-sm text-muted">
            Loved and trusted by our vibrant music community
          </p>
        </div>
        <div>
          <p className="text-4xl font-bold text-primary sm:text-5xl">
            {programsCount}
          </p>
          <p className="mt-2 text-sm font-medium text-white">Stage Programs</p>
          <p className="mt-1 text-sm text-muted">
            Bringing talent to life through vibrant stage performances
          </p>
        </div>
      </div>
    </div>
  );
}
