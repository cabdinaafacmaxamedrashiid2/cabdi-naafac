"use client";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #0a1628, #020817)",
        borderTop: "1px solid rgba(59, 130, 246, 0.1)",
        padding: "3rem 0 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Top Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "2.5rem",
          }}
          className="footer-top"
        >
          {/* Brand */}
          <div>
            <h3
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                color: "#f8fafc",
                marginBottom: "0.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              Cabdi Naafac
            </h3>
            <p style={{ color: "#64748b", fontSize: "0.9rem", maxWidth: "260px", lineHeight: 1.7 }}>
              Full Stack Developer from Mogadishu, Somalia. Building modern web & mobile apps.
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <h4 style={{ color: "#94a3b8", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
              Navigation
            </h4>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem 2rem" }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: "#64748b",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#3b82f6")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 style={{ color: "#94a3b8", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
              Connect
            </h4>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 42,
                  height: 42,
                  borderRadius: "12px",
                  background: "rgba(24, 119, 242, 0.08)",
                  border: "1px solid rgba(24, 119, 242, 0.2)",
                  color: "#94a3b8",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#1877f2";
                  e.currentTarget.style.borderColor = "#1877f2";
                  e.currentTarget.style.background = "rgba(24, 119, 242, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#94a3b8";
                  e.currentTarget.style.borderColor = "rgba(24, 119, 242, 0.2)";
                  e.currentTarget.style.background = "rgba(24, 119, 242, 0.08)";
                }}
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 42,
                  height: 42,
                  borderRadius: "12px",
                  background: "rgba(59, 130, 246, 0.08)",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                  color: "#94a3b8",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#3b82f6";
                  e.currentTarget.style.borderColor = "#3b82f6";
                  e.currentTarget.style.background = "rgba(59, 130, 246, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#94a3b8";
                  e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.2)";
                  e.currentTarget.style.background = "rgba(59, 130, 246, 0.08)";
                }}
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="https://github.com/cabdinaafacmaxamedrashiid2"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 42,
                  height: 42,
                  borderRadius: "12px",
                  background: "rgba(59, 130, 246, 0.08)",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                  color: "#94a3b8",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#3b82f6";
                  e.currentTarget.style.borderColor = "#3b82f6";
                  e.currentTarget.style.background = "rgba(59, 130, 246, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#94a3b8";
                  e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.2)";
                  e.currentTarget.style.background = "rgba(59, 130, 246, 0.08)";
                }}
              >
                <GithubIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(59, 130, 246, 0.1)", marginBottom: "1.5rem" }} />

        {/* Bottom Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ color: "#475569", fontSize: "0.85rem" }}>
            © 2025 <span style={{ color: "#64748b", fontWeight: 600 }}>Cabdi Naafac</span>. All rights reserved.
          </p>
          <p style={{ color: "#475569", fontSize: "0.85rem" }}>
            Built with <span style={{ color: "#3b82f6" }}>♥</span> using Next.js & TypeScript
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column !important;
          }
        }
      `}</style>
    </footer>
  );
}
