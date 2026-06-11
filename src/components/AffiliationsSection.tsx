import Image from "next/image";

const affiliations = [
  {
    name: "RSL Awards (UK)",
    subtitle: "Formerly Rockschool",
    logoSrc: "/rockschool.jpg",
    logoAlt: "RSL Awards RockSchool — International Rock Music Exam Board",
    imageClassName: "scale-125",
  },
  {
    name: "Trinity College London",
    logoSrc: "/trinity_college_london_logo.png",
    logoAlt: "Trinity College London logo",
    imageClassName: "",
  },
];

export default function AffiliationsSection() {
  return (
    <section
      id="affiliations"
      className="bg-black px-4 py-10 sm:px-6 lg:px-8"
      aria-labelledby="affiliations-heading"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-12">
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <h2
            id="affiliations-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Globally Recognized{" "}
            <span className="text-primary">Music Certifications</span>
          </h2>
          <p className="mt-4 text-xl font-semibold text-white sm:text-2xl">
            Learn. Perform. Get Certified.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Johnson&apos;s Academy is an accredited training center for
            internationally respected music examination boards:
          </p>
        </div>

        <div className="flex w-full flex-col gap-6 sm:flex-row lg:w-1/2">
          {affiliations.map((affiliation) => (
            <figure
              key={affiliation.name}
              className="group flex w-full flex-1 flex-col items-center sm:w-1/2"
            >
              <div className="flex h-28 w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-4 shadow-lg shadow-black/30 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-primary/10 sm:h-32">
                <div className="relative h-14 w-full max-w-[200px] sm:h-16">
                  <Image
                    src={affiliation.logoSrc}
                    alt={affiliation.logoAlt}
                    fill
                    sizes="(max-width: 640px) 45vw, 200px"
                    className={`object-contain ${affiliation.imageClassName}`}
                  />
                </div>
              </div>
              <figcaption className="mt-3 text-center">
                <p className="text-sm font-semibold text-white">
                  {affiliation.name}
                </p>
                {affiliation.subtitle ? (
                  <p className="mt-0.5 text-xs text-muted">
                    {affiliation.subtitle}
                  </p>
                ) : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
