"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "What technologies do you specialize in?",
    a: "I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js), React Native for mobile apps, TypeScript, and Python for AI/ML projects. I'm always learning and adapting to new technologies.",
  },
  {
    q: "Do you take freelance projects?",
    a: "Yes! I'm actively available for freelance projects — from small business websites to complex enterprise applications. Feel free to reach out via the contact form to discuss your project.",
  },
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary depending on complexity. A simple landing page might take 1-2 weeks, while a full-stack web application could take 4-12 weeks. I'll provide a detailed timeline estimate during our initial consultation.",
  },
  {
    q: "Do you provide ongoing maintenance and support?",
    a: "Absolutely! I offer post-launch maintenance, bug fixes, feature updates, and technical support. We can discuss a suitable maintenance plan based on your needs.",
  },
  {
    q: "Can you work with existing codebases?",
    a: "Yes, I'm experienced in reviewing, refactoring, and extending existing codebases. Whether you need performance optimization, bug fixes, or new feature development, I can adapt to your current tech stack.",
  },
  {
    q: "What is your development process?",
    a: "I follow an agile development approach: discovery & planning → design & prototyping → development → testing & QA → deployment → support. I keep clients informed at every stage with regular updates.",
  },
  {
    q: "Do you build mobile apps?",
    a: "Yes! I build cross-platform mobile applications using React Native, which allows me to deliver iOS and Android apps from a single codebase, saving time and cost while maintaining quality.",
  },
  {
    q: "How do I get started working with you?",
    a: "Simply reach out through my contact form, email, or phone. Tell me about your project, goals, and timeline. I'll respond within 24 hours with next steps and a free consultation.",
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
        background: "linear-gradient(180deg, #020817, #0a1628)",
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
