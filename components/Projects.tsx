"use client";
import { useEffect, useRef, useState } from "react";
import { getStoredProjects, ProjectItem } from "@/lib/adminStore";
import {
  Lock,
  Sparkles,
  ExternalLink,
  ShoppingBag,
  CheckCircle2,
  X,
  MessageSquare,
  CreditCard,
  ShieldCheck,
  Zap,
  FolderGit2,
  BookOpen,
} from "lucide-react";

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
    tier: "free",
    price: 0,
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
    tier: "free",
    price: 0,
    createdAt: 2,
  },
  {
    id: "proj-3",
    title: "Cabdi Naafac — Portfolio & CMS",
    description: "Full-Stack personal portfolio website built with Next.js, TypeScript & Tailwind CSS. Includes password-protected Admin Dashboard CMS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    github: "https://github.com/cabdinaafacmaxamedrashiid2/cabdi-naafac",
    demo: "https://cabdinaafac.netlify.app",
    color: "#8b5cf6",
    tier: "premium",
    price: 15,
    createdAt: 3,
  },
  {
    id: "proj-4",
    title: "Digital CV & Resume Platform",
    description: "Interactive modern curriculum vitae platform with instant PDF export, professional typography, and responsive sections.",
    tech: ["HTML5", "CSS3", "JavaScript", "PDF.js"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    github: "https://github.com/cabdinaafacmaxamedrashiid2/cabdi-naafac",
    demo: "/cv.html",
    color: "#10b981",
    tier: "premium",
    price: 10,
    createdAt: 4,
  },
];

