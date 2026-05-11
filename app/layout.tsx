import type { Metadata, Viewport } from "next";
import { Archivo, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
});

const siteUrl = "https://bogan.co.nz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "bogan.co.nz — Premium NZ Domain for Acquisition",
    template: "%s — bogan.co.nz",
  },
  description:
    "bogan.co.nz is a rare one-word NZ domain with commercial potential across apparel, automotive culture, media, events, merch, and campaign-led brands.",
  applicationName: "bogan.co.nz",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "bogan.co.nz — Premium NZ Domain for Acquisition",
    description:
      "A rare one-word .co.nz domain with commercial potential across apparel, automotive culture, media, events, merch, and campaign-led brands.",
    url: siteUrl,
    siteName: "bogan.co.nz",
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "bogan.co.nz — Premium NZ Domain for Acquisition",
    description:
      "A rare one-word .co.nz domain with commercial potential across apparel, automotive culture, media, events, merch, and campaign-led brands.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E0E0C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ">
      <body
        className={`${inter.variable} ${archivo.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}