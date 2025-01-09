import { useState } from "react"
import { PlusCircle, ArrowRight } from 'lucide-react'

export default function AnimatedButton() {
  const [isSecondButtonVisible, setIsSecondButtonVisible] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      <button
        variant="default"
        size="lg"
        onClick={() => setIsSecondButtonVisible(!isSecondButtonVisible)}
        className="group relative overflow-hidden transition-all duration-300 hover:scale-105"
      >
        <span className="flex items-center gap-2">
          <PlusCircle className="h-5 w-5" />
          Navigate
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </button>

      <div
        className={`transform transition-all duration-500 ease-in-out ${
          isSecondButtonVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0"
        }`}
        aria-hidden={!isSecondButtonVisible}
      >
        {isSecondButtonVisible && (
            <>
          <button
            variant="secondary"
            size="lg"
            className="animate-bounce shadow-lg hover:shadow-xl"
          >
            Pythagorus
          </button>
          <button
            variant="secondary"
            size="lg"
            className="animate-bounce shadow-lg hover:shadow-xl"
          >
            Ladder
          </button>
          </>
        )}
      </div>
    </div>
  )
}
