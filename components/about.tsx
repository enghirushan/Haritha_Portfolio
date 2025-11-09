"use client"

export default function About() {
  const handleDownloadResume = () => {
    const resumeContent = `
HARITHA ILANGASINGHE
Colombo, Sri Lanka | +94 70 570 6250 | eng.hirushan@gmail.com
GitHub: github.com/enghirushan | LinkedIn: linkedin.com/in/haritha-ilangasinghe-953569236/

PROFESSIONAL SUMMARY
Aspiring Software Engineer pursuing Bachelor's degree in Computer Science at the University of Plymouth (affiliated with NSBM Green University). 
Final year student seeking Software Engineer Internship to gain hands-on experience. Passionate about software development and committed to 
becoming a skilled engineer with expertise in full-stack development.

EDUCATION
BSc(Hons) Computer Science
Plymouth University, UK (Affiliated NSBM Green University)
Expected Graduation: August 2025
Current Grade: 63.5% (Second Upper Class)

Royal College Wayamba
GCE A/L Examination - 2020 (Physical Science Stream)

TECHNICAL SKILLS
• Frontend: React.js, JavaScript, HTML, CSS, TypeScript, Tailwind CSS
• Backend: Node.js, Java-Spring Boot, C#
• Databases: SQL, Firebase, MongoDB
• Tools & Platforms: GitHub, Postman, Git
• Other: RESTful APIs, CRUD Operations, Responsive Design

PROJECTS

LUMIMIND - Assess Mental Status
A responsive web application designed to assess users' mental health through interactive tests for stress, personality, and relationship levels.
Features include real-time result analysis, personalized insights, a user community forum, and an admin panel for quiz and content moderation.
Technologies: React.js, Node.js, Firebase
GitHub: github.com/enghirushan

The SKY Shop - Inventory Management System
A comprehensive inventory management system with full CRUD operations, SQL database integration, and data management capabilities.
Features include update, retrieve, and delete operations with efficient data handling.
Technologies: C#, SQL
GitHub: github.com/enghirushan/The-Sky-Shop

Home Electricity Calculator
An electricity bill calculator system with CRUD operations for efficient billing management and calculations.
Technologies: C#
GitHub: github.com/enghirushan

POS System (In Development)
A Point of Sale system developed using Java Spring Boot. Manages customer information with full CRUD operations. 
Uses layered architecture with DTOs, service interfaces, and entity classes for clean separation of concerns.
Technologies: Java Spring Boot, MySQL, Postman

CERTIFICATIONS & LEARNING
• Java - LinkedIn Learning
• Introduction to Programming Using HTML and CSS - LinkedIn Learning
• Objects in JavaScript: A Dynamic Data Structure - LinkedIn Learning
• Learning ECMAScript 6+ (ES6+) - LinkedIn Learning
• Practical CSS for No-Coders - LinkedIn Learning

EXPERIENCE & VOLUNTEERING

React Training Developer (May 2024)
IEEE NSBM Student Branch
Developed and collaborated on website projects for NSBM IEEE Diothan 4.0.
Gained insights into teamwork and software development best practices.

Hackathon Participant (October 2022)
FOSS Community of NSBM
Competed in university-organized hackathon as first-year student.
Applied problem-solving and teamwork to build project prototypes.

Senior Prefect (2018-2020)
Royal College Wayamba
Led student initiatives, maintained discipline, and coordinated school events.
Acted as bridge between students and administration, fostering leadership and teamwork.

REFERENCES

Gimsara Kulathunga - Software Engineer, IFS R&D International (Pvt) Ltd
Email: gimsara.kulathunga@ifs.com | Phone: 0717065042

K K Pavithra Subashini - Head of Industry Collaboration Unit, Faculty of Computing, NSBM Green University
Senior Lecturer, Faculty of Computing | Phone: 0776181390 | Email: pavithras@nsbm.ac.lk
    `.trim()

    const element = document.createElement("a")
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(resumeContent))
    element.setAttribute("download", "Haritha_Ilangasinghe_Resume.txt")
    element.style.display = "none"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Haritha ilangasinghe, a passionate full-stack developer pursuing a Bachelor's degree in Computer
              Science at Plymouth University (affiliated with NSBM Green University). Currently in my final year and
              seeking Software Engineer Internship opportunities.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans across React.js, Node.js, Java-Spring Boot, and C#. I've successfully delivered
              projects in mental health tech (LUMIMIND), inventory management, and billing systems. I'm committed to
              writing clean, maintainable code and continuously learning new technologies.
            </p>

            <div className="pt-4">
              <button
                onClick={handleDownloadResume}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
              >
                Download Resume
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                <p className="text-sm text-muted-foreground">Graduation</p>
                <p className="font-semibold text-foreground">August 2025</p>
              </div>
              <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                <p className="text-sm text-muted-foreground">Current Grade</p>
                <p className="font-semibold text-foreground">63.5% (Upper Second)</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-lg bg-accent/10 border border-accent/20">
              <h3 className="font-semibold text-lg mb-3">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React.js",
                  "Node.js",
                  "JavaScript",
                  "TypeScript",
                  "Java",
                  "C#",
                  "SQL",
                  "Firebase",
                  "Spring Boot",
                  "Tailwind CSS",
                  "Git",
                  "REST APIs",
                ].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
