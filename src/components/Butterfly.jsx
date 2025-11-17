import React from 'react'

// A geometric, art-deco inspired butterfly with rich gradients and subtle depth
export default function Butterfly({ size = 560 }) {
  const w = size
  const h = (size * 3) / 4
  return (
    <div className="relative select-none">
      {/* Soft diffused background glow */}
      <div
        className="absolute inset-0 -z-10 blur-2xl opacity-60"
        style={{
          background:
            'radial-gradient(1200px 600px at 50% 40%, rgba(99,102,241,0.25), transparent 60%), radial-gradient(900px 500px at 50% 60%, rgba(14,165,233,0.18), transparent 60%)',
        }}
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        width={w}
        height={h}
        className="drop-shadow-xl"
        role="img"
        aria-label="Vibrant geometric butterfly"
      >
        <defs>
          {/* Wing gradient spectrum: deep blues/violets → oranges/yellows */}
          <linearGradient id="grad-spectrum" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="35%" stopColor="#6366f1" />
            <stop offset="55%" stopColor="#7c3aed" />
            <stop offset="75%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#facc15" />
          </linearGradient>

          <linearGradient id="grad-deco" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>

          <radialGradient id="grad-core" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#a78bfa" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.0" />
          </radialGradient>

          {/* Soft inner shadow for depth */}
          <filter id="innerGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="blur" />
            <feOffset dx="0" dy="2" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Art deco line pattern */}
          <pattern id="deco-lines" patternUnits="userSpaceOnUse" width="18" height="18" patternTransform="scale(1)">
            <path d="M0 0 L18 18 M-6 6 L12 24 M6 -6 L24 12" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
          </pattern>
        </defs>

        {/* Center guide (invisible) */}
        <g transform="translate(400,300)">
          {/* Body */}
          <g filter="url(#innerGlow)">
            <path
              d="M0 -120 C -8 -90, -6 -60, 0 -40 C 6 -60, 8 -90, 0 -120 Z"
              fill="#111827"
            />
            <rect x="-6" y="-40" width="12" height="90" rx="6" fill="#0b1020" />
            <ellipse cx="0" cy="60" rx="8" ry="22" fill="#0b1020" />
          </g>

          {/* Antennae */}
          <g stroke="#111827" strokeWidth="3" strokeLinecap="round" fill="none">
            <path d="M-2 -120 C -40 -160, -80 -190, -120 -200" />
            <path d="M2 -120 C 40 -160, 80 -190, 120 -200" />
          </g>

          {/* Core glow */}
          <circle cx="0" cy="-10" r="90" fill="url(#grad-core)" opacity="0.55" />

          {/* Left wing group */}
          <g transform="scale(-1,1)">
            {wing()}
          </g>

          {/* Right wing group */}
          {wing()}
        </g>
      </svg>
    </div>
  )
}

// Geometric wing composed of layered shapes and gradients
function wing() {
  return (
    <g>
      {/* Primary wing silhouette */}
      <path
        d="M40 -40 C 140 -140, 300 -160, 360 -40 C 280 -30, 220 60, 160 120 C 120 160, 40 160, 10 120 C -10 90, 0 10, 40 -40 Z"
        fill="url(#grad-spectrum)"
        opacity="0.95"
      />

      {/* Art-deco segmented panels */}
      <g opacity="0.9">
        <path d="M60 -20 C 150 -110, 280 -120, 330 -40 C 280 -40, 210 40, 170 80 C 130 120, 70 120, 40 90 C 25 75, 30 10, 60 -20 Z" fill="url(#deco-lines)" />
        <path d="M85 0 C 165 -80, 250 -85, 295 -35 C 255 -35, 200 30, 165 65 C 140 90, 95 95, 70 75 C 60 67, 65 20, 85 0 Z" fill="url(#grad-deco)" opacity="0.45" />
      </g>

      {/* Faceted geometric accents */}
      <g>
        <polygon points="110,10 150,-10 190,10 150,30" fill="#22d3ee" opacity="0.65" />
        <polygon points="190,30 230,5 270,30 230,55" fill="#818cf8" opacity="0.55" />
        <polygon points="120,70 160,45 200,70 160,95" fill="#f59e0b" opacity="0.6" />
        <polygon points="210,80 250,55 290,80 250,105" fill="#ef4444" opacity="0.5" />
      </g>

      {/* Contour strokes for crisp edges */}
      <path
        d="M40 -40 C 140 -140, 300 -160, 360 -40 C 280 -30, 220 60, 160 120 C 120 160, 40 160, 10 120 C -10 90, 0 10, 40 -40 Z"
        fill="none"
        stroke="#0b1020"
        strokeOpacity="0.35"
        strokeWidth="2"
      />

      {/* Subtle highlight */}
      <path d="M80 -10 C 170 -95, 270 -110, 330 -35" stroke="white" strokeOpacity="0.25" strokeWidth="3" fill="none" />
    </g>
  )
}
