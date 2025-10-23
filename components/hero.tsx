"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Mail, Phone, MapPin } from "lucide-react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div
          className={`space-y-8 ${
            isVisible ? "animate-slide-in-left" : "opacity-0"
          }`}
        >
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Megha Sunil
            </h1>
            <h2 className="text-2xl lg:text-3xl text-primary font-medium">
              QA Engineer
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              I ensure software quality through comprehensive testing
              strategies, meticulous test case design, and collaborative
              problem-solving.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2">
              <Mail className="w-4 h-4" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 bg-transparent"
            >
              <Github className="w-4 h-4" />
              View Work
            </Button>
          </div>

          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              meghasmnivas@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +91 9895076590
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Kochi, Kerala - India
            </div>
          </div>
        </div>

        <div
          className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
        >
          <div className="relative">
            <div className="w-full max-w-md mx-auto aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              {/* <div className="flex items-center gap-2">
                <img
                  src="/images/ME.jpg"
                  alt="MS Logo"
                  className="h-100 w-100 object-contain"
                />
              </div> */}
              <div className="w-full max-w-md mx-auto aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
                <img
                  src="/images/1000278421.jpg"
                  alt="MS Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
