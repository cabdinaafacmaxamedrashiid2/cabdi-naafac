"use client";
import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    title: "Library Management System",
    desc: "A comprehensive digital library management platform with book cataloging, member management, borrowing/returning system, and automated overdue notifications. Built with modern web technologies for efficiency.",
    tech: ["React.js", "Node.js", "MongoDB", "Express", "JWT"],
    icon: "📚",
    color: "#3b82f6",
    gradient: "linear-gradient(135deg, #1e3a5f, #2563eb20)",
    github: "https://github.com",
    demo: "#",
    category: "Web App",
  },
  {
    title: "Smart Livestock Vaccination System",
    desc: "An intelligent agricultural system for tracking and managing livestock vaccination schedules in Somalia. Features GPS tracking, vaccination records, health monitoring, and automated reminders for farmers.",
    tech: ["React Native", "Node.js", "PostgreSQL", "GPS API", "Push Notifications"],
    icon: "🐄",
    color: "#22c55e",
    gradient: "linear-gradient(135deg, #14532d, #16a34a20)",
    github: "https://github.com",
    demo: "#",
    category: "Mobile App",
  },
  {
    title: "Face Recognition Attendance",
    desc: "An AI-powered attendance management system using facial recognition technology. Automatically marks attendance, prevents proxy attendance, and generates detailed analytics reports.",
    tech: ["Python", "OpenCV", "React", "Node.js", "TensorFlow", "MongoDB"],
    icon: "👁️",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #3b1f6e, #7c3aed20)",
    github: "https://github.com",
    demo: "#",
    category: "AI Project",
  },
  {
    title: "Coffee Shop Application",
    desc: "A premium mobile application for ordering specialty coffee and beverages. Features real-time order tracking, custom menu builders, digital wallet payments, and loyalty points tracking.",
    tech: ["React Native", "Node.js", "Express", "MongoDB", "Redux Toolkit"],
    icon: "☕",
    color: "#d97706",
    gradient: "linear-gradient(135deg, #78350f, #d9770620)",
    github: "https://github.com",
    demo: "#",
    category: "Mobile App",
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef<HTMLDivElement>(null);

  const filters = ["All", "Web App", "Mobile App", "AI Project"];

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

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
      id="projects"
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
          background: "rgba(59,130,246,0.06)",
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
          My Work
        </p>
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">
          Real-world applications built with passion and precision
        </p>

        {/* Filter Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.75rem",
            marginBottom: "3rem",
            flexWrap: "wrap",
          }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                padding: "8px 20px",
                borderRadius: "50px",
                border: `1px solid ${activeFilter === filter ? "#3b82f6" : "rgba(59,130,246,0.2)"}`,
                background:
                  activeFilter === filter
                    ? "linear-gradient(135deg, #1d4ed8, #3b82f6)"
                    : "rgba(59,130,246,0.05)",
                color: activeFilter === filter ? "white" : "#94a3b8",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2rem",
          }}
          className="projects-grid"
        >
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className="glass-card"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                transition: "all 0.4s ease",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${i * 0.12}s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 25px 60px ${project.color}25`;
                (e.currentTarget as HTMLElement).style.borderColor = `${project.color}40`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.15)";
              }}
            >
              {/* Project Header */}
              <div
                style={{
                  background: project.gradient,
                  padding: "2rem",
                  borderBottom: `1px solid ${project.color}25`,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div>
                  <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>
                    {project.icon}
                  </div>
                  <span
                    style={{
                      display: "inline-block",
                      background: `${project.color}25`,
                      border: `1px solid ${project.color}40`,
                      color: project.color,
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      padding: "4px 12px",
                      borderRadius: "50px",
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Action buttons */}
                <div style={{ display: "flex", gap: "10px" }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 40,
                      height: 40,
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "#e2e8f0",
                      textDecoration: "none",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
                    }}
                  >
                    <GithubIcon size={18} />
                  </a>
                  <a
                    href={project.demo}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 40,
                      height: 40,
                      borderRadius: "10px",
                      background: `${project.color}30`,
                      border: `1px solid ${project.color}50`,
                      color: project.color,
                      textDecoration: "none",
                      transition: "all 0.3s",
                    }}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Project Body */}
              <div style={{ padding: "1.75rem" }}>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "#e2e8f0",
                    marginBottom: "0.75rem",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                  }}
                >
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        background: `${project.color}12`,
                        border: `1px solid ${project.color}25`,
                        color: project.color,
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        padding: "4px 10px",
                        borderRadius: "6px",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
