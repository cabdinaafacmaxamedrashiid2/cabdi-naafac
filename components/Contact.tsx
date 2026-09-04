"use client";
import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
} from "lucide-react";
import { addIncomingMessage } from "@/lib/adminStore";

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

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      // Store in Admin Inbox
      if (formData.message && formData.message.trim()) {
        addIncomingMessage(formData.message.trim());
      }

      const response = await fetch(
        "https://formsubmit.co/ajax/39270dfe3fb8d5d7534b15a252679f87",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: "📩 New Message from Portfolio – Cabdi Naafac",
            message: formData.message,
            _captcha: "false",
            _template: "table",
          }),
        }
      );

      if (response.ok) {
        setSent(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSent(false), 8000);
      } else {
        throw new Error("Failed to send message via formsubmit");
      }
    } catch {
      // Fallback: Open mailto directly if API fails
      const mailtoUrl = `mailto:cabdinaafacmaxamedrashiid237@gmail.com?subject=${encodeURIComponent(
        "📩 New Message from Portfolio – Cabdi Naafac"
      )}&body=${encodeURIComponent(formData.message)}`;
      window.location.href = mailtoUrl;
      setSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 8000);
    } finally {
      setSending(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email (Direct)",
      value: "cabdinaafacmaxamedrashiid237@gmail.com",
      href: "mailto:cabdinaafacmaxamedrashiid237@gmail.com",
      color: "#ef4444",
    },
    {
      icon: <WhatsappIcon size={20} />,
      label: "WhatsApp Chat",
      value: "+252 619 051 885",
      href: "https://wa.me/252619051885?text=Hello%20Cabdi%20Naafac!%20Waxaan%20ka%20soo%20xiriirayaa%20portfolio-gaaga.",
      color: "#22c55e",
    },
    {
      icon: <Phone size={20} />,
      label: "Direct Phone",
      value: "+252 619 051 885",
      href: "tel:+252619051885",
      color: "#3b82f6",
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Mogadishu, Somalia 🇸🇴",
      href: "#",
      color: "#a855f7",
    },
  ];

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    background: "rgba(10,22,40,0.7)",
    border: "1px solid rgba(59,130,246,0.2)",
    borderRadius: "12px",
    color: "#e2e8f0",
    fontSize: "0.95rem",
    fontFamily: "Poppins, sans-serif",
    outline: "none",
    transition: "all 0.3s",
    boxSizing: "border-box" as const,
  };

  return (
    <section
      id="contact"
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
          width: 600,
          height: 600,
          background: "rgba(59,130,246,0.08)",
          top: "50%",
          right: "-150px",
          transform: "translateY(-50%)",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 400,
          height: 400,
          background: "rgba(6,182,212,0.06)",
          bottom: "-100px",
          left: "-100px",
        }}
      />

      <div
        ref={ref}
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          position: "relative",
          zIndex: 1,
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
          Get In Touch
        </p>
        <h2 className="section-title">
          Contact <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle">
          Have a project in mind? Let&apos;s build something amazing together!
        </p>

        <div
          style={{
            display: "grid",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.7s ease",
          }}
          className="contact-grid"
        >
          {/* Left - Contact Info */}
          <div>
            <h3
              style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "#e2e8f0",
                marginBottom: "0.75rem",
              }}
            >
              Let&apos;s Work Together
            </h3>
            <p
              style={{
                color: "#94a3b8",
                lineHeight: 1.75,
                marginBottom: "2rem",
                fontSize: "0.95rem",
              }}
            >
              I&apos;m always open to new opportunities, collaborations, and
              interesting projects. Whether you have a question or just want to
              say hello, I&apos;ll try my best to get back to you!
            </p>

            {/* Contact Items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {contactInfo.map((info, i) => (
                <a
                  key={i}
                  href={info.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem 1.25rem",
                    borderRadius: "14px",
                    background: "rgba(10,22,40,0.6)",
                    border: "1px solid rgba(59,130,246,0.12)",
                    textDecoration: "none",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${info.color}40`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 25px ${info.color}15`;
                    (e.currentTarget as HTMLElement).style.transform = "translateX(6px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.12)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "12px",
                      background: `${info.color}15`,
                      border: `1px solid ${info.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: info.color,
                      flexShrink: 0,
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ color: "#64748b", fontSize: "0.78rem", fontWeight: 500 }}>
                      {info.label}
                    </div>
                    <div style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "0.9rem" }}>
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div style={{ display: "flex", gap: "12px" }}>
              {[
                { icon: <FacebookIcon size={20} />, href: "https://www.facebook.com/cabdinaafac.maxamedrashiid", label: "Facebook", color: "#1877f2" },
                { icon: <YoutubeIcon size={20} />, href: "https://youtube.com", label: "YouTube", color: "#ff0000" },
                { icon: <TiktokIcon size={20} />, href: "https://www.tiktok.com/@m7a", label: "TikTok", color: "#00f2fe" },
                { icon: <InstagramIcon size={20} />, href: "https://www.instagram.com/cabdinaafac", label: "Instagram", color: "#e1306c" },
                { icon: <WhatsappIcon size={20} />, href: "https://wa.me/252619051885", label: "WhatsApp", color: "#25d366" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "12px",
                    background: "rgba(59,130,246,0.08)",
                    border: "1px solid rgba(59,130,246,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#94a3b8",
                    textDecoration: "none",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = s.color;
                    (e.currentTarget as HTMLElement).style.borderColor = s.color;
                    (e.currentTarget as HTMLElement).style.background = `${s.color}15`;
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#94a3b8";
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

          {/* Right - Two Contact Options */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

            {/* Option 1: WhatsApp - Standalone big green button */}
            <a
              href="https://wa.me/252619051885?text=Hello%20Cabdi%20Naafac!%20Waxaan%20ka%20soo%20xiriirayaa%20portfolio-gaaga."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1.5rem 2rem",
                borderRadius: "20px",
                background: "linear-gradient(135deg, #128c7e, #25d366)",
                border: "none",
                textDecoration: "none",
                boxShadow: "0 8px 30px rgba(37,211,102,0.35)",
                transition: "all 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(37,211,102,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(37,211,102,0.35)";
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: "14px",
                background: "rgba(255,255,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <WhatsappIcon size={28} />
              </div>
              <div style={{ color: "#fff" }}>
                <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>Chat on WhatsApp</div>
                <div style={{ fontSize: "0.88rem", opacity: 0.88 }}>+252 619 051 885 · Usually replies fast</div>
              </div>
              <div style={{ marginLeft: "auto", color: "rgba(255,255,255,0.7)", fontSize: "1.4rem" }}>→</div>
            </a>

            {/* Divider */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
              <span style={{ color: "#64748b", fontSize: "0.82rem", whiteSpace: "nowrap" }}>or send an email</span>
              <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
            </div>

            {/* Option 2: Email Form */}
            <div className="glass-card" style={{ padding: "2rem", borderRadius: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.5rem" }}>
                <MessageSquare size={20} color="#3b82f6" />
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#e2e8f0" }}>
                  Send Email to Gmail
                </h3>
              </div>

            {sent ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "3rem",
                  color: "#22c55e",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                  Message Sent!
                </h3>
                <p style={{ color: "#94a3b8" }}>
                  Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div style={{ marginBottom: "1.5rem" }}>
                  <label
                    htmlFor="message"
                    style={{ display: "block", color: "#94a3b8", fontSize: "0.85rem", marginBottom: "6px", fontWeight: 500 }}
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={7}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Salaam! Waxaan rabaa inaan kula shaqeeyo mashruuc..."
                    style={{
                      ...inputStyle,
                      resize: "vertical" as const,
                      minHeight: "150px",
                    }}
                    onFocus={(e) => {
                      (e.target as HTMLElement).style.borderColor = "#3b82f6";
                      (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(59,130,246,0.1)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLElement).style.borderColor = "rgba(59,130,246,0.2)";
                      (e.target as HTMLElement).style.boxShadow = "none";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "14px" }}
                >
                  {sending ? (
                    <>
                      <div
                        style={{
                          width: 18,
                          height: 18,
                          border: "2px solid rgba(255,255,255,0.3)",
                          borderTopColor: "white",
                          borderRadius: "50%",
                          animation: "spin-slow 0.8s linear infinite",
                        }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
            </div>{/* End Email Form glass-card */}
          </div>{/* End Right - Two Contact Options */}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
