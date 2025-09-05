import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Autonomous Navigation Robot",
    description:
      "AI-powered robot capable of autonomous navigation through complex environments using computer vision and machine learning algorithms.",
    image: "/autonomous-robot-navigation.jpg",
    tags: ["AI", "Computer Vision", "ROS"],
    status: "Completed",
  },
  {
    title: "Robotic Arm Manipulation",
    description:
      "6-DOF robotic arm with precise object manipulation capabilities for industrial automation applications.",
    image: "/robotic-arm-industrial.jpg",
    tags: ["Automation", "Control Systems", "IoT"],
    status: "In Progress",
  },
  {
    title: "Swarm Robotics System",
    description:
      "Coordinated multi-robot system demonstrating collective intelligence and distributed problem-solving capabilities.",
    image: "/swarm-robotics-multiple-robots.jpg",
    tags: ["Swarm Intelligence", "Distributed Systems", "Coordination"],
    status: "Research Phase",
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our latest innovations in robotics and automation technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 bg-card border-border">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      project.status === "Completed"
                        ? "bg-primary text-primary-foreground"
                        : project.status === "In Progress"
                          ? "bg-accent text-accent-foreground"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
