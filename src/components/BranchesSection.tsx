const branches = [
  {
    name: "Indiranagar",
    address: "12th Main, Indiranagar, Bangalore 560038",
  },
  {
    name: "Koramangala",
    address: "80 Feet Road, Koramangala, Bangalore 560095",
  },
  {
    name: "Whitefield",
    address: "ITPL Road, Whitefield, Bangalore 560066",
  },
];

export default function BranchesSection() {
  return (
    <section id="branches" className="bg-overlay px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our Branches
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Visit us at any of our convenient locations across Bangalore.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch) => (
            <div
              key={branch.name}
              className="flex flex-col rounded-2xl bg-white/5 border border-white/10 p-8 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{branch.name}</h3>
              <p className="mt-2 text-muted">{branch.address}</p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary/90"
              >
                Book Demo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
