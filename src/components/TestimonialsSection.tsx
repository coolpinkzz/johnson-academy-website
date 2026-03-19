const testimonials = [
  {
    name: "Priya Sharma",
    role: "Guitar Student",
    review: "Johnson Academy transformed my passion into skill. The trainers are patient and the flexible timings fit my work schedule perfectly. Highly recommend!",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Parent of Dance Student",
    review: "My daughter has been learning dance here for 2 years. The performances they organize give kids amazing confidence. Best academy in Bangalore.",
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Keyboard Student",
    review: "Started from scratch at 45. The certified trainers made learning so easy. Now I can play my favorite songs. Thank you Johnson Academy!",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Drums Student",
    review: "Great facilities, amazing instructors, and the free demo class helped me decide. Three branches make it convenient. 5 stars!",
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
    <section className="bg-overlay px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            What Our Students Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Join hundreds of happy students who&apos;ve found their rhythm with us.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl bg-white/5 border border-white/10 p-8 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              <StarRating rating={t.rating} />
              <p className="mt-6 text-muted">&ldquo;{t.review}&rdquo;</p>
              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-muted">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
