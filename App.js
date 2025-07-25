import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectsPage from './ProjectsPage';
import ThreeBackground from './ThreeBackground';
import './App.css';

function MainPage() {
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const [theme, setTheme] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const aboutTop = aboutRef.current.getBoundingClientRect().top;
      const projectsTop = projectsRef.current.getBoundingClientRect().top;
      const contactTop = contactRef.current.getBoundingClientRect().top;
      const offset = window.innerHeight / 3;
      if (contactTop - offset < 0) {
        setTheme('contact');
      } else if (projectsTop - offset < 0) {
        setTheme('projects');
      } else {
        setTheme('about');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ThreeBackground />
      <div className={`App theme-${theme}`}>
        <Header />
        <main style={{ width: '100%', maxWidth: 900, margin: '0 auto', padding: '2em 0' }}>
          <div ref={aboutRef}><About /></div>
          <div ref={projectsRef}><Projects /></div>
          <div style={{ textAlign: 'right', margin: '2em 0 0 0' }}>
            <Link to="/projects" className="App-link">See All Projects →</Link>
          </div>
          <div ref={contactRef}><Contact /></div>
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
      </Routes>
    </Router>
  );
}

export default App;
