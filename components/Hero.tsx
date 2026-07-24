"use client";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";

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
        background: "linear-gradient(135deg, #020817 0%, #0a1628 50%, #020817 100%)",
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
          <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
            <a
              href="#"
              style={{
                padding: "12px 24px",
                borderRadius: "30px",
                border: "2px solid #3b82f6",
                color: "#f8fafc",
                fontWeight: 600,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(59, 130, 246, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              Download CV
            </a>
            <a
              href="#contact"
              style={{
                padding: "12px 24px",
                borderRadius: "30px",
                background: "#f8fafc",
                border: "2px solid #f8fafc",
                color: "#0f172a", // Dark text
                fontWeight: 600,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#e2e8f0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#f8fafc";
              }}
            >
              Contact Info
            </a>
          </div>

          {/* Social Icons */}
          <div style={{ display: "flex", gap: "1.2rem" }}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#f8fafc",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#3b82f6")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#f8fafc")}
            >
              <LinkedinIcon size={28} />
            </a>
            <a
              href="https://github.com/cabdinaafacmaxamedrashiid2"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#f8fafc",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#3b82f6")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#f8fafc")}
            >
              <GithubIcon size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
