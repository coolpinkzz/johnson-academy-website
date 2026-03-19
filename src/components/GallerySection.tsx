import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80",
    alt: "Music performance at Johnson's Academy",
  },
  {
    src: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400&q=80",
    alt: "Dance class at Johnson's Academy",
  },
  {
    src: "https://images.unsplash.com/photo-1545128485-c400e7702796?w=400&q=80",
    alt: "Drum lessons at Johnson's Academy",
  },
  {
    src: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&q=80",
    alt: "Guitar instruction at Johnson's Academy",
  },
  {
    src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&q=80",
    alt: "Martial arts training at Johnson's Academy",
  },
  {
    src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80",
    alt: "Art class at Johnson's Academy",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-overlay px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Gallery
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Glimpses of life at Johnson&apos;s Academy—performances, classes, and our vibrant community.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 transition-all hover:border-primary/50"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
