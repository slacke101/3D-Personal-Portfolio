import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectsPage from './ProjectsPage';
import ProjectDetail from './components/ProjectDetail';
import ThreeBackground from './ThreeBackground';
import './App.css';

function MainPage() {
  const resumeRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const [theme, setTheme] = useState('resume');

  useEffect(() => {
    const handleScroll = () => {
      const resumeTop = resumeRef.current?.getBoundingClientRect().top;
      const projectsTop = projectsRef.current?.getBoundingClientRect().top;
      const contactTop = contactRef.current?.getBoundingClientRect().top;
      const offset = window.innerHeight / 3;
      if (contactTop - offset < 0) {
        setTheme('contact');
      } else if (projectsTop - offset < 0) {
        setTheme('projects');
      } else {
        setTheme('resume');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ThreeBackground />
      <div className={`App theme-${theme}`} style={{ position: 'relative', zIndex: 10 }}>
        <Header />
        <main className="main-content">
          <div ref={resumeRef}>
            <Resume />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
          <div style={{ textAlign: 'right', margin: '2em 0 0 0', padding: '0 2em' }}>
            <Link to="/projects" className="App-link">See All Projects →</Link>
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
        </main>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
