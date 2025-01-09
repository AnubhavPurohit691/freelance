import React from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Route, Routes } from 'react-router-dom';
import { OrbitControls } from '@react-three/drei';

useGLTF.preload('./PYTH h.glb');  // Preload the model outside of the component

 function Model(props) {
  const { nodes, materials } = useGLTF('./PYTH h.glb');

  return (
    <group {...props} dispose={null}>
      <mesh
        name="Plane001"
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials['Material.001']}
        morphTargetDictionary={nodes.Plane001.morphTargetDictionary}
        morphTargetInfluences={nodes.Plane001.morphTargetInfluences}
      />
      <mesh
        name="Plane001_1"
        castShadow
        receiveShadow
        geometry={nodes.Plane001_1.geometry}
        material={materials['Material.002']}
        morphTargetDictionary={nodes.Plane001_1.morphTargetDictionary}
        morphTargetInfluences={nodes.Plane001_1.morphTargetInfluences}
      />
      <mesh
        name="Plane001_2"
        castShadow
        receiveShadow
        geometry={nodes.Plane001_2.geometry}
        material={materials['Material.003']}
        morphTargetDictionary={nodes.Plane001_2.morphTargetDictionary}
        morphTargetInfluences={nodes.Plane001_2.morphTargetInfluences}
      />
      <mesh
        name="Plane001_3"
        castShadow
        receiveShadow
        geometry={nodes.Plane001_3.geometry}
        material={materials['Material.004']}
        morphTargetDictionary={nodes.Plane001_3.morphTargetDictionary}
        morphTargetInfluences={nodes.Plane001_3.morphTargetInfluences}
      />
      <mesh
        name="Plane001_4"
        castShadow
        receiveShadow
        geometry={nodes.Plane001_4.geometry}
        material={materials['Material.005']}
        morphTargetDictionary={nodes.Plane001_4.morphTargetDictionary}
        morphTargetInfluences={nodes.Plane001_4.morphTargetInfluences}
      />
    </group>
  );
}

export function Model1() {
  return (
    <Canvas camera={{ position: [0, 10, 0], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Model/>
      <OrbitControls />
    </Canvas>
  );
}
