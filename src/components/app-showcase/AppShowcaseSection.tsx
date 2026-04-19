import Link from "next/link";
import { Apple, Smartphone } from "lucide-react";
import {
  appShowcaseContent,
  type AppShowcaseContent,
} from "@/data/app-showcase";
import AppPreview from "./AppPreview";
import FeatureList from "./FeatureList";

type AppShowcaseSectionProps = {
  content?: AppShowcaseContent;
};

export default function AppShowcaseSection({
  content = appShowcaseContent,
}: AppShowcaseSectionProps) {
  const headingSlug = `${content.sectionId}-heading`;

  return (
    <section
      id={content.sectionId}
      className="relative overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      aria-labelledby={headingSlug}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -right-24 top-0 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,106,26,0.25) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute -left-32 bottom-0 h-[24rem] w-[24rem] rounded-full opacity-25 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at center, rgba(47,128,237,0.2) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <AppPreview screenshots={content.screenshots} />
          </div>

          <article className="order-1 lg:order-2 app-showcase-animate-delay">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              {content.eyebrow}
            </p>
            <h2
              id={headingSlug}
              className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.25rem] lg:leading-tight xl:text-5xl"
            >
              {content.heading}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {content.description}
            </p>

            {content.stats.length > 0 && (
              <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {content.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center sm:text-left"
                  >
                    <dt className="text-xs font-medium uppercase tracking-wide text-white/55">
                      {stat.label}
                    </dt>
                    <dd className="mt-1 text-lg font-semibold text-white tabular-nums">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}

            <FeatureList features={content.features} className="mt-10" />

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href={content.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-black shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
                aria-label={content.appStoreAriaLabel}
              >
                <Apple className="h-5 w-5" strokeWidth={2} aria-hidden />
                Download on the App Store
              </Link>
              <Link
                href={content.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-primary bg-primary/10 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,106,26,0.2)] transition-all hover:bg-primary/20 hover:scale-[1.02] active:scale-[0.98]"
                aria-label={content.playStoreAriaLabel}
              >
                <Smartphone className="h-5 w-5" strokeWidth={2} aria-hidden />
                Get it on Google Play
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
