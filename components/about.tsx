"use client"

import { useEffect, useState } from "react"

export function About() {
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

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="space-y-2">
            <div className="text-sm text-primary font-medium tracking-wider uppercase">About</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Quality Assurance Professional</h2>
          </div>

          <div className="prose prose-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a dedicated QA Engineer passionate about ensuring software quality through comprehensive testing
              methodologies. With expertise in manual testing, API validation, and defect tracking, I collaborate with
              cross-functional teams to deliver robust, user-friendly applications.
            </p>
            <p>
              Currently working at Kalki Communication Technologies, I specialize in designing and executing test plans,
              conducting various types of testing including regression, integration, and user acceptance testing. My
              experience spans web and mobile applications, with a strong focus on functional and non-functional
              requirements analysis.
            </p>
            <p>
              I thrive in Agile environments, participating actively in sprint ceremonies and maintaining clear
              communication with developers, product managers, and business analysts to ensure seamless project
              delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
