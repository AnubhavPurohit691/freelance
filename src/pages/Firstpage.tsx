'use client'

import React, { useState } from "react"
import { ChevronLeft, ChevronRight, Maximize } from 'lucide-react'

export default function PythagorasTheorem() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "PYTHAGORAS THEOREM",
      content: "Welcome to the simulation on Pythagoras Theorem! Click the Introduction tab to learn about the Pythagoras theorem.",
    },
    {
      title: "PYTHAGORAS THEOREM",
      content: "In a right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides.",
      formula: "In mathematical terms: a² + b² = c²",
    },
    {
      title: "PYTHAGORAS THEOREM",
      content: "Hover over each side to learn more about the relationship between the sides of a right-angled triangle.",
      formula: "Where: c is the hypotenuse, a is the perpendicular, and b is the base",
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

          {/* Triangle Visualization */}
          <div className="relative w-[400px] h-[400px] mx-auto">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <svg
                width="360"
                height="360"
                viewBox="0 0 360 360"
                className="transform transition-all duration-700 hover:scale-105"
              >
                <defs>
                  <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#f8f9fa" />
                  </linearGradient>
                  <filter id="shadow">
                    <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.15" />
                  </filter>
                </defs>

                {/* Right-aligned Triangle */}
                <path
                  d="M330 330 L30 330 L330 30 Z"
                  fill="url(#triangleGradient)"
                  stroke="#18181b"
                  strokeWidth="2"
                  filter="url(#shadow)"
                />

                {/* Small Right Angle Marker */}
                <path
                  d="M300 330 L300 300 L330 300"
                  fill="none"
                  stroke="#18181b"
                  strokeWidth="2"
                />

                {currentSlide >= 1 && (
                  <>
                    {/* Labels */}
                    <text
                      x="180"
                      y="350"
                      textAnchor="middle"
                      className="text-lg font-bold fill-zinc-600"
                    >
                      b 
                    </text>
                    <text
                      x="345"
                      y="180"
                      textAnchor="start"
                      className="text-lg font-bold fill-zinc-600"
                    >
                      a 
                    </text>
                    <text
                      x="180"
                      y="160"
                      textAnchor="middle"
                      className="text-lg font-bold fill-zinc-600"
                    >
                      c 
                    </text>
                  </>
                )}

                {/* Right Angle Box */}
                <rect
                  x="300"
                  y="320"
                  width="12"
                  height="12"
                  fill="#18181b"
                  className="origin-center rotate-45"
                />

                {/* 90° Label */}
                <text
                  x="280"
                  y="315"
                  className="text-sm fill-zinc-600"
                >
                  90°
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="bg-zinc-900 text-white rounded-2xl flex justify-between items-center px-12 py-6 shadow-2xl">
          <div className="text-2xl font-light tracking-wide max-w-2xl">
            {slides[currentSlide].content}
          </div>
          <div className="flex items-center gap-8">
            <button
              onClick={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
              className="hover:bg-white/10 p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:scale-100"
              disabled={currentSlide === 0}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1))}
              className="hover:bg-white/10 p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:scale-100"
              disabled={currentSlide === slides.length - 1}
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="w-px h-8 bg-white/20" /> {/* Divider */}
            <button
              className="hover:bg-white/10 p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Toggle fullscreen"
            >
              <Maximize className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Formula Display */}
        {(currentSlide === 1 || currentSlide === 2) && (
          <div className="bg-zinc-900 text-white rounded-2xl mt-3 px-12 py-6 text-center text-xl font-light tracking-wide shadow-2xl">
            {slides[currentSlide].formula}
          </div>
        )}
      </div>
    </div>
  )
}

