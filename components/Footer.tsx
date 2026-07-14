"use client";
import { Mail, Heart, Code2, ArrowUp } from "lucide-react";

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
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
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = ({ size = 20 }: { size?: number }) => (
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
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 2.9 2.9 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const TiktokIcon = ({ size = 20 }: { size?: number }) => (
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
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
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
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const WhatsappIcon = ({ size = 20 }: { size?: number }) => (
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
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.007a9.86 9.86 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
  </svg>
);

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

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #020817, #000d1a)",
        borderTop: "1px solid rgba(59,130,246,0.15)",
        padding: "60px 0 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 1,
          background: "linear-gradient(90deg, transparent, #3b82f6, transparent)",
          boxShadow: "0 0 60px 10px rgba(59,130,246,0.2)",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Top Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <a
              href="#home"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                marginBottom: "1.25rem",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
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
                  fontSize: "1.3rem",
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
            <p
              style={{
                color: "#64748b",
                fontSize: "0.9rem",
                lineHeight: 1.75,
                maxWidth: "360px",
                marginBottom: "1.5rem",
              }}
            >
              Full Stack Developer from Mogadishu, Somalia. Building modern web
              and mobile applications that make a difference. Let&apos;s
              collaborate and create something amazing!
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {[
                { icon: <FacebookIcon size={18} />, href: "https://facebook.com", label: "Facebook" },
                { icon: <YoutubeIcon size={18} />, href: "https://youtube.com", label: "YouTube" },
                { icon: <TiktokIcon size={18} />, href: "https://tiktok.com", label: "TikTok" },
                { icon: <InstagramIcon size={18} />, href: "https://instagram.com", label: "Instagram" },
                { icon: <WhatsappIcon size={18} />, href: "https://wa.me/252610000000", label: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "10px",
                    background: "rgba(59,130,246,0.08)",
                    border: "1px solid rgba(59,130,246,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#64748b",
                    textDecoration: "none",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#60a5fa";
                    (e.currentTarget as HTMLElement).style.borderColor = "#3b82f6";
                    (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.15)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#64748b";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.2)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.08)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                color: "#e2e8f0",
                fontWeight: 700,
                marginBottom: "1.25rem",
                fontSize: "1rem",
              }}
            >
              Quick Links
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {navLinks.slice(0, 6).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "#64748b",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    transition: "color 0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#60a5fa")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#64748b")}
                >
                  <span style={{ color: "#3b82f6", fontSize: "0.7rem" }}>▶</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* More Links */}
          <div>
            <h4
              style={{
                color: "#e2e8f0",
                fontWeight: 700,
                marginBottom: "1.25rem",
                fontSize: "1rem",
              }}
            >
              More
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {navLinks.slice(6).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "#64748b",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    transition: "color 0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#60a5fa")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#64748b")}
                >
                  <span style={{ color: "#3b82f6", fontSize: "0.7rem" }}>▶</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(59,130,246,0.1)",
            padding: "1.5rem 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              color: "#475569",
              fontSize: "0.85rem",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            © 2026 Cabdi Nafaac. All Rights Reserved. Made with{" "}
            <Heart size={14} color="#ef4444" fill="#ef4444" /> from Somalia 🇸🇴
          </p>

          <button
            onClick={scrollToTop}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.25)",
              borderRadius: "50px",
              padding: "8px 16px",
              color: "#60a5fa",
              fontSize: "0.82rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s",
              fontFamily: "Poppins, sans-serif",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.2)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.1)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
            Back to Top
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
