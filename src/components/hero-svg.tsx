const HeroSvg = () => {
  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#667eea", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#764ba2", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#1a1a2e", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#16213e", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#00d4ff", stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: "#7c3aed", stopOpacity: 0.8 }} />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Animated background circles */}
      <circle cx="80" cy="100" r="3" fill="#667eea" opacity="0.6">
        <animate attributeName="cy" values="100;80;100" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="320" cy="150" r="2" fill="#764ba2" opacity="0.4">
        <animate attributeName="cy" values="150;130;150" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="250" r="4" fill="#00d4ff" opacity="0.3">
        <animate attributeName="cy" values="250;230;250" dur="5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="5s" repeatCount="indefinite" />
      </circle>
      <circle cx="350" cy="300" r="3" fill="#7c3aed" opacity="0.5">
        <animate attributeName="cy" values="300;280;300" dur="3.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3.5s" repeatCount="indefinite" />
      </circle>

      {/* Laptop and screen */}
      <g transform="translate(100, 120)">
        <rect x="0" y="80" width="200" height="15" rx="5" fill="#2d3748" stroke="#4a5568" strokeWidth="1" />
        <rect
          x="10"
          y="20"
          width="180"
          height="110"
          rx="5"
          fill="url(#screenGradient)"
          stroke="#4a5568"
          strokeWidth="2"
        />
        <rect x="20" y="30" width="160" height="90" rx="3" fill="#0f172a" />

        {/* Typing animation */}
        <g opacity="0.9">
          <rect x="25" y="40" width="0" height="3" fill="#00d4ff">
            <animate attributeName="width" values="0;80;80" dur="2s" repeatCount="indefinite" />
          </rect>
          <rect x="25" y="50" width="0" height="3" fill="#7c3aed">
            <animate attributeName="width" values="0;120;120" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
          </rect>
          <rect x="25" y="60" width="0" height="3" fill="#667eea">
            <animate attributeName="width" values="0;95;95" dur="2.2s" repeatCount="indefinite" begin="1s" />
          </rect>
          <rect x="25" y="70" width="0" height="3" fill="#00d4ff">
            <animate attributeName="width" values="0;110;110" dur="2.8s" repeatCount="indefinite" begin="1.5s" />
          </rect>
          <rect x="25" y="80" width="0" height="3" fill="#764ba2">
            <animate attributeName="width" values="0;75;75" dur="2.3s" repeatCount="indefinite" begin="2s" />
          </rect>
        </g>

        <rect x="105" y="90" width="2" height="8" fill="#00ff88">
          <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
        </rect>

        <rect
          x="10"
          y="20"
          width="180"
          height="110"
          rx="5"
          fill="none"
          stroke="url(#glowGradient)"
          strokeWidth="1"
          opacity="0.6"
          filter="url(#glow)"
        >
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* Floating code symbols */}
      <g opacity="0.7">
        <text x="60" y="180" fontFamily="monospace" fontSize="16" fill="#e53e3e" transform="rotate(-15 60 180)">
          {"</>"}
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="-15 60 180;-10 60 180;-15 60 180"
            dur="4s"
            repeatCount="indefinite"
          />
          <animate attributeName="y" values="180;170;180" dur="4s" repeatCount="indefinite" />
        </text>

        <text x="320" y="200" fontFamily="monospace" fontSize="18" fill="#3182ce" transform="rotate(12 320 200)">
          {"{ }"}
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="12 320 200;8 320 200;12 320 200"
            dur="3.5s"
            repeatCount="indefinite"
          />
          <animate attributeName="y" values="200;190;200" dur="3.5s" repeatCount="indefinite" />
        </text>

        <text x="80" y="340" fontFamily="monospace" fontSize="14" fill="#38a169" transform="rotate(-8 80 340)">
          {"f()"}
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="-8 80 340;-4 80 340;-8 80 340"
            dur="5s"
            repeatCount="indefinite"
          />
          <animate attributeName="y" values="340;330;340" dur="5s" repeatCount="indefinite" />
        </text>

        <text x="300" y="120" fontFamily="monospace" fontSize="16" fill="#00d4ff" transform="rotate(10 300 120)">
          {"</>"}
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="10 300 120;6 300 120;10 300 120"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate attributeName="y" values="120;110;120" dur="3s" repeatCount="indefinite" />
        </text>
      </g>

      {/* Icons orbiting */}
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 200 200;360 200 200"
          dur="20s"
          repeatCount="indefinite"
        />
        {/* Database */}
        <g transform="translate(200, 80)">
          <ellipse cx="0" cy="0" rx="12" ry="4" fill="#f56565" />
          <rect x="-12" y="0" width="24" height="16" fill="#f56565" />
          <ellipse cx="0" cy="16" rx="12" ry="4" fill="#e53e3e" />
          <ellipse cx="0" cy="8" rx="12" ry="4" fill="#fc8181" />
        </g>
        {/* API */}
        <g transform="translate(320, 200)">
          <rect x="-8" y="-6" width="16" height="12" rx="2" fill="#48bb78" />
          <circle cx="-4" cy="-2" r="1.5" fill="#68d391" />
          <circle cx="4" cy="-2" r="1.5" fill="#68d391" />
          <circle cx="0" cy="2" r="1.5" fill="#68d391" />
        </g>
        {/* Cloud */}
        <g transform="translate(200, 320)">
          <ellipse cx="-6" cy="0" rx="8" ry="6" fill="#805ad5" />
          <ellipse cx="6" cy="0" rx="10" ry="6" fill="#805ad5" />
          <ellipse cx="0" cy="-4" rx="6" ry="4" fill="#9f7aea" />
        </g>
        {/* Mobile */}
        <g transform="translate(80, 200)">
          <rect x="-6" y="-10" width="12" height="20" rx="2" fill="#38b2ac" />
          <rect x="-4" y="-8" width="8" height="12" fill="#4fd1c7" />
          <circle cx="0" cy="6" r="2" fill="#81e6d9" />
        </g>
      </g>

      {/* Animated data lines */}
      <g opacity="0.4">
        <path
          d="M150 200 Q200 150 250 200"
          stroke="url(#codeGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
        >
          <animate attributeName="stroke-dashoffset" values="0;-10" dur="2s" repeatCount="indefinite" />
        </path>
        <path
          d="M200 150 Q250 100 300 150"
          stroke="url(#glowGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="3,3"
        >
          <animate attributeName="stroke-dashoffset" values="0;-6" dur="1.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Particle effects */}
      <g opacity="0.6">
        <circle cx="150" cy="100" r="1" fill="#00d4ff">
          <animate attributeName="r" values="1;3;1" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="280" cy="350" r="1.5" fill="#7c3aed">
          <animate attributeName="r" values="1.5;4;1.5" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="350" cy="180" r="1" fill="#667eea">
          <animate attributeName="r" values="1;2.5;1" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  )
}

export default HeroSvg
