import type { Metadata, Viewport } from "next";
import { Caveat, DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { site } from "@/content/site";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "JOTTIT — Every Big Idea Starts With a Little Jot",
    template: "%s — JOTTIT",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "JOTTIT",
    "creative studio",
    "branding agency",
    "brand identity",
    "social media content",
    "performance marketing",
    "video production",
    "photography",
    "website development",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "JOTTIT — Think It. Jot It. Make It Matter.",
    description: site.description,
    images: [{ url: "/images/jottit-logo-ref.jpg", width: 1024, height: 864, alt: "JOTTIT — Think It. Jot It. Make It Matter." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JOTTIT — Think It. Jot It. Make It Matter.",
    description: site.description,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#5F2DB2",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} ${caveat.variable}`}>
      <body className="flex min-h-svh flex-col bg-paper text-ink">
        <MotionProvider>
          <SmoothScroll />
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
