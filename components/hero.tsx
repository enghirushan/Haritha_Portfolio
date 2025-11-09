"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-accent/5"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Text Content */}
        <div
          className={`flex flex-col gap-6 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              Hi!! I am{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Haritha ilangasinghe
              </span>
            </h1>
          </div>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Passionate Software Engineer pursuing B.Sc(Hons) Computer Science at Plymouth University. Specialized in
            full-stack development with expertise in React, Node.js, and modern web technologies.
          </p>

          <div className="flex gap-4 pt-4 flex-wrap">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right - Hero Image */}
        <div
          className={`flex justify-center transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <img
              src="/haritha-profile.jpg"
              alt="Haritha ilangasinghe"
              className="relative w-full rounded-3xl shadow-2xl border-2 border-border"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  )
}
