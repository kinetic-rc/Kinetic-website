"use client"

import { Button } from "@/components/ui/button"

interface GalleryFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function GalleryFilter({ categories, activeCategory, onCategoryChange }: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={
            activeCategory === category
              ? "bg-primary text-primary-foreground"
              : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          }
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
