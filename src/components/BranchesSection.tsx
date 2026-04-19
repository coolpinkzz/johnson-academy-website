"use client";

import Image from "next/image";
import { MapPin, Navigation, Star, Music, Calendar } from "lucide-react";

const branches = [
  {
    id: "arekere",
    name: "Arekere Branch",
    address:
      "Vysya Bank Colony, Shantiniketan Layout, Arekere, Bengaluru, Karnataka - 560076",
    landmark: "Near Arekere Lake",
    mapLink: "https://share.google/pqvAQTeNf1lAeT0ne",
    seoLine: "Music & Dance Classes in Arekere",
    image:
      "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=600&q=80",
    badge: "Popular Branch",
  },
  {
    id: "hulimavu",
    name: "Hulimavu Branch",
    address: "SS Arcade, DLF Main Rd, Hulimavu, Bengaluru, Karnataka - 560076",
    landmark: "Near Hulimavu Lake",
    mapLink: "https://share.google/dTQU1pmIZCAI8kKUp",
    seoLine: "Music & Dance Classes in Hulimavu",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80",
    badge: "New Batches Open",
  },
  {
    id: "vijaya-bank",
    name: "Vijaya Bank Layout Branch",
    address:
      "Sumukha Greenville, Johnson's Academy, VijayaBank Layout, Bengaluru, Karnataka - 560076",
    landmark: "Near Vijaya Bank Layout Main Rd",
    mapLink: "https://share.google/Odqg3ozY0QjjfCt5p",
    seoLine: "Music & Dance Classes in Vijaya Bank Layout",
    image:
      "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?w=600&q=80",
    badge: null,
  },
];

const coursesList = "Guitar • Keyboard • Drums • Violin • Dance • Art";

export default function BranchesSection() {
  return (
    <section
      id="branches"
      className="bg-[#0A0A0A] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Visit Our Bangalore Branches
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Find your nearest Johnson&apos;s Academy and start your musical
            journey today.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {branches.map((branch) => (
            <article
              key={branch.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-800 bg-[#111111] p-0 transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Top Section - Image & Badge */}
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={branch.image}
                  alt={branch.seoLine}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {branch.badge && (
                  <span className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                    {branch.badge}
                  </span>
                )}
              </div>

              {/* Middle Section */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-white">
                  {branch.name}
                </h3>

                <div className="mt-4 grid grid-cols-[2.75rem_1fr] gap-x-3 gap-y-1">
                  <div className="flex justify-center pt-0.5">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400 ring-1 ring-sky-500/25"
                      aria-hidden
                    >
                      <MapPin className="h-4 w-4" strokeWidth={2} />
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm leading-relaxed text-gray-300">
                      {branch.address}
                    </p>
                    {branch.landmark && (
                      <p className="mt-1.5 text-xs leading-snug text-gray-500">
                        <span className="font-medium text-gray-400">
                          Landmark
                        </span>
                        <span className="text-gray-600"> · </span>
                        {branch.landmark}
                      </p>
                    )}
                  </div>

                  <div className="col-span-2 mt-1 border-t border-gray-800/80 pt-3">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      {branch.seoLine}
                    </p>
                  </div>
                </div>

                {/* Info rows */}
                <div className="mt-4 space-y-3 border-t border-gray-800 pt-4">
                  <div className="grid grid-cols-[2.75rem_1fr] items-center gap-x-3">
                    <div className="flex justify-center">
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300 ring-1 ring-violet-500/25"
                        aria-hidden
                      >
                        <Music className="h-4 w-4" strokeWidth={2} />
                      </span>
                    </div>
                    <p className="text-sm leading-snug text-gray-300">
                      {coursesList}
                    </p>
                  </div>
                  <div className="grid grid-cols-[2.75rem_1fr] items-center gap-x-3">
                    <div className="flex justify-center">
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25"
                        aria-hidden
                      >
                        <Calendar className="h-4 w-4" strokeWidth={2} />
                      </span>
                    </div>
                    <p className="text-sm text-gray-300">
                      Weekday &amp; weekend batches
                    </p>
                  </div>
                  <div className="grid grid-cols-[2.75rem_1fr] items-center gap-x-3">
                    <div className="flex justify-center">
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/25"
                        aria-hidden
                      >
                        <Star
                          className="h-4 w-4 fill-amber-400 text-amber-400"
                          strokeWidth={2}
                        />
                      </span>
                    </div>
                    <p className="text-sm text-gray-300">
                      <span className="font-semibold tabular-nums text-amber-200/95">
                        4.8
                      </span>
                      <span className="text-gray-500"> · </span>
                      <span className="text-gray-400">Google rating</span>
                    </p>
                  </div>
                </div>

                <a
                  href={branch.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2.5 text-sm font-medium text-logoBlue transition-colors hover:text-sky-300"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-logoBlue/15 text-logoBlue ring-1 ring-logoBlue/30"
                    aria-hidden
                  >
                    <MapPin className="h-4 w-4" strokeWidth={2} />
                  </span>
                  View on map
                </a>

                {/* CTA Buttons */}
                <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row sm:items-center">
                  <a
                    href="tel:+917798347976"
                    className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary/90"
                  >
                    Book Demo
                  </a>
                  <a
                    href={branch.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-logoBlue/50 hover:bg-logoBlue/10 hover:text-sky-200"
                  >
                    <Navigation className="h-4 w-4 text-logoBlue" strokeWidth={2} />
                    Get directions
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
