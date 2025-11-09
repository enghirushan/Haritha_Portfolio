"use client"

import { useEffect, useState } from "react"
import ProjectCard from "./project-card"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Mental Health Status",
    description:
      "A responsive web application designed to assess users' mental health through interactive tests for stress, personality, and relationship levels. Features real-time result analysis, personalized insights, community forum, and admin panel.",
    image: "/mental-health-wellness-app-dashboard.jpg",
    tags: ["React.js", "Node.js", "Firebase"],
    githubUrl: "https://github.com/enghirushan",
  },
  {
    id: 2,
    title: "Inventory Management System",
    description:
      "The SKY Shop - A comprehensive inventory management system with full CRUD operations, SQL database integration, and efficient data management for supply chain optimization.",
    image: "/inventory-management-dashboard-analytics.jpg",
    tags: ["C#", "SQL"],
    githubUrl: "https://github.com/enghirushan/The-Sky-Shop",
  },
  {
    id: 3,
    title: "Home Electricity Calculator",
    description:
      "Smart tool to calculate and analyze home energy consumption. Includes CRUD operations for efficient billing management and provides cost-saving insights.",
    image: "/electricity-calculator-energy-dashboard.jpg",
    tags: ["C#"],
    githubUrl: "https://github.com/enghirushan",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio showcasing projects and skills. Built with cutting-edge technologies for optimal performance and dynamic user experience.",
    image: "/portfolio-website-modern-design.jpg",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/enghirushan",
  },
]

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/5 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my latest work and see how I bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
