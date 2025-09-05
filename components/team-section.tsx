import { MemberCard } from "./member-card"

interface TeamMember {
  name: string
  role: string
  quote: string
  image: string
  skills?: string[]
}

interface TeamSectionProps {
  title: string
  description: string
  members: TeamMember[]
}

export function TeamSection({ title, description, members }: TeamSectionProps) {
  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{title}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {members.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            quote={member.quote}
            image={member.image}
            skills={member.skills}
          />
        ))}
      </div>
    </section>
  )
}
