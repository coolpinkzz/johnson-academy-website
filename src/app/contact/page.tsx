import type { Metadata } from "next";
import CoursePageLayout from "@/components/CoursePageLayout";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { courses } from "@/data/courses";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Johnson's Academy — Book a Free Demo Class",
  description:
    "Get in touch with Johnson's Academy. Book your free demo class for music, dance, art, or karate. Visit our branches in Arekere, Hulimavu, and Vijaya Bank Layout, Bangalore.",
};

const branches = [
  {
    name: "Arekere Branch",
    address:
      "Vysya Bank Colony, Shantiniketan Layout, Arekere, Bengaluru, Karnataka - 560076",
  },
  {
    name: "Hulimavu Branch",
    address:
      "SS Arcade, DLF Main Rd, Hulimavu, Bengaluru, Karnataka - 560076",
  },
  {
    name: "Vijaya Bank Layout Branch",
    address:
      "Sumukha Greenville, Johnson's Academy, Vijaya Bank Layout, Bengaluru, Karnataka - 560076",
  },
];

const WHATSAPP_NUMBER = "917798347976";
const PHONE_NUMBER = "+917798347976";
const EMAIL = "info@johnsonsacademy.in";

export default function ContactPage() {
  return (
    <CoursePageLayout>
      <div className="bg-black">
        {/* Header Section */}
        <header className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="text-3xl font-bold mb-4 text-white sm:text-4xl">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Book your free demo class or ask us anything
            </p>
          </div>
        </header>

        {/* Contact Info + Form Grid */}
        <section
          className="border-t border-white/10 bg-[#0A0A0A] px-4 py-16 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Info */}
              <div className="flex flex-col gap-8">
                <h2 id="contact-heading" className="sr-only">
                  Contact Information
                </h2>

                <div className="flex flex-col gap-4">
                  <a
                    href={`tel:${PHONE_NUMBER.replace(/\+/g, "")}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                      <Phone className="h-5 w-5" />
                    </span>
                    <span>{PHONE_NUMBER}</span>
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span>{EMAIL}</span>
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-white font-medium hover:bg-[#20bd5a] transition-colors w-fit"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Our Branches
                  </h3>
                  <ul className="space-y-4">
                    {branches.map((branch) => (
                      <li key={branch.name}>
                        <p className="font-medium text-white text-sm">
                          {branch.name}
                        </p>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {branch.address}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="rounded-2xl bg-black/60 p-6 shadow-xl ring-1 ring-white/10 sm:p-8">
                  <h3 className="text-xl font-semibold text-white mb-6">
                    Book Free Demo
                  </h3>
                  <ContactForm
                    courses={courses}
                    branches={branches}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section
          className="border-t border-white/10 px-4 py-16 sm:px-6 lg:px-8"
          aria-labelledby="maps-heading"
        >
          <div className="mx-auto max-w-5xl">
            <h2
              id="maps-heading"
              className="text-2xl font-bold text-white mb-8 text-center"
            >
              Find Us
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {branches.map((branch) => (
                <a
                  key={branch.name}
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${branch.address}, Bengaluru`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-xl border border-white/10 bg-[#0A0A0A] transition-colors hover:border-primary/50"
                >
                  <div className="flex h-36 items-center justify-center bg-white/5">
                    <MapPin className="h-12 w-12 text-primary/60 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="px-4 py-3">
                    <p className="font-medium text-white">{branch.name}</p>
                    <p className="text-sm text-gray-400">View on Google Maps →</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </CoursePageLayout>
  );
}
