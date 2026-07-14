"use client";
import { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowDown,
  Download,
  Eye,
  Terminal,
} from "lucide-react";

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 2.9 2.9 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const TiktokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const WhatsappIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.007a9.86 9.86 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
  </svg>
);

const titles = [
  "Full Stack Developer",
  "React Native Developer",
  "Node.js Engineer",
  "UI/UX Enthusiast",
  "Problem Solver",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const charRef = useRef(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charRef.current <= currentTitle.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, charRef.current));
        charRef.current++;
      }, 80);
    } else if (!isDeleting && charRef.current > currentTitle.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charRef.current > 0) {
      timeout = setTimeout(() => {
        charRef.current--;
        setDisplayText(currentTitle.slice(0, charRef.current));
      }, 40);
    } else if (isDeleting && charRef.current === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #020817 0%, #0a1628 50%, #020817 100%)",
      }}
      className="bg-grid"
    >
      {/* Glow Orbs */}
      <div
        className="glow-orb"
        style={{
          width: 600,
          height: 600,
          background: "rgba(29, 78, 216, 0.15)",
          top: "-200px",
          right: "-100px",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 400,
          height: 400,
          background: "rgba(6, 182, 212, 0.1)",
          bottom: "-100px",
          left: "-100px",
        }}
      />

      <div
        style={{
          maxWidth: "1140px",
          margin: "0 auto",
          padding: "120px 2.5rem 80px",
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: "3rem",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
        className="hero-grid"
      >
        {/* Left - Content */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-60px)",
            transition: "all 0.8s ease",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(59,130,246,0.12)",
              border: "1px solid rgba(59,130,246,0.25)",
              borderRadius: "50px",
              padding: "8px 18px",
              marginBottom: "1.5rem",
              fontSize: "0.85rem",
              color: "#60a5fa",
              fontWeight: 500,
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 8px #22c55e" }} />
            Available for Work
          </div>

          {/* Main Heading */}
          <h1
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Cabdi Nafaac</span> 👋
          </h1>

          {/* Typewriter */}
          <div
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
              fontWeight: 600,
              color: "#94a3b8",
              marginBottom: "1.5rem",
              minHeight: "2rem",
              display: "flex",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <Terminal size={22} color="#3b82f6" />
            <span style={{ marginLeft: "10px", color: "#e2e8f0" }}>
              {displayText}
            </span>
            <span
              className="cursor-blink"
              style={{ color: "#3b82f6", fontWeight: 300 }}
            >
              |
            </span>
          </div>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "1rem",
              color: "#60a5fa",
              fontWeight: 600,
              marginBottom: "1rem",
            }}
          >
            Full Stack Developer | Problem Solver | Lifelong Learner
          </p>

          {/* Description */}
          <p
            style={{
              fontSize: "0.95rem",
              color: "#94a3b8",
              lineHeight: 1.7,
              marginBottom: "2rem",
              maxWidth: "500px",
            }}
          >
            I build modern web and mobile applications with a focus on
            performance, security, and great user experience. Passionate about
            creating scalable digital solutions that make a real impact.
          </p>

          {/* Social Links */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginBottom: "2rem",
              flexWrap: "wrap",
            }}
          >
            {[
              {
                icon: <FacebookIcon size={18} />,
                label: "Facebook",
                href: "https://facebook.com",
                color: "#1877f2",
              },
              {
                icon: <YoutubeIcon size={18} />,
                label: "YouTube",
                href: "https://youtube.com",
                color: "#ff0000",
              },
              {
                icon: <TiktokIcon size={18} />,
                label: "TikTok",
                href: "https://tiktok.com",
                color: "#00f2fe",
              },
              {
                icon: <InstagramIcon size={18} />,
                label: "Instagram",
                href: "https://instagram.com",
                color: "#e1306c",
              },
              {
                icon: <WhatsappIcon size={18} />,
                label: "WhatsApp",
                href: "https://wa.me/252610000000",
                color: "#25d366",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 44,
                  height: 44,
                  borderRadius: "12px",
                  background: "rgba(59,130,246,0.08)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  color: "#94a3b8",
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = social.color;
                  (e.currentTarget as HTMLElement).style.borderColor =
                    social.color;
                  (e.currentTarget as HTMLElement).style.background = `${social.color}15`;
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(59,130,246,0.2)";
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(59,130,246,0.08)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                }}
              >
                {social.icon}
              </a>
            ))}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: "#94a3b8",
                fontSize: "0.85rem",
              }}
            >
              <MapPin size={15} color="#3b82f6" />
              Mogadishu, Somalia
            </div>
          </div>


        </div>

        {/* Right - Profile Image */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(60px)",
            transition: "all 0.8s ease 0.2s",
          }}
        >
          <div
            style={{ position: "relative", width: 280, height: 280 }}
            className="animate-float"
          >
            {/* Outer Ring */}
            <div
              style={{
                position: "absolute",
                inset: -15,
                borderRadius: "50%",
                border: "2px solid transparent",
                borderTopColor: "#3b82f6",
                borderRightColor: "#06b6d4",
                animation: "spin-slow 8s linear infinite",
              }}
              className="animate-spin-slow"
            />
            {/* Inner Ring */}
            <div
              style={{
                position: "absolute",
                inset: -6,
                borderRadius: "50%",
                border: "1px dashed rgba(59,130,246,0.3)",
              }}
            />
            {/* Profile Image Container */}
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                boxShadow: "0 0 45px rgba(59,130,246,0.3)",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
                border: "4px solid rgba(59,130,246,0.2)",
              }}
              onClick={() => setShowInfoModal(true)}
            >
              {/* Profile Image */}
              <img
                src="/profile.jpg"
                alt="Cabdi Nafaac"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>

            {/* Floating Badges */}
            <div
              style={{
                position: "absolute",
                top: "10%",
                right: "-5%",
                background: "rgba(10,22,40,0.9)",
                border: "1px solid rgba(59,130,246,0.3)",
                borderRadius: "12px",
                padding: "8px 12px",
                fontSize: "0.75rem",
                color: "#60a5fa",
                fontWeight: 600,
                backdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                whiteSpace: "nowrap",
              }}
            >
              ⚡ Full Stack Dev
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "15%",
                left: "-10%",
                background: "rgba(10,22,40,0.9)",
                border: "1px solid rgba(6,182,212,0.3)",
                borderRadius: "12px",
                padding: "8px 12px",
                fontSize: "0.75rem",
                color: "#06b6d4",
                fontWeight: 600,
                backdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                whiteSpace: "nowrap",
              }}
            >
              🇸🇴 Somalia
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          color: "#475569",
          textDecoration: "none",
          fontSize: "0.8rem",
          animation: "float 2s ease-in-out infinite",
          zIndex: 1,
        }}
      >
        <span>Scroll Down</span>
        <ArrowDown size={18} />
      </a>

      {/* Interactive Info Modal */}
      {showInfoModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            background: "rgba(2, 8, 23, 0.85)",
            backdropFilter: "blur(8px)",
            animation: "fadeIn 0.3s ease-out forwards",
          }}
          onClick={() => setShowInfoModal(false)}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #0a1628 0%, #030a17 100%)",
              border: "1px solid rgba(59, 130, 246, 0.25)",
              borderRadius: "24px",
              padding: "2.5rem 2rem",
              maxWidth: "520px",
              width: "100%",
              boxShadow: "0 25px 70px rgba(0, 0, 0, 0.8)",
              position: "relative",
              animation: "slideUp 0.3s ease-out forwards",
              color: "#e2e8f0",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowInfoModal(false)}
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#94a3b8",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(239, 68, 68, 0.15)";
                e.currentTarget.style.color = "#ef4444";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.color = "#94a3b8";
              }}
            >
              ✕
            </button>

            {/* Modal Body */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  border: "3px solid #3b82f6",
                  overflow: "hidden",
                  marginBottom: "1.25rem",
                  boxShadow: "0 10px 25px rgba(59,130,246,0.3)",
                }}
              >
                <img
                  src="/profile.jpg"
                  alt="Cabdi Nafaac"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f8fafc", marginBottom: "0.25rem" }}>
                Cabdi Nafaac
              </h3>
              <p style={{ color: "#3b82f6", fontWeight: 600, fontSize: "0.9rem", marginBottom: "1.25rem" }}>
                Full Stack & Mobile Developer
              </p>

              <div
                style={{
                  width: "100%",
                  height: "1px",
                  background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.25), transparent)",
                  marginBottom: "1.25rem",
                }}
              />

              {/* Bio Details */}
              <div style={{ width: "100%", textAlign: "left", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#3b82f6", fontWeight: 700, minWidth: "90px", fontSize: "0.9rem" }}>Location:</span>
                  <span style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>Mogadishu, Somalia</span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#3b82f6", fontWeight: 700, minWidth: "90px", fontSize: "0.9rem" }}>Education:</span>
                  <span style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>Bachelor in Computer Science</span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#3b82f6", fontWeight: 700, minWidth: "90px", fontSize: "0.9rem" }}>Experience:</span>
                  <span style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>3+ Years in Professional Dev</span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#3b82f6", fontWeight: 700, minWidth: "90px", fontSize: "0.9rem" }}>Interests:</span>
                  <span style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>Artificial Intelligence, Mobile Apps, Scalable Databases</span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#3b82f6", fontWeight: 700, minWidth: "90px", fontSize: "0.9rem" }}>Tech Stack:</span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "2px" }}>
                    {["React", "React Native", "TypeScript", "Node.js", "Express", "PostgreSQL", "MongoDB"].map((tech) => (
                      <span
                        key={tech}
                        style={{
                          background: "rgba(59,130,246,0.1)",
                          border: "1px solid rgba(59,130,246,0.2)",
                          color: "#60a5fa",
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          padding: "2px 8px",
                          borderRadius: "50px",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "1px",
                  background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.25), transparent)",
                  margin: "1.25rem 0",
                }}
              />

              <p style={{ color: "#94a3b8", fontSize: "0.85rem", fontStyle: "italic", lineHeight: 1.5 }}>
                "Fusing clean code with user-centric design to build impactful digital solutions."
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            text-align: center;
          }
          .hero-grid > div:last-child {
            order: -1;
          }
          .hero-grid > div:last-child > div {
            width: 250px !important;
            height: 250px !important;
            margin: 0 auto;
          }
          .hero-grid > div:last-child > div img {
            width: 100% !important;
            height: 100% !important;
          }
        }
        @media (max-width: 480px) {
          .hero-grid > div:last-child > div {
            width: 200px !important;
            height: 200px !important;
          }
        }
      `}</style>
    </section>
  );
}
