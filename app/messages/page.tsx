import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Messages from Leadership",
  description:
    "Read inspiring messages from NIT Delhi's Director, Dean R&D, and faculty coordinators about Kinetic Robotics Club's vision and achievements.",
}

export default function MessagesPage() {
  const messages = [
    {
      name: "Prof. Dr. Rajesh Kumar",
      title: "Director, NIT Delhi",
      image: "/professional-director-portrait.jpg",
      message:
        "Kinetic represents the pinnacle of innovation and technical excellence at NIT Delhi. This robotics club has consistently demonstrated exceptional capabilities in research, development, and practical applications of robotics technology. I am proud to see our students pushing the boundaries of what's possible and contributing to India's technological advancement through their groundbreaking work in automation and robotics.",
    },
    {
      name: "Dr. Suresh Malhotra",
      title: "Dean Research & Development",
      image: "/academic-dean-professional-portrait.jpg",
      message:
        "The research initiatives undertaken by Kinetic have been truly remarkable. Their interdisciplinary approach to robotics, combining mechanical engineering, computer science, and artificial intelligence, exemplifies the kind of innovative thinking we strive to foster at NIT Delhi. The club's contributions to both academic research and industry applications make them invaluable ambassadors of our institution's commitment to technological excellence.",
    },
    {
      name: "Dr. Amit Gautam",
      title: "Club Coordinator & Associate Professor",
      image: "/engineering-professor-portrait.jpg",
      message:
        "Working with the Kinetic team has been an incredibly rewarding experience. These students bring passion, dedication, and innovative thinking to every project they undertake. Their ability to translate theoretical concepts into practical robotic solutions is exceptional. I am constantly impressed by their collaborative spirit and their commitment to pushing the boundaries of robotics technology.",
    },
    {
      name: "Dr. Leladhar Singh",
      title: "Club Coordinator & Assistant Professor",
      image: "/robotics-professor-portrait.jpg",
      message:
        "Kinetic has established itself as a center of excellence for robotics education and innovation. The club members demonstrate remarkable technical skills and creative problem-solving abilities. Their projects not only showcase advanced engineering principles but also address real-world challenges. It's inspiring to mentor such talented individuals who are shaping the future of robotics and automation in India.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Messages from Leadership</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from the distinguished faculty and leadership of NIT Delhi about their vision for Kinetic and the
            future of robotics education and research.
          </p>
        </div>
      </section>

      {/* Messages Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:gap-12">
            {messages.map((person, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Image Section */}
                    <div className="md:col-span-1 bg-muted/20 flex items-center justify-center p-8">
                      <div className="text-center">
                        <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                          <Image
                            src={person.image || "/placeholder.svg"}
                            alt={person.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">{person.name}</h3>
                        <p className="text-primary font-medium text-sm">{person.title}</p>
                      </div>
                    </div>

                    {/* Message Section */}
                    <div className="md:col-span-2 p-8 flex items-center">
                      <div>
                        <div className="text-4xl text-primary/30 mb-4">"</div>
                        <p className="text-muted-foreground leading-relaxed text-lg">{person.message}</p>
                        <div className="text-4xl text-primary/30 text-right mt-4">"</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Vision</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of the robotics revolution at NIT Delhi. Explore our projects and discover opportunities for
            collaboration, research, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/gallery"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Explore Our Projects
            </a>
            <a
              href="/collaborations"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted/50 transition-colors"
            >
              Explore Partnerships
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
