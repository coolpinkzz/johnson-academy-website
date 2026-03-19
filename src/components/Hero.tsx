import Image from "next/image";

const stats = [
  { value: "500+", label: "Students" },
  { value: "3", label: "Branches" },
  { value: "4.8", label: "Rating" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Best Music & Dance Academy in Bangalore
            </h1>
            <p className="mt-6 text-lg text-muted sm:text-xl">
              Master Guitar, Keyboard, Drums, Violin, Dance & Art with certified trainers. 
              Flexible timings for all age groups. Start your musical journey today.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/30"
              >
                Book Free Demo
              </a>
              <a
                href="#video"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-primary hover:bg-white/5"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Video
              </a>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-primary sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl lg:aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80"
              alt="Music students learning"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
