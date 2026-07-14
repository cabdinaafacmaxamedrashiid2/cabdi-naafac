"use client";
import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    projectTitle: "E-Commerce Platform",
    projectIcon: "🛍️",
    name: "Ahmed Hassan",
    role: "CEO, Somalia Digital Agency",
    avatar: "🧑‍💼",
    text: "Cabdi delivered an outstanding e-commerce platform that exceeded all our expectations. His attention to detail, clean code, and professional communication made the entire process seamless. Highly recommended!",
    rating: 5,
    color: "#3b82f6",
  },
  {
    projectTitle: "Coffee Shop Application",
    projectIcon: "☕",
    name: "Faadumo Yusuf",
    role: "Owner, Kafi Coffee Shop",
    avatar: "👩‍🍳",
    text: "Working with Cabdi on our coffee ordering application was a game-changer. The app has a beautiful design, works perfectly on mobile devices, and has significantly boosted our online customer sales.",
    rating: 5,
    color: "#d97706",
  },
  {
    projectTitle: "Smart Livestock Vaccination App",
    projectIcon: "🐄",
    name: "Mohamed Ali",
    role: "Founder, AgriTech Africa",
    avatar: "👨‍🌾",
    text: "The livestock vaccination app Cabdi built revolutionized how we track and manage animal health in our region. It's intuitive, fast, and exactly what our farmers needed.",
    rating: 5,
    color: "#8b5cf6",
  },
  {
    projectTitle: "Face Recognition Attendance",
    projectIcon: "👁️",
    name: "Dr. Sahra Ibrahim",
    role: "Director, Somali University",
    avatar: "👩‍🎓",
    text: "The face recognition attendance system Cabdi developed has saved us countless hours of manual work. Students and staff love how seamless and accurate it is. Brilliant work!",
    rating: 5,
    color: "#f59e0b",
  },
  {
    projectTitle: "Library Management System",
    projectIcon: "📚",
    name: "Khalid Omar",
    role: "Library Director",
    avatar: "📖",
    text: "Our library management system is a complete transformation from our old paper-based process. Cabdi's solution is modern, user-friendly, and has significantly improved our operations.",
    rating: 5,
    color: "#22c55e",
  },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const auto = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(auto);
  }, []);

  const visible3 = [
    testimonials[current % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section
      id="testimonials"
      style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #0a1628, #020817)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="glow-orb"
        style={{
          width: 500,
          height: 500,
          background: "rgba(59,130,246,0.07)",
          top: "50%",
          left: "-150px",
          transform: "translateY(-50%)",
        }}
      />

      <div
        ref={ref}
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        <p
          style={{
            textAlign: "center",
            color: "#3b82f6",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontSize: "0.85rem",
            marginBottom: "0.75rem",
          }}
        >
          Project Outcomes
        </p>
        <h2 className="section-title">
          Applications & <span className="gradient-text">Client Impact</span>
        </h2>
        <p className="section-subtitle">
          Real-world success stories of systems custom built for organizations
        </p>

        {/* Testimonial Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            marginBottom: "2rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.6s ease",
          }}
          className="testimonials-grid"
        >
          {visible3.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="glass-card"
              style={{
                padding: "2rem",
                borderRadius: "20px",
                transition: "all 0.5s ease",
                transform: i === 1 ? "scale(1.05)" : "scale(1)",
                borderColor: i === 1 ? `${t.color}40` : "rgba(59,130,246,0.15)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "380px",
              }}
            >
              <div>
                {/* Project Badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: `${t.color}15`,
                    border: `1px solid ${t.color}35`,
                    borderRadius: "50px",
                    padding: "6px 14px",
                    marginBottom: "1.25rem",
                    width: "fit-content",
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }}>{t.projectIcon}</span>
                  <span style={{ color: t.color, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    {t.projectTitle}
                  </span>
                </div>

                {/* Quote Icon */}
                <div
                  style={{
                    fontSize: "3rem",
                    color: t.color,
                    opacity: 0.3,
                    lineHeight: 1,
                    marginBottom: "0.25rem",
                    fontFamily: "serif",
                  }}
                >
                  &ldquo;
                </div>

                <p
                  style={{
                    color: "#cbd5e1",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                    fontStyle: "italic",
                  }}
                >
                  {t.text}
                </p>
              </div>

              <div>
                {/* Stars */}
                <div style={{ display: "flex", gap: "3px", marginBottom: "0.75rem" }}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} color="#f59e0b" fill="#f59e0b" />
                  ))}
                </div>

                {/* Client info */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: `${t.color}20`,
                      border: `2px solid ${t.color}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: "#e2e8f0", fontSize: "0.85rem" }}>
                      {t.name}
                    </div>
                    <div style={{ color: t.color, fontSize: "0.75rem", fontWeight: 500 }}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <button
            onClick={() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)}
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.25)",
              color: "#60a5fa",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <div style={{ display: "flex", gap: "8px" }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: current === i ? 24 : 8,
                  height: 8,
                  borderRadius: "4px",
                  background: current === i ? "#3b82f6" : "rgba(59,130,246,0.3)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrent((p) => (p + 1) % testimonials.length)}
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.25)",
              color: "#60a5fa",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        {/* Tools & Integrations Grid */}
        <div
          style={{
            marginTop: "4rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease 0.3s",
          }}
        >
          <p
            style={{
              textAlign: "center",
              color: "#3b82f6",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              marginBottom: "0.75rem",
            }}
          >
            Tools & Integrations
          </p>
          <h3
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#e2e8f0",
              marginBottom: "0.75rem",
            }}
          >
            Platforms I Work <span className="gradient-text">With</span>
          </h3>
          <p
            style={{
              textAlign: "center",
              color: "#64748b",
              fontSize: "0.9rem",
              marginBottom: "2.5rem",
            }}
          >
            Industry tools and platforms I use to build and deliver solutions
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "1.5rem",
            }}
            className="tools-grid"
          >
            {[
              {
                name: "Flutter",
                color: "#54C5F8",
                svg: (
                  <svg viewBox="0 0 48 48" width="40" height="40"><path fill="#54C5F8" d="M26.2 8H13.5L2 20l8.3 8.3L26.2 8z"/><path fill="#01579B" d="M13.5 40h12.7l14-14-8.3-8.3L13.5 40z"/><path fill="#29B6F6" d="M26.2 40L10.3 24.1l4-4L30.2 36 26.2 40z"/></svg>
                ),
              },
              {
                name: "Google Ads",
                color: "#FBBC04",
                svg: (
                  <svg viewBox="0 0 48 48" width="40" height="40"><circle cx="34" cy="34" r="10" fill="#FBBC04"/><circle cx="14" cy="34" r="10" fill="#0D652D"/><circle cx="24" cy="16" r="10" fill="#1A73E8"/></svg>
                ),
              },
              {
                name: "AdMob",
                color: "#EA4335",
                svg: (
                  <svg viewBox="0 0 48 48" width="40" height="40"><circle cx="24" cy="24" r="20" fill="#EA433520"/><path d="M24 8C15.2 8 8 15.2 8 24s7.2 16 16 16 16-7.2 16-16S32.8 8 24 8zm0 10c1.7 0 3 1.3 3 3v6h-6v-6c0-1.7 1.3-3 3-3zm6 14H18v-2h12v2z" fill="#EA4335"/></svg>
                ),
              },
              {
                name: "Google Marketing Platform",
                color: "#4285F4",
                svg: (
                  <svg viewBox="0 0 48 48" width="40" height="40"><circle cx="24" cy="24" r="20" fill="#4285F420"/><path d="M24 12a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 4a8 8 0 1 1 0 16A8 8 0 0 1 24 16z" fill="#4285F4"/><circle cx="24" cy="24" r="4" fill="#4285F4"/></svg>
                ),
              },
              {
                name: "Google Play",
                color: "#01875F",
                svg: (
                  <svg viewBox="0 0 48 48" width="40" height="40"><path fill="#4CAF50" d="M10 8.7 30.8 24 10 39.3V8.7z"/><path fill="#F44336" d="M10 8.7l14.2 14.2-4.1 4.1L10 8.7z"/><path fill="#FFC107" d="M10 39.3l14.1-14.1 4.1 4.1L10 39.3z"/><path fill="#2196F3" d="M30.8 24 38 28.1l-7.2 4.1V24z"/></svg>
                ),
              },
              {
                name: "Looker Studio",
                color: "#EA4335",
                svg: (
                  <svg viewBox="0 0 48 48" width="40" height="40"><circle cx="18" cy="28" r="12" fill="none" stroke="#EA4335" strokeWidth="4"/><circle cx="18" cy="28" r="6" fill="#EA4335" opacity="0.3"/><path d="M26 20 38 10" stroke="#4285F4" strokeWidth="4" strokeLinecap="round"/></svg>
                ),
              },
              {
                name: "BigQuery",
                color: "#4285F4",
                svg: (
                  <svg viewBox="0 0 48 48" width="40" height="40"><ellipse cx="24" cy="24" rx="18" ry="18" fill="#4285F420"/><ellipse cx="24" cy="24" rx="12" ry="12" fill="none" stroke="#4285F4" strokeWidth="3"/><path d="M30 30 38 38" stroke="#34A853" strokeWidth="4" strokeLinecap="round"/></svg>
                ),
              },
              {
                name: "Slack",
                color: "#E01E5A",
                svg: (
                  <svg viewBox="0 0 48 48" width="40" height="40"><rect x="6" y="18" width="8" height="14" rx="4" fill="#E01E5A"/><rect x="18" y="6" width="14" height="8" rx="4" fill="#36C5F0"/><rect x="34" y="18" width="8" height="14" rx="4" fill="#2EB67D"/><rect x="18" y="34" width="14" height="8" rx="4" fill="#ECB22E"/><circle cx="20" cy="20" r="4" fill="#E01E5A" opacity="0.5"/><circle cx="28" cy="28" r="4" fill="#2EB67D" opacity="0.5"/></svg>
                ),
              },
              {
                name: "Jira",
                color: "#2684FF",
                svg: (
                  <svg viewBox="0 0 48 48" width="40" height="40"><path d="M24 6L6 24l8 8 10-10 10 10 8-8L24 6z" fill="#2684FF"/><path d="M24 24L14 34l10 10 10-10L24 24z" fill="#2684FF" opacity="0.5"/></svg>
                ),
              },
              {
                name: "Android Studio",
                color: "#3DDC84",
                svg: (
                  <svg viewBox="0 0 48 48" width="40" height="40"><path d="M10 30a14 14 0 0 1 28 0" fill="none" stroke="#3DDC84" strokeWidth="4" strokeLinecap="round"/><circle cx="17" cy="30" r="3" fill="#3DDC84"/><circle cx="31" cy="30" r="3" fill="#3DDC84"/><path d="M15 18 10 10M33 18l5-8" stroke="#3DDC84" strokeWidth="3" strokeLinecap="round"/><rect x="14" y="30" width="20" height="12" rx="4" fill="#3DDC8440"/></svg>
                ),
              },
            ].map((tool) => (
              <div
                key={tool.name}
                className="glass-card"
                style={{
                  padding: "1.5rem 1rem",
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.75rem",
                  cursor: "default",
                  transition: "all 0.3s ease",
                  border: `1px solid ${tool.color}25`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${tool.color}60`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 10px 30px ${tool.color}20`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${tool.color}25`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "14px",
                    background: `${tool.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {tool.svg}
                </div>
                <span
                  style={{
                    color: "#94a3b8",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    textAlign: "center",
                    lineHeight: 1.3,
                  }}
                >
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .tools-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .testimonials-grid { display: none !important; }
          .tools-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .tools-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
