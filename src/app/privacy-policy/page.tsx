import type { Metadata } from "next";
import CoursePageLayout from "@/components/CoursePageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Johnson's Academy",
  description:
    "Johnson's Academy Privacy Policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <CoursePageLayout>
      <article className="bg-black px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold mb-6 text-white">
            Privacy Policy
          </h1>
          <p className="text-gray-300 leading-relaxed mb-4">
            Last updated: March 2025
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mt-6 mb-2 text-white">
              Introduction
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Johnson&apos;s Academy (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
              committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you visit our website or use our services. Please read this policy
              carefully to understand our practices regarding your personal data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mt-6 mb-2 text-white">
              Information We Collect
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may collect the following types of information when you interact
              with our website or enroll in our courses:
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-4 space-y-2 ml-2">
              <li>Name</li>
              <li>Phone Number</li>
              <li>Email Address</li>
              <li>Course Interest</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              This information is typically collected when you fill out contact
              forms, request information about our classes, or schedule a demo
              class.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mt-6 mb-2 text-white">
              How We Use Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-4 space-y-2 ml-2">
              <li>To contact you in response to your inquiries</li>
              <li>To schedule demo classes and provide course information</li>
              <li>To improve our services and user experience</li>
              <li>To send relevant updates about our academy and courses</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mt-6 mb-2 text-white">
              Data Protection
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. We regularly review our
              security practices to ensure your data remains secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mt-6 mb-2 text-white">
              Sharing of Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third
              parties. Your data may only be shared with trusted service
              providers who assist us in operating our website and conducting
              our business, and they are contractually obligated to keep your
              information confidential.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mt-6 mb-2 text-white">
              Cookies
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our website may use cookies or similar technologies to enhance
              your browsing experience and analyze site traffic. You can control
              cookie preferences through your browser settings. Disabling cookies
              may affect certain features of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mt-6 mb-2 text-white">
              Contact Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or wish to
              exercise your data rights, please contact us:
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
