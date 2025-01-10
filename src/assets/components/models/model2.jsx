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
      <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white flex items-center justify-center text-xl font-bold p-4 text-center">
        Great job! The base of the ladder should be kept 3 metres away from the wall.
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Content Card */}
          <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-[0_0_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-blue-100 to-transparent rounded-full blur-3xl opacity-70" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-t from-blue-100 to-transparent rounded-full blur-3xl opacity-70" />
            <h1 className="text-zinc-900 text-center text-4xl md:text-5xl font-bold tracking-tight mb-12 md:mb-16 relative z-10">
              {slides[currentSlide].title}
            </h1>
            <div className="relative w-full aspect-square max-w-[500px] mx-auto bg-zinc-100/50 rounded-xl p-4 shadow-inner">
              <Canvas camera={{ position: [70, 20, -50], fov: 20 }}>
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <Model />
                <OrbitControls />
              </Canvas>
            </div>
          </div>

          {/* Problem Statement */}
          <div className="bg-white/10 backdrop-blur-md text-white rounded-2xl p-8 shadow-2xl mb-6">
            <p className="text-center text-xl md:text-2xl leading-relaxed">
              <span className="text-blue-300 font-semibold">Q:</span> A ladder is 5 metres long and leans against a wall. To reach the 4 metres of height, at what distance should the base of the ladder be kept from the wall?
              <br />
              <span className="text-zinc-400 mt-4 block text-lg">
                Drag the slider below to adjust the base distance
              </span>
            </p>
          </div>

          {/* Interactive Section */}
          <div className="sticky bottom-4 z-50">
            <div className="bg-white/10 backdrop-blur-md text-white rounded-2xl p-6 md:p-8 shadow-2xl border border-white/10">
              <div className="max-w-2xl mx-auto">
                <input
                  type="range"
                  min={1}
                  max={5}
                  value={sliderValue}
                  onChange={(e) => setSliderValue(parseInt(e.target.value, 10))}
                  className="w-full mb-6 accent-blue-500 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <p className="text-center text-2xl md:text-3xl text-blue-300 font-semibold">
                    Base Distance: {sliderValue} metres
                  </p>
                  <button
                    onClick={handleSubmit}
                    className="w-full md:w-auto bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                  >
                    Submit Answer
                  </button>
                </div>
                {errorMessage && (
                  <div className="mt-4 text-center p-4 bg-red-500/20 rounded-lg border border-red-500/30 text-red-300 animate-pulse">
                    {errorMessage}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Bar */}
          <div className="bg-white/10 backdrop-blur-md text-white rounded-2xl flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-6 shadow-2xl gap-4 border border-white/10">
            <div className="text-xl md:text-2xl font-light tracking-wide max-w-2xl text-center md:text-left">
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

