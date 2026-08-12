"use client";
import { useState } from "react";
import Link from "next/link";

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    id: 1,
    client: "JAZERA UNIVERSITY",
    title: "Library Management System",
    tags: ["React", "Node.js", "MongoDB", "REST API"],
    description:
      "Built a full-featured library management system for Jazera University. The system handles book cataloging, member registration, borrowing, and return tracking with an intuitive admin dashboard and real-time availability updates.",
    image: "/project1.jpg",
    github: "https://github.com/cabdinaafacmaxamedrashiid2",
    demo: "#",
    year: "2024",
    category: "Web App",
  },
  {
    id: 2,
    client: "SMART AGRICULTURE",
    title: "Smart Livestock Tracking App",
    tags: ["React Native", "Node.js", "GPS Tracking", "Mobile"],
    description:
      "Developed a cross-platform mobile application for tracking and managing livestock health, location, and feeding schedules. The app uses GPS data and real-time notifications to keep farmers informed about their animals.",
    image: "/camel.jpg",
    github: "https://github.com/cabdinaafacmaxamedrashiid2",
    demo: "#",
    year: "2024",
    category: "Mobile App",
  },
  {
    id: 3,
    client: "AI RESEARCH PROJECT",
    title: "Face Recognition System",
    tags: ["Python", "OpenCV", "Machine Learning", "AI"],
    description:
      "Implemented a biometric face recognition system using deep learning models. The system can identify and verify individuals in real-time with high accuracy, making it suitable for security and attendance applications.",
    image: "/project2.jpg",
    github: "https://github.com/cabdinaafacmaxamedrashiid2",
    demo: "#",
    year: "2025",
    category: "AI / ML",
  },
];

export default function ProjectsPage() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0a0f1e 0%, #111827 50%, #0a0f1e 100%)",
        paddingTop: "100px",
        paddingBottom: "80px",
      }}
    >
      {/* Header */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          marginBottom: "5rem",
        }}
      >
        {/* Back Link */}
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            fontSize: "0.9rem",
            fontWeight: 500,
            marginBottom: "2.5rem",
            transition: "gap 0.3s ease",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </Link>

        <p
          style={{
            color: "#3b82f6",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontSize: "0.8rem",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span style={{ width: 40, height: 2, background: "#f59e0b", display: "inline-block" }} />
          CASE STUDIES
        </p>

        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 800,
            color: "#f8fafc",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            maxWidth: "750px",
            marginBottom: "1.5rem",
          }}
        >
          Projects I&apos;ve{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            delivered
          </span>
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "1.15rem",
            maxWidth: "580px",
            lineHeight: 1.7,
          }}
        >
          A detailed look into the real-world projects I&apos;ve built — from web and mobile apps to AI-powered systems.
        </p>
      </div>

      {/* Projects List */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          const isHovered = hovered === project.id;

          return (
            <div
              key={project.id}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "4rem",
                alignItems: "center",
                marginBottom: "6rem",
                padding: "3rem",
                borderRadius: "28px",
                background: isHovered ? "rgba(17, 24, 39, 0.7)" : "rgba(10, 15, 30, 0.4)",
                border: isHovered ? "1px solid rgba(59, 130, 246, 0.3)" : "1px solid rgba(59, 130, 246, 0.1)",
                transition: "all 0.4s ease",
                boxShadow: isHovered ? "0 20px 60px rgba(0,0,0,0.4)" : "none",
                direction: isEven ? "ltr" : "rtl",
              }}
            >
              {/* Text Content */}
              <div style={{ direction: "ltr" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "1.25rem",
                  }}
                >
                  <span
                    style={{
                      color: "#f59e0b",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    }}
                  >
                    {project.client}
                  </span>
                  <span
                    style={{
                      background: "rgba(59, 130, 246, 0.15)",
                      border: "1px solid rgba(59, 130, 246, 0.3)",
                      color: "#60a5fa",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      padding: "2px 10px",
                      borderRadius: "20px",
                    }}
                  >
                    {project.category}
                  </span>
                  <span style={{ color: "#475569", fontSize: "0.8rem" }}>{project.year}</span>
                </div>

                <h2
                  style={{
                    color: "#f8fafc",
                    fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                    fontWeight: 800,
                    marginBottom: "1rem",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                  }}
                >
                  {project.title}
                </h2>

                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "1.5rem",
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        color: "#06b6d4",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                      }}
                    >
                      {tag}
                      {project.tags.indexOf(tag) < project.tags.length - 1 && (
                        <span style={{ color: "#334155", marginLeft: "8px" }}>·</span>
                      )}
                    </span>
                  ))}
                </div>

                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "0.97rem",
                    lineHeight: 1.8,
                    marginBottom: "2rem",
                  }}
                >
                  {project.description}
                </p>

                {/* Buttons */}
                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "11px 24px",
                      borderRadius: "30px",
                      background: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      boxShadow: "0 0 20px rgba(59,130,246,0.4)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "0 0 35px rgba(59,130,246,0.6)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "0 0 20px rgba(59,130,246,0.4)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <GithubIcon />
                    View Code
                  </a>

                  <a
                    href={project.demo}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "11px 24px",
                      borderRadius: "30px",
                      border: "1px solid rgba(59,130,246,0.3)",
                      color: "#94a3b8",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(59,130,246,0.6)";
                      e.currentTarget.style.color = "#60a5fa";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(59,130,246,0.3)";
                      e.currentTarget.style.color = "#94a3b8";
                    }}
                  >
                    <ExternalIcon />
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Project Image */}
              <div
                style={{
                  direction: "ltr",
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  height: "340px",
                  border: "1px solid rgba(59,130,246,0.15)",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: isHovered ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.6s ease",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: isHovered
                      ? "linear-gradient(135deg, rgba(59,130,246,0.1), transparent)"
                      : "linear-gradient(135deg, rgba(2,8,23,0.3), transparent)",
                    transition: "all 0.4s ease",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Back to Portfolio CTA */}
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "14px 32px",
            borderRadius: "50px",
            background: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
            color: "#fff",
            fontWeight: 700,
            fontSize: "1rem",
            textDecoration: "none",
            boxShadow: "0 0 30px rgba(59,130,246,0.4)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 50px rgba(59,130,246,0.6)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(59,130,246,0.4)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          Back to Portfolio
          <ArrowIcon />
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-row {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
          }
        }
      `}</style>
    </div>
  );
}
