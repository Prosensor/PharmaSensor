import Image from "next/image"
import { cn } from "@/lib/utils"

interface SeoImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export function SeoImage({ src, alt, width, height, className, priority = false }: SeoImageProps) {
  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={cn("object-cover", className)}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
    />
  )
}

