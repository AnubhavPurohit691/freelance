import React, { useState, Suspense } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

// Model component with volume-based scaling
function Model({ volume, ...props }) {
  const { nodes, materials } = useGLTF('./PYTH h.glb');
  
  // Convert volume (0-100) to a reasonable scale range (0.1-2)
  const scale = (volume / 100) * 1.9 + 0.1;

  return (
    <group {...props} scale={[scale, scale, scale]}>
      <mesh
        name="Plane001"
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials['Material.001']}
      />
      <mesh
        name="Plane001_1"
        castShadow
        receiveShadow
        geometry={nodes.Plane001_1.geometry}
        material={materials['Material.002']}
      />
      <mesh
        name="Plane001_2"
        castShadow
        receiveShadow
        geometry={nodes.Plane001_2.geometry}
        material={materials['Material.003']}
      />
      <mesh
        name="Plane001_3"
        castShadow
        receiveShadow
        geometry={nodes.Plane001_3.geometry}
        material={materials['Material.004']}
      />
      <mesh
        name="Plane001_4"
        castShadow
        receiveShadow
        geometry={nodes.Plane001_4.geometry}
        material={materials['Material.005']}
      />
    </group>
  );
}

// Volume control component
const VolumeControl = React.memo(({ volume, onVolumeChange }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium">
      Volume Control: {volume}%
    </label>
    <div className="flex items-center gap-4">
      <span className="text-sm">🔈</span>
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={onVolumeChange}
        className="w-full"
      />
      <span className="text-sm">🔊</span>
    </div>
  </div>
));

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-full">
    <div className="text-lg">Loading 3D Model...</div>
  </div>
);

// Main component
function VolumeControlledModel() {
  const [volume, setVolume] = useState(50); // Start at 50%

  const handleVolumeChange = (e) => {
    setVolume(parseInt(e.target.value));
  };

  return (
    <div className="w-full max-w-4xl p-6 border rounded-lg shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">3D Model Volume Control</h2>
        <p className="text-sm text-gray-600">
          Use the volume slider to control the model's size
        </p>
      </div>

      <div className="space-y-6">
        <VolumeControl 
          volume={volume} 
          onVolumeChange={handleVolumeChange}
        />
        
        <div className="h-96 bg-gray-100 rounded-lg">
          <Suspense fallback={<LoadingFallback />}>
            <Canvas
              shadows
              camera={{ position: [5, 5, 5], fov: 75 }}
            >
              <ambientLight intensity={0.5} />
              <directionalLight
                position={[10, 10, 10]}
                castShadow
                intensity={1}
              />
              <Suspense fallback={null}>
                <Model volume={volume} />
              </Suspense>
            </Canvas>
          </Suspense>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="font-medium mb-2">Current Settings:</h3>
          <p className="text-sm text-gray-600">
            Model Scale: {((volume / 100) * 1.9 + 0.1).toFixed(2)}x
          </p>
        </div>
      </div>
    </div>
  );
}

// Preload the model
useGLTF.preload('./PYTH h.glb');

export default VolumeControlledModel;