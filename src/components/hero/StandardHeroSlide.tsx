import type { HeroImageSlide } from "@/data/hero-slides";

export const heroSlideTitleClassName =
  "text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl";

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
      <p className="mt-4 max-w-xl text-base text-white/80 sm:mt-6 sm:text-lg lg:text-xl">
        {slide.description}
      </p>
    </>
  );
}
