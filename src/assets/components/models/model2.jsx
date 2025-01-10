"use client"

import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'

function Model(props) {
  const { nodes, materials } = useGLTF('/LADDERnew.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials['Material.001']}
        position={[0, 0, 4.514]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.243, 0.843, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.002']}
        position={[0, 0, 4.849]}
        scale={[6.768, 24.752, 20.854]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ladders018.geometry}
        material={materials.lambert49SG}
        position={[-0.11, 6.621, -1.013]}
        rotation={[2.244, 0, -Math.PI / 2]}
        scale={0.051}
      />
    </group>
  )
}

useGLTF.preload('/LADDERnew.glb')

export default function ModelViewer2() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderValue, setSliderValue] = useState(2)
  const [submit, setSubmit] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const slides = [
    {
      title: "3D MODEL VIEWER",
      content: "INTRODUCTION",
    },
    {
      title: "YELLOW CUBE",
      content: "A detailed 3D model of a yellow cube with custom materials and lighting.",
      details: "Interact with the model using your mouse: Left click to rotate, right click to pan, scroll to zoom.",
    },
  ]

  const handleSubmit = () => {
    if (sliderValue === 3) {
      setSubmit(true)
      setErrorMessage('')
    } else {
      setErrorMessage(
        'Not quite right. Remember, the square of the hypotenuse equals the sum of the squares of the other two sides!'
      )
    }
  }

  if (submit) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-xl font-bold">
        Great job! The base of the ladder should be kept 3 metres away from the wall.
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-950 overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Main Content Card */}
          <div className="relative bg-white rounded-2xl p-12 shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-zinc-100 to-transparent rounded-full blur-3xl opacity-70" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-t from-zinc-100 to-transparent rounded-full blur-3xl opacity-70" />
            <h1 className="text-zinc-900 text-center text-5xl font-bold tracking-tight mb-24 relative z-10">
              {slides[currentSlide].title}
            </h1>
            <div className="relative w-full aspect-square max-w-[400px] mx-auto">
              <Canvas camera={{ position: [0, 10, -1], fov: 75 }}>
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <Model />
                <OrbitControls />
              </Canvas>
            </div>
          </div>

          {/* Slider */}
          <div className="bg-zinc-900 text-white rounded-2xl p-6 shadow-2xl">
            <input
              type="range"
              min={1}
              max={5}
              value={sliderValue}
              onChange={(e) => setSliderValue(parseInt(e.target.value, 10))}
              className="w-full mb-4"
            />
            <p className="text-center text-xl mb-4">Value: {sliderValue}</p>
            <button
              onClick={handleSubmit}
              className="w-full bg-white text-black py-2 px-4 rounded hover:bg-gray-300 transition-all"
            >
              Submit
            </button>
            {errorMessage && <div className="text-red-500 mt-4 text-center">{errorMessage}</div>}
          </div>

          {/* Navigation Bar */}
          <div className="bg-zinc-900 text-white rounded-2xl flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-6 shadow-2xl gap-4">
            <div className="text-2xl font-light tracking-wide max-w-2xl text-center md:text-left">
              {slides[currentSlide].content}
            </div>
            <div className="flex items-center gap-8">
              <button
                onClick={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
                className="hover:bg-white/10 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Previous slide"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1))}
                className="hover:bg-white/10 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Next slide"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

