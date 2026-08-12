"use client";
import { useEffect, useRef, useState } from "react";
import { Image as ImageIcon, X, Maximize2 } from "lucide-react";

const initialPhotos = [
  {
    id: 1,
    title: "Personal Highlights",
    category: "Moments",
    image: "/gallery1.jpg",
    description: "My personal highlights and coding journey.",
  },
  {
    id: 2,
    title: "Learning & Accomplishments",
    category: "Milestones",
    image: "/gallery2.jpg",
    description: "Sharing moments of learning, build events, and achievements.",
  },
  {
    id: 3,
    title: "Tech & Networking",
    category: "Events",
    image: "/gallery3.jpg",
    description: "Connecting with developers and attending technical presentations.",
  },
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof initialPhotos)[0] | null>(null);
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
      id="gallery"
      ref={ref}
      style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #0f0028, #1a0540)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow Orb */}
      <div
        className="glow-orb"
        style={{
          width: 400,
          height: 400,
          background: "rgba(59, 130, 246, 0.06)",
          top: "20%",
          left: "-100px",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
        <p
          style={{
            textAlign: "center",
            color: "#3b82f6",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontSize: "0.85rem",
            marginBottom: "0.75rem",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        >
          My Moments & Highlights
        </p>
        <h2 className="section-title">
          Photo <span className="gradient-text">Gallery</span>
        </h2>
        <p className="section-subtitle">A collection of my work, projects, and personal moments</p>

        {/* Gallery Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.75rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease 0.2s",
          }}
        >
          {initialPhotos.map((photo) => (
            <div
              key={photo.id}
              className="glass-card"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
                transition: "all 0.4s ease",
                border: "1px solid rgba(59, 130, 246, 0.15)",
              }}
              onClick={() => setSelectedPhoto(photo)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.4)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.15)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ position: "relative", height: "240px", overflow: "hidden" }}>
                <img
                  src={photo.image}
                  alt={photo.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 40%, rgba(2,8,23,0.95) 100%)",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "1.25rem",
                  }}
                >
                  <div>
                    <span
                      style={{
                        background: "rgba(59, 130, 246, 0.2)",
                        border: "1px solid rgba(59, 130, 246, 0.4)",
                        color: "#60a5fa",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        padding: "3px 10px",
                        borderRadius: "20px",
                        display: "inline-block",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {photo.category}
                    </span>
                    <h3 style={{ color: "#f8fafc", fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>
                      {photo.title}
                    </h3>
                  </div>
                  <div
                    style={{
                      marginLeft: "auto",
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "rgba(59,130,246,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                    }}
                  >
                    <Maximize2 size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(15, 0, 40, 0.92)",
            backdropFilter: "blur(20px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            animation: "fadeIn 0.3s ease",
          }}
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "800px",
              width: "100%",
              borderRadius: "24px",
              overflow: "hidden",
              background: "#1a0540",
              border: "1px solid rgba(59, 130, 246, 0.3)",
              boxShadow: "0 25px 50px rgba(0,0,0,0.7)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                zIndex: 10,
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "rgba(15, 0, 40, 0.7)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <X size={20} />
            </button>
            <div style={{ width: "100%", maxHeight: "500px", overflow: "hidden" }}>
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: "1.75rem" }}>
              <span
                style={{
                  background: "rgba(59, 130, 246, 0.2)",
                  color: "#60a5fa",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  padding: "4px 12px",
                  borderRadius: "20px",
                  display: "inline-block",
                  marginBottom: "0.5rem",
                }}
              >
                {selectedPhoto.category}
              </span>
              <h3 style={{ color: "#f8fafc", fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                {selectedPhoto.title}
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
