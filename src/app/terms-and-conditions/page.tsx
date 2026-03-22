import type { Metadata } from "next";
import CoursePageLayout from "@/components/CoursePageLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions | Johnson's Academy",
  description:
    "Johnson's Academy Terms and Conditions. Read our policies on services, payments, demo classes, and more.",
};

export default function TermsAndConditionsPage() {
  return (
    <CoursePageLayout>
      <article className="bg-black px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold mb-6 text-white">
            Terms & Conditions
          </h1>
          <p className="text-gray-300 leading-relaxed mb-4">
            Last updated: March 2025
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mt-6 mb-2 text-white">
              Introduction
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Welcome to Johnson&apos;s Academy. These Terms and Conditions
              (&quot;Terms&quot;) govern your use of our website and services.
              By accessing or using our services, you agree to be bound by these
              Terms. Please read them carefully before enrolling in any of our
              courses or using our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mt-6 mb-2 text-white">
              Services Offered
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Johnson&apos;s Academy offers the following services:
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-4 space-y-2 ml-2">
              <li>Music Classes (Guitar, Keyboard, Drums, Violin, Vocals)</li>
              <li>Dance Classes (Western, Indian Classical, Dance Fitness)</li>
              <li>Art Classes (Drawing, Sketching, Painting)</li>
              <li>Karate & Other Specialized Programs</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mt-6 mb-2 text-white">
              User Responsibilities
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              By using our services, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-4 space-y-2 ml-2">
              <li>Provide accurate and complete information when registering</li>
              <li>Maintain respectful behavior toward instructors and fellow students</li>
              <li>Attend classes on time and follow the academy&apos;s schedule</li>
              <li>Communicate any concerns or special requirements to our staff</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mt-6 mb-2 text-white">
              Payment & Fees
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Course fees are payable as per the terms communicated at the time
              of enrollment. We accept various payment methods. Fee structures
              may vary by course and duration. Please confirm the applicable
              fees and payment schedule with our admissions team before
              enrollment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mt-6 mb-2 text-white">
              Demo Class Policy
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We offer complimentary demo classes for prospective students to
              experience our teaching style and facilities. Demo classes are
              subject to availability and must be booked in advance. Attending a
              demo class does not obligate you to enroll.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mt-6 mb-2 text-white">
              Cancellation / Refund Policy
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Cancellation and refund requests are handled on a case-by-case
              basis. Please contact us as early as possible if you need to
              cancel or adjust your enrollment. Specific refund terms will be
              communicated at the time of registration and may vary based on the
              course and circumstances.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mt-6 mb-2 text-white">
              Limitation of Liability
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Johnson&apos;s Academy shall not be liable for any indirect,
              incidental, special, or consequential damages arising from your use
              of our services. Our liability is limited to the extent permitted
              by applicable law. We strive to provide a safe learning environment
              but are not responsible for any injuries or losses that may occur
              during classes or on our premises, except where required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mt-6 mb-2 text-white">
              Changes to Terms
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. Changes
              will be effective upon posting to this page. Your continued use of
              our services after any changes constitutes acceptance of the
              revised Terms. We encourage you to review this page periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mt-6 mb-2 text-white">
              Contact Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              For any questions regarding these Terms and Conditions, please
              contact us:
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
          </section>
        </div>
      </article>
    </CoursePageLayout>
  );
}
