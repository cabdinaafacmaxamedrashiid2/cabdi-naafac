"use client";
import { useEffect, useRef, useState } from "react";
import { getStoredProjects, ProjectItem } from "@/lib/adminStore";
import {
  Lock,
  ExternalLink,
  CheckCircle2,
  X,
  MessageSquare,
  CreditCard,
  ShieldCheck,
  Zap,
  Search,
} from "lucide-react";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
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
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
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
    const matchesFilter =
      activeFilter === "all"
        ? true
        : activeFilter === "free"
        ? p.tier === "free" || !p.tier
        : p.tier === "premium";

    const matchesSearch =
      searchQuery.trim() === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
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
      title: "All Production Codebases & Templates Bundle",
      description: "Unlock full source code, database setups, and commercial licenses for all current and future projects in the library.",
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
        padding: "40px 0 100px",
        background: "transparent",
        position: "relative",
      }}
    >
      <div
        ref={ref}
        style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        {/* Mobbin-Style Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: "2.5rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.5s ease",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              fontWeight: 800,
              color: "#f4f4f5",
              letterSpacing: "-0.03em",
              marginBottom: "0.5rem",
            }}
          >
            Library
          </h1>
          <p style={{ color: "#a1a1aa", fontSize: "1.05rem", margin: 0 }}>
            Browse real-world web applications &amp; production-ready codebases.
          </p>
        </div>

        {/* Mobbin Search Bar & Filter Controls */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            marginBottom: "2.5rem",
            flexWrap: "wrap",
          }}
        >
          {/* Category Chips */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <button
              onClick={() => setActiveFilter("all")}
              style={{
                padding: "8px 18px",
                borderRadius: "20px",
                background: activeFilter === "all" ? "#f4f4f5" : "rgba(255, 255, 255, 0.05)",
                color: activeFilter === "all" ? "#09090b" : "#a1a1aa",
                fontWeight: 600,
                fontSize: "0.85rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              All Apps ({projectList.length})
            </button>

            <button
              onClick={() => setActiveFilter("free")}
              style={{
                padding: "8px 18px",
                borderRadius: "20px",
                background: activeFilter === "free" ? "#f4f4f5" : "rgba(255, 255, 255, 0.05)",
                color: activeFilter === "free" ? "#09090b" : "#a1a1aa",
                fontWeight: 600,
                fontSize: "0.85rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              🟢 Free Preview ({freeCount})
            </button>

            <button
              onClick={() => setActiveFilter("premium")}
              style={{
                padding: "8px 18px",
                borderRadius: "20px",
                background: activeFilter === "premium" ? "#f4f4f5" : "rgba(255, 255, 255, 0.05)",
                color: activeFilter === "premium" ? "#09090b" : "#a1a1aa",
                fontWeight: 600,
                fontSize: "0.85rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              💎 Pro Templates ({premiumCount})
            </button>
          </div>

          {/* Search Input */}
          <div
            style={{
              position: "relative",
              minWidth: "260px",
              flex: "0 1 320px",
            }}
          >
            <Search
              size={16}
              style={{
                position: "absolute",
                left: 14,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#71717a",
              }}
            />
            <input
              type="text"
              placeholder="Search apps by title or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "9px 14px 9px 38px",
                background: "rgba(24, 24, 27, 0.7)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                color: "#f4f4f5",
                fontSize: "0.85rem",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>
        </div>

        {/* Mobbin Grid of Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "2rem",
            marginBottom: "5rem",
          }}
        >
          {filteredProjects.map((project) => {
            const isPremium = project.tier === "premium";
            const isHovered = hoveredCard === project.id;

            return (
              <div
                key={project.id || project.title}
                style={{
                  borderRadius: "18px",
                  overflow: "hidden",
                  background: "#121215",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s ease, border-color 0.2s ease",
                  position: "relative",
                }}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Screenshot Container with Mobbin Floating Hover Pills */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "230px",
                    overflow: "hidden",
                    background: "#18181b",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                      transform: isHovered ? "scale(1.03)" : "scale(1)",
                    }}
                  />

                  {/* Mobbin Pro / Free Top-Right Tag */}
                  <div
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      zIndex: 5,
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      letterSpacing: "0.04em",
                      background: isPremium ? "#ffffff" : "rgba(10, 10, 12, 0.8)",
                      color: isPremium ? "#09090b" : "#4ade80",
                      border: isPremium ? "none" : "1px solid rgba(74, 222, 128, 0.3)",
                      backdropFilter: "blur(8px)",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
                    }}
                  >
                    {isPremium ? `PRO • $${project.price || 15}` : "FREE"}
                  </div>

                  {/* Mobbin Hover Overlay with Floating Pills (Like User's Screenshot) */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0, 0, 0, 0.45)",
                      backdropFilter: "blur(4px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "12px",
                      opacity: isHovered ? 1 : 0,
                      pointerEvents: isHovered ? "auto" : "none",
                      transition: "opacity 0.2s ease",
                      zIndex: 10,
                      padding: "1rem",
                    }}
                  >
                    {/* Pill 1: Preview */}
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: "10px 20px",
                          borderRadius: "30px",
                          background: "rgba(255, 255, 255, 0.95)",
                          color: "#09090b",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                          transition: "transform 0.15s ease",
                        }}
                      >
                        <ExternalLink size={14} />
                        <span>Preview</span>
                      </a>
                    )}

                    {/* Pill 2: Get Code / Unlock */}
                    {isPremium ? (
                      <button
                        onClick={() => openPurchaseModal(project)}
                        style={{
                          padding: "10px 20px",
                          borderRadius: "30px",
                          background: "#09090b",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                          color: "#f4f4f5",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                        }}
                      >
                        <Lock size={14} />
                        <span>Get Code</span>
                      </button>
                    ) : (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: "10px 20px",
                          borderRadius: "30px",
                          background: "#09090b",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                          color: "#f4f4f5",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                        }}
                      >
                        <GithubIcon size={14} />
                        <span>Free Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Meta */}
                <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#f4f4f5", margin: 0 }}>
                      {project.title}
                    </h3>
                  </div>

                  <p
                    style={{
                      color: "#a1a1aa",
                      fontSize: "0.85rem",
                      lineHeight: 1.5,
                      marginBottom: "1rem",
                      flex: 1,
                    }}
                  >
                    {project.description}
                  </p>

                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: "0.72rem",
                          padding: "2px 8px",
                          borderRadius: "6px",
                          background: "rgba(255, 255, 255, 0.05)",
                          color: "#d4d4d8",
                          fontWeight: 500,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================================================================= */}
        {/* MOBBIN SIGNATURE PAYWALL BANNER (EXACTLY LIKE USER'S SCREENSHOT)   */}
        {/* ================================================================= */}
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            textAlign: "center",
            padding: "4rem 1.5rem 3rem",
            position: "relative",
          }}
        >
          {/* Main Headline */}
          <h2
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              marginBottom: "1rem",
            }}
          >
            Access all production codebases.
          </h2>

          {/* Subtitle */}
          <p
            style={{
              color: "#a1a1aa",
              fontSize: "1.1rem",
              maxWidth: "640px",
              margin: "0 auto 2rem",
              lineHeight: 1.6,
            }}
          >
            Get unlimited access to the full library &amp; pro features from{" "}
            <strong style={{ color: "#ffffff" }}>$15</strong> — cancel anytime.
            EVC Plus, Zaad &amp; Sahal accepted.
          </p>

          {/* Mobbin Signature White Pill Button */}
          <button
            onClick={openBundleModal}
            style={{
              padding: "14px 44px",
              borderRadius: "50px",
              background: "#ffffff",
              color: "#09090b",
              fontWeight: 800,
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 30px rgba(255, 255, 255, 0.2)",
              transition: "transform 0.2s ease, opacity 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.opacity = "0.95";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.opacity = "1";
            }}
          >
            Get Pro
          </button>

          {/* Social Proof Avatars Row (Like Mobbin Screenshot) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginTop: "2.5rem",
              fontSize: "0.85rem",
              color: "#a1a1aa",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop"
                alt="Member"
                style={{ width: 24, height: 24, borderRadius: "50%", border: "2px solid #09090b", marginLeft: "-6px" }}
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop"
                alt="Member"
                style={{ width: 24, height: 24, borderRadius: "50%", border: "2px solid #09090b", marginLeft: "-6px" }}
              />
              <img
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=60&h=60&fit=crop"
                alt="Member"
                style={{ width: 24, height: 24, borderRadius: "50%", border: "2px solid #09090b", marginLeft: "-6px" }}
              />
            </div>
            <span>Supporting developers &amp; founders across Somalia and worldwide</span>
          </div>
        </div>
      </div>

      {/* ================================================================= */}
      {/* CHECKOUT / GET PRO MODAL (INSTANT WHATSAPP EVC PLUS PRE-FILL)    */}
      {/* ================================================================= */}
      {isModalOpen && selectedProject && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(12px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            style={{
              maxWidth: "500px",
              width: "100%",
              borderRadius: "24px",
              padding: "2.25rem 2rem",
              background: "#121215",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
              color: "#f4f4f5",
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
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#a1a1aa",
                cursor: "pointer",
              }}
            >
              <X size={16} />
            </button>

            {/* Modal Content */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  padding: "3px 10px",
                  borderRadius: "6px",
                  background: "#ffffff",
                  color: "#09090b",
                }}
              >
                PRO ACCESS
              </span>
              <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#ffffff" }}>
                ${selectedProject.price || 15} USD
              </span>
            </div>

            <h3 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.5rem" }}>
              {selectedProject.title}
            </h3>
            <p style={{ color: "#a1a1aa", fontSize: "0.88rem", lineHeight: 1.5, marginBottom: "1.5rem" }}>
              {selectedProject.description}
            </p>

            {/* Inclusions */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                borderRadius: "14px",
                padding: "1rem 1.25rem",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                marginBottom: "1.5rem",
              }}
            >
              <div style={{ fontSize: "0.82rem", color: "#f4f4f5", fontWeight: 700, marginBottom: "8px" }}>
                What&apos;s Included:
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.82rem", color: "#a1a1aa" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <CheckCircle2 size={14} color="#4ade80" /> Complete Next.js / TypeScript / React Codebase
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <CheckCircle2 size={14} color="#4ade80" /> Database Schemas &amp; Admin Dashboard CMS
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <CheckCircle2 size={14} color="#4ade80" /> Step-by-Step Setup &amp; Deployment Guide
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <CheckCircle2 size={14} color="#4ade80" /> Commercial License (Personal &amp; Client Projects)
                </li>
              </ul>
            </div>

            {/* Buy Buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href={`https://wa.me/252619051885?text=${encodeURIComponent(
                  `Asc Cabdi Naafac! Waxaan rabaa inaan iibsado: "${selectedProject.title}" ($${selectedProject.price || 15} USD) via EVC Plus / Zaad / Sahal.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "13px",
                  borderRadius: "12px",
                  background: "#22c55e",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "0.92rem",
                  textDecoration: "none",
                }}
              >
                <MessageSquare size={17} />
                <span>Ku Iibso EVC Plus / Zaad / WhatsApp</span>
              </a>

              <a
                href={`mailto:cabdinaafacmaxamedrashiid237@gmail.com?subject=${encodeURIComponent(
                  `Purchase Inquiry: ${selectedProject.title}`
                )}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "11px",
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  color: "#f4f4f5",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  textDecoration: "none",
                }}
              >
                <CreditCard size={15} />
                <span>Card / International Inquiry (Email)</span>
              </a>
            </div>

            <div style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.75rem", color: "#71717a" }}>
              Direct Somali Mobile Money: <strong style={{ color: "#a1a1aa" }}>+252 619 051 885</strong> (Cabdi Naafac)
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
