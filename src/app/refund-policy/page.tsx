import type { Metadata } from "next";
import CoursePageLayout from "@/components/CoursePageLayout";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Johnson's Academy",
  description:
    "Johnson's Academy refund and cancellation policy. Learn about our demo class policy, fee payment, class rescheduling, and refund conditions.",
};

export default function RefundPolicyPage() {
  return (
    <CoursePageLayout>
      <article className="bg-black px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold mb-6 text-white">
            Refund & Cancellation Policy
          </h1>
          <p className="text-gray-300 leading-relaxed mb-4">
            Last updated: March 2025
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mt-6 mb-2 text-white">
              Introduction
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              At Johnson&apos;s Academy, we are committed to providing
              high-quality training in music, dance, art, and karate. This
              policy outlines our guidelines for fees, cancellations,
              rescheduling, and refunds. By enrolling in our courses, you agree
              to these terms. Please read them carefully.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mt-6 mb-2 text-white">
              Demo Class Policy
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We offer a free demo class for all our courses so you can
              experience our teaching style, meet our instructors, and explore
              our facilities before making any commitment. Attending a demo
              class does not obligate you to enroll. You are welcome to try a
              demo class with no pressure to continue.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mt-6 mb-2 text-white">
              Fee Payment Policy
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Course fees are structured based on the duration and type of
              program. We operate on a batch booking system—fees are payable for
              the enrolled batch/term as communicated at the time of
              registration. Once fees are paid, they are generally
              non-refundable. However, specific terms may vary by program; please
              confirm with our admissions team before payment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mt-6 mb-2 text-white">
              Cancellation Policy
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Students may reschedule classes by providing prior notice to the
              academy. We encourage you to inform us as early as possible if you
              cannot attend a scheduled class. Missed classes without prior
              notice may not be compensated. Rescheduling is subject to batch
              availability and instructor schedules.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mt-6 mb-2 text-white">
              Refund Policy
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              As a general rule, fees paid after course enrollment are
              non-refundable. We do not provide refunds once a student has
              formally enrolled and commenced the program. In exceptional
              circumstances, refund requests may be considered at the sole
              discretion of the management. Such cases will be evaluated
              individually based on genuine medical or other compelling reasons.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mt-6 mb-2 text-white">
              Class Rescheduling
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Class rescheduling is subject to availability. We will do our
              best to accommodate your requests when you provide sufficient
              advance notice. Rescheduled classes must be completed within the
              validity period of your enrollment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mt-6 mb-2 text-white">
              Contact for Support
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              For any questions regarding fees, cancellations, or refunds,
              please reach out to us:
            </p>
            <ul className="text-gray-300 leading-relaxed mb-4 space-y-2">
              <li>
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href="mailto:info@johnsonsacademy.in"
                  className="text-primary hover:underline"
                >
                  info@johnsonsacademy.in
                </a>
              </li>
              <li>
                <strong className="text-white">Phone:</strong>{" "}
                <a
                  href="tel:+917798347976"
                  className="text-primary hover:underline"
                >
                  +91 77983 47976
                </a>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our team will be happy to assist you with any queries or
              concerns.
            </p>
          </section>
        </div>
      </article>
    </CoursePageLayout>
  );
}
