import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

const ATOM_COUNT = 25;
const ATOM_RADIUS = 0.25;

function getRandomPosition() {
  // Spread atoms in a 3D box
  return [
    (Math.random() - 0.5) * 8,
    (Math.random() - 0.5) * 4,
    (Math.random() - 0.5) * 8
  ];
}

function getRandomColor() {
  const colors = [
    '#d73f09', // OSU orange
    '#ff6b28', // lighter orange
    '#ff9248', // peachy
    '#ffb36b', // light orange
    '#ffffff'  // occasional white highlight
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function FloatingAtom({ position, color, speed }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    // Animate position in a gentle floating pattern
    const t = clock.getElapsedTime() * speed;
    ref.current.position.x = position[0] + Math.sin(t + position[1]) * 0.5;
    ref.current.position.y = position[1] + Math.cos(t + position[0]) * 0.3;
    ref.current.position.z = position[2] + Math.sin(t + position[2]) * 0.5;
    ref.current.rotation.x += 0.01 * speed;
    ref.current.rotation.y += 0.008 * speed;
  });
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <sphereGeometry args={[ATOM_RADIUS, 32, 32]} />
      <meshStandardMaterial color={color} metalness={0.7} roughness={0.25} />
    </mesh>
  );
}

// WavePlane component
function WavePlane() {
  const ref = useRef();
  const grid = 40;
  const size = 30;
  // Create plane geometry in memo to prevent recreation
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(size, size, grid, grid);
    geo.rotateX(-Math.PI / 2);
    return geo;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const pos = ref.current.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const wave = Math.sin((x + t) * 0.6) * 0.4 + Math.cos((y + t * 0.8) * 0.6) * 0.4;
      pos.setZ(i, wave);
    }
    pos.needsUpdate = true;
    ref.current.geometry.computeVertexNormals();
  });

  return (
    <mesh ref={ref} geometry={geometry} position={[0, -1, 0]}>
      <meshStandardMaterial color="#1a1f2b" metalness={0.4} roughness={0.8} />
    </mesh>
  );
}

export default function ThreeBackground() {
  // Generate atoms only once
  const atoms = React.useMemo(() =>
    Array.from({ length: ATOM_COUNT }, () => ({
      position: getRandomPosition(),
      color: getRandomColor(),
      speed: 0.5 + Math.random() * 0.7
    })),
    []
  );

  return (
    <Canvas
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, background: 'transparent' }}
      camera={{ position: [0, 0, 8], fov: 60 }}
      gl={{ alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <Environment preset="sunset" />
      {atoms.map((atom, i) => (
        <FloatingAtom key={i} position={atom.position} color={atom.color} speed={atom.speed} />
      ))}
      <WavePlane />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
} 