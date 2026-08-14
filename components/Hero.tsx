"use client";
import { useEffect, useState } from "react";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState("");
  const fullText = "cabdi-naafac --portfolio";

  useEffect(() => {
    setIsVisible(true);
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background: "radial-gradient(ellipse at 60% 50%, #2d1b4e 0%, #1a0f2e 30%, #0d0d1a 60%, #0a0a14 100%)",
        overflow: "hidden",
        padding: "0",
      }}
    >
      {/* Background gradient orbs */}
      <div style={{
        position: "absolute", top: "10%", left: "5%",
        width: "600px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "0%", right: "0%",
        width: "700px", height: "700px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, rgba(180,83,9,0.06) 50%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "40%", right: "15%",
        width: "300px", height: "300px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Subtle grid overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none",
      }} />

      {/* Main Content */}
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          margin: "0 auto",
          padding: "120px 2rem 80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
          transition: "all 1.2s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.25)",
          borderRadius: "100px", padding: "6px 16px", marginBottom: "2rem",
          fontSize: "0.82rem", color: "#a78bfa", fontWeight: 500, letterSpacing: "0.08em",
        }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6366f1", display: "inline-block", boxShadow: "0 0 8px #6366f1" }} />
          Available for work
        </div>

        {/* Main Heading */}
        <h1
          style={{
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: "0.3rem",
          }}
        >
          <span style={{
            background: "linear-gradient(135deg, #818cf8 0%, #a78bfa 40%, #c084fc 70%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Cabdi
          </span>
          {" "}
          <span style={{
            background: "linear-gradient(135deg, #c084fc 0%, #f59e0b 60%, #fb923c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Naafac
          </span>
        </h1>

        {/* Subtitle */}
        <h2
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.8rem)",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: "1.5rem",
            letterSpacing: "-0.02em",
          }}
        >
          Full Stack Developer
        </h2>

        {/* Description */}
        <p
          style={{
            color: "#94a3b8",
            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
            lineHeight: 1.8,
            maxWidth: "620px",
            marginBottom: "2.5rem",
          }}
        >
          Building modern, fast, and beautiful web &amp; mobile applications.
          Passionate about clean code, great design, and exceptional user experiences.
        </p>

        {/* Terminal command */}
        <div
          style={{
            background: "rgba(0,0,0,0.5)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "12px",
            padding: "14px 24px",
            fontFamily: "'Courier New', monospace",
            fontSize: "0.95rem",
            color: "#e2e8f0",
            marginBottom: "2.5rem",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            backdropFilter: "blur(10px)",
            minWidth: "340px",
            justifyContent: "flex-start",
          }}
        >
          <span style={{ color: "#6366f1", fontWeight: 700 }}>$</span>
          <span>{text}</span>
          <span style={{
            display: "inline-block", width: "2px", height: "18px",
            background: "#6366f1", marginLeft: "2px",
            animation: "blink 1s step-end infinite",
          }} />
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "1rem", marginBottom: "3rem", flexWrap: "wrap", justifyContent: "center" }}>
          <a
            href="#contact"
            style={{
              padding: "14px 32px", borderRadius: "10px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff", fontWeight: 700, fontSize: "0.95rem",
              textDecoration: "none", transition: "all 0.3s ease",
              boxShadow: "0 4px 24px rgba(99,102,241,0.35)",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(99,102,241,0.55)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(99,102,241,0.35)";
            }}
          >
            Hire Me
          </a>
          <a
            href="/cv.pdf"
            download="Cabdi_Naafac_CV.pdf"
            style={{
              padding: "14px 32px", borderRadius: "10px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#e2e8f0", fontWeight: 700, fontSize: "0.95rem",
              textDecoration: "none", transition: "all 0.3s ease",
              backdropFilter: "blur(10px)",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)";
              e.currentTarget.style.background = "rgba(99,102,241,0.1)";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Download CV
          </a>
        </div>

        {/* Social Links */}
        <SocialLinks />

        {/* Stats row */}
        <div style={{
          display: "flex", gap: "3rem", marginTop: "3rem",
          borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "2rem",
          flexWrap: "wrap", justifyContent: "center",
        }}>
          {[
            { num: "3+", label: "Years Experience" },
            { num: "10+", label: "Projects Done" },
            { num: "100%", label: "Client Satisfaction" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{
                fontSize: "2rem", fontWeight: 800, color: "#ffffff",
                background: "linear-gradient(135deg, #818cf8, #a78bfa)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>{s.num}</div>
              <div style={{ fontSize: "0.82rem", color: "#64748b", fontWeight: 500, marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (max-width: 640px) {
          section#home div[style*="min-width: 340px"] {
            min-width: unset !important;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
