"use client"

import Image from "next/image"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function Component() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const portfolioImages = [
    {
      id: 1,
      src: "/g1.jpg",
      alt: "Architecture Building",
      className: "lg:row-span-2",
    },
    {
      id: 2,
      src: "/g2.jpg",
      alt: "Fresh Strawberries",
      className: "lg:row-span-2",
    },
    {
      id: 3,
      src: "/g3.jpg",
      alt: "Dark Rose",
      className: "lg:row-span-1",
    },
    {
      id: 4,
      src: "/g4.jpg",
      alt: "Workspace Setup",
      className: "lg:row-span-2",
    },
    {
      id: 5,
      src: "/g5.jpg",
      alt: "Abstract Dark",
      className: "lg:row-span-1",
    },
    {
      id: 6,
      src: "/g6.jpg",
      alt: "City Lights Bokeh",
      className: "lg:row-span-2",
    },
  ]

  const openModal = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const selectedImageData = portfolioImages.find((img) => img.id === selectedImage)

  return (
    <>
      <section className="py-6 sm:py-12 lg:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Mobile Layout - 2 Columns */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden">
          {portfolioImages.map((image, index) => (
            <div
              key={image.id}
              className={`
                relative cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl 
                shadow-lg transition-transform duration-300
                ${index % 3 === 0 ? "aspect-[3/4]" : index % 3 === 1 ? "aspect-square" : "aspect-[4/3]"}
                hover:scale-[1.02]
              `}
              onClick={() => openModal(image.id)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105 hover:brightness-105"
              />
            </div>
          ))}
        </div>

        {/* Tablet Layout - 3 Columns */}
        <div className="hidden lg:grid xl:hidden grid-cols-3 gap-6 auto-rows-[250px]">
          {portfolioImages.map((image, index) => (
            <div
              key={image.id}
              className={`
                relative cursor-pointer overflow-hidden rounded-3xl 
                shadow-lg transition-transform duration-300
                ${index === 0 || index === 3 ? "row-span-2" : ""}
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

        {/* Desktop Layout - 3 Columns Masonry */}
        <div className="hidden xl:grid grid-cols-3 grid-rows-4 gap-8 h-[900px]">
          {portfolioImages.map((image) => (
            <div
              key={image.id}
              className={`
                relative cursor-pointer overflow-hidden rounded-3xl 
                shadow-lg transition-transform duration-300
                ${image.className}
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
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                const currentIndex = portfolioImages.findIndex((img) => img.id === selectedImage)
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : portfolioImages.length - 1
                setSelectedImage(portfolioImages[prevIndex].id)
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                const currentIndex = portfolioImages.findIndex((img) => img.id === selectedImage)
                const nextIndex = currentIndex < portfolioImages.length - 1 ? currentIndex + 1 : 0
                setSelectedImage(portfolioImages[nextIndex].id)
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Main Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImageData.src || "/placeholder.svg"}
                alt={selectedImageData.alt}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Simple Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 rounded-full px-3 py-1">
              <span className="text-white text-sm">
                {selectedImage} / {portfolioImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}