"use client";
import { useEffect, useRef, useState } from "react";
import { Globe, Smartphone, Link } from "lucide-react";

const services = [
  {
    icon: <Globe size={26} />,
    title: "Website Development",
    desc: "Building fast, scalable, and SEO-optimized web applications using React, Next.js, and Node.js with modern design patterns.",
    features: ["React / Next.js", "RESTful APIs", "SEO Optimized", "Responsive Design"],
    color: "#3b82f6",
    gradient: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
  },
  {
    icon: <Smartphone size={26} />,
    title: "Mobile App Development",
    desc: "Creating cross-platform mobile applications using React Native that deliver native-like performance on iOS and Android.",
    features: ["React Native", "Cross-Platform", "iOS & Android", "Push Notifications"],
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #7c3aed, #8b5cf6)",
  },
  {
    icon: <Link size={26} />,
    title: "API Integration",
    desc: "Seamlessly integrating third-party services, payment gateways, and custom APIs to power your applications.",
    features: ["REST & GraphQL", "Payment Gateways", "Auth Systems", "Third-party APIs"],
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #0891b2, #06b6d4)",
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
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
      id="services"
      style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #0a1628, #020817)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow Orb */}
      <div
        className="glow-orb"
        style={{
          width: 500,
          height: 500,
          background: "rgba(139,92,246,0.06)",
          bottom: "-100px",
          right: "-100px",
        }}
      />

      <div
        ref={ref}
        style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 2.5rem" }}
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
          What I Offer
        </p>
        <h2 className="section-title">
          My <span className="gradient-text">Services</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: "3rem" }}>
          Targeted digital solutions built for modern platforms
        </p>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.25rem",
          }}
          className="services-grid"
        >
          {services.map((service, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                padding: "1.5rem",
                borderRadius: "16px",
                cursor: "default",
                transition: "all 0.4s ease",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${i * 0.1}s`,
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 45px ${service.color}20`;
                (e.currentTarget as HTMLElement).style.borderColor = `${service.color}40`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.15)";
              }}
            >
              {/* Top gradient line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: service.gradient,
                }}
              />

              {/* Icon Container */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "12px",
                  background: `${service.color}15`,
                  border: `1px solid ${service.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                  color: service.color,
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#e2e8f0",
                  marginBottom: "0.6rem",
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                  marginBottom: "1.25rem",
                  minHeight: "4rem",
                }}
              >
                {service.desc}
              </p>

              {/* Features */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {service.features.map((feat, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "0.8rem",
                      color: "#cbd5e1",
                    }}
                  >
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: service.color,
                        flexShrink: 0,
                      }}
                    />
                    {feat}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
