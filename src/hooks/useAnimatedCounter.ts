"use client";

import { useEffect, useRef, useState } from "react";

export function useAnimatedCounter(
  end: number,
  suffix = "",
  duration = 2000,
  startOnMount = true
) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!startOnMount || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const isDecimal = end % 1 !== 0;

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = eased * end;
      setCount(isDecimal ? Math.round(value * 10) / 10 : Math.round(value));

      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, [end, duration, startOnMount]);

  return `${count}${suffix}`;
}
