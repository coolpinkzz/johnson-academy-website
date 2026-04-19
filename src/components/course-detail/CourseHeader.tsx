import Image from "next/image";

type CourseHeaderProps = {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
};

export default function CourseHeader({
  title,
  description,
  image,
  imageAlt,
}: CourseHeaderProps) {
  return (
    <header className="border-b border-white/10 bg-black px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div className="order-2 lg:order-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Course overview
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-xl shadow-black/40 lg:aspect-square">
            <Image
              src={image}
              alt={imageAlt ?? title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </header>
  );
}
