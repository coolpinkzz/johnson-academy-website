import Image from "next/image";

const galleryImages = [
  {
    src: "https://www.johnsonsacademy.in/wp-content/uploads/2025/03/pcb2007436T01.jpg",
    alt: "Johnson's Academy gallery performance image 0",
  },
  {
    src: "https://www.johnsonsacademy.in/wp-content/uploads/2025/03/pcb2007428T01.jpg",
    alt: "Johnson's Academy gallery performance image 1",
  },
  {
    src: "https://www.johnsonsacademy.in/wp-content/uploads/2025/03/pcb2007300T01.jpg",
    alt: "Johnson's Academy gallery performance image 2",
  },
  {
    src: "https://www.johnsonsacademy.in/wp-content/uploads/2025/03/pcb2007212T01-1.jpg",
    alt: "Johnson's Academy gallery performance image 3",
  },
  {
    src: "https://www.johnsonsacademy.in/wp-content/uploads/2025/03/DSC04505-scaled.jpg",
    alt: "Johnson's Academy gallery performance image 4",
  },
  {
    src: "https://www.johnsonsacademy.in/wp-content/uploads/2025/03/DSC04319-scaled.jpg",
    alt: "Johnson's Academy gallery performance image 5",
  },
  {
    src: "https://www.johnsonsacademy.in/wp-content/uploads/2025/03/DSC04056-scaled.jpg",
    alt: "Johnson's Academy gallery performance image 6",
  },
  {
    src: "https://www.johnsonsacademy.in/wp-content/uploads/2025/03/DSC03984-scaled.jpg",
    alt: "Johnson's Academy gallery performance image 7",
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
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
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