export default function Projects() {
  const [projectList, setProjectList] = useState<ProjectItem[]>(defaultProjects);
  const [activeFilter, setActiveFilter] = useState<"all" | "free" | "premium">("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const filteredProjects = projectList.filter((p) => {
    if (activeFilter === "free") return p.tier === "free" || !p.tier;
    if (activeFilter === "premium") return p.tier === "premium";
    return true;
  });

  const freeCount = projectList.filter((p) => p.tier === "free" || !p.tier).length;
  const premiumCount = projectList.filter((p) => p.tier === "premium").length;

  const openPurchaseModal = (proj: ProjectItem) => {
    setSelectedProject(proj);
    setIsModalOpen(true);
  };

  const openBundleModal = () => {
    setSelectedProject({
      id: "bundle-all",
      title: "All 4+ Production Codebases Bundle",
      description: "Unlock full source codes, backend setups, and commercial licenses for all current & future projects in the library.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind", "Admin CMS"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      github: "#",
      demo: "#",
      tier: "premium",
      price: 25,
      createdAt: Date.now(),
    });
    setIsModalOpen(true);
  };

  return (
    <section
      id="projects"
      style={{
        padding: "100px 0 120px",
        background: "transparent",
        position: "relative",
      }}
    >
      <div
        ref={ref}
        style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        {/* Title */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "3rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.6s ease",
          }}
        >
          <p
            style={{
              color: "#38bdf8",
              fontWeight: 600,
              fontSize: "0.95rem",
              marginBottom: "0.5rem",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Digital Library & Code Store
          </p>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#f8fafc",
              letterSpacing: "-0.02em",
            }}
          >
            Projects & <span className="gradient-text">Templates</span>
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "1rem", maxWidth: "600px", margin: "0.75rem auto 0" }}>
            Explore live previews for free, or unlock complete production-ready source codes with database & setup guides.
          </p>
        </div>

        {/* Filter / Library Pills (Mobbin / UI8 style) */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "3rem",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => setActiveFilter("all")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              borderRadius: "50px",
              background: activeFilter === "all" ? "rgba(59, 130, 246, 0.25)" : "rgba(255, 255, 255, 0.04)",
              border: activeFilter === "all" ? "1px solid #3b82f6" : "1px solid rgba(255, 255, 255, 0.1)",
              color: activeFilter === "all" ? "#60a5fa" : "#94a3b8",
              fontWeight: 700,
              fontSize: "0.88rem",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <FolderGit2 size={16} />
            <span>All Projects ({projectList.length})</span>
          </button>

          <button
            onClick={() => setActiveFilter("free")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              borderRadius: "50px",
              background: activeFilter === "free" ? "rgba(34, 197, 94, 0.22)" : "rgba(255, 255, 255, 0.04)",
              border: activeFilter === "free" ? "1px solid #22c55e" : "1px solid rgba(255, 255, 255, 0.1)",
              color: activeFilter === "free" ? "#4ade80" : "#94a3b8",
              fontWeight: 700,
              fontSize: "0.88rem",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <BookOpen size={16} />
            <span>🟢 Free Open Source ({freeCount})</span>
          </button>

          <button
            onClick={() => setActiveFilter("premium")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              borderRadius: "50px",
              background: activeFilter === "premium" ? "rgba(234, 179, 8, 0.22)" : "rgba(255, 255, 255, 0.04)",
              border: activeFilter === "premium" ? "1px solid #eab308" : "1px solid rgba(255, 255, 255, 0.1)",
              color: activeFilter === "premium" ? "#facc15" : "#94a3b8",
              fontWeight: 700,
              fontSize: "0.88rem",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <Sparkles size={16} />
            <span>💎 Premium Store ({premiumCount})</span>
          </button>
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
          {filteredProjects.map((project) => {
            const isPremium = project.tier === "premium";

            return (
              <div
                key={project.id || project.title}
                className="glass-card"
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: isPremium ? "1px solid rgba(234, 179, 8, 0.3)" : "1px solid rgba(59, 130, 246, 0.18)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                  background: isPremium ? "rgba(20, 16, 32, 0.75)" : "rgba(15, 23, 42, 0.65)",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = isPremium
                    ? "0 20px 40px rgba(0,0,0,0.5), 0 0 35px rgba(234, 179, 8, 0.18)"
                    : "0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(59,130,246,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Project Image & Badge Overlay */}
                <div
                  style={{
                    width: "100%",
                    height: "210px",
                    overflow: "hidden",
                    padding: "1rem 1rem 0",
                    position: "relative",
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

                  {/* Tier Pill on top right */}
                  <div
                    style={{
                      position: "absolute",
                      top: "1.6rem",
                      right: "1.6rem",
                      padding: "5px 12px",
                      borderRadius: "50px",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      letterSpacing: "0.03em",
                      background: isPremium ? "rgba(15, 23, 42, 0.9)" : "rgba(15, 23, 42, 0.9)",
                      border: isPremium ? "1px solid #eab308" : "1px solid #22c55e",
                      color: isPremium ? "#facc15" : "#4ade80",
                      backdropFilter: "blur(10px)",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    {isPremium ? (
                      <>
                        <Lock size={12} />
                        <span>PREMIUM • ${project.price || 15}</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 size={12} />
                        <span>FREE CODE</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: "1.25rem 1.5rem 1.75rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  {/* Tech Tags */}
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          padding: "3px 9px",
                          borderRadius: "8px",
                          background: "rgba(59, 130, 246, 0.12)",
                          color: "#60a5fa",
                          border: "1px solid rgba(59, 130, 246, 0.2)",
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
                      fontSize: "1.3rem",
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
                      fontSize: "0.88rem",
                      lineHeight: 1.6,
                      marginBottom: "1.5rem",
                      flex: 1,
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    {/* Live Demo is always available so visitors can see quality */}
                    {project.demo && project.demo !== "#" ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          flex: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "6px",
                          padding: "10px 14px",
                          borderRadius: "12px",
                          background: "rgba(255, 255, 255, 0.05)",
                          border: "1px solid rgba(255, 255, 255, 0.12)",
                          color: "#f8fafc",
                          fontWeight: 600,
                          fontSize: "0.85rem",
                          textDecoration: "none",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <ExternalLink size={15} />
                        <span>Live Preview</span>
                      </a>
                    ) : (
                      <div
                        style={{
                          flex: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "10px 14px",
                          borderRadius: "12px",
                          background: "rgba(255, 255, 255, 0.03)",
                          border: "1px solid rgba(255, 255, 255, 0.06)",
                          color: "#64748b",
                          fontSize: "0.85rem",
                        }}
                      >
                        Active Web
                      </div>
                    )}

                    {/* Code Access Button: Free opens GitHub; Premium opens Purchase Modal */}
                    {isPremium ? (
                      <button
                        onClick={() => openPurchaseModal(project)}
                        style={{
                          flex: 1.2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "6px",
                          padding: "10px 14px",
                          borderRadius: "12px",
                          background: "linear-gradient(135deg, #eab308, #ca8a04)",
                          color: "#0f172a",
                          fontWeight: 800,
                          fontSize: "0.85rem",
                          border: "none",
                          cursor: "pointer",
                          boxShadow: "0 4px 15px rgba(234, 179, 8, 0.35)",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <Lock size={14} />
                        <span>Unlock Code (${project.price || 15})</span>
                      </button>
                    ) : (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          flex: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "6px",
                          padding: "10px 14px",
                          borderRadius: "12px",
                          border: "1px solid rgba(34, 197, 94, 0.3)",
                          background: "rgba(34, 197, 94, 0.1)",
                          color: "#4ade80",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          textDecoration: "none",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <GithubIcon size={16} />
                        <span>Free GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================================================================= */}
        {/* MOBBIN-INSPIRED PAYWALL BANNER                                    */}
        {/* ================================================================= */}
        <div
          className="glass-card"
          style={{
            maxWidth: "1040px",
            margin: "4.5rem auto 0",
            borderRadius: "28px",
            padding: "3rem 2rem",
            background: "radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.15), rgba(15, 23, 42, 0.85) 75%)",
            border: "1px solid rgba(99, 102, 241, 0.35)",
            boxShadow: "0 25px 60px rgba(0,0,0,0.6), 0 0 40px rgba(99,102,241,0.15)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 16px",
              borderRadius: "50px",
              background: "rgba(99, 102, 241, 0.2)",
              border: "1px solid rgba(99, 102, 241, 0.4)",
              color: "#a5b4fc",
              fontSize: "0.82rem",
              fontWeight: 700,
              marginBottom: "1.25rem",
            }}
          >
            <Sparkles size={14} />
            <span>COMMERCIAL DEVELOPER STORE</span>
          </div>

          <h3
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 800,
              color: "#f8fafc",
              marginBottom: "0.75rem",
              letterSpacing: "-0.02em",
            }}
          >
            Unlock All Production-Ready Codebases.
          </h3>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "1rem",
              maxWidth: "680px",
              margin: "0 auto 2rem",
              lineHeight: 1.7,
            }}
          >
            Get instant access to full Next.js/React repositories, clean database schemas, responsive UI components,
            and setup guides. Pay easily via <strong>EVC Plus, Zaad, Sahal</strong>, or Card.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={openBundleModal}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                borderRadius: "50px",
                background: "linear-gradient(135deg, #6366f1, #3b82f6)",
                color: "#fff",
                fontWeight: 800,
                fontSize: "0.95rem",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 6px 25px rgba(99, 102, 241, 0.45)",
              }}
            >
              <ShoppingBag size={18} />
              <span>Get All Templates ($25 Bundle)</span>
            </button>

            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 26px",
                borderRadius: "50px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#cbd5e1",
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
              }}
            >
              <MessageSquare size={16} />
              <span>Order Custom Development</span>
            </a>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.75rem",
              marginTop: "2rem",
              flexWrap: "wrap",
              fontSize: "0.82rem",
              color: "#94a3b8",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <ShieldCheck size={16} color="#22c55e" />
              <span>Verified Clean Code</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Zap size={16} color="#3b82f6" />
              <span>Instant Download & Access</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <CreditCard size={16} color="#a855f7" />
              <span>EVC Plus / Zaad / Sahal Accepted</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================= */}
      {/* PURCHASE / CHECKOUT MODAL                                         */}
      {/* ================================================================= */}
      {isModalOpen && selectedProject && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(10px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="glass-card"
            style={{
              maxWidth: "520px",
              width: "100%",
              borderRadius: "28px",
              padding: "2.25rem 2rem",
              background: "#0f172a",
              border: "1px solid rgba(234, 179, 8, 0.4)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.8), 0 0 40px rgba(234, 179, 8, 0.15)",
              color: "#f8fafc",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: "absolute",
                top: 18,
                right: 18,
                background: "rgba(255, 255, 255, 0.08)",
                border: "none",
                borderRadius: "50%",
                width: 34,
                height: 34,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#94a3b8",
                cursor: "pointer",
              }}
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  padding: "3px 10px",
                  borderRadius: "50px",
                  background: "rgba(234, 179, 8, 0.18)",
                  color: "#facc15",
                  border: "1px solid rgba(234, 179, 8, 0.4)",
                }}
              >
                💎 COMMERCIAL LICENSE
              </span>
              <span style={{ fontSize: "1.4rem", fontWeight: 800, color: "#4ade80", marginLeft: "auto" }}>
                ${selectedProject.price || 15} USD
              </span>
            </div>

            <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.5rem" }}>
              {selectedProject.title}
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "0.88rem", lineHeight: 1.5, marginBottom: "1.5rem" }}>
              {selectedProject.description}
            </p>

            {/* Inclusions */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                borderRadius: "16px",
                padding: "1rem 1.25rem",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                marginBottom: "1.5rem",
              }}
            >
              <div style={{ fontSize: "0.82rem", color: "#cbd5e1", fontWeight: 700, marginBottom: "8px" }}>
                Maxaad Helaysaa (What&apos;s Included):
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.82rem", color: "#94a3b8" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <CheckCircle2 size={14} color="#22c55e" /> Full Source Code (Next.js / TypeScript / Tailwind)
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <CheckCircle2 size={14} color="#22c55e" /> Database Schemas &amp; Admin Dashboard CMS
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <CheckCircle2 size={14} color="#22c55e" /> Step-by-Step Setup &amp; Deployment Guide
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <CheckCircle2 size={14} color="#22c55e" /> Commercial License (Use for personal or client work)
                </li>
              </ul>
            </div>

            {/* Direct Buy Buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href={`https://wa.me/252619051885?text=${encodeURIComponent(
                  `Asc Cabdi Naafac! Waxaan rabaa inaan iibsado: "${selectedProject.title}" ($${selectedProject.price || 15} USD) via EVC Plus / Zaad / Sahal / Card.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "13px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, #25d366, #16a34a)",
                  color: "#ffffff",
                  fontWeight: 800,
                  fontSize: "0.92rem",
                  textDecoration: "none",
                  boxShadow: "0 6px 20px rgba(37, 211, 102, 0.35)",
                }}
              >
                <MessageSquare size={18} />
                <span>Ku Iibso EVC Plus / Zaad / WhatsApp</span>
              </a>

              <a
                href={`mailto:cabdinaafacmaxamedrashiid237@gmail.com?subject=${encodeURIComponent(
                  `Inquiry: Purchase ${selectedProject.title}`
                )}&body=${encodeURIComponent(
                  `Asc Cabdi Naafac, I would like to purchase "${selectedProject.title}" ($${selectedProject.price || 15}). Please send me the payment details.`
                )}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "11px",
                  borderRadius: "14px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  color: "#cbd5e1",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  textDecoration: "none",
                }}
              >
                <CreditCard size={15} />
                <span>Card / International Inquiry (Email)</span>
              </a>
            </div>

            <div style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.75rem", color: "#64748b" }}>
              Mobile Money Number: <strong style={{ color: "#94a3b8" }}>+252 619 051 885</strong> (Cabdi Naafac)
            </div>
          </div>
        </div>
      )}

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
