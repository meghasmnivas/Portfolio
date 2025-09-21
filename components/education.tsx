"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

const education = [
  {
    degree: "Master Of Computer Applications",
    institution: "Cochin University of Science and Technology",
    college: "Cochin University College of Engineering Kuttanad",
    period: "2020 - 2022",
    location: "Kochi, Kerala",
    cgpa: "9.45 / 10",
  },
  {
    degree: "Bachelor of Science in Physics",
    institution: "University of Kerala",
    college: "Sree Narayana college for Women",
    period: "2017 - 2020",
    location: "Kollam, Kerala",
    cgpa: "8.46 / 10",
  },
]

export function Education() {
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

    const element = document.getElementById("education")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" className="py-20 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center space-y-2">
            <div className="text-sm text-primary font-medium tracking-wider uppercase">Education</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Academic Background</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 timeline-line"></div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  {/* Timeline dot */}
                  <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-8 h-8 bg-primary-foreground rounded-full"></div>
                  </div>

                  {/* Content */}
                  <Card className="flex-1 p-6 bg-card border-border">
                    <div className="space-y-3">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                          <p className="text-primary font-medium">{edu.institution}</p>
                          <p className="text-sm text-muted-foreground">{edu.college}</p>
                        </div>
                        <div className="text-sm text-muted-foreground text-right">
                          <div>{edu.period}</div>
                          <div>{edu.location}</div>
                          <div className="text-primary font-medium mt-1">CGPA: {edu.cgpa}</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
