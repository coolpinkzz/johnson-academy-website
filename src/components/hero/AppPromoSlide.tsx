"use client";

import Image from "next/image";
import Link from "next/link";
import { Apple, Smartphone } from "lucide-react";
import type { HeroAppPromoSlide as HeroAppPromoSlideData } from "@/data/hero-slides";
import { useTouchOrNarrowViewport } from "@/hooks/useTouchOrNarrowViewport";
import { heroSlideTitleClassName } from "./StandardHeroSlide";

type AppPromoSlideProps = {
  content: HeroAppPromoSlideData;
  headingId?: string;
  HeadingTag?: "h1" | "h2";
};

const storeBtnClass =
  "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold shadow-lg transition-all sm:min-h-[52px]";
const appStoreInteractiveClass =
  `${storeBtnClass} bg-white text-black shadow-black/30 hover:scale-[1.02] hover:bg-white/90 active:scale-[0.98]`;
const appStoreStaticClass = `${storeBtnClass} bg-white text-black shadow-black/30`;
const playStoreInteractiveClass =
  `${storeBtnClass} border-2 border-primary bg-primary/15 text-white shadow-primary/20 hover:bg-primary/25 hover:scale-[1.02] active:scale-[0.98]`;
const playStoreStaticClass = `${storeBtnClass} border-2 border-primary bg-primary/15 text-white shadow-primary/20`;

export default function AppPromoSlide({
  content,
  headingId,
  HeadingTag = "h2",
}: AppPromoSlideProps) {
  const storeLinksActive = useTouchOrNarrowViewport();

  return (
    <article
      className="relative w-full"
      aria-label={`${content.brandName} mobile app promotion`}
    >
      <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="order-1 flex min-w-0 flex-col lg:order-none">
          <HeadingTag
            id={headingId}
            className={heroSlideTitleClassName}
          >
            <span className="block">{content.headingLine1}</span>
            <span className="mt-1 block sm:mt-2">
              {content.headingLine2Before}
              <span className="bg-linear-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                {content.headingAccent}
              </span>
              {content.headingLine2After}
            </span>
          </HeadingTag>

          <p className="mt-4 max-w-[62ch] text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed text-white/80 sm:mt-6">
            {content.supportingText}
          </p>

          <div className="mt-8 flex w-full max-w-[42rem] flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-6">
            {storeLinksActive ? (
              <Link
                href={content.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={appStoreInteractiveClass}
                aria-label={content.appStoreAriaLabel}
              >
                <Apple className="h-5 w-5 shrink-0" strokeWidth={2} aria-hidden />
                {content.appStoreLabel}
              </Link>
            ) : (
              <span
                className={`${appStoreStaticClass} cursor-default select-none`}
                aria-disabled="true"
                title="Open this page on a phone or tablet to download the app"
                aria-label={`${content.appStoreLabel}. Use a phone or tablet to open the link.`}
              >
                <Apple className="h-5 w-5 shrink-0" strokeWidth={2} aria-hidden />
                {content.appStoreLabel}
              </span>
            )}
            {storeLinksActive ? (
              <Link
                href={content.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={playStoreInteractiveClass}
                aria-label={content.playStoreAriaLabel}
              >
                <Smartphone
                  className="h-5 w-5 shrink-0"
                  strokeWidth={2}
                  aria-hidden
                />
                {content.playStoreLabel}
              </Link>
            ) : (
              <span
                className={`${playStoreStaticClass} cursor-default select-none`}
                aria-disabled="true"
                title="Open this page on a phone or tablet to download the app"
                aria-label={`${content.playStoreLabel}. Use a phone or tablet to open the link.`}
              >
                <Smartphone
                  className="h-5 w-5 shrink-0"
                  strokeWidth={2}
                  aria-hidden
                />
                {content.playStoreLabel}
              </span>
            )}
          </div>
        </div>

        <div className="order-2 flex min-h-[270px] min-w-0 items-center justify-center overflow-hidden sm:min-h-[300px] lg:min-h-[280px] lg:justify-end">
          <div className="relative flex w-full max-w-[32rem] items-center justify-center gap-2 sm:gap-4 lg:max-w-[34rem]">
            {content.mockups.map((mock, index) => (
              <figure
                key={`${mock.src}-${index}`}
                className="relative shrink-0"
                style={{
                  transform: `rotate(${mock.rotate ?? (index === 0 ? "-6deg" : "8deg")})`,
                  zIndex: content.mockups.length - index,
                }}
              >
                <div className="relative w-[168px] overflow-hidden rounded-[2rem] bg-zinc-950 shadow-[0_28px_50px_-12px_rgba(0,0,0,0.75)] sm:w-[172px] lg:w-[188px]">
                  <div className="absolute left-1/2 top-2.5 z-10 h-3.5 w-16 -translate-x-1/2 rounded-full bg-black/90" />
                  <div className="aspect-[9/18] w-full overflow-hidden rounded-[1.35rem] bg-zinc-900">
                    <Image
                      src={mock.src}
                      alt={mock.alt}
                      width={mock.width}
                      height={mock.height}
                      className="h-full w-full object-cover"
                      sizes="(max-width: 640px) 190px, 220px"
                      loading="lazy"
                    />
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
