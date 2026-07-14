"use client";
import { useEffect, useRef, useState } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Somali National University",
    location: "Mogadishu, Somalia",
    period: "2021 – 2025",
    desc: "Focused on software engineering, algorithms, data structures, and modern application development. Graduated with honors while leading multiple innovative tech projects.",
    courses: ["Data Structures", "Algorithms", "Database Systems", "Software Engineering", "AI & ML"],
    color: "#3b82f6",
    grade: "Honours",
  },
  {
    degree: "Full Stack Web Development",
    institution: "Online Bootcamp (Udemy / Coursera)",
    location: "Remote",
    period: "2023",
    desc: "Intensive full-stack development program covering React, Node.js, databases, and deployment. Completed 15+ hands-on projects.",
    courses: ["React.js", "Node.js", "MongoDB", "REST APIs", "TypeScript"],
    color: "#06b6d4",
    grade: "Certified",
  },
  {
    degree: "Mobile App Development with React Native",
    institution: "Meta Developer Program",
    location: "Online",
    period: "2024",
    desc: "Specialized training in cross-platform mobile app development using React Native, covering navigation, state management, and device APIs.",
    courses: ["React Native", "Expo", "Redux", "Firebase", "App Publishing"],
    color: "#8b5cf6",
    grade: "Certified",
  },
];

export default function Education() {
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
      id="education"
      style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #020817, #0a1628)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="glow-orb"
        style={{
          width: 400,
          height: 400,
          background: "rgba(6,182,212,0.07)",
          bottom: "-100px",
          right: "-100px",
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
          Academic Background
        </p>
        <h2 className="section-title">
          My <span className="gradient-text">Education</span>
        </h2>
        <p className="section-subtitle">
          The foundation of my knowledge and expertise
        </p>

        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {education.map((edu, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                padding: "2rem",
                borderRadius: "20px",
                marginBottom: "1.5rem",
                borderLeft: `4px solid ${edu.color}`,
                transition: "all 0.4s ease",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(40px)",
                transitionDelay: `${i * 0.15}s`,
                position: "relative",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateX(-8px)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 15px 40px ${edu.color}20`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "12px",
                      background: `${edu.color}15`,
                      border: `1px solid ${edu.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <GraduationCap size={22} color={edu.color} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#e2e8f0", marginBottom: "0.25rem" }}>
                      {edu.degree}
                    </h3>
                    <div style={{ color: edu.color, fontWeight: 600, fontSize: "0.9rem" }}>
                      {edu.institution}
                    </div>
                    <div style={{ color: "#64748b", fontSize: "0.82rem" }}>
                      📍 {edu.location}
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      background: `${edu.color}20`,
                      border: `1px solid ${edu.color}40`,
                      color: edu.color,
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      padding: "4px 12px",
                      borderRadius: "50px",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {edu.grade}
                  </div>
                  <div style={{ color: "#64748b", fontSize: "0.82rem" }}>{edu.period}</div>
                </div>
              </div>

              <p style={{ color: "#94a3b8", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                {edu.desc}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {edu.courses.map((course) => (
                  <span
                    key={course}
                    style={{
                      background: `${edu.color}10`,
                      border: `1px solid ${edu.color}25`,
                      color: edu.color,
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      padding: "3px 10px",
                      borderRadius: "6px",
                    }}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
