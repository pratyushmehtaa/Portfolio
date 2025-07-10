
import React, { useEffect } from 'react';
import './Experience.css';
import GlowCard from './helper/glow-card';
import ParticleBackground from './ParticlesBackground';

const experiences = [
  {
    id: 1,
    title: 'Full Stack Intern',
    company: 'DDT & G HP Govt.',
    type: 'Internship',
    duration: 'June 2025 - Present',
    location: 'Shimla, India - Onsite',
    current: true,
    highlights: [
      'Worked on ongoing projects of HP Govt. websites',
      'Resolved bugs through testing and debugging.',
      'Collaborated with teams to prioritize features and fixes.',
      'Conducted peer reviews for continuous learning.',
    ],
  },
   {
    id: 2,
    title: 'Full Stack Intern',
    company: 'DDT & G HP Govt.',
    type: 'Internship',
    duration: 'June 2025 - Present',
    location: 'Shimla, India - Onsite',
    current: false,
    highlights: [
      'Worked on ongoing projects of HP Govt. websites',
      'Resolved bugs through testing and debugging.',
      'Collaborated with teams to prioritize features and fixes.',
      'Conducted peer reviews for continuous learning.',
    ],
  },

];

const Experience = () => {
 useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show'); // <-- key part for multiple triggers
        }
      });
    },
    {
      threshold: 0.2, // triggers when 20% of item is visible
    }
  );

  const items = document.querySelectorAll('.timeline-item');
  items.forEach((item) => observer.observe(item));

  return () => {
    items.forEach((item) => observer.unobserve(item));
  };
}, []);

  return (
    <div className="experience-wrapper" id="experience">
 <div className="experience-bg-wrapper">
  <ParticleBackground />
</div>

     <div className="projects-heading">
  <div className="projects-bar" />
  <h2 className="projects-title">My Experience</h2>
  <div className="projects-bar" />
</div>


      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <GlowCard identifier={`exp-${exp.id}`}>
              <div className="timeline-content">
                <div className="timeline-title">
                  <strong>{exp.title}</strong>
                  {exp.current && <span className="badge">Current</span>}
                </div>
                <p className="timeline-meta">
                  {exp.company} · {exp.type}
                </p>
                <p className="timeline-duration">
                  {exp.duration} | <span>{exp.location}</span>
                </p>
                <ul className="timeline-highlights">
                  {exp.highlights.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            </GlowCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;