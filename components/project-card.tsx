"use client"

import { ExternalLink, Github } from "lucide-react"
import { useState } from "react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
}

interface ProjectCardProps {
  project: Project
  index: number
  isVisible: boolean
}

export default function ProjectCard({ project, index, isVisible }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-muted">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col gap-4 bg-gradient-to-b from-card to-card/50">
        <h3 className="text-2xl font-bold text-card-foreground">{project.title}</h3>

        <p className="text-muted-foreground leading-relaxed">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4 border-t border-border">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-semibold ml-auto"
            >
              View Live
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
