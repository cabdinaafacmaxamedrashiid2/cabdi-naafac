export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo?: string;
  color?: string;
  createdAt: number;
}

export interface ContactMessage {
  id: string;
  message: string;
  date: string;
  read: boolean;
  replied: boolean;
}

export interface SiteConfig {
  availability: "available" | "busy" | "open_for_freelance";
  statusText: string;
  customNote?: string;
}

const DEFAULT_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Typing Speed App",
    description: "Interactive typing test application designed to practice and measure typing speed (WPM), accuracy, and errors in real-time.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80",
    github: "https://github.com/cabdinaafacmaxamedrashiid2/typing-speed-app",
    demo: "#",
    color: "#06b6d4",
    createdAt: Date.now() - 300000,
  },
  {
    id: "proj-2",
    title: "Waasan.com",
    description: "Medical & Delivery web platform — featuring Home, Delivery services, About Us, Pricing packages, and Contact sections.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    github: "https://github.com/cabdinaafacmaxamedrashiid2/waasan.com",
    demo: "#",
    color: "#3b82f6",
    createdAt: Date.now() - 200000,
  },
  {
    id: "proj-3",
    title: "Cabdi Naafac — Portfolio",
    description: "Full-Stack personal portfolio website built with Next.js, TypeScript & Tailwind CSS. Fully responsive dark-mode UI with SEO.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    github: "https://github.com/cabdinaafacmaxamedrashiid2/cabdi-naafac",
    demo: "https://cabdinaafac.netlify.app",
    color: "#8b5cf6",
    createdAt: Date.now() - 100000,
  },
  {
    id: "proj-4",
    title: "Digital CV & Resume",
    description: "Interactive modern curriculum vitae platform with instant PDF export, professional typography, and responsive sections.",
    tech: ["HTML5", "CSS3", "JavaScript", "PDF.js"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    github: "https://github.com/cabdinaafacmaxamedrashiid2/cabdi-naafac",
    demo: "/cv.html",
    color: "#10b981",
    createdAt: Date.now() - 50000,
  },
];

const DEFAULT_CONFIG: SiteConfig = {
  availability: "available",
  statusText: "🟢 Available for Freelance & Full-Time Roles",
};

const PROJECTS_KEY = "cabdi_portfolio_projects_v1";
const MESSAGES_KEY = "cabdi_portfolio_messages_v1";
const CONFIG_KEY = "cabdi_portfolio_config_v1";
const AUTH_KEY = "cabdi_admin_session_auth";

// Projects Management
export function getStoredProjects(): ProjectItem[] {
  if (typeof window === "undefined") return DEFAULT_PROJECTS;
  try {
    const raw = localStorage.getItem(PROJECTS_KEY);
    if (!raw) {
      localStorage.setItem(PROJECTS_KEY, JSON.stringify(DEFAULT_PROJECTS));
      return DEFAULT_PROJECTS;
    }
    return JSON.parse(raw);
  } catch {
    return DEFAULT_PROJECTS;
  }
}

export function saveProject(project: Omit<ProjectItem, "id" | "createdAt"> & { id?: string }): ProjectItem[] {
  if (typeof window === "undefined") return DEFAULT_PROJECTS;
  const current = getStoredProjects();
  
  if (project.id) {
    // Update
    const updated = current.map((p) => (p.id === project.id ? { ...p, ...project } : p));
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("portfolio_projects_updated"));
    return updated;
  } else {
    // Create
    const newProject: ProjectItem = {
      ...project,
      id: "proj-" + Date.now(),
      createdAt: Date.now(),
    };
    const updated = [newProject, ...current];
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("portfolio_projects_updated"));
    return updated;
  }
}

export function deleteProject(id: string): ProjectItem[] {
  if (typeof window === "undefined") return DEFAULT_PROJECTS;
  const current = getStoredProjects();
  const filtered = current.filter((p) => p.id !== id);
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(filtered));
  window.dispatchEvent(new Event("portfolio_projects_updated"));
  return filtered;
}

// Messages Management
export function getStoredMessages(): ContactMessage[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(MESSAGES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function addIncomingMessage(msgText: string): ContactMessage[] {
  if (typeof window === "undefined") return [];
  const current = getStoredMessages();
  const newMsg: ContactMessage = {
    id: "msg-" + Date.now(),
    message: msgText,
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
    read: false,
    replied: false,
  };
  const updated = [newMsg, ...current];
  localStorage.setItem(MESSAGES_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event("portfolio_messages_updated"));
  return updated;
}

export function markMessageRead(id: string, read: boolean = true): ContactMessage[] {
  if (typeof window === "undefined") return [];
  const current = getStoredMessages();
  const updated = current.map((m) => (m.id === id ? { ...m, read } : m));
  localStorage.setItem(MESSAGES_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event("portfolio_messages_updated"));
  return updated;
}

export function deleteMessage(id: string): ContactMessage[] {
  if (typeof window === "undefined") return [];
  const current = getStoredMessages();
  const filtered = current.filter((m) => m.id !== id);
  localStorage.setItem(MESSAGES_KEY, JSON.stringify(filtered));
  window.dispatchEvent(new Event("portfolio_messages_updated"));
  return filtered;
}

// Site Config Management
export function getStoredConfig(): SiteConfig {
  if (typeof window === "undefined") return DEFAULT_CONFIG;
  try {
    const raw = localStorage.getItem(CONFIG_KEY);
    return raw ? JSON.parse(raw) : DEFAULT_CONFIG;
  } catch {
    return DEFAULT_CONFIG;
  }
}

export function saveConfig(cfg: Partial<SiteConfig>): SiteConfig {
  if (typeof window === "undefined") return DEFAULT_CONFIG;
  const current = getStoredConfig();
  const updated = { ...current, ...cfg };
  localStorage.setItem(CONFIG_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event("portfolio_config_updated"));
  return updated;
}

// Admin Session Auth
export function isAdminAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(AUTH_KEY) === "true";
}

export function setAdminAuthenticated(auth: boolean): void {
  if (typeof window === "undefined") return;
  if (auth) {
    sessionStorage.setItem(AUTH_KEY, "true");
  } else {
    sessionStorage.removeItem(AUTH_KEY);
  }
}
