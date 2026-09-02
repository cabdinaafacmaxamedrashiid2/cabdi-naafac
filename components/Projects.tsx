"use client";
import { useEffect, useRef, useState } from "react";
import { getStoredProjects, ProjectItem } from "@/lib/adminStore";

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

const defaultProjects: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Typing Speed App",
    description: "Interactive typing test application designed to practice and measure typing speed (WPM), accuracy, and errors in real-time.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80",
    github: "https://github.com/cabdinaafacmaxamedrashiid2/typing-speed-app",
    demo: "#",
    color: "#06b6d4",
    createdAt: 1,
  },
  {
    id: "proj-2",
    title: "Waasan.com",
    description: "Medical & Delivery web platform — featuring Home, Delivery services, About Us, Pricing packages, and Contact sections.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    github: "https://github.com/cabdinaafacmaxamedrashiid2/waasan.com",
    demo: "#",
    color: "#3b82f6",
    createdAt: 2,
  },
  {
    id: "proj-3",
    title: "Cabdi Naafac — Portfolio",
    description: "Full-Stack personal portfolio website built with Next.js, TypeScript & Tailwind CSS. Fully responsive dark-mode UI with SEO.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    github: "https://github.com/cabdinaafacmaxamedrashiid2/cabdi-naafac",
    demo: "https://cabdinaafac.netlify.app",
    color: "#8b5cf6",
    createdAt: 3,
  },
  {
    id: "proj-4",
    title: "Digital CV & Resume",
    description: "Interactive modern curriculum vitae platform with instant PDF export, professional typography, and responsive sections.",
    tech: ["HTML5", "CSS3", "JavaScript", "PDF.js"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    github: "https://github.com/cabdinaafacmaxamedrashiid2/cabdi-naafac",
    demo: "/cv.html",
    color: "#10b981",
    createdAt: 4,
  },
];

export default function Projects() {
  const [projectList, setProjectList] = useState<ProjectItem[]>(defaultProjects);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setProjectList(getStoredProjects());

    const handleUpdate = () => {
      setProjectList(getStoredProjects());
    };

    window.addEventListener("portfolio_projects_updated", handleUpdate);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      window.removeEventListener("portfolio_projects_updated", handleUpdate);
    };
  }, []);

  return (
    <section
      id="projects"
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
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2rem",
            maxWidth: "1140px",
            margin: "0 auto",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s ease 0.2s",
          }}
          className="projects-grid"
        >
          {projectList.map((project) => (
            <div
              key={project.id || project.title}
              className="glass-card"
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid rgba(59, 130, 246, 0.18)",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
                background: "rgba(15, 23, 42, 0.65)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(59,130,246,0.15)";
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
                  height: "220px",
                  overflow: "hidden",
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
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                />
              </div>

              {/* Card Body */}
              <div style={{ padding: "1rem 1.5rem 1.75rem", display: "flex", flexDirection: "column", flex: 1 }}>
                {/* Tech Tags */}
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        padding: "4px 10px",
                        borderRadius: "12px",
                        background: "rgba(59, 130, 246, 0.12)",
                        color: "#60a5fa",
                        border: "1px solid rgba(59, 130, 246, 0.25)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Project Title */}
                <h3
                  style={{
                    color: "#f8fafc",
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    marginBottom: "1.5rem",
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Buttons */}
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                  }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      padding: "10px 18px",
                      borderRadius: "12px",
                      border: "1px solid rgba(59, 130, 246, 0.3)",
                      background: "rgba(59, 130, 246, 0.08)",
                      color: "#f8fafc",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(59, 130, 246, 0.2)";
                      e.currentTarget.style.borderColor = "#3b82f6";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(59, 130, 246, 0.08)";
                      e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.3)";
                    }}
                  >
                    <GithubIcon size={18} />
                    GitHub
                  </a>

                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px 18px",
                        borderRadius: "12px",
                        background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                        color: "#ffffff",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 6px 20px rgba(59, 130, 246, 0.5)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 4px 15px rgba(59, 130, 246, 0.3)";
                      }}
                    >
                      Live Demo ↗
                    </a>
                  )}
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
