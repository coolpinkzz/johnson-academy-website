import Link from "next/link";
import type { HeroAffiliationSlide } from "@/data/hero-slides";
import { heroSlideTitleClassName } from "./StandardHeroSlide";

type AffiliationSlideProps = {
  slide: HeroAffiliationSlide;
  headingId?: string;
  HeadingTag?: "h1" | "h2";
};

export default function AffiliationSlide({
  slide,
  headingId,
  HeadingTag = "h2",
}: AffiliationSlideProps) {
  return (
    <article
      className="relative w-full"
      aria-label="International affiliation and certifications"
    >
      <div className="relative">
        <div className="min-w-0 max-w-[70rem]">
          <HeadingTag
            id={headingId}
            className={`${heroSlideTitleClassName} max-w-[24ch]`}
          >
            {slide.heading}
          </HeadingTag>

          <p className="mt-4 max-w-[70ch] text-[clamp(1rem,1.45vw,1.2rem)] leading-relaxed text-white/85 sm:mt-6">
            {slide.intro}
          </p>
          {slide.details ? (
            <p className="mt-4 max-w-[70ch] text-[clamp(0.98rem,1.3vw,1.1rem)] leading-relaxed text-white/75">
              {slide.details}
            </p>
          ) : null}

          <ul className="mt-5 grid max-w-[44rem] gap-2 text-sm text-white/90 sm:grid-cols-2 sm:text-base">
            {slide.highlights.map((point) => (
              <li key={point} className="flex min-w-0 items-start gap-2">
                <span className="mt-0.5 text-primary" aria-hidden>
                  ✓
                </span>
                <span className="min-w-0">{point}</span>
              </li>
            ))}
          </ul>

          <Link
            href={slide.ctaHref}
            className="mt-7 inline-flex max-w-max items-center justify-center rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:scale-[1.02] hover:bg-primary/90 active:scale-[0.98]"
          >
            {slide.ctaLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}
