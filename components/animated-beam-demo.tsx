"use client"

import type React from "react"

import { forwardRef, useRef, useCallback, useEffect, useState } from "react"

import { cn } from "@/lib/utils"

// Importez le composant WifiIcon
import { WifiIcon } from "@/components/wifi-icon"
import Link from "next/link"

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

// AnimatedBeam Component
interface AnimatedBeamProps {
  fromRef: React.RefObject<HTMLElement | null>
  toRef: React.RefObject<HTMLElement | null>
  containerRef: React.RefObject<HTMLElement | null>
  gradientStartColor?: string
  gradientStopColor?: string
  pathColor?: string
  pathWidth?: number
  curvature?: number
  endYOffset?: number
  reverse?: boolean
  duration?: number
  isDotted?: boolean
}

function AnimatedBeam({
  fromRef,
  toRef,
  containerRef,
  gradientStartColor = "#fff",
  gradientStopColor = "#fff",
  pathColor = "#fff",
  pathWidth = 1,
  curvature = 0,
  endYOffset = 0,
  reverse = false,
  duration = 2.5,
  isDotted = false,
}: AnimatedBeamProps) {
  const [path, setPath] = useState("")
  const [gradientId] = useState(`gradient-${Math.random().toString(36).substring(2, 9)}`)
  const [pathLength, setPathLength] = useState(0)
  const pathRef = useRef<SVGPathElement>(null)
  const windowSize = useWindowSize()

  const calculatePath = useCallback(() => {
    if (!fromRef.current || !toRef.current || !containerRef.current) return ""

    const fromRect = fromRef.current.getBoundingClientRect()
    const toRect = toRef.current.getBoundingClientRect()
    const containerRect = containerRef.current.getBoundingClientRect()

    const from = {
      x: fromRect.left + fromRect.width / 2 - containerRect.left,
      y: fromRect.top + fromRect.height / 2 - containerRect.top,
    }

    const to = {
      x: toRect.left + toRect.width / 2 - containerRect.left,
      y: toRect.top + toRect.height / 2 - containerRect.top + endYOffset,
    }

    const midX = (from.x + to.x) / 2
    const midY = (from.y + to.y) / 2 + curvature

    return `M ${from.x},${from.y} Q ${midX},${midY} ${to.x},${to.y}`
  }, [fromRef, toRef, containerRef, curvature, endYOffset])

  useEffect(() => {
    const updatePath = () => {
      const newPath = calculatePath()
      setPath(newPath)

      if (pathRef.current) {
        setPathLength(pathRef.current.getTotalLength())
      }
    }

    updatePath()
  }, [calculatePath, windowSize])

  // Calculer la longueur du dash pour l'animation de données
  const dataPacketLength = isDotted ? 8 : pathLength / 5
  const dataGapLength = isDotted ? 12 : pathLength / 5

  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" style={{ zIndex: 0 }}>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={gradientStartColor} stopOpacity="0.2" />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Chemin de base invisible pour référence */}
      <path ref={pathRef} d={path} fill="none" stroke="transparent" strokeWidth={0} />

      {/* Animation des données */}
      <path
        d={path}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth={pathWidth * 1.5}
        strokeDasharray={`${dataPacketLength}, ${dataGapLength}`}
        strokeDashoffset={pathLength}
        style={{
          animation: `${reverse ? "dataPacketReverse" : "dataPacket"} ${duration}s linear infinite`,
        }}
      />

      <style jsx>{`
        @keyframes dataPacket {
          from {
            stroke-dashoffset: ${pathLength};
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes dataPacketReverse {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: ${pathLength};
          }
        }
      `}</style>
    </svg>
  )
}

// WifiSignal Component - Version statique
interface WifiSignalProps {
  containerRef: React.RefObject<HTMLElement | null>
  sourceRef: React.RefObject<HTMLElement | null>
  color?: string
}

function WifiSignal({ containerRef, sourceRef, color = "#4ade80" }: WifiSignalProps) {
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
      <circle cx={position.x} cy={position.y - 20} r={3} fill={color} />

      {/* Arcs de signal - statiques */}
      {[15, 25, 35].map((radius) => (
        <path
          key={radius}
          d={`M ${position.x - radius},${position.y - 20} 
              a ${radius},${radius} 0 0 1 ${radius * 2},0`}
          fill="none"
          stroke={color}
          strokeWidth={2}
          opacity={0.7}
        />
      ))}
    </svg>
  )
}

