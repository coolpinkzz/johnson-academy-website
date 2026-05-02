import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Clock3,
  Phone,
  Music,
  Navigation,
  CheckCircle2,
} from "lucide-react";
import CoursePageLayout from "@/components/CoursePageLayout";
import { getAllBranchIds, getBranchById } from "@/data/branches";

type Props = {
  params: Promise<{ branchId: string }>;
};

const SITE_URL = "https://johnsonsacademy.com";

export async function generateStaticParams() {
  return getAllBranchIds().map((branchId) => ({ branchId }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { branchId } = await params;
  const branch = getBranchById(branchId);
  if (!branch) return {};

  return {
    title: `${branch.name} Branch`,
    description: `${branch.seoLine}. Visit ${branch.name} for music, dance, art, and karate classes in Bangalore. Address: ${branch.address}.`,
    alternates: {
      canonical: `${SITE_URL}/our-branches/${branch.id}`,
    },
    openGraph: {
      title: `${branch.name} - Johnson's Academy Bangalore`,
      description: `${branch.overview} Check timings, courses offered, and directions.`,
      type: "website",
      url: `${SITE_URL}/our-branches/${branch.id}`,
    },
  };
}

export default async function BranchDetailPage({ params }: Props) {
  const { branchId } = await params;
  const branch = getBranchById(branchId);

  if (!branch) notFound();
  const mapPreviewUrl = `https://www.google.com/maps?q=${encodeURIComponent(branch.address)}&output=embed`;

  return (
    <CoursePageLayout>
      <section className="bg-black px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <Link
              href="/our-branches"
              className="text-sm font-medium text-logoBlue transition-colors hover:text-sky-300"
            >
              ← Back to all branches
            </Link>

            <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {branch.name}
            </h1>
            <p className="mt-3 max-w-3xl text-lg text-gray-300">{branch.overview}</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
            <iframe
              src={mapPreviewUrl}
              title={`${branch.name} map preview`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full sm:h-80"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0A0A0A] px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.45fr_1fr]">
          <article className="rounded-2xl border border-white/10 bg-black/60 p-5 sm:p-6">
            <h2 className="text-2xl font-semibold text-white">Location & details</h2>

            <div className="mt-5 space-y-3.5">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-logoBlue" />
                <div>
                  <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
                    Address
                  </p>
                  <p className="mt-1 text-gray-300">{branch.address}</p>
                  <p className="mt-2 text-sm text-gray-400">{branch.landmark}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                <div>
                  <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
                    Batch Timings
                  </p>
                  <ul className="mt-1 space-y-1 text-gray-300">
                    {branch.timings.map((time) => (
                      <li key={time}>{time}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
                    Contact
                  </p>
                  <a
                    href={`tel:${branch.phone.replace(/\+/g, "")}`}
                    className="mt-1 inline-block text-gray-300 transition-colors hover:text-primary"
                  >
                    {branch.phone}
                  </a>
                  <p className="mt-2 text-sm text-gray-400">{branch.parking}</p>
                </div>
              </div>
            </div>
          </article>

          <aside className="space-y-5">
            <article className="rounded-2xl border border-white/10 bg-black/60 p-5">
              <h2 className="text-xl font-semibold text-white">Courses Offered</h2>
              <div className="mt-3.5 grid grid-cols-2 gap-2">
                {branch.courses.map((course) => (
                  <div
                    key={course}
                    className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-300"
                  >
                    <Music className="h-4 w-4 text-violet-300" />
                    {course}
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-white/10 bg-black/60 p-5">
              <h2 className="text-xl font-semibold text-white">Why choose this branch</h2>
              <ul className="mt-3.5 space-y-2.5">
                {branch.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </aside>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">Visit {branch.name}</h2>
              <p className="mt-2 text-gray-300">
                Start with a free demo and meet our instructors at this location.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${branch.phone.replace(/\+/g, "")}`}
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
              >
                Book Demo
              </a>
              <a
                href={branch.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-logoBlue/50 hover:bg-logoBlue/10"
              >
                <Navigation className="h-4 w-4 text-logoBlue" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </CoursePageLayout>
  );
}
