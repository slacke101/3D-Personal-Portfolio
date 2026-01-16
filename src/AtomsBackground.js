import React from 'react';
import './AtomsBackground.css';

const atoms = [
  { color: '#d73f09', size: 60, top: '10%', left: '15%', duration: 18 },
  { color: '#1e90ff', size: 40, top: '30%', left: '70%', duration: 22 },
  { color: '#ffd700', size: 50, top: '60%', left: '25%', duration: 16 },
  { color: '#32cd32', size: 35, top: '80%', left: '60%', duration: 20 },
  { color: '#ff69b4', size: 45, top: '50%', left: '50%', duration: 24 },
  { color: '#ffffff', size: 55, top: '20%', left: '80%', duration: 19 },
];

const Atom = ({ color, size, top, left, duration }) => (
  <svg
    className="floating-atom"
    style={{ top, left, width: size, height: size, animationDuration: `${duration}s` }}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="30" cy="30" rx="28" ry="12" stroke={color} strokeWidth="3" />
    <ellipse cx="30" cy="30" rx="12" ry="28" stroke={color} strokeWidth="3" transform="rotate(45 30 30)" />
    <circle cx="30" cy="30" r="7" fill={color} />
  </svg>
);

const AtomsBackground = () => (
  <div className="atoms-bg">
    {atoms.map((atom, i) => <Atom key={i} {...atom} />)}
  </div>
);

export default AtomsBackground; 