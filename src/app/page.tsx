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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Music & Dance Academy in Bangalore",
  description:
    "Join Johnson's Academy for expert-led music, dance, art, and karate classes in Bangalore. Flexible batches for kids and adults. Book a free demo class today.",
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
  return (
    <div className="flex min-h-screen flex-col">
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
