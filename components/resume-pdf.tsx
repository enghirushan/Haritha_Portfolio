"use client"

import { useState } from "react"
import { Download, FileText } from "lucide-react"

export default function ResumePDF() {
  const [isGenerating, setIsGenerating] = useState(false)

  const generatePDF = async () => {
    setIsGenerating(true)
    try {
      const { jsPDF } = await import("jspdf")
      const doc = new jsPDF()

      const pageHeight = doc.internal.pageSize.getHeight()
      const pageWidth = doc.internal.pageSize.getWidth()
      let yPosition = 10

      // Helper function to add text with wrapping
      const addWrappedText = (text: string, fontSize: number, isBold: boolean, marginX = 10) => {
        doc.setFontSize(fontSize)
        if (isBold) {
          doc.setFont(undefined, "bold")
        } else {
          doc.setFont(undefined, "normal")
        }
        const lines = doc.splitTextToSize(text, pageWidth - 2 * marginX)
        lines.forEach((line: string) => {
          if (yPosition > pageHeight - 10) {
            doc.addPage()
            yPosition = 10
          }
          doc.text(line, marginX, yPosition)
          yPosition += 5
        })
      }

      // Header
      addWrappedText("HARITHA ILANGASINGHE", 16, true)
      yPosition += 2
      addWrappedText("Colombo, Sri Lanka | +94 70 570 6250 | eng.hirushan@gmail.com", 10, false)
      addWrappedText(
        "GitHub: github.com/enghirushan | LinkedIn: linkedin.com/in/haritha-ilangasinghe-953569236/",
        10,
        false,
      )
      yPosition += 5

      // Professional Summary
      addWrappedText("PROFESSIONAL SUMMARY", 12, true)
      yPosition += 2
      addWrappedText(
        "Aspiring Software Engineer pursuing Bachelor's degree in Computer Science at the University of Plymouth (affiliated with NSBM Green University). Final year student seeking Software Engineer Internship to gain hands-on experience. Passionate about software development and committed to becoming a skilled engineer with expertise in full-stack development.",
        10,
        false,
      )
      yPosition += 5

      // Education
      addWrappedText("EDUCATION", 12, true)
      yPosition += 2
      addWrappedText("BSc(Hons) Computer Science", 10, true)
      addWrappedText("Plymouth University, UK (Affiliated NSBM Green University)", 9, false)
      addWrappedText("Expected Graduation: August 2025 | Current Grade: 63.5% (Second Upper Class)", 9, false)
      yPosition += 2
      addWrappedText("Royal College Wayamba", 10, true)
      addWrappedText("GCE A/L Examination - 2020 (Physical Science Stream)", 9, false)
      yPosition += 5

      // Technical Skills
      addWrappedText("TECHNICAL SKILLS", 12, true)
      yPosition += 2
      const skills = [
        "Frontend: React.js, JavaScript, HTML, CSS, TypeScript, Tailwind CSS",
        "Backend: Node.js, Java-Spring Boot, C#",
        "Databases: SQL, Firebase, MongoDB",
        "Tools & Platforms: GitHub, Postman, Git",
        "Other: RESTful APIs, CRUD Operations, Responsive Design",
      ]
      skills.forEach((skill) => {
        addWrappedText("• " + skill, 9, false)
      })
      yPosition += 5

      // Projects
      addWrappedText("PROJECTS", 12, true)
      yPosition += 2

      const projects = [
        {
          name: "LUMIMIND - Assess Mental Status",
          desc: "A responsive web application designed to assess users' mental health through interactive tests for stress, personality, and relationship levels. Features include real-time result analysis, personalized insights, a user community forum, and admin panel.",
          tech: "React.js, Node.js, Firebase",
        },
        {
          name: "The SKY Shop - Inventory Management System",
          desc: "A comprehensive inventory management system with full CRUD operations, SQL database integration, and data management capabilities.",
          tech: "C#, SQL",
        },
        {
          name: "Home Electricity Calculator",
          desc: "An electricity bill calculator system with CRUD operations for efficient billing management and calculations.",
          tech: "C#",
        },
        {
          name: "POS System (In Development)",
          desc: "A Point of Sale system developed using Java Spring Boot managing customer information with full CRUD operations using layered architecture.",
          tech: "Java Spring Boot, MySQL, Postman",
        },
      ]

      projects.forEach((project) => {
        if (yPosition > pageHeight - 15) {
          doc.addPage()
          yPosition = 10
        }
        addWrappedText(project.name, 10, true)
        yPosition += 1
        addWrappedText(project.desc, 9, false)
        addWrappedText("Technologies: " + project.tech, 8, false)
        yPosition += 3
      })

      yPosition += 2

      // Certifications
      addWrappedText("CERTIFICATIONS & LEARNING", 12, true)
      yPosition += 2
      const certs = [
        "Java - LinkedIn Learning",
        "Introduction to Programming Using HTML and CSS - LinkedIn Learning",
        "Objects in JavaScript: A Dynamic Data Structure - LinkedIn Learning",
        "Learning ECMAScript 6+ (ES6+) - LinkedIn Learning",
        "Practical CSS for No-Coders - LinkedIn Learning",
      ]
      certs.forEach((cert) => {
        if (yPosition > pageHeight - 10) {
          doc.addPage()
          yPosition = 10
        }
        addWrappedText("• " + cert, 9, false)
      })
      yPosition += 5

      // Experience
      addWrappedText("EXPERIENCE & VOLUNTEERING", 12, true)
      yPosition += 2

      const experiences = [
        {
          title: "React Training Developer",
          org: "IEEE NSBM Student Branch (May 2024)",
          desc: "Developed and collaborated on website projects for NSBM IEEE Diothan 4.0. Gained insights into teamwork and software development best practices.",
        },
        {
          title: "Hackathon Participant",
          org: "FOSS Community of NSBM (October 2022)",
          desc: "Competed in university-organized hackathon as first-year student. Applied problem-solving and teamwork to build project prototypes.",
        },
        {
          title: "Senior Prefect",
          org: "Royal College Wayamba (2018-2020)",
          desc: "Led student initiatives, maintained discipline, and coordinated school events. Acted as bridge between students and administration.",
        },
      ]

      experiences.forEach((exp) => {
        if (yPosition > pageHeight - 12) {
          doc.addPage()
          yPosition = 10
        }
        addWrappedText(exp.title, 10, true)
        addWrappedText(exp.org, 9, false)
        yPosition += 1
        addWrappedText(exp.desc, 9, false)
        yPosition += 3
      })

      // References
      if (yPosition > pageHeight - 20) {
        doc.addPage()
        yPosition = 10
      }
      addWrappedText("REFERENCES", 12, true)
      yPosition += 2
      addWrappedText("Gimsara Kulathunga - Software Engineer, IFS R&D International (Pvt) Ltd", 9, true)
      addWrappedText("Email: gimsara.kulathunga@ifs.com | Phone: 0717065042", 8, false)
      yPosition += 3
      addWrappedText("K K Pavithra Subashini - Senior Lecturer, Faculty of Computing, NSBM Green University", 9, true)
      addWrappedText("Head of Industry Collaboration Unit | Phone: 0776181390 | Email: pavithras@nsbm.ac.lk", 8, false)

      // Save PDF
      doc.save("Haritha_Ilangasinghe_Resume.pdf")
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("Error generating PDF. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-primary">Resume</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download my comprehensive resume in PDF format to learn more about my experience, skills, and projects.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={generatePDF}
            disabled={isGenerating}
            className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="w-5 h-5" />
            {isGenerating ? "Generating..." : "Download Resume (PDF)"}
          </button>

          <div className="flex items-center gap-2 text-muted-foreground">
            <FileText className="w-5 h-5" />
            <span>Professional Resume in PDF Format</span>
          </div>
        </div>
      </div>
    </section>
  )
}
