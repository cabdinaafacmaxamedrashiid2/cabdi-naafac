"use client";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #020817 0%, #0a1628 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow Orb */}
      <div
        className="glow-orb"
        style={{
          width: 400,
          height: 400,
          background: "rgba(59, 130, 246, 0.08)",
          top: "50%",
          right: "-100px",
          transform: "translateY(-50%)",
        }}
      />

      <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 2.5rem" }}>
        {/* Title */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.7s ease",
          }}
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
            Get to Know Me
          </p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: "3rem" }}>
            My background, expertise, and journey
          </p>
        </div>

        {/* Content Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "3.5rem",
            alignItems: "center",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.7s ease 0.2s",
          }}
          className="about-grid"
        >
          {/* Left - Profile Image Visual */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div
              style={{
                position: "relative",
                width: "280px",
                height: "340px",
                borderRadius: "24px",
                border: "1px solid rgba(59, 130, 246, 0.25)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                overflow: "hidden",
                cursor: "pointer",
              }}
              className="glass-card animate-float"
              onClick={() => setShowInfoModal(true)}
            >
              {/* Profile Image */}
              <img
                src="/profile.jpg"
                alt="Cabdi Nafaac"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />

              {/* Text overlay on card hover */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(to top, rgba(2,8,23,0.9), transparent)",
                  padding: "1.5rem 1rem 1rem",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div style={{ color: "#f8fafc", fontWeight: 700, fontSize: "1.05rem" }}>Cabdi Nafaac</div>
                <div style={{ color: "#60a5fa", fontWeight: 500, fontSize: "0.8rem", marginTop: "0.25rem" }}>Full Stack Developer</div>
              </div>
            </div>
          </div>

          {/* Right - Text Biography */}
          <div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                marginBottom: "0.5rem",
                color: "#e2e8f0",
                lineHeight: 1.3,
              }}
            >
              About <span className="gradient-text">Me</span>
            </h3>
            <h4
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                marginBottom: "1.25rem",
                color: "#60a5fa",
              }}
            >
              Cabdi Nafaac — Full Stack Developer
            </h4>
            <p
              style={{
                color: "#94a3b8",
                lineHeight: 1.75,
                marginBottom: "1.25rem",
                fontSize: "0.95rem",
              }}
            >
              I am a Full Stack Developer from Mogadishu, Somalia, passionate
              about building modern web and mobile applications. I enjoy
              creating clean, user-friendly, and high-performance software
              using technologies like React, React Native, Node.js, and
              TypeScript.
            </p>
            <p
              style={{
                color: "#94a3b8",
                lineHeight: 1.75,
                fontSize: "0.95rem",
              }}
            >
              I focus on writing quality code, developing secure APIs, and
              building reliable database systems. I am always learning new
              technologies and improving my skills to deliver efficient and
              scalable solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Info Modal */}
      {showInfoModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            background: "rgba(2, 8, 23, 0.85)",
            backdropFilter: "blur(8px)",
            animation: "fadeIn 0.3s ease-out forwards",
          }}
          onClick={() => setShowInfoModal(false)}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #0a1628 0%, #030a17 100%)",
              border: "1px solid rgba(59, 130, 246, 0.25)",
              borderRadius: "24px",
              padding: "2.5rem 2rem",
              maxWidth: "520px",
              width: "100%",
              boxShadow: "0 25px 70px rgba(0, 0, 0, 0.8)",
              position: "relative",
              animation: "slideUp 0.3s ease-out forwards",
              color: "#e2e8f0",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowInfoModal(false)}
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#94a3b8",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(239, 68, 68, 0.15)";
                e.currentTarget.style.color = "#ef4444";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.color = "#94a3b8";
              }}
            >
              ✕
            </button>

            {/* Modal Body */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  border: "3px solid #3b82f6",
                  overflow: "hidden",
                  marginBottom: "1.25rem",
                  boxShadow: "0 10px 25px rgba(59,130,246,0.3)",
                }}
              >
                <img
                  src="/profile.jpg"
                  alt="Cabdi Nafaac"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f8fafc", marginBottom: "0.25rem" }}>
                Cabdi Nafaac
              </h3>
              <p style={{ color: "#3b82f6", fontWeight: 600, fontSize: "0.9rem", marginBottom: "1.25rem" }}>
                Full Stack & Mobile Developer
              </p>

              <div
                style={{
                  width: "100%",
                  height: "1px",
                  background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.25), transparent)",
                  marginBottom: "1.25rem",
                }}
              />

              {/* Bio Details */}
              <div style={{ width: "100%", textAlign: "left", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#3b82f6", fontWeight: 700, minWidth: "90px", fontSize: "0.9rem" }}>Location:</span>
                  <span style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>Mogadishu, Somalia</span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#3b82f6", fontWeight: 700, minWidth: "90px", fontSize: "0.9rem" }}>Education:</span>
                  <span style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>Bachelor in Computer Science</span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#3b82f6", fontWeight: 700, minWidth: "90px", fontSize: "0.9rem" }}>Experience:</span>
                  <span style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>3+ Years in Professional Dev</span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#3b82f6", fontWeight: 700, minWidth: "90px", fontSize: "0.9rem" }}>Interests:</span>
                  <span style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>Artificial Intelligence, Mobile Apps, Scalable Databases</span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#3b82f6", fontWeight: 700, minWidth: "90px", fontSize: "0.9rem" }}>Tech Stack:</span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "2px" }}>
                    {["React", "React Native", "TypeScript", "Node.js", "Express", "PostgreSQL", "MongoDB"].map((tech) => (
                      <span
                        key={tech}
                        style={{
                          background: "rgba(59,130,246,0.1)",
                          border: "1px solid rgba(59,130,246,0.2)",
                          color: "#60a5fa",
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          padding: "2px 8px",
                          borderRadius: "50px",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "1px",
                  background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.25), transparent)",
                  margin: "1.25rem 0",
                }}
              />

              <p style={{ color: "#94a3b8", fontSize: "0.85rem", fontStyle: "italic", lineHeight: 1.5 }}>
                "Fusing clean code with user-centric design to build impactful digital solutions."
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            text-align: center;
          }
          .about-grid > div:first-child {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
