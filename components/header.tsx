"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleResumeClick = () => {
    scrollToSection("resume")
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Haritha
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Contact
            </button>
            <Button
              onClick={handleResumeClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
            >
              Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer text-left"
            >
              Contact
            </button>
            <Button
              onClick={handleResumeClick}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
            >
              Resume
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
