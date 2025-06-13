import React from 'react';
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from './helper/animation-lottie';
import GlowCard from './helper/glow-card';
import ParticleBackground from './ParticlesBackground';
import studyLottie from '../assets/lottie/study.json';

const Education = () => {
const educations = [
  {
    id: 1,
    title: 'B.Tech - Computer Science Engineering',
    institution: 'Jaypee University of Information Technology',
    duration: '2019 - 2023',
    score: 'CGPA: 7.59',
  },
  {
    id: 2,
    title: 'Class XII (CBSE)',
    institution: 'St. Edward’s School, Shimla',
    duration: '2018 - 2019',
    score: 'Percentage: 74.2%',
  },
  {
    id: 3,
    title: 'Class X (CBSE)',
    institution: 'St. Edward’s School, Shimla',
    duration: '2016 - 2017',
    score: 'Percentage: 90.6%',
  },
];


  return (
    <>
      
     <style>
  {`
    .education-section {
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
      justify-content: center;
      align-items: flex-start;
      padding: 60px 20px;
      background-color: #1e293b; /* Slightly darker shade */
      color: white;
    }

    .education-left {
      flex: 1 1 400px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .education-right {
      flex: 1 1 400px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
.education-section {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  align-items: flex-start;
  padding: 60px 20px;
  background-color: rgba(100, 149, 237, 0.18); /* CornflowerBlue with 18% opacity */
  color: white;
  border-radius: 12px;
}

    .education-card:hover {
      transform: scale(1.02);
      border-color: #ffffff;
    }
      .education-card {
  padding: 20px;
  background-color: rgba(56, 189, 248, 0.1); /* Sky blue with transparency */
  border: 1.5px solid #ffffff; /* White outline */
  border-radius: 12px;
  color: #e5e7eb;
  transition: transform 0.3s ease;
  backdrop-filter: blur(4px);
}


    .education-duration {
      font-size: 14px;
      color: #14b8a6;
      text-align: center;
      margin-bottom: 10px;
      font-weight: 600;
    }

    .education-details {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .education-icon {
      color: #38bdf8;
      transition: transform 0.3s ease;
    }

    .education-title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
      color: white;
    }

    .education-institution {
      font-size: 14px;
      color: #cbd5e1;
    }
      .education-duration-score {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #14b8a6;
  margin-bottom: 10px;
  font-weight: 600;
}

.education-score {
  text-align: right;
}


    @media (max-width: 768px) {
.education-section {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  align-items: flex-start;
  padding: 60px 20px;
  background-color: rgba(100, 149, 237, 0.18); /* CornflowerBlue with 18% opacity */
  color: white;
  border-radius: 12px;
}


      .education-left,
      .education-right {
        flex: 1 1 100%;
      }
    }
  `}
</style>


      <div className="education-wrapper" id="education">
        <div className="particle-background">
          <ParticleBackground />
        </div>

        <div className="education-section">
          <div className="education-left">
            <AnimationLottie animationPath={studyLottie} />
          </div>

          <div className="education-right">
            {educations.map((education) => (
              <GlowCard key={education.id} identifier={`education-${education.id}`}>
                <div className="education-card">
                 <div className="education-duration-score">
  <p>{education.duration}</p>
  <p className="education-score">{education.score}</p>
</div>

                  <div className="education-details">
                    <BsPersonWorkspace size={36} className="education-icon" />
                    <div>
                      <p className="education-title">{education.title}</p>
                      <p className="education-institution">{education.institution}</p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
