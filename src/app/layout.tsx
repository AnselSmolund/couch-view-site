import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Couch View Cycling Clips",
  description: "Cycling, as seen on TV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={` antialiased font-vcr`}>
        {children}
      </body>
    </html>
  );
}
