import Script from "next/script";
import { Suspense } from "react";

import { GoogleAnalyticsPageViews } from "./GoogleAnalyticsPageViews";

type Props = {
  gaId: string;
};

export function GoogleAnalytics({ gaId }: Props) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());
gtag('config','${gaId}',{send_page_view:false});
`}
      </Script>
      <Suspense fallback={null}>
        <GoogleAnalyticsPageViews gaId={gaId} />
      </Suspense>
    </>
  );
}
