import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const tiers = [
  {
    name: "Bronze Partner",
    price: "₹50,000",
    period: "per year",
    description: "Perfect for startups and small companies looking to connect with emerging talent",
    features: [
      "Logo placement on website",
      "Access to resume database",
      "2 workshop sponsorships",
      "Quarterly newsletter mentions",
      "Priority job posting access",
    ],
    popular: false,
  },
  {
    name: "Silver Partner",
    price: "₹1,50,000",
    period: "per year",
    description: "Ideal for growing companies seeking deeper engagement and collaboration opportunities",
    features: [
      "All Bronze benefits",
      "Dedicated recruitment events",
      "Project collaboration opportunities",
      "Mentorship program access",
      "Competition sponsorship rights",
      "Quarterly progress reports",
    ],
    popular: true,
  },
  {
    name: "Gold Partner",
    price: "₹3,00,000",
    period: "per year",
    description: "Comprehensive partnership for industry leaders committed to innovation and talent development",
    features: [
      "All Silver benefits",
      "Custom project development",
      "Research collaboration access",
      "Executive advisory board seat",
      "Exclusive networking events",
      "Co-branded initiatives",
      "Priority facility access",
    ],
    popular: false,
  },
]

export function PartnershipTiers() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Partnership Tiers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose the partnership level that best fits your organization's goals and budget
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative ${tier.popular ? "border-primary shadow-lg scale-105" : "border-border"} bg-background`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-foreground mb-2">{tier.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground">/{tier.period}</span>
                </div>
                <p className="text-muted-foreground text-sm text-pretty">{tier.description}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${tier.popular ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"}`}
                  variant={tier.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
