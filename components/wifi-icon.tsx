"use client"

import type React from "react"

import { useEffect, useState } from "react"

// Hook personnalisé pour remplacer useWindowSize
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  })

  useEffect(() => {
    // Handler pour mettre à jour l'état
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Ajouter l'écouteur d'événement
    window.addEventListener("resize", handleResize)

    // Appeler le handler immédiatement pour que l'état reflète les dimensions initiales
    handleResize()

    // Nettoyer l'écouteur d'événement
    return () => window.removeEventListener("resize", handleResize)
  }, []) // Tableau vide signifie que cet effet s'exécute une seule fois au montage

  return windowSize
}

interface WifiIconProps {
  containerRef: React.RefObject<HTMLElement | null>
  sourceRef: React.RefObject<HTMLElement | null>
  color?: string
}

export function WifiIcon({ containerRef, sourceRef, color = "#4ade80" }: WifiIconProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const windowSize = useWindowSize()

  useEffect(() => {
    const updatePosition = () => {
      if (!sourceRef.current || !containerRef.current) return

      const sourceRect = sourceRef.current.getBoundingClientRect()
      const containerRect = containerRef.current.getBoundingClientRect()

      setPosition({
        x: sourceRect.left + sourceRect.width / 2 - containerRect.left,
        y: sourceRect.top + sourceRect.height / 2 - containerRect.top,
      })
    }

    updatePosition()
  }, [sourceRef, containerRef, windowSize])

  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" style={{ zIndex: 1 }}>
      {/* Point central */}
      <circle cx={position.x} cy={position.y - 20} r={4} fill={color} />

      {/* Arcs de signal */}
      {[
        { radius: 12, delay: 0 },
        { radius: 20, delay: 0.2 },
        { radius: 28, delay: 0.4 },
      ].map(({ radius, delay }, index) => (
        <path
          key={radius}
          d={`M ${position.x - radius},${position.y - 20} 
              a ${radius},${radius} 0 0 1 ${radius * 2},0`}
          fill="none"
          stroke={color}
          strokeWidth={3}
          className="opacity-0"
          style={{
            animation: `wifiWave 2s infinite ${delay}s`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes wifiWave {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </svg>
  )
}

