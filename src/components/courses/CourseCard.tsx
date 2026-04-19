import Image from "next/image";
import Link from "next/link";
import { Clock3, Star, Users } from "lucide-react";

export type CourseCardData = {
  title: string;
  description: string;
  image: string;
  href: string;
  instructor: string;
  rating: number;
  students: string;
  duration: string;
  lessons: number;
  price: string;
};

type CourseCardProps = {
  course: CourseCardData;
  featured?: boolean;
};

export default function CourseCard({ course, featured = false }: CourseCardProps) {
  return (
    <article
      className={`group overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-primary/50 hover:shadow-lg hover:shadow-black/30 ${
        featured ? "lg:col-span-1" : ""
      }`}
    >
      <Link href={course.href} className="block h-full">
        <div className={`relative overflow-hidden ${featured ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white">
            {course.price}
          </span>
        </div>

        <div className="flex h-full flex-col p-5 sm:p-6">
          <h3 className="line-clamp-2 text-lg font-semibold text-white sm:text-xl">
            {course.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted">{course.description}</p>
          <p className="mt-3 text-sm text-white/80">By {course.instructor}</p>

          <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-muted sm:text-sm">
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 text-amber-400" />
              <span>{course.rating.toFixed(1)} rating</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-sky-300" />
              <span>{course.students} students</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock3 className="h-4 w-4 text-emerald-300" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-primary">{course.lessons}</span>
              <span>lessons</span>
            </div>
          </div>

          <div className="mt-5">
            <span className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-orange-500">
              View Course
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
