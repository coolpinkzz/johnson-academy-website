import type { HeroImageSlide } from "@/data/hero-slides";

export const heroSlideTitleClassName =
  "max-w-[18ch] text-[clamp(2rem,4.6vw,4.75rem)] font-bold leading-[1.08] tracking-tight text-white";

type StandardHeroSlideProps = {
  slide: HeroImageSlide;
  isFirst: boolean;
  isActive: boolean;
};

export default function StandardHeroSlide({
  slide,
  isFirst,
  isActive,
}: StandardHeroSlideProps) {
  const TitleTag = isFirst ? "h1" : "h2";

  return (
    <>
      <TitleTag
        id={isFirst ? "hero-heading" : undefined}
        className={heroSlideTitleClassName}
        tabIndex={isActive ? undefined : -1}
      >
        {slide.lineBefore}
        <span className="bg-linear-to-r from-primary to-orange-400 bg-clip-text text-transparent">
          {slide.highlight}
        </span>
        {slide.lineAfter}
      </TitleTag>
      <p className="mt-4 mb-8 max-w-[62ch] text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed text-white/80 sm:mt-6 sm:mb-10">
        {slide.description}
      </p>
    </>
  );
}
