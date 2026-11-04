import type { Metadata, Viewport } from "next";
import { DM_Sans, Noto_Sans_Tamil, Space_Grotesk } from "next/font/google";
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

const notoTamil = Noto_Sans_Tamil({
  variable: "--font-noto-tamil",
  subsets: ["tamil"],
  weight: ["400", "500"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "jottitstudio — We make brands matter",
    template: "%s — jottitstudio",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "creative agency",
    "branding agency",
    "brand identity",
    "social media marketing",
    "content creation",
    "performance marketing",
    "video production",
    "photography",
    "website development",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "jottitstudio — We make brands matter",
    description: site.description,
    images: [{ url: "/images/art/hero-artwork.jpg", width: 896, height: 1200, alt: "Abstract jottitstudio artwork" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "jottitstudio — We make brands matter",
    description: site.description,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F5EBDD",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} ${notoTamil.variable}`}>
      <body className="flex min-h-svh flex-col bg-ivory text-ink">
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
