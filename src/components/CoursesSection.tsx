import Image from "next/image";

const courses = [
  {
    title: "Guitar",
    description:
      "Learn acoustic and electric guitar from basics to advanced techniques.",
    image:
      "https://ik.imagekit.io/slipnscore/johnson-academy/guitar-course?updatedAt=1780818785212",
    href: "/courses/guitar-classes-bangalore",
  },
  {
    title: "Keyboard",
    description:
      "Master piano and keyboard with structured lessons for all levels.",
    image:
      "https://ik.imagekit.io/slipnscore/johnson-academy/piano-course",
    href: "/courses/keyboard-classes-bangalore",
  },
  {
    title: "Drums",
    description: "Rhythm and percussion training for aspiring drummers.",
    image:
      "https://ik.imagekit.io/slipnscore/johnson-academy/drums.jpg",
    href: "/courses/drum-classes-bangalore",
  },
  {
    title: "Piano",
    description: "Structured piano lessons for all skill levels.",
    image:
      "https://ik.imagekit.io/slipnscore/johnson-academy/piano-course.jpg",
    href: "/courses/piano-classes-bangalore",
  },
  {
    title: "Violin",
    description:
      "Classical violin training with focus on technique and expression.",
    image:
      "https://ik.imagekit.io/slipnscore/johnson-academy/violin.jpg",
    href: "/courses/violin-classes-bangalore",
  },
  {
    title: "Vocal",
    description: "Indian, Hindustani, and Western vocal training.",
    image:
      "https://ik.imagekit.io/slipnscore/johnson-academy/vocal.jpg",
    href: "/courses/hindustani-vocal-classes-bangalore",
  },
  {
    title: "Dance",
    description:
      "Contemporary, classical, and western dance forms for all ages.",
    image:
      "https://ik.imagekit.io/slipnscore/johnson-academy/dance.jpg",
    href: "/courses/dance-classes-bangalore",
  },
  {
    title: "Art",
    description: "Creative art classes including drawing, painting, and more.",
    image:
      "https://ik.imagekit.io/slipnscore/johnson-academy/art.jpg",
    href: "/courses/art-classes-bangalore",
  },
  {
    title: "Karate",
    description: "Martial arts training for discipline and fitness.",
    image:
      "https://ik.imagekit.io/slipnscore/johnson-academy/karate.jpg",
    href: "/courses/karate-classes-bangalore",
  },
];

export default function CoursesSection() {
  return (
    <section
      id="courses"
      className="bg-overlay px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our Courses
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            From music to dance and art, we offer comprehensive courses for
            learners of all ages.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <a
              key={course.title}
              href={course.href}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-0 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-white">
                  {course.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted">
                  {course.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  Learn More
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
