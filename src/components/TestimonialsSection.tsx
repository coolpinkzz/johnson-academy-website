import Image from "next/image";

const testimonials = [
  {
    name: "Nalini Roy Saire",
    role: "Parent",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop&q=80",
    review: "Best Music Academy in Bangalore, with a very professional and passionate team of highly experienced and talented teachers dedicated to the betterment of students, helping them become future artists.",
    rating: 5,
  },
  {
    name: "Roopini C",
    role: "Parent of Dance Students",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&fit=crop&q=80",
    review: "I am really very thankful to Johnson's Music Academy for their classes during this pandemic period. My two daughters are learning dance at Johnson's Music Academy. A special thanks to Vivek Sir for encouraging the kids to learn dance. My daughters are enjoying their dance classes very much under his guidance.",
    rating: 5,
  },
  {
    name: "Sheetal H",
    role: "Parent of Guitar Student",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=128&h=128&fit=crop&q=80",
    review: "My daughter Ashley has been learning guitar here for the past 4 months. Ashish Sir is the best in every aspect—his teaching, values, professionalism, and personal attention. What more can I say? A girl who held a guitar for the first time here is now a very good performer!",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < rating ? "text-primary" : "text-white/30"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-overlay px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            What They Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Join hundreds of happy students and parents who&apos;ve found their rhythm with us.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl bg-white/5 border border-white/10 p-8 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              <StarRating rating={t.rating} />
              <p className="mt-6 text-muted">&ldquo;{t.review}&rdquo;</p>
              <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-white/10">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
