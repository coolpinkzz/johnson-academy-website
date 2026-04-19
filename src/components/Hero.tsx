import { heroSlides } from "@/data/hero-slides";
import HeroSlider from "@/components/hero/HeroSlider";

export default function Hero() {
  return <HeroSlider slides={heroSlides} />;
}
