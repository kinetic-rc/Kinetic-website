import { PartnershipBenefits } from "@/components/partnership-benefits"
import { PartnerLogos } from "@/components/partner-logos"
import { Button } from "@/components/ui/button"
import { ArrowRight, Handshake } from "lucide-react"

export default function CollaborationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-card to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Handshake className="h-8 w-8 text-primary" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Building the Future, <span className="text-primary">Together</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Partner with Kinetic to access top engineering talent, drive innovation in robotics, and shape the future
              of automation technology. Join industry leaders who trust us to deliver cutting-edge solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3">
                Learn About Partnerships
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Download Partnership Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <PartnershipBenefits />
      <PartnerLogos />

      {/* Final CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
            Ready to Innovate Together?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty">
            Join the companies already partnering with Kinetic to push the boundaries of robotics and automation.
          </p>
          <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
            Explore Partnership Opportunities
          </Button>
        </div>
      </section>
    </>
  )
}
