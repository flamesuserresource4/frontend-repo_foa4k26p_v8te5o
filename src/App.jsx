import React from 'react'
import Butterfly from './components/Butterfly'

function App() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            Portfolio Butterfly
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            A vibrant, geometric composition crafted with a kaleidoscope of gradients and art deco accents. The minimalist white space and soft, diffused lighting let the design take center stage, conveying elegance and professionalism.
          </p>
          <div className="flex gap-3">
            <a href="/test" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-semibold hover:bg-gray-800 transition-colors">
              Check Backend
            </a>
            <a href="#details" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
              Details
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 flex items-center justify-center">
          <Butterfly size={640} />
        </div>
      </div>
    </div>
  )
}

export default App
