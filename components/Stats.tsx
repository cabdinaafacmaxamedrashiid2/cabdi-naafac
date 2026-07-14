"use client";
import { useEffect, useRef, useState } from "react";
import { TrendingUp, CheckCircle, Users, Layers } from "lucide-react";

const stats = [
  {
    icon: <TrendingUp size={28} color="#3b82f6" />,
    value: 3,
    suffix: "+",
    label: "Years of Learning",
    color: "#3b82f6",
  },
  {
    icon: <CheckCircle size={28} color="#06b6d4" />,
    value: 15,
    suffix: "+",
    label: "Projects Completed",
    color: "#06b6d4",
  },
  {
    icon: <Users size={28} color="#8b5cf6" />,
    value: 10,
    suffix: "+",
    label: "Happy Clients",
    color: "#8b5cf6",
  },
  {
    icon: <Layers size={28} color="#f59e0b" />,
    value: 20,
    suffix: "+",
    label: "Technologies Used",
    color: "#f59e0b",
  },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div ref={ref} style={{ fontSize: "3rem", fontWeight: 900, lineHeight: 1 }}>
      {count}{suffix}
    </div>
  );
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        padding: "80px 0",
        background: "linear-gradient(135deg, #0a1628, #020817)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, transparent, rgba(59,130,246,0.05), transparent)",
        }}
      />

      <div
        ref={ref}
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.5rem",
        }}
        className="stats-grid"
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="glass-card"
            style={{
              padding: "2rem",
              textAlign: "center",
              borderRadius: "20px",
              transition: "all 0.5s ease",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transitionDelay: `${i * 0.1}s`,
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)";
              (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px ${stat.color}25`;
              (e.currentTarget as HTMLElement).style.borderColor = `${stat.color}40`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.15)";
            }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: "16px",
                background: `${stat.color}15`,
                border: `1px solid ${stat.color}30`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.25rem",
              }}
            >
              {stat.icon}
            </div>
            <div style={{ color: stat.color }}>
              <Counter target={stat.value} suffix={stat.suffix} />
            </div>
            <div
              style={{
                color: "#94a3b8",
                fontSize: "0.9rem",
                marginTop: "0.5rem",
                fontWeight: 500,
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
