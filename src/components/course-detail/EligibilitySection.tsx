import { Users } from "lucide-react";

type EligibilitySectionProps = {
  whoCanJoin: string[];
};

export default function EligibilitySection({ whoCanJoin }: EligibilitySectionProps) {
  return (
    <section
      className="border-t border-white/10 bg-[#0A0A0A] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="eligibility-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="eligibility-heading"
          className="flex flex-wrap items-center gap-2 text-2xl font-bold text-white sm:text-3xl"
        >
          <Users className="h-8 w-8 text-sky-300" aria-hidden />
          Who can join
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">
          This course is designed for a wide range of learners.
        </p>

        <ul className="mt-10 flex flex-wrap gap-3">
          {whoCanJoin.map((item, i) => (
            <li
              key={i}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white sm:text-base"
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-primary"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
