import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhargavi & Sukruth - Engagement Ceremony",
  description: "Join us for the engagement ceremony of Bhargavi and Sukruth on 27 August 2026 in Bengaluru.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
