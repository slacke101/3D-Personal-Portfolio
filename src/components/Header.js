import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isProjectDetailPage = location.pathname.startsWith('/project/');

  return (
    <header className="App-header">
      <nav className="App-navbar">
        {isHomePage ? (
          <>
            <a className="App-link" href="#resume">Resume</a>
            <a className="App-link" href="#projects">Projects</a>
            <a className="App-link" href="#contact">Contact</a>
          </>
        ) : isProjectDetailPage ? (
          <>
            <Link className="App-link" to="/">Home</Link>
            <a className="App-link" href="/#resume">Resume</a>
            <a className="App-link" href="/#contact">Contact</a>
          </>
        ) : (
          <>
            <Link className="App-link" to="/">Home</Link>
            <Link className="App-link" to="/projects">All Projects</Link>
            <a className="App-link" href="/#resume">Resume</a>
            <a className="App-link" href="/#contact">Contact</a>
          </>
        )}
      </nav>
      <Link to="/" className="header-title-link">
        <h1>Rafael Castro</h1>
        <h2>AI  Engineer | Software Engineer | Embedded Developer</h2>
        <h3>Oregon State University | Biological Sciences & Computer Science</h3>
      </Link>
    </header>
  );
};

export default Header;
