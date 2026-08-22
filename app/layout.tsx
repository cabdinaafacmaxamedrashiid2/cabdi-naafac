import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export const metadata: Metadata = {
  title: "Cabdi Naafac | Full Stack Developer - Mogadishu, Somalia",
  description:
    "Cabdi Naafac waa Full Stack Developer ka yimid Mogadishu, Somalia. Wuxuu dhisaa web iyo mobile applications casri ah isticmaalaya React, Next.js, Node.js. | Cabdi Naafac is a professional Full Stack Developer from Mogadishu, Somalia specializing in React, Next.js, Node.js, and mobile app development.",
  keywords: [
    "Cabdi Naafac",
    "Cabdi Nafaac",
    "cabdinaafac",
    "Full Stack Developer Somalia",
    "Web Developer Mogadishu",
    "Somalia Developer",
    "React Developer Somalia",
    "Next.js Developer",
    "Node.js Developer",
    "Mobile App Developer Somalia",
    "Jazera University",
    "Portfolio Somalia",
    "Software Engineer Somalia",
    "Cabdi Naafac Full Stack Developer",
    "Somali Developer",
  ],
  authors: [{ name: "Cabdi Naafac", url: "https://cabdinaafac.netlify.app" }],
  creator: "Cabdi Naafac",
  publisher: "Cabdi Naafac",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Cabdi Naafac | Full Stack Developer - Somalia",
    description:
      "Professional Full Stack Developer from Mogadishu, Somalia. Building modern web & mobile apps with React, Next.js, Node.js.",
    type: "website",
    url: "https://cabdinaafac.netlify.app",
    siteName: "Cabdi Naafac Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabdi Naafac | Full Stack Developer",
    description: "Full Stack Developer from Mogadishu, Somalia",
  },
  alternates: {
    canonical: "https://cabdinaafac.netlify.app",
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
        <WhatsAppWidget />
      </body>
    </html>
  );
}
