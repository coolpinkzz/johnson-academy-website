import { BookOpen, CheckCircle2 } from "lucide-react";

type LearningSectionProps = {
  learningPoints: string[];
};

export default function LearningSection({ learningPoints }: LearningSectionProps) {
  return (
    <section
      className="border-t border-white/10 bg-black px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="learn-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="learn-heading"
          className="flex flex-wrap items-center gap-2 text-2xl font-bold text-white sm:text-3xl"
        >
          <BookOpen className="h-8 w-8 text-primary" aria-hidden />
          What you will learn
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">
          Structured outcomes you can expect from this program.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {learningPoints.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-muted sm:text-base"
            >
              <CheckCircle2
                className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