// Animation de transfert de données
interface DataTransferAnimationProps {
  containerRef: React.RefObject<HTMLElement | null>
  fromRef: React.RefObject<HTMLElement | null>
  toRef: React.RefObject<HTMLElement | null>
}
function DataTransferAnimation({ containerRef, fromRef, toRef }: DataTransferAnimationProps) {
  const [positions, setPositions] = useState({ from: { x: 0, y: 0 }, to: { x: 0, y: 0 } })
  const windowSize = useWindowSize()

  useEffect(() => {
    const updatePositions = () => {
      if (!fromRef.current || !toRef.current || !containerRef.current) return

      const fromRect = fromRef.current.getBoundingClientRect()
      const toRect = toRef.current.getBoundingClientRect()
      const containerRect = containerRef.current.getBoundingClientRect()

      setPositions({
        from: {
          x: fromRect.left + fromRect.width / 2 - containerRect.left,
          y: fromRect.top - containerRect.top, // Modifier cette ligne pour partir du haut (-20 pour décaler légèrement)
        },
        to: {
          x: toRect.left + toRect.width / 2 - containerRect.left,
          y: toRect.top + toRect.height / 2 - containerRect.top,
        },
      })
    }

    updatePositions()
  }, [fromRef, toRef, containerRef, windowSize])

  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" style={{ zIndex: 0 }}>
      {[0, 1, 2].map((index) => (
        <g
          key={index}
          className="data-packet"
          style={{
            animation: `movePacketUp${index} 2s infinite ${index * 0.6}s`,
            transformOrigin: `${positions.from.x}px ${positions.from.y}px`,
          }}
        >
          <rect
            x={positions.from.x - 8}
            y={positions.from.y - 8}
            width={16}
            height={16}
            rx={4}
            fill="#4ade80"
            opacity={0.8}
          />
        </g>
      ))}

      <style jsx>{`
        @keyframes movePacketUp0 {
          0% {
            transform: translate(0, 0) scale(0.8);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translate(0, ${positions.to.y - positions.from.y}px) scale(1);
            opacity: 0;
          }
        }
        @keyframes movePacketUp1 {
          0% {
            transform: translate(0, 0) scale(0.8);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translate(0, ${positions.to.y - positions.from.y}px) scale(1);
            opacity: 0;
          }
        }
        @keyframes movePacketUp2 {
          0% {
            transform: translate(0, 0) scale(0.8);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translate(0, ${positions.to.y - positions.from.y}px) scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </svg>
  )
}

// Circle Component
const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode; imageUrl?: string }>(
  ({ className, children, imageUrl }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-16 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className,
        )}
      >
        {imageUrl ? (
          <img src={imageUrl || "/placeholder.svg"} alt="Device" className="max-h-full max-w-full object-contain" />
        ) : (
          children
        )}
      </div>
    )
  },
)

Circle.displayName = "Circle"

// CloudPlatform Component
const CloudPlatform = forwardRef<HTMLDivElement, { className?: string; imageUrl: string }>(
  ({ className, imageUrl }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex h-[150px] w-[250px] items-center justify-center rounded-lg border-2 bg-white p-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className,
        )}
      >
        <img
          src={imageUrl || "/placeholder.svg"}
          alt="Cloud Platform"
          className="max-h-full max-w-full object-contain"
        />
      </div>
    )
  },
)

CloudPlatform.displayName = "CloudPlatform"

// Main Component
export default function AnimatedBeamSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)
  const cloudRef = useRef<HTMLDivElement>(null)

  return (
    <section className="w-full py-16 md:py-24 flex justify-center">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row">
          {/* Left side: Explanatory content */}
          <div className="w-full max-w-xl space-y-6 p-8 lg:w-1/2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 mb-2">
              Architecture Technique
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              Solution IoT Innovante pour la Surveillance de votre officine
            </h2>
            <p className="text-lg text-gray-600">
              Notre système intégré combine des capteurs sans fil de haute précision, une connectivité sécurisée et une
              plateforme cloud puissante pour une surveillance en temps réel de vos réfrigérateurs.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <svg className="mr-2 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Capteurs sans fil précis à ±0.3°C
              </li>
              <li className="flex items-center">
                <svg className="mr-2 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Transmission de données sécurisée et fiable
              </li>
              <li className="flex items-center">
                <svg className="mr-2 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Alertes et rapports automatisés conformes aux normes
              </li>
            </ul>
            <Link href="/demande-devis" passHref legacyBehavior>
              <button
                className="inline-block rounded-full bg-green-600 px-6 py-2 text-white hover:bg-green-700 transition-all duration-300"
                type="button"
              >
                Demander un devis
              </button>
            </Link>
          </div>

          {/* Right side: Visual demonstration */}
          <div
            className="relative flex h-[700px] w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg border bg-white p-8 shadow-xl lg:w-1/2"
            ref={containerRef}
          >
            <div className="flex size-full flex-col items-center justify-between">
              {/* Cloud Platform */}
              <div className="flex w-full justify-center pt-0">
                <CloudPlatform
                  ref={cloudRef}
                  className="border-green-200"
                  imageUrl="/image.png"
                />
              </div>

              {/* Router */}
              <div className="flex w-full justify-center">
                <Circle ref={div4Ref} className="size-24 border-green-200">
                  <img
                    src="/Capture d'écran 2025-07-25 105515.png"
                    alt="Dragino Router"
                    className="max-h-full max-w-full object-contain"
                  />
                </Circle>
              </div>

              {/* Sensors */}
              <div className="flex w-full max-w-[400px] flex-col gap-12 pb-8">
                <div className="flex flex-row items-center justify-between">
                  <Circle
                    ref={div1Ref}
                    className="border-green-200"
                    imageUrl="/CapteurDraginoPharmasensor.jpg"
                  />
                  <Circle
                    ref={div5Ref}
                    className="border-green-200"
                    imageUrl="/CapteurDraginoPharmasensor.jpg"
                  />
                </div>
                <div className="flex flex-row items-center justify-between">
                  <Circle
                    ref={div2Ref}
                    className="border-green-200"
                    imageUrl="/CapteurDraginoPharmasensor.jpg"
                  />
                  <Circle
                    ref={div6Ref}
                    className="border-green-200"
                    imageUrl="/CapteurDraginoPharmasensor.jpg"
                  />
                </div>
                <div className="flex flex-row items-center justify-between">
                  <Circle
                    ref={div3Ref}
                    className="border-green-200"
                    imageUrl="/CapteurDraginoPharmasensor.jpg"
                  />
                  <Circle
                    ref={div7Ref}
                    className="border-green-200"
                    imageUrl="/CapteurDraginoPharmasensor.jpg"
                  />
                </div>
              </div>
            </div>

            {/* Beams from sensors to router */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div1Ref}
              toRef={div4Ref}
              curvature={-70}
              endYOffset={-15}
              pathWidth={2}
              gradientStartColor="#4ade80"
              gradientStopColor="#16a34a"
              pathColor="#4ade80"
              duration={1.2}
              isDotted={true}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div2Ref}
              toRef={div4Ref}
              pathWidth={2}
              gradientStartColor="#4ade80"
              gradientStopColor="#16a34a"
              pathColor="#4ade80"
              duration={1.2}
              isDotted={true}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div3Ref}
              toRef={div4Ref}
              curvature={70}
              endYOffset={15}
              pathWidth={2}
              gradientStartColor="#4ade80"
              gradientStopColor="#16a34a"
              pathColor="#4ade80"
              duration={1.2}
              isDotted={true}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div5Ref}
              toRef={div4Ref}
              curvature={-70}
              endYOffset={-15}
              pathWidth={2}
              gradientStartColor="#4ade80"
              gradientStopColor="#16a34a"
              pathColor="#4ade80"
              duration={1.2}
              isDotted={true}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div6Ref}
              toRef={div4Ref}
              pathWidth={2}
              gradientStartColor="#4ade80"
              gradientStopColor="#16a34a"
              pathColor="#4ade80"
              duration={1.2}
              isDotted={true}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div7Ref}
              toRef={div4Ref}
              curvature={70}
              endYOffset={15}
              pathWidth={2}
              gradientStartColor="#4ade80"
              gradientStopColor="#16a34a"
              pathColor="#4ade80"
              duration={1.2}
              isDotted={true}
            />

            {/* Animation de transfert de données du routeur vers le cloud */}
            <DataTransferAnimation containerRef={containerRef} fromRef={div4Ref} toRef={cloudRef} />

            {/* Wifi Icons */}
            <WifiIcon containerRef={containerRef} sourceRef={div1Ref} color="#4ade80" />
            <WifiIcon containerRef={containerRef} sourceRef={div2Ref} color="#4ade80" />
            <WifiIcon containerRef={containerRef} sourceRef={div3Ref} color="#4ade80" />
            <WifiIcon containerRef={containerRef} sourceRef={div5Ref} color="#4ade80" />
            <WifiIcon containerRef={containerRef} sourceRef={div6Ref} color="#4ade80" />
            <WifiIcon containerRef={containerRef} sourceRef={div7Ref} color="#4ade80" />
          </div>
        </div>
      </div>
    </section>
  )
}

