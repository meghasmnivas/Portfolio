"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Testing Skills",
    skills: [
      "Manual Testing",
      "Test Case Design",
      "Test Plan Creation",
      "Defect Tracking and Reporting",
      "Regression Testing",
      "Functional Testing",
      "User Acceptance Testing (UAT)",
      "UI Testing",
      "Mobile App Testing",
    ],
  },
  {
    title: "API Testing",
    skills: ["Swagger", "Postman", "REST API Testing", "Data Validation", "Integration Testing"],
  },
  {
    title: "Tools & Technologies",
    skills: [
      "JIRA",
      "Bugzilla",
      "Azure DevOps",
      "Agile Methodologies",
      "Sprint Planning",
      "Cross-functional Collaboration",
    ],
  },
]

export function Skills() {
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

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center space-y-2">
            <div className="text-sm text-primary font-medium tracking-wider uppercase">Skills</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Technical Expertise</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="p-6 bg-card border-border hover:border-primary/50 transition-colors duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="text-sm text-muted-foreground py-1 px-3 bg-muted/50 rounded-md">
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
