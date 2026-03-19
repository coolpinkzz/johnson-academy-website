import {
  Award,
  Route,
  Mic2,
  Users,
  Clock,
  MapPin,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Certified & Experienced Trainers",
    description:
      "Learn from professional musicians with years of teaching experience.",
    stat: "500+ Students",
  },
  {
    icon: Route,
    title: "Structured Learning Path",
    description:
      "Step-by-step curriculum from beginner to advanced levels.",
  },
  {
    icon: Mic2,
    title: "Performance Opportunities",
    description:
      "Showcase your talent in events, competitions, and stage performances.",
  },
  {
    icon: Users,
    title: "Small Batch Sizes",
    description: "Get personal attention with limited students per class.",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "Choose weekday or weekend batches as per your schedule.",
  },
  {
    icon: MapPin,
    title: "Multiple Branches in Bangalore",
    description: "Easily accessible locations near you.",
    stat: "3 Branches",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-black px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Why Students Love Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Discover what makes Johnson&apos;s Academy the preferred choice for
            music and arts education.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <IconComponent className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-muted">{feature.description}</p>
                {feature.stat && (
                  <p className="mt-4 text-sm font-medium text-primary">
                    {feature.stat}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
