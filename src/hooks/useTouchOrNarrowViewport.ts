"use client";

import { useEffect, useState } from "react";

/**
 * True when store links should be active: touch-capable devices (phones, tablets,
 * iPad including wide landscape) or narrow viewports (small windows). False for
 * typical mouse-driven desktop/laptop at comfortable widths.
 */
export function useTouchOrNarrowViewport(narrowMaxPx = 1024): boolean {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const update = () => {
      const touch =
        typeof navigator !== "undefined" && navigator.maxTouchPoints > 0;
      const narrow = window.innerWidth < narrowMaxPx;
      setActive(touch || narrow);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [narrowMaxPx]);

  return active;
}
