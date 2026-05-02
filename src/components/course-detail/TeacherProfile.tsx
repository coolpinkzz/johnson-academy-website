import Image from "next/image";
import { Award, Clock, User } from "lucide-react";
import type { Teacher } from "@/data/courses";

type TeacherProfileProps = {
  teachers: Teacher[];
};

function InstructorCard({
  teacher,
}: {
  teacher: Teacher;
}) {
  const hasKnowMore =
    !!teacher.knowMore &&
    (Boolean(teacher.knowMore.about) ||
      (teacher.knowMore.qualifications?.length ?? 0) > 0 ||
      (teacher.knowMore.teachingExperience?.length ?? 0) > 0 ||
      (teacher.knowMore.performanceAndWork?.length ?? 0) > 0 ||
      (teacher.knowMore.notableWork?.length ?? 0) > 0 ||
      (teacher.knowMore.otherHighlights?.length ?? 0) > 0 ||
      (teacher.knowMore.personal?.length ?? 0) > 0);

  return (
    <div className="flex flex-col gap-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 lg:flex-row lg:items-stretch lg:gap-12">
      <div
        className={`relative mx-auto shrink-0 overflow-hidden rounded-2xl border border-white/10 ${
          teacher.imageFit === "contain"
            ? "h-96 w-64 sm:h-[34rem] sm:w-72 lg:h-auto"
            : "h-52 w-52 sm:h-60 sm:w-60 lg:h-auto"
        }`}
      >
        <Image
          src={teacher.image}
          alt={teacher.name}
          fill
          className="object-contain scale-125"
          sizes="224px"
        />
      </div>

      <div className="min-w-0 flex-1 space-y-5">
        <div>
          <h3 className="text-xl font-semibold text-white sm:text-2xl">
            {teacher.name}
          </h3>
          {teacher.title ? (
            <p className="mt-1 text-sm text-muted sm:text-base">{teacher.title}</p>
          ) : null}
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-primary" />
              {teacher.experience} experience
            </span>
            {teacher.schoolExperience ? (
              <span className="inline-flex items-center gap-2">
                <User className="h-4 w-4 shrink-0 text-sky-300" />
                {teacher.schoolExperience}
              </span>
            ) : null}
            {teacher.certifications ? (
              <span className="inline-flex items-center gap-2">
                <Award className="h-4 w-4 shrink-0 text-amber-400" />
                {teacher.certifications}
              </span>
            ) : null}
          </div>
        </div>

        <p className="leading-relaxed text-muted">{teacher.bio}</p>
        {teacher.teaches?.length ? (
          <p className="text-sm text-white/90 sm:text-base">
            <span className="font-semibold">Teaches:</span>{" "}
            {teacher.teaches.join(" • ")}
          </p>
        ) : null}

        <div>
          <h4 className="inline-flex items-center gap-2 rounded-md bg-amber-500/15 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-amber-300 ring-1 ring-amber-400/30">
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

        {hasKnowMore ? (
          <details
            name="instructor-know-more"
            className="group rounded-xl border border-white/10 bg-black/20 p-4"
          >
            <summary className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-sky-500/20 px-3 py-1.5 text-sm font-semibold text-sky-200 ring-1 ring-sky-400/40 transition-colors hover:bg-sky-500/30 hover:text-sky-100 group-open:bg-primary/25 group-open:text-primary group-open:ring-primary/50 sm:text-base">
              <span className="group-open:hidden">Know More</span>
              <span className="hidden group-open:inline">Know Less</span>
            </summary>
            <div className="mt-4 space-y-4 text-sm text-muted sm:text-base">
              {teacher.knowMore?.about ? (
                <div>
                  <h5 className="font-semibold text-white">About</h5>
                  <p className="mt-1 leading-relaxed">{teacher.knowMore.about}</p>
                </div>
              ) : null}

              {teacher.knowMore?.qualifications?.length ? (
                <div>
                  <h5 className="font-semibold text-white">Qualifications</h5>
                  <ul className="mt-2 space-y-2">
                    {teacher.knowMore.qualifications.map((item, idx) => (
                      <li key={`qualification-${idx}`} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {teacher.knowMore?.teachingExperience?.length ? (
                <div>
                  <h5 className="font-semibold text-white">Teaching Experience</h5>
                  <ul className="mt-2 space-y-2">
                    {teacher.knowMore.teachingExperience.map((item, idx) => (
                      <li key={`teaching-experience-${idx}`} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {teacher.knowMore?.performanceAndWork?.length ? (
                <div>
                  <h5 className="font-semibold text-white">Performance & Work</h5>
                  <ul className="mt-2 space-y-2">
                    {teacher.knowMore.performanceAndWork.map((item, idx) => (
                      <li key={`performance-work-${idx}`} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {teacher.knowMore?.notableWork?.length ? (
                <div>
                  <h5 className="font-semibold text-white">Notable Work</h5>
                  <ul className="mt-2 space-y-2">
                    {teacher.knowMore.notableWork.map((item, idx) => (
                      <li key={`notable-work-${idx}`} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {teacher.knowMore?.otherHighlights?.length ? (
                <div>
                  <h5 className="font-semibold text-white">Other Highlights</h5>
                  <ul className="mt-2 space-y-2">
                    {teacher.knowMore.otherHighlights.map((item, idx) => (
                      <li key={`other-highlights-${idx}`} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {teacher.knowMore?.personal?.length ? (
                <div>
                  <h5 className="font-semibold text-white">Personal</h5>
                  <ul className="mt-2 space-y-2">
                    {teacher.knowMore.personal.map((item, idx) => (
                      <li key={`personal-${idx}`} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </details>
        ) : null}
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
