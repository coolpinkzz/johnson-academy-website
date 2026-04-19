import type { ReactNode } from "react";

type SlideItemProps = {
  isActive: boolean;
  transitionClass: string;
  children: ReactNode;
  className?: string;
};

export default function SlideItem({
  isActive,
  transitionClass,
  children,
  className = "",
}: SlideItemProps) {
  return (
    <div
      className={`flex w-full flex-col justify-start transition-opacity ${transitionClass} ${
        isActive
          ? "z-10 opacity-100"
          : "pointer-events-none z-0 opacity-0"
      } ${className}`.trim()}
      aria-hidden={!isActive}
    >
      {children}
    </div>
  );
}
