"use client"

import { Github, Linkedin, Code2, Mail } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/enghirushan",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/haritha-ilangasinghe-953569236/",
      icon: Linkedin,
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/2qZRUHDAIH/",
      icon: Code2,
    },
    {
      name: "Email",
      url: "mailto:eng.hirushan@gmail.com",
      icon: Mail,
    },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Haritha</h3>
            <p className="text-primary-foreground/80">
              Building beautiful and functional digital experiences through code and creativity. Final year student
              seeking Software Engineer Internship opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col gap-2 text-primary-foreground/80">
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-primary-foreground transition-colors text-left cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-primary-foreground transition-colors text-left cursor-pointer"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-primary-foreground transition-colors text-left cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.name !== "Email" ? "_blank" : undefined}
                    rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                    className="w-12 h-12 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-colors"
                    aria-label={link.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <p>&copy; 2025 Haritha ilangasinghe. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
