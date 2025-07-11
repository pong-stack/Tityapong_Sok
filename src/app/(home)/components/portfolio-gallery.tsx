"use client"

import Image from "next/image"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function Component() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Using placeholder images with varying dimensions to simulate different aspect ratios
  // and applying row-span classes for masonry effect across different breakpoints.
  const portfolioImages = [
    {
      id: 1,
      src: "/g1.jpg",
      alt: "Architecture Building",
      mobileSpan: "row-span-2",
      tabletSpan: "md:row-span-2",
      desktopSpan: "lg:row-span-2",
    },
    {
      id: 2,
      src: "/g2.jpg",
      alt: "Fresh Strawberries",
      mobileSpan: "row-span-1",
      tabletSpan: "md:row-span-1",
      desktopSpan: "lg:row-span-2",
    },
    {
      id: 3,
      src: "/g3.jpg",
      alt: "Dark Rose",
      mobileSpan: "row-span-2",
      tabletSpan: "md:row-span-2",
      desktopSpan: "lg:row-span-1",
    },
    {
      id: 4,
      src: "/g4.jpg",
      alt: "Workspace Setup",
      mobileSpan: "row-span-1",
      tabletSpan: "md:row-span-1",
      desktopSpan: "lg:row-span-2",
    },
    {
      id: 5,
      src: "/g5.jpg",
      alt: "Abstract Dark",
      mobileSpan: "row-span-2",
      tabletSpan: "md:row-span-2",
      desktopSpan: "lg:row-span-1",
    },
    {
      id: 6,
      src: "/g6.jpg",
      alt: "City Lights Bokeh",
      mobileSpan: "row-span-1",
      tabletSpan: "md:row-span-1",
      desktopSpan: "lg:row-span-2",
    },
  ]

  const openModal = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    const currentIndex = portfolioImages.findIndex((img) => img.id === selectedImage)
    let newIndex

    if (direction === "next") {
      newIndex = currentIndex < portfolioImages.length - 1 ? currentIndex + 1 : 0
    } else {
      newIndex = currentIndex > 0 ? currentIndex - 1 : portfolioImages.length - 1
    }
    setSelectedImage(portfolioImages[newIndex].id)
  }

  const selectedImageData = portfolioImages.find((img) => img.id === selectedImage)

  return (
    <>
      <section className="py-6 sm:py-12 lg:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Responsive Grid with Masonry Effect */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 auto-rows-[minmax(150px,_1fr)] md:auto-rows-[minmax(200px,_1fr)] lg:auto-rows-[minmax(250px,_1fr)]">
          {portfolioImages.map((image) => (
            <div
              key={image.id}
              className={`
                relative cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl
                shadow-lg transition-transform duration-300
                ${image.mobileSpan} ${image.tabletSpan} ${image.desktopSpan}
                hover:scale-[1.02]
              `}
              onClick={() => openModal(image.id)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105 hover:brightness-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Simple Lightbox Modal with Navigation */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                closeModal()
              }}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage("prev")
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage("next")
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Main Image - now uses object-cover to fill space */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImageData.src || "/placeholder.svg"}
                alt={selectedImageData.alt}
                fill // Use fill to make image take full height/width of its parent
                className="object-cover rounded-lg shadow-2xl" // object-cover ensures no background is seen
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Simple Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 rounded-full px-3 py-1">
              <span className="text-white text-sm">
                {portfolioImages.findIndex((img) => img.id === selectedImage) + 1} / {portfolioImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
