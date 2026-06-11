"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Navigation, Star, Music, Calendar } from "lucide-react";
import { BRANCH_COURSES_LINE, branches } from "@/data/branches";

export default function BranchesSection() {
  return (
    <section
      id="branches"
      className="bg-[#0A0A0A] px-4 py-16 sm:px-6 sm:py-0 lg:px-8 lg:py-0"
    >
      <div className="mx-auto max-w-screen-2xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Visit Our Bangalore Branches
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Find your nearest Johnson&apos;s Academy and start your musical
            journey today.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 xl:grid-cols-4">
          {branches.map((branch) => (
            <article
              key={branch.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-800 bg-[#111111] p-0 transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
            >
              <Link
                href={`/our-branches/${branch.id}`}
                className="relative aspect-16/10 overflow-hidden"
              >
                <Image
                  src={branch.image}
                  alt={branch.seoLine}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
                {branch.badge && (
                  <span className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                    {branch.badge}
                  </span>
                )}
              </Link>

              <div className="flex flex-1 flex-col p-6">
                <Link href={`/our-branches/${branch.id}`}>
                  <h3 className="text-xl font-semibold text-white hover:text-primary transition-colors">
                    {branch.name}
                  </h3>
                </Link>

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
                    <p className="mt-1.5 text-xs leading-snug text-gray-500">
                      <span className="font-medium text-gray-400">
                        Landmark
                      </span>
                      <span className="text-gray-600"> · </span>
                      {branch.landmark}
                    </p>
                  </div>

                  <div className="col-span-2 mt-1 border-t border-gray-800/80 pt-3">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      {branch.seoLine}
                    </p>
                  </div>
                </div>

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
                      {BRANCH_COURSES_LINE}
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
                        {branch.rating.toFixed(1)}
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

                <div className="mt-auto flex flex-col gap-3 pt-6">
                  <a
                    href="tel:+917798347976"
                    className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary/90"
                  >
                    Book Demo
                  </a>
                  <Link
                    href={`/our-branches/${branch.id}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-logoBlue/50 hover:bg-logoBlue/10 hover:text-sky-200"
                  >
                    <Navigation
                      className="h-4 w-4 text-logoBlue"
                      strokeWidth={2}
                    />
                    View details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
