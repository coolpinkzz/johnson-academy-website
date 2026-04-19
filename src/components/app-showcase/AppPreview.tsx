import Image from "next/image";
import type { AppShowcaseScreenshot } from "@/data/app-showcase";

type AppPreviewProps = {
  screenshots: AppShowcaseScreenshot[];
  className?: string;
};

export default function AppPreview({ screenshots, className = "" }: AppPreviewProps) {
  return (
    <div
      className={`app-showcase-animate flex justify-center lg:justify-end ${className}`.trim()}
    >
      <figure
        className="relative w-full max-w-[280px] sm:max-w-[320px]"
        aria-label="Johnson Academy mobile app preview"
      >
        {/* Phone frame */}
        <div className="relative aspect-[9/19] rounded-[2.5rem] border-[10px] border-zinc-800 bg-zinc-950 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.06)_inset]">
          <div
            className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-zinc-900"
            aria-hidden
          />
          <div className="absolute inset-2 overflow-hidden rounded-[1.75rem] bg-black">
            <div
              className="flex h-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              tabIndex={0}
              role="region"
              aria-roledescription="carousel"
              aria-label="App screenshots"
            >
              {screenshots.map((shot) => (
                <div
                  key={shot.src}
                  className="relative h-full w-full shrink-0 snap-center snap-always"
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 640px) 72vw, 320px"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <figcaption className="mt-4 text-center text-xs text-white/50 sm:text-sm">
          Swipe or scroll horizontally to browse preview screens
        </figcaption>
      </figure>
    </div>
  );
}
