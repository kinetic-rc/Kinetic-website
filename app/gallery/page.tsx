"use client"

import { useState, useMemo } from "react"
import { GalleryFilter } from "@/components/gallery-filter"
import { GalleryGrid } from "@/components/gallery-grid"
import { GalleryLightbox } from "@/components/gallery-lightbox"
import { Camera, Video } from "lucide-react"

interface GalleryItem {
  id: string
  src: string
  alt: string
  category: string
  title: string
  description: string
  type: "image" | "video"
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    src: "/placeholder.svg?height=400&width=400&text=Robot+Competition",
    alt: "Robot Competition",
    category: "Competitions",
    title: "National Robotics Championship 2024",
    description: "Our autonomous navigation robot competing in the national championship finals.",
    type: "image",
  },
  {
    id: "2",
    src: "/placeholder.svg?height=400&width=400&text=Workshop+Session",
    alt: "Workshop Session",
    category: "Workshops",
    title: "Arduino Programming Workshop",
    description: "Teaching first-year students the basics of microcontroller programming.",
    type: "image",
  },
  {
    id: "3",
    src: "/placeholder.svg?height=400&width=400&text=Robotic+Arm",
    alt: "Robotic Arm Project",
    category: "Projects",
    title: "6-DOF Robotic Arm",
    description: "Industrial-grade robotic arm with precise manipulation capabilities.",
    type: "image",
  },
  {
    id: "4",
    src: "/placeholder.svg?height=400&width=400&text=Team+Event",
    alt: "Team Building Event",
    category: "Team Events",
    title: "Annual Team Retreat",
    description: "Team bonding and brainstorming session at the annual club retreat.",
    type: "image",
  },
  {
    id: "5",
    src: "/placeholder.svg?height=400&width=400&text=Drone+Demo",
    alt: "Drone Demonstration",
    category: "Projects",
    title: "Autonomous Drone System",
    description: "Demonstration of our computer vision-enabled autonomous drone.",
    type: "video",
  },
  {
    id: "6",
    src: "/placeholder.svg?height=400&width=400&text=Competition+Win",
    alt: "Competition Victory",
    category: "Competitions",
    title: "Regional Championship Victory",
    description: "Celebrating our first-place finish at the regional robotics competition.",
    type: "image",
  },
  {
    id: "7",
    src: "/placeholder.svg?height=400&width=400&text=PCB+Workshop",
    alt: "PCB Design Workshop",
    category: "Workshops",
    title: "PCB Design Masterclass",
    description: "Advanced workshop on printed circuit board design and manufacturing.",
    type: "image",
  },
  {
    id: "8",
    src: "/placeholder.svg?height=400&width=400&text=Swarm+Robots",
    alt: "Swarm Robotics",
    category: "Projects",
    title: "Swarm Intelligence Demo",
    description: "Multiple robots working together to solve complex coordination tasks.",
    type: "video",
  },
  {
    id: "9",
    src: "/placeholder.svg?height=400&width=400&text=Hackathon",
    alt: "Robotics Hackathon",
    category: "Team Events",
    title: "24-Hour Robotics Hackathon",
    description: "Intense coding and building session during our annual hackathon event.",
    type: "image",
  },
  {
    id: "10",
    src: "/placeholder.svg?height=400&width=400&text=AI+Workshop",
    alt: "AI Workshop",
    category: "Workshops",
    title: "Machine Learning for Robotics",
    description: "Workshop on implementing AI algorithms in robotic systems.",
    type: "image",
  },
  {
    id: "11",
    src: "/placeholder.svg?height=400&width=400&text=Line+Follower",
    alt: "Line Following Robot",
    category: "Projects",
    title: "Advanced Line Following Robot",
    description: "High-speed line following robot with PID control and sensor fusion.",
    type: "image",
  },
  {
    id: "12",
    src: "/placeholder.svg?height=400&width=400&text=Team+Photo",
    alt: "Team Group Photo",
    category: "Team Events",
    title: "Club Group Photo 2024",
    description: "Annual group photo with all active members and faculty advisors.",
    type: "image",
  },
]

const categories = ["All", "Projects", "Competitions", "Workshops", "Team Events"]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [lightboxIndex, setLightboxIndex] = useState(-1)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return galleryItems
    return galleryItems.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  const handleItemClick = (index: number) => {
    setLightboxIndex(index)
    setIsLightboxOpen(true)
  }

  const handleLightboxClose = () => {
    setIsLightboxOpen(false)
    setLightboxIndex(-1)
  }

  const handleLightboxNext = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length)
  }

  const handleLightboxPrevious = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  const imageCount = filteredItems.filter((item) => item.type === "image").length
  const videoCount = filteredItems.filter((item) => item.type === "video").length

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-card to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Our <span className="text-primary">Journey</span> in Pictures
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Explore the moments that define Kinetic - from groundbreaking projects and competition victories to
              workshops and team celebrations. Every image tells a story of innovation and collaboration.
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Camera className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-foreground">{imageCount}</div>
                  <div className="text-sm text-muted-foreground">Photos</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Video className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-foreground">{videoCount}</div>
                  <div className="text-sm text-muted-foreground">Videos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryFilter categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

          {filteredItems.length > 0 ? (
            <GalleryGrid items={filteredItems} onItemClick={handleItemClick} />
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <GalleryLightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={handleLightboxClose}
        onNext={handleLightboxNext}
        onPrevious={handleLightboxPrevious}
      />
    </>
  )
}
