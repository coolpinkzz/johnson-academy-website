import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight, Navigation } from "lucide-react";
import CoursePageLayout from "@/components/CoursePageLayout";
import { BRANCH_COURSES_LINE, branches } from "@/data/branches";

const SITE_URL = "https://johnsonsacademy.com";

export const metadata: Metadata = {
  title: "Johnson's Academy Branches in Bangalore",
  description:
    "Find Johnson's Academy branches in Bangalore with address, timings, facilities, courses offered, and direct Google Maps directions.",
  alternates: {
    canonical: `${SITE_URL}/our-branches`,
  },
};

export default function OurBranchesPage() {
  return (
    <CoursePageLayout>
      <section className="bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Our Branches in Bangalore
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-300">
            Find the branch closest to you and explore detailed location, timings,
            facilities, and class information before booking your demo.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0A0A0A] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {branches.map((branch) => (
            <article
              key={branch.id}
              className="group overflow-hidden rounded-xl border border-white/10 bg-black/60 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
            >
              <Link href={`/our-branches/${branch.id}`} className="block">
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image
                    src={branch.image}
                    alt={branch.seoLine}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {branch.badge && (
                    <span className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                      {branch.badge}
                    </span>
                  )}
                </div>
              </Link>

              <div className="flex h-full flex-col p-4">
                <h2 className="text-base font-semibold text-white">{branch.name}</h2>
                <p className="mt-1 text-xs text-gray-400 line-clamp-1">{branch.seoLine}</p>

                <div className="mt-2.5 flex items-start gap-1.5 text-gray-300">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-logoBlue" />
                  <p className="text-xs leading-relaxed line-clamp-2">{branch.address}</p>
                </div>

                <p className="mt-2 text-xs text-gray-400 line-clamp-1">{branch.landmark}</p>
                <p className="mt-2 text-xs text-gray-300 line-clamp-2">{BRANCH_COURSES_LINE}</p>

                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                  <Link
                    href={`/our-branches/${branch.id}`}
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary/90"
                  >
                    View details
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <a
                    href={branch.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/20 px-3 py-2 text-xs font-semibold text-white transition-colors hover:border-logoBlue/50 hover:bg-logoBlue/10"
                  >
                    <Navigation className="h-3.5 w-3.5 text-logoBlue" />
                    Directions
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </CoursePageLayout>
  );
}
