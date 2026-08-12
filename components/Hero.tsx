"use client";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import SocialLinks from "./SocialLinks";

const GithubIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f0028 0%, #1a0540 50%, #0f0028 100%)",
        padding: "100px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "4rem",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 1s ease",
        }}
        className="hero-container"
      >
        {/* Left: Circular Image */}
        <div style={{ flex: "1", display: "flex", justifyContent: "flex-end" }}>
          <div
            style={{
              width: "350px",
              height: "350px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid rgba(59, 130, 246, 0.1)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
            }}
            className="hero-image-wrapper"
          >
            <img
              src="/profile.jpg"
              alt="Cabdi Naafac"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Center text like the screenshot
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#94a3b8",
              fontSize: "1.1rem",
              fontWeight: 600,
              marginBottom: "0.2rem",
            }}
          >
            Hello, I'm
          </p>
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: 800,
              color: "#f8fafc",
              marginBottom: "0.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Cabdi Naafac
          </h1>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#64748b", // Muted color for subtitle
              marginBottom: "2rem",
            }}
          >
            Full Stack Developer
          </h2>

          {/* Buttons Row */}
          <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2.5rem" }}>
            <a
              href="/cv.pdf"
              download="Cabdi_Naafac_CV.pdf"
              style={{
                position: "relative",
                padding: "16px 36px",
                fontSize: "1rem",
                fontWeight: 700,
                color: "#ffffff",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "2px",
                border: "2px solid #00f7ff",
                borderRadius: "50px",
                overflow: "hidden",
                transition: "all 0.4s ease",
                boxShadow: "0 0 15px rgba(0, 247, 255, 0.2)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#00f7ff";
                e.currentTarget.style.color = "#0f0028";
                e.currentTarget.style.boxShadow = "0 0 25px rgba(0, 247, 255, 0.6), 0 0 50px rgba(0, 247, 255, 0.4)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.boxShadow = "0 0 15px rgba(0, 247, 255, 0.2)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Download CV
            </a>
            <a
              href="#contact"
              style={{
                position: "relative",
                padding: "16px 36px",
                fontSize: "1rem",
                fontWeight: 700,
                color: "#ffffff",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "2px",
                border: "2px solid #f59e0b",
                borderRadius: "50px",
                overflow: "hidden",
                transition: "all 0.4s ease",
                boxShadow: "0 0 15px rgba(245, 158, 11, 0.2)",
                display: "flex",
                alignItems: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f59e0b";
                e.currentTarget.style.color = "#0f0028";
                e.currentTarget.style.boxShadow = "0 0 25px rgba(245, 158, 11, 0.6), 0 0 50px rgba(245, 158, 11, 0.4)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.boxShadow = "0 0 15px rgba(245, 158, 11, 0.2)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Contact Info
            </a>
          </div>

          {/* Social Icons */}
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
