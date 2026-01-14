import React from 'react';

interface LogoProps {
    size?: number;
    className?: string;
    showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
    size = 200,
    className = '',
    showText = true
}) => {
    return (
        <div className={`inline-block ${className}`} style={{ width: size, height: size }}>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                {/* Vibrant Background Glow */}
                <defs>
                    <radialGradient id="bgGlow">
                        <stop offset="0%" style={{ stopColor: '#FF00FF', stopOpacity: 0.3 }} />
                        <stop offset="100%" style={{ stopColor: '#00D4FF', stopOpacity: 0 }} />
                    </radialGradient>

                    <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#FF0080', stopOpacity: 1 }} />
                        <stop offset="50%" style={{ stopColor: '#7928CA', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#00D4FF', stopOpacity: 1 }} />
                    </linearGradient>

                    <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#FF6B00', stopOpacity: 1 }} />
                    </linearGradient>

                    <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#00F0FF', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#0080FF', stopOpacity: 1 }} />
                    </linearGradient>

                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    <filter id="strongGlow">
                        <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Background Glow Effect */}
                <circle cx="100" cy="100" r="90" fill="url(#bgGlow)">
                    <animate attributeName="r" values="90;95;90" dur="3s" repeatCount="indefinite" />
                </circle>

                <g transform="translate(100, 95)">
                    {/* Main Circular Base with Vibrant Gradient */}
                    <circle cx="0" cy="0" r="55" fill="url(#mainGradient)" filter="url(#glow)">
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 0 0"
                            to="360 0 0"
                            dur="20s"
                            repeatCount="indefinite" />
                    </circle>

                    {/* Inner Bright Circle */}
                    <circle cx="0" cy="0" r="48" fill="#1A1A2E" opacity="0.9" />

                    {/* Speed Lines (Motion Effect) */}
                    <g opacity="0.8">
                        <path d="M -45 -15 L -20 -15" stroke="url(#speedGradient)" strokeWidth="3" strokeLinecap="round">
                            <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
                        </path>
                        <path d="M -45 0 L -15 0" stroke="url(#speedGradient)" strokeWidth="3" strokeLinecap="round">
                            <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" begin="0.2s" repeatCount="indefinite" />
                        </path>
                        <path d="M -45 15 L -25 15" stroke="url(#speedGradient)" strokeWidth="3" strokeLinecap="round">
                            <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" begin="0.4s" repeatCount="indefinite" />
                        </path>
                    </g>

                    {/* Central "A" Letter - Stylized as Arrow/Mountain */}
                    <g filter="url(#strongGlow)">
                        <path d="M -15 20 L 0 -25 L 15 20 L 10 20 L 0 -12 L -10 20 Z"
                            fill="url(#glowGradient)" />
                        <rect x="-8" y="8" width="16" height="4" fill="url(#glowGradient)" />
                    </g>

                    {/* Checkmark/Track Symbol */}
                    <g transform="translate(25, -20)">
                        <circle cx="0" cy="0" r="15" fill="#00FF88" opacity="0.2" />
                        <circle cx="0" cy="0" r="12" fill="#1A1A2E" />
                        <path d="M -5 0 L -2 5 L 7 -6"
                            stroke="#00FF88"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            filter="url(#glow)">
                            <animate attributeName="stroke-dasharray" values="0,20;20,0" dur="2s" repeatCount="indefinite" />
                            <animate attributeName="stroke-dashoffset" values="20;0" dur="2s" repeatCount="indefinite" />
                        </path>
                    </g>

                    {/* Speedometer/Gauge Indicator */}
                    <g transform="translate(-28, 18)">
                        <circle cx="0" cy="0" r="13" fill="#FF0080" opacity="0.2" />
                        <circle cx="0" cy="0" r="10" fill="#1A1A2E" />
                        {/* Gauge Arc */}
                        <path d="M -7 0 A 7 7 0 0 1 7 0"
                            stroke="#FF0080"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                            filter="url(#glow)" />
                        {/* Needle */}
                        <line x1="0" y1="0" x2="5" y2="-4"
                            stroke="#FFD700"
                            strokeWidth="2"
                            strokeLinecap="round"
                            filter="url(#glow)">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="-45 0 0"
                                to="45 0 0"
                                dur="2s"
                                repeatCount="indefinite" />
                        </line>
                    </g>

                    {/* Lightning Bolt (Top Right - Speed/Energy) */}
                    <g transform="translate(28, -25)">
                        <path d="M 2 -8 L -3 0 L 1 0 L -2 8 L 5 -2 L 0 -2 Z"
                            fill="#FFD700"
                            filter="url(#strongGlow)">
                            <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
                        </path>
                    </g>

                    {/* Orbiting Particles */}
                    <circle cx="40" cy="0" r="3" fill="#00D4FF" filter="url(#glow)">
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 0 0"
                            to="360 0 0"
                            dur="3s"
                            repeatCount="indefinite" />
                    </circle>
                    <circle cx="-40" cy="0" r="3" fill="#FF0080" filter="url(#glow)">
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="180 0 0"
                            to="540 0 0"
                            dur="3s"
                            repeatCount="indefinite" />
                    </circle>
                    <circle cx="0" cy="-40" r="3" fill="#00FF88" filter="url(#glow)">
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="90 0 0"
                            to="450 0 0"
                            dur="3s"
                            repeatCount="indefinite" />
                    </circle>
                </g>

                {showText && (
                    <>
                        {/* AccelTrack Text */}
                        <text
                            x="100"
                            y="172"
                            fontFamily="'Arial Black', sans-serif"
                            fontSize="22"
                            fontWeight="900"
                            textAnchor="middle"
                            fill="url(#mainGradient)"
                            filter="url(#glow)">
                            AccelTrack
                        </text>

                        {/* Subtle Tagline */}
                        <text
                            x="100"
                            y="186"
                            fontFamily="Arial, sans-serif"
                            fontSize="8"
                            fontWeight="normal"
                            textAnchor="middle"
                            fill="#7928CA"
                            opacity="0.8">
                            TRACK YOUR SUCCESS
                        </text>
                    </>
                )}
            </svg>
        </div>
    );
};
