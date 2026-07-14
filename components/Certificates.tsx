"use client";
import { useEffect, useRef, useState } from "react";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "2023",
    icon: "🏆",
    color: "#f59e0b",
    desc: "Comprehensive full-stack development course covering React, Node.js, Express, and MongoDB.",
    credentialUrl: "#",
  },
  {
    title: "React Native – Mobile Development",
    issuer: "Meta (Coursera)",
    date: "2024",
    icon: "📱",
    color: "#3b82f6",
    desc: "Official Meta certification in cross-platform mobile development with React Native.",
    credentialUrl: "#",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "2023",
    icon: "⚡",
    color: "#22c55e",
    desc: "Mastery of core computer science concepts, algorithms, and data structures in JavaScript.",
    credentialUrl: "#",
  },
  {
    title: "Python for Data Science & AI",
    issuer: "IBM (Coursera)",
    date: "2024",
    icon: "🤖",
    color: "#8b5cf6",
    desc: "Applied Python programming for data analysis, machine learning, and AI applications.",
    credentialUrl: "#",
  },
];

export default function Certificates() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="certificates"
      style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #0a1628, #020817)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="glow-orb"
        style={{
          width: 500,
          height: 500,
          background: "rgba(245,158,11,0.06)",
          top: "50%",
          right: "-100px",
          transform: "translateY(-50%)",
        }}
      />

      <div
        ref={ref}
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        <p
          style={{
            textAlign: "center",
            color: "#3b82f6",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontSize: "0.85rem",
            marginBottom: "0.75rem",
          }}
        >
          Achievements
        </p>
        <h2 className="section-title">
          My <span className="gradient-text">Certificates</span>
        </h2>
        <p className="section-subtitle">
          Verified credentials from globally recognized platforms
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem",
          }}
          className="certs-grid"
        >
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                padding: "1.75rem",
                borderRadius: "18px",
                transition: "all 0.4s ease",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
                transitionDelay: `${i * 0.1}s`,
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-8px) scale(1.02)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px ${cert.color}25`;
                (e.currentTarget as HTMLElement).style.borderColor = `${cert.color}40`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.15)";
              }}
            >
              {/* Corner decoration */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 80,
                  height: 80,
                  background: `${cert.color}10`,
                  borderRadius: "0 18px 0 80px",
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "14px",
                    background: `${cert.color}15`,
                    border: `1px solid ${cert.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.6rem",
                    flexShrink: 0,
                  }}
                >
                  {cert.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#e2e8f0", lineHeight: 1.3 }}>
                    {cert.title}
                  </h3>
                  <div style={{ color: cert.color, fontSize: "0.82rem", fontWeight: 600, marginTop: "0.25rem" }}>
                    {cert.issuer}
                  </div>
                </div>
              </div>

              <p style={{ color: "#94a3b8", fontSize: "0.83rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                {cert.desc}
              </p>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Award size={14} color={cert.color} />
                  <span style={{ color: "#64748b", fontSize: "0.8rem" }}>{cert.date}</span>
                </div>
                <a
                  href={cert.credentialUrl}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    color: cert.color,
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                >
                  View Credential
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .certs-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .certs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
