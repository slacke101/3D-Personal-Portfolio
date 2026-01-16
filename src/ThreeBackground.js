import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// DNA Helix Configuration
const HELIX_RADIUS = 1.5;
const HELIX_HEIGHT = 8;
const BASE_PAIRS = 30;
const BASE_PAIR_SPACING = HELIX_HEIGHT / BASE_PAIRS;

// Colors for DNA strands
const STRAND_COLOR_1 = '#d73f09'; // OSU orange
const STRAND_COLOR_2 = '#ff6b28'; // lighter orange
const BASE_COLOR = '#ffffff'; // white for base pairs

function DNABase({ position1, position2 }) {
  const ref = useRef();
  
  useFrame(() => {
    // Orient the base pair to connect the two positions
    if (ref.current && position1 && position2) {
      const midPoint = [
        (position1[0] + position2[0]) / 2,
        (position1[1] + position2[1]) / 2,
        (position1[2] + position2[2]) / 2
      ];
      ref.current.position.set(midPoint[0], midPoint[1], midPoint[2]);
      
      // Calculate direction vector
      const dir = new THREE.Vector3(
        position2[0] - position1[0],
        position2[1] - position1[1],
        position2[2] - position1[2]
      );
      const length = dir.length();
      dir.normalize();
      
      // Orient cylinder along the direction
      ref.current.lookAt(
        ref.current.position.x + dir.x,
        ref.current.position.y + dir.y,
        ref.current.position.z + dir.z
      );
      ref.current.rotateX(Math.PI / 2);
      
      // Update scale for length
      ref.current.scale.set(1, 1, length);
    }
  });

  if (!position1 || !position2) return null;

  return (
    <group ref={ref}>
      {/* Base pair connection */}
      <mesh>
        <cylinderGeometry args={[0.03, 0.03, 1, 8]} />
        <meshStandardMaterial color={BASE_COLOR} metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

function DNAStrand({ color, offset }) {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= BASE_PAIRS; i++) {
      const t = (i / BASE_PAIRS) * Math.PI * 4; // Multiple turns
      const x = Math.cos(t + offset) * HELIX_RADIUS;
      const y = (i / BASE_PAIRS) * HELIX_HEIGHT - HELIX_HEIGHT / 2;
      const z = Math.sin(t + offset) * HELIX_RADIUS;
      pts.push(new THREE.Vector3(x, y, z));
    }
    return pts;
  }, [offset]);

  const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points]);

  return (
    <group>
      {/* Strand tube */}
      <mesh>
        <tubeGeometry args={[curve, BASE_PAIRS * 2, 0.08, 16, false]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.7} 
          roughness={0.3}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}

function DNAHelix() {
  const helixRef = useRef();
  
  // Calculate base pair positions
  const basePairs = useMemo(() => {
    const pairs = [];
    for (let i = 0; i < BASE_PAIRS; i++) {
      const t = (i / BASE_PAIRS) * Math.PI * 4;
      const y = (i / BASE_PAIRS) * HELIX_HEIGHT - HELIX_HEIGHT / 2;
      
      // Position on first strand
      const x1 = Math.cos(t) * HELIX_RADIUS;
      const z1 = Math.sin(t) * HELIX_RADIUS;
      
      // Position on second strand (opposite side)
      const x2 = Math.cos(t + Math.PI) * HELIX_RADIUS;
      const z2 = Math.sin(t + Math.PI) * HELIX_RADIUS;
      
      pairs.push({
        pos1: [x1, y, z1],
        pos2: [x2, y, z2]
      });
    }
    return pairs;
  }, []);

  useFrame(({ clock }) => {
    // Rotate the entire helix
    if (helixRef.current) {
      helixRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <group ref={helixRef}>
      {/* First DNA strand */}
      <DNAStrand color={STRAND_COLOR_1} offset={0} />
      
      {/* Second DNA strand (opposite side) */}
      <DNAStrand color={STRAND_COLOR_2} offset={Math.PI} />
      
      {/* Base pairs connecting the two strands */}
      {basePairs.map((pair, i) => (
        <DNABase 
          key={i} 
          position1={pair.pos1} 
          position2={pair.pos2}
        />
      ))}
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <Canvas
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: 0, 
        background: 'transparent',
        touchAction: 'none'
      }}
      camera={{ position: [0, 0, 12], fov: 60 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color={STRAND_COLOR_1} />
      <pointLight position={[10, -10, -5]} intensity={0.5} color={STRAND_COLOR_2} />
      
      <DNAHelix />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        enableRotate={false}
        autoRotate={false}
      />
    </Canvas>
  );
}
