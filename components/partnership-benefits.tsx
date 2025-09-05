import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Lightbulb, Trophy, Target, Handshake, Zap } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Access to Top Talent",
    description:
      "Connect with NIT's brightest engineering minds for internships, full-time roles, and project collaborations.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Partnership",
    description: "Collaborate on cutting-edge research projects and prototype development with our experienced teams.",
  },
  {
    icon: Trophy,
    title: "Brand Visibility",
    description: "Gain exposure through competitions, events, workshops, and our growing community of 150+ members.",
  },
  {
    icon: Target,
    title: "Custom Solutions",
    description: "Work with our teams to develop tailored robotics solutions for your specific industry challenges.",
  },
  {
    icon: Handshake,
    title: "Long-term Partnership",
    description: "Build lasting relationships with the next generation of robotics engineers and researchers.",
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description:
      "Leverage our state-of-the-art facilities and expertise for fast, cost-effective proof-of-concept development.",
  },
]

export function PartnershipBenefits() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Why Partner with Kinetic?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Join forces with India's premier robotics club and unlock opportunities for innovation, talent acquisition,
            and technological advancement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-card border-border">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-pretty">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
