"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Lock,
  Mail,
  FolderGit2,
  Settings,
  Plus,
  Trash2,
  Edit3,
  ExternalLink,
  CheckCircle,
  Eye,
  EyeOff,
  LogOut,
  ArrowLeft,
  Sparkles,
  Inbox,
  Send,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import {
  ProjectItem,
  ContactMessage,
  SiteConfig,
  getStoredProjects,
  saveProject,
  deleteProject,
  getStoredMessages,
  markMessageRead,
  deleteMessage,
  getStoredConfig,
  saveConfig,
  isAdminAuthenticated,
  setAdminAuthenticated,
} from "@/lib/adminStore";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"overview" | "messages" | "projects" | "settings">("overview");

  // State
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [config, setConfig] = useState<SiteConfig>({
    availability: "available",
    statusText: "🟢 Available for Freelance & Full-Time Roles",
  });

  // Project Modal State
  const [showProjectModal, setShowProjectModal] = useState<boolean>(false);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [projectForm, setProjectForm] = useState<{
    title: string;
    description: string;
    tech: string;
    image: string;
    github: string;
    demo: string;
    tier: "free" | "premium";
    price: number;
  }>({
    title: "",
    description: "",
    tech: "",
    image: "",
    github: "",
    demo: "",
    tier: "free",
    price: 0,
  });

  const [toastMsg, setToastMsg] = useState<string>("");

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 3500);
  };

  useEffect(() => {
    if (isAdminAuthenticated()) {
      setAuthenticated(true);
      loadDashboardData();
    }
  }, []);

  const loadDashboardData = () => {
    setProjects(getStoredProjects());
    setMessages(getStoredMessages());
    setConfig(getStoredConfig());
  };

  // Login Handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default Admin Passwords (user can use either)
    if (passwordInput === "naafac2026" || passwordInput === "admin123") {
      setAdminAuthenticated(true);
      setAuthenticated(true);
      setAuthError("");
      loadDashboardData();
      showToast("👋 Welcome back, Cabdi Naafac!");
    } else {
      setAuthError("Galka sirta ah waa qalad (Incorrect Password). Fadlan iska hubi!");
    }
  };

  const handleLogout = () => {
    setAdminAuthenticated(false);
    setAuthenticated(false);
    setPasswordInput("");
  };

  // Project CRUD
  const openNewProjectModal = () => {
    setEditingProjectId(null);
    setProjectForm({
      title: "",
      description: "",
      tech: "HTML, CSS, JavaScript",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      github: "https://github.com/cabdinaafacmaxamedrashiid2",
      demo: "#",
      tier: "free",
      price: 0,
    });
    setShowProjectModal(true);
  };

  const openEditProjectModal = (proj: ProjectItem) => {
    setEditingProjectId(proj.id);
    setProjectForm({
      title: proj.title,
      description: proj.description,
      tech: proj.tech.join(", "),
      image: proj.image,
      github: proj.github,
      demo: proj.demo || "",
      tier: proj.tier || "free",
      price: proj.price || 0,
    });
    setShowProjectModal(true);
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectForm.title.trim()) return;

    const techArray = projectForm.tech
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    saveProject({
      id: editingProjectId || undefined,
      title: projectForm.title.trim(),
      description: projectForm.description.trim(),
      tech: techArray.length > 0 ? techArray : ["Web Dev"],
      image: projectForm.image.trim() || "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      github: projectForm.github.trim() || "https://github.com/cabdinaafacmaxamedrashiid2",
      demo: projectForm.demo.trim() || "#",
      tier: projectForm.tier,
      price: Number(projectForm.price) || 0,
    });

    setProjects(getStoredProjects());
    setShowProjectModal(false);
    showToast(editingProjectId ? "✅ Project updated successfully!" : "🚀 New Project added to Portfolio!");
  };

  const handleDeleteProject = (id: string, title: string) => {
    if (confirm(`Ma hubtaa inaad tirtirto mashruuca "${title}"?`)) {
      const updated = deleteProject(id);
      setProjects(updated);
      showToast("🗑️ Project deleted.");
    }
  };

  // Message Actions
  const handleToggleRead = (id: string, currentStatus: boolean) => {
    const updated = markMessageRead(id, !currentStatus);
    setMessages(updated);
  };

  const handleDeleteMessage = (id: string) => {
    if (confirm("Ma hubtaa inaad fariintan tirtirto?")) {
      const updated = deleteMessage(id);
      setMessages(updated);
      showToast("🗑️ Message deleted from inbox.");
    }
  };

  // Config Update
  const handleSaveAvailability = (status: "available" | "busy" | "open_for_freelance") => {
    let text = "🟢 Available for Freelance & Full-Time Roles";
    if (status === "busy") text = "🟡 Currently busy on active projects";
    if (status === "open_for_freelance") text = "🚀 Open for Freelance Projects";

    const updated = saveConfig({ availability: status, statusText: text });
    setConfig(updated);
    showToast("⚙️ Work status updated!");
  };

  const unreadCount = messages.filter((m) => !m.read).length;

  // 1. LOGIN SCREEN (If not authenticated)
  if (!authenticated) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "radial-gradient(circle at 50% 20%, #1e1b4b 0%, #0b0f19 80%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
          color: "#f8fafc",
          fontFamily: "Plus Jakarta Sans, sans-serif",
        }}
      >
        <div
          className="glass-card"
          style={{
            maxWidth: "420px",
            width: "100%",
            borderRadius: "24px",
            padding: "2.5rem 2rem",
            background: "rgba(15, 23, 42, 0.85)",
            border: "1px solid rgba(99, 102, 241, 0.25)",
            boxShadow: "0 25px 60px rgba(0,0,0,0.6), 0 0 30px rgba(99,102,241,0.15)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "20px",
              background: "linear-gradient(135deg, #6366f1, #a855f7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem",
              boxShadow: "0 10px 25px rgba(99, 102, 241, 0.4)",
            }}
          >
            <ShieldCheck size={32} color="#fff" />
          </div>

          <h1 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "0.5rem" }}>
            Admin Portal
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "0.88rem", marginBottom: "2rem" }}>
            Cabdi Naafac — Portfolio Control Center & CMS
          </p>

          <form onSubmit={handleLogin}>
            <div style={{ position: "relative", marginBottom: "1.25rem", textAlign: "left" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.82rem",
                  color: "#cbd5e1",
                  marginBottom: "6px",
                  fontWeight: 600,
                }}
              >
                Gali Password-kaaga Sirta ah (Admin Password):
              </label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Gali password-ka..."
                  autoFocus
                  required
                  style={{
                    width: "100%",
                    padding: "13px 44px 13px 16px",
                    background: "rgba(10, 15, 30, 0.8)",
                    border: "1px solid rgba(99, 102, 241, 0.3)",
                    borderRadius: "12px",
                    color: "#f8fafc",
                    fontSize: "0.95rem",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: 14,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "transparent",
                    border: "none",
                    color: "#94a3b8",
                    cursor: "pointer",
                  }}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {authError && (
              <div
                style={{
                  background: "rgba(239, 68, 68, 0.15)",
                  border: "1px solid rgba(239, 68, 68, 0.3)",
                  color: "#f87171",
                  padding: "10px",
                  borderRadius: "10px",
                  fontSize: "0.82rem",
                  marginBottom: "1.25rem",
                }}
              >
                {authError}
              </div>
            )}

            <button
              type="submit"
              className="btn-primary"
              style={{
                width: "100%",
                padding: "13px",
                borderRadius: "12px",
                fontSize: "0.95rem",
                fontWeight: 700,
                background: "linear-gradient(135deg, #6366f1, #3b82f6)",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                boxShadow: "0 6px 20px rgba(99, 102, 241, 0.35)",
              }}
            >
              Gal Dashboard-ka (Login)
            </button>
          </form>

          <div style={{ marginTop: "1.75rem", paddingTop: "1.25rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "#94a3b8",
                fontSize: "0.85rem",
                textDecoration: "none",
              }}
            >
              <ArrowLeft size={15} />
              <span>Ku noqo Website-ka (Home)</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 2. AUTHENTICATED DASHBOARD
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b0f19",
        color: "#f8fafc",
        fontFamily: "Plus Jakarta Sans, sans-serif",
        paddingBottom: "5rem",
      }}
    >
      {/* Toast Notification */}
      {toastMsg && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 9999,
            background: "rgba(15, 23, 42, 0.95)",
            border: "1px solid #22c55e",
            color: "#f8fafc",
            padding: "12px 20px",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            fontSize: "0.9rem",
            fontWeight: 600,
          }}
        >
          {toastMsg}
        </div>
      )}

      {/* Top Navigation Bar */}
      <header
        style={{
          background: "rgba(15, 23, 42, 0.8)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          padding: "1rem 1.5rem",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: "10px",
                background: "linear-gradient(135deg, #6366f1, #3b82f6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
              }}
            >
              CN
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "1.05rem" }}>Cabdi Naafac</div>
              <div style={{ fontSize: "0.75rem", color: "#22c55e", fontWeight: 600 }}>● Admin Dashboard Active</div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Link
              href="/"
              target="_blank"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 16px",
                borderRadius: "10px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "#cbd5e1",
                fontSize: "0.85rem",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              <ExternalLink size={14} />
              <span>View Live Website</span>
            </Link>

            <button
              onClick={handleLogout}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 14px",
                borderRadius: "10px",
                background: "rgba(239, 68, 68, 0.12)",
                border: "1px solid rgba(239, 68, 68, 0.25)",
                color: "#f87171",
                fontSize: "0.85rem",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              <LogOut size={14} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main style={{ maxWidth: "1200px", margin: "2rem auto 0", padding: "0 1.5rem" }}>
        {/* Navigation Tabs */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            paddingBottom: "1rem",
            marginBottom: "2rem",
            overflowX: "auto",
          }}
        >
          <button
            onClick={() => setActiveTab("overview")}
            style={{
              padding: "10px 20px",
              borderRadius: "12px",
              background: activeTab === "overview" ? "rgba(99, 102, 241, 0.2)" : "transparent",
              border: activeTab === "overview" ? "1px solid #6366f1" : "1px solid transparent",
              color: activeTab === "overview" ? "#a5b4fc" : "#94a3b8",
              fontWeight: 700,
              fontSize: "0.9rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Sparkles size={16} />
            Overview
          </button>

          <button
            onClick={() => setActiveTab("messages")}
            style={{
              padding: "10px 20px",
              borderRadius: "12px",
              background: activeTab === "messages" ? "rgba(99, 102, 241, 0.2)" : "transparent",
              border: activeTab === "messages" ? "1px solid #6366f1" : "1px solid transparent",
              color: activeTab === "messages" ? "#a5b4fc" : "#94a3b8",
              fontWeight: 700,
              fontSize: "0.9rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              position: "relative",
            }}
          >
            <Inbox size={16} />
            Messages Inbox
            {unreadCount > 0 && (
              <span
                style={{
                  background: "#ef4444",
                  color: "#fff",
                  fontSize: "0.72rem",
                  padding: "2px 7px",
                  borderRadius: "10px",
                  fontWeight: 800,
                }}
              >
                {unreadCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("projects")}
            style={{
              padding: "10px 20px",
              borderRadius: "12px",
              background: activeTab === "projects" ? "rgba(99, 102, 241, 0.2)" : "transparent",
              border: activeTab === "projects" ? "1px solid #6366f1" : "1px solid transparent",
              color: activeTab === "projects" ? "#a5b4fc" : "#94a3b8",
              fontWeight: 700,
              fontSize: "0.9rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FolderGit2 size={16} />
            Projects Manager ({projects.length})
          </button>

          <button
            onClick={() => setActiveTab("settings")}
            style={{
              padding: "10px 20px",
              borderRadius: "12px",
              background: activeTab === "settings" ? "rgba(99, 102, 241, 0.2)" : "transparent",
              border: activeTab === "settings" ? "1px solid #6366f1" : "1px solid transparent",
              color: activeTab === "settings" ? "#a5b4fc" : "#94a3b8",
              fontWeight: 700,
              fontSize: "0.9rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Settings size={16} />
            Site Settings
          </button>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div>
            {/* Quick Metrics */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.5rem",
                marginBottom: "2.5rem",
              }}
            >
              <div
                className="glass-card"
                style={{
                  padding: "1.75rem",
                  borderRadius: "20px",
                  border: "1px solid rgba(99, 102, 241, 0.2)",
                  background: "rgba(15, 23, 42, 0.7)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ color: "#94a3b8", fontSize: "0.85rem", fontWeight: 600, marginBottom: "8px" }}>
                      TOTAL INQUIRIES
                    </div>
                    <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "#f8fafc" }}>
                      {messages.length}
                    </div>
                  </div>
                  <div style={{ padding: "10px", background: "rgba(99, 102, 241, 0.15)", borderRadius: "12px", color: "#818cf8" }}>
                    <Mail size={24} />
                  </div>
                </div>
                <div style={{ fontSize: "0.8rem", color: unreadCount > 0 ? "#f87171" : "#22c55e", marginTop: "12px", fontWeight: 600 }}>
                  {unreadCount > 0 ? `⚠️ ${unreadCount} unread message(s)` : "✅ All messages reviewed"}
                </div>
              </div>

              <div
                className="glass-card"
                style={{
                  padding: "1.75rem",
                  borderRadius: "20px",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                  background: "rgba(15, 23, 42, 0.7)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ color: "#94a3b8", fontSize: "0.85rem", fontWeight: 600, marginBottom: "8px" }}>
                      ACTIVE PROJECTS
                    </div>
                    <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "#f8fafc" }}>
                      {projects.length}
                    </div>
                  </div>
                  <div style={{ padding: "10px", background: "rgba(59, 130, 246, 0.15)", borderRadius: "12px", color: "#60a5fa" }}>
                    <FolderGit2 size={24} />
                  </div>
                </div>
                <div style={{ fontSize: "0.8rem", color: "#60a5fa", marginTop: "12px", fontWeight: 600 }}>
                  Live on Public Portfolio
                </div>
              </div>

              <div
                className="glass-card"
                style={{
                  padding: "1.75rem",
                  borderRadius: "20px",
                  border: "1px solid rgba(34, 197, 94, 0.2)",
                  background: "rgba(15, 23, 42, 0.7)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ color: "#94a3b8", fontSize: "0.85rem", fontWeight: 600, marginBottom: "8px" }}>
                      WORK AVAILABILITY
                    </div>
                    <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#22c55e", marginTop: "6px" }}>
                      {config.availability === "available" ? "Available Now" : "Busy"}
                    </div>
                  </div>
                  <div style={{ padding: "10px", background: "rgba(34, 197, 94, 0.15)", borderRadius: "12px", color: "#22c55e" }}>
                    <CheckCircle size={24} />
                  </div>
                </div>
                <div style={{ fontSize: "0.8rem", color: "#94a3b8", marginTop: "12px" }}>
                  {config.statusText}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div
              className="glass-card"
              style={{
                borderRadius: "20px",
                padding: "2rem",
                background: "rgba(15, 23, 42, 0.6)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "1.25rem" }}>
                ⚡ Quick Management Actions
              </h3>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button
                  onClick={openNewProjectModal}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 20px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <Plus size={16} />
                  <span>Kudar Mashruuc Cusub (Add Project)</span>
                </button>

                <button
                  onClick={() => setActiveTab("messages")}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 20px",
                    borderRadius: "12px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    color: "#f8fafc",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    cursor: "pointer",
                  }}
                >
                  <Mail size={16} />
                  <span>Eeg Fariimaha Cusub ({unreadCount})</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MESSAGES INBOX */}
        {activeTab === "messages" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
              <div>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 800 }}>Inbox-ka Fariimaha (Contact Inquiries)</h2>
                <p style={{ color: "#94a3b8", fontSize: "0.88rem" }}>
                  Dhammaan fariimaha laguugu soo diray foomka website-ka
                </p>
              </div>
            </div>

            {messages.length === 0 ? (
              <div
                className="glass-card"
                style={{
                  padding: "4rem 2rem",
                  borderRadius: "20px",
                  textAlign: "center",
                  color: "#94a3b8",
                  background: "rgba(15, 23, 42, 0.5)",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📭</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#cbd5e1" }}>Inbox-ku waa maran yahay</h3>
                <p style={{ fontSize: "0.88rem", marginTop: "6px" }}>
                  Markii qof website-ka kugu soo xiriiro, fariintu halkan ayay toos ugu soo dhici doontaa!
                </p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className="glass-card"
                    style={{
                      padding: "1.5rem",
                      borderRadius: "16px",
                      background: msg.read ? "rgba(15, 23, 42, 0.5)" : "rgba(99, 102, 241, 0.1)",
                      border: msg.read ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(99, 102, 241, 0.35)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            background: msg.read ? "#64748b" : "#22c55e",
                            display: "inline-block",
                          }}
                        />
                        <span style={{ fontWeight: 700, fontSize: "0.95rem", color: msg.read ? "#cbd5e1" : "#f8fafc" }}>
                          Fariin Ka Timid Visitor
                        </span>
                        <span style={{ fontSize: "0.78rem", color: "#94a3b8", background: "rgba(255,255,255,0.04)", padding: "2px 8px", borderRadius: "8px" }}>
                          {msg.date}
                        </span>
                      </div>

                      <div style={{ display: "flex", gap: "8px" }}>
                        <button
                          onClick={() => handleToggleRead(msg.id, msg.read)}
                          style={{
                            padding: "6px 12px",
                            borderRadius: "8px",
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "#cbd5e1",
                            fontSize: "0.78rem",
                            cursor: "pointer",
                            fontWeight: 600,
                          }}
                        >
                          {msg.read ? "Mark Unread" : "Mark Read"}
                        </button>
                        <button
                          onClick={() => handleDeleteMessage(msg.id)}
                          style={{
                            padding: "6px 10px",
                            borderRadius: "8px",
                            background: "rgba(239, 68, 68, 0.1)",
                            border: "1px solid rgba(239, 68, 68, 0.25)",
                            color: "#f87171",
                            fontSize: "0.78rem",
                            cursor: "pointer",
                          }}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>

                    <div
                      style={{
                        background: "rgba(0, 0, 0, 0.25)",
                        padding: "1rem 1.25rem",
                        borderRadius: "12px",
                        color: "#e2e8f0",
                        fontSize: "0.92rem",
                        lineHeight: 1.6,
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      {msg.message}
                    </div>

                    <div style={{ display: "flex", gap: "10px" }}>
                      <a
                        href={`https://wa.me/252619051885`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          padding: "6px 14px",
                          borderRadius: "8px",
                          background: "rgba(37, 211, 102, 0.15)",
                          border: "1px solid rgba(37, 211, 102, 0.3)",
                          color: "#25d366",
                          fontSize: "0.8rem",
                          textDecoration: "none",
                          fontWeight: 600,
                        }}
                      >
                        <MessageSquare size={13} />
                        <span>Open WhatsApp</span>
                      </a>

                      <a
                        href={`mailto:cabdinaafacmaxamedrashiid237@gmail.com`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          padding: "6px 14px",
                          borderRadius: "8px",
                          background: "rgba(59, 130, 246, 0.15)",
                          border: "1px solid rgba(59, 130, 246, 0.3)",
                          color: "#60a5fa",
                          fontSize: "0.8rem",
                          textDecoration: "none",
                          fontWeight: 600,
                        }}
                      >
                        <Send size={13} />
                        <span>Reply via Gmail</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: PROJECTS MANAGER */}
        {activeTab === "projects" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
              <div>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 800 }}>Projects Manager (CRUD)</h2>
                <p style={{ color: "#94a3b8", fontSize: "0.88rem" }}>
                  Kudar mashruuc cusub, wax ka beddel, ama tirtir kuwa hore
                </p>
              </div>

              <button
                onClick={openNewProjectModal}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 20px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <Plus size={16} />
                <span>Add New Project</span>
              </button>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="glass-card"
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "1px solid rgba(59, 130, 246, 0.18)",
                    background: "rgba(15, 23, 42, 0.6)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ height: "180px", overflow: "hidden" }}>
                    <img
                      src={proj.image}
                      alt={proj.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>

                  <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                        {proj.tech.map((t) => (
                          <span
                            key={t}
                            style={{
                              fontSize: "0.72rem",
                              background: "rgba(59, 130, 246, 0.12)",
                              color: "#60a5fa",
                              padding: "2px 8px",
                              borderRadius: "6px",
                              fontWeight: 600,
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 800,
                          padding: "3px 8px",
                          borderRadius: "6px",
                          background: proj.tier === "premium" ? "rgba(234, 179, 8, 0.18)" : "rgba(34, 197, 94, 0.18)",
                          color: proj.tier === "premium" ? "#facc15" : "#4ade80",
                          border: proj.tier === "premium" ? "1px solid rgba(234, 179, 8, 0.4)" : "1px solid rgba(34, 197, 94, 0.4)",
                        }}
                      >
                        {proj.tier === "premium" ? `💎 PREMIUM • $${proj.price || 15}` : "🟢 FREE"}
                      </span>
                    </div>

                    <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#f8fafc", marginBottom: "6px" }}>
                      {proj.title}
                    </h3>
                    <p style={{ color: "#94a3b8", fontSize: "0.85rem", lineHeight: 1.5, flex: 1, marginBottom: "1.25rem" }}>
                      {proj.description}
                    </p>

                    <div style={{ display: "flex", gap: "8px", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1rem" }}>
                      <button
                        onClick={() => openEditProjectModal(proj)}
                        style={{
                          flex: 1,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "6px",
                          padding: "8px",
                          borderRadius: "8px",
                          background: "rgba(255, 255, 255, 0.05)",
                          border: "1px solid rgba(255, 255, 255, 0.12)",
                          color: "#cbd5e1",
                          fontSize: "0.82rem",
                          fontWeight: 600,
                          cursor: "pointer",
                        }}
                      >
                        <Edit3 size={14} />
                        Edit
                      </button>

                      <button
                        onClick={() => handleDeleteProject(proj.id, proj.title)}
                        style={{
                          padding: "8px 12px",
                          borderRadius: "8px",
                          background: "rgba(239, 68, 68, 0.1)",
                          border: "1px solid rgba(239, 68, 68, 0.25)",
                          color: "#f87171",
                          cursor: "pointer",
                        }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: SETTINGS */}
        {activeTab === "settings" && (
          <div style={{ maxWidth: "680px" }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.5rem" }}>Site Settings & Status</h2>
            <p style={{ color: "#94a3b8", fontSize: "0.88rem", marginBottom: "2rem" }}>
              Maamul xaaladdaada shaqo (Availability status) iyo xogta degdegga ah
            </p>

            <div
              className="glass-card"
              style={{
                padding: "2rem",
                borderRadius: "20px",
                background: "rgba(15, 23, 42, 0.6)",
                border: "1px solid rgba(255,255,255,0.08)",
                marginBottom: "2rem",
              }}
            >
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem" }}>
                💼 Work Availability Status
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <button
                  type="button"
                  onClick={() => handleSaveAvailability("available")}
                  style={{
                    padding: "14px 18px",
                    borderRadius: "12px",
                    background: config.availability === "available" ? "rgba(34, 197, 94, 0.15)" : "rgba(255,255,255,0.02)",
                    border: config.availability === "available" ? "1px solid #22c55e" : "1px solid rgba(255,255,255,0.06)",
                    color: config.availability === "available" ? "#4ade80" : "#94a3b8",
                    textAlign: "left",
                    cursor: "pointer",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                  }}
                >
                  🟢 Available for Freelance & Full-Time Roles (Waan Firaaqoobaa)
                </button>

                <button
                  type="button"
                  onClick={() => handleSaveAvailability("open_for_freelance")}
                  style={{
                    padding: "14px 18px",
                    borderRadius: "12px",
                    background: config.availability === "open_for_freelance" ? "rgba(59, 130, 246, 0.15)" : "rgba(255,255,255,0.02)",
                    border: config.availability === "open_for_freelance" ? "1px solid #3b82f6" : "1px solid rgba(255,255,255,0.06)",
                    color: config.availability === "open_for_freelance" ? "#60a5fa" : "#94a3b8",
                    textAlign: "left",
                    cursor: "pointer",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                  }}
                >
                  🚀 Open for Freelance Projects (Mashaariic Gaar Ah)
                </button>

                <button
                  type="button"
                  onClick={() => handleSaveAvailability("busy")}
                  style={{
                    padding: "14px 18px",
                    borderRadius: "12px",
                    background: config.availability === "busy" ? "rgba(234, 179, 8, 0.15)" : "rgba(255,255,255,0.02)",
                    border: config.availability === "busy" ? "1px solid #eab308" : "1px solid rgba(255,255,255,0.06)",
                    color: config.availability === "busy" ? "#facc15" : "#94a3b8",
                    textAlign: "left",
                    cursor: "pointer",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                  }}
                >
                  🟡 Currently Busy on Active Projects (Mashquul)
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ADD / EDIT PROJECT MODAL */}
      {showProjectModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(8px)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
          }}
        >
          <div
            className="glass-card"
            style={{
              maxWidth: "540px",
              width: "100%",
              borderRadius: "24px",
              padding: "2rem",
              background: "#0f172a",
              border: "1px solid rgba(59, 130, 246, 0.3)",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1.25rem" }}>
              {editingProjectId ? "✏️ Edit Project" : "🚀 Add New Project"}
            </h2>

            <form onSubmit={handleSaveProject}>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", fontSize: "0.82rem", color: "#cbd5e1", marginBottom: "6px", fontWeight: 600 }}>
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. E-Commerce Website"
                  value={projectForm.title}
                  onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "rgba(10, 15, 30, 0.8)",
                    border: "1px solid rgba(59, 130, 246, 0.3)",
                    borderRadius: "10px",
                    color: "#f8fafc",
                    fontSize: "0.9rem",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", fontSize: "0.82rem", color: "#cbd5e1", marginBottom: "6px", fontWeight: 600 }}>
                  Description *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Faahfaahin kooban oo ku saabsan waxa mashruucu qabto..."
                  value={projectForm.description}
                  onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "rgba(10, 15, 30, 0.8)",
                    border: "1px solid rgba(59, 130, 246, 0.3)",
                    borderRadius: "10px",
                    color: "#f8fafc",
                    fontSize: "0.9rem",
                    outline: "none",
                    boxSizing: "border-box",
                    resize: "vertical",
                  }}
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", fontSize: "0.82rem", color: "#cbd5e1", marginBottom: "6px", fontWeight: 600 }}>
                  Tech Stack (Kala saar comma: e.g. React, Next.js, Node.js)
                </label>
                <input
                  type="text"
                  placeholder="HTML, CSS, JavaScript, React"
                  value={projectForm.tech}
                  onChange={(e) => setProjectForm({ ...projectForm, tech: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "rgba(10, 15, 30, 0.8)",
                    border: "1px solid rgba(59, 130, 246, 0.3)",
                    borderRadius: "10px",
                    color: "#f8fafc",
                    fontSize: "0.9rem",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", fontSize: "0.82rem", color: "#cbd5e1", marginBottom: "6px", fontWeight: 600 }}>
                  Image URL
                </label>
                <input
                  type="text"
                  placeholder="https://images.unsplash.com/..."
                  value={projectForm.image}
                  onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "rgba(10, 15, 30, 0.8)",
                    border: "1px solid rgba(59, 130, 246, 0.3)",
                    borderRadius: "10px",
                    color: "#f8fafc",
                    fontSize: "0.9rem",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "1.5rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", color: "#cbd5e1", marginBottom: "6px", fontWeight: 600 }}>
                    GitHub Repo Link
                  </label>
                  <input
                    type="text"
                    placeholder="https://github.com/..."
                    value={projectForm.github}
                    onChange={(e) => setProjectForm({ ...projectForm, github: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px",
                      background: "rgba(10, 15, 30, 0.8)",
                      border: "1px solid rgba(59, 130, 246, 0.3)",
                      borderRadius: "10px",
                      color: "#f8fafc",
                      fontSize: "0.85rem",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", color: "#cbd5e1", marginBottom: "6px", fontWeight: 600 }}>
                    Live Demo Link
                  </label>
                  <input
                    type="text"
                    placeholder="https://... ama #"
                    value={projectForm.demo}
                    onChange={(e) => setProjectForm({ ...projectForm, demo: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px",
                      background: "rgba(10, 15, 30, 0.8)",
                      border: "1px solid rgba(59, 130, 246, 0.3)",
                      borderRadius: "10px",
                      color: "#f8fafc",
                      fontSize: "0.85rem",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "10px", marginBottom: "1.5rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", color: "#cbd5e1", marginBottom: "6px", fontWeight: 600 }}>
                    Project Tier (Nooca)
                  </label>
                  <select
                    value={projectForm.tier}
                    onChange={(e) => setProjectForm({ ...projectForm, tier: e.target.value as "free" | "premium" })}
                    style={{
                      width: "100%",
                      padding: "12px",
                      background: "rgba(10, 15, 30, 0.8)",
                      border: "1px solid rgba(59, 130, 246, 0.3)",
                      borderRadius: "10px",
                      color: "#f8fafc",
                      fontSize: "0.85rem",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  >
                    <option value="free" style={{ background: "#0f172a" }}>🟢 Free (Bilaash - Open Source)</option>
                    <option value="premium" style={{ background: "#0f172a" }}>💎 Premium (Paid / Iib - Store)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", color: "#cbd5e1", marginBottom: "6px", fontWeight: 600 }}>
                    Price in USD ($)
                  </label>
                  <input
                    type="number"
                    min="0"
                    placeholder="e.g. 15"
                    disabled={projectForm.tier === "free"}
                    value={projectForm.tier === "free" ? 0 : projectForm.price}
                    onChange={(e) => setProjectForm({ ...projectForm, price: Number(e.target.value) })}
                    style={{
                      width: "100%",
                      padding: "12px",
                      background: projectForm.tier === "free" ? "rgba(15, 23, 42, 0.5)" : "rgba(10, 15, 30, 0.8)",
                      border: "1px solid rgba(59, 130, 246, 0.3)",
                      borderRadius: "10px",
                      color: "#f8fafc",
                      fontSize: "0.85rem",
                      outline: "none",
                      boxSizing: "border-box",
                      opacity: projectForm.tier === "free" ? 0.5 : 1,
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    padding: "12px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {editingProjectId ? "Kaydi Isbedelka (Save)" : "Kudar Portfolio-ga (Add Project)"}
                </button>

                <button
                  type="button"
                  onClick={() => setShowProjectModal(false)}
                  style={{
                    padding: "12px 18px",
                    borderRadius: "10px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    color: "#cbd5e1",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                  }}
                >
                  Ka noqo (Cancel)
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
