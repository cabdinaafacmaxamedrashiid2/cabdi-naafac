"use client";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "252619051885"; // Cabdi Naafac number
const WHATSAPP_MESSAGE = "Hello Cabdi Naafac! I visited your portfolio and I'd like to hire you for a project. 🚀";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after 2 seconds
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      {/* Bubble Popup */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "2rem",
            zIndex: 9998,
            background: "rgba(10, 22, 40, 0.97)",
            border: "1px solid rgba(37, 211, 102, 0.3)",
            borderRadius: "20px",
            padding: "1.25rem",
            width: "290px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(37,211,102,0.1)",
            animation: "slideUpFade 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "1rem",
              paddingBottom: "0.75rem",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Avatar */}
            <div style={{ position: "relative", flexShrink: 0 }}>
              <img
                src="/profile.jpg"
                alt="Cabdi Naafac"
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #25d366",
                }}
              />
              {/* Online dot */}
              <span
                style={{
                  position: "absolute",
                  bottom: 1,
                  right: 1,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#25d366",
                  border: "2px solid #0a1628",
                  animation: "pulse-green 2s infinite",
                }}
              />
            </div>
            <div>
              <p style={{ color: "#f8fafc", fontWeight: 700, fontSize: "0.95rem", margin: 0 }}>
                Cabdi Naafac
              </p>
              <p style={{ color: "#25d366", fontSize: "0.78rem", margin: 0, fontWeight: 500 }}>
                🟢 Online — Usually replies instantly
              </p>
            </div>
          </div>

          {/* Message bubble */}
          <div
            style={{
              background: "rgba(37, 211, 102, 0.08)",
              border: "1px solid rgba(37, 211, 102, 0.15)",
              borderRadius: "14px 14px 14px 4px",
              padding: "0.85rem 1rem",
              marginBottom: "1rem",
            }}
          >
            <p style={{ color: "#e2e8f0", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>
              👋 Salaam! Sideed tahay? Mashruuc ma qabanaysaa?{" "}
              <span style={{ color: "#25d366" }}>Kala xiriir</span> — si degdeg ah ayaan ku jawaabi doonaa!
            </p>
            <p style={{ color: "#64748b", fontSize: "0.72rem", marginTop: "6px", margin: "6px 0 0", textAlign: "right" }}>
              {new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
            </p>
          </div>

          {/* CTA Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              width: "100%",
              padding: "12px",
              borderRadius: "30px",
              background: "linear-gradient(135deg, #25d366, #128c7e)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.9rem",
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 6px 30px rgba(37, 211, 102, 0.6)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(37, 211, 102, 0.4)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* WhatsApp icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.007a9.86 9.86 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
            Start WhatsApp Chat
          </a>

          <p style={{ color: "#475569", fontSize: "0.72rem", textAlign: "center", margin: "10px 0 0" }}>
            🔒 Your message goes directly to WhatsApp
          </p>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Chat on WhatsApp"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "5.5rem", // next to scroll-to-top
          zIndex: 9999,
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #25d366, #128c7e)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 25px rgba(37, 211, 102, 0.5)",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0)",
          transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.12)";
          e.currentTarget.style.boxShadow = "0 0 40px rgba(37, 211, 102, 0.7)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 0 25px rgba(37, 211, 102, 0.5)";
        }}
      >
        {/* Pulse ring */}
        {!open && (
          <span
            style={{
              position: "absolute",
              inset: -4,
              borderRadius: "50%",
              border: "3px solid rgba(37, 211, 102, 0.4)",
              animation: "pulse-ring 2s ease-out infinite",
              pointerEvents: "none",
            }}
          />
        )}

        {/* Icon: WhatsApp or X */}
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.007a9.86 9.86 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
          </svg>
        )}
      </button>

      <style>{`
        @keyframes pulse-ring {
          0%   { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.4); }
          50%       { box-shadow: 0 0 0 5px rgba(37,211,102,0); }
        }
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </>
  );
}
