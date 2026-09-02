import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Portal | Cabdi Naafac Portfolio",
  description: "Admin Dashboard - Portfolio CMS Control Center",
  robots: {
    index: false,
    follow: false,
  },
};

// Admin layout deliberately excludes the portfolio Navbar, Footer,
// ScrollToTop and WhatsAppWidget so they do NOT overlap the dashboard UI.
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
