

import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/PYTH h.glb')
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
  )
}

useGLTF.preload('/PYTH h.glb')





export default function ModelViewer() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "3D MODEL VIEWER",
      content: "INTRODUCTION"
    },
    {
      title: "YELLOW CUBE",
      content: "A detailed 3D model of a yellow cube with custom materials and lighting.",
      details: "Interact with the model using your mouse: Left click to rotate, right click to pan, scroll to zoom."
    }
  ]

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-8">
      <div className="w-full max-w-5xl">
        {/* Main Content Card */}
        <div className="relative bg-white rounded-2xl p-12 shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] mb-3 overflow-hidden">
          {/* Geometric Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-zinc-100 to-transparent rounded-full blur-3xl opacity-70" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-t from-zinc-100 to-transparent rounded-full blur-3xl opacity-70" />
          
          <h1 className="text-zinc-900 text-center text-5xl font-bold tracking-tight mb-24 relative z-10">
            {slides[currentSlide].title}
          </h1>
          
          {/* 3D Model Visualization */}
          <div className="relative w-[400px] h-[400px] mx-auto">
            <Canvas camera={{ position: [0, 10, 0], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <Model />
              <OrbitControls />
            </Canvas>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="bg-zinc-900 text-white rounded-2xl flex justify-between items-center px-12 py-6 shadow-2xl">
          <div className="text-2xl font-light tracking-wide max-w-2xl">
            {slides[currentSlide].content}
          </div>
          <div className="flex items-center gap-8">
            <button
              onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
              className="hover:bg-white/10 p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            <button
              onClick={() => setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1))}
              className="hover:bg-white/10 p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
            <div className="w-px h-8 bg-white/20" /> {/* Divider */}
            <button
              className="hover:bg-white/10 p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Toggle fullscreen"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Details Display */}
        {currentSlide === 1 && (
          <div className="bg-zinc-900 text-white rounded-2xl mt-3 px-12 py-6 text-center text-xl font-light tracking-wide shadow-2xl">
            {slides[currentSlide].details}
          </div>
        )}
      </div>
    </div>
  )
}



/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

