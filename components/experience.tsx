"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

const experience = {
  company: "Kalki Communication Technologies",
  role: "Software QA Engineer",
  period: "Sept 2022 - Present",
  location: "Kochi, India",
  responsibilities: [
    "Designed and executed comprehensive test plans, test cases, and test scripts for various software applications",
    "Conducted manual testing, including regression, integration, system, and user acceptance testing (UAT)",
    "Reported, tracked and verified defects using bug-tracking tools like JIRA, Bugzilla, and Azure DevOps",
    "Collaborated with cross-functional teams, including developers, product managers, and business analysts",
    "Participated in Agile ceremonies such as daily stand-ups, sprint planning, and retrospectives",
    "Reviewed product changes and coordinated with developers to implement and evaluate test cases",
    "Analyzed functional and non-functional requirements and designed effective test plans",
  ],
}

export function Experience() {
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

    const element = document.getElementById("experience")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center space-y-2">
            <div className="text-sm text-primary font-medium tracking-wider uppercase">Experience</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Professional Journey</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 timeline-line"></div>

            {/* Timeline item */}
            <div className="relative flex items-start gap-8">
              {/* Timeline dot */}
              <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-8 h-8 bg-primary-foreground rounded-full"></div>
              </div>

              {/* Content */}
              <Card className="flex-1 p-6 bg-card border-border">
                <div className="space-y-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{experience.role}</h3>
                      <p className="text-primary font-medium">{experience.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <div>{experience.period}</div>
                      <div>{experience.location}</div>
                    </div>
                  </div>

                  <ul className="space-y-2 text-muted-foreground">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
