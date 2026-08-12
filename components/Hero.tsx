"use client";
import { useEffect, useState } from "react";
import SocialLinks from "./SocialLinks";

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
        position: "relative",
        background: "#0a0f1e",
        overflow: "hidden",
        padding: "0",
      }}
    >
      {/* Bottom-left cyan glow */}
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,255,0.25) 0%, rgba(0,150,200,0.1) 40%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Bottom-right cyan glow */}
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "-100px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,255,0.2) 0%, rgba(0,100,180,0.08) 50%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Top right subtle glow */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          right: "30%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,180,255,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Main Content */}
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          padding: "100px 3rem 60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
          position: "relative",
          zIndex: 1,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 1s ease",
        }}
        className="hero-main"
      >
        {/* LEFT: Text Content */}
        <div
          style={{
            flex: "1",
            maxWidth: "540px",
          }}
        >
          <p
            style={{
              color: "#00d4ff",
              fontSize: "1.1rem",
              fontWeight: 500,
              marginBottom: "0.5rem",
              letterSpacing: "0.05em",
            }}
          >
            Hello, I'm
          </p>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "0.4rem",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Cabdi Naafac
          </h1>
          <h2
            style={{
              fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
              fontWeight: 700,
              color: "#00d4ff",
              marginBottom: "1.5rem",
            }}
          >
            Full Stack Developer
          </h2>
          <p
            style={{
              color: "#8899aa",
              fontSize: "1rem",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
              maxWidth: "480px",
            }}
          >
            I build modern, fast, and beautiful web &amp; mobile applications. 
            Passionate about clean code and great user experiences — 
            let's build something amazing together.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "1rem", marginBottom: "3rem", flexWrap: "wrap" }}>
            <a
              href="#contact"
              style={{
                padding: "14px 32px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #00b4d8, #0077b6)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 20px rgba(0,180,216,0.4)",
                letterSpacing: "0.03em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,180,216,0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,180,216,0.4)";
              }}
            >
              Hire Me
            </a>
            <a
              href="/cv.pdf"
              download="Cabdi_Naafac_CV.pdf"
              style={{
                padding: "14px 32px",
                borderRadius: "8px",
                background: "transparent",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.25)",
                transition: "all 0.3s ease",
                letterSpacing: "0.03em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#00d4ff";
                e.currentTarget.style.color = "#00d4ff";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <SocialLinks />
        </div>

        {/* RIGHT: Profile Image — large, edge-to-edge feel */}
        <div
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            position: "relative",
            maxWidth: "520px",
          }}
          className="hero-image-col"
        >
          {/* Glow behind image */}
          <div
            style={{
              position: "absolute",
              bottom: "-60px",
              right: "-40px",
              width: "420px",
              height: "420px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,212,255,0.18) 0%, transparent 65%)",
              pointerEvents: "none",
            }}
          />
          <img
            src="/profile.jpg"
            alt="Cabdi Naafac"
            style={{
              width: "100%",
              maxWidth: "460px",
              height: "auto",
              objectFit: "cover",
              objectPosition: "top",
              borderRadius: "16px",
              position: "relative",
              zIndex: 1,
              maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
              filter: "brightness(0.9) contrast(1.05)",
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-main {
            flex-direction: column !important;
            padding: 120px 1.5rem 60px !important;
            text-align: center;
          }
          .hero-image-col {
            justify-content: center !important;
            max-width: 300px !important;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
