import React from 'react';
import { roles } from './Summary-data/data';
import Typewriter from 'typewriter-effect';
import { RiProfileLine } from "react-icons/ri";
import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";

const Home = () => {
  return (
    <>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            background: linear-gradient(to bottom right, #0f172a, #2563eb);
            color: white;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          .summary-container {
            max-width: 768px;
            margin: 0 auto;
            padding: 4rem 1.5rem;
          }

          .intro {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 1.25rem;
            font-weight: bold;
            color: #38bdf8;
            margin-bottom: 1rem;
          }

          .name {
            font-size: 3.5rem;
            font-weight: bold;
            margin: 0;
          }

          .role {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-top: 1.5rem;
            font-size: 1.25rem;
            font-weight: bold;
          }

          .role-typewriter {
            color: #38bdf8;
          }

          .description {
            margin: 1.5rem 0;
            font-size: 1rem;
            line-height: 1.8;
            color: #e5e7eb;
          }

          .resume-button-wrapper {
            margin: 2rem 0;
          }

          .resume-button {
            background-color: #14b8a6;
            color: white;
            padding: 0.5rem 1.25rem;
            font-weight: bold;
            font-size: 1rem;
            border: 2px solid #14b8a6;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .resume-button:hover {
            background-color: transparent;
            color: white;
            border-color: white;
          }

          .resume-button a {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            text-decoration: none;
            color: inherit;
          }

          .social-wrapper {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .find-me {
            font-size: 1.2rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
          }

          .social-links {
            display: flex;
            gap: 1.25rem;
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .social-links li a {
            font-size: 1.75rem;
            color: #38bdf8;
            transition: color 0.3s ease;
          }

          .social-links li a:hover {
            color: white;
          }
        `}
      </style>

      <div className="summary-container" id = "home">
        <h2 className="intro">
          <span>Hello there</span>
          
          <span>I am</span>
        </h2>

        <h1 className="name">Pratyush Mehta</h1>

        <h2 className="role">
          I&apos;m a{" "}
          <span className="role-typewriter">
            <Typewriter options={{ strings: roles, autoStart: true, loop: true }} />
          </span>
        </h2>

        <p className="description">
          A Software Developer with Bachelor&apos;s in Computer Science from Jaypee University of Information Technology specializing in Full-stack Development and Cloud Development.
        </p>

        <div className="resume-button-wrapper">
          <button className="resume-button" title="View Resume">
            <a href="/Sanjan_Vadi_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <span>View Resume</span> <RiProfileLine />
            </a>
          </button>
        </div>

        <div className="social-wrapper">
          <h4 className="find-me">Find me on :</h4>
          <ul className="social-links">
            <li title="LinkedIn">
              <a href="https://www.linkedin.com/in/sanjanvadi/" target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
              </a>
            </li>
            <li title="GitHub">
              <a href="https://github.com/sanjanvadi" target="_blank" rel="noopener noreferrer">
                <FiGithub />
              </a>
            </li>
            <li title="Instagram">
              <a href="https://www.instagram.com/sanjan_vadi/" target="_blank" rel="noopener noreferrer">
                <FiInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home