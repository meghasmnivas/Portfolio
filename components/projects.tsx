"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Visual Cloud and Visual Installer",
    period: "Aug 2024 - Present",
    description:
      "Developed and executed test plans to ensure comprehensive testing and defect resolution for both web and mobile applications.",
    highlights: [
      "Both web and mobile application testing",
      "Performed API testing using Swagger to validate data interactions",
      "Comprehensive testing and defect resolution",
    ],
    tools: ["Swagger", "Azure DevOps"],
  },
  {
    title: "LC Acuity (Local Connect)",
    period: "May 2023 - Nov 2024",
    description:
      "Developed and executed test plans to ensure integration and functionality for the LC Acuity component.",
    highlights: [
      "Integration and functionality testing",
      "API testing using Swagger for data validation",
      "Functional, regression, and integration testing",
    ],
    tools: ["Swagger", "Azure DevOps"],
  },
  {
    title: "OETC (Oman Electricity Transmission Company)",
    period: "March 2024 - June 2024",
    description: "Designed and executed test plans to ensure platform functionality and performance.",
    highlights: [
      "Platform functionality and performance testing",
      "UI, functional, regression, and integration testing",
      "Defect identification and resolution",
    ],
    tools: ["Bugzilla"],
  },
  {
    title: "UFDSCT",
    period: "June 2024 - Aug 2024",
    description: "Developed and executed test plans to ensure comprehensive testing and defect resolution.",
    highlights: ["Comprehensive testing strategy", "Defect resolution and tracking", "Quality assurance processes"],
    tools: ["JIRA"],
  },
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center space-y-2">
            <div className="text-sm text-primary font-medium tracking-wider uppercase">Projects</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Recent Work</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold text-foreground text-balance">{project.title}</h3>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{project.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>

                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
