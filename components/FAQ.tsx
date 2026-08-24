"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "Who is Cabdi Naafac?",
    a: "Cabdi Naafac is a professional Full Stack Developer & Software Engineer based in Mogadishu, Somalia. He specializes in building high-performance, modern web and mobile applications using React, Next.js, Node.js, and React Native.",
  },
  {
    q: "What is Cabdi Naafac's educational background?",
    a: "Cabdi studied Computer Science at Jazeera University (2021 – 2026). His studies provided him with a strong academic foundation in software engineering principles, algorithms, modern web technologies, and database architecture.",
  },
  {
    q: "What technologies and tech stack does Cabdi specialize in?",
    a: "Cabdi specializes in full-stack JavaScript and TypeScript ecosystems: React.js, Next.js, Node.js, Express.js, and React Native for mobile applications. For data storage, he works proficiently with PostgreSQL, MongoDB, and Firebase.",
  },
  {
    q: "Is Cabdi available for freelance projects or full-time roles?",
    a: "Yes! Cabdi is actively available for freelance contracts, consulting, remote full-time positions, and collaborative tech projects. Whether you are a startup needing an MVP or an established business seeking digital transformation, he can help.",
  },
  {
    q: "How long does it take Cabdi to deliver a typical project?",
    a: "Project timelines depend on scale and requirements: a modern landing page or portfolio usually takes 1–2 weeks, while full-stack web platforms and cross-platform mobile apps take 4–8 weeks with structured milestone deliveries.",
  },
  {
    q: "Does Cabdi provide ongoing maintenance and support after delivery?",
    a: "Yes! Cabdi provides continuous technical support, bug fixing, performance optimization, and feature enhancements after project launch to ensure everything runs smoothly and securely.",
  },
  {
    q: "How can clients and recruiters get in touch with Cabdi Naafac?",
    a: "You can reach out directly via WhatsApp at +252 619 051 885, by email at cabdinaafacmaxamedrashiid237@gmail.com, or through the contact form on this website. Cabdi typically responds within 24 hours.",
  },
];

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

  return (
    <section
      id="faq"
      style={{
        padding: "100px 0",
        background: "transparent",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="glow-orb"
        style={{
          width: 400,
          height: 400,
          background: "rgba(139,92,246,0.07)",
          top: "30%",
          right: "-100px",
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
          Common Questions
        </p>
        <h2 className="section-title">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
        <p className="section-subtitle">
          Everything you need to know before we work together
        </p>

        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                marginBottom: "1rem",
                borderRadius: "16px",
                overflow: "hidden",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.5s ease ${i * 0.07}s`,
                borderColor: openIndex === i ? "rgba(59,130,246,0.35)" : "rgba(59,130,246,0.15)",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  padding: "1.5rem",
                  background: openIndex === i ? "rgba(59,130,246,0.08)" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "1rem",
                  textAlign: "left",
                  transition: "background 0.3s",
                  fontFamily: "Poppins, sans-serif",
                }}
                aria-expanded={openIndex === i}
                id={`faq-btn-${i}`}
              >
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: openIndex === i ? "#60a5fa" : "#e2e8f0",
                    transition: "color 0.3s",
                  }}
                >
                  {faq.q}
                </span>
                <div
                  style={{
                    flexShrink: 0,
                    width: 32,
                    height: 32,
                    borderRadius: "8px",
                    background: openIndex === i ? "rgba(59,130,246,0.2)" : "rgba(255,255,255,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: openIndex === i ? "#60a5fa" : "#64748b",
                    transition: "all 0.3s",
                  }}
                >
                  {openIndex === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </button>

              {openIndex === i && (
                <div
                  style={{
                    padding: "0 1.5rem 1.5rem",
                    color: "#94a3b8",
                    fontSize: "0.92rem",
                    lineHeight: 1.75,
                    borderTop: "1px solid rgba(59,130,246,0.1)",
                    paddingTop: "1rem",
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
