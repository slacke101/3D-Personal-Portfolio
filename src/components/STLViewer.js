import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import * as THREE from 'three';
import './STLViewer.css';

// STL Model Component
function STLModel({ url, color = '#d73f09', rotation = [0, 0, 0] }) {
  const meshRef = useRef();
  const [geometry, setGeometry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    const loader = new STLLoader();
    loader.load(
      url,
      (geometry) => {
        // Center and normalize the geometry
        geometry.computeVertexNormals();
        geometry.center();
        
        // Scale to fit in view
        const box = new THREE.Box3().setFromObject(new THREE.Mesh(geometry));
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2 / maxDim;
        geometry.scale(scale, scale, scale);
        
        setGeometry(geometry);
        setLoading(false);
      },
      undefined,
      (error) => {
        console.error('Error loading STL:', error);
        setError(error);
        setLoading(false);
      }
    );
  }, [url]);

  // Set initial rotation
  React.useEffect(() => {
    if (meshRef.current && rotation) {
      meshRef.current.rotation.set(rotation[0], rotation[1], rotation[2]);
    }
  }, [rotation, geometry]);

  if (loading) {
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#333" wireframe />
      </mesh>
    );
  }

  if (error || !geometry) {
    return null;
  }

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={rotation}>
      <meshStandardMaterial 
        color={color}
        metalness={0.7}
        roughness={0.3}
        emissive={color}
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

// Main STL Viewer Component
const STLViewer = ({ stlFiles = [], title = "3D Model Viewer", autoRotate = false }) => {
  const [selectedModel, setSelectedModel] = useState(stlFiles[0] || null);
  const [isRotating, setIsRotating] = useState(autoRotate);
  const controlsRef = useRef();

  // Reset camera view
  const resetView = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  return (
    <div className="stl-viewer-container">
      {title && <h3 className="stl-viewer-title">{title}</h3>}
      
      {stlFiles.length > 1 && (
        <div className="stl-file-selector">
          <label>Select Model: </label>
          <select 
            value={selectedModel || ''} 
            onChange={(e) => setSelectedModel(e.target.value)}
            className="stl-select"
          >
            {stlFiles.map((file, index) => (
              <option key={index} value={file.url}>
                {file.name || `Model ${index + 1}`}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="stl-viewer-controls">
        <button 
          onClick={resetView}
          className="stl-control-btn"
          title="Reset View"
        >
          🔄 Reset View
        </button>
        <span className="stl-control-hint">
          Click and drag to rotate • Scroll to zoom • Right-click and drag to pan
        </span>
      </div>

      <div className="stl-canvas-wrapper">
        <Canvas
          camera={{ position: [5, 5, 5], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'rgba(15, 15, 25, 0.8)' }}
        >
          <PerspectiveCamera makeDefault position={[5, 5, 5]} />
          
          {/* Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} />
          <pointLight position={[0, 10, 0]} intensity={0.3} color="#d73f09" />
          
          {/* Grid Helper */}
          <gridHelper args={[10, 10, '#444', '#222']} />
          <axesHelper args={[2]} />
          
          {/* STL Model */}
          {selectedModel && (
            <Suspense fallback={null}>
              <STLModel 
                url={selectedModel.url || selectedModel} 
                color={selectedModel.color || '#d73f09'}
                rotation={selectedModel.rotation || [0, 0, 0]} // [x, y, z] rotation in radians
              />
            </Suspense>
          )}
          
          {/* Controls */}
          <OrbitControls
            ref={controlsRef}
            enableDamping
            dampingFactor={0.05}
            minDistance={2}
            maxDistance={20}
            autoRotate={false}
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default STLViewer;
