import React from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Route, Routes } from 'react-router-dom';
import { OrbitControls } from '@react-three/drei';

// Preload the 3D model
useGLTF.preload('/LADDER03.glb');

 function Model(props) {
  const { nodes, materials } = useGLTF('/LADDER03.glb');

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials['Material.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.002']}
        scale={24.752}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ladders018.geometry}
        material={materials.lambert49SG}
        position={[-0.11, 6.621, -5.527]}
        rotation={[2.244, 0, -Math.PI / 2]}
        scale={0.051}
      />
      <group position={[16.616, 0.775, -4]} rotation={[-0.062, 0, -0.004]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gs_forest_seedlings_01.geometry}
          material={materials['.gs_seedling_01_stem']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gs_forest_seedlings_01_1.geometry}
          material={materials['.gs_seedling_01']}
        />
      </group>
      <group position={[11.848, 0.485, -7.18]} rotation={[-0.009, 0, 0.02]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gs_dryland_meadow_flower_01.geometry}
          material={materials['.gs_grass__dryland']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gs_dryland_meadow_flower_01_1.geometry}
          material={materials['.gs_grass_flower']}
        />
      </group>
    </group>
  );
}

export function Model2() {
  return (
    <Canvas camera={{ position: [40, 15, -10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Model/>
      <OrbitControls />
    </Canvas>
  );
}
