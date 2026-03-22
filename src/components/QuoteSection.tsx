export default function QuoteSection() {
  return (
    <section
      className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(https://www.johnsonsacademy.in/wp-content/uploads/2025/03/DSC04601-scaled.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-lg font-medium text-primary sm:text-xl">
          What&apos;s My Motto
        </h2>
        <blockquote className="mt-6 text-2xl font-medium text-white sm:text-3xl lg:text-4xl">
          &ldquo;Music is the bridge between passion and expression—play, sing,
          and let your soul be heard.&rdquo;
        </blockquote>
        <p className="mt-8 text-lg text-muted">— Ashish Johnson</p>
      </div>
    </section>
  );
}
