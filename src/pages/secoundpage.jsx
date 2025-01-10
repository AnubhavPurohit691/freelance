'use client'

import { useState } from 'react'
import { Check, X } from 'lucide-react'

export default function PythagorasExercise() {
  const [answer, setAnswer] = useState('')
  const [feedback, setFeedback] = useState(null)

  // The correct answer for this triangle (6, 7, 10)
  const checkAnswer = () => {
    const userAnswer = parseFloat(answer)
    const correctAnswer = 8 // Using the second triangle from the image where one side is missing

    if (userAnswer === correctAnswer) {
      setFeedback({
        isCorrect: true,
        message: "Well done! You've got it right!",
      })
    } else {
      setFeedback({
        isCorrect: false,
        message: "Try again. Remember to use the Pythagorean Theorem.",
      })
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl p-6 bg-white shadow-md rounded-lg space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Pythagoras Theorem Exercise</h2>
          <p className="text-zinc-600">
            Enter the missing length of the side in the box and click Check Answer.
          </p>
        </div>

        <div className="flex gap-8 items-start">
          <div className="flex-1">
            <svg
              viewBox="0 0 200 200"
              className="w-full max-w-[300px] mx-auto"
            >
              {/* Right Triangle */}
              <path
                d="M 50 150 L 150 150 L 150 50 Z"
                fill="none"
                stroke="black"
                strokeWidth="2"
              />

              {/* Right Angle Square */}
              <path
                d="M 140 150 L 140 140 L 150 140"
                fill="none"
                stroke="black"
                strokeWidth="2"
              />

              {/* Measurements */}
              <text x="90" y="165" textAnchor="middle">7</text>
              <text x="165" y="100" textAnchor="middle">6</text>
              <text x="90" y="95" textAnchor="middle">?</text>

              {/* 90° Label */}
              <text x="135" y="135" fontSize="12">90°</text>
            </svg>
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Enter the missing length:
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Enter your answer"
                  className="max-w-[120px] px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button
                  onClick={checkAnswer}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  Check Answer
                </button>
              </div>
            </div>

            {feedback && (
              <div
                className={`flex items-center gap-2 p-4 rounded-lg ${
                  feedback.isCorrect
                    ? 'bg-green-50 text-green-700'
                    : 'bg-red-50 text-red-700'
                }`}
              >
                {feedback.isCorrect ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <X className="w-5 h-5" />
                )}
                <p>{feedback.message}</p>
              </div>
            )}

            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-700 font-medium">Remember:</p>
              <p className="text-blue-600">
                The Pythagorean Theorem states that in a right triangle:
                a² + b² = c²
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
