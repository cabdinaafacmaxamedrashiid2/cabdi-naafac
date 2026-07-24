"use client";
import { useEffect, useState } from "react";
import { Github, Linkedin, Download } from "lucide-react";

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
              <Linkedin size={28} />
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
              <Github size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
