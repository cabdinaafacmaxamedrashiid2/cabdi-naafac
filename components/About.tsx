"use client";
import { useEffect, useRef, useState } from "react";
import { Award, GraduationCap } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
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
        padding: "120px 0",
        background: "transparent",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 2.5rem" }}>
        {/* Title Section */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.6s ease",
          }}
        >
          <p
            style={{
              color: "#64748b",
              fontWeight: 500,
              fontSize: "0.95rem",
              marginBottom: "0.5rem",
            }}
          >
            Get To Know More
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              color: "#f8fafc",
              letterSpacing: "-0.02em",
            }}
          >
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div
          style={{
            display: "grid",
            alignItems: "center",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s ease 0.2s",
          }}
          className="about-grid"
        >
          {/* Left - Profile Image */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "320px",
                height: "320px",
                borderRadius: "32px",
                overflow: "hidden",
                border: "2px solid rgba(59, 130, 246, 0.2)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              }}
              className="glass-card animate-float"
            >
              <img
                src="/profile.jpg"
                alt="Cabdi Nafaac"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "grayscale(20%) contrast(110%)",
                }}
              />
            </div>
          </div>

          {/* Right - Cards and Text */}
          <div>
            {/* Cards Row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
                marginBottom: "2.5rem",
              }}
              className="about-cards-row"
            >
              {/* Experience Card */}
              <div
                className="glass-card"
                style={{
                  padding: "1.5rem",
                  borderRadius: "24px",
                  textAlign: "center",
                  border: "1px solid rgba(59, 130, 246, 0.15)",
                  transition: "transform 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.75rem" }}>
                  <Award size={28} color="#e2e8f0" />
                </div>
                <h3 style={{ color: "#f8fafc", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.25rem" }}>
                  Learning
                </h3>
                <p style={{ color: "#94a3b8", fontSize: "0.9rem", fontWeight: 500 }}>
                  4+ Years
                </p>
                <p style={{ color: "#64748b", fontSize: "0.85rem" }}>
                  Full Stack Development
                </p>
              </div>

              {/* Education Card */}
              <div
                className="glass-card"
                style={{
                  padding: "1.5rem",
                  borderRadius: "24px",
                  textAlign: "center",
                  border: "1px solid rgba(59, 130, 246, 0.15)",
                  transition: "transform 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.75rem" }}>
                  <GraduationCap size={28} color="#e2e8f0" />
                </div>
                <h3 style={{ color: "#f8fafc", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.25rem" }}>
                  Education
                </h3>
                <p style={{ color: "#94a3b8", fontSize: "0.9rem", fontWeight: 500 }}>
                  B.Sc. Bachelors Degree
                </p>
                <p style={{ color: "#64748b", fontSize: "0.85rem" }}>
                  Jazera University
                </p>
              </div>
            </div>

            {/* Biography Text */}
            <p
              style={{
                color: "#94a3b8",
                lineHeight: 1.8,
                fontSize: "1rem",
                marginBottom: "1rem",
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
                lineHeight: 1.8,
                fontSize: "1rem",
              }}
            >
              I focus on writing quality code, developing secure APIs, and
              building reliable database systems. I am always learning new
              technologies and improving my skills to deliver efficient and
              scalable solutions.
            </p>

            {/* Visual Roadmap Milestones */}
            <div
              style={{
                marginTop: "2rem",
                padding: "1.25rem 1.5rem",
                background: "rgba(255, 255, 255, 0.03)",
                borderRadius: "20px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#f4f4f5", marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                🗺️ Career &amp; Education Roadmap
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#38bdf8", marginTop: "6px", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#f8fafc" }}>
                      2022 – 2026: Jazera University (B.Sc. Computer Science)
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#94a3b8", marginTop: "2px" }}>
                      Core algorithms, software architecture, databases, and computer systems.
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#a855f7", marginTop: "6px", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#f8fafc" }}>
                      2023 – 2024: Full-Stack Engineering Mastery
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#94a3b8", marginTop: "2px" }}>
                      Mastered React, Next.js, TypeScript, Node.js, Express, and PostgreSQL/MongoDB.
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", marginTop: "6px", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#f8fafc" }}>
                      2025 – 2026: Commercial Products &amp; SaaS Codebases
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#94a3b8", marginTop: "2px" }}>
                      Shipped Waasan.com, Typing Speed App, and production-ready digital templates.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
