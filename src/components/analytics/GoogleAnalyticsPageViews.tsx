"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, string | boolean>,
    ) => void;
  }
}

type Props = {
  gaId: string;
};

export function GoogleAnalyticsPageViews({ gaId }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!window.gtag) return;
    const query = searchParams.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;
    window.gtag("config", gaId, { page_path: pagePath });
  }, [pathname, searchParams, gaId]);

  return null;
}
