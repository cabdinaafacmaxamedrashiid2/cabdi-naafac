"use client";
import { useEffect, useRef, useState } from "react";

const technologies = [
  { name: "React.js", icon: "⚛️", color: "#61dafb", category: "Frontend" },
  { name: "JavaScript", icon: "⚡", color: "#f7df1e", category: "Language" },
  { name: "Node.js", icon: "🟢", color: "#68a063", category: "Backend" },
  { name: "React Native", icon: "📱", color: "#61dafb", category: "Mobile" },
  { name: "PostgreSQL", icon: "🐘", color: "#336791", category: "Database" },
  { name: "Python", icon: "🐍", color: "#3776ab", category: "Language" },
];

const categories = ["All", "Frontend", "Backend", "Mobile", "Database", "Language"];

export default function TechStack() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === "All"
      ? technologies
      : technologies.filter((t) => t.category === activeCategory);

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
      id="techstack"
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
          width: 600,
          height: 600,
          background: "rgba(6,182,212,0.06)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div
        ref={ref}
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}
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
          Technologies
        </p>
        <h2 className="section-title">
          My <span className="gradient-text">Tech Stack</span>
        </h2>
        <p className="section-subtitle">
          The tools and technologies I use to build great products
        </p>

        {/* Category Filter */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.6rem",
            marginBottom: "2.5rem",
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "6px 16px",
                borderRadius: "50px",
                border: `1px solid ${activeCategory === cat ? "#3b82f6" : "rgba(59,130,246,0.2)"}`,
                background:
                  activeCategory === cat
                    ? "linear-gradient(135deg, #1d4ed8, #3b82f6)"
                    : "rgba(59,130,246,0.05)",
                color: activeCategory === cat ? "white" : "#94a3b8",
                fontSize: "0.8rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(8, 1fr)",
            gap: "1rem",
          }}
          className="tech-grid"
        >
          {filtered.map((tech, i) => (
            <div
              key={tech.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1.5rem 0.75rem",
                borderRadius: "16px",
                background: "rgba(10,22,40,0.6)",
                border: "1px solid rgba(59,130,246,0.12)",
                cursor: "default",
                transition: "all 0.35s ease",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "scale(1)" : "scale(0.8)",
                transitionDelay: `${i * 0.05}s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-8px) scale(1.05)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 15px 40px ${tech.color}30`;
                (e.currentTarget as HTMLElement).style.borderColor = `${tech.color}50`;
                (e.currentTarget as HTMLElement).style.background = `${tech.color}10`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.12)";
                (e.currentTarget as HTMLElement).style.background = "rgba(10,22,40,0.6)";
              }}
              title={tech.name}
            >
              <span style={{ fontSize: "2rem" }}>{tech.icon}</span>
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: "#94a3b8",
                  textAlign: "center",
                  lineHeight: 1.2,
                }}
              >
                {tech.name}
              </span>
              <span
                style={{
                  fontSize: "0.65rem",
                  color: tech.color,
                  fontWeight: 600,
                  background: `${tech.color}15`,
                  padding: "2px 8px",
                  borderRadius: "50px",
                  border: `1px solid ${tech.color}25`,
                }}
              >
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .tech-grid { grid-template-columns: repeat(6, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .tech-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .tech-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
