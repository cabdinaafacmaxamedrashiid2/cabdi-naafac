"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Briefcase, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isStore = pathname === "/store" || pathname === "/projects";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(10, 15, 30, 0.9)" : "rgba(10, 15, 30, 0.6)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(59, 130, 246, 0.15)",
        boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.5)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1140px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Left: Brand / Profile */}
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
              width: 38,
              height: 38,
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid rgba(59,130,246,0.6)",
              boxShadow: "0 0 15px rgba(59,130,246,0.4)",
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
              fontSize: "1.2rem",
              fontWeight: 800,
              background: "linear-gradient(135deg, #60a5fa, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.01em",
            }}
          >
            Cabdi Naafac
          </span>
        </Link>

        {/* Center: The Two Dedicated Pages (1. Portfolio & 2. Project Store) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(15, 23, 42, 0.75)",
            backdropFilter: "blur(12px)",
            padding: "4px 6px",
            borderRadius: "50px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
          className="hidden-mobile"
        >
          {/* 1. PORTFOLIO PAGE */}
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "9px 24px",
              borderRadius: "50px",
              textDecoration: "none",
              fontSize: "0.92rem",
              fontWeight: 700,
              color: !isStore ? "#38bdf8" : "#94a3b8",
              background: !isStore ? "rgba(56, 189, 248, 0.18)" : "transparent",
              border: !isStore ? "1px solid rgba(56, 189, 248, 0.35)" : "1px solid transparent",
              boxShadow: !isStore ? "0 0 18px rgba(56, 189, 248, 0.25)" : "none",
              transition: "all 0.25s ease",
            }}
          >
            <Briefcase size={17} />
            <span>Portfolio</span>
          </Link>

          {/* 2. DEDICATED PROJECT STORE PAGE */}
          <Link
            href="/store"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "9px 24px",
              borderRadius: "50px",
              textDecoration: "none",
              fontSize: "0.92rem",
              fontWeight: 700,
              color: isStore ? "#facc15" : "#94a3b8",
              background: isStore ? "rgba(234, 179, 8, 0.18)" : "transparent",
              border: isStore ? "1px solid rgba(234, 179, 8, 0.35)" : "1px solid transparent",
              boxShadow: isStore ? "0 0 18px rgba(234, 179, 8, 0.25)" : "none",
              transition: "all 0.25s ease",
            }}
          >
            <ShoppingBag size={17} />
            <span>Project Store</span>
          </Link>
        </div>

        {/* Right: Contact / Hire Me Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Link
            href="/#contact"
            style={{
              padding: "8px 22px",
              borderRadius: "30px",
              border: "1.5px solid #00f7ff",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "0.82rem",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "1px",
              transition: "all 0.3s ease",
              boxShadow: "0 0 12px rgba(0, 247, 255, 0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#00f7ff";
              e.currentTarget.style.color = "#0d0d1a";
              e.currentTarget.style.boxShadow = "0 0 22px rgba(0, 247, 255, 0.6)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.boxShadow = "0 0 12px rgba(0, 247, 255, 0.25)";
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

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          style={{
            background: "rgba(10, 15, 30, 0.98)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(59,130,246,0.15)",
            padding: "1.25rem 1rem",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: !isStore ? "#38bdf8" : "#cbd5e1",
              textDecoration: "none",
              fontSize: "1.05rem",
              fontWeight: 700,
              padding: "12px 16px",
              borderRadius: "12px",
              background: !isStore ? "rgba(56, 189, 248, 0.15)" : "transparent",
            }}
          >
            <Briefcase size={18} />
            <span>1. Portfolio</span>
          </Link>

          <Link
            href="/store"
            onClick={() => setIsOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: isStore ? "#facc15" : "#cbd5e1",
              textDecoration: "none",
              fontSize: "1.05rem",
              fontWeight: 700,
              padding: "12px 16px",
              borderRadius: "12px",
              background: isStore ? "rgba(234, 179, 8, 0.15)" : "transparent",
            }}
          >
            <ShoppingBag size={18} />
            <span>2. Project Store</span>
          </Link>

          <Link
            href="/#contact"
            onClick={() => setIsOpen(false)}
            style={{
              marginTop: "0.5rem",
              padding: "12px",
              borderRadius: "30px",
              border: "1.5px solid #00f7ff",
              background: "transparent",
              color: "#ffffff",
              fontWeight: 700,
              textAlign: "center",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
            }}
          >
            Hire Me
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .hidden-mobile { display: none !important; }
          #hamburger-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
