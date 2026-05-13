import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rumah Ready",
  description: "Company profile penjualan rumah modern",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}