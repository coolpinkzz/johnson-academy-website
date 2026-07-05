import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { JsonLdScript, mergeSchemas } from "@/lib/seo/jsonLd";
import {
  buildFounderPersonSchema,
  buildOrganizationSchema,
  buildWebSiteSchema,
} from "@/lib/seo/schema";
import { SITE_DESCRIPTION, SITE_NAME, SITE_ORIGIN } from "@/lib/seo/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default:
      "Johnson's Academy | Music, Dance and Art Classes in Bangalore",
    template: "%s | Johnson's Academy",
  },
  description:
    "Learn Guitar, Keyboard, Drums, Violin, Dance and Art at Johnson Academy. Book your free demo class today.",
};

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {gaMeasurementId || googleAdsId ? (
          <GoogleAnalytics
            gaId={gaMeasurementId}
            googleAdsId={googleAdsId}
          />
        ) : null}
        <JsonLdScript
          id="jsonld-organization-website"
          schema={mergeSchemas(
            buildOrganizationSchema(),
            buildWebSiteSchema({
              name: SITE_NAME,
              description: SITE_DESCRIPTION,
            }),
            buildFounderPersonSchema(),
          )}
        />
        {children}
      </body>
    </html>
  );
}
