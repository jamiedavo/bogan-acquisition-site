import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "bogan.co.nz — Acquisition Website",
  description:
    "Local project scaffold for the bogan.co.nz acquisition website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ">
      <body>{children}</body>
    </html>
  );
}