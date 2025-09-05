import { TeamSection } from "@/components/team-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const executiveTeam = [
  {
    name: "Arjun Sharma",
    role: "President",
    quote:
      "Leading Kinetic has taught me that innovation happens when passionate minds collaborate towards a common vision.",
    image: "/placeholder.svg?height=300&width=300&text=Arjun+Sharma",
    skills: ["Leadership", "Project Management", "Robotics"],
  },
  {
    name: "Priya Patel",
    role: "Vice President",
    quote:
      "Every robot we build is a step towards solving real-world problems and making technology accessible to everyone.",
    image: "/placeholder.svg?height=300&width=300&text=Priya+Patel",
    skills: ["Strategy", "Operations", "AI/ML"],
  },
  {
    name: "Rahul Kumar",
    role: "Technical Lead",
    quote:
      "The beauty of robotics lies in bringing together hardware, software, and creativity to create something truly amazing.",
    image: "/placeholder.svg?height=300&width=300&text=Rahul+Kumar",
    skills: ["Embedded Systems", "Control Theory", "ROS"],
  },
  {
    name: "Sneha Reddy",
    role: "Secretary",
    quote:
      "Organizing events and workshops has shown me how knowledge sharing accelerates innovation in our community.",
    image: "/placeholder.svg?height=300&width=300&text=Sneha+Reddy",
    skills: ["Event Management", "Communication", "Documentation"],
  },
]

const technicalLeads = [
  {
    name: "Vikram Singh",
    role: "AI/ML Lead",
    quote:
      "Machine learning in robotics is about teaching machines to perceive and interact with the world intelligently.",
    image: "/placeholder.svg?height=300&width=300&text=Vikram+Singh",
    skills: ["Computer Vision", "Deep Learning", "Python"],
  },
  {
    name: "Ananya Gupta",
    role: "Hardware Lead",
    quote:
      "Designing robust hardware is the foundation that enables all the amazing software capabilities we dream of.",
    image: "/placeholder.svg?height=300&width=300&text=Ananya+Gupta",
    skills: ["PCB Design", "Sensors", "Mechanical Design"],
  },
  {
    name: "Karthik Nair",
    role: "Software Lead",
    quote: "Clean, efficient code is what transforms brilliant ideas into working robots that can change the world.",
    image: "/placeholder.svg?height=300&width=300&text=Karthik+Nair",
    skills: ["C++", "ROS", "System Architecture"],
  },
  {
    name: "Meera Joshi",
    role: "Research Lead",
    quote:
      "Research pushes the boundaries of what's possible, turning today's science fiction into tomorrow's reality.",
    image: "/placeholder.svg?height=300&width=300&text=Meera+Joshi",
    skills: ["Research", "Publications", "Innovation"],
  },
]

const activeMembers = [
  {
    name: "Aditya Verma",
    role: "Robotics Engineer",
    quote: "Working on autonomous systems has taught me that the smallest details can make the biggest difference.",
    image: "/placeholder.svg?height=300&width=300&text=Aditya+Verma",
    skills: ["Autonomous Systems", "Sensors", "Navigation"],
  },
  {
    name: "Ishita Sharma",
    role: "Computer Vision Engineer",
    quote: "Teaching robots to see and understand the world is like giving them a superpower.",
    image: "/placeholder.svg?height=300&width=300&text=Ishita+Sharma",
    skills: ["OpenCV", "Image Processing", "Object Detection"],
  },
  {
    name: "Rohan Mehta",
    role: "Control Systems Engineer",
    quote: "Precision control is what makes the difference between a machine and a truly intelligent robot.",
    image: "/placeholder.svg?height=300&width=300&text=Rohan+Mehta",
    skills: ["PID Control", "State Estimation", "MATLAB"],
  },
  {
    name: "Kavya Iyer",
    role: "Embedded Systems Engineer",
    quote: "The magic happens when hardware and software work in perfect harmony to create intelligent behavior.",
    image: "/placeholder.svg?height=300&width=300&text=Kavya+Iyer",
    skills: ["Microcontrollers", "Real-time Systems", "IoT"],
  },
  {
    name: "Aryan Das",
    role: "Mechanical Engineer",
    quote: "Great robots start with great mechanical design - form and function must work together seamlessly.",
    image: "/placeholder.svg?height=300&width=300&text=Aryan+Das",
    skills: ["CAD Design", "3D Printing", "Mechanisms"],
  },
  {
    name: "Nisha Agarwal",
    role: "UI/UX Designer",
    quote: "Making complex robotics interfaces intuitive helps bridge the gap between humans and machines.",
    image: "/placeholder.svg?height=300&width=300&text=Nisha+Agarwal",
    skills: ["Interface Design", "User Research", "Prototyping"],
  },
]

export default function MembersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-card to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Meet Our <span className="text-primary">Innovators</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              The brilliant minds behind Kinetic's groundbreaking robotics projects. Our diverse team of engineers,
              researchers, and innovators work together to push the boundaries of what's possible in robotics and
              automation.
            </p>
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <TeamSection
          title="Executive Team"
          description="The leadership driving Kinetic's vision and strategic direction"
          members={executiveTeam}
        />

        <TeamSection
          title="Technical Leads"
          description="Expert engineers leading specialized domains and mentoring the next generation"
          members={technicalLeads}
        />

        <TeamSection
          title="Active Members"
          description="Talented engineers and researchers contributing to cutting-edge projects"
          members={activeMembers}
        />
      </div>

      {/* Join CTA Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Ready to Join Our Team?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            We're always looking for passionate individuals who want to make a difference in robotics and automation.
            Explore our projects and be part of something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/gallery">View Our Work</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Link href="/collaborations">Learn About Partnerships</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
