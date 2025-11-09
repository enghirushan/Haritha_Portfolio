"use client"

import { Mail, Phone, MapPin, Github, Linkedin, Code } from "lucide-react"

export default function Contact() {
  const contactLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "eng.hirushan@gmail.com",
      href: "mailto:eng.hirushan@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+94 70 570 6250",
      href: "tel:+94705706250",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Colombo, Sri Lanka",
      href: "#",
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "github.com/enghirushan",
      href: "https://github.com/enghirushan",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Haritha Ilangasinghe",
      href: "https://www.linkedin.com/in/haritha-ilangasinghe-953569236/",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "LeetCode",
      value: "2qZRUHDAIH",
      href: "https://leetcode.com/u/2qZRUHDAIH/",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out! I'm always interested in hearing about new projects and opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg bg-background border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
            >
              <div className="text-primary mb-3 group-hover:scale-110 transition-transform">{link.icon}</div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">{link.title}</h3>
              <p className="text-muted-foreground text-sm break-all">{link.value}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center">
          <h3 className="text-2xl font-semibold mb-2">Open to Opportunities</h3>
          <p className="text-muted-foreground">
            I'm actively seeking Software Engineer Internship positions. Let's create something amazing together!
          </p>
        </div>
      </div>
    </section>
  )
}
