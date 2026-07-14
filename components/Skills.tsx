"use client";
import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML5", level: 95, color: "#e34c26", icon: "🌐" },
  { name: "CSS3", level: 90, color: "#264de4", icon: "🎨" },
  { name: "JavaScript", level: 88, color: "#f7df1e", icon: "⚡" },
  { name: "React Native", level: 82, color: "#61dafb", icon: "📱" },
  { name: "Node.js", level: 80, color: "#68a063", icon: "🟢" },
];

function SkillBar({
  skill,
  visible,
  delay,
}: {
  skill: (typeof skills)[0];
  visible: boolean;
  delay: number;
}) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setAnimated(true), delay);
      return () => clearTimeout(t);
    }
  }, [visible, delay]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.6s ease ${delay}ms`,
        marginBottom: "1.75rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "0.6rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontWeight: 600,
            color: "#e2e8f0",
            fontSize: "0.95rem",
          }}
        >
          <span style={{ fontSize: "1.2rem" }}>{skill.icon}</span>
          {skill.name}
        </div>
        <span
          style={{
            color: skill.color,
            fontWeight: 700,
            fontSize: "0.95rem",
          }}
        >
          {skill.level}%
        </span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: animated ? `${skill.level}%` : "0%",
            background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
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
      id="skills"
      style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #020817, #0a1628)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow Orb */}
      <div
        className="glow-orb"
        style={{
          width: 500,
          height: 500,
          background: "rgba(59, 130, 246, 0.06)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div
        ref={ref}
        style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 2.5rem", position: "relative", zIndex: 1 }}
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
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        >
          What I Know
        </p>
        <h2
          className="section-title"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.6s ease",
          }}
        >
          My <span className="gradient-text">Skills</span>
        </h2>
        <p
          className="section-subtitle"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease 0.2s",
            marginBottom: "3.5rem",
          }}
        >
          Core technologies I specialize in for building modern applications
        </p>

        {/* Centered Skills Card */}
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.7s ease 0.2s",
          }}
        >
          <div className="glass-card" style={{ padding: "2.5rem" }}>
            <h3
              style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "#e2e8f0",
                marginBottom: "2rem",
                paddingBottom: "0.85rem",
                borderBottom: "1px solid rgba(59,130,246,0.15)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              🛠️ Technical Proficiency
            </h3>
            {skills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                skill={skill}
                visible={isVisible}
                delay={i * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
