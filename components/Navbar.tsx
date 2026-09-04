"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Map, BookOpen } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isLibrary = pathname === "/store" || pathname === "/projects";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.25s ease",
        background: scrolled ? "rgba(9, 9, 11, 0.92)" : "rgba(9, 9, 11, 0.75)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "68px",
        }}
      >
        {/* Left: Brand / Profile Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "10px",
              overflow: "hidden",
              border: "1.5px solid rgba(255, 255, 255, 0.15)",
              flexShrink: 0,
            }}
          >
            <img
              src="/profile.jpg"
              alt="Cabdi Naafac"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <span
            style={{
              fontSize: "1.05rem",
              fontWeight: 800,
              color: "#f4f4f5",
              letterSpacing: "-0.02em",
            }}
          >
            Cabdi Naafac
          </span>
        </Link>

        {/* Center: Mobbin-Style Segmented Navigation (Roadmap | Library) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            background: "rgba(24, 24, 27, 0.8)",
            padding: "4px",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
          className="hidden-mobile"
        >
          {/* 1. ROADMAP (PORTFOLIO) */}
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "7px 18px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.88rem",
              fontWeight: 600,
              color: !isLibrary ? "#f4f4f5" : "#a1a1aa",
              background: !isLibrary ? "rgba(255, 255, 255, 0.1)" : "transparent",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              if (isLibrary) e.currentTarget.style.color = "#f4f4f5";
            }}
            onMouseLeave={(e) => {
              if (isLibrary) e.currentTarget.style.color = "#a1a1aa";
            }}
          >
            <Map size={16} />
            <span>Roadmap</span>
          </Link>

          {/* 2. LIBRARY (STORE) */}
          <Link
            href="/store"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "7px 18px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.88rem",
              fontWeight: 600,
              color: isLibrary ? "#f4f4f5" : "#a1a1aa",
              background: isLibrary ? "rgba(255, 255, 255, 0.1)" : "transparent",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              if (!isLibrary) e.currentTarget.style.color = "#f4f4f5";
            }}
            onMouseLeave={(e) => {
              if (!isLibrary) e.currentTarget.style.color = "#a1a1aa";
            }}
          >
            <BookOpen size={16} />
            <span>Library</span>
          </Link>
        </div>

        {/* Right: Mobbin-Style Clean Action Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link
            href="/#contact"
            style={{
              padding: "8px 20px",
              borderRadius: "10px",
              background: "#ffffff",
              color: "#09090b",
              fontWeight: 700,
              fontSize: "0.85rem",
              textDecoration: "none",
              transition: "all 0.2s ease",
              boxShadow: "0 2px 10px rgba(255, 255, 255, 0.15)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.9";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "translateY(0)";
            }}
            className="hidden-mobile"
          >
            Hire Me
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              width: 38,
              height: 38,
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#f4f4f5",
            }}
            id="hamburger-btn"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          style={{
            background: "#09090b",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: !isLibrary ? "#f4f4f5" : "#a1a1aa",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: 600,
              padding: "10px 14px",
              borderRadius: "8px",
              background: !isLibrary ? "rgba(255, 255, 255, 0.08)" : "transparent",
            }}
          >
            <Map size={17} />
            <span>Roadmap</span>
          </Link>

          <Link
            href="/store"
            onClick={() => setIsOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: isLibrary ? "#f4f4f5" : "#a1a1aa",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: 600,
              padding: "10px 14px",
              borderRadius: "8px",
              background: isLibrary ? "rgba(255, 255, 255, 0.08)" : "transparent",
            }}
          >
            <BookOpen size={17} />
            <span>Library</span>
          </Link>

          <Link
            href="/#contact"
            onClick={() => setIsOpen(false)}
            style={{
              marginTop: "0.5rem",
              padding: "10px",
              borderRadius: "8px",
              background: "#ffffff",
              color: "#09090b",
              fontWeight: 700,
              textAlign: "center",
              textDecoration: "none",
              fontSize: "0.9rem",
            }}
          >
            Hire Me
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          #hamburger-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
