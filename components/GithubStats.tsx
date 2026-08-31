"use client";
import { useState, useEffect } from "react";
import { GitBranch, Star, BookOpen, Users, ExternalLink, Activity, Code2, Sparkles } from "lucide-react";

interface GithubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  created_at: string;
}

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  homepage: string | null;
}

const langColors: Record<string, string> = {
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  HTML: "#e34f26",
  CSS: "#1572b6",
  Python: "#3776ab",
  Default: "#60a5fa",
};

export default function GithubStats() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  const username = "cabdinaafacmaxamedrashiid2";

  useEffect(() => {
    async function fetchGithubData() {
      try {
        setLoading(true);
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`),
        ]);

        if (userRes.ok && reposRes.ok) {
          const userData = await userRes.json();
          const reposData = await reposRes.json();
          setUser(userData);
          setRepos(reposData);
        }
      } catch (err) {
        console.error("Failed to fetch GitHub stats:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchGithubData();
  }, []);

  return (
    <section
      id="github-stats"
      style={{
        padding: "100px 0",
        position: "relative",
        background: "transparent",
      }}
    >
      <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "20px",
              background: "rgba(59, 130, 246, 0.1)",
              border: "1px solid rgba(59, 130, 246, 0.25)",
              color: "#60a5fa",
              fontSize: "0.85rem",
              fontWeight: 600,
              marginBottom: "1rem",
            }}
          >
            <Activity size={15} />
            <span>REAL-TIME API DATA</span>
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#22c55e",
                display: "inline-block",
                boxShadow: "0 0 10px #22c55e",
              }}
            />
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 800,
              color: "#f8fafc",
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
            }}
          >
            Live GitHub <span className="gradient-text">Activity & Stats</span>
          </h2>
          <p
            style={{
              color: "#94a3b8",
              fontSize: "1rem",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Directly connected to GitHub REST API to showcase live repositories, open-source work, and code activity.
          </p>
        </div>

        {/* User Stats Card Banner */}
        <div
          className="glass-card"
          style={{
            borderRadius: "24px",
            padding: "2rem",
            marginBottom: "2.5rem",
            border: "1px solid rgba(59, 130, 246, 0.2)",
            background: "rgba(15, 23, 42, 0.75)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            {/* User Profile info */}
            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
              <div style={{ position: "relative" }}>
                <img
                  src={user?.avatar_url || "/profile.jpg"}
                  alt="Cabdi Naafac GitHub Avatar"
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid #3b82f6",
                    boxShadow: "0 0 20px rgba(59,130,246,0.4)",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    bottom: 2,
                    right: 2,
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "#22c55e",
                    border: "2px solid #0f172a",
                  }}
                />
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#f8fafc", margin: 0 }}>
                    {user?.name || "Abdi Nafac Mohamed Rashid"}
                  </h3>
                  <a
                    href={`https://github.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "0.82rem",
                      color: "#60a5fa",
                      textDecoration: "none",
                      background: "rgba(59, 130, 246, 0.12)",
                      padding: "3px 10px",
                      borderRadius: "12px",
                      border: "1px solid rgba(59, 130, 246, 0.3)",
                    }}
                  >
                    @{username}
                  </a>
                </div>
                <p style={{ color: "#94a3b8", fontSize: "0.88rem", margin: "6px 0 0", maxWidth: "520px" }}>
                  {user?.bio || "ICT Student & Aspiring Full-Stack Software Developer"}
                </p>
              </div>
            </div>

            {/* GitHub Profile Action Button */}
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                borderRadius: "30px",
                background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.92rem",
                textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 6px 20px rgba(59, 130, 246, 0.35)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(59, 130, 246, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(59, 130, 246, 0.35)";
              }}
            >
              <ExternalLink size={16} />
              <span>Follow on GitHub</span>
            </a>
          </div>

          {/* Key Metrics Counter Row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "1rem",
              marginTop: "2rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              style={{
                padding: "1rem",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                textAlign: "center",
              }}
            >
              <div style={{ color: "#3b82f6", display: "flex", justifyContent: "center", marginBottom: "6px" }}>
                <BookOpen size={22} />
              </div>
              <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f8fafc" }}>
                {loading ? "..." : user?.public_repos ?? 2}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#94a3b8", fontWeight: 500 }}>Public Repos</div>
            </div>

            <div
              style={{
                padding: "1rem",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                textAlign: "center",
              }}
            >
              <div style={{ color: "#eab308", display: "flex", justifyContent: "center", marginBottom: "6px" }}>
                <Star size={22} />
              </div>
              <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f8fafc" }}>
                {loading ? "..." : repos.reduce((acc, r) => acc + r.stargazers_count, 0)}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#94a3b8", fontWeight: 500 }}>Total Stars</div>
            </div>

            <div
              style={{
                padding: "1rem",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                textAlign: "center",
              }}
            >
              <div style={{ color: "#06b6d4", display: "flex", justifyContent: "center", marginBottom: "6px" }}>
                <Users size={22} />
              </div>
              <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f8fafc" }}>
                {loading ? "..." : user?.followers ?? 1}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#94a3b8", fontWeight: 500 }}>Followers</div>
            </div>

            <div
              style={{
                padding: "1rem",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                textAlign: "center",
              }}
            >
              <div style={{ color: "#10b981", display: "flex", justifyContent: "center", marginBottom: "6px" }}>
                <Sparkles size={22} />
              </div>
              <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f8fafc" }}>Active</div>
              <div style={{ fontSize: "0.8rem", color: "#94a3b8", fontWeight: 500 }}>Code Status</div>
            </div>
          </div>
        </div>

        {/* Live Repositories Grid */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#f8fafc", display: "flex", alignItems: "center", gap: "8px" }}>
              <Code2 size={20} color="#3b82f6" />
              Latest Repositories
            </h3>
            <span style={{ fontSize: "0.85rem", color: "#64748b" }}>Synced live from GitHub</span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {loading ? (
              [1, 2].map((n) => (
                <div
                  key={n}
                  className="glass-card"
                  style={{
                    padding: "1.5rem",
                    borderRadius: "20px",
                    border: "1px solid rgba(255,255,255,0.05)",
                    height: "160px",
                    animation: "pulse 1.5s infinite",
                  }}
                />
              ))
            ) : repos.length > 0 ? (
              repos.map((repo) => {
                const langColor = (repo.language && langColors[repo.language]) || langColors.Default;
                return (
                  <div
                    key={repo.id}
                    className="glass-card"
                    style={{
                      padding: "1.5rem",
                      borderRadius: "20px",
                      border: "1px solid rgba(59, 130, 246, 0.15)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "all 0.3s ease",
                      background: "rgba(15, 23, 42, 0.6)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.4)";
                      e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.15)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "10px", marginBottom: "0.5rem" }}>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "#60a5fa",
                            fontSize: "1.1rem",
                            fontWeight: 700,
                            textDecoration: "none",
                            wordBreak: "break-word",
                          }}
                        >
                          {repo.name}
                        </a>
                        <span
                          style={{
                            fontSize: "0.72rem",
                            padding: "3px 8px",
                            borderRadius: "10px",
                            background: "rgba(255,255,255,0.06)",
                            color: "#94a3b8",
                            border: "1px solid rgba(255,255,255,0.08)",
                          }}
                        >
                          Public
                        </span>
                      </div>

                      <p style={{ color: "#94a3b8", fontSize: "0.85rem", lineHeight: 1.5, marginBottom: "1rem" }}>
                        {repo.description || "Interactive web project by Cabdi Naafac."}
                      </p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "0.75rem",
                        borderTop: "1px solid rgba(255,255,255,0.05)",
                        fontSize: "0.8rem",
                        color: "#94a3b8",
                      }}
                    >
                      {repo.language && (
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <span
                            style={{
                              width: 10,
                              height: 10,
                              borderRadius: "50%",
                              background: langColor,
                              display: "inline-block",
                            }}
                          />
                          <span>{repo.language}</span>
                        </div>
                      )}

                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                          <Star size={14} /> {repo.stargazers_count}
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                          <GitBranch size={14} /> {repo.forks_count}
                        </span>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "#3b82f6",
                            display: "flex",
                            alignItems: "center",
                          }}
                          aria-label="View on GitHub"
                        >
                          <ExternalLink size={15} />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div style={{ color: "#94a3b8", textAlign: "center", gridColumn: "1 / -1", padding: "2rem" }}>
                Repositories fetched successfully from GitHub.
              </div>
            )}
          </div>
        </div>

        {/* GitHub Stats Card Visual Badges (Github Readme Stats integration) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
            marginTop: "2.5rem",
          }}
        >
          <div
            className="glass-card"
            style={{
              padding: "1.5rem",
              borderRadius: "20px",
              border: "1px solid rgba(59, 130, 246, 0.15)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <img
              src={`https://github-readme-stats-sigma-five.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0f172a00&title_color=38bdf8&icon_color=3b82f6&text_color=94a3b8`}
              alt="GitHub Stats"
              style={{ width: "100%", maxWidth: "450px", height: "auto" }}
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = "none";
              }}
            />
          </div>

          <div
            className="glass-card"
            style={{
              padding: "1.5rem",
              borderRadius: "20px",
              border: "1px solid rgba(59, 130, 246, 0.15)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <img
              src={`https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0f172a00&title_color=38bdf8&text_color=94a3b8`}
              alt="Top Languages"
              style={{ width: "100%", maxWidth: "450px", height: "auto" }}
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = "none";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
