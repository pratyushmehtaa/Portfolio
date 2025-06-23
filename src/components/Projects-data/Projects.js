import hostelImg from "./Mockup-photos/Hostel-Comp.png";
import similarityImg from "./Mockup-photos/Hostel-Comp.png";
import cafeteriaImg from "./Mockup-photos/Hostel-Comp.png";

export const projectData = [
  {
    title: "Hostel Complaints Management Portal",
    imgPath: hostelImg,
    description:
      "A full-stack portal for complaint registration, tracking, and feedback with JWT-based role access. Built with React, Node.js, and PostgreSQL.",
    ghLink: "https://github.com/yourusername/hostel-complaints-portal",
    demoLink: "https://your-demo-link.com",
  },
  {
    title: "Document Similarity Checker",
    imgPath: similarityImg,
    description:
      "React + Flask tool to compare images or docs using OCR and NLP (Google Vision API + cosine similarity).",
    ghLink: "https://github.com/yourusername/document-similarity-checker",
    demoLink: "https://your-demo-link.com",
  },
  {
    title: "Open Cafeteria Ordering System",
    imgPath: cafeteriaImg,
    description:
      "A React-based frontend for virtual cafeteria ordering with cart, QR payment, and localStorage.",
    ghLink: "https://github.com/yourusername/open-cafeteria-ordering",
    demoLink: "https://your-demo-link.com",
  },
];
