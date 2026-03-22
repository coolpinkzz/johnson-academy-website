"use client";

import Image from "next/image";
import Link from "next/link";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

const stats = [
  {
    value: 500,
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
    value: 4.8,
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

  return (
    <div className="group flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md transition-all hover:border-primary/50 hover:bg-white/10 sm:px-6 sm:py-5">
      <span className="text-primary" aria-hidden="true">
        {stat.icon}
      </span>
      <span
        className="text-2xl font-bold text-white sm:text-3xl tabular-nums"
        aria-label={displayValue}
      >
        {displayValue}
      </span>
      <span className="text-sm font-medium text-white/70">{stat.label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Full-bleed landscape background image */}
      <Image
        src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1920&q=85"
        alt="Students learning music and dance at Johnson Academy in Bangalore - guitar, keyboard, and drums training"
        fill
        className="object-cover object-center -scale-x-100"
        sizes="100vw"
        priority
      />

      {/* Dark gradient overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          {/* Trust badge */}
          {/* <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 backdrop-blur-sm">
            <span className="text-primary" aria-hidden="true">
              🎵
            </span>
            <span className="text-sm font-medium text-white/90">
              Bangalore&apos;s Premier Music & Dance Academy
            </span>
          </div> */}

          <h1
            id="hero-heading"
            className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Best Music & Dance Academy in{" "}
            <span className="bg-linear-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              Bangalore
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">
            Master Guitar, Keyboard, Drums, Violin, Dance & Art with certified
            trainers. Flexible timings for all age groups. Start your musical
            journey today.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
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

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <AnimatedStatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce lg:block">
        <a
          href="#courses"
          className="flex flex-col items-center gap-2 text-white/60 transition-colors hover:text-white/80"
          aria-label="Scroll to courses"
        >
          <span className="text-xs font-medium">Explore</span>
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
