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
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <iframe
              className="absolute inset-0 h-full w-full"
              width={560}
              height={315}
              src="https://www.youtube.com/embed/8noNekb84Ro?si=kfUcX-IpJXzf4xCM"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
