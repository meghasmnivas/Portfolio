"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "meghasmnivas@gmail.com",
    href: "mailto:meghasmnivas@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9895076590",
    href: "tel:+919895076590",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kochi, Kerala - India",
    href: null, // not clickable
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/meghasunil/",
  },
];

export function Contact() {
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

    const element = document.getElementById("contact");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-20 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div
          className={`space-y-12 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {/* Section Heading */}
          <div className="text-center space-y-4">
            <div className="text-sm text-primary font-medium tracking-wider uppercase">
              Contact
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              I'm always interested in discussing new opportunities and
              challenging projects. Feel free to reach out if you'd like to
              collaborate.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              const cardContent = (
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">
                      {contact.label}
                    </p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">
                        {contact.value}
                      </p>
                    )}
                  </div>
                </div>
              );

              return (
                <Card
                  key={contact.label}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-colors duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {cardContent}
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Button size="lg" className="gap-2">
              <Mail className="w-4 h-4" />
              Send Message
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>&copy; 2024 Megha Sunil. All rights reserved.</p>
      </footer>
    </section>
  );
}
