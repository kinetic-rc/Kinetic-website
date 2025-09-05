"use client"
import { Play } from "lucide-react"

interface GalleryItem {
  id: string
  src: string
  alt: string
  category: string
  title: string
  description: string
  type: "image" | "video"
}

interface GalleryGridProps {
  items: GalleryItem[]
  onItemClick: (index: number) => void
}

export function GalleryGrid({ items, onItemClick }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="group relative aspect-square overflow-hidden rounded-lg bg-card border border-border cursor-pointer hover:shadow-lg transition-all duration-300"
          onClick={() => onItemClick(index)}
        >
          {item.type === "image" ? (
            <img
              src={item.src || "/placeholder.svg"}
              alt={item.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <>
              <video
                src={item.src}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                muted
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                  <Play className="h-6 w-6 text-black ml-1" />
                </div>
              </div>
            </>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-semibold text-sm mb-1 line-clamp-1">{item.title}</h3>
              <p className="text-white/80 text-xs line-clamp-2">{item.description}</p>
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-2 left-2">
            <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-md">
              {item.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
