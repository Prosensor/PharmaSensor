"use client"

import type React from "react"
import { forwardRef, useRef, useCallback, useEffect, useState } from "react"

import { cn } from "@/lib/utils"

// AnimatedBeam Component
interface AnimatedBeamProps {
  fromRef: React.RefObject<HTMLElement>
  toRef: React.RefObject<HTMLElement>
  containerRef: React.RefObject<HTMLElement>
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
    window.addEventListener("resize", updatePath)
    return () => window.removeEventListener("resize", updatePath)
  }, [calculatePath])

  // Calculer la longueur du dash pour l'animation de données Bluetooth
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

      {/* Chemin de référence invisible pour calculer la longueur */}
      <path ref={pathRef} d={path} fill="none" stroke="transparent" strokeWidth={0} />

      {/* Paquets de données animés */}
      <path
        d={path}
        fill="none"
        stroke={pathColor}
        strokeWidth={pathWidth}
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
    <section className="w-full  py-16 md:py-24 flex justify-center">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row">
          {/* Left side: Explanatory content */}
          <div className="w-full max-w-xl space-y-6 p-8 lg:w-1/2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 mb-2">
              Architecture Technique
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              Solution IoT Innovante pour la Surveillance Pharmaceutique
            </h2>
            <p className="text-lg text-gray-600">
              Notre système intégré combine des capteurs sans fil de haute précision, une connectivité sécurisée et une
              plateforme cloud puissante pour une surveillance en temps réel de vos environnements pharmaceutiques
              critiques.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <svg className="mr-2 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Capteurs sans fil précis à ±0.1°C
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
            <button className="rounded-full bg-green-600 px-6 py-2 text-white hover:bg-green-700 transition-all duration-300">
              En savoir plus
            </button>
          </div>

          {/* Right side: Visual demonstration */}
          <div
            className="relative flex h-[700px] w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg border bg-white p-8 shadow-xl lg:w-1/2"
            ref={containerRef}
          >
            <div className="flex size-full flex-col items-center justify-between">
              {/* Cloud Platform */}
              <div className="flex w-full justify-center pt-8">
                <CloudPlatform
                  ref={cloudRef}
                  className="border-green-200"
                  imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qFKevjJ8vbnFylynlPGE7Fx81lCPyC.png"
                />
              </div>

              {/* Router */}
              <div className="flex w-full justify-center">
                <Circle ref={div4Ref} className="size-24 border-green-200">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%282%29-N3fQnFYFlFzuRqUWa0GR9UxvUE3dKk.png"
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
                    imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%283%29-EnrjFFHS6wRSYCCGsteIfEtQBTxy3R.png"
                  />
                  <Circle
                    ref={div5Ref}
                    className="border-green-200"
                    imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%283%29-EnrjFFHS6wRSYCCGsteIfEtQBTxy3R.png"
                  />
                </div>
                <div className="flex flex-row items-center justify-between">
                  <Circle
                    ref={div2Ref}
                    className="border-green-200"
                    imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%283%29-EnrjFFHS6wRSYCCGsteIfEtQBTxy3R.png"
                  />
                  <Circle
                    ref={div6Ref}
                    className="border-green-200"
                    imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%283%29-EnrjFFHS6wRSYCCGsteIfEtQBTxy3R.png"
                  />
                </div>
                <div className="flex flex-row items-center justify-between">
                  <Circle
                    ref={div3Ref}
                    className="border-green-200"
                    imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%283%29-EnrjFFHS6wRSYCCGsteIfEtQBTxy3R.png"
                  />
                  <Circle
                    ref={div7Ref}
                    className="border-green-200"
                    imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%283%29-EnrjFFHS6wRSYCCGsteIfEtQBTxy3R.png"
                  />
                </div>
              </div>
            </div>

            {/* Beams from sensors to router - with dotted lines */}
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
              reverse
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
              reverse
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
              reverse
              pathWidth={2}
              gradientStartColor="#4ade80"
              gradientStopColor="#16a34a"
              pathColor="#4ade80"
              duration={1.2}
              isDotted={true}
            />

            {/* Beam from router to cloud - solid line */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div4Ref}
              toRef={cloudRef}
              pathWidth={2.5}
              gradientStartColor="#4ade80"
              gradientStopColor="#16a34a"
              pathColor="#4ade80"
              duration={1}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

