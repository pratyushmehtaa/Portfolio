import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <>
      <style>
        {`
          :root {
            --accent-color: #3b82f6; /* Tailwind blue-500 */
            --accent-hover: #60a5fa; /* Tailwind blue-400 */
            --text-primary: #ffffff;
            --text-secondary: #d1d5db; /* Tailwind gray-300 */
            --border-radius: 12px;
            --card-border: 1px solid rgba(255, 255, 255, 0.15);
            --box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
          }

          .about-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
            gap: 40px;
            margin: 60px 0;
            width: 100%;
            box-sizing: border-box;
          }

          .about-card {
            background: linear-gradient(135deg, #1e3a8a, #2563eb); /* Blue gradient */
            border-radius: var(--border-radius);
            padding: 40px;
            border: var(--card-border);
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
            width: 100%;
            color: var(--text-primary);
            box-sizing: border-box;
          }

          .about-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            background: rgba(255, 255, 255, 0.05);
            transition: width 0.4s ease;
            z-index: 0;
          }

          .about-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--box-shadow);
            border-color: rgba(255, 255, 255, 0.2);
          }

          .about-card:hover::before {
            width: 100%;
          }

          .about-card h3 {
            margin-top: 0;
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            gap: 15px;
            position: relative;
            z-index: 1;
            font-size: 1.5rem;
          }

          .timeline {
            position: relative;
            margin-top: 30px;
            padding-left: 30px;
            border-left: 2px solid rgba(255, 255, 255, 0.2);
          }

          .timeline-item {
            margin-bottom: 40px;
            padding-left: 20px;
            position: relative;
            z-index: 1;
          }

          .timeline-item::before {
            content: '';
            position: absolute;
            width: 15px;
            height: 15px;
            background: var(--accent-color);
            border-radius: 50%;
            left: -38px;
            top: 6px;
            box-shadow: 0 0 0 5px rgba(59, 130, 246, 0.2);
            transition: all 0.3s ease;
          }

          .timeline-item:hover::before {
            background: var(--accent-hover);
            box-shadow: 0 0 0 8px rgba(96, 165, 250, 0.3);
            transform: scale(1.2);
          }

          .timeline-item h4 {
            font-size: 20px;
            margin-bottom: 12px;
            font-weight: 600;
          }

          .timeline-date {
            color: var(--accent-color);
            font-size: 14px;
            margin-bottom: 15px;
            display: inline-block;
            padding: 5px 12px;
            background: rgba(59, 130, 246, 0.1);
            border-radius: 50px;
            font-weight: 500;
          }

          .timeline-item p {
            color: var(--text-secondary);
            margin-bottom: 10px;
            font-size: 16px;
            line-height: 1.7;
          }
        `}
      </style>

      <div className="about-cards" id = "education">
        <div className="about-card education">
          <h3><FaGraduationCap /> Education</h3>
          <div className="timeline">
            <div className="timeline-item">
              <h4>B.Tech, Computer Science</h4>
              <p className="timeline-date">Aug 2022 – June 2026</p>
              <p>Jaypee University of Information Technology</p>
              <p>CGPA: 7.6</p>
              <p>Coursework: Object-Oriented Programming, Data Structures and Algorithms, Programming in Python, Web Development, Database Management Systems.</p>
            </div>
            <div className="timeline-item">
              <h4>Non-Medical</h4>
              <p className="timeline-date">April 2021 – June 2022</p>
              <p>St.Edward's Shimla</p>
              <p>Percentage: 74.2%</p>
            </div>
            <div className="timeline-item">
              <h4>Senior Secondary Class X</h4>
              <p className="timeline-date">April 2021 – April 2022</p>
              <p>St.Edward's Shimla</p>
              <p>Percentage: 90.1%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
