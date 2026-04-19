import Image from "next/image";
import { Award, Clock, User } from "lucide-react";
import type { Teacher } from "@/data/courses";

type TeacherProfileProps = {
  teachers: Teacher[];
};

function InstructorCard({ teacher }: { teacher: Teacher }) {
  return (
    <div className="flex flex-col gap-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 lg:flex-row lg:items-start lg:gap-12">
      <div className="relative mx-auto h-48 w-48 shrink-0 overflow-hidden rounded-2xl border border-white/10 sm:h-56 sm:w-56">
        <Image
          src={teacher.image}
          alt={teacher.name}
          fill
          className="object-cover"
          sizes="224px"
        />
      </div>

      <div className="min-w-0 flex-1 space-y-5">
        <div>
          <h3 className="text-xl font-semibold text-white sm:text-2xl">
            {teacher.name}
          </h3>
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-primary" />
              {teacher.experience} experience
            </span>
            <span className="inline-flex items-center gap-2">
              <User className="h-4 w-4 shrink-0 text-sky-300" />
              Johnson&apos;s Academy faculty
            </span>
          </div>
        </div>

        <p className="leading-relaxed text-muted">{teacher.bio}</p>

        <div>
          <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white/90">
            <Award className="h-4 w-4 text-amber-400" />
            Achievements
          </h4>
          <ul className="mt-3 space-y-2">
            {teacher.achievements.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-muted sm:text-base"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function TeacherProfile({ teachers }: TeacherProfileProps) {
  if (teachers.length === 0) return null;

  const heading =
    teachers.length === 1 ? "Your instructor" : "Your instructors";
  const sub =
    teachers.length === 1
      ? "Learn directly from an experienced mentor dedicated to your progress."
      : "Learn from our faculty—each instructor brings deep experience to your journey.";

  return (
    <section
      className="border-t border-white/10 bg-[#0A0A0A] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="instructor-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="instructor-heading"
          className="text-2xl font-bold text-white sm:text-3xl"
        >
          {heading}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">{sub}</p>

        <div className="mt-10 flex flex-col gap-8">
          {teachers.map((teacher, index) => (
            <InstructorCard
              key={`${teacher.name}-${index}`}
              teacher={teacher}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
