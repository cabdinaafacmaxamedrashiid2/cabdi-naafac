"use client";
import { useEffect, useRef, useState } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance / Remote",
    period: "2024 – Present",
    desc: "Developing end-to-end web and mobile applications for clients across East Africa. Specializing in React, Node.js, and MongoDB stack with a focus on performance and user experience.",
    skills: ["React.js", "Node.js", "MongoDB", "React Native"],
    type: "full-time",
    color: "#3b82f6",
  },
  {
    role: "Junior Web Developer",
    company: "Tech Startup – Mogadishu",
    period: "2023 – 2024",
    desc: "Contributed to building a local e-commerce platform serving Somali businesses. Worked on frontend development with React and integrated payment systems.",
    skills: ["React.js", "CSS3", "REST APIs", "Firebase"],
    type: "part-time",
    color: "#06b6d4",
  },
  {
    role: "Web Development Intern",
    company: "IT Company – Somalia",
    period: "2022 – 2023",
    desc: "Gained hands-on experience in building responsive web applications, collaborating with senior developers, and learning modern development workflows.",
    skills: ["HTML5", "CSS3", "JavaScript", "Git"],
    type: "internship",
    color: "#8b5cf6",
  },
];

export default function Experience() {
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
      id="experience"
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
          width: 400,
          height: 400,
          background: "rgba(59,130,246,0.07)",
          top: "20%",
          left: "-100px",
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
          My Journey
        </p>
        <h2 className="section-title">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="section-subtitle">
          Professional milestones that shaped my expertise
        </p>

        {/* Timeline */}
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}>
          {/* Timeline Line */}
          <div
            style={{
              position: "absolute",
              left: "28px",
              top: 0,
              bottom: 0,
              width: "2px",
              background: "linear-gradient(180deg, transparent, #3b82f6, #06b6d4, transparent)",
            }}
          />

          {experiences.map((exp, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "2rem",
                marginBottom: "2.5rem",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-40px)",
                transition: `all 0.6s ease ${i * 0.15}s`,
                position: "relative",
              }}
            >
              {/* Timeline dot */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: `${exp.color}20`,
                  border: `2px solid ${exp.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  position: "relative",
                  zIndex: 1,
                  boxShadow: `0 0 20px ${exp.color}30`,
                }}
              >
                <Briefcase size={22} color={exp.color} />
              </div>

              {/* Card */}
              <div
                className="glass-card"
                style={{
                  flex: 1,
                  padding: "1.75rem",
                  borderRadius: "16px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateX(8px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 15px 40px ${exp.color}20`;
                  (e.currentTarget as HTMLElement).style.borderColor = `${exp.color}40`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.15)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#e2e8f0" }}>
                      {exp.role}
                    </h3>
                    <div style={{ color: exp.color, fontWeight: 600, fontSize: "0.9rem" }}>
                      {exp.company}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        background: `${exp.color}15`,
                        border: `1px solid ${exp.color}30`,
                        color: exp.color,
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        padding: "4px 12px",
                        borderRadius: "50px",
                        textTransform: "capitalize",
                      }}
                    >
                      {exp.type}
                    </span>
                    <span style={{ color: "#64748b", fontSize: "0.85rem" }}>{exp.period}</span>
                  </div>
                </div>

                <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                  {exp.desc}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        background: "rgba(59,130,246,0.1)",
                        border: "1px solid rgba(59,130,246,0.2)",
                        color: "#60a5fa",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        padding: "3px 10px",
                        borderRadius: "6px",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
