"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";

const timelineData = [
  {
    type: "experience",
    title: "Software QA Engineer",
    organization: "Kalki Communication Technologies",
    logo: "/images/kalkitech-logo.webp",
    period: "Sept 2022 - Present",
    location: "Kochi, India",
    details: [
      "Designed and executed comprehensive test plans, test cases, and test scripts for various software applications",
      "Conducted manual testing, including regression, integration, system, and user acceptance testing (UAT)",
      "Reported, tracked and verified defects using bug-tracking tools like JIRA, Bugzilla, and Azure DevOps",
      "Collaborated with cross-functional teams, including developers, product managers, and business analysts",
      "Participated in Agile ceremonies such as daily stand-ups, sprint planning, and retrospectives",
      "Reviewed product changes and coordinated with developers to implement and evaluate test cases",
      "Analyzed functional and non-functional requirements and designed effective test plans",
    ],
    startYear: 2022,
  },
  {
    type: "education",
    title: "Master Of Computer Applications",
    organization: "Cochin University of Science and Technology",
    subtitle: "Cochin University College of Engineering Kuttanad",
    logo: "/images/Cusat.png",
    period: "2020 - 2022",
    location: "Kochi, Kerala",
    cgpa: "9.45 / 10",
    startYear: 2020,
  },
  {
    type: "education",
    title: "Bachelor of Science in Physics",
    organization: "University of Kerala",
    subtitle: "Sree Narayana College for Women",
    logo: "/images/UK.png",
    period: "2017 - 2020",
    location: "Kollam, Kerala",
    cgpa: "8.46 / 10",
    startYear: 2017,
  },
];

const sortedTimelineData = timelineData.sort((a, b) => a.startYear - b.startYear);

export function Timeline() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("timeline");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div
          className={`space-y-12 transition-all duration-700 ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
          }`}
        >
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="text-sm text-primary font-medium tracking-wider uppercase">
              Timeline
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Education & Experience
            </h2>
          </div>

          {/* Timeline Body */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-12">
              {sortedTimelineData.map((item, index) => (
                <div key={index} className="relative flex flex-col md:flex-row md:items-center">
                  
                  {/* Icon Circle */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10 w-16 h-16 bg-primary items-center justify-center rounded-full">
                    {item.type === "education" ? (
                      <GraduationCap className="w-8 h-8 text-primary-foreground" />
                    ) : (
                      <Briefcase className="w-8 h-8 text-primary-foreground" />
                    )}
                  </div>

                  {/* Timeline Content */}
                  <div
                    className={`w-full md:w-5/12 ${
                      item.type === "education"
                        ? "md:pl-8 md:ml-auto"
                        : "md:pr-8 md:mr-auto"
                    }`}
                  >
                    <Card className="p-6 bg-card border border-border shadow-sm">
                      <div className="space-y-4">
                        {/* Title + Org */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            {item.logo && (
                              <img
                                src={item.logo}
                                alt={`${item.organization} logo`}
                                className="w-8 h-8 object-contain rounded-full"
                              />
                            )}
                            <div>
                              <h3 className="text-lg font-semibold text-foreground">
                                {item.title}
                              </h3>
                              <p className="text-primary font-medium">
                                {item.organization}
                              </p>
                            </div>
                          </div>

                          {/* Optional Subtitle */}
                          {item.subtitle && (
                            <p className="text-sm text-muted-foreground">
                              {item.subtitle}
                            </p>
                          )}

                          {/* Period, Location, CGPA */}
                          <div className="text-sm text-muted-foreground space-y-0.5">
                            <div>{item.period}</div>
                            <div>{item.location}</div>
                            {item.cgpa && (
                              <div className="text-primary font-medium">
                                CGPA: {item.cgpa}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Details (only for experience) */}
                        {item.details && (
                          <ul className="space-y-2 text-muted-foreground">
                            {item.details.map((detail, detailIndex) => (
                              <li
                                key={detailIndex}
                                className="flex items-start gap-2"
                              >
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm leading-relaxed">
                                  {detail}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
