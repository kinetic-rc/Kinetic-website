const partners = [
  { name: "TechCorp", logo: "/placeholder.svg?height=80&width=160&text=TechCorp" },
  { name: "InnovateLabs", logo: "/placeholder.svg?height=80&width=160&text=InnovateLabs" },
  { name: "RoboSystems", logo: "/placeholder.svg?height=80&width=160&text=RoboSystems" },
  { name: "FutureTech", logo: "/placeholder.svg?height=80&width=160&text=FutureTech" },
  { name: "AutomationPro", logo: "/placeholder.svg?height=80&width=160&text=AutomationPro" },
  { name: "SmartSolutions", logo: "/placeholder.svg?height=80&width=160&text=SmartSolutions" },
  { name: "NextGen Robotics", logo: "/placeholder.svg?height=80&width=160&text=NextGen" },
  { name: "AI Dynamics", logo: "/placeholder.svg?height=80&width=160&text=AI+Dynamics" },
]

export function PartnerLogos() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join the growing network of companies partnering with Kinetic to drive innovation in robotics
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-card rounded-lg border border-border hover:shadow-md transition-shadow"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="max-h-12 w-auto opacity-70 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
