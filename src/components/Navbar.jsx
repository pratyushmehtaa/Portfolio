import React from "react";
import { Home, User, GraduationCap, Code, Laptop, Briefcase, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <div style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      display: "flex",
      justifyContent: "center",
      padding: "1rem 0",
      background: "transparent"
    }}>
      {/* Outer Glow Wrapper */}
      <div style={{
        padding: "2px",
        borderRadius: "9999px",
        background: "linear-gradient(90deg, #a855f7, #38bdf8)",
 // your requested border
        filter: "drop-shadow(0 0 6px rgba(59, 130, 246, 0.3))",
      }}>
        {/* Inner Navbar */}
        <nav style={{
          display: "flex",
          alignItems: "center",
          background: "rgba(15, 23, 42, 0.6)", // inner dark glass background
          padding: "0.5rem 1.5rem",
          borderRadius: "9999px",
          backdropFilter: "blur(10px)",
          position: "relative",
        }}>
          {[
            { icon: <Home size={18} />, label: "Home", href: "#home" },
            { icon: <User size={18} />, label: "About Me", href: "#about" },
            { icon: <GraduationCap size={18} />, label: "Education", href: "#education" },
            { icon: <Code size={18} />, label: "Skills", href: "#skills" },
            { icon: <Laptop size={18} />, label: "Projects", href: "#projects" },
            { icon: <Briefcase size={18} />, label: "Experience", href: "#experience" },
            { icon: <Mail size={18} />, label: "Contact", href: "#contact" }
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "white",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "0.95rem",
                padding: "0.4rem 0.9rem",
                borderRadius: "999px",
                transition: "all 0.3s ease",
                margin: "0 0.3rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              {item.icon}
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
