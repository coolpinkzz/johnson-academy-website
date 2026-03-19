export default function QuoteSection() {
  return (
    <section className="bg-black px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-lg font-medium text-primary sm:text-xl">
          What&apos;s My Motto
        </h2>
        <blockquote className="mt-6 text-2xl font-medium text-white sm:text-3xl lg:text-4xl">
          &ldquo;Music is the bridge between passion and expression—play, sing, and let your soul be heard.&rdquo;
        </blockquote>
        <p className="mt-8 text-lg text-muted">— Ashish Johnson</p>
      </div>
    </section>
  );
}
