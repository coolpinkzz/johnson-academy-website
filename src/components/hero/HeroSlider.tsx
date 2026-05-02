"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { HeroSlide } from "@/data/hero-slides";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import AppPromoSlide from "./AppPromoSlide";
import AffiliationSlide from "./AffiliationSlide";
import SlideItem from "./SlideItem";
import StandardHeroSlide from "./StandardHeroSlide";

const AUTOPLAY_MS = 8000;

const stats = [
  {
    value: 700,
    suffix: "+",
    label: "Students Trained",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    value: 3,
    suffix: "",
    label: "Branches",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    value: 4.9,
    suffix: "",
    label: "Google Rating",
    icon: (
      <svg
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

function AnimatedStatCard({ stat }: { stat: (typeof stats)[number] }) {
  const displayValue = useAnimatedCounter(stat.value, stat.suffix, 2000, true);
  const isRating = stat.label === "Google Rating";

  return (
    <div className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-white/15 bg-linear-to-br from-white/[0.14] via-white/[0.05] to-black/50 px-3 py-3 shadow-[0_8px_28px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:from-white/[0.2] hover:via-white/[0.08] hover:to-black/40 hover:shadow-[0_14px_36px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,106,26,0.15),inset_0_1px_0_rgba(255,255,255,0.14)] sm:rounded-2xl sm:px-4 sm:py-4">
      <div
        className="pointer-events-none absolute inset-x-2.5 top-0 h-px bg-linear-to-r from-transparent via-white/35 to-transparent sm:inset-x-3"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />

      <div className="relative flex flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-primary/35 to-primary/10 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] ring-1 ring-primary/25 transition-transform duration-300 group-hover:scale-105 group-hover:ring-primary/40 sm:h-10 sm:w-10 sm:rounded-[0.7rem]"
          aria-hidden
        >
          <span className="flex [&>svg]:h-4 [&>svg]:w-4 sm:[&>svg]:h-[1.1rem] sm:[&>svg]:w-[1.1rem]">
            {stat.icon}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-1 gap-y-0">
            <span
              className="text-xl font-bold tabular-nums tracking-tight text-white drop-shadow-sm sm:text-2xl lg:text-[1.65rem] lg:leading-none"
              aria-label={displayValue}
            >
              {displayValue}
            </span>
            {isRating && (
              <span
                className="text-base text-amber-400/95 sm:text-lg"
                aria-hidden
              >
                ★
              </span>
            )}
          </div>
          <p className="mt-0.5 text-[10px] font-semibold uppercase leading-snug tracking-[0.1em] text-white/55 sm:text-[11px] sm:tracking-[0.12em]">
            {stat.label}
          </p>
          {isRating && (
            <div
              className="mt-1.5 flex gap-0.5 text-amber-400/85"
              aria-hidden
            >
              {[0, 1, 2, 3, 4].map((i) => (
                <svg
                  key={i}
                  className="h-2.5 w-2.5 fill-current sm:h-3 sm:w-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function slideAnnouncement(slide: HeroSlide): string {
  if (slide.kind === "image") {
    return `${slide.lineBefore}${slide.highlight}${slide.lineAfter}. ${slide.description}`;
  }
  if (slide.kind === "app-promo") {
    return `${slide.headingLine1} ${slide.headingLine2Before}${slide.headingAccent}${slide.headingLine2After}. ${slide.supportingText}`;
  }
  return `${slide.heading}. ${slide.intro} ${slide.details}`;
}

type HeroSliderProps = {
  slides: HeroSlide[];
};

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const count = slides.length;
  const activeSlide = slides[active];
  const isImageSlide = activeSlide.kind === "image";
  const isAppPromoSlide = activeSlide.kind === "app-promo";
  const isAffiliationSlide = activeSlide.kind === "affiliation-promo";

  const imageSlides = useMemo(
    () => slides.filter((s): s is Extract<HeroSlide, { kind: "image" }> => s.kind === "image"),
    [slides]
  );

  const appSlide = useMemo(
    () => slides.find((s): s is Extract<HeroSlide, { kind: "app-promo" }> => s.kind === "app-promo"),
    [slides]
  );
  const affiliationSlide = useMemo(
    () =>
      slides.find(
        (s): s is Extract<HeroSlide, { kind: "affiliation-promo" }> =>
          s.kind === "affiliation-promo"
      ),
    [slides]
  );

  const go = useCallback(
    (dir: -1 | 1) => {
      setActive((i) => (i + dir + count) % count);
    },
    [count]
  );

  const goTo = useCallback((index: number) => {
    setActive(index);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reducedMotion || count <= 1) return;
    const t = window.setTimeout(() => {
      setActive((i) => (i + 1) % count);
    }, AUTOPLAY_MS);
    return () => window.clearTimeout(t);
  }, [active, reducedMotion, count]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      }
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [go]);

  const transitionClass = reducedMotion
    ? "duration-0"
    : "duration-700 ease-out";

  const controlBtnClass =
    "border-white/20 bg-black/30 text-white hover:border-primary/50 hover:bg-white/10 focus-visible:ring-offset-black";

  const dotActiveClass = "bg-primary";
  const dotIdleClass = "bg-white/35 hover:bg-white/55";

  return (
    <section
      ref={sectionRef}
      tabIndex={0}
      className="relative h-dvh max-h-dvh min-h-0 w-full overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-black"
      aria-labelledby="hero-heading"
      aria-roledescription="carousel"
    >
      <div className="absolute inset-0 z-0">
        {slides.map((slide, i) => (
          <div
            key={slide.key}
            className={`absolute inset-0 transition-opacity ${transitionClass} ${
              i === active ? "z-[1] opacity-100" : "z-0 opacity-0"
            }`}
            aria-hidden={i !== active}
          >
            {slide.kind === "image" ? (
              <Image
                src={slide.image}
                alt={i === active ? slide.imageAlt : ""}
                fill
                className="object-cover object-center -scale-x-100"
                sizes="100vw"
                priority={i === 0}
                loading={i === 0 ? undefined : "lazy"}
              />
            ) : (
              <div className="absolute inset-0 h-full w-full" aria-hidden>
                <div
                  className="absolute inset-0 bg-linear-to-br from-zinc-700 via-zinc-950 to-[#2a1206] max-sm:bg-linear-to-b max-sm:from-zinc-600 max-sm:via-zinc-900 max-sm:to-primary/45"
                  aria-hidden
                />
                <div
                  className="absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_0%_0%,rgba(255,106,26,0.38)_0%,transparent_58%)]"
                  aria-hidden
                />
                <div
                  className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_100%_100%,rgba(255,106,26,0.42)_0%,transparent_52%)]"
                  aria-hidden
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div
        className={`absolute inset-0 z-10 transition-opacity ${transitionClass} ${
          isImageSlide ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%)",
        }}
        aria-hidden={!isImageSlide}
      />

      <div
        className={`absolute inset-0 z-10 transition-opacity ${transitionClass} ${
          isImageSlide ? "pointer-events-none opacity-0" : "opacity-100"
        } bg-[radial-gradient(ellipse_70%_55%_at_0%_0%,rgba(255,106,26,0.14)_0%,transparent_50%),linear-gradient(145deg,rgba(255,106,26,0.12)_0%,rgba(0,0,0,0.35)_42%,rgba(0,0,0,0.5)_100%)] max-sm:bg-[radial-gradient(ellipse_75%_60%_at_0%_0%,rgba(255,106,26,0.22)_0%,transparent_52%),linear-gradient(160deg,rgba(255,106,26,0.15)_0%,rgba(0,0,0,0.28)_40%,rgba(0,0,0,0.45)_100%)]`}
        aria-hidden={isImageSlide}
      />

      <div className="relative z-20 flex h-full min-h-0 flex-col pt-[4.5rem] sm:pt-24">
        <div className="mx-auto flex min-h-0 w-full max-w-[1200px] flex-1 flex-col justify-center px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="relative w-full min-h-0">
            <div
              className={`transition-opacity ${transitionClass} ${
                isImageSlide
                  ? "relative z-10 w-full max-w-3xl pb-4 opacity-100 sm:pb-6"
                  : "pointer-events-none absolute inset-x-0 top-0 z-0 max-w-3xl opacity-0"
              }`}
              aria-hidden={!isImageSlide}
            >
              <div className="grid w-full [&>*]:col-start-1 [&>*]:row-start-1 [&>*]:min-w-0">
                {imageSlides.map((slide) => {
                  const globalIndex = slides.indexOf(slide);
                  return (
                    <SlideItem
                      key={slide.key}
                      isActive={active === globalIndex}
                      transitionClass={transitionClass}
                    >
                      <StandardHeroSlide
                        slide={slide}
                        isFirst={globalIndex === 0}
                        isActive={active === globalIndex}
                      />
                    </SlideItem>
                  );
                })}
              </div>
            </div>

            {appSlide && (
              <div
                className={`transition-opacity ${transitionClass} ${
                  isAppPromoSlide
                    ? "relative z-10 w-full opacity-100"
                    : "pointer-events-none absolute inset-x-0 top-0 z-0 w-full opacity-0"
                }`}
                aria-hidden={!isAppPromoSlide}
              >
                <AppPromoSlide
                  content={appSlide}
                  headingId="hero-app-promo-heading"
                  HeadingTag="h2"
                />
              </div>
            )}

            {affiliationSlide && (
              <div
                className={`transition-opacity ${transitionClass} ${
                  isAffiliationSlide
                    ? "relative z-10 w-full opacity-100"
                    : "pointer-events-none absolute inset-x-0 top-0 z-0 w-full opacity-0"
                }`}
                aria-hidden={!isAffiliationSlide}
              >
                <AffiliationSlide
                  slide={affiliationSlide}
                  headingId="hero-affiliation-heading"
                  HeadingTag="h2"
                />
              </div>
            )}
          </div>

          {isImageSlide && (
            <>
              <div className="mt-16 flex w-full max-w-3xl flex-col gap-4 sm:mt-20 sm:flex-row sm:gap-6 lg:mt-24">
                <Link
                  href="tel:+917798347976"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book Free Demo
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="#video"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/30 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-primary hover:bg-white/10"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  Watch Video
                </Link>
              </div>

              <div className="mt-5 grid w-full max-w-3xl grid-cols-3 gap-2 sm:mt-9 sm:gap-3 lg:gap-4">
                {stats.map((stat) => (
                  <AnimatedStatCard key={stat.label} stat={stat} />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="relative z-30 mx-auto flex w-full max-w-[1200px] shrink-0 items-center justify-center gap-4 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => go(-1)}
            className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${controlBtnClass}`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2} aria-hidden />
          </button>
          <div className="flex items-center gap-2" aria-label="Slide indicators">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-current={i === active || undefined}
                className={`h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                  i === active
                    ? `w-8 ${dotActiveClass}`
                    : `w-2 ${dotIdleClass}`
                } focus-visible:ring-offset-black`}
                aria-label={`Go to slide ${i + 1} of ${count}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${controlBtnClass}`}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2} aria-hidden />
          </button>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Slide {active + 1} of {count}: {slideAnnouncement(activeSlide)}
      </p>
    </section>
  );
}
