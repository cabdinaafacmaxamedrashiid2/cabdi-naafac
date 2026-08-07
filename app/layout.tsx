import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Cabdi Nafaac | Full Stack Developer - Somalia",
  description:
    "Cabdi Nafaac is a Full Stack Developer from Mogadishu, Somalia, specializing in modern web and mobile application development with React, Node.js, and cutting-edge technologies.",
  keywords: [
    "Cabdi Nafaac",
    "Full Stack Developer",
    "Somalia",
    "Mogadishu",
    "Web Developer",
    "React",
    "Node.js",
    "Mobile App Developer",
  ],
  authors: [{ name: "Cabdi Nafaac" }],
  openGraph: {
    title: "Cabdi Nafaac | Full Stack Developer",
    description:
      "Building Modern Web & Mobile Applications from Mogadishu, Somalia",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HQ9843QNVD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HQ9843QNVD');
          `}
        </Script>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
