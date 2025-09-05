import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Trophy, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/abstract-circuit-pattern-robotics.jpg')] opacity-5 bg-cover bg-center" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Where Innovation Meets <span className="text-primary">Automation</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Join NIT's premier robotics club where engineering students build the future through cutting-edge robotics
            projects, competitions, and collaborative innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3">
              Join Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              View Projects
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border">
              <Users className="h-8 w-8 text-primary mb-2" />
              <div className="text-2xl font-bold text-foreground">150+</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border">
              <Trophy className="h-8 w-8 text-primary mb-2" />
              <div className="text-2xl font-bold text-foreground">25+</div>
              <div className="text-sm text-muted-foreground">Competition Wins</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border">
              <Zap className="h-8 w-8 text-primary mb-2" />
              <div className="text-2xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
