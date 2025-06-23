import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticlesBackground";
import Home from "./components/Home";
import Education from "./components/Education";
import SkillsPlain from "./components/SkillsPlain";
import ProjectCard from "./components/ProjectCards";
function App() {
  return (
    <div className="App">
      <ParticleBackground />
      {/* Your other content here */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Home />
        <Education />
        <SkillsPlain />
        <ProjectCard />
      </div>
    </div>
  );
}
export default App;