import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CoursesSection from "@/components/CoursesSection";
import BranchesSection from "@/components/BranchesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import AppShowcaseSection from "@/components/app-showcase/AppShowcaseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuoteSection from "@/components/QuoteSection";
import VideoSection from "@/components/VideoSection";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

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
        <AppShowcaseSection />
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
