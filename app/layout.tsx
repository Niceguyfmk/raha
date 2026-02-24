import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raha Partners | B2C Services",
  description: "Bespoke B2C solutions for modern businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
