"use client"

import type React from "react"

import { useCallback, useEffect, useRef, useState } from "react"

export interface AnimatedBeamProps {
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
  dashArray?: string
}

export function AnimatedBeam({
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
  dashArray = "",
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

  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" style={{ zIndex: 0 }}>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={gradientStartColor} stopOpacity="0.2" />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        d={path}
        fill="none"
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeDasharray={dashArray}
        opacity="0.5"
      />
      <path
        d={path}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth={pathWidth * 1.5}
        strokeDasharray={pathLength}
        strokeDashoffset={pathLength}
        style={{
          animation: `${reverse ? "dashReverse" : "dash"} ${duration}s linear infinite`,
        }}
      />
      <style jsx>{`
        @keyframes dash {
          from {
            stroke-dashoffset: ${pathLength};
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes dashReverse {
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

