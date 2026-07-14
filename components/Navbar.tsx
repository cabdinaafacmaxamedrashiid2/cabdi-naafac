"use client";
import { useState, useEffect } from "react";
import { Menu, X, Code2, Sun, Moon } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of sections.reverse()) {
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

  useEffect(() => {
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(2, 8, 23, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(59, 130, 246, 0.15)"
          : "none",
        boxShadow: scrolled
          ? "0 4px 30px rgba(0,0,0,0.5)"
          : "none",
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
        <a
          href="#home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
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
            <img
              src="/profile.jpg"
              alt="Cabdi Nafaac"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
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
            Cabdi Nafaac
          </span>
        </a>

        {/* Desktop Nav */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {navLinks.slice(0, 7).map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color:
                  activeSection === link.href.replace("#", "")
                    ? "#60a5fa"
                    : "#94a3b8",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: 500,
                padding: "6px 12px",
                borderRadius: "8px",
                transition: "all 0.2s",
                background:
                  activeSection === link.href.replace("#", "")
                    ? "rgba(59,130,246,0.12)"
                    : "transparent",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#60a5fa";
                (e.target as HTMLElement).style.background =
                  "rgba(59,130,246,0.1)";
              }}
              onMouseLeave={(e) => {
                if (activeSection !== link.href.replace("#", "")) {
                  (e.target as HTMLElement).style.color = "#94a3b8";
                  (e.target as HTMLElement).style.background = "transparent";
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.2)",
              borderRadius: "50%",
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#60a5fa",
              transition: "all 0.3s",
            }}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* CTA Button */}
          <a
            href="#contact"
            className="btn-primary"
            style={{ fontSize: "0.85rem", padding: "8px 20px" }}
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
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                color:
                  activeSection === link.href.replace("#", "")
                    ? "#60a5fa"
                    : "#94a3b8",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 500,
                padding: "12px 16px",
                borderRadius: "10px",
                transition: "all 0.2s",
                background:
                  activeSection === link.href.replace("#", "")
                    ? "rgba(59,130,246,0.12)"
                    : "transparent",
                display: "block",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .hidden-mobile { display: none !important; }
          #hamburger-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
