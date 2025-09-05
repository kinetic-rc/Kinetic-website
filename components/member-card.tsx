import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface MemberCardProps {
  name: string
  role: string
  quote: string
  image: string
  skills?: string[]
}

export function MemberCard({ name, role, quote, image, skills = [] }: MemberCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 bg-card border-border overflow-hidden">
      <div className="relative">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardContent className="p-6">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
          <p className="text-primary font-medium">{role}</p>
        </div>

        <blockquote className="text-sm text-muted-foreground italic text-center mb-4 text-pretty">"{quote}"</blockquote>

        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
