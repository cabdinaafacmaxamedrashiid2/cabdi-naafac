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
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .testimonials-grid { display: none !important; }
        }
      `}</style>
    </section>
  );
}
