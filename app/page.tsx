import Header from "@/components/header"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import About from "@/components/about"
import ResumePDF from "@/components/resume-pdf"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Projects />
      <About />
      <ResumePDF />
      <Contact />
      <Footer />
    </main>
  )
}
