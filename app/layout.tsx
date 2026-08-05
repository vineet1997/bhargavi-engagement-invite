import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bhargavi-engagement-invite.vercel.app"),
  title: "Bhargavi & Sukruth — Engagement Ceremony",
  description: "Join us for the engagement ceremony of Bhargavi and Sukruth on Thursday, 27 August 2026 in Bengaluru.",
  applicationName: "Bhargavi & Sukruth — Engagement Ceremony",
  keywords: ["Bhargavi", "Sukruth", "engagement ceremony", "Bengaluru"],
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "128x128" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Bhargavi & Sukruth — Engagement Ceremony",
    title: "Bhargavi & Sukruth — Engagement Ceremony",
    description: "27 August 2026 · Bengaluru",
    images: [{ url: "/og.jpg", width: 1735, height: 910, alt: "Bhargavi and Sukruth engagement ceremony invitation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhargavi & Sukruth — Engagement Ceremony",
    description: "27 August 2026 · Bengaluru",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
