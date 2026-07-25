"use client";
import { useEffect, useRef, useState } from "react";

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
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=800&q=80",
    github: "https://github.com",
    demo: "#",
  },
  {
    title: "Smart Livestock App",
    image: "https://images.pexels.com/photos/7178822/pexels-photo-7178822.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com",
    demo: "#",
  },
  {
    title: "Face Recognition",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    github: "https://github.com",
    demo: "#",
  },
];

export default function Projects() {
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
      id="projects"
      style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #020817, #0a1628)",
        position: "relative",
      }}
    >
      <div
        ref={ref}
        style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        {/* Title */}
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
            Browse My Recent
          </p>
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: 800,
              color: "#f8fafc",
              letterSpacing: "-0.02em",
            }}
          >
            Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s ease 0.2s",
          }}
          className="projects-grid"
        >
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="glass-card"
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid rgba(59, 130, 246, 0.15)",
                textAlign: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Project Image */}
              <div
                style={{
                  width: "100%",
                  height: "250px",
                  overflow: "hidden",
                  borderRadius: "16px",
                  margin: "0",
                  padding: "1rem",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                />
              </div>

              {/* Project Title */}
              <h3
                style={{
                  color: "#f8fafc",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  padding: "1rem 1rem 0.75rem",
                }}
              >
                {project.title}
              </h3>

              {/* Buttons */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  padding: "0.75rem 1rem 1.5rem",
                }}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "10px 22px",
                    borderRadius: "30px",
                    border: "2px solid rgba(59, 130, 246, 0.3)",
                    color: "#f8fafc",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(59, 130, 246, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  style={{
                    padding: "10px 22px",
                    borderRadius: "30px",
                    border: "2px solid rgba(59, 130, 246, 0.3)",
                    color: "#f8fafc",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(59, 130, 246, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  Live Demo
                </a>
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
