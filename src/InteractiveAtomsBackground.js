import React, { useRef, useEffect, useState } from 'react';
import './AtomsBackground.css';

const ELEMENTS = ['H', 'O', 'C', 'N', 'S', 'Cl', 'Na', 'K', 'Ca', 'Fe', 'Mg', 'P', 'F', 'Zn', 'Cu', 'Br', 'I', 'Si', 'Al', 'Pb', 'Ag', 'Au', 'Li', 'He', 'Ne'];
const COLORS = [
  '#d73f09', '#1e90ff', '#ffd700', '#32cd32', '#ff69b4', '#ffffff',
  '#ff6347', '#00ced1', '#ffa500', '#8a2be2', '#00ff7f', '#ff4500',
  '#e9967a', '#00bfff', '#adff2f', '#ffb6c1', '#f0e68c', '#7fffd4',
  '#ff00ff', '#00fa9a', '#b22222', '#4682b4', '#ffdab9', '#20b2aa', '#bdb76b'
];
const ATOM_COUNT = 25;
const ATOM_SIZE = 36;
const ATOM_RADIUS = ATOM_SIZE / 2;

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const makeAtom = (i) => {
  const letter = ELEMENTS[i % ELEMENTS.length];
  return {
    id: i,
    x: getRandom(0, window.innerWidth - ATOM_SIZE),
    y: getRandom(0, window.innerHeight - ATOM_SIZE),
    vx: getRandom(-0.7, 0.7),
    vy: getRandom(-0.7, 0.7),
    color: COLORS[getRandomInt(0, COLORS.length - 1)],
    letter,
    dragging: false,
    offsetX: 0,
    offsetY: 0,
  };
};

function resolveCollision(a, b) {
  // 2D elastic collision for equal mass
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const dist = Math.sqrt(dx * dx + dy * dy) || 1;
  const nx = dx / dist;
  const ny = dy / dist;
  // Relative velocity
  const dvx = a.vx - b.vx;
  const dvy = a.vy - b.vy;
  // Only resolve if moving toward each other
  if (dvx * nx + dvy * ny > 0) return;
  // Project velocities onto collision normal
  const p = 2 * (dvx * nx + dvy * ny) / 2; // equal mass
  return {
    avx: a.vx - p * nx,
    avy: a.vy - p * ny,
    bvx: b.vx + p * nx,
    bvy: b.vy + p * ny,
  };
}

const InteractiveAtomsBackground = () => {
  const [atoms, setAtoms] = useState(() => Array.from({ length: ATOM_COUNT }, (_, i) => makeAtom(i)));
  const animationRef = useRef();
  const dragAtomId = useRef(null);

  useEffect(() => {
    const animate = () => {
      setAtoms(prevAtoms => {
        // Move atoms
        let nextAtoms = prevAtoms.map(atom => {
          if (atom.dragging) return atom;
          let { x, y, vx, vy } = atom;
          x += vx;
          y += vy;
          // Bounce off edges
          if (x < 0) { x = 0; vx = -vx; }
          if (x > window.innerWidth - ATOM_SIZE) { x = window.innerWidth - ATOM_SIZE; vx = -vx; }
          if (y < 0) { y = 0; vy = -vy; }
          if (y > window.innerHeight - ATOM_SIZE) { y = window.innerHeight - ATOM_SIZE; vy = -vy; }
          return { ...atom, x, y, vx, vy };
        });
        // Handle collisions
        for (let i = 0; i < nextAtoms.length; ++i) {
          for (let j = i + 1; j < nextAtoms.length; ++j) {
            const a = nextAtoms[i];
            const b = nextAtoms[j];
            if (a.dragging || b.dragging) continue;
            const dx = b.x - a.x;
            const dy = b.y - a.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < ATOM_SIZE) {
              // Move atoms apart
              const overlap = (ATOM_SIZE - dist) / 2;
              const nx = dx / (dist || 1);
              const ny = dy / (dist || 1);
              nextAtoms[i].x -= nx * overlap;
              nextAtoms[i].y -= ny * overlap;
              nextAtoms[j].x += nx * overlap;
              nextAtoms[j].y += ny * overlap;
              // Update velocities
              const result = resolveCollision(a, b);
              if (result) {
                nextAtoms[i].vx = result.avx;
                nextAtoms[i].vy = result.avy;
                nextAtoms[j].vx = result.bvx;
                nextAtoms[j].vy = result.bvy;
              }
            }
          }
        }
        return [...nextAtoms];
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  // Drag handlers (unchanged)
  const onPointerDown = (e, id) => {
    e.preventDefault();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    setAtoms(prevAtoms => prevAtoms.map(atom =>
      atom.id === id
        ? { ...atom, dragging: true, offsetX: clientX - atom.x, offsetY: clientY - atom.y }
        : atom
    ));
    dragAtomId.current = id;
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('touchmove', onPointerMove, { passive: false });
    window.addEventListener('touchend', onPointerUp);
  };

  const onPointerMove = (e) => {
    if (dragAtomId.current === null) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    setAtoms(prevAtoms => prevAtoms.map(atom => {
      if (atom.id !== dragAtomId.current || !atom.dragging) return atom;
      let x = clientX - atom.offsetX;
      let y = clientY - atom.offsetY;
      // Clamp to window
      x = Math.max(0, Math.min(window.innerWidth - ATOM_SIZE, x));
      y = Math.max(0, Math.min(window.innerHeight - ATOM_SIZE, y));
      return { ...atom, x, y };
    }));
  };

  const onPointerUp = (e) => {
    if (dragAtomId.current === null) return;
    const clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const clientY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
    setAtoms(prevAtoms => prevAtoms.map(atom => {
      if (atom.id !== dragAtomId.current || !atom.dragging) return atom;
      // Calculate velocity based on last movement (for throw effect)
      let vx = (clientX - atom.x - atom.offsetX) * 0.2;
      let vy = (clientY - atom.y - atom.offsetY) * 0.2;
      vx = Math.max(-2, Math.min(2, vx));
      vy = Math.max(-2, Math.min(2, vy));
      return { ...atom, dragging: false, vx, vy };
    }));
    dragAtomId.current = null;
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('touchmove', onPointerMove);
    window.removeEventListener('touchend', onPointerUp);
  };

  return (
    <div className="atoms-bg">
      {atoms.map(atom => (
        <div
          key={atom.id}
          className="interactive-atom"
          style={{
            left: atom.x,
            top: atom.y,
            background: atom.color,
            color: '#000',
            width: ATOM_SIZE,
            height: ATOM_SIZE,
            borderRadius: '50%',
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: 18,
            userSelect: 'none',
            cursor: 'grab',
            boxShadow: `0 0 12px 2px ${atom.color}55` ,
            transition: atom.dragging ? 'none' : 'box-shadow 0.2s',
            opacity: 0.85,
          }}
          onPointerDown={e => onPointerDown(e, atom.id)}
          onTouchStart={e => onPointerDown(e, atom.id)}
        >
          {atom.letter}
        </div>
      ))}
    </div>
  );
};

export default InteractiveAtomsBackground; 