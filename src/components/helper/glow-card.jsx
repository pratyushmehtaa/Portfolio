"use client";
import { useEffect, useRef } from "react";

const GlowCard = ({ children }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    const onMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const angle = Math.atan2(y, x) * (180 / Math.PI);
      card.style.setProperty("--glow-angle", `${angle + 180}deg`);
      card.style.setProperty("--glow-opacity", 1);
    };

    const onLeave = () => {
      card.style.setProperty("--glow-opacity", 0);
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);

    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="glow-card-wrapper relative w-full rounded-xl border border-white overflow-hidden transition-all duration-300"
    >
      {/* Glow border layer */}
      <div className="glow-outline pointer-events-none absolute inset-0 rounded-xl z-10" />
      <div className="relative z-20">{children}</div>

      <style jsx>{`
        .glow-outline {
          background: conic-gradient(
            from var(--glow-angle, 0deg),
            #38bdf8,
            #14b8a6,
            #38bdf8
          );
          opacity: var(--glow-opacity, 0);
          filter: blur(8px) brightness(1.3);
          transition: opacity 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default GlowCard;
