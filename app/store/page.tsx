import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Project Store & Digital Library | Cabdi Naafac",
  description: "Official Digital Marketplace & Code Library by Cabdi Naafac. Browse live previews, free open-source codebases, and commercial full-stack templates.",
};

export default function StorePage() {
  return (
    <div style={{ minHeight: "100vh", paddingTop: "5rem" }}>
      <Projects />
    </div>
  );
}
