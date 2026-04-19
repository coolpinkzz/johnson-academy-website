import BookFreeDemoButton from "./BookFreeDemoButton";

type CTASectionProps = {
  courseTitle: string;
};

export default function CTASection({ courseTitle }: CTASectionProps) {
  return (
    <section className="border-t border-white/10 bg-gradient-to-b from-black to-[#0a0a0a] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Ready to start?
        </h2>
        <p className="mt-4 text-muted sm:text-lg">
          Book a free demo for{" "}
          <span className="font-medium text-white/90">{courseTitle}</span> at
          Johnson&apos;s Academy and meet your instructor.
        </p>
        <BookFreeDemoButton
          courseTitle={courseTitle}
          className="mt-8 inline-flex w-full max-w-sm items-center justify-center rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-orange-500 hover:shadow-primary/35 sm:w-auto"
        />
      </div>
    </section>
  );
}
