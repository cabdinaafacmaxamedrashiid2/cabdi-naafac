"use client";
import { useEffect, useRef, useState } from "react";
import { BadgeCheck } from "lucide-react";

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

  const frontendSkills = [
    { name: "HTML & CSS", level: "Experienced" },
    { name: "JavaScript", level: "Experienced" },
    { name: "React.js", level: "Experienced" },
    { name: "Next.js", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Experienced" },
    { name: "React Native", level: "Intermediate" },
  ];

  const backendSkills = [
    { name: "Node.js", level: "Intermediate" },
    { name: "Express.js", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "PostgreSQL", level: "Basic" },
    { name: "Firebase", level: "Intermediate" },
    { name: "Git & GitHub", level: "Experienced" },
  ];

  return (
    <section
      id="experience"
      style={{
        padding: "100px 0",
        background: "transparent",
        position: "relative",
      }}
    >
      <div
        ref={ref}
        style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 1.5rem" }}
      >
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
            Explore My
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              color: "#f8fafc",
              letterSpacing: "-0.02em",
            }}
          >
            Experience
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s ease 0.2s",
          }}
          className="experience-cards-row"
        >
          {/* Frontend Card */}
          <div
            className="glass-card"
            style={{
              padding: "2.5rem 2rem",
              borderRadius: "32px",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                color: "#e2e8f0",
                fontSize: "1.4rem",
                fontWeight: 700,
                marginBottom: "2rem",
              }}
            >
              Frontend Development
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem 1rem",
                textAlign: "left",
                justifyContent: "center",
                maxWidth: "400px",
                margin: "0 auto",
              }}
              className="experience-skills-grid"
            >
              {frontendSkills.map((skill, index) => (
                <div key={index} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <BadgeCheck size={22} color="#f8fafc" style={{ marginTop: "2px", flexShrink: 0 }} />
                  <div>
                    <div style={{ color: "#f8fafc", fontWeight: 700, fontSize: "1rem", marginBottom: "4px" }}>
                      {skill.name}
                    </div>
                    <div style={{ color: "#64748b", fontSize: "0.85rem", fontWeight: 500 }}>
                      {skill.level}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Card */}
          <div
            className="glass-card"
            style={{
              padding: "2.5rem 2rem",
              borderRadius: "32px",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                color: "#e2e8f0",
                fontSize: "1.4rem",
                fontWeight: 700,
                marginBottom: "2rem",
              }}
            >
              Backend Development
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem 1rem",
                textAlign: "left",
                justifyContent: "center",
                maxWidth: "400px",
                margin: "0 auto",
              }}
              className="experience-skills-grid"
            >
              {backendSkills.map((skill, index) => (
                <div key={index} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <BadgeCheck size={22} color="#f8fafc" style={{ marginTop: "2px", flexShrink: 0 }} />
                  <div>
                    <div style={{ color: "#f8fafc", fontWeight: 700, fontSize: "1rem", marginBottom: "4px" }}>
                      {skill.name}
                    </div>
                    <div style={{ color: "#64748b", fontSize: "0.85rem", fontWeight: 500 }}>
                      {skill.level}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
