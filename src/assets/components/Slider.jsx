'use client'

import { Settings2 } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const [showButtons, setShowButtons] = useState(false)
  const navigate = useNavigate()

  const handleShowButtons = () => {
    setShowButtons((prev) => !prev)
  }

  const navigateToPage = (page) => {
    navigate(page)
  }

  return (
    <div className="bg-black text-white  flex flex-col items-center justify-center">
      {/* Main content area */}
      
      {/* Button menu */}
      <div className="mt-10 flex flex-col items-center gap-6">
        {/* Buttons container with animation */}
        {showButtons && (
          <div
            className={`flex flex-col items-center gap-3 transition-all duration-300 ${
              showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'
            }`}
          >
            <button
              onClick={() => navigateToPage('/')}
              className="w-48 px-6 py-3 border border-gray-500 rounded-lg text-gray-200 transition-all hover:scale-105 hover:border-white hover:text-white focus:ring focus:ring-white focus:outline-none bg-black/80 backdrop-blur-sm"
            >
              Introduction
            </button>
            <button
              onClick={() => navigateToPage('/pythagorusexercise')}
              className="w-48 px-6 py-3 border border-gray-500 rounded-lg text-gray-200 transition-all hover:scale-105 hover:border-white hover:text-white focus:ring focus:ring-white focus:outline-none bg-black/80 backdrop-blur-sm"
            >
              pythagorusexercise
            </button>
            <button
              onClick={() => navigateToPage('/pythagorus')}
              className="w-48 px-6 py-3 border border-gray-500 rounded-lg text-gray-200 transition-all hover:scale-105 hover:border-white hover:text-white focus:ring focus:ring-white focus:outline-none bg-black/80 backdrop-blur-sm"
            >
              Pythagorus
            </button>
            <button
              onClick={() => navigateToPage('/ladder')}
              className="w-48 px-6 py-3 border border-gray-500 rounded-lg text-gray-200 transition-all hover:scale-105 hover:border-white hover:text-white focus:ring focus:ring-white focus:outline-none bg-black/80 backdrop-blur-sm"
            >
              Ladder
            </button>
          </div>
        )}

        {/* Settings button */}
        <button
          onClick={handleShowButtons}
          className={`p-4 border border-white text-white rounded-full transition-all hover:scale-105 focus:ring focus:ring-white focus:outline-none bg-black ${
            showButtons ? 'rotate-180' : ''
          }`}
        >
          <Settings2 className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}
