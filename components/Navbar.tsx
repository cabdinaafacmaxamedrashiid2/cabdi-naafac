"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const mainLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const megaMenu = [
  {
    heading: "ABOUT ME",
    items: [
      { label: "About", href: "#about", desc: "Who I am" },
      { label: "Experience", href: "#experience", desc: "Skills & stack" },
      { label: "Education", href: "#education", desc: "My background" },
    ],
  },
  {
    heading: "WORK",
    items: [
      { label: "Library App", href: "#projects", desc: "Management system" },
      { label: "Livestock App", href: "#projects", desc: "Smart farming" },
      { label: "Face Recognition", href: "#projects", desc: "AI & biometrics" },
    ],
  },
  {
    heading: "CONNECT",
    items: [
      { label: "GitHub", href: "https://github.com/cabdinaafacmaxamedrashiid2", desc: "View my code" },
      { label: "LinkedIn", href: "https://linkedin.com", desc: "Professional network" },
      { label: "Contact Me", href: "#contact", desc: "Get in touch" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "about", "projects", "experience", "education", "contact"];
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.4s ease",
        background: scrolled ? "rgba(2, 8, 23, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(59, 130, 246, 0.15)" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid rgba(59,130,246,0.5)",
              boxShadow: "0 0 20px rgba(59,130,246,0.4)",
              flexShrink: 0,
            }}
          >
            <img src="/profile.jpg" alt="Cabdi Naafac" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <span
            style={{
              fontSize: "1.25rem",
              fontWeight: 800,
              background: "linear-gradient(135deg, #60a5fa, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Cabdi Naafac
          </span>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: "flex", gap: "0.25rem", alignItems: "center" }} className="hidden-mobile">
          {mainLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: activeSection === link.href.replace("#", "") ? "#60a5fa" : "#94a3b8",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 500,
                padding: "6px 14px",
                borderRadius: "8px",
                transition: "all 0.2s",
                background: activeSection === link.href.replace("#", "") ? "rgba(59,130,246,0.12)" : "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#60a5fa";
                (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.1)";
              }}
              onMouseLeave={(e) => {
                if (activeSection !== link.href.replace("#", "")) {
                  (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }
              }}
            >
              {link.label}
            </a>
          ))}

          {/* Mega Menu Trigger */}
          <div style={{ position: "relative" }} onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                color: megaOpen ? "#60a5fa" : "#94a3b8",
                background: megaOpen ? "rgba(59,130,246,0.1)" : "transparent",
                border: "none",
                fontSize: "0.875rem",
                fontWeight: 500,
                padding: "6px 14px",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              More
              <ChevronDown size={14} style={{ transform: megaOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
            </button>

            {/* Mega Dropdown */}
            {megaOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "rgba(10, 22, 40, 0.98)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 200px)",
                  gap: "0.5rem 2rem",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                  zIndex: 999,
                  animation: "fadeInDown 0.2s ease",
                }}
              >
                {megaMenu.map((group) => (
                  <div key={group.heading}>
                    <p style={{ color: "#475569", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
                      {group.heading}
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                      {group.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setMegaOpen(false)}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "8px 10px",
                            borderRadius: "8px",
                            textDecoration: "none",
                            transition: "background 0.2s",
                            cursor: "pointer",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(59,130,246,0.08)")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                        >
                          <span style={{ color: "#e2e8f0", fontSize: "0.875rem", fontWeight: 600 }}>{item.label}</span>
                          <span style={{ color: "#64748b", fontSize: "0.78rem", marginTop: "1px" }}>{item.desc}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <a
            href="#contact"
            style={{
              padding: "8px 20px",
              borderRadius: "30px",
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.85rem",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            className="hidden-mobile"
          >
            Hire Me
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.2)",
              borderRadius: "8px",
              width: 40,
              height: 40,
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#60a5fa",
            }}
            id="hamburger-btn"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          style={{
            background: "rgba(2, 8, 23, 0.97)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(59,130,246,0.15)",
            padding: "1rem",
          }}
        >
          {[...mainLinks, { label: "Experience", href: "#experience" }, { label: "Education", href: "#education" }, { label: "FAQ", href: "#faq" }].map((link) => (
            <a
              key={link.href + link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                color: activeSection === link.href.replace("#", "") ? "#60a5fa" : "#94a3b8",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 500,
                padding: "12px 16px",
                borderRadius: "10px",
                transition: "all 0.2s",
                background: activeSection === link.href.replace("#", "") ? "rgba(59,130,246,0.12)" : "transparent",
                display: "block",
                marginBottom: "2px",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            style={{
              display: "block",
              margin: "0.75rem 0.5rem 0",
              padding: "12px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              color: "#fff",
              fontWeight: 600,
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            Hire Me
          </a>
        </div>
      )}

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @media (max-width: 1024px) {
          .hidden-mobile { display: none !important; }
          #hamburger-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
