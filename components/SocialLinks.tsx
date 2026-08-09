"use client";
import React, { useState } from "react";

const SocialLinks = () => {
  const socials = [
    {
      id: "facebook",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07z" />
        </svg>
      ),
      hoverBg: "#1877F2",
      link: "https://www.facebook.com/cabdinaafac.maxamedrashiid",
    },
    {
      id: "instagram",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      hoverBg: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
      link: "#",
    },
    {
      id: "youtube",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.5 6.18a3 3 0 0 0-2.11-2.11C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.39.57A3 3 0 0 0 .5 6.18C0 8.07 0 12 0 12s0 3.93.5 5.82a3 3 0 0 0 2.11 2.11C4.5 20.5 12 20.5 12 20.5s7.5 0 9.39-.57a3 3 0 0 0 2.11-2.11C24 15.93 24 12 24 12s0-3.93-.5-5.82zM9.54 15.57V8.43L15.82 12l-6.28 3.57z"/>
        </svg>
      ),
      hoverBg: "#FF0000",
      link: "#",
    },
    {
      id: "tiktok",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
           <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-1.13 4.43-2.91 5.76-1.78 1.33-4.17 1.83-6.29 1.25-2.11-.57-3.93-2.14-4.83-4.14-.9-2-1.02-4.43-.16-6.44.86-2.02 2.65-3.66 4.79-4.34 2.15-.68 4.6-.54 6.64.44v4.13c-1.39-.93-3.23-1.18-4.81-.59-1.58.59-2.82 2.06-3.15 3.73-.34 1.67.14 3.48 1.3 4.67 1.17 1.19 3.01 1.57 4.54 1.01 1.54-.56 2.66-2.04 2.87-3.68.04-.33.02-.67.02-1.01V7.4c1.78 1.17 3.92 1.76 6.07 1.75-.01-1.36-.02-2.72-.03-4.08-1.54-.08-3.04-.6-4.24-1.57-1.2-1.05-1.92-2.58-2.05-4.16h-4.02z"/>
        </svg>
      ),
      hoverBg: "#000000",
      link: "#",
    }
  ];

  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div style={{ display: "flex", gap: "1.2rem", marginTop: "1rem" }}>
      {socials.map((social) => {
        const isHovered = hovered === social.id;
        return (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(social.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "18px", // Squircle shape like the screenshot
              background: isHovered ? social.hoverBg : "rgba(255, 255, 255, 0.08)",
              color: "#fff",
              textDecoration: "none",
              transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)", // Bouncy hover transition
              boxShadow: isHovered 
                ? "0 12px 24px rgba(0,0,0,0.3)" 
                : "0 4px 10px rgba(0,0,0,0.1)",
              transform: isHovered ? "translateY(-6px) scale(1.05)" : "translateY(0) scale(1)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            {social.icon}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
