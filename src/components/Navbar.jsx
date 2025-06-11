import React, { useState } from 'react';

const Navbar = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        :root {
          --color-bg: #ffffff;
          --color-text: #374151;
          --color-text-muted: #6b7280;
          --color-hover: #111827;
          --shadow-md: rgba(0, 0, 0, 0.1);
          --transition-speed: 0.3s;
        }

        nav {
          position: sticky;
          top: 0;
          width: 100%;
          background: var(--color-bg);
          box-shadow: 0 2px 8px var(--shadow-md);
          z-index: 1000;
          font-family: 'Inter', sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          height: 64px;
          justify-content: space-between;
        }

        .brand {
          font-weight: 700;
          font-size: 1.5rem;
          color: var(--color-text);
          user-select: none;
          cursor: default;
          letter-spacing: -0.02em;
        }

        .hamburger {
          display: none;
          cursor: pointer;
          flex-direction: column;
          gap: 5px;
        }

        .hamburger div {
          width: 25px;
          height: 3px;
          background-color: var(--color-text);
          transition: all 0.3s ease;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 1.75rem;
          margin: 0;
          padding: 0;
          align-items: center;
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-text-muted);
        }

        .nav-links > li {
          position: relative;
        }

        .nav-links > li > a {
          text-decoration: none;
          color: inherit;
          padding: 0.25rem 0;
          transition: color var(--transition-speed), transform var(--transition-speed);
          user-select: none;
          white-space: nowrap;
        }

        .nav-links > li > a:hover,
        .nav-links > li > a:focus {
          color: var(--color-hover);
          outline: none;
          transform: scale(1.05);
        }

        .dropdown {
          position: absolute;
          top: 2.5rem;
          left: 0;
          background: var(--color-bg);
          border-radius: 0.75rem;
          box-shadow: 0 8px 24px var(--shadow-md);
          padding: 0.5rem 0;
          min-width: 10rem;
          opacity: 0;
          pointer-events: none;
          transform: translateY(10px);
          transition: opacity var(--transition-speed), transform var(--transition-speed);
          user-select: none;
          z-index: 1100;
        }

        .dropdown-open .dropdown {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }

        .dropdown a {
          display: block;
          padding: 0.5rem 1.5rem;
          font-size: 0.95rem;
          color: var(--color-text-muted);
          text-decoration: none;
          white-space: nowrap;
          transition: background-color var(--transition-speed), color var(--transition-speed);
        }

        .dropdown a:hover,
        .dropdown a:focus {
          background: #f3f4f6;
          color: var(--color-hover);
          outline: none;
          border-radius: 0.5rem;
        }

        .dropdown-toggle::after {
          content: '▾';
          margin-left: 0.3rem;
          font-size: 0.6rem;
          vertical-align: middle;
          color: var(--color-text-muted);
          transition: transform var(--transition-speed);
        }

        .dropdown-open > .dropdown-toggle::after {
          transform: rotate(180deg);
          color: var(--color-hover);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .nav-links {
            position: absolute;
            top: 64px;
            left: 0;
            right: 0;
            flex-direction: column;
            background: var(--color-bg);
            padding: 1rem 0;
            gap: 1rem;
            box-shadow: 0 2px 10px var(--shadow-md);
            display: none;
          }

          .nav-links.mobile-open {
            display: flex;
          }

          .nav-links .dropdown {
            position: static;
            transform: none;
            opacity: 1 !important;
            pointer-events: auto;
            box-shadow: none;
            border-radius: 0;
            padding-left: 1.5rem;
          }

          .nav-links .dropdown a {
            padding-left: 1rem;
          }
        }
      `}</style>

      <nav role="navigation" aria-label="Primary Navigation">
        <div className="container">
          <div className="brand">PM</div>

          <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#home">Home</a></li>

            <li className={aboutOpen ? 'dropdown-open' : ''}>
              <a
                href="#about"
                className="dropdown-toggle"
                onClick={(e) => {
                  e.preventDefault();
                  setAboutOpen(!aboutOpen);
                }}
              >
                About
              </a>
              {aboutOpen && (
                <div className="dropdown">
                  <a href="#summary">Summary</a>
                  <a href="#education">Education</a>
                  <a href="#history">History</a>
                </div>
              )}
            </li>

            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
