"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"
import { useEffect, useState } from "react"

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-background">
      <div
        className={`flex flex-col items-center max-w-md text-center transition-all duration-700 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Error Code */}
        <h1 className="text-9xl font-bold tracking-tighter text-primary">404</h1>

        {/* Error Illustration */}
        <div className="my-8 relative">
          <div
            className={`w-64 h-64 rounded-full bg-muted/30 flex items-center justify-center transition-all duration-1000 ease-in-out ${
              isVisible ? "scale-100" : "scale-50"
            }`}
          >
            <svg
              className={`w-40 h-40 text-muted-foreground transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 8l8 8M16 8l-8 8" />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <h2
          className={`text-2xl font-bold tracking-tight mb-2 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Page Not Found
        </h2>
        <p
          className={`text-muted-foreground mb-8 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or never existed.
        </p>

        {/* Action Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 w-full transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <Button asChild className="flex-1" variant="outline" size="lg">
            <Link href="javascript:history.back()">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Link>
          </Button>

          <Button asChild className="flex-1" size="lg">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Home Page
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}