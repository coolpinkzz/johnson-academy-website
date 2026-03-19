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
                <div className="mt-2 flex items-start gap-2 text-gray-400">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className="text-sm">{branch.address}</p>
                </div>
                {branch.landmark && (
                  <p className="mt-1 text-sm text-gray-500">
                    Landmark: {branch.landmark}
                  </p>
                )}
                <p className="mt-2 text-sm font-medium text-primary">
                  {branch.seoLine}
                </p>

                {/* Info Row */}
                <div className="mt-4 space-y-2 border-t border-gray-800 pt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Music className="h-4 w-4 text-primary" />
                    <span>{coursesList}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Weekday & Weekend Batches</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-amber-400">
                    <Star className="h-4 w-4 fill-amber-400" />
                    <span>4.8</span>
                  </div>
                </div>

                {/* Map Section */}
                <a
                  href={branch.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
                >
                  <MapPin className="h-4 w-4" />
                  View on Map
                </a>

                {/* CTA Buttons */}
                <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row sm:items-center">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary/90"
                  >
                    Book Demo at This Branch
                  </a>
                  <a
                    href={branch.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions
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
