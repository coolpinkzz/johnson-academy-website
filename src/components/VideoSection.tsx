export default function VideoSection() {
  return (
    <section id="video" className="bg-black px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            See Us in Action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Watch our students perform and get a glimpse of life at Johnson Academy.
          </p>
        </div>
        <div className="mt-12">
          <div className="group relative aspect-video overflow-hidden rounded-2xl bg-white/5 border border-white/10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-black/50" />
            <a
              href="#"
              className="absolute inset-0 flex items-center justify-center transition-transform group-hover:scale-105"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-xl shadow-primary/40 transition-all group-hover:bg-primary/90 group-hover:shadow-2xl group-hover:shadow-primary/50">
                <svg
                  className="ml-1 h-10 w-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </a>
            <p className="absolute bottom-4 left-4 right-4 text-center text-sm text-white/80">
              Click to watch our academy showcase
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
