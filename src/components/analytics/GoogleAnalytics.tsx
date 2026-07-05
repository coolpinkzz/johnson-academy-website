import Script from "next/script";
import { Suspense } from "react";

import { GoogleAnalyticsPageViews } from "./GoogleAnalyticsPageViews";

type Props = {
  gaId?: string;
  googleAdsId?: string;
};

export function GoogleAnalytics({ gaId, googleAdsId }: Props) {
  const loaderId = gaId ?? googleAdsId;
  if (!loaderId) return null;

  const configLines = [
    gaId ? `gtag('config','${gaId}',{send_page_view:false});` : "",
    googleAdsId ? `gtag('config','${googleAdsId}');` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${loaderId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());
${configLines}
`}
      </Script>
      {gaId ? (
        <Suspense fallback={null}>
          <GoogleAnalyticsPageViews gaId={gaId} />
        </Suspense>
      ) : null}
    </>
  );
}
