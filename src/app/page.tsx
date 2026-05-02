import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CoursesSection from "@/components/CoursesSection";
import BranchesSection from "@/components/BranchesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuoteSection from "@/components/QuoteSection";
import VideoSection from "@/components/VideoSection";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { JsonLdScript, mergeSchemas } from "@/lib/seo/jsonLd";
import {
  buildFaqPageSchema,
  buildWebPageSchema,
} from "@/lib/seo/schema";
import { SITE_ORIGIN } from "@/lib/seo/site";
import type { Metadata } from "next";

const homeTitle = "Best Music & Dance Academy in Bangalore";
const homeDescription =
  "Join Johnson's Academy for expert-led music, dance, art, and karate classes in Bangalore. Flexible batches for kids and adults. Book a free demo class today.";

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Johnson's Academy Bangalore - Music, Dance, Art & Karate Classes",
    description:
      "Expert-led classes with structured learning, stage performance exposure, and flexible batches in Bangalore.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  const homeSchema = mergeSchemas(
    buildWebPageSchema({
      path: "/",
      url: SITE_ORIGIN,
      name: homeTitle,
      description: homeDescription,
    }),
    buildFaqPageSchema({
      id: `${SITE_ORIGIN}/#faq`,
      questions: [
        {
          question: "Does Johnson's Academy offer a free demo class?",
          answer:
            "Yes. You can book a free demo class to experience our teaching style, facilities, and course structure before enrolling.",
        },
        {
          question: "What courses are available at Johnson's Academy in Bangalore?",
          answer:
            "We offer music (including guitar, keyboard, drums, and violin), dance, art, and karate programmes with structured learning paths for kids and adults.",
        },
        {
          question: "Where are Johnson's Academy branches located in Bengaluru?",
          answer:
            "We operate from multiple locations in Bengaluru, including Arekere and Hulimavu. Visit our branches page or contact us for directions and batch timings.",
        },
      ],
    }),
  );

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLdScript id="jsonld-home-webpage-faq" schema={homeSchema} />
      <div className="relative">
        <Hero />
        <Header transparent />
      </div>
      <main className="flex flex-1 flex-col">
        <CoursesSection />
        <WhyChooseUs />
        <BranchesSection />
        <TestimonialsSection />
        <QuoteSection />
        <VideoSection />
        <GallerySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
