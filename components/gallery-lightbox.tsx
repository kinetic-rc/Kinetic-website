"use client"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GalleryItem {
  id: string
  src: string
  alt: string
  category: string
  title: string
  description: string
  type: "image" | "video"
}

interface GalleryLightboxProps {
  items: GalleryItem[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

export function GalleryLightbox({ items, currentIndex, isOpen, onClose, onNext, onPrevious }: GalleryLightboxProps) {
  if (!isOpen || !items[currentIndex]) return null

  const currentItem = items[currentIndex]

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      {/* Close Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
      >
        <X className="h-6 w-6" />
      </Button>

      {/* Navigation Buttons */}
      {items.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="sm"
            onClick={onPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </>
      )}

      {/* Content */}
      <div className="max-w-4xl max-h-full flex flex-col items-center">
        {currentItem.type === "image" ? (
          <img
            src={currentItem.src || "/placeholder.svg"}
            alt={currentItem.alt}
            className="max-w-full max-h-[70vh] object-contain rounded-lg"
          />
        ) : (
          <video src={currentItem.src} controls className="max-w-full max-h-[70vh] object-contain rounded-lg" />
        )}

        {/* Caption */}
        <div className="mt-4 text-center text-white max-w-2xl">
          <h3 className="text-xl font-bold mb-2">{currentItem.title}</h3>
          <p className="text-white/80">{currentItem.description}</p>
          <p className="text-sm text-white/60 mt-2">
            {currentIndex + 1} of {items.length}
          </p>
        </div>
      </div>
    </div>
  )
}
